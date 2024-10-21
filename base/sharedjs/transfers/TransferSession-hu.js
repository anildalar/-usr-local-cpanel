//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/transfers/TransferSession.js
// Generated: /usr/local/cpanel/base/sharedjs/transfers/TransferSession-hu.js
// Module:    legacy_shared/transfers/TransferSession-hu
// Locale:    hu
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Abort Session Processing":"Munkamenet feldolgozásának megszakítása","Are you sure you want to abort this transfer?":"Biztosan meg kívánja szakítani ezt az átvitelt?","Are you sure you want to pause this transfer?":"Biztosan szüneteltetni kívánja ezt az átvitelt?","Failed to abort the session.":"A munkamenet megszakítása sikertelen.","Failed to pause the session.":"A munkamenet szüneteltetése sikertelen.","Failed to start transfer.":"Az átvitel elindítása sikertelen.","Pausing queue processing …":"Sor feldolgozásának szüneteltetése…","The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.":"A rendszer a lehető legrövidebb időn belül megszakít minden átviteli folyamatot. Az adatvesztés elkerülése érdekében a rendszer a teljes munkamenet megszakítása előtt befejezi a folyamatban levő műveleteket.","The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.":"A rendszer nem ad új elemeket a sorhoz, amíg Ön a folytatás mellett nem dönt. Az adatvesztés elkerülése érdekében a rendszer befejezi a folyamatban levő műveleteket.","There is no handler for [asis,sessionState]: [_1]":"Nincs kezelő a következőhöz: [asis,sessionState]: [_1]"};

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
