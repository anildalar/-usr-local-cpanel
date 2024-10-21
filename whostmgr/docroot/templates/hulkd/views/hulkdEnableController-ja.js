//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/hulkd/views/hulkdEnableController.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/hulkd/views/hulkdEnableController-ja.js
// Module:    /templates/hulkd/views/hulkdEnableController-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The status for [asis,cPHulk] has changed, possibly in another browser session.":"[asis,cPHulk]のステータスが、おそらく別のブラウザセッションで変更されました。","The system disabled the [asis,UseDNS] setting for [asis,SSHD] in order to add IP addresses to the whitelist. You must restart SSH through the [output,url,_1,Restart SSH Server,_2] page to implement the change.":"IP アドレスをホワイトリストに追加するために、[asis,SSHD] の [asis,UseDNS] 設定が無効になりました。変更を実装するには、[output,url,_1,SSH サーバーの再起動,_2]ページから SSH を再起動する必要があります。","[asis,cPHulk] is now disabled.":"[asis,cPHulk]が無効化されました。","[asis,cPHulk] is now enabled.":"[asis,cPHulk]が有効化されました。"};

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
