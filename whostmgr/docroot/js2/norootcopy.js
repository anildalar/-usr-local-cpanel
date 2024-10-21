(function(window) {

    "use strict";

    var EVENT = window.EVENT;
    var CPANEL = window.CPANEL;
    var LOCALE = window.LOCALE;
    var document = window.document;

    var init = function() {

        /* Setup eventHandlers*/

        /* Setup Validators*/
        var VALIDATORS = {};

        /* eslint-disable new-cap */
        VALIDATORS.host = new CPANEL.validate.validator(LOCALE.maketext("Host"));
        /* eslint-enable new-cap */
        VALIDATORS.host.add_for_submit("host", "min_length($input$.trim(),1)", LOCALE.maketext("You must provide a fully qualified domain name or IP address."));
        VALIDATORS.host.add("host", "fqdn($input$) || ipv6($input$)", LOCALE.maketext("You must input a valid fully qualified domain name or IP address."));
        VALIDATORS.host.attach();

        var submitButton = CPANEL.Y.one("#submit-button");

        CPANEL.validate.attach_to_form(submitButton.id, VALIDATORS, {
            no_panel: true,
            success_callback: function() {
                document.forms["mainform"].submit();
            }
        });
    };

    EVENT.onDOMReady(init);
})(window);
