//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/LogTail.js
// Generated: /usr/local/cpanel/base/sharedjs/LogTail-el.js
// Module:    legacy_shared/LogTail-el
// Locale:    el
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Too many errors from “[_1]”. Future errors will be suppressed.":"Υπερβολικά πολλά σφάλματα από το «[_1]». Τα μελλοντικά σφάλματα θα απενεργοποιούνται.","[asis,live_tail_log] encountered an internal error: [_1]":"Το [asis,live_tail_log] συνάντησε ένα εσωτερικό σφάλμα: [_1]","[asis,live_tail_log] encountered the maximum allowed errors ([numf,_1]) and will not continue.":"Το [asis,live_tail_log] συνάντησε το μέγιστο επιτρεπτό αριθμό σφαλμάτων ([numf,_1]) και δεν θα συνεχίσει."};

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
