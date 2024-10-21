//-------------------------------------------------------------
// CLDR Data for tr
//-------------------------------------------------------------
(function(context) {
    var locale = "tr",
        functions = {'get_plural_form':function(n){var category;var category_values=Array.prototype.slice.call(arguments,1);var has_extra_for_zero=0;var abs_n=Math.abs(n);var category_process_order=["zero","one","two","few","many","other"];var category_rules_lookup={};for(i=0;i<category_process_order.length;i++){if(category_rules_lookup[category_process_order[i]]){category=category_rules_lookup[category_process_order[i]](abs_n);if(category)break;}}
var categories=["other"];if(category_values.length===0){category_values=categories;}
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
        datetime_info = {"territory":null,"quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"HH:mm","medium":"HH:mm:ss","long":"HH:mm:ss z","full":"HH:mm:ss zzzz"},"era_narrow":["MÖ","MS"],"datetime_format_full":"dd MMMM y EEEE HH:mm:ss zzzz","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"dd MMMM y HH:mm:ss z","date_format_short":"dd.MM.yyyy","native_variant":null,"name":"Turkish","language_id":"tr","era_wide":["Milattan Önce","Milattan Sonra"],"variant_id":null,"date_format_medium":"dd MMM y","time_format_default":"HH:mm:ss","era_abbreviated":["MÖ","MS"],"datetime_format":"{1} {0}","month_format_wide":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],"quarter_format_abbreviated":["Ç1","Ç2","Ç3","Ç4"],"datetime_format_short":"dd.MM.yyyy HH:mm","glibc_datetime_format":"%a %b %e %H:%M:%S %Y","quarter_stand_alone_abbreviated":["Ç1","Ç2","Ç3","Ç4"],"script_id":null,"prefers_24_hour_time":1,"cldr_version":"1.7.1","day_format_wide":["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],"language":"Turkish","month_format_narrow":["O","Ş","M","N","M","H","T","A","E","E","K","A"],"time_format_full":"HH:mm:ss zzzz","date_format_default":"dd MMM y","am_pm_abbreviated":["AM","PM"],"native_territory":null,"glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],"time_format_long":"HH:mm:ss z","day_stand_alone_wide":["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"],"variant":null,"id":"tr","available_formats":null,"quarter_stand_alone_wide":["1. çeyrek","2. çeyrek","3. çeyrek","4. çeyrek"],"time_format_medium":"HH:mm:ss","time_format_short":"HH:mm","date_format_full":"dd MMMM y EEEE","territory_id":null,"first_day_of_week":"1","glibc_date_format":"%m/%d/%y","quarter_format_wide":["1. çeyrek","2. çeyrek","3. çeyrek","4. çeyrek"],"day_stand_alone_abbreviated":["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"],"month_stand_alone_narrow":["O","Ş","M","N","M","H","T","A","E","E","K","A"],"format_for":{"yQQQ":"QQQ y","yMMMEd":"dd MMM y EEE","d":"d","y":"y","hms":"h:mm:ss a","MMMMd":"dd MMMM","yMMMM":"MMMM y","ms":"mm:ss","M":"L","yM":"M/yyyy","MEd":"dd/MM E","MMM":"LLL","Md":"dd/MM","yQ":"Q yyyy","yMEd":"dd.MM.yyyy EEE","Hm":"HH:mm","EEEd":"d EEE","Hms":"H:mm:ss","hm":"h:mm a","MMMEd":"dd MMM E","MMMMEd":"dd MMMM E","MMMd":"dd MMM","yMMM":"MMM y"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"dd.MM.yyyy","medium":"dd MMM y","long":"dd MMMM y","full":"dd MMMM y EEEE"},"date_format_long":"dd MMMM y","month_stand_alone_abbreviated":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],"native_language":"Türkçe","datetime_format_default":"dd MMM y HH:mm:ss","native_name":"Türkçe","day_format_narrow":["P","S","Ç","P","C","C","P"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%H:%M:%S","native_script":null,"month_format_abbreviated":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],"default_date_format_length":"medium","day_stand_alone_narrow":["P","S","Ç","P","C","C","P"],"day_format_abbreviated":["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"],"datetime_format_medium":"dd MMM y HH:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"“","quotation_end":"”","alternate_quotation_start":"‘","alternate_quotation_end":"’"},"orientation":{"lines":"top-to-bottom","characters":"left-to-right"},"posix":{"nostr":"hayır:hayir:h","yesstr":"evet:e"},"plural_forms":{"category_list":["other"],"category_rules_function":null,"category_rules":{},"category_rules_compiled":{}},"cldr_formats":{"territory":"Bölge: {0}","_decimal_format_decimal":",","language":"Dil: {0}","percent":"%#,##0","locale":"{0} ({1})","_decimal_format_group":".","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"2":"{0} veya {1}","start":"{0}, {1}","end":"{0} veya {1}","middle":"{0}, {1}"},"list":{"middle":"{0}, {1}","2":"{0} ve {1}","start":"{0}, {1}","end":"{0} ve {1}"}},"fallback":[],"characters":{"more_information":"?"}};

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