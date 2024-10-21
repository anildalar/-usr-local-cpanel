(function(window){"use strict";var YAHOO=window.YAHOO;var QUEUE_TIMER_INTERVAL=250;var MAX_TAIL_ERRORS=10;var MAX_ERROR_COUNT=150;var IE_READY_STATE_MAP={uninitialized:0,loading:1,loaded:2,interactive:3,complete:4};var LogTail=function(systemId,sessionId,tail_name,masterErrorProcessorObj){this._systemId=systemId;this._sessionId=sessionId;this._logs={};this._termination_integer=Math.floor(Math.random()*1e10);this._termination_sequence="[tail_end:"+this._termination_integer+"]";this._tail_name=tail_name;this._tail_errors=0;this._deletedLogs={};this._string_position=0;this._reached_end=0;this._logsChanged=0;this._masterErrorProcessorObj=masterErrorProcessorObj};YAHOO.lang.augmentObject(LogTail.prototype,{start:function(){alert("Please use .addLog and .delLog")},abort:function(){console.trace("failed to create abort object")},delLog:function(logFile){delete this._logs[logFile];this._deletedLogs[logFile]=1;if(!this.hasLogs()){this._logsChanged=0;if(this._queue_timer){window.clearInterval(this._queue_timer);this._queue_timer=null}}},processLogQueue:function(){if(this._logsChanged){if(this.hasLogs()){this._send_request()}this._logsChanged=0}if(!this._reached_end){this._process_request()}},addRawLog:function(logFile,logProcessorFunc){this.addLog(logFile,logProcessorFunc);this._logs[logFile]["raw"]=1},addLog:function(logFile,logProcessorFunc){if(!this.hasLogs()){if(this._queue_timer){window.clearInterval(this._queue_timer);this._queue_timer=null}this._queue_timer=window.setInterval(this.processLogQueue.bind(this),QUEUE_TIMER_INTERVAL)}this._logs[logFile]={bytes_processed:0,raw:0,err_count:0,logProcessorFunc:logProcessorFunc};this._logsChanged=1},hasLogs:function(){for(var k in this._logs){if(this._logs.hasOwnProperty(k)){return true}}},logCount:function(){return Object.keys(this._logs).length},_send_request:function(){if(this._request&&YAHOO.util.Connect.isCallInProgress(this._request)){YAHOO.util.Connect.abort(this._request)}this._string_position=0;this._reached_end=0;this._deletedLogs={};var query={system_id:this._systemId,session_id:this._sessionId,termination_integer:this._termination_integer};var file_count=0;for(var logFile in this._logs){if(this._logs.hasOwnProperty(logFile)){file_count++;query["log_file"+file_count]=logFile;query["log_file_position"+file_count]=this._logs[logFile].bytes_processed}}var target_url="../cgi/live_tail_log.cgi"+"?"+CPANEL.util.make_query_string(query);if(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<9){if(this._iframeEl){this._iframeEl.parentNode.removeChild(this._iframeEl)}this._iframeEl=document.createElement("iframe");this._iframeEl.style.display="none";DOM.get("content").appendChild(this._iframeEl);this._iframeEl.contentWindow.location.href=target_url}else{this._request=YAHOO.util.Connect.asyncRequest("GET",target_url,{success:this._process_request.bind(this),failure:this._handle_tail_failure.bind(this)})}this.abort=function(){this._reached_end=1;if(this._iframeEl){this._iframeEl.contentWindow.location.href="about:blank"}if(this._request){YAHOO.util.Connect.abort(this._request)}};this.abort.bind(this);return 1},_handle_tail_failure:function(o){if(o.status>0&&o.status!==200){++this._tail_errors;var errmsg=LOCALE.maketext("[asis,live_tail_log] encountered an internal error: [_1]",o.statusText);if(o.status!==301&&o.status!==307&&this._masterErrorProcessorObj){this._masterErrorProcessorObj.renderMessage(errmsg)}if(this._tail_errors>=MAX_TAIL_ERRORS){var finalmsg=LOCALE.maketext("[asis,live_tail_log] encountered the maximum allowed errors ([numf,_1]) and will not continue.",this._tail_errors);if(this._masterErrorProcessorObj){this._masterErrorProcessorObj.renderMessage(finalmsg)}else{alert(o.statusText);alert(finalmsg)}this.abort();return 0}}this._logsChanged=1},_process_request:function(o){var xhr;if(o){xhr=o;xhr.readyState=4}else if(this._request&&this._request.conn){xhr=this._request.conn}else if(this._iframeEl){if(!this._iframeEl.contentWindow.document.body){return}xhr={readyState:IE_READY_STATE_MAP[this._iframeEl.readyState],responseText:this._iframeEl.contentWindow.document.body.innerText?this._iframeEl.contentWindow.document.body.innerText:this._iframeEl.contentWindow.document.body.textContent};if(xhr.readyState===4){xhr.responseText+=this._newline}}else{return}var rawdata;try{rawdata=xhr.responseText.substr(this._string_position)}catch(e){return}var lastEndofLine=rawdata.lastIndexOf(this._newline);if(lastEndofLine>-1){this._string_position+=lastEndofLine+this._newline.length;var newdata=rawdata.substr(0,lastEndofLine);var log_data_arr=newdata.split(this._newline);for(var i=0;i<log_data_arr.length;i++){if(log_data_arr[i]==="."){this._tail_errors=0;continue}else if(log_data_arr[i]===this._termination_sequence){this._reached_end=1;continue}else if(log_data_arr[i]===""){continue}else if(log_data_arr[i].indexOf("|")===-1){this._handle_tail_failure({status:500,statusText:log_data_arr[i]});continue}var demultiplexedData=log_data_arr[i].split("|");var logFile=demultiplexedData.shift();var server_length=parseInt(demultiplexedData.shift());var data=demultiplexedData.join("|");if(data){if(this._deletedLogs[logFile]){}else if(!this._logs[logFile]){}else{this._tail_errors=0;this._logs[logFile].bytes_processed+=server_length;this._log_processor(logFile,data)}}else{}}}if(xhr.readyState===4){if(this._reached_end){this._logs={};if(this._queue_timer){window.clearInterval(this._queue_timer);this._queue_timer=null}}else{this._logsChanged=1}}return 1},_log_processor:function(logFile,data){if(this._logs[logFile].raw){return this._logs[logFile].logProcessorFunc(data,logFile)}var msg="";try{if(data.indexOf("{")!==0){throw"Non JSON data passed to parser."}msg=JSON.parse(data)}catch(e){this._logs[logFile].err_count++;if(this._logs[logFile].err_count===MAX_ERROR_COUNT){data=LOCALE.maketext("Too many errors from “[_1]”. Future errors will be suppressed.",logFile)}if(this._logs[logFile].err_count<=MAX_ERROR_COUNT){msg={type:"error",contents:{msg:[data]}}}}if(msg){return this._logs[logFile].logProcessorFunc(msg,logFile)}},_newline:YAHOO.env.ua.ie&&YAHOO.env.ua.ie<9?"\r\n":"\n"});window.LogTail=LogTail})(window);(function(window){"use strict";var YAHOO=window.YAHOO;var item_types={warnings:{itemclass:"warningmsg",maketext_string:"Warning: [_1]"},skipped_items:{itemclass:"warningmsg",maketext_string:"Skipped: [_1]"},dangerous_items:{itemclass:"errormsg",maketext_string:"Dangerous: [_1]"},altered_items:{itemclass:"warningmsg",maketext_string:"Altered: [_1]"}};var TransferLogRender=function(tailWindow,queueWindow){this._tailWindow=tailWindow;this._queueWindow=queueWindow;this._tailWindowUI=tailWindow.ui;this._realTargetEl=this._tailWindowUI.bodyElement;var targetEl=document.createDocumentFragment();this._targetEl=targetEl;this._targetList=[targetEl];this._currentTarget=targetEl;this._summaryEl=this._tailWindowUI.summaryElement||this._tailWindowUI.bodyElement;this._allMsgs=0;this._isCaughtUp=0;this._lastMessageTime=0;this._waitCount=0;this._waitForCatchUp=window.setInterval(function(){var now=(new Date).getTime()/1e3;if(this._lastMessageTime&&(++this._waitCount>5||now-this._lastMessageTime>.15)){this._isCaughtUp=1;window.clearInterval(this._waitForCatchUp)}}.bind(this),1e3);this._fragmentRenderer=window.setInterval(function(){if(this._isCaughtUp){this._realTargetEl.appendChild(this._targetEl);window.clearInterval(this._fragmentRenderer);this._realTargetEl.scrollTop=this._realTargetEl.scrollHeight;if(this._currentTarget===this._targetEl){this._currentTarget=this._realTargetEl}var newTargetList=[];for(var i=0;i<this._targetList.length;i++){if(this._targetList[i]==this._targetEl){newTargetList.push(this._realTargetEl)}else{newTargetList.push(this._targetList[i])}}this._targetList=newTargetList;this._targetEl=this._realTargetEl}}.bind(this),1e3)};YAHOO.lang.augmentObject(TransferLogRender.prototype,{renderMessage:function(msg,logfile){this._lastMessageTime=(new Date).getTime()/1e3;var msg_contents=msg.contents;var was_at_end=1;if(this._isCaughtUp){was_at_end=this._realTargetEl.scrollTop+this._realTargetEl.offsetHeight+1>=this._realTargetEl.scrollHeight||this._realTargetEl.scrollHeight<=this._realTargetEl.offsetHeight?1:0}if(!msg_contents){console.log("Unexpected message.");console.log(msg);return}else if(msg_contents.msg){if(msg_contents.action){if(msg_contents.action.match(/^start_/)){var startDiv=document.createElement("div");startDiv.className=msg_contents.action;var headerDiv=document.createElement("div");headerDiv.className=msg_contents.action+"_header";headerDiv[CPANEL.has_text_content?"textContent":"innerText"]=msg.contents.msg.join(" ")+"\n";startDiv.appendChild(headerDiv);var containerDiv=document.createElement("div");containerDiv.className=msg_contents.action+"_container";startDiv.appendChild(containerDiv);this._currentTarget.appendChild(startDiv);this._targetList.push(containerDiv);this._currentTarget=this._targetList[this._targetList.length-1]}else if(msg_contents.action.match(/^end_/)){if(this._targetList.length>1){this._targetList.pop();this._currentTarget=this._targetList[this._targetList.length-1]}}}else{var textContent=msg.contents.msg.join(" ");var set_text_content=0;if(textContent.match(/^(?:…+|\.\.+)[ ]?[0-9]+.*?(?:…+|\.\.+)/)&&this._currentTarget.lastChild){var previousTextContent=this._currentTarget.lastChild[CPANEL.has_text_content?"textContent":"innerText"];if(previousTextContent.match(/^(?:…+|\.\.+)[ ]?[0-9]+.*?[ ]?(?:…+|\.\.+)/)){this._currentTarget.lastChild[CPANEL.has_text_content?"textContent":"innerText"]=textContent;set_text_content=1}}if(!set_text_content){var msgDiv=document.createElement("div");msgDiv[CPANEL.has_text_content?"textContent":"innerText"]=textContent;if(msg.source){if(msg.type==="error"||textContent.match(/^ERROR:/)){msgDiv.className="error_source_remote"}else if(msg.type==="warn"||textContent.match(/warn \[[^\]]*\]/)){msgDiv.className="warn_source_remote"}else{msgDiv.className="source_remote"}}else{if(msg.type==="warn"){msgDiv.className="warn"}else if(msg.type==="error"){msgDiv.className="error"}else if(msg.type==="failed"){msgDiv.className="failed"}else if(msg.type==="success"){msgDiv.className="success"}}this._currentTarget.appendChild(msgDiv)}}}else if(msg.type==="modulestatus"){var moduleStatusDiv=document.createElement("div");moduleStatusDiv.className="modulestatus modulestatus_"+msg_contents.status;var moduleDiv=document.createElement("div");moduleDiv.className="module";moduleDiv[CPANEL.has_text_content?"textContent":"innerText"]=msg_contents.module;var moduleStatusContentsDiv=document.createElement("div");moduleStatusContentsDiv.className="modulestatus_contents";moduleStatusContentsDiv[CPANEL.has_text_content?"textContent":"innerText"]=msg.contents.statusmsg||"";moduleStatusDiv.appendChild(moduleDiv);moduleStatusDiv.appendChild(moduleStatusContentsDiv);this._currentTarget.appendChild(moduleStatusDiv)}else if(msg.type==="control"){if(msg_contents.action==="percentage"){var pct=parseInt(msg_contents.percentage,10);this._tailWindowUI.setProgressBarPercentage(pct);if(this._queueWindow){this._queueWindow.setItemPercentage(logfile,pct)}}else if(msg_contents.action==="summary"){for(var item_type in item_types){var items=msg_contents[item_type];if(items){for(var i=0;i<items.length;i++){var module=items[i][0][0];var func=items[i][0][1];var line=items[i][0][2];var selfmsg=items[i][1];var action_url=items[i][2];var displayDiv=document.createElement("div");displayDiv.className="summarymsg "+item_types[item_type].itemclass;displayDiv[CPANEL.has_text_content?"textContent":"innerText"]=LOCALE.maketext(item_types[item_type].maketext_string,selfmsg,module,func,line);this._summaryEl.appendChild(displayDiv);if(action_url){displayDiv.innerHTML+=" ";var link=document.createElement("a");link.href=".."+action_url[1]+"?"+CPANEL.util.make_query_string(action_url[2]);link.innerHTML=action_url[0];link.target="_blank";displayDiv.appendChild(link)}}}}if(!this._isCaughtUp){this._isCaughtUp=1;was_at_end=1}}else if(msg_contents.action==="start-item"){var item=msg_contents.item;var item_name=msg_contents.item_name;var transferItemDiv=document.createElement("div");transferItemDiv.className="transfer_item";transferItemDiv[CPANEL.has_text_content?"textContent":"innerText"]=LOCALE.maketext("[_1]: [_2][comment,## no extract maketext (will be done via task 32670)]",item_name,item);this._summaryEl.appendChild(transferItemDiv)}else{console.log(msg)}}else{console.log(msg)}if(was_at_end){this._realTargetEl.scrollTop=this._realTargetEl.scrollHeight}}});window.TransferLogRender=TransferLogRender})(window);(function(window){"use strict";var YAHOO=window.YAHOO;var TransferMasterErrorLogProcessor=function(transfer_session_id,sessionUIObj,errorContainer,errorMessage,errorContent){this._sessionUIObj=sessionUIObj;this._transfer_session_id=transfer_session_id;this._target=errorContainer;this._errors=[];this._errorMessage=errorMessage;this._errorContent=errorContent;this._error_message_template=Handlebars.compile(errorMessage.innerHTML);this._error_content_template=Handlebars.compile(errorContent.innerHTML)};YAHOO.lang.augmentObject(TransferMasterErrorLogProcessor.prototype,{renderMessage:function(msg){this._errors.push(msg);if(DOM.hasClass(this._target,"hidden")){DOM.removeClass(this._target,"hidden")}this._errorMessage.innerHTML=this._error_message_template({error_message:LOCALE.maketext("There [numerate,_1,is,are] [quant,_1,error,errors].",this._errors.length)});this._errorContent.innerHTML=this._error_content_template({errors:this._errors})}});window.TransferMasterErrorLogProcessor=TransferMasterErrorLogProcessor})(window);(function(window){"use strict";var YAHOO=window.YAHOO;var LogTail=window.LogTail;var TransferLogTail=function(transferSessionId,tail_name,masterErrorProcessorObj){TransferLogTail.superclass.constructor.call(this,"transfers",transferSessionId,tail_name,masterErrorProcessorObj)};YAHOO.lang.extend(TransferLogTail,LogTail);window.TransferLogTail=TransferLogTail})(window);
