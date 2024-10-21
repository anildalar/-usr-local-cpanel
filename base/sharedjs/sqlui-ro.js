//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sqlui.js
// Generated: /usr/local/cpanel/base/sharedjs/sqlui-ro.js
// Module:    legacy_shared/sqlui-ro
// Locale:    ro
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"Închidere","If you change this database’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"Dacă modificaţi numele acestei baze de date, nu o veţi mai putea redenumi înapoi „[_1]”. Aceasta datorită faptului că vechiului nume îi lipseşte prefixul numelui de utilizator ([_2]) de care acest sistem are nevoie pentru toate numele noi de baze de date şi de utilizatori de baze de date. Dacă aveţi nevoie de un nume fără prefix, trebuie să contactaţi administratorul serverului.","If you change this user’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"Dacă modificaţi numele acestui utilizator, nu îl veţi mai putea redenumi înapoi „[_1]”. Aceasta datorită faptului că vechiului nume îi lipseşte prefixul numelui de utilizator ([_2]) de care acest sistem are nevoie pentru toate numele noi de baze de date şi de utilizatori de baze de date. Dacă aveţi nevoie de un nume fără prefix, trebuie să contactaţi administratorul serverului.","It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.":"It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.","Rename Database":"Redenumire bază de date","Rename Database User":"Redenumire utilizator bază de date","Renaming database user …":"Se redenumeşte utilizatorul bazei de date…","Renaming database …":"Se redenumeşte baza de date…","Success! The browser is now redirecting …":"Succes! Browserul redirecţionează acum…","Success! This page will now reload.":"Succes! Această pagină va fi reîncărcată acum.","The new name must be different from the old name.":"Noul nume trebuie să fie diferit de cel vechi."};

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