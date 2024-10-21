//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/transfers/TransferSession.js
// Generated: /usr/local/cpanel/base/sharedjs/transfers/TransferSession-es.js
// Module:    legacy_shared/transfers/TransferSession-es
// Locale:    es
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Abort Session Processing":"Cancelar el procesamiento de la sesión","Are you sure you want to abort this transfer?":"¿Está seguro de que desea cancelar esta transferencia?","Are you sure you want to pause this transfer?":"¿Está seguro de que desea pausar esta transferencia?","Failed to abort the session.":"No se pudo cancelar la sesión.","Failed to pause the session.":"No se pudo pausar la sesión.","Failed to start transfer.":"No se pudo iniciar la transferencia.","Pausing queue processing …":"Pausando la cola que procesa…","The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.":"El sistema cancelará los procesos de transferencia lo antes posible. Para prevenir la pérdida de datos, el sistema completará las operaciones de restauración en curso antes de cancelar la sesión entera.","The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.":"El sistema no añadirá artículos nuevos a la cola hasta que usted elija continuar. Para prevenir la pérdida de datos, el sistema completará las operaciones en curso.","There is no handler for [asis,sessionState]: [_1]":"No existe un manejador para [asis,sessionState]: [_1]"};

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
