//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/validator/username-validators.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/validator/username-validators-pl.js
// Module:    cjt/validator/username-validators-pl
// Locale:    pl
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The user name should only contain the following characters: [asis,a-zA-Z0-9-].":"Nazwa użytkownika może zawierać tylko następujące znaki: [asis,a-zA-Z0-9-].","User name cannot be longer than [quant,_1,character,characters].":"Nazwa użytkownika nie może być dłuższa niż [quant,_1,znak,znaki(-ów)].","User name cannot be “[_1]”.":"Nazwą użytkownika nie może być „[_1]”."};

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
