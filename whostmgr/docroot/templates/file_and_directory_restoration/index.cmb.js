/*
# file_and_directory_restoration/services/backup_API.js
#                                                    Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/

/* global define: false */

define(
    'app/services/backup_API',[
        "angular",
        "cjt/util/locale",
        "cjt/io/uapi-request",
        "cjt/io/api",
        "cjt/io/whm-v1-request",
        "cjt/io/whm-v1",
        "cjt/services/APIService"

    ],
    function(angular, LOCALE, APIREQUEST, API, WHMREQUEST, APIDRIVER) {
        "use strict";
        var app;
        try {
            app = angular.module("whm.fileAndDirectoryRestore"); // For runtime
        } catch (e) {
            app = angular.module("whm.fileAndDirectoryRestore", []); // Fall-back for unit testing
        }

        app.factory("backupAPIService", [
            "APIService",
            function(
                APIService
            ) {
                var validBackupTypes = {
                    "compressed": LOCALE.maketext("Compressed"),
                    "uncompressed": LOCALE.maketext("Uncompressed"),
                    "incremental": LOCALE.maketext("Incremental")
                };

                /**
                 * Parse raw data for consumption by front end
                 *
                 * @private
                 * @method parseBackupData
                 * @param  {object} backupData - raw data object
                 * @return {object} parsed data for front end
                 */
                function parseBackupData(backupData) {
                    var backups = backupData.data;
                    var parsedBackups = [];

                    backups.forEach(function(backup) {
                        backup.mtime = LOCALE.local_datetime(parseInt(backup.mtime, 10), "datetime_format_short");
                        if (validBackupTypes.hasOwnProperty(backup.backupType)) {
                            backup.backupType = validBackupTypes[backup.backupType];
                        } else {
                            throw "DEVELOPER ERROR: Invalid backup type";
                        }
                        parsedBackups.push(backup);
                    });

                    return parsedBackups;
                }

                function parseHomeDirectory(accountData) {
                    accountData = accountData.data[0];
                    var homeDirectory = "/" + accountData.partition + "/" + accountData.user + "/";
                    return homeDirectory;
                }

                // Set up the service's constructor and parent
                var BackupAPIService = function() {};
                BackupAPIService.prototype = new APIService();

                // Extend the prototype with any class-specific functionality
                angular.extend(BackupAPIService.prototype, {

                    /**
                     * Get a list of all directories and files of a given path
                     * @public
                     * @method listDirectory
                     * @param {string} path The full path of the directory
                     * @param {string} accountName Name of user to get backups for
                     * @param {string} pageStart The item index of start position
                     * @param {string} pageSize Number of items in each page requested
                     * @return {Promise} Promise that will fulfill the request.
                     */
                    listDirectoryContents: function(path, accountName, pageStart, pageSize) {
                        var apiCall = new WHMREQUEST.Class();
                        apiCall.initialize("", "cpanel");
                        apiCall.addArgument("cpanel_jsonapi_user", accountName);
                        apiCall.addArgument("cpanel_jsonapi_module", "Restore");
                        apiCall.addArgument("cpanel_jsonapi_func", "directory_listing");
                        apiCall.addArgument("cpanel_jsonapi_apiversion", "3");
                        apiCall.addArgument("path", path);

                        // Pagination (UAPI doesn't support standard apiCall.addPaging(), so adding individual args)
                        apiCall.addArgument("api.paginate", 1);
                        apiCall.addArgument("api.paginate_start", pageStart);
                        apiCall.addArgument("api.paginate_size", pageSize);

                        var deferred = this.deferred(apiCall, {
                            transformAPISuccess: function(response) {
                                return response;
                            },
                            transformAPIFailure: function(response) {
                                return response.error;
                            }
                        });

                        return deferred.promise;
                    },

                    getUserHomeDirectory: function(userName) {
                        var apiRequest = new WHMREQUEST.Class();
                        apiRequest.initialize("", "accountsummary");
                        apiRequest.addArgument("user", userName);

                        var deferred = this.deferred(apiRequest, {
                            transformAPISuccess: parseHomeDirectory
                        });
                        return deferred.promise;
                    },

                    /**
                     * Get all users in WHM account with backups enabled
                     * @public
                     * @method listUsers
                     * @return {Promise} Promise that will fulfill the request.
                     **/
                    listUsers: function(accountName) {
                        var deferred;
                        var apiCall = new WHMREQUEST.Class();
                        if (accountName !== "root") {
                            apiCall.initialize("", "cpanel");
                            apiCall.addArgument("cpanel_jsonapi_user", accountName);
                            apiCall.addArgument("cpanel_jsonapi_module", "Restore");
                            apiCall.addArgument("cpanel_jsonapi_func", "get_users");
                            apiCall.addArgument("cpanel_jsonapi_apiversion", "3");

                            deferred = this.deferred(apiCall, {
                                transformAPISuccess: function(response) {
                                    if (response.data !== null) {
                                        return response.data.map( function(x) {
                                            return { user: x };
                                        } );
                                    }
                                    return [];
                                },
                                transformAPIFailure: function(response) {
                                    return response.error;
                                }
                            });
                            return deferred.promise;
                        }
                        apiCall.initialize("", "get_users_and_domains_with_backup_metadata");

                        deferred = this.deferred(apiCall, {
                            transformAPISuccess: function(response) {
                                if (response.data !== null) {
                                    return Object.keys(response.data).map( function(x) {
                                        return { user: x, domain: response.data[x] };
                                    } );
                                }
                                return [];
                            },
                            transformAPIFailure: function(response) {
                                return response.error;
                            }
                        });
                        return deferred.promise;
                    },

                    /**
                     * Get all backups of a particular file
                     * @public
                     * @method listBackups
                     * @param {string} fullPath The full path of the file
                     * @param {string} accountName The cpanel user name
                     * @return {Promise} Promise that will fulfill the request.
                     */
                    listBackups: function(path, accountName, exists) {
                        var apiCall = new WHMREQUEST.Class();
                        apiCall.initialize("", "cpanel");
                        apiCall.addArgument("cpanel_jsonapi_user", accountName);
                        apiCall.addArgument("cpanel_jsonapi_module", "Restore");
                        apiCall.addArgument("cpanel_jsonapi_func", "query_file_info");
                        apiCall.addArgument("cpanel_jsonapi_apiversion", "3");
                        apiCall.addArgument("path", path);
                        apiCall.addArgument("exists", exists);

                        var deferred = this.deferred(apiCall, {
                            transformAPISuccess: parseBackupData,

                            transformAPIFailure: function(response) {
                                return response.error;
                            }
                        });

                        return deferred.promise;
                    },

                    /**
                     * Restore a single file
                     * @public
                     * @method restore
                     * @param {string} fullPath The full path of the file
                     * @param {string} backupID The full path of the backup
                     * @return {Promise} Promise that will fulfill the request.
                     */
                    restoreBackup: function(path, backupID, accountName) {
                        var apiCall = new WHMREQUEST.Class();
                        apiCall.initialize("", "cpanel");
                        apiCall.addArgument("cpanel_jsonapi_user", accountName);
                        apiCall.addArgument("cpanel_jsonapi_module", "Restore");
                        apiCall.addArgument("cpanel_jsonapi_func", "restore_file");
                        apiCall.addArgument("cpanel_jsonapi_apiversion", "3");
                        apiCall.addArgument("backupID", backupID);
                        apiCall.addArgument("path", path);
                        apiCall.addArgument("overwrite", 1);

                        var deferred = this.deferred(apiCall, {
                            transformAPISuccess: function(response) {
                                return response.data;
                            },
                            transformAPIFailure: function(response) {
                                return response.error;
                            }
                        });

                        return deferred.promise;
                    },
                });

                return new BackupAPIService();
            }
        ]);
    }
);

