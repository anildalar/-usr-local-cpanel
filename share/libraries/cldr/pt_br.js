//-------------------------------------------------------------
// CLDR Data for pt_br
//-------------------------------------------------------------
(function(context) {
    var locale = "pt_br",
        functions = {'get_plural_form':function(n){var category;var category_values=Array.prototype.slice.call(arguments,1);var has_extra_for_zero=0;var abs_n=Math.abs(n);var category_process_order=["zero","one","two","few","many","other"];var category_rules_lookup={"one":function(n){if(((n==1))){return'one';}return;}};for(i=0;i<category_process_order.length;i++){if(category_rules_lookup[category_process_order[i]]){category=category_rules_lookup[category_process_order[i]](abs_n);if(category)break;}}
var categories=["one","other"];if(category_values.length===0){category_values=categories;}
else{var cat_len=categories.length;var val_len=category_values.length;var cat_len_plus_one=cat_len+1;if(val_len===cat_len_plus_one){has_extra_for_zero++;}
else if(cat_len!==val_len){if(window.console)console.warn('The number of given values ('+val_len+') does not match the number of categories ('+cat_len+').');}}
if(category===undefined){var cat_idx=has_extra_for_zero&&abs_n!==0?-2:-1;var sliced=category_values.slice(cat_idx);return[sliced[0],has_extra_for_zero&&abs_n===0?1:0];}
else{var return_value;GET_POSITION:while(1){var cat_pos_in_list;var index=-1;CATEGORY:for(i=0;i<categories.length;i++){index++;if(categories[i]===category){cat_pos_in_list=index;break CATEGORY;}}
if(cat_pos_in_list===undefined&&category!=='other'){if(window.console)console.warn('The category ('+category+') is not used by this locale.');category='other';continue GET_POSITION;}
else if(cat_pos_in_list===undefined){var cat_idx=has_extra_for_zero&&abs_n!==0?-2:-1;var sliced=category_values.slice(cat_idx);return_value=[sliced[0],has_extra_for_zero&&abs_n===0?1:0]
break GET_POSITION;}
else{if(has_extra_for_zero&&category==='other'){var cat_idx=has_extra_for_zero&&abs_n===0?-1:cat_pos_in_list;var sliced=category_values.slice(cat_idx);return_value=[sliced[0],has_extra_for_zero&&abs_n===0?1:0];break GET_POSITION;}
else{return_value=[category_values[cat_pos_in_list],0];break GET_POSITION;}}
break GET_POSITION;}
return return_value;}}},
        datetime_info = {"territory":"Brazil","quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"HH:mm","medium":"HH:mm:ss","long":"HH'h'mm'min'ss's' z","full":"HH'h'mm'min'ss's' zzzz"},"era_narrow":["a.C.","d.C."],"datetime_format_full":"EEEE, d 'de' MMMM 'de' y HH'h'mm'min'ss's' zzzz","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"d 'de' MMMM 'de' y HH'h'mm'min'ss's' z","date_format_short":"dd/MM/yy","native_variant":null,"name":"Portuguese Brazil","language_id":"pt","era_wide":["Antes de Cristo","Ano do Senhor"],"variant_id":null,"date_format_medium":"dd/MM/yyyy","time_format_default":"HH:mm:ss","era_abbreviated":["a.C.","d.C."],"datetime_format":"{1} {0}","month_format_wide":["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],"quarter_format_abbreviated":["T1","T2","T3","T4"],"datetime_format_short":"dd/MM/yy HH:mm","glibc_datetime_format":"%a %d %b %Y %T %Z","quarter_stand_alone_abbreviated":["T1","T2","T3","T4"],"script_id":null,"prefers_24_hour_time":1,"cldr_version":"1.7.1","day_format_wide":["segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado","domingo"],"language":"Portuguese","month_format_narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"time_format_full":"HH'h'mm'min'ss's' zzzz","date_format_default":"dd/MM/yyyy","am_pm_abbreviated":["AM","PM"],"native_territory":"Brasil","glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],"time_format_long":"HH'h'mm'min'ss's' z","day_stand_alone_wide":["segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado","domingo"],"variant":null,"id":"pt_BR","available_formats":null,"quarter_stand_alone_wide":["1º trimestre","2º trimestre","3º trimestre","4º trimestre"],"time_format_medium":"HH:mm:ss","time_format_short":"HH:mm","date_format_full":"EEEE, d 'de' MMMM 'de' y","territory_id":"BR","first_day_of_week":"1","glibc_date_format":"%d-%m-%Y","quarter_format_wide":["1º trimestre","2º trimestre","3º trimestre","4º trimestre"],"day_stand_alone_abbreviated":["seg","ter","qua","qui","sex","sáb","dom"],"month_stand_alone_narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"format_for":{"yQQQ":"y QQQ","yMMMEd":"EEE, d 'de' MMM 'de' y","d":"d","y":"y","hms":"h:mm:ss a","MMMMd":"d 'de' MMMM","yMMMM":"MMMM 'de' y","ms":"mm'min'ss's'","M":"L","yM":"MM/yyyy","MEd":"EEE, dd/MM","MMM":"LLL","Md":"d/M","yQ":"yyyy Q","yMEd":"EEE, dd/MM/yyyy","Hm":"H'h'mm","EEEd":"EEE, d","Hms":"H:mm:ss","hm":"h:mm a","MMMEd":"EEE, d 'de' MMM","MMMMEd":"EEE, d 'de' MMMM","MMMd":"d 'de' MMM","yMMM":"MMM 'de' y"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"dd/MM/yy","medium":"dd/MM/yyyy","long":"d 'de' MMMM 'de' y","full":"EEEE, d 'de' MMMM 'de' y"},"date_format_long":"d 'de' MMMM 'de' y","month_stand_alone_abbreviated":["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],"native_language":"português","datetime_format_default":"dd/MM/yyyy HH:mm:ss","native_name":"português Brasil","day_format_narrow":["S","T","Q","Q","S","S","D"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%T","native_script":null,"month_format_abbreviated":["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],"default_date_format_length":"medium","day_stand_alone_narrow":["S","T","Q","Q","S","S","D"],"day_format_abbreviated":["seg","ter","qua","qui","sex","sáb","dom"],"datetime_format_medium":"dd/MM/yyyy HH:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"“","quotation_end":"”","alternate_quotation_start":"‘","alternate_quotation_end":"’"},"orientation":{"lines":"top-to-bottom","characters":"left-to-right"},"posix":{"nostr":"não:n","yesstr":"sim:s"},"plural_forms":{"category_list":["one","other"],"category_rules_function":null,"category_rules":{"one":"n is 1"},"category_rules_compiled":{"one":function (n) {if ( (( n == 1))) { return 'one'; } return;}}},"cldr_formats":{"territory":"Região: {0}","_decimal_format_decimal":",","language":"Idioma: {0}","percent":"#,##0%","locale":"{0} ({1})","_decimal_format_group":".","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"middle":"{0}, {1}","end":"{0} ou {1}","start":"{0}, {1}","2":"{0} ou {1}"},"list":{"middle":"{0}, {1}","2":"{0} e {1}","start":"{0}, {1}","end":"{0} e {1}"}},"fallback":[],"characters":{"more_information":"?"}};

    // Legacy cjt 1.0 support
    if ( context.YAHOO ) {
        context.YAHOO.util.Event.onDOMReady(function() {
            var Locale = CPANEL.Locale.generateClassFromCldr(locale, functions, datetime_info, misc_info);
            context.LOCALE = new Locale();
        });
    }

    // Modern cjt 2.0 support
    context.CJT2_loader = {
        current_locale: locale,
        CLDR: {}
    };

    var CLDR = {
        locale: locale,
        functions: functions,
        datetime_info: datetime_info,
        misc_info: misc_info
    };

    context.CJT2_loader.CLDR[locale] = CLDR;
    context.CLDR = CLDR;

})(window);
//~~END-GENERATED~~