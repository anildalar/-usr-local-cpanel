/*
# cpanel - base/webmail/jupiter/mail/lists/delegated_lists.devel.js
#                                                  Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/

/* global require: false */

// Loads the application with the pre-built combined files

/*
 *  This is essentially a wrapper function that redirects to the main delegated_lists file
 *  it could be tweaked to run delegated_lists differently in development form.
 *  'app' is defined dynamically and overriden by the config in cjt2-dist/config.js
 *
 */

require(
    [
        "master/master",
        "app/delegated_lists",
    ],
    function(MASTER, APP) {
        MASTER();
        APP();
    }
);