/*
# file_and_directory_restoration/views/backup_restore.js
#                                                    Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/

/* global define: false */

define(
    'app/views/backup_restore',[
        "angular",
        "lodash",
        "cjt/util/table",
        "cjt/util/locale",
        "cjt/util/parse",
        "app/services/backup_API",
        "cjt/services/alertService",
        "cjt/directives/alertList",
        "cjt/directives/alert",
        "cjt/services/cpanel/componentSettingSaverService",
    ],
    function(angular, _, Table, LOCALE, PARSE) {
        "use strict";

        // Retrieve the current application
        var app = angular.module("whm.fileAndDirectoryRestore");

        // Setup the controller
        var controller = app.controller(
            "listController", [
                "$scope",
                "$filter",
                "$anchorScroll",
                "backupAPIService",
                "componentSettingSaverService",
                "alertService",
                function(
                    $scope,
                    $filter,
                    $anchorScroll,
                    backupAPIService,
                    componentSettingSaverService,
                    alertService
                ) {

                    var directoryContentsTable = new Table();
                    directoryContentsTable.setSort("name", "asc");

                    var backupsTable = new Table();
                    backupsTable.setSort("backupDate,backupType,lastModifiedTime,fileSize", "desc");

                    function getDirectoryContentsPagination(componentName, account) {
                        return componentSettingSaverService.get(componentName)
                            .then(function(pagination) {
                                if (!pagination) {
                                    registerComponent(componentName, account);
                                } else {
                                    $scope.directoryContentsMeta.pageSize = pagination.pageSize;
                                    getDirectoryContents($scope.currentDirectory, account.user, $scope.directoryContentsMeta.start, $scope.directoryContentsMeta.pageSize);
                                }
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "danger",
                                    message: error,
                                    group: "whm-restoration",
                                    closeable: true
                                });
                            });
                    }

                    function registerComponent(componentName, account) {
                        return componentSettingSaverService.register(componentName)
                            .then(function(componentResponse) {
                                setPagination(componentName, account);
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "danger",
                                    message: error,
                                    group: "whm-restoration",
                                    closeable: true
                                });
                            });

                    }

                    function clearDirectoryContentsTableData() {
                        directoryContentsTable.items = [];
                        directoryContentsTable.filteredList = [];
                        directoryContentsTable.last_id = 0;
                    }

                    function buildBackupPaths(directoryContents) {
                        var addedPath = [];

                        directoryContents.forEach(function(content) {
                            if (!content.backupPath || !content.parentDir) {
                                if ($scope.currentDirectory === "/") {
                                    content["backupPath"] = "/" + content.name;
                                    content["parentDir"] = "/";
                                } else {
                                    content["backupPath"] = $scope.currentDirectory + content.name;
                                    content["parentDir"] = $scope.currentDirectory;
                                }
                            }
                            addedPath.push(content);
                        });
                        $scope.parentDirectory = $scope.currentDirectory;
                        return addedPath;
                    }

                    function createGoToPageNumbers(metadata) {
                        var goToPages = [];
                        var i = 1;
                        while (i <= metadata.total_pages) {
                            i.toString();
                            goToPages.push(i);
                            parseInt(i, 10);
                            i++;
                        }
                        $scope.goToPages = goToPages;
                    }

                    function updateDirectoryContentsTable(pagination) {

                        // This is a hacky way of making sure that the table is updated properly
                        $scope.directoryContentsMeta.pageNumber = 1;

                        directoryContentsTable.update();

                        // Overwrite pagination created by table because API call was paginated
                        $scope.directoryContentsMeta.maxPages = parseInt(pagination.total_pages, 10);
                        $scope.directoryContentsMeta.totalItems = parseInt(pagination.total_records, 10);
                        $scope.directoryContentsMeta.start = parseInt(pagination.current_record, 10);
                        $scope.directoryContentsMeta.pageNumber = pagination.current_page;

                        if (($scope.directoryContentsMeta.start + $scope.directoryContentsMeta.pageSize) > $scope.directoryContentsMeta.totalItems) {
                            $scope.directoryContentsMeta.limit = $scope.directoryContentsMeta.totalItems;
                        } else {
                            $scope.directoryContentsMeta.limit = ($scope.directoryContentsMeta.start + $scope.directoryContentsMeta.pageSize) - 1;
                        }

                        $scope.directoryContents = directoryContentsTable.getList();
                        $scope.directoryContentsPaginationMessage = directoryContentsTable.paginationMessage();
                    }

                    function loadDirectoryContentsTable(directoryContents, pagination) {
                        directoryContentsTable.load(directoryContents);
                        createGoToPageNumbers(pagination);
                        updateDirectoryContentsTable(pagination);
                    }

                    function getDirectoryContents(directoryPath, accountUser, pageStart, pageSize) {
                        clearDirectoryContentsTableData();
                        return backupAPIService.listDirectoryContents(directoryPath, accountUser, pageStart, pageSize)
                            .then(function(directoryContents) {
                                var tempContents = buildBackupPaths(directoryContents.data);
                                loadDirectoryContentsTable(tempContents, directoryContents.meta.paginate);
                            })
                            .catch(function(error) {
                                $scope.noMetadataMessage = error;
                            })
                            .finally(function() {
                                $scope.accountUser = accountUser;
                                $scope.inCpanel = true;
                                $scope.actions.loadingUI = false;
                                $scope.actions.loadingData = false;
                                if ($scope.directoryContents.length === 0) {
                                    $scope.emptyDirectory = true;
                                } else {
                                    $scope.emptyDirectory = false;
                                }
                            });
                    }

                    function setPagination(componentName, account) {
                        return componentSettingSaverService.set(componentName, {
                            pageSize: $scope.directoryContentsMeta.pageSize
                        })
                            .then(function(response) {
                                var user;
                                if (account) {
                                    user = account.user;
                                } else {
                                    user = $scope.accountUser;
                                }
                                $scope.directoryContentsMeta.start = formatPaginationStart($scope.directoryContentsMeta);
                                getDirectoryContents($scope.currentDirectory, user, $scope.directoryContentsMeta.start, $scope.directoryContentsMeta.pageSize);
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "danger",
                                    message: error,
                                    group: "backup-restortion",
                                    closeable: true
                                });
                            });
                    }

                    function checkForSlashAtStart(path) {
                        if (path.indexOf("/") !== 0) {
                            path = "/" + path;
                        }
                        return path;
                    }

                    function createBackupTable() {
                        backupsTable.update();
                        $scope.backupsMeta = backupsTable.getMetadata();
                        $scope.backupList = backupsTable.getList();
                        $scope.backupsPaginationMessage = backupsTable.paginationMessage();
                    }

                    function getBackupList(path, exists) {
                        return backupAPIService.listBackups(path, $scope.accountUser, exists)
                            .then(function(backupList) {
                                if (exists) {
                                    $scope.doesContentExist = PARSE.parsePerlBoolean(backupList[0].exists);
                                }
                                $anchorScroll("backupsPanel");
                                $scope.isContentTypeDirectory = backupList[0].type === "dir" ? true : false;
                                $scope.isBackupSelected = true;
                                backupsTable.load(backupList);
                                createBackupTable();
                            })
                            .catch(function(error) {
                                $scope.getBackupsError = error;
                            })
                            .finally(function() {
                                $scope.actions.loadingBackups = false;
                            });
                    }

                    function formatPaginationStart(directoryContentsMeta) {
                        var start = ((directoryContentsMeta.pageNumber - 1) * directoryContentsMeta.pageSize) + 1;
                        return start;
                    }

                    function buildBreadcrumb(content) {
                        var breadCrumbArray = content.split("/");
                        $scope.breadCrumb = breadCrumbArray.slice(1, breadCrumbArray.length - 1);
                    }

                    function restoreBackup(backup) {
                        $scope.actions.restoring = true;
                        return backupAPIService.restoreBackup(backup.path, backup.backupID, $scope.accountUser)
                            .then(function(response) {
                                alertService.add({
                                    type: "success",
                                    message: LOCALE.maketext("The system successfully restored the “[_1]” backup file from the date “[_2]”.", _.escape(backup.path), _.escape(backup.backupDate)),
                                    autoClose: 10000,
                                    group: "whm-restoration"
                                });
                                $scope.clearBackupList();
                                $scope.goToDirectory($scope.currentDirectory);
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "danger",
                                    message: error,
                                    closeable: true,
                                    group: "whm-restoration"
                                });
                                $scope.toggleRestoreConfirmation();
                            })
                            .finally(function() {
                                $scope.actions.restoring = false;
                            });
                    }

                    function clearAccountData() {
                        $scope.isPathInputEmpty = true;
                        $scope.clearBackupList();
                        $scope.breadCrumb = [];
                        $scope.currentDirectory = "/";
                    }

                    $scope.scrollToBackupList = function() {
                        $anchorScroll("backupsPanel");
                    };

                    $scope.sortDirectoryContentsTable = function() {

                        // necessary because Table directive pagination is not handling total items
                        var totalItems = $scope.directoryContentsMeta.totalItems;

                        if ($scope.directoryContentsMeta.pageNumber >= 2) {
                            var tempPageNumber = $scope.directoryContentsMeta.pageNumber;
                            directoryContentsTable.meta.pageNumber = 1;
                            directoryContentsTable.update();
                            directoryContentsTable.meta.pageNumber = tempPageNumber;
                        } else {
                            directoryContentsTable.update();
                        }
                        $scope.directoryContentsMeta.totalItems = totalItems;
                        $scope.directoryContents = directoryContentsTable.getList();
                    };

                    $scope.navigateBreadcrumb = function(directoryPath) {
                        $scope.actions.loadingData = true;
                        var parsedPath = "/";
                        for (var i = 0, len = $scope.breadCrumb.length; i < len; i++) {
                            if (directoryPath === $scope.breadCrumb[i]) {
                                parsedPath = parsedPath + $scope.breadCrumb[i] + "/";
                                break;
                            } else {
                                parsedPath = parsedPath + $scope.breadCrumb[i] + "/";
                            }

                        }
                        $scope.currentDirectory = parsedPath;
                        var start = 1;
                        getDirectoryContents($scope.currentDirectory, $scope.accountUser, start, $scope.directoryContentsMeta.pageSize);
                        buildBreadcrumb($scope.currentDirectory);
                    };

                    $scope.goToDirectory = function(directoryPath) {
                        $scope.actions.loadingData = true;
                        var start;

                        if (directoryPath === "/") {
                            $scope.breadcrumb = "";
                        }

                        // Remove backup list if navigating to a different directory
                        $scope.clearBackupList();

                        // The current directory and the directory path will be the same when this function
                        // is called after successfully restoring a backup
                        if ($scope.currentDirectory === directoryPath) {
                            start = formatPaginationStart($scope.directoryContentsMeta);
                        } else {
                            $scope.currentDirectory = directoryPath;
                            var pathLength = $scope.currentDirectory.length;

                            if ($scope.currentDirectory.charAt(pathLength - 1) !== "/") {
                                $scope.currentDirectory = $scope.currentDirectory + "/";
                            }
                            start = 1;
                        }
                        getDirectoryContents($scope.currentDirectory, $scope.accountUser, start, $scope.directoryContentsMeta.pageSize);
                        buildBreadcrumb($scope.currentDirectory);
                    };

                    $scope.setDirectoryContentsPage = function(updatePageSize, account) {
                        $scope.actions.loadingData = true;
                        if (updatePageSize) {
                            setPagination("whm_file_and_dir_restoration");
                        } else {
                            $scope.directoryContentsMeta.start = formatPaginationStart($scope.directoryContentsMeta);
                            getDirectoryContents($scope.currentDirectory, $scope.accountUser, $scope.directoryContentsMeta.start, $scope.directoryContentsMeta.pageSize, $scope.directoryContentsMeta.pageNumber);
                        }
                    };

                    $scope.listBackups = function(backupPath, doesContentExist) {

                        // when retrieving backup by directory browse, query_file_info API call
                        // does not need to check for item existing
                        var exists = 0;
                        $scope.actions.loadingBackups = true;
                        $scope.clearBackupList();
                        $scope.selectedContent = backupPath;
                        $scope.doesContentExist = doesContentExist;
                        return getBackupList(backupPath, exists);
                    };

                    $scope.clearBackupList = function() {
                        $scope.toggleRestoreConfirmation();
                        $scope.getBackupsError = "";
                        $scope.isBackupSelected = false;
                        $scope.selectedContent = "";
                    };

                    $scope.toggleRestoreConfirmation = function(backup) {
                        if (backup) {
                            $scope.confirmSelected = backup.backupDate;
                            $scope.isConfirmingRestoration = true;
                        } else {
                            $scope.confirmSelected = "";
                            $scope.isConfirmingRestoration = false;
                        }
                    };

                    $scope.restoreSelectedBackup = function(backup) {
                        return restoreBackup(backup);
                    };

                    $scope.getBackupsPanelClass = function(isPanelOpen) {
                        var panelClass = "panel panel-default";
                        if (isPanelOpen) {
                            panelClass = panelClass + " restorationPanel";
                        }
                        return panelClass;
                    };

                    $scope.getDirContentsPanelClass = function(isPanelOpen) {
                        var panelClass = "panel panel-default";
                        if (isPanelOpen) {
                            panelClass = panelClass + " restorationPanel";
                        }
                        return panelClass;
                    };

                    $scope.getUserHomeDir = function(account) {
                        return backupAPIService.getUserHomeDirectory(account.user)
                            .then(function(response) {
                                $scope.userHomeDirDisplay = response;
                                $scope.parseAccountRequest(account);
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "danger",
                                    message: error,
                                    closeable: true,
                                    group: "whm-restoration"
                                });
                            });
                    };

                    $scope.parseAccountRequest = function(account) {
                        var paginationComponent = "whm_file_and_dir_restoration";
                        return getDirectoryContentsPagination(paginationComponent, account);
                    };

                    $scope.checkForEmptyInput = function(pathInput) {
                        if (pathInput === "") {
                            $scope.isPathInputEmpty = true;
                        } else {
                            $scope.isPathInputEmpty = false;
                        }
                    };

                    $scope.findByPathInput = function(path) {

                        // when getting backups by path input we need the query_file_info API to return if that item
                        // exists locally
                        var exists = 1;
                        path = checkForSlashAtStart(path);
                        $scope.clearBackupList();
                        $scope.selectedContent = path;
                        return getBackupList(path, exists);
                    };

                    /**
                     * Get list of all user accounts listed in WHM
                     *
                     * @scope
                     * @method getAccounts
                     **/
                    $scope.getAccounts = function() {
                        clearAccountData();
                        return backupAPIService.listUsers(window.loggedInUser)
                            .then(function(accounts) {
                                $scope.accounts = $scope.orderAccounts(accounts) || [];
                                $scope.currentDirectoryContent = [];
                                $scope.backupList = [];
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "danger",
                                    message: LOCALE.maketext("File restoration failure: [_1]", error),
                                    closeable: true,
                                    group: "whm-restoration"
                                });
                            })
                            .finally(function() {
                                $scope.inCpanel = false;
                                $scope.initialDataLoaded = true;
                            });
                    };

                    /**
                     * Sort array of accounts in alpha order by username
                     *
                     * @method orderAccounts
                     * @param  {Array.<Object>} unorderedAccounts - list of unordered accounts
                     * @return {Array.<Object>} - list of accounts in alpha order by user
                     */
                    $scope.orderAccounts = function(unorderedAccounts) {
                        var orderedAccounts;
                        orderedAccounts = $filter("orderBy")(unorderedAccounts, "user");
                        return orderedAccounts;
                    };

                    /**
                     * Initializes data
                     * @scope
                     * @method init
                     **/

                    $scope.init = function() {
                        $scope.inCpanel = false;
                        $scope.isPathInputEmpty = true;
                        $scope.currentDirectory = "/";
                        $scope.homeDir = "/";
                        $scope.navigateMethod = "input";
                        $scope.dirContentsPanelOpen = true;
                        $scope.backupsPanelOpen = true;
                        $scope.directoryContentsMeta = directoryContentsTable.getMetadata();
                        $scope.backupsMeta = backupsTable.getMetadata();
                        $scope.doesContentExistInfo = LOCALE.maketext("When you restore a backup, the system will overwrite existing files and restore deleted files.");
                        $scope.findByPathInfo = LOCALE.maketext("Enter the exact path to the file or directory that you wish to restore.");

                        $scope.initialDataLoaded = false;
                        $scope.getAccounts();

                        $scope.actions = {
                            loadingData: false
                        };
                    };
                    $scope.init();
                }
            ]
        );

        return controller;
    }
);

