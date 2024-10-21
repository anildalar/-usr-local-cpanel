//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/cjt/sql.js
// Generated: /usr/local/cpanel/base/cjt/sql-pl.js
// Module:    legacy_cjt/sql-pl
// Locale:    pl
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"A database name cannot be empty.":"Pole nazwy bazy danych nie może być puste.","A database name cannot end with a space character.":"A database name cannot end with a space character.","A username cannot be empty.":"Pole nazwy użytkownika nie może być puste.","Database Name":"Nazwa bazy danych","Database Username":"Database Username","The name of a database user on this system may include only the following characters: [join, ,_1]":"Nazwa użytkownika bazy danych w tym systemie może się składać tylko z następujących znaków: [join, ,_1]","This database name has too many wildcard-sensitive characters ([list_and_quoted,_1]). The system stores each of these as two characters internally, up to a limit of [quant,_2,character,characters]. This name would take up [quant,_3,character,characters] of internal storage, which is [numf,_4] too many.":"Ta nazwa bazy danych zawiera zbyt wiele znaków będących symbolami wieloznacznymi ([list_and_quoted,_1]). System wewnętrznie przechowuje każdy z nich jako dwa znaki, przy czym limit wynosi [quant,_2,znak,znaki(-ów)]. Ta nazwa zajęłaby więc [quant,_3,znak,znaki(-ów)] pamięci wewnętrznej, czyli o [numf,_4] za dużo.","This system allows only printable [asis,ASCII] characters in database names.":"Ten system zezwala na używanie w nazwach baz danych tylko drukowalnych znaków [asis,ASCII].","This system prohibits the backslash ([_1]) character in database names.":"This system prohibits the backslash ([_1]) character in database names.","This system prohibits the following [numerate,_1,character,characters] in database names: [join, ,_2]":"Ten system nie zezwala na używanie w nazwach baz danych następującego(-ych) [numerate,_1,znak,znaki]: [join, ,_2]","This system prohibits the slash ([_1]) character in database names.":"Ten system nie zezwala na używanie znaku ukośnika ([_1]) w nazwach baz danych.","This system’s database version ([_1]) prohibits the character “[_2]” in database names. Ask your administrator to upgrade to a newer version.":"This system’s database version ([_1]) prohibits the character “[_2]” in database names. Ask your administrator to upgrade to a newer version.","This value is too long by [quant,_1,character,characters]. The maximum length is [quant,_2,character,characters].":"Ta wartość jest za długa o [quant,_1,znak,znaki(-ów)]. Maksymalna długość to [quant,_2,znak,znaki(-ów)].","Username cannot begin with a number.":"Nazwa użytkownika nie może się rozpoczynać cyfrą.","[asis,PostgreSQL] Database Name":"Nazwa bazy danych [asis,PostgreSQL]","[asis,PostgreSQL] Username":"Nazwa użytkownika programu [asis,PostgreSQL]"};

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
