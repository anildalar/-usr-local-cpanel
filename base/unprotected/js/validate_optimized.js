var validate_data_panel_initted=0;var validate_data_panel;var realtime_validate_inited={};var cached_url_depth;var validate_working_form;var valImgs=[];var validateElMap={};var check_elements={};var match_validators={'fullemailaddress':/^([a-zA-Z0-9\_\'\+\*\$\%\^\&\!\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9:]{2,4})+$/,'emailaddress':/^[^\@]\@[^\.]\./,'emailchars':/^[a-z0-9\_\-\@\.]+$/,'email_localpart_chars':/^[a-z0-9\_\-\.]+$/,'spaces_dots_ats_fwdslashes_hyphens':/[\s\.\@\/\-]/,'alphanum':/^[a-z0-9\_\-]+$/i,'spaces_dots_ats_fwdslashes':/[\s\.\@\/]+/,'two_dots':/[^\.]\.[^\.]\.[^\.]/,'spaces_ats_fwdslashes':/[\s\@\/]+/,'start_end_dashes':/(?:^[-]|[-]$)/,'start_end_space':/(?:^[\s]|[\s]$)/,'slashes_dots':/[\.\/\\]/,'is_ipcidr_or_host':/^[a-z0-9\.\-\/]+$/,'noascii0_255':/[\0\255]/,'ipcidr':/^\d+\.\d+\.\d+\.\d+\/?\d*$/,'host':/^[\w\.\-]+$/,'spaces':/\s+/,'atsign':/\@/,'forwardslash':/\//,'dot':/\./,'unlimitedornum':/^[0-9]*$|unlimited/,'numeric':/^[0-9]+$/,'empty':/^$/,'start_end_dots':/(^[.]|[.]$)/,'start_www.':/^www[.]/i,'jpg_gif_png_jpeg':/\.(gif|jpg|png|jpeg)$/,'start_dot':/^\./,'underscore':/\_/,'html':/\.(html)$/};var offsetQuirk=0;if(navigator.appVersion.indexOf("MSIE")!=-1||navigator.appVersion.indexOf("Opera")!=-1){offsetQuirk=1}var validgen=0;var validateFocusEl;var validators={};var newest_listener;function password_strength_validator_init(){if(!self['passkey_handler']){alert("Javascript Order Error.  You cannot call password_strength_validator_init before passkey_handler has been loaded.");return}passkey_handler();hide_password_tip_panel()}function init_validate_dialog(){if(validate_data_panel_initted){return}validate_data_panel_initted=1;if(!document.getElementById('validate_data_panel')){var newpanel=document.createElement('div');newpanel.id='validate_data_panel';newpanel.style.display='none';newpanel.innerHTML='<div class="hd"><div class="lt"></div><span>Inputs not Valid!</span><div class="rt"></div></div><div class="bd"><div id="inputs_val" style="padding: 30px;"></div></div>';document.body.appendChild(newpanel)}validate_data_panel=new YAHOO.widget.Dialog('validate_data_panel',{width:'300px',fixedcenter:true,constraintoviewport:true,close:true,draggable:false,modal:false,buttons:[{text:"Close",handler:function(){validate_data_panel.hide()},isDefault:true}],visible:false});validate_data_panel.beforeHideEvent.subscribe(handle_hide_validate,validate_data_panel,true);validate_data_panel.render();validate_data_panel.hide();document.getElementById('validate_data_panel').style.display=''}function handle_hide_validate(){if(validateFocusEl){validateFocusEl.focus()}}function realtime_validate_init(formId){if(!formId){alert('realtime_validate_init must be called with a formId');return}if(realtime_validate_inited[formId]){return}realtime_validate_inited[formId]=1;YAHOO.util.Event.addListener(window,"resize",reposition_all_validator_imgs);if(!validators[formId]){alert("No validators registerd for that formId: "+formId);return}for(var i=0;i<validators[formId].length;i++){var Els=validators[formId][i].Els;for(var j=0;j<Els.length;j++){if(!Els[j].id){Els[j].id='validgen'+validgen++}validateElMap[Els[j].id]=formId}}for(var elId in validateElMap){var thisEl=document.getElementById(elId);if(thisEl.tagName=="TEXTAREA"||thisEl.type=="text"||thisEl.type=="password"||thisEl.type=="textbox"){YAHOO.util.Event.addListener(thisEl,"keyup",function(){single_validate(this.id)},thisEl,true)}else if(thisEl.tagName=="SELECT"||thisEl.type=="file"){YAHOO.util.Event.addListener(thisEl,"change",function(){single_validate(this.id)},thisEl,true)}}}function single_validate(ElId,formId){if(!formId){formId=validateElMap[ElId]}if(!formId){formId=document.getElementById(ElId).form.id}do_validate(formId,1,0,ElId)}function validate_box(ElId,formId){if(!formId){formId=validateElMap[ElId]}if(!formId){formId=document.getElementById(ElId).form.id}do_validate(formId,0,1,ElId)}function do_validate(formId,noalert,noupdate,check_element){var form_valid=1;if(!formId){alert("do_validate requires at least one argument (formId)");return false}var alerts=[];var element_statuses={};validateFocusEl=0;if(check_element&&check_element!=''&&check_elements[check_element]==null){check_elements[check_element]={};for(var i=0;i<validators[formId].length;i++){var add_elements=0;for(var ei=0;ei<validators[formId][i].Els.length;ei++){if(validators[formId][i].Els[ei].id==check_element){add_elements=1;break}}if(add_elements){for(var ei=0;ei<validators[formId][i].Els.length;ei++){check_elements[check_element][validators[formId][i].Els[ei].id]=1}}}}for(var i=0;i<validators[formId].length;i++){if(validators[formId][i].required){if(!validators[formId][i].required()){for(var ei=0;ei<validators[formId][i].Els.length;ei++){setup_accept_image(validators[formId][i].Els[ei].id,2);YAHOO.util.Dom.removeClass(validators[formId][i].Els[ei],'formverifyfailed')}continue}}if(check_element&&check_element!=''){var affects_this=0;for(var ei=0;ei<validators[formId][i].Els.length;ei++){if(check_elements[check_element][validators[formId][i].Els[ei].id]){affects_this=1}}if(!affects_this){continue}}var is_valid=1;switch(validators[formId][i].method){case'match':var matchkey=(typeof(validators[formId][i].vkey)=='string'?match_validators[validators[formId][i].vkey]:validators[formId][i].vkey);if(matchkey==null){alert('Unknown regex key used for match: '+validators[formId][i].vkey+'. Valid keys are: '+validate_listmatchers())}if(!validators[formId][i].Els[0].value.match(matchkey)){is_valid=0}break;case'nomatch':var matchkey=(typeof(validators[formId][i].vkey)=='string'?match_validators[validators[formId][i].vkey]:validators[formId][i].vkey);if(matchkey==null){alert('Unknown regex key used for nomatch: '+validators[formId][i].vkey+'. Valid keys are: '+validate_listmatchers())}if(validators[formId][i].Els[0].value.match(matchkey)){is_valid=0}break;case'noeqtxt':if(validators[formId][i].Els[0].value==validators[formId][i].vkey){is_valid=0}break;case'minlength':if(validators[formId][i].Els[0].value.length<validators[formId][i].vkey){is_valid=0}break;case'maxlength':if(validators[formId][i].Els[0].value.length>validators[formId][i].vkey){is_valid=0}break;case'Eleq':if(validators[formId][i].Els[0].value!=validators[formId][i].Els[1].value){is_valid=0}break;case'func':var myfunc=validators[formId][i].vkey;if(!myfunc(validators[formId][i].Els)){is_valid=0}break;default:alert("Unknown validator: "+validators[formId][i].method);form_valid=0;make_elements_valid_status(validators[formId][i].Els,0,element_statuses)}if(!is_valid){if(!validators[formId][i].msg||validators[formId][i].msg.match(/^\s*$/)){alert("Missing validation message for validator: "+validators[formId][i].method+" key: "+validators[formId][i].vkey)}alerts.push(validators[formId][i].msg);if(!validateFocusEl){validateFocusEl=validators[formId][i].Els[0]}make_elements_valid_status(validators[formId][i].Els,0,element_statuses);form_valid=0}else{make_elements_valid_status(validators[formId][i].Els,1,element_statuses)}}if(!noupdate){apply_elements_status(element_statuses)}if(!noalert&&alerts.length){init_validate_dialog();var formatted_alerts=[];for(var i=0;i<alerts.length;i++){formatted_alerts.push('<p class="validation_msg">'+alerts[i]+'</p>')}document.getElementById('inputs_val').innerHTML=formatted_alerts.join("\n");validate_data_panel.show();validateFocusEl.focus()}return(form_valid?true:false)}function register_validator(validatemethod,vkey,validateEls,vmsg,required,formId){if(!vmsg){alert('register_validator requires 4 arguments: (validatemethod, vkey, validateEls, vmsg, [required func]')}if(self.password_str_handle_validate){password_str_handle_validate=0}if(!formId){formId=validateEls[0].form.id}if(!validators[formId]||validators[formId]==null){validators[formId]=[]}validators[formId].push({method:validatemethod,vkey:vkey,Els:validateEls,msg:vmsg,required:required})}function apply_elements_status(elist){for(var elId in elist){if(elist[elId]){setup_accept_image(elId,1);YAHOO.util.Dom.removeClass(elId,'formverifyfailed')}else{setup_accept_image(elId,0);YAHOO.util.Dom.addClass(elId,'formverifyfailed')}}}function setup_accept_image(parentElId,show){var imgElIdCon=parentElId+'_0';var imgElCon=document.getElementById(imgElIdCon);if(!imgElCon){var parentEl=document.getElementById(parentElId);var newdiv=document.createElement('div');newdiv.style.display='block';newdiv.style.position='absolute';newdiv.style.padding=0;newdiv.style.margin=0;newdiv.id=imgElIdCon;newdiv.innerHTML='&nbsp;';if(show){newdiv.className='accept'}else{newdiv.className='reject'}if(parentEl.nextSibling){parentEl.parentNode.insertBefore(newdiv,parentEl.nextSibling)}else{parentEl.parentNode.appendChild(newdiv)}imgElCon=newdiv;reposition_validator_img(imgElCon);YAHOO.util.Event.addListener(imgElCon,"click",function(){validate_box(getPreviousInput(this).id)},imgElCon,true);valImgs.push(imgElCon.id);return}if(show==2){imgElCon.style.display='none'}else if(show){imgElCon.className='accept';imgElCon.style.display=''}else{imgElCon.className='reject';imgElCon.style.display=''}}function reposition_all_validator_imgs(){for(var i=0;i<valImgs.length;i++){reposition_validator_img(document.getElementById(valImgs[i]))}}function reposition_validator_img(imgElCon){parentElId=getPreviousInput(imgElCon).id;parentEl=document.getElementById(parentElId);if(!parentEl){alert("Could not get parent for "+parentElId+" next aw: "+imgElCon.id);return}var parentReg=YAHOO.util.Region.getRegion(parentEl);if(parentEl.tagName=="SELECT"||parentEl.tagName=="TEXTAREA"||parentEl.type=='file'){imgElCon.style.left=(parentReg.left+parentEl.offsetWidth+3)+'px'}else{imgElCon.style.left=(parentReg.left+parentEl.offsetWidth-16-(offsetQuirk?4:2))+'px'}imgElCon.style.top=(parentReg.top+((parentEl.offsetHeight-16)/2)-(offsetQuirk?2:0))+'px'}function make_elements_valid_status(Els,status,elist){for(var i=0;i<Els.length;i++){if(!Els[i].id){Els[i].id='validgen'+validgen++}if(i>0){continue}if(status&&elist[Els[i].id]!=0){elist[Els[i].id]=1}else{elist[Els[i].id]=0}}}function getPreviousInput(El){while(El.previousSibling&&(El.tagName!="INPUT"||El.type=='submit'||El.type=='button')&&El.tagName!="SELECT"&&El.tagName!="TEXTAREA"){El=El.previousSibling}return El}function validate_listmatchers(){var allowed_matchers=[];for(var matcher in match_validators){allowed_matchers.push(matcher)}return allowed_matchers.join(' ')}function get_url_depth(){if(cached_url_depth){return cached_url_depth}var thisurl=window.location.href;var urlpath=thisurl.split('/');urlpath.shift();urlpath.shift();urlpath.shift();urlpath.pop();if(thisurl.match(/\/frontend\//)){urlpath.shift();urlpath.shift()}var dotdot=[];for(i=0;i<urlpath.length;i++){dotdot.push('..')}cached_url_depth=dotdot.join('/');return cached_url_depth}function radio_value_is(El,val){if(isArray(El)){for(var i=0;i<El.length;i++){if(El[i].value==val&&El[i].checked){return true}}}else{if(El.value==val&&El.checked){return true}}return false}function isArray(tobj){if(tobj.length>0){if(tobj[0]&&tobj[0].length==1){return false}return true}return false}