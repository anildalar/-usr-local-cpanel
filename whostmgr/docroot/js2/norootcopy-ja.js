//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/js2/norootcopy.js
// Generated: /usr/local/cpanel/whostmgr/docroot/js2/norootcopy-ja.js
// Module:    /js2/norootcopy-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Host":"ホスト","You must input a valid fully qualified domain name or IP address.":"完全修飾ドメイン名、またはIPアドレスを入力する必要があります。","You must provide a fully qualified domain name or IP address.":"完全修飾ドメインネーム、またはIPアドレスを指定する必要があります。"};

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