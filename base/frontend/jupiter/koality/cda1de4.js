(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{723:function(e,t,n){"use strict";var r=n(49),o=(n(932),n(35),n(43),n(17),n(1)),l=(n(30),n(39),n(32),n(69),n(59),n(81),n(42)),c=n(911),d=Object(o.b)({name:"Breadcrumbs",components:{SoftNavigation:c.a},props:{storybook:{type:Object,default:function(){}}},setup:function(e){var t=Object(o.r)(),n=(e.storybook||Object(o.o)()).value,r=n.params,c=r.pid,d=r.sid,f=n.name,m=n.fullPath,h=Object(o.a)((function(){return t.getters["navigation/getFlatnav"]})),v=Object(o.a)((function(){return t.getters["navigation/getNavAliases"]}));function y(e){return e.map((function(e){if(!(e in v.value))throw new Error('Error rendering breadcrumb. No alias found with key "'+e+'"');var t=v.value[e];return{label:t.name,path:t.path?Object(l.d)(t.path,c,d):null}}))}return{breadCrumbGenerator:Object(o.a)((function(){var e,t=(null==f?void 0:f.replace(/___../g,""))||"",n=null===(e=h.value[t])||void 0===e?void 0:e.breadcrumb;return n?Array.isArray(n)?y(n):y(n[m.split("/").slice(-1)[0]]):[]}))}}}),f=n(4),m=Object(f.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("SoftNavigation",{staticClass:"text-sm text-gray-600 hidden sm:flex w-full",attrs:{separator:"arrow",links:e.breadCrumbGenerator,name:"breadcrumb"}})}),[],!1,null,null,null).exports,h={name:"IconBulb",props:{color:{type:String,default:"currentColor"}}},v=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"}},[n("path",{attrs:{d:"M176 248c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24zm-16.47-31.5c.26 4.22 3.76 7.5 7.98 7.5h16.97a8 8 0 0 0 7.98-7.5l7-112c.29-4.61-3.37-8.5-7.98-8.5h-30.97c-4.61 0-8.27 3.89-7.98 8.5l7 112zM176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68z",fill:e.color}})])}),[],!1,null,null,null).exports,y=n(878),_={"pid-sid-monitoring-uptime-uptimeStats":{headline:"systemSettings.headlines.koalaping",subline:"systemSettings.body.koalaping",settings:[{type:"errorHandling",fields:[{identifier:"koalaping",additionalLabel:""}]}]},"pid-sid-monitoring-performance-browsertimings":{headline:"systemSettings.headlines.performanceload",subline:"systemSettings.body.performanceload",settings:[{type:"threshold",fields:[{identifier:"performance",group:"load"}]},{type:"errorHandling",fields:[{identifier:"performanceload"}]}]},"pid-sid-monitoring-performance-servertimings":{headline:"systemSettings.headlines.performancettfb",subline:"systemSettings.body.performancettfb",settings:[{type:"threshold",fields:[{identifier:"performance",group:"ttfb"}]},{type:"errorHandling",fields:[{identifier:"performance"}]}]},"pid-sid-monitoring-performance-pagesize":{headline:"systemSettings.headlines.siteinfobigfile",subline:"systemSettings.body.siteinfobigfile",settings:[{type:"threshold",fields:[{identifier:"siteinfo",group:"bigfile"}]},{type:"errorHandling",fields:[{identifier:"siteinfobigfile",additionalLabel:"systemSettings.additionalLabels.siteinfobigfile"},{identifier:"siteinfofilesize",additionalLabel:"systemSettings.additionalLabels.siteinfofilesize"}]}]},"pid-sid-monitoring-performance-lighthouse":{headline:"systemSettings.headlines.performancelighthouse_desktop",subline:"systemSettings.body.performancelighthouse_desktop",settings:[{type:"errorHandling",fields:[{identifier:"lighthouse_desktop_performance"}]},{type:"threshold",fields:[{identifier:"lighthouse",group:"lighthouse_desktop_performance"}]}]},"pid-sid-monitoring-seo-seoScore":{headline:"systemSettings.headlines.lighthousedesktop_seo",subline:"systemSettings.body.lighthousedesktop_seo",settings:[{type:"errorHandling",fields:[{identifier:"lighthouse_desktop_seo"}]}]},"pid-sid-monitoring-security-cookies":{headline:"systemSettings.headlines.CookieCount",subline:"systemSettings.body.CookieCount",settings:[{type:"threshold",fields:[{identifier:"CookieCount",group:""}]},{type:"errorHandling",fields:[{identifier:"CookieCount"}]}]},"pid-sid-monitoring-technical-javascript":{headline:"systemSettings.headlines.javascript",subline:"systemSettings.body.javascript",settings:[{type:"errorHandling",fields:[{identifier:"JsErrorScanner",additionalLabel:"tools.jsErrorInternal"},{identifier:"JsErrorScanner_external",additionalLabel:"tools.jsErrorExternal"}]}]},"pid-sid-monitoring-seo-sitemapMobile":{headline:"systemSettings.headlines.sitemap",subline:"systemSettings.body.sitemap",settings:[{type:"errorHandling",fields:[{identifier:"sitemap",additionalLabel:"tools.sitemap"},{identifier:"mobilefriendly",additionalLabel:"tools.mobileFriendly"}]}]},"pid-sid-monitoring-content-contentBroken":{headline:"systemSettings.headlines.contentBroken",subline:"systemSettings.body.contentBroken",settings:[{type:"errorHandling",fields:[{identifier:"deadlink",additionalLabel:"tools.deadLink"},{identifier:"brokenlink",additionalLabel:"tools.brokenLink"},{identifier:"BrokenLink_external",additionalLabel:"tools.brokenLinkExternal"}]}]}},C=n(884),S=n(14),k=n(9),x=(n(25),n(22),n(41),n(31),n(40),n(914)),j=n.n(x),w=n(287),O=Object(o.b)({name:"ComponentSettingScreen",components:{FormFooter:w.a,Multiselect:j.a},props:{configData:{type:Object,default:function(){}}},data:function(){return{error:null,collections:{},activeCollections:{},currentCollection:{},errorsInARow:{},errorSettings:[{id:1,errorCount:1,name:this.$t("systemSettings.check.strictly"),description:this.$t("systemSettings.check.strictlyDescription")},{id:2,errorCount:2,name:this.$t("systemSettings.check.moderate"),description:this.$t("systemSettings.check.moderateDescription")},{id:3,errorCount:3,name:this.$t("systemSettings.check.loose"),description:this.$t("systemSettings.check.looseDescription")}]}},fetch:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,d,f,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.$route.params,r=n.pid,o=n.sid,t.next=4,Promise.all([e.$apiClient.getRepository("check"),e.$apiClient.getRepository("tool")]);case 4:if(l=t.sent,c=Object(S.a)(l,2),d=c[0],f=c[1],m=e.configData.settings.find((function(e){return"errorHandling"===e.type})),h=e.configData.settings.find((function(e){return"threshold"===e.type})),!m){t.next=13;break}return t.next=13,Promise.all(m.fields.map(function(){var t=Object(k.a)(regeneratorRuntime.mark((function t(n){var o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getConfiguration(r,n.identifier);case 2:o=t.sent,l=o.tool,c=e.errorSettings.find((function(e){return e.errorCount===l.errors_in_a_row})),e.$set(e.errorsInARow,n.identifier,c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 13:if(!h){t.next=16;break}return t.next=16,Promise.all(h.fields.map(function(){var t=Object(k.a)(regeneratorRuntime.mark((function t(n){var l,c,f,m,h,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=n.group,c=n.identifier,t.next=4,Promise.all([d.showCollections(r,n.identifier,{group:l}),d.showActiveCollections(o,c,{group:l})]);case 4:f=t.sent,m=Object(S.a)(f,2),h=m[0],v=m[1],e.$set(e.collections,n.identifier,h),e.$set(e.activeCollections,n.identifier,v),e.$set(e.currentCollection,n.identifier,v.collections[0]);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},computed:{headline:function(){var content=this.configData.headline;return this.$te(content)?this.$t(content):this.$t("settings")},subline:function(){var content=this.configData.subline;return this.$te(content)?this.$t(content):""}},methods:{sendErrorInARow:function(e,t,n){var r=arguments,o=this;return Object(k.a)(regeneratorRuntime.mark((function l(){var c;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return r.length>3&&void 0!==r[3]&&r[3],l.prev=1,l.next=4,o.$apiClient.getRepository("tool");case 4:return c=l.sent,l.next=7,c.overwrite(e,t,{errors_in_a_row:n});case 7:l.next=13;break;case 9:l.prev=9,l.t0=l.catch(1),console.error(l.t0),o.error=l.t0.message;case 13:case"end":return l.stop()}}),l,null,[[1,9]])})))()},clearError:function(){this.error=null},cancel:function(){this.$emit("closeSettings")},store:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,d,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.$route.params,r=n.sid,o=n.pid,l=e.configData.settings,c=l.find((function(e){return"errorHandling"===e.type})),d=l.find((function(e){return"threshold"===e.type})),!c){t.next=11;break}return t.next=8,e.$apiClient.getRepository("tool");case 8:return f=t.sent,t.next=11,Promise.all(c.fields.map(function(){var t=Object(k.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.overwrite(o,n.identifier,{errors_in_a_row:e.errorsInARow[n.identifier].errorCount});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 11:if(!d){t.next=17;break}return t.next=14,e.$apiClient.getRepository("check");case 14:return m=t.sent,t.next=17,Promise.all(d.fields.map(function(){var t=Object(k.a)(regeneratorRuntime.mark((function t(n){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(l=null===(o=e.currentCollection[n.identifier])||void 0===o?void 0:o.id)){t.next=4;break}return t.next=4,m.updateCollections(r,{collections:[l],group:n.group});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 17:e.$emit("refreshView"),e.cancel(),t.next=26;break;case 21:t.prev=21,t.t0=t.catch(0),console.error(t.t0),e.$sentry.captureException(t.t0),e.error=t.t0.message;case 26:case"end":return t.stop()}}),t,null,[[0,21]])})))()}}}),$=O,L=(n(969),Object(f.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed top-0 right-0 overflow-hidden bg-white rounded-lg shadow-lg settingScreen transition-all duration-300 ease-in-out z-[1029] outerFullHeight"},[n("div",{staticClass:"flex flex-col mobileFullHeight"},[n("header",{staticClass:"p-4 mb-6"},[n("h2",{staticClass:"mb-2 text-2xl font-medium"},[e._v("\n        "+e._s(e.headline)+"\n      ")]),e._v(" "),e.subline?n("p",{staticClass:"font-light"},[e._v("\n        "+e._s(e.subline)+"\n      ")]):e._e()]),e._v(" "),n("div",{staticClass:"flex-auto overflow-y-scroll"},[e.$fetchState.pending?e._e():n("div",{staticClass:"px-4 space-y-8"},e._l(e.configData.settings,(function(t,r){return n("div",{key:r},["errorHandling"===t.type?e._l(t.fields,(function(t,i){return n("div",{key:"errorRow-"+i,staticClass:"mb-6"},[n("p",{staticClass:"mb-2 font-light"},[e._v("\n                "+e._s(e.$t("systemSettings.check.headline"))+"\n                "),t.additionalLabel?[e._v("\n                  ("+e._s(e.$te(t.additionalLabel)?e.$t(t.additionalLabel):t.additionalLabel)+")\n                ")]:e._e()],2),e._v(" "),n("Multiselect",{staticClass:"cursor-pointer",attrs:{options:e.errorSettings,"deselect-label":" ","allow-empty":!1,"internal-search":!1,label:"name","select-label":"",searchable:!1,placeholder:e.$t("selectOneOption"),"selected-label":""},scopedSlots:e._u([{key:"option",fn:function(t){return[n("div",{staticClass:"option__desc"},[n("div",{staticClass:"option__title"},[e._v("\n                      "+e._s(t.option.name)+"\n                      "),n("div",{staticClass:"mt-2 text-sm !whitespace-normal"},[e._v("\n                        "+e._s(t.option.description)+"\n                      ")])])])]}}],null,!0),model:{value:e.errorsInARow[t.identifier],callback:function(n){e.$set(e.errorsInARow,t.identifier,n)},expression:"errorsInARow[field.identifier]"}})],1)})):e._e(),e._v(" "),"threshold"===t.type?e._l(t.fields,(function(t,i){return n("div",{key:"treshold-"+i,staticClass:"mb-6"},[n("p",{staticClass:"mb-2 font-light"},[e._v("\n                "+e._s(e.$t("systemSettings.check.threshold"))+"\n              ")]),e._v(" "),e.collections[t.identifier]?n("Multiselect",{staticClass:"cursor-pointer",attrs:{options:e.collections[t.identifier].collections,"deselect-label":" ","allow-empty":!1,"internal-search":!1,label:"name","select-label":"",searchable:!1,placeholder:e.$t("selectOneOption"),"selected-label":""},scopedSlots:e._u([{key:"option",fn:function(t){return[n("div",{staticClass:"option__desc"},[n("div",{staticClass:"option__title"},[e._v("\n                      "+e._s(t.option.name)+"\n                      "),n("div",{staticClass:"mt-2 text-sm !whitespace-normal"},[e._v("\n                        "+e._s(t.option.description)+"\n                      ")])])])]}}],null,!0),model:{value:e.currentCollection[t.identifier],callback:function(n){e.$set(e.currentCollection,t.identifier,n)},expression:"currentCollection[field.identifier]"}}):e._e()],1)})):e._e()],2)})),0)]),e._v(" "),n("footer",[n("div",{staticClass:"relative z-10"},[n("transition",{attrs:{name:"cardSlideTop"}},[e.error?n("div",{staticClass:"flex justify-between px-5 py-2 text-sm font-light text-white bg-error-high"},[n("div",{staticClass:"flex-auto"},[e._v("\n              "+e._s(e.error)+"\n            ")]),e._v(" "),n("div",{staticClass:"w-4 ml-2 text-white cursor-pointer",on:{click:e.clearError}},[e._v("\n              ✕\n            ")])]):e._e()])],1),e._v(" "),n("FormFooter",{staticClass:"relative z-20",on:{cancel:e.cancel,store:e.store}})],1)])])}),[],!1,null,null,null).exports),R=n(80),B={name:"ComponentSettings"};B.props={storybook:{type:Boolean,default:!1}},B.setup=function(e,t){var n=e,r=Object(o.r)(),l=Object(o.l)().route,c=Object(o.i)(null),d=Object(o.i)(!1);return Object(o.s)((function(){return l.value}),(function(){var e=(n.storybook?{name:"pid-sid-monitoring-uptime-uptimeStats"}:l.value).name;c.value=_[e]||null}),{immediate:!0}),{configData:c,openScreen:d,closeSettings:function(){d.value=!1,setTimeout((function(){r.dispatch("ui/closeMetaSidebar")}),240)},openSettings:function(){r.dispatch("ui/openMetaSidebar"),setTimeout((function(){d.value=!0}),240)}}},B.components=Object.assign({GeneralButton:R.a,IconCog:C.a,ComponentSettingsScreen:L},B.components);var E=B,z=(n(970),Object(f.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.configData?n("div",[n("GeneralButton",{attrs:{size:"py-2 px-4","color-palette":"ghost"},nativeOn:{click:function(t){return e.openSettings.apply(null,arguments)}}},[n("IconCog",{staticClass:"w-5 h-5 mr-1"}),e._v("\n    "+e._s(e.$te("test."+e.configData.identifier)?e.$t("test."+e.configData.identifier):e.$t("settings"))+"\n  ")],1),e._v(" "),n("portal",{attrs:{to:"screen-place"}},[n("transition",{attrs:{name:"cardSlideRight"}},[e.openScreen?n("ComponentSettingsScreen",{attrs:{"config-data":e.configData},on:{closeSettings:e.closeSettings,refreshView:function(t){return e.$emit("refreshView")}}}):e._e()],1)],1)],1):e._e()}),[],!1,null,null,null)),H=z.exports,I={};I.props={title:{type:String,default:""},subTitle:{type:String,default:""}},I.setup=function(e,t){var n=e,l=Object(o.l)(),c=l.i18n,d=l.route,f=Object(o.r)(),m=Object(o.i)(null),h=Object(o.a)((function(){return f.getters["projects/getActualProjectDetails"]})),nav=Object(o.a)((function(){return f.getters["navigation/getNavPath"]})),v=Object(o.a)((function(){return f.getters["navigation/getPolling"]})),y=Object(o.a)((function(){return f.getters["onboarding/onboardingStatus"]})),_=Object(o.a)((function(){return f.getters["projects/getProjectRole"]})),C=Object(o.a)((function(){return f.getters["navigation/getSublayout"]})),S=Object(o.a)((function(){return f.getters["navigation/getIsPaidEnabled"]})),k=Object(o.a)((function(){return f.getters["projects/getProjects"]})),x=Object(o.a)((function(){return n.title.length?n.title:nav.value.sub?c.t("pages.".concat(nav.value.sub)):""})),j=Object(o.a)((function(){if(n.title.length)return!1;if(!nav.value.sub)return!1;if("object"!==Object(r.a)(c.t("segmentHeader.sentence"))||null===c.t("segmentHeader.sentence"))return!1;var sub,e="segmentHeader.sentence.".concat((sub=Object(o.i)(""),"projectsOverview"!==nav.value.sub||"cpanel"!==C.value?nav.value.sub:(S.value?1===k.value.length?sub.value="projectsOverviewCpanelUpsellSingle":sub.value="projectsOverviewCpanelUpsellMany":sub.value="projectsOverviewCpanelNoUpsell",sub.value)));return c.te(e)?c.t(e):""})),w=Object(o.a)((function(){if(n.title.length)return!1;var e="segmentHeader.buttonLabel.".concat(nav.value.sub);return c.te(e)?c.t(e):c.t("help")})),O={uptimeStats:"uptime.uptime",performanceLoadingspeed:"performance.loadingspeed",performanceBrowsertimings:"performance.browserspeed",performanceServertimings:"performance.serverspeed",performancePagesize:"performance.pagesize",performanceLighthouse:"performance.lighthouse",seoScore:"seo.lighthouse",seoSitemapMobile:"seo.sitemap",contentBroken:"content.content",technicalJavascript:"technology.technology",securityCerts:"security.https",securityElements:"security.insecureElements",securityCookies:"security.cookieCount"},$=function(){var e=nav.value.sub;Object.keys(O).includes(e)?m.value="monitoring.".concat(O[e]):m.value=null},L=Object(o.a)((function(){return"true"===d.value.query.upsellSuccess})),R=Object(o.a)((function(){return"true"===d.value.query.upsellCreationSuccess}));return Object(o.s)(d,(function(){$()}),{immediate:!0}),Object(o.s)(v,(function(){v.value||$()}),{immediate:!0}),{route:d,helpUrl:m,project:h,onboarding:y,userRole:_,sublayout:C,getTitle:x,subline:j,helpButtonLabel:w,upsellSuccess:L,upsellCreationSuccess:R}},I.components=Object.assign({Breadcrumbs:m,InfoBox:y.a,GeneralButton:R.a,IconBulb:v,ComponentSettings:H},I.components);var D=I,T=Object(f.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:[{"mb-16":"cpanel"!==e.sublayout},{"mb-2":"cpanel"===e.sublayout}]},[e.onboarding?n("Breadcrumbs",{staticClass:"mb-4"}):e._e(),e._v(" "),n("h1",{staticClass:"text-2xl"},[n("span",{staticClass:"font-medium"},[e._v(" "+e._s(e.getTitle))]),e._v(" "),!e.subTitle&&e.project&&e.project.name&&"cpanel"!==e.sublayout&&"dashboard-userSettings"!==e.route.name?n("span",{staticClass:"text-2xl font-thin"},[e._v("\n      "+e._s(e.project.name)+"\n    ")]):e._e(),e._v(" "),e.subTitle&&"cpanel"!==e.sublayout?n("span",{staticClass:"text-2xl font-thin"},[e._v(e._s(e.subTitle))]):e._e()]),e._v(" "),e.subline?n("p",{staticClass:"mt-4 font-light hyphens bg-pri"},[e._v("\n    "+e._s(e.subline)+"\n  ")]):e._e(),e._v(" "),e.upsellSuccess?n("InfoBox",{staticClass:"mt-4"},[e._v("\n    "+e._s(e.$t("UpsellSuccess"))+"\n  ")]):e._e(),e._v(" "),e.upsellCreationSuccess?n("InfoBox",{staticClass:"mt-4"},[e._v("\n    "+e._s(e.$t("UpsellCreationSuccess"))+"\n  ")]):e._e(),e._v(" "),e.$slots.default||e.helpUrl||e.userRole<300?n("div",{staticClass:"md:flex mt-6 gap-4"},[e._t("default"),e._v(" "),e.helpUrl?n("tsx-contentscreen-trigger",{attrs:{"content-id":e.helpUrl,language:e.$i18n.locale,"is-partner":"cpanel"===e.sublayout?"true":"false",type:"koality"}},[n("GeneralButton",{attrs:{size:"py-2 px-4","color-palette":"carefree"}},[n("IconBulb",{staticClass:"w-5 h-5 mr-1"}),e._v("\n        "+e._s(e.helpButtonLabel)+"\n      ")],1)],1):e._e(),e._v(" "),e.userRole<300?n("ComponentSettings",{on:{refreshView:function(t){return e.$emit("refreshView")}}}):e._e()],2):e._e()],1)}),[],!1,null,null,null);t.a=T.exports},878:function(e,t,n){"use strict";var r={name:"InfoBox"},o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"bg-third-400 border border-solid border-third-regular rounded p-3 mb-4 font-light cBody"},[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},884:function(e,t,n){"use strict";var r={name:"IconCog",props:{color:{type:String,default:"currentColor"}}},o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z",fill:e.color}})])}),[],!1,null,null,null);t.a=component.exports},885:function(e,t,n){e.exports={}},901:function(e,t,n){"use strict";n(885)},911:function(e,t,n){"use strict";n(32),n(98);var r=n(1),o=Object(r.b)({name:"SoftNavigation",props:{name:{type:String,required:!0},separator:{type:String,default:"pipe"},links:{type:Array,default:function(){return[]}},exact:{type:Boolean,default:!1},linkStyle:{type:String,default:"hover:underline cursor-pointer"},noLinkStyle:{type:String,default:""}},setup:function(){var e=Object(r.l)().i18n;return{linkTag:function(path){return path&&0!==path.length?path.match(/^(http|mailto|tel)/)?"a":"nuxt-link":"span"},setLabel:function(label){return e&&e.te(label)?e.t(label):label}}}}),l=(n(901),n(4)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"flex flex-wrap",attrs:{role:"navigation"}},e._l(e.links,(function(link,i){return n("div",{key:e.name+"-"+i,staticClass:"flex",class:"separator-"+e.separator},[n(e.linkTag(link.path),{tag:"component",class:[link.path&&e.linkStyle,!link.path&&e.noLinkStyle],attrs:{to:"nuxt-link"===e.linkTag(link.path)?link.path:null,href:"a"===e.linkTag(link.path)?link.path:null,target:"a"===e.linkTag(link.path)?"_blank":null,exact:"nuxt-link"===e.linkTag(link.path)?e.exact:null}},[e._v("\n      "+e._s(e.setLabel(link.label))+"\n    ")])],1)})),0)}),[],!1,null,null,null);t.a=component.exports},933:function(e,t,n){e.exports={}},934:function(e,t,n){e.exports={}},969:function(e,t,n){"use strict";n(933)},970:function(e,t,n){"use strict";n(934)}}]);