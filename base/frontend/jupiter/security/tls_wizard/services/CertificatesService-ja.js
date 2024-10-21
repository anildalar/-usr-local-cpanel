//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/frontend/jupiter/security/tls_wizard/services/CertificatesService.js
// Generated: /usr/local/cpanel/base/frontend/jupiter/security/tls_wizard/services/CertificatesService-ja.js
// Module:    /jupiter/security/tls_wizard/services/CertificatesService-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Active":"アクティブ","Certificate Terms":"証明書の利用規約","Checking the validation status …":"検証ステータスを確認中 …","Complete this Now":"今すぐ完了","Complete.":"完了。","Domain Types:":"ドメインタイプ:","Expired":"期限切れ","Expiring Soon":"もうすぐ失効します","Free [output,abbr,DV,Domain Validated] Up Status:":"無料の[output,abbr,DV,dドメイン認証]アップステータス:","Non-Wildcard":"非ワイルドカード","Only list Non-Wildcard domains.":"非ワイルドカードドメインのみ一覧表示します。","Only list Service Subdomains.":"サービスサブドメインのみ一覧表示します。","Only list Wildcard domains.":"ワイルドカードドメインのみ一覧表示します。","Only list domains whose certificate is expiring soon.":"証明書の有効期限が近づいているドメインのみ一覧表示します。","Only list domains with [asis,DV] Certificates.":"[asis,DV] 証明書を持つドメインのみ一覧表示します。","Only list domains with [asis,EV] Certificates.":"[asis,EV] 証明書を持つドメインのみ一覧表示します。","Only list domains with [asis,OV] Certificates.":"[asis,OV] 証明書を持つドメインのみ一覧表示します。","Only list domains with an active certificate.":"アクティブな証明書を持つドメインのみ一覧表示します。","Only list domains with certificates that expire soon.":"証明書の有効期限が近づいているドメインのみ一覧表示します。","Only list non-Service Subdomains.":"非サービスサブドメインのみ一覧表示します。","Only list products from the “[_1]” provider.":"「[_1]」プロバイダの製品のみ一覧表示します。","Only list products that use the “[_1]” validation type.":"「[_1]」検証タイプを使用する製品のみ一覧表示します。","Only list products with a term of ([_1]).":"([_1]) という用語が含まれる製品のみ一覧表示します。","Only list unsecured domains.":"保護されていないドメインのみ一覧表示します。","Only list unsecured or self-signed domains.":"保護されていないまたは自己署名ドメインのみ一覧表示します。","Other Domains":"その他のドメイン","Schedule a Call":"呼び出しをスケジュール","Service Subdomain Types:":"サービスサブドメインタイプ:","Sign the Agreement":"協定に署名","The “[_1]” [asis,API] failed due to the following error: [_2]":"次のエラーのため、“[_1]” [asis,API] が失敗しました: [_2]","Unsecured":"無保護","Unsecured or Self-signed":"無保護、または自己署名","Validating the [output,abbr,CSR,Certificate Signing Request] status …":"[output,abbr,CSR,CSR]ステータスを検証中…","Validating the [output,abbr,DCV,Domain Control Validation] status …":"[output,abbr,DCV,ドメイン認証]ステータスを検証中…","Validating the [output,abbr,EV,Extended Validation] click-through status …":"[output,abbr,EV,EV]クリックスルーステータスを検証中…","Validating the [output,abbr,OV,Organization Validation] callback status …":"[output,abbr,OV,OV]コールバックステータスを検証中…","Validating the [output,abbr,OV,Organization Validation] status …":"[output,abbr,OV,OV]ステータスを検証中…","Validating the free [output,abbr,DV,Domain Validated] up status …":"無料[output,abbr,DV,DV]アップステータスを検証中…","Validation Status:":"検証ステータス","Wildcard":"ワイルドカード","[asis,DNS]-based [output,abbr,DCV,Domain Control Validation] also failed.":"[asis,DNS]を利用した[output,abbr,DCV,ドメイン認証]も失敗しました。","[asis,DNS]-based [output,abbr,DCV,Domain Control Validation] failed.":"[asis,DNS]を利用した[output,abbr,DCV,ドメイン認証]が失敗しました。","[asis,SSL] Providers":"[asis,SSL]プロバイダ","[asis,SSL] Statuses:":"[asis,SSL]ステータス：","[asis,SSL] Types:":"[asis,SSL]タイプ：","[asis,SSL] Validation Types":"[asis,SSL]検証タイプ","[asis,cPanel] Service Subdomains":"[asis,cPanel]サービスサブドメイン","[output,abbr,CSR,Certificate Signing Request] Status:":"[output,abbr,CSR,CSR]ステータス：","[output,abbr,DCV,Domain Control Validation] Status:":"[output,abbr,DCV,ドメイン認証]ステータス：","[output,abbr,DV,Domain Validated] Certificate":"[output,abbr,DV,DV]証明書","[output,abbr,EV,Extended Validation] Certificate":"[output,abbr,EV,EV]証明書","[output,abbr,EV,Extended Validation] Click-Through Status:":"[output,abbr,EV,EV]クリックスルーのステータス：","[output,abbr,OV,Organization Validated] Certificate":"[output,abbr,OV,OV]証明書","[output,abbr,OV,Organization Validation] Callback Status:":"[output,abbr,OV,OV]コールバックステータス：","[output,abbr,OV,Organization Validation] Status:":"[output,abbr,OV,OV]ステータス：","[quant,_1,Day,Days]":"[quant,_1,Day,Days]","[quant,_1,Month,Months]":"[quant,_1,か月,か月]","[quant,_1,Year,Years]":"[quant,_1,年,年]","“[_1]”’s [output,abbr,DCV,Domain Control Validation] check completed correctly, but the check required an [asis,HTTP] redirection. The system tried to exclude such redirections from this domain by editing the website document root’s “[_2]” file, but the redirection persists. You should investigate further.":"“[_1]”’s [output,abbr,DCV,Domain Control Validation] check completed correctly, but the check required an [asis,HTTP] redirection. The system tried to exclude such redirections from this domain by editing the website document root’s “[_2]” file, but the redirection persists. You should investigate further."};

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
