//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/LogTail.js
// Generated: /usr/local/cpanel/base/sharedjs/LogTail-es.js
// Module:    legacy_shared/LogTail-es
// Locale:    es
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Too many errors from “[_1]”. Future errors will be suppressed.":"Demasiados errores desde “[_1]”. Se eliminarán los errores futuros.","[asis,live_tail_log] encountered an internal error: [_1]":"[asis,live_tail_log] se encontró con un error interno: [_1]","[asis,live_tail_log] encountered the maximum allowed errors ([numf,_1]) and will not continue.":"[asis,live_tail_log] encontró la máxima cantidad de errores permitidos ([numf,_1]) y no continuará."};

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