//-------------------------------------------------------------
// CLDR Data for fil
//-------------------------------------------------------------
(function(context) {
    var locale = "fil",
        functions = {'get_plural_form':function(n){var category;var category_values=Array.prototype.slice.call(arguments,1);var has_extra_for_zero=0;var abs_n=Math.abs(n);var category_process_order=["zero","one","two","few","many","other"];var category_rules_lookup={"one":function(n){if(((parseInt(n)==n&&n>=0&&n<=1))){return'one';}return;}};for(i=0;i<category_process_order.length;i++){if(category_rules_lookup[category_process_order[i]]){category=category_rules_lookup[category_process_order[i]](abs_n);if(category)break;}}
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
        datetime_info = {"territory":null,"quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"HH:mm","medium":"HH:mm:ss","long":"HH:mm:ss z","full":"HH:mm:ss zzzz"},"era_narrow":["BCE","CE"],"datetime_format_full":"EEEE, MMMM dd y HH:mm:ss zzzz","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"MMMM d, y HH:mm:ss z","date_format_short":"M/d/yy","native_variant":null,"name":"Filipino","language_id":"fil","era_wide":["BCE","CE"],"variant_id":null,"date_format_medium":"MMM d, y","time_format_default":"HH:mm:ss","era_abbreviated":["BCE","CE"],"datetime_format":"{1} {0}","month_format_wide":["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],"quarter_format_abbreviated":["Q1","Q2","Q3","Q4"],"datetime_format_short":"M/d/yy HH:mm","glibc_datetime_format":"%a %b %e %H:%M:%S %Y","quarter_stand_alone_abbreviated":["Q1","Q2","Q3","Q4"],"script_id":null,"prefers_24_hour_time":1,"cldr_version":"1.7.1","day_format_wide":["Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado","Linggo"],"language":"Filipino","month_format_narrow":["E","P","M","A","M","H","H","A","S","O","N","D"],"time_format_full":"HH:mm:ss zzzz","date_format_default":"MMM d, y","am_pm_abbreviated":["AM","PM"],"native_territory":null,"glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre"],"time_format_long":"HH:mm:ss z","day_stand_alone_wide":["Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado","Linggo"],"variant":null,"id":"fil","available_formats":null,"quarter_stand_alone_wide":["Q1","Q2","Q3","Q4"],"time_format_medium":"HH:mm:ss","time_format_short":"HH:mm","date_format_full":"EEEE, MMMM dd y","territory_id":null,"first_day_of_week":"1","glibc_date_format":"%m/%d/%y","quarter_format_wide":["Q1","Q2","Q3","Q4"],"day_stand_alone_abbreviated":["Lun","Mar","Mye","Huw","Bye","Sab","Lin"],"month_stand_alone_narrow":["E","P","M","A","M","H","H","A","S","O","N","D"],"format_for":{"yQQQ":"y QQQ","yMMMEd":"EEE, y MMM d","d":"d","y":"y","hms":"h:mm:ss a","MMMMd":"MMMM d","yMMMM":"y MMMM","ms":"mm:ss","M":"L","yM":"yyyy-M","MEd":"E, M-d","MMM":"LLL","Md":"M-d","yQ":"y Q","yMEd":"EEE, yyyy-M-d","Hm":"H:mm","EEEd":"d EEE","Hms":"H:mm:ss","hm":"h:mm a","MMMEd":"E MMM d","MMMMEd":"E MMMM d","MMMd":"MMM d","yMMM":"y MMM"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"M/d/yy","medium":"MMM d, y","long":"MMMM d, y","full":"EEEE, MMMM dd y"},"date_format_long":"MMMM d, y","month_stand_alone_abbreviated":["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],"native_language":"Filipino","datetime_format_default":"MMM d, y HH:mm:ss","native_name":"Filipino","day_format_narrow":["L","M","M","H","B","S","L"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%H:%M:%S","native_script":null,"month_format_abbreviated":["Ene","Peb","Mar","Abr","May","Hun","Hul","Ago","Set","Okt","Nob","Dis"],"default_date_format_length":"medium","day_stand_alone_narrow":["L","M","M","H","B","S","L"],"day_format_abbreviated":["Lun","Mar","Mye","Huw","Bye","Sab","Lin"],"datetime_format_medium":"MMM d, y HH:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"“","quotation_end":"”","alternate_quotation_start":"‘","alternate_quotation_end":"’"},"orientation":{"lines":"top-to-bottom","characters":"left-to-right"},"posix":{"nostr":{"draft":"contributed","content":"no:n"},"yesstr":{"draft":"contributed","content":"yes:y"}},"plural_forms":{"category_list":["one","other"],"category_rules_function":null,"category_rules":{"one":"n in 0..1"},"category_rules_compiled":{"one":function (n) {if ( (( parseInt(n) == n && n >= 0 && n <= 1 ))) { return 'one'; } return;}}},"cldr_formats":{"territory":"{0}","_decimal_format_decimal":".","language":"{0}","percent":"#,##0%","locale":"{0} ({1})","_decimal_format_group":",","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"start":"{0}, {1}","end":"{0}, o {1}","middle":"{0}, {1}","2":"{0} o {1}"},"list":{"middle":"{0}, {1}","2":"{0} at {1}","start":"{0}, {1}","end":"{0} at {1}"}},"fallback":[],"characters":{"more_information":"?"}};

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