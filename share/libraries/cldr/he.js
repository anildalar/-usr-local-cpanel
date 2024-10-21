//-------------------------------------------------------------
// CLDR Data for he
//-------------------------------------------------------------
(function(context) {
    var locale = "he",
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
        datetime_info = {"territory":null,"quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"HH:mm","medium":"HH:mm:ss","long":"HH:mm:ss z","full":"HH:mm:ss zzzz"},"era_narrow":["לפנה״ס","לסה״נ"],"datetime_format_full":"EEEE, d בMMMM y HH:mm:ss zzzz","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"d בMMMM y HH:mm:ss z","date_format_short":"dd/MM/yy","native_variant":null,"name":"Hebrew","language_id":"he","era_wide":["לפני הספירה","לספירה"],"variant_id":null,"date_format_medium":"dd/MM/yyyy","time_format_default":"HH:mm:ss","era_abbreviated":["לפנה״ס","לסה״נ"],"datetime_format":"{1} {0}","month_format_wide":["ינואר","פברואר","מרס","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],"quarter_format_abbreviated":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"datetime_format_short":"dd/MM/yy HH:mm","glibc_datetime_format":"%a %b %e %H:%M:%S %Y","quarter_stand_alone_abbreviated":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"script_id":null,"prefers_24_hour_time":1,"cldr_version":"1.7.1","day_format_wide":["יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת","יום ראשון"],"language":"Hebrew","month_format_narrow":["ינו","פבר","מרס","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],"time_format_full":"HH:mm:ss zzzz","date_format_default":"dd/MM/yyyy","am_pm_abbreviated":["לפנה\"צ","אחה\"צ"],"native_territory":null,"glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["ינואר","פברואר","מרס","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],"time_format_long":"HH:mm:ss z","day_stand_alone_wide":["יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת","יום ראשון"],"variant":null,"id":"he","available_formats":null,"quarter_stand_alone_wide":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"time_format_medium":"HH:mm:ss","time_format_short":"HH:mm","date_format_full":"EEEE, d בMMMM y","territory_id":null,"first_day_of_week":"1","glibc_date_format":"%m/%d/%y","quarter_format_wide":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"day_stand_alone_abbreviated":["יום ב'","יום ג'","יום ד'","יום ה'","יום ו'","שבת","יום א'"],"month_stand_alone_narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"format_for":{"yQQQ":"y QQQ","yMMMEd":"EEE, y MMM d","d":"d","y":"y","hms":"h:mm:ss a","MMMMd":"d בMMMM","yMMMM":"MMMM y","ms":"mm:ss","M":"L","yM":"M.yyyy","MEd":"E, M-d","MMM":"LLL","Md":"d/M","yQ":"yyyy Q","yMEd":"EEE, d.M.yyyy","Hm":"H:mm","EEEd":"d EEE","Hms":"H:mm:ss","hm":"h:mm a","MMMEd":"E d MMM","MMMMEd":"E MMMM d","MMMd":"MMM d","yMMM":"y MMM"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"dd/MM/yy","medium":"dd/MM/yyyy","long":"d בMMMM y","full":"EEEE, d בMMMM y"},"date_format_long":"d בMMMM y","month_stand_alone_abbreviated":["ינו","פבר","מרס","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],"native_language":"עברית","datetime_format_default":"dd/MM/yyyy HH:mm:ss","native_name":"עברית","day_format_narrow":["ב","ג","ד","ה","ו","ש","א"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%H:%M:%S","native_script":null,"month_format_abbreviated":["ינו","פבר","מרס","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],"default_date_format_length":"medium","day_stand_alone_narrow":["ב","ג","ד","ה","ו","ש","א"],"day_format_abbreviated":["יום ב'","יום ג'","יום ד'","יום ה'","יום ו'","שבת","יום א'"],"datetime_format_medium":"dd/MM/yyyy HH:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"“","quotation_end":"”","alternate_quotation_start":"\"","alternate_quotation_end":"\""},"orientation":{"lines":"top-to-bottom","characters":"right-to-left"},"posix":{"nostr":"לא:ל","yesstr":"כן:כ"},"plural_forms":{"category_list":["one","other"],"category_rules_function":null,"category_rules":{"one":"n is 1"},"category_rules_compiled":{"one":function (n) {if ( (( n == 1))) { return 'one'; } return;}}},"cldr_formats":{"territory":"{0}","_decimal_format_decimal":".","language":"{0}","percent":"#,##0%","locale":"{0} ({1})","_decimal_format_group":",","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, או {1}","2":"{0} או {1}"},"list":{"middle":"{0}, {1}","2":"{0} ו-{1}","start":"{0}, {1}","end":"{0} ו-{1}"}},"fallback":["en"],"characters":{"more_information":"?"}};

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