//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/cpanel_customization/constants.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/cpanel_customization/constants-ru.js
// Module:    /templates/cpanel_customization/constants-ru
// Locale:    ru
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Colors":"Colors","Favicon":"Значок сайта","Links":"Links","Logos":"Logos","Public Contact":"Публичные контакты"};

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