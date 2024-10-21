//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config-nb.js
// Module:    /templates/greylist/views/config-nb
// Locale:    nb
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The number of minutes during which the mail server accepts a resent email from an unknown triplet.":"Antall minutter som e-postserveren kan godta en e-post fra en ukjent triplett som er sendt på nytt.","The number of minutes during which the mail server defers email from an unknown triplet.":"Antall minutter som e-postserveren utsetter e-post fra en ukjent triplett.","The system successfully saved your [asis,Greylisting] configuration settings.":"Systemet lagret konfigurasjonsinnstillingene for [asis,Greylisting].","The time at which the mail server treats a resent email as coming from a new, unknown triplet.":"Hvor lenge e-postserveren behandler en e-post som er sendt på nytt, som om den kommer fra en ny, ukjent triplett.","Whether the system automatically accepts email from hosts with a valid [asis,SPF] record.[comment,this text is used in a tooltip]":"Om systemet automatisk godtar e-post fra verter med en gyldig [asis,SPF]-oppføring.[comment,this text is used in a tooltip]"};

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
