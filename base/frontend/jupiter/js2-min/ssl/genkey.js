(function(window){"use strict";var YAHOO=window.YAHOO;var EVENT=YAHOO.util.Event;var DOM=YAHOO.util.Dom;EVENT.onDOMReady((function(){EVENT.on("show-gen-details","click",(function(e){EVENT.preventDefault(e);DOM.setStyle("details","display","block");return false}))}))})(window);