var CIDR_24 = CPANEL.net.cidr_netmask_to_number(24);
var CIDR_30 = CPANEL.net.cidr_netmask_to_number(30);

// WHM addip() disallows range notation except the rightmost octet
// as well as netmasks lower than 24 bits and higher than 30 bits
// and IPs that start with 127.

// The linter will be turned back on during Angularization
/* eslint-disable */
function whm_range_to_min_max(txt) {
    if (/(?:^|[^\d.])127/.test(txt)) return;

    if (/-.*\./.test(txt)) return;
    var mask_match = /\/(.*)/.exec(txt);
    if (mask_match) {
        var netmask = mask_match[1];
        if (/\./.test(netmask)) {
            netmask = CPANEL.net.ipv4_to_number(netmask);
            if (netmask < CIDR_24) return;
            if (netmask > CIDR_30) return;
        } else if ((netmask < 24) || (netmask > 30)) {
            return;
        }
    }

    return CPANEL.net.ipv4_range_to_min_max(txt);
}

function whm_validate_ip(txt) {
    return !/^127/.test(txt) && CPANEL.validate.ip(txt);
}

var _range;

function _refresh_range() {
    var previous_range = _range;
    _range = whm_range_to_min_max(DOM.get("ip-range").value.replace(/\s+/, ""));
    if ((previous_range === undefined) || (!previous_range !== !_range)) {
        DOM.get("ip-range-exclusions").disabled = !_range;
    }
    return _range;
};

function ip_range_is_valid() {
    var range = _refresh_range();
    return !!range || whm_validate_ip(DOM.get("ip-range").value.trim());
}

function ip_range_fits_netmask() {
    var range = _refresh_range();
    if (range) {
        var netmask_count = Math.pow(2, 32) - CPANEL.net.ipv4_to_number(DOM.get("netmask-select").value);
        var min = range[0] - (range[0] % netmask_count);
        var max = min + netmask_count - 1;
        return (range[1] <= max);
    } else {
        return true;
    }
}

function get_excludes() {
    var val = DOM.get("ip-range-exclusions").value.trim();

    return val && val.replace(/[^\S\r\n]+/g, "").split(/[\r\n,;]+/);
}

function excludes_are_valid() {
    var range = _refresh_range();

    if (!range) return;

    var excl = get_excludes();
    if (!excl) return true;

    for (var e = excl.length - 1; e >= 0; e--) {
        var cur_excl = excl[e];

        if (!cur_excl) {
            excl.splice(e, 1);
            continue;
        }

        var this_range = whm_range_to_min_max(cur_excl);
        if (this_range) {
            if (this_range[0] < range[0] || this_range[1] > range[1]) {
                return false;
            }
        } else {
            if (!whm_validate_ip(cur_excl)) return false;
            var num = CPANEL.net.ipv4_to_number(cur_excl);
            if ((num < range[0]) || (num > range[1])) return false;
        }
    }

    return true;
}

function expand_range(range) {
    var min_max = whm_range_to_min_max(range);
    if (!min_max) return;

    var ips = [];
    for (var n = min_max[0]; n <= min_max[1]; n++) {
        ips.push(CPANEL.net.number_to_ipv4(n));
    }

    return ips;
}

//By this point, we know everything is valid.
var ERROR_NOTICE;

function save(form) {
    form = DOM.get(form);

    var range = _refresh_range();
    var overlay = new CPANEL.ajax.Page_Progress_Overlay(null, {
        covers: form,
        show_status: true,
        status_html: range ? LOCALE.maketext("Adding IP range …") : LOCALE.maketext("Adding IP …")
    });
    overlay.render(document.body);
    overlay.show();

    var form_values = YAHOO.widget.Dialog.prototype.getData.apply({
        form: form
    });

    var ip = form_values.new_ip_range.trim();

    var ipv4_mask_match = /\/(.*\..*)$/.exec(ip);
    if (ipv4_mask_match) {
        var bits = CPANEL.net.ipv4_to_number(ipv4_mask_match[1]).toString(2).match(/^1+/)[0].length;
        ip = ip.replace(/\/.*$/, "/" + bits);
    }

    var ip_data = {
        ips: ip,
        netmask: form_values.netmask
    };

    var range = _refresh_range();

    if (range) {
        var excludes = get_excludes();
        for (var e = excludes.length - 1; e >= 0; e--) {
            var expanded = expand_range(excludes[e]);
            if (expanded) {
                excludes.splice.apply(excludes, [e, 1].concat(expanded));
            }
        }

        if (excludes) ip_data.excludes = excludes.join(",");
    }

    CPANEL.api({
        func: "addips",
        data: ip_data,
        callback: CPANEL.ajax.build_page_callback(
            function(o) {
                if (ERROR_NOTICE && ERROR_NOTICE.element) {
                    var old_notice = ERROR_NOTICE;
                    ERROR_NOTICE = null;
                    CPANEL.animate.slide_up(old_notice.element)
                        .onComplete.subscribe(old_notice.destroy, old_notice, true);
                }

                new CPANEL.ajax.Dynamic_Notice({
                    level: "success",
                    content: LOCALE.maketext("Success!")
                });
            }, {
                hide_on_return: overlay
            }
        )
    });
}

_refresh_range();

var ip_validator = new CPANEL.validate.validator(LOCALE.maketext("IP Address/Range"));
ip_validator.add("ip-range", ip_range_fits_netmask, LOCALE.maketext("The given IP range does not fit within the given subnet mask."));
EVENT.on("netmask-select", "change", function() {
    ip_validator.verify()
});
ip_validator.add("ip-range", ip_range_is_valid, LOCALE.maketext("The given IP address or range is invalid."));
ip_validator.attach();

var excludes_validator = new CPANEL.validate.validator(LOCALE.maketext("Excluded IP Addresses/Ranges"));
excludes_validator.add("ip-range-exclusions", excludes_are_valid, LOCALE.maketext("All excluded IP addresses and IP ranges must be valid and within the given IP range."));
excludes_validator.attach();

CPANEL.validate.attach_to_form("submitter", [ip_validator, excludes_validator], undefined, true);