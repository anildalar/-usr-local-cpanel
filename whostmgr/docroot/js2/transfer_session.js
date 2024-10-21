/* global DOM:false, EVENT:false */
/* jshint -W020 */
/* jshint -W030 */
/* jshint -W004 */
/* jshint -W117 */
/* jshint -W098 */
(function() {
    var alertFallback = true;
    if (typeof console === "undefined" || typeof console.log === "undefined") {
        console = {};
        if (alertFallback) {
            console.log = function(msg) {
                alert(msg);
            };
        } else {
            console.log = function() {};
        }
    }

    var quickDiv = function(thisid, thisclass, thisinner) {
        var thisDiv = document.createElement("div");
        thisDiv.id = thisid;
        if (thisclass) {
            thisDiv.className = thisclass;
        }
        if (thisinner) {
            thisDiv.innerHTML = thisinner;
        }
        return thisDiv;
    };
    var quickButton = function(thisid, thisvalue) {
        var thisButton = document.createElement("button");
        try {
            thisButton.type = "button";
        } catch (e) {

        }
        thisButton.className = "btn btn-primary";
        thisButton.id = thisid;
        thisButton.name = thisid;
        thisButton.title = thisvalue;

        var thisButtonHtml = document.createElement("div");
        thisButtonHtml.className = "button-text";

        thisButton.appendChild(thisButtonHtml);
        return thisButton;
    };

    var createOverviewDiv = function() {
        var containerEl = document.getElementById("content"),
            overviewContainer = quickDiv("overview", "row"),
            overviewColumn = quickDiv("overviewCol", "col-md-6"),
            overviewDiv = quickDiv("overviewWell", "well text-info clearfix"),
            stateDiv = quickDiv("state", "overview_bar"),
            mainspinDiv = quickDiv("mainspin", "overview_bar"),
            spinImg = document.createElement("img");

        var pauseButton;

        spinImg.src = CPANEL.PAGE.spinner16;
        spinImg.className = "spinner";
        spinImg.id = "main_spinner";
        mainspinDiv.appendChild(spinImg);
        var controlDiv = quickDiv("control", "overview_bar");
        if (CPANEL.PAGE.state === "PAUSED") {
            pauseButton = quickButton("pause", LOCALE.maketext("Pause"));
        } else if (CPANEL.PAGE.state === "PAUSING") {
            pauseButton = quickButton("pause", LOCALE.maketext("Pausing …"));
        } else {
            pauseButton = quickButton("pause", LOCALE.maketext("Resume"));
        }
        DOM.addClass(pauseButton, "control_button");
        controlDiv.appendChild(pauseButton);

        var abortButton;
        if (CPANEL.PAGE.state === "RUNNING" || CPANEL.PAGE.state === "PENDING") {
            abortButton = quickButton("abort", LOCALE.maketext("Abort"));
        } else if (CPANEL.PAGE.state === "ABORTING") {
            abortButton = quickButton("abort", LOCALE.maketext("Aborting …"));
        } else {
            abortButton = quickButton("abort", LOCALE.maketext("Loading …"));
        }
        DOM.addClass(abortButton, "control_button");
        controlDiv.appendChild(abortButton);

        overviewContainer.appendChild(overviewColumn);
        overviewColumn.appendChild(overviewDiv);
        overviewDiv.appendChild(mainspinDiv);
        overviewDiv.appendChild(stateDiv);
        overviewDiv.appendChild(controlDiv);

        containerEl.insertBefore(overviewContainer, containerEl.childNodes[0]);
    };


    var TransferAlertHandler = function() {

        this._currentPrompt;
        this._alerts = [];
        this._showNextPrompt = function() {
            if (this._alerts.length) {
                var nextDialogOptions = this._alerts.shift();
                this._showPrompt(nextDialogOptions);
            }
        };
        this._showPrompt = function(settings) {
            var self = this;
            var options = settings.options || {};
            var defaultOptions = {
                modal: true,
                close: true,
                fixedcenter: true,
                show_status: true,
                progress_overlay: false,
                hideaftersubmit: true,
                width: "500px",
                zIndex: 3
            };

            options = YAHOO.lang.augmentObject(options, defaultOptions);
            this._currentPrompt = new CPANEL.ajax.Common_Dialog(settings.dialogID, options);

            this._currentPrompt.hideEvent.subscribe(function(o) {
                setTimeout(function() {
                    self._currentPrompt = null;
                    self._showNextPrompt.call(self);
                }, 50);
            });

            this._currentPrompt.setHeader("<div class='lt'></div><span>" + settings.header + "</span><div class='rt'></div>");
            this._currentPrompt.setBody("<p width=400>" + settings.body + "</p>");

            if (settings.confirmFunction) {
                this._currentPrompt.submitEvent.subscribe(function() {
                    settings.confirmFunction.call(settings.confirmFunctionContext);
                });
            }

            this._currentPrompt.center();
            this._currentPrompt.show();
        };
        this._addPrompt = function(options) {
            this._alerts.push(options);

            if (!this._currentPrompt) {
                this._showNextPrompt();
            }
        };

        this.alert = function(header, body) {

            /* if the state is changing from running to pausing, display message regarding pause delay */
            var header = header || LOCALE.maketext("Alert");
            var buttons = [];
            var options = {
                "dialogID": "commonAlert",
                "header": header,
                "body": body,
                "options": {
                    buttons: [
                        YAHOO.lang.augmentObject({
                            text: LOCALE.maketext("OK")
                        }, CPANEL.ajax.Common_Dialog.default_options.buttons[0])
                    ]
                }
            };
            return this._addPrompt.call(this, options);
        };
        this.confirm = function(header, body, confirmFunction, confirmFunctionContext) {

            /* if the state is changing from running to pausing, display message regarding pause delay */
            var header = header || LOCALE.maketext("Confirm");
            var buttons = [];
            var options = {
                "dialogID": "commonConfirm",
                "header": header,
                "body": body,
                "options": {
                    buttons: []
                },
                "confirmFunction": confirmFunction,
                "confirmFunctionContext": confirmFunctionContext
            };
            while (options.options.buttons.length < CPANEL.ajax.Common_Dialog.default_options.buttons.length) {
                var nIndex = options.options.buttons.length;
                options.options.buttons[nIndex] = YAHOO.lang.augmentObject({}, CPANEL.ajax.Common_Dialog.default_options.buttons[nIndex]);
            }
            return this._addPrompt.call(this, options);
        };

    };

    /**
     * Callback function for state change of transfer session
     * @method transferSessionStateChanged
     * @param {state} new state the _masterProcessorObj was set to
     * @param {oldState} old state the _masterProcessorObj was previously set to
     */
    var transferSessionStateChanged = function(state, oldState) {
        var header;
        var body;
        var dialogId;

        if (state === "PAUSING" && oldState === "RUNNING") {

            /* if the state is changing from running to pausing, display message regarding pause delay */
            header = LOCALE.maketext("Pausing queue processing …");
            body = LOCALE.maketext("The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.");
            dialogId = "pauseMessage";
        } else if (state === "ABORTING" && (oldState === "RUNNING" || oldState === "PAUSED")) {
            header = LOCALE.maketext("Abort Session Processing");
            body = LOCALE.maketext("The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.");
            dialogId = "abortMessage";
        }

        if (dialogId) {
            window.AlertHandler.alert(header, body);
        }
    };

    var initFn = function() {

        createOverviewDiv();

        var appNameEl = ((document.getElementsByTagName("h1"))[0].getElementsByTagName("span"))[0];
        window.AlertHandler = new TransferAlertHandler();
        var transfer_opts = {
            "transfer_session_id": CPANEL.PAGE.transfer_session_id,
            "appNameEl": appNameEl,
            "action": CPANEL.PAGE.action,
            "windowsEl": DOM.get("windows"),
            "pauseEl": DOM.get("pause"),
            "abortEl": DOM.get("abort"),
            "stateEl": DOM.get("state"),
            "errorEl": DOM.get("error_messages"),
            "errorMessage": DOM.get("errorDetailsMessage"),
            "errorContent": DOM.get("errorDetailsWrapper"),
            "summaryHeaderEl": DOM.get("summary_header"),
            "state": CPANEL.PAGE.state,
            "spinnerHTML": "<img src='" + CPANEL.PAGE.spinner16 + "' class='spinner'>"
        };

        var transferSessionObj = new TransferSession(transfer_opts);
        transferSessionObj.add_state_change_listener(window, transferSessionStateChanged);
        transferSessionObj.init();
    };

    EVENT.onDOMReady(initFn);
})();