/*
# file_and_directory_restoration/filters/file_size_filter.js
#                                                    Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/

/* global define: false */

define(
    'app/filters/file_size_filter',[
        "angular",
        "cjt/util/locale"
    ],
    function(angular, LOCALE) {
        "use strict";

        // Retrieve the current application
        var app;
        try {
            app = angular.module("whm.fileAndDirectoryRestore"); // For runtime
        } catch (e) {
            app = angular.module("whm.fileAndDirectoryRestore", []); // Fall-back for unit testing
        }

        app.filter("convertedSize", function() {
            return function(size) {
                if (typeof size !== "number" || isNaN(size)) {
                    return LOCALE.maketext("N/A");
                }
                return LOCALE.format_bytes(size);
            };
        });
    });

/*
# whostmgr/docroot/templates/file_and_directory_restoration/index.js
#                                                 Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/
/* global require: false, define: false */

define(
    'app/index',[
        "angular",
        "cjt/core",
        "cjt/modules",
        "ngRoute",
        "uiBootstrap"
    ],
    function(angular, CJT) {
        "use strict";
        return function() {
            angular.module("whm.fileAndDirectoryRestore", [
                "cjt2.config.whm.configProvider", // This needs to load first
                "ngRoute",
                "ui.bootstrap",
                "cjt2.whm"
            ]);

            var app = require(
                [
                    "cjt/bootstrap",
                    "cjt/views/applicationController",
                    "app/views/backup_restore",
                    "app/filters/file_size_filter"
                ],
                function(BOOTSTRAP) {

                    var app = angular.module("whm.fileAndDirectoryRestore");

                    app.config([
                        "$routeProvider",
                        function($routeProvider) {
                            $routeProvider.when("/backup_restore", {
                                controller: "listController",
                                templateUrl: "file_and_directory_restoration/views/backup_restore.ptt"
                            });

                            $routeProvider.otherwise({
                                "redirectTo": "/backup_restore"
                            });
                        }
                    ]);

                    BOOTSTRAP(document, "whm.fileAndDirectoryRestore");

                });

            return app;
        };
    }
);
