//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/transfers/TransferSession.js
// Generated: /usr/local/cpanel/base/sharedjs/transfers/TransferSession-zh_tw.js
// Module:    legacy_shared/transfers/TransferSession-zh_tw
// Locale:    zh_tw
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Abort Session Processing":"中止工作階段處理","Are you sure you want to abort this transfer?":"您確定要中止此移轉嗎?","Are you sure you want to pause this transfer?":"您確定要暫停此移轉嗎?","Failed to abort the session.":"無法中止工作階段。","Failed to pause the session.":"無法暫停工作階段。","Failed to start transfer.":"無法開始傳輸。","Pausing queue processing …":"正在暫停佇列處理…","The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.":"系統將盡快中止任何傳輸程序。 為防止遺失資料，系統會先完成進行中的還原作業，再中止整個工作階段。","The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.":"系統將不會在佇列中加入新項目，直到您選擇繼續為止。 為防止遺失資料，系統會完成進行中的作業。","There is no handler for [asis,sessionState]: [_1]":"沒有 [asis,sessionState] 的處理常式: [_1]"};

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