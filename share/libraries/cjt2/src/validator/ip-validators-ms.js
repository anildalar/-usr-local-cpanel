//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/validator/ip-validators.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/validator/ip-validators-ms.js
// Module:    cjt/validator/ip-validators-ms
// Locale:    ms
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be evenly divisible by “[_2]”.":"In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be evenly divisible by “[_2]”.","In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be greater than or equal to “[_2]” and less than or equal to “[_3]”.":"In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be greater than or equal to “[_2]” and less than or equal to “[_3]”.","In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be one of the values in: [list_or,_2].":"In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be one of the values in: [list_or,_2].","In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be the value 0 for this CIDR range.":"In an [asis,IP] address like [asis,a.b.c.d], the “[_1]” octet must be the value 0 for this CIDR range.","The [asis,CIDR] range must include a ‘/’ followed by the range.":"The [asis,CIDR] range must include a ‘/’ followed by the range.","The [asis,IP] address, [_1], in the [asis,CIDR] range is not supported for the range /[_2].":"The [asis,IP] address, [_1], in the [asis,CIDR] range is not supported for the range /[_2].","You must specify a valid [asis,CIDR] range between 0 and 32.":"You must specify a valid [asis,CIDR] range between 0 and 32.","You must specify a valid [asis,IP] address.":"You must specify a valid [asis,IP] address."};

    if (!this.LEXICON) {
        this.LEXICON = {};
    }

    for(var item in newLex) {
        if(newLex.hasOwnProperty(item)) {
            var value = newLex[item];
            if (typeof(value) === "string" && value !== "") {
                // Only add it if there is a value.
                this.LEXICON[item] = value;
            }
        }
    }
})();
//~~END-GENERATED~~
