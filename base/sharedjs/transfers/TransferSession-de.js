//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/transfers/TransferSession.js
// Generated: /usr/local/cpanel/base/sharedjs/transfers/TransferSession-de.js
// Module:    legacy_shared/transfers/TransferSession-de
// Locale:    de
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Abort Session Processing":"Sitzungsverarbeitung abbrechen","Are you sure you want to abort this transfer?":"Möchten Sie diesen Transfer wirklich abbrechen?","Are you sure you want to pause this transfer?":"Möchten Sie diesen Transfer wirklich anhalten?","Failed to abort the session.":"Die Sitzung konnte nicht abgebrochen werden.","Failed to pause the session.":"Die Sitzung konnte nicht angehalten werden.","Failed to start transfer.":"Übertragung konnte nicht gestartet werden.","Pausing queue processing …":"Verarbeitung der Warteschlange wird pausiert…","The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.":"Übertragungen werden so schnell wie möglich abgebrochen. Um Datenverlust zu vermeiden, werden laufende Wiederherstellungen abgeschlossen, bevor die gesamte Sitzung abgebrochen wird.","The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.":"Der Warteschlange werden erst dann neue Elemente hinzugefügt, wenn Sie den Vorgang fortsetzen. Um Datenverlust zu vermeiden, werden laufende Vorgänge abgeschlossen.","There is no handler for [asis,sessionState]: [_1]":"There is no handler for [asis,sessionState]: [_1]"};

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
