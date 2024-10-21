//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sqlui.js
// Generated: /usr/local/cpanel/base/sharedjs/sqlui-vi.js
// Module:    legacy_shared/sqlui-vi
// Locale:    vi
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"Đóng","If you change this database’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"Nếu đổi tên cơ sở dữ liệu này thì không đổi được tên ngược lại thành “[_1]”. Đây là vì tên cũ thiếu tiền tố tên người dùng ([_2]) mà hệ thống này yêu cầu đối với tên của mọi cơ sở dữ liệu và người dùng cơ sở dữ liệu mới. Nếu yêu cầu tên không có tiền tố, bạn phải liên hệ quản trị viên máy chủ.","If you change this user’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"Nếu đổi tên người dùng này thì không đổi được tên ngược lại thành “[_1]”. Đây là vì tên cũ thiếu tiền tố tên người dùng ([_2]) mà hệ thống này yêu cầu đối với tên của mọi cơ sở dữ liệu và người dùng cơ sở dữ liệu mới. Nếu yêu cầu tên không có tiền tố, bạn phải liên hệ quản trị viên máy chủ.","It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.":"It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.","Rename Database":"Đổi Tên Cơ Sở Dữ Liệu:","Rename Database User":"Đổi Tên Người Dùng Cơ Sở Dữ Liệu","Renaming database user …":"Đang đổi tên người dùng cơ sở dữ liệu …","Renaming database …":"Đang đổi tên cơ sở dữ liệu …","Success! The browser is now redirecting …":"Thành Công! Trình duyệt hiện đang chuyển hướng …","Success! This page will now reload.":"Thành Công! Trang này hiện sẽ tải lại.","The new name must be different from the old name.":"Tên mới phải khác tên cũ."};

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
