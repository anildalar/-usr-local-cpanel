//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator-vi.js
// Module:    /templates/mod_security/directives/ruleVendorUrlValidator-vi
// Locale:    vi
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The URL must contain a protocol, domain, and file name in the correct format. (Example: [asis,https://example.com/example/meta_example.yaml])":"URL phải chứa giao thức, miền và tên tệp ở đúng định dạng. (Ví dụ: [asis,https://example.com/example/meta_example.yaml])","The URL must use one of the following recognized protocols: [join,~, ,_1]":"URL phải dùng một trong các giao thức nhận dạng sau: [join,~, ,_1]","The file name must have the .yaml extension. (Example: [asis,meta_example.yaml])":"Tên tệp phải có đuôi .yaml. (Ví dụ: [asis,meta_example.yaml])","The file name must start with meta_, followed by the vendor name and have the .yaml extension. (Example: [asis,meta_example.yaml])":"Tên tệp phải bắt đầu bằng meta_, theo sau là tên nhà cung cấp và có đuôi .yaml. (Ví dụ: [asis,meta_example.yaml])","The file name must use the meta_ prefix, followed by the vendor name and a .yaml extension. The vendor name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"Tên tệp phải sử dụng meta_ prefix, theo sau là tên nhà cung cấp và đuôi tệp .yaml. Tên nhà cung cấp chỉ được chứa các ký tự thuộc nhóm sau đây: [join,~, ,_1] (Ví dụ: [asis,meta_example.yaml])","The file name must use the meta_ prefix. (Example: [asis,meta_example.yaml])":"Tên tệp phải sử dụng meta_ prefix. (Ví dụ: [asis,meta_example.yaml])","The protocol should be followed by a colon and two forward slashes. (Example: [asis,https://])":"Giao thức phải theo sau bằng dấu chấm phẩy và hai dấu gạch chéo. (Ví dụ: [asis,https://])","The vendor name part of the file name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"Phần tên nhà cung cấp trong tên tệp chỉ được chứa các ký tự thuộc nhóm sau đây: [join,~, ,_1] (Ví dụ: [asis,meta_example.yaml])"};

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