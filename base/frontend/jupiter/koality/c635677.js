(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1009:function(e,t,n){"use strict";n(954)},1036:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n(14),o=n(9),l=(n(25),n(89),n(15),n(148),n(17),n(16),n(27),n(19),n(28),n(36)),d=n(723),v=n(285),f=(n(39),n(1)),_=n(80),m=(n(68),n(21)),O={};O.props={cardData:{type:Object,default:function(){}},role:{type:Number,default:0}},O.setup=function(e,t){return{disabledFeature:m.b}},O.components=Object.assign({GeneralButton:_.a},O.components);var h=O,y=n(4),j=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border border-gray-300 p-4 flex flex-col"},[n("div",{staticClass:"flex-auto"},[n("header",{staticStyle:{"min-height":"190px"}},[n("figure",{staticClass:"mb-4"},[n("img",{staticClass:"w-1/2",attrs:{src:e.cardData.logo,alt:"plugin logo"}})]),e._v(" "),n("h2",{staticClass:"text-lg"},[e._v("\n        "+e._s(e.cardData.name)+"\n      ")])]),e._v(" "),n("div",{staticClass:"mb-6 text-sm flex mt-1"},[n("div",{staticClass:"rounded px-2 py-1 bg-gray-200"},[e._v("\n        "+e._s(e.cardData.category)+"\n      ")]),e._v(" "),300===e.cardData.status?n("div",{staticClass:"ml-2 rounded px-2 py-1 bg-forth-lighter"},[e._v("\n        Beta\n      ")]):e._e(),e._v(" "),200===e.cardData.status?n("div",{staticClass:"ml-2 rounded px-2 py-1",staticStyle:{"background-color":"#ffe5e6"}},[e._v("\n        Alpha\n      ")]):e._e()]),e._v(" "),n("p",{staticClass:"font-light"},[e._v("\n      "+e._s(e.cardData.short_description)+"\n    ")])]),e._v(" "),e.role<300?n("div",{staticClass:"flex mt-6 justify-between"},[e.disabledFeature("marketplace:displayPrice")?e._e():n("div",{staticClass:"rounded border border-gray-300 text-center px-4 leading-none flex flex-center flex-col mr-4"},[n("div",[e._v(e._s(5*e.cardData.credits)+" Euro")]),e._v(" "),n("small",[e._v(e._s(e.$t("monthly")))])]),e._v(" "),n("GeneralButton",{attrs:{size:"px-4 py-2"},nativeOn:{click:function(t){return e.$emit("pluginState",{id:e.cardData.id,state:e.cardData.is_active?"deactivate":"activate"})}}},[e._v("\n      "+e._s(e.cardData.is_active?e.$t("deactivate"):e.cardData.is_allowed?e.$t("activate"):e.$t("information"))+"\n    ")])],1):e._e()])}),[],!1,null,null,null).exports,x=n(167),k=n(287),S=n(288),D=n(878),w=n(112),P=Object(f.b)({name:"MarketplaceSecondScreen",components:{SideScreen:S.a,FormFooter:k.a,InfoBox:D.a,Richtext:w.a},props:{openScreen:{type:Boolean,default:!1},pluginData:{type:Object,default:function(){}}},setup:function(e,t){var n=t.emit,r=Object(f.r)(),c=Object(f.l)(),l=c.$apiClient,d=c.route,v=Object(f.i)(!1),_=Object(f.i)(!1),m=d.value.params.pid;v.value=e.openScreen;var O=Object(f.a)((function(){return r.getters["access/getUserDetails"]})),h=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var c,o,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.getRepository("marketplace");case 3:if(c=t.sent,o=O.value.company.id,"activate"!==r){t.next=11;break}return t.next=8,c.activateFeature(o,e.pluginData.identifier,{projects:[m]});case 8:n("update"),t.next=21;break;case 11:if("deactivate"!==r){t.next=21;break}return t.next=14,c.deactivateFeature(o,e.pluginData.identifier,{projects:[m]});case 14:if(d=t.sent,!(v=d.errors[m]||!1)){t.next=20;break}throw new x.a(v);case 20:n("update");case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),_.value=t.t0;case 26:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(e){return t.apply(this,arguments)}}();return{userDetails:O,error:_,screenState:v,storing:h}}}),C=P,$=Object(y.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SideScreen",{attrs:{"is-open":e.openScreen},scopedSlots:e._u([{key:"meta",fn:function(){return[n("div",{staticClass:"mb-6 text-sm flex mt-1"},[n("div",{staticClass:"rounded px-2 py-1 bg-gray-200"},[e._v("\n        "+e._s(e.pluginData.category)+"\n      ")]),e._v(" "),e.pluginData.beta?n("div",{staticClass:"ml-2 rounded px-2 py-1 bg-forth-lighter"},[e._v("\n        beta\n      ")]):e._e()])]},proxy:!0},{key:"headline",fn:function(){return[e._v("\n    "+e._s(e.pluginData.name)+"\n  ")]},proxy:!0},{key:"subline",fn:function(){return[n("p",{staticClass:"font-light"},[e._v("\n      "+e._s(e.pluginData.description)+"\n    ")]),e._v(" "),e.pluginData.credits?n("InfoBox",{staticClass:"mt-8"},[e._v("\n      "+e._s(e.$t("marketplace.costsPerMonth"))+": "+e._s(5*e.pluginData.credits)+" EUR\n    ")]):e._e()]},proxy:!0},{key:"body",fn:function(){return[e.pluginData.link?n("a",{staticClass:"underline hover:no-underline font-light mb-4 inline-block",attrs:{href:e.pluginData.link,target:"_blank",rel:"nofollow"}},[e._v("\n      "+e._s(e.$t("FurtherInformation"))+"\n    ")]):e._e(),e._v(" "),e.pluginData.image?n("div",[n("div",[e._v(e._s(e.$t("Preview")))]),e._v(" "),n("figure",[n("img",{staticClass:"w-1/2 border border-gray-300",attrs:{src:e.pluginData.image,alt:"preview image"}})])]):e._e(),e._v(" "),e.pluginData.is_allowed?e._e():n("InfoBox",{staticClass:"mt-8"},[n("p",[n("Richtext",{attrs:{content:e.$t("marketplace.cannotActivateInfo")}})],1),e._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/dashboard/customerDetails",exact:""}},[e._v("\n          "+e._s(e.$t("marketplace.gotoPayment"))+"\n        ")])],1)])]},proxy:!0},{key:"footer",fn:function(){return[n("FormFooter",{attrs:{config:e.pluginData.is_active?"disable":"store","is-store-able":e.pluginData.is_allowed,"with-activate-opt-in":!e.pluginData.is_active&&e.pluginData.credits>0,"disable-button-label":"deactivate","store-button-label":"activate","confirm-message":"extras.confirmDeactivation","confirm-message-activate":"extras.confirmActivation",error:e.error},on:{cancel:function(t){return e.$emit("cancel")},store:function(t){return e.storing("activate")},disable:function(t){return e.storing("deactivate")}}})]},proxy:!0}])})}),[],!1,null,null,null).exports;function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var F=Object(f.b)({name:"Marketplace",components:{MarketplaceSecondScreen:$,MarketplaceCard:j,GeneralButton:_.a},props:{features:{type:Object,default:function(){}}},setup:function(e,t){var n=t.emit,o=Object(f.r)(),l=Object(f.i)(!1),d=Object(f.i)({}),v=Object(f.i)(!1),_=Object(f.a)((function(){return o.getters["projects/getProjectRole"]})),m=Object(f.a)((function(){return o.getters["navigation/getSublayout"]})),O=Object(f.a)((function(){return o.getters["navigation/getIsPaidEnabled"]})),h=Object(f.a)((function(){return e.features?Object.entries(e.features).map((function(e){var t=Object(c.a)(e,2);return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({id:t[0]},t[1])})):[]})),y=Object(f.a)((function(){return h.value.filter((function(e){return e.is_active}))})),j=Object(f.a)((function(){return h.value.filter((function(e){return!e.is_active}))})),x=function(){d.value={},l.value=!1,setTimeout((function(){v.value=!1}),100)};return{pluginData:d,openScreen:l,role:_,plugins:h,activePlugins:y,inactivePlugins:j,update:function(){n("update"),x()},closeScreen:x,pluginState:function(t){v.value=!0,l.value=!0,d.value=e.features[t.id]},showMarketplaceSecondScreen:v,sublayout:m,isPaidEnabled:O,handleUpgrade:function(){o.dispatch("ui/openshowUpsellScreen"),o.dispatch("ui/openUpsellScreen")}}}}),M=F,B=(n(1009),Object(y.a)(M,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["cpanel"!==e.sublayout||e.activePlugins.length||e.inactivePlugins.length?e._e():n("div",[e.isPaidEnabled?n("div",{staticClass:"flex flex-col gap-2"},[n("p",[e._v("\n        "+e._s(e.$t("upgradeToAccess"))+"\n      ")]),e._v(" "),n("GeneralButton",{staticClass:"w-min",nativeOn:{click:function(t){return e.handleUpgrade.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("Upgrade"))+"\n      ")])],1):n("div",[e._v("\n      "+e._s(e.$t("NoExtrasAllowed"))+"\n    ")])]),e._v(" "),e.activePlugins.length?n("div",[n("h2",{staticClass:"cSubline mb-4"},[e._v("\n      "+e._s(e.$t("activePlugins"))+"\n    ")]),e._v(" "),n("div",{staticClass:"grid-marketplace"},e._l(e.activePlugins,(function(t){return n("MarketplaceCard",{key:t.id,attrs:{"card-data":t,role:e.role},on:{pluginState:e.pluginState}})})),1)]):e._e(),e._v(" "),e.activePlugins.length&&e.inactivePlugins.length?n("div",{staticClass:"border-b border-gray-200 mb-6 pb-8"}):e._e(),e._v(" "),e.inactivePlugins.length?n("div",[n("h2",{staticClass:"cSubline mb-4"},[e._v("\n      "+e._s(e.$t("inactivePlugins"))+"\n    ")]),e._v(" "),n("div",{staticClass:"grid-marketplace"},e._l(e.inactivePlugins,(function(t){return n("MarketplaceCard",{key:t.id,attrs:{"card-data":t,role:e.role},on:{pluginState:e.pluginState}})})),1)]):e._e(),e._v(" "),e.showMarketplaceSecondScreen?n("MarketplaceSecondScreen",{attrs:{"open-screen":e.openScreen,"plugin-data":e.pluginData},on:{update:e.update,cancel:e.closeScreen}}):e._e()],1)}),[],!1,null,null,null)),R=B.exports;function U(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var A={name:"PageExtrasMarketplace",components:{GeneralButton:_.a,Marketplace:R,LoadingSpinner:v.a,SegmentHeader:d.a},data:function(){return{features:null,activeFeatures:0}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.$route.params.pid,t.next=4,e.$apiClient.getRepository("marketplace");case 4:return r=t.sent,t.next=7,r.getAvailableFeatures(n,{status:200});case 7:o=t.sent,l=o.features,Object(m.b)("marketplace:paidPlugins")?e.features=Object.entries(l).reduce((function(e,t){var n=Object(c.a)(t,2),r=n[0],o=n[1];return 0===o.credits&&(e[r]=o),e}),{}):e.features=l,e.activeFeatures=Object.values(e.features).filter((function(e){return e.is_active})).length,t.next=15;break;case 13:t.prev=13,t.t0=t.catch(0);case 15:case"end":return t.stop()}}),t,null,[[0,13]])})))()},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)({sublayout:"navigation/getSublayout"})),methods:{update:function(){var e=this.$route.params.pid;this.$fetch(),this.$store.dispatch("ui/closeMetaSidebar"),this.$store.dispatch("navigation/updateNavigation",{pid:e})}}},G=A,I=Object(y.a)(G,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SegmentHeader",[e.activeFeatures&&"cpanel"!==e.sublayout?n("div",{staticClass:"mb-6"},[n("GeneralButton",{attrs:{"link-path":"/dashboard/customerSubscriptions#features",exact:""}},[e._v("\n        "+e._s(e.$t("subscriptions.gotoFeatureSubscriptions"))+"\n      ")])],1):e._e()]),e._v(" "),e.$fetchState.pending?n("LoadingSpinner"):[n("Marketplace",{attrs:{features:e.features},on:{update:e.update}})]],2)}),[],!1,null,null,null);t.default=I.exports},954:function(e,t,n){e.exports={}}}]);