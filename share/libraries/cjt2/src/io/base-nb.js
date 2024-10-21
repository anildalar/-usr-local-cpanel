//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/io/base.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/io/base-nb.js
// Module:    cjt/io/base-nb
// Locale:    nb
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"An unknown error occurred.":"Det har oppstått en ukjent feil.","No specific error was returned with the failed API call.":"Ingen spesifikk feil ble returnert med det mislykkede API-kallet.","The API response could not be parsed.":"API-svaret kan ikke analyseres."};

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