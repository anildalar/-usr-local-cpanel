//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config-ms.js
// Module:    /templates/greylist/views/config-ms
// Locale:    ms
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The number of minutes during which the mail server accepts a resent email from an unknown triplet.":"Bilangan minit di mana pelayan mel menerima e-mel yang dihantar semula daripada triplet yang tidak diketahui.","The number of minutes during which the mail server defers email from an unknown triplet.":"Bilangan minit di mana pelayan mel menunda e-mel yang dihantar daripada triplet yang tidak diketahui.","The system successfully saved your [asis,Greylisting] configuration settings.":"Sistem berjaya menyimpan [asis,Greylisting] tetapan konfigurasi anda.","The time at which the mail server treats a resent email as coming from a new, unknown triplet.":"Masa di mana pelayan mel menganggap e-mel yang dihantar semula sebagai triplet baharu yang tidak diketahui.","Whether the system automatically accepts email from hosts with a valid [asis,SPF] record.[comment,this text is used in a tooltip]":"Sama ada sistem secara automatik menerima e-mel daripada hos dengan rekod [asis,SPF] yang sah.[comment,this text is used in a tooltip]"};

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