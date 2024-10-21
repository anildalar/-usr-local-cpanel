//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/frontend/jupiter/mail/boxtrapper/conf.js
// Generated: /usr/local/cpanel/base/frontend/jupiter/mail/boxtrapper/conf-el.js
// Module:    /jupiter/mail/boxtrapper/conf-el
// Locale:    el
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Minimum [asis,Apache] [asis,SpamAssassin] Spam Score required to bypass [asis,BoxTrapper]:":"Απαιτείται ελάχιστη βαθμολογία spam [asis,Apache] [asis,SpamAssassin] για παράκαμψη του [asis,BoxTrapper]:","The minimum spam score must be numeric.":"Η τιμή της ελάχιστης βαθμολογίας spam πρέπει να είναι αριθμητική.","The number of days that you wish to keep logs and messages in the queue:":"Ο επιθυμητός αριθμός ημερών διατήρησης αρχείων καταγραφής και μηνυμάτων στην ουρά:","The number of days to keep logs must be a positive integer.":"Ο αριθμός των ημερών διατήρησης των αρχείων καταγραφής πρέπει να είναι θετικός ακέραιος αριθμός."};

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
