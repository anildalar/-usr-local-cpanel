/*
# cpanel - share/libraries/cjt2/src/config.debug.js
#                                                  Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/

/* WARNING -- removed: `PAGE: false` per cplint. No idea what this may impact! */
/* global module: false, global: true  */
/* exported require */

/**
 * Release Configuration
 */

(function() {
    "use strict";

    var require = (function() {

        /**
         * Trim trailing slashes to prevent // in paths.
         * @param  {String} url Url to process.
         * @return {String} Cleaned up url.
         */
        function trimTrailingSlash(url) {
            if (url) {
                return url.replace(/\/$/, "");
            }
            return url;
        }

        /**
         * Trim leading slashes to prevent // in paths.
         * @param  {String} url Url to process.
         * @return {String} Cleaned up url.
         */
        function trimLeadingSlash(url) {
            if (url) {
                return url.replace(/^\//, "");
            }
            return url;
        }

        var preamble, root, libRoot, shareRoot,
            isCjtBuild, includeApp,
            currentLocale,
            appPath, masterPath,
            localeRevision,
            appName;

        var isBrowser = typeof (window) !== "undefined";
        if (isBrowser) {

            // Gets the session token from the url
            var url = window.location.href.toString();
            var parts = url.split("/");
            var session = parts[3];
            if (session.indexOf("cpsess") !== 0) {
                session = "";
            }

            // Build the cleaned up paths
            preamble = parts.slice(0, 6).join("/");

            root = trimTrailingSlash(PAGE.THEME_PATH || "");
            root = trimTrailingSlash(PAGE.MAGIC) + root;
            root = trimTrailingSlash(root);

            libRoot = root + "/libraries";
            shareRoot = root + "/shared";
            PAGE.APP_PATH = trimLeadingSlash(trimTrailingSlash(PAGE.APP_PATH));
            isCjtBuild = false;
            includeApp = true;
            currentLocale = PAGE.currentLocale;
            appPath = PAGE.APP_PATH;
            masterPath = PAGE.masterPath;
            localeRevision = PAGE.LOCALEREVISION;
            appName = PAGE.APP_NAME;
        } else {
            preamble = global.BUILD_BASE;
            root = global.BUILD_ROOT;
            libRoot = global.BUILD_ROOT;
            shareRoot = global.BUILD_ROOT + "/..";
            isCjtBuild = global.BUILD_CJT;
            includeApp = global.INCLUDE_APP;
            currentLocale = "en";
            appPath = "";
            masterPath = "";
            localeRevision = 0;
            appName = global.APP_NAME;
        }

        var JAVASCRIPT_FILE_PATTERN = /\.js$/;
        var INTERNAL_IGNORE_PATTERN = /^_@/;
        var LIBRARY_IGNORE_PATTERN = /\/libraries\//;

        /**
         * Helper method that will flag if the file is in a legacy minified folder. Legacy
         * minified files are generated by the cpanel minifier, not r.js.
         *
         * @method hasMinFile
         * @private
         * @param  {String}  url Url requested by requirejs.
         * @return {Boolean}     true if the file should have a legacy .min file, false otherwise.
         */
        var hasMinFile = function(url) {
            return !INTERNAL_IGNORE_PATTERN.test(url) && // Ignore require js internal urls.
                !LIBRARY_IGNORE_PATTERN.test(url); // Ignore things in the library folder since they are statically mapped below
        };

        var isCombinedLocale = function(url) {
            return (/\.cmb-.*\.js/).test(url);
        };

        /**
         * Helper to apply the .min extension to the appropriate .js urls.
         *
         * @method applyDotMinToUrl
         * @private
         * @param  {String} url    Url require js build from the module name.
         * @param  {String} module Module name passed to requirejs
         * @return {String}        New url.
         */
        var applyDotMinToUrl = function(url, module) {
            if (isCombinedLocale(url)) {
                return url;
            }
            if (hasMinFile(url)) {
                url = url.replace(JAVASCRIPT_FILE_PATTERN, ".min.js");
                if (url.indexOf("locale=") === -1) {
                    url += url.indexOf("?") > -1 ? "&" : "?";
                    url += "locale_optional=1&locale=" + currentLocale + "&locale_revision=" + localeRevision;
                }
            }
            return url;
        };

        /**
         * Calculate the correct path for the application's cjt2 bundle
         *
         * @method calculateAppBundlePath
         * @param {String} appName
         * @return {String} library relative path to the bundle.
         */
        var calculateAppBundlePath = function(appName) {
            switch (appName) {
                case "cpanel":
                    return "/cjt2-dist/cjt2.cpanel.cmb.min";
                case "whostmgr":
                    return "/cjt2-dist/cjt2.whm.cmb.min";
                case "webmail":
                    return "/cjt2-dist/cjt2.webmail.cmb.min";
                case "unprotected":
                    return "/cjt2-dist/cjt2.unprotected.cmb.min";
                default:
                    return "/cjt2-dist/cjt2.whm.cmb.min";
            }
        };

        if (isBrowser && PAGE.BUILDREVISION) {
            root = "/cPanel_magic_revision_" + PAGE.BUILDREVISION + root;
            libRoot = "/cPanel_magic_revision_" + PAGE.BUILDREVISION + libRoot;
            shareRoot = "/cPanel_magic_revision_" + PAGE.BUILDREVISION + shareRoot;
        }

        var paths = {
            root: root,
            lib: libRoot,
            shared: shareRoot,

            // Setup the common modules
            cjtBuild: libRoot + calculateAppBundlePath(appName),
            frameworksBuild: libRoot + "/cjt2-dist/frameworks.cmb",

            // AMD Plugins
            text: libRoot + "/requirejs/plugins/text_2.0.12/text.min",
            locale: libRoot + "/cjt2-dist/plugins/locale",

            // Application Support Libraries
            bootstrap: libRoot + "/bootstrap/optimized/js/bootstrap.min",
            jquery: libRoot + "/jquery/current/jquery.min",
            lodash: libRoot + "/lodash/4.8.2/lodash.min",
            moment: libRoot + "/moment/optimized/moment-with-locales.min",
            qrcode: libRoot + "/qrcodejs/0.0.1/qrcode.min",

            // Angular specific libraries
            angular: libRoot + "/angularjs/1.4.4/angular.min",
            ngRoute: libRoot + "/angularjs/1.4.4/angular-route.min",
            ngAnimate: libRoot + "/angularjs/1.4.4/angular-animate.min",
            ngSanitize: libRoot + "/angularjs/1.4.4/angular-sanitize.min",
            ngAria: libRoot + "/angularjs/1.4.4/angular-aria.min",
            uiBootstrap: libRoot + "/angular-ui-bootstrap/optimized/ui-bootstrap-tpls-1.2.5.min",
            "angular-growl": libRoot + "/angular-growl-2/build/angular-growl.min",

            // Other libraries
            handlebars: libRoot + "/handlebars/handlebars.min",
            "jquery-chosen": libRoot + "/chosen/1.5.1/chosen.jquery.min",
            "angular-chosen": libRoot + "/angular-chosen/1.4.0/dist/angular-chosen.min",
            "angular-ui-scroll": libRoot + "/angular-ui-scroll/1.6.1/dist/ui-scroll.min",
            "angular-ui-scroll-grid": libRoot + "/angular-ui-scroll/1.6.1/dist/ui-scroll-grid.min",
            "angular-ui-scroll-jqlite": libRoot + "/angular-ui-scroll/1.6.1/dist/ui-scroll-jqlite.min",
            ace: libRoot + "/ace-editor/optimized/src-min-noconflict/ace",
            "xterm": libRoot + "/xtermjs/xterm.min",
            "xterm/addons/fit/fit": libRoot + "/xtermjs/addons/fit/fit.min",
            punycode: libRoot + "/punycodejs/punycode.min",
        };


        // Application Paths
        if (includeApp) {
            paths["app"] = root + "/" + appPath;
        }

        if (!isCjtBuild) {
            paths["cjt"] = libRoot + "/cjt2";
        } else {
            paths["cjt"] = "../src";
        }

        if (masterPath) {
            paths["master"] = root + "/" + masterPath;
        }


        var config = {

            // By default load any module IDs from js/lib
            baseUrl: preamble,

            // except, if the module ID starts with "app",
            // load it from the js/app directory. paths
            // config is relative to the baseUrl, and
            // never includes a ".js" extension since
            // the paths config could be for a directory.
            paths: paths,

            locale: {
                currentLocale: currentLocale,
                addMin: true,
                revision: localeRevision
            },

            transformUrl: applyDotMinToUrl,

            shim: {
                "lodash": {
                    exports: "_"
                },
                "angular": {
                    exports: "angular",
                    deps: ["jquery"]
                },
                "ngRoute": {
                    deps: ["angular"]
                },
                "ngAnimate": {
                    deps: ["angular"]
                },
                "ngSanitize": {
                    deps: ["angular"]
                },
                "ngAria": {
                    deps: ["angular"]
                },
                "uiBootstrap": {
                    deps: ["angular"]
                },
                "angular-growl": {
                    deps: ["angular"]
                },
                "bootstrap": {
                    deps: ["jquery"]
                },
                "qrcode": {
                    exports: "QRCode"
                },
                "jquery-chosen": {
                    deps: ["jquery"]
                },
                "angular-chosen": {
                    deps: ["angular", "jquery", "jquery-chosen"]
                },
                "angular-ui-scroll": {
                    deps: ["angular", "jquery"]
                },
                "angular-ui-scroll-jqlite": {
                    deps: ["angular"]
                },
                "angular-ui-scroll-grid": {
                    deps: ["angular", "angular-ui-scroll"]
                },
                "handlebars": {
                    exports: "Handlebars"
                }
            },

            // disable requireJS timeout to allow for low bandwidth situations
            waitSeconds: 0
        };

        return config;
    })();


    if (typeof (module) !== "undefined" && module.exports) {

        // We are in the build environment, so export it via exports
        module.exports.config = require;
    } else {

        // This is runtime so make it a global
        window.require = require;
    }
})();
