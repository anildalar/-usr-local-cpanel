//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/validator/email-validator.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/validator/email-validator-nl.js
// Module:    cjt/validator/email-validator-nl
// Locale:    nl
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Do not include the [asis,@] character or the domain name.":"Het is niet toegestaan het teken [asis,@] of de domeinnaam te gebruiken.","The email must contain a username and a domain.":"Het e-mailadres moet een gebruikersnaam en een domein bevatten.","The username can only contain letters, numbers, periods, hyphens, and underscores.":"De gebruikersnaam mag alleen letters, cijfers, punten, koppeltekens en onderstrepingstekens bevatten.","The username can only contain the following characters: [asis,a-zA-Z0-9!#$%][output,asis,amp()][output,apos][asis,*+/=?^_`{|}~-]":"De gebruikersnaam mag alleen de volgende tekens bevatten: [asis,a-zA-Z0-9!#$%][output,asis,amp()][output,apos][asis,*+/=?^_`{|}~-]","The username cannot begin or end with a period.":"De gebruikersnaam kan niet beginnen met of eindigen op een punt.","The username cannot contain two consecutive periods.":"De gebruikersnaam mag niet twee opeenvolgende punten bevatten.","The username cannot exceed [numf,_1] characters.":"De gebruikersnaam mag niet langer zijn dan [numf,_1] tekens.","You must enter a username.":"U moet een gebruikersnaam invoeren."};

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
