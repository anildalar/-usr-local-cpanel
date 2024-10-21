//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator-ar.js
// Module:    /templates/mod_security/directives/ruleVendorUrlValidator-ar
// Locale:    ar
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The URL must contain a protocol, domain, and file name in the correct format. (Example: [asis,https://example.com/example/meta_example.yaml])":"يجب أن يحتوي عنوان URL على بروتوكول ومجال واسم ملف بالتنسيق الصحيح. (مثال: [asis,https://example.com/example/meta_example.yaml])","The URL must use one of the following recognized protocols: [join,~, ,_1]":"يجب أن يكون عنوان URL أحد البروتوكولات المعترف بها التالية:[join,~, ,_1]","The file name must have the .yaml extension. (Example: [asis,meta_example.yaml])":"يجب أن يحتوي اسم الملف على الملحق ‎‏‎‏‎.yaml. (مثال: [asis,meta_example.yaml])","The file name must start with meta_, followed by the vendor name and have the .yaml extension. (Example: [asis,meta_example.yaml])":"يجب أن يبدأ اسم الملف بـ meta_، متبوعة باسم المورد والملحق .yaml. (مثال: [asis,meta_example.yaml])","The file name must use the meta_ prefix, followed by the vendor name and a .yaml extension. The vendor name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"يجب أن يستخدم اسم الملف البادئة meta_ متبوعة باسم المورد وملحق ‎‏‎‏‎.yaml. يجب أن يحتوي اسم المورّد على حروف كتلك الموجودة في المجموعة التالية فقط: [join,~, ,_1] (مثال: [asis,meta_example.yaml])","The file name must use the meta_ prefix. (Example: [asis,meta_example.yaml])":"يجب أن يستخدم اسم الملف البادئة meta_. (مثال: [asis,meta_example.yaml])","The protocol should be followed by a colon and two forward slashes. (Example: [asis,https://])":"يجب أن يتبع البروتوكول فاصلة وشرطتان مائلتان. (مثال: [asis,https://])","The vendor name part of the file name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"بعيدًا عن اسم الملف يجب أن يحتوي اسم المورد فقط على أحرف كالأحرف الموجودة في المجموعة التالية: [join,~, ,_1] (مثال: [asis,meta_example.yaml])"};

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
