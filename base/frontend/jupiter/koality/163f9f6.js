(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1073:function(t,e,n){"use strict";n.r(e);var o=n(723),r=n(929),c=n(285),l=n(1),f=n(877),h=n(871),d=n(925),v=Object(l.b)({name:"PageSeoScore",components:{CollectDataInfo:f.a,LoadingSpinner:c.a,SeoResults:r.a,SegmentHeader:o.a},setup:function(){var t=Object(h.a)(),e=t.url,n=t.screenshot,o=Object(d.a)("seo"),r=o.fetch,c=o.fetchState,l=o.dataCount;return{url:e,screenshot:n,lighthouseResult:o.lighthouseResult,dataCount:l,fetchState:c,fetch:r}}}),m=n(4),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SegmentHeader",{attrs:{"tool-identifier":"lighthouse","tool-identifier-group":"desktop_seo","disable-settings":["limit"]}}),t._v(" "),t.$fetchState.pending?n("LoadingSpinner"):[n("CollectDataInfo",{attrs:{"data-count":t.dataCount},on:{updateData:t.$fetch}}),t._v(" "),t._l(t.lighthouseResult,(function(component){return n("SeoResults",{key:component.component.id,staticClass:"mb-5",attrs:{id:component.component.id,component:component,screenshot:t.screenshot(component.component.id),"external-url":t.url(component.component.id)}})}))]],2)}),[],!1,null,null,null);e.default=component.exports},877:function(t,e,n){"use strict";n(68);var o=n(1),r=n(878),c=n(112),l=Object(o.b)({name:"CollectDataInfo",components:{Richtext:c.a,InfoBox:r.a},props:{dataCount:{type:Number,default:0}},setup:function(t,e){var n=e.emit,r=Object(o.l)().store,c=Object(o.i)(!1),l=Object(o.i)(!1),f=Object(o.i)(!1),h=Object(o.a)({get:function(){return!1},set:function(){return r.getters["testrunner/getFirstRun"]}});return Object(o.s)(h,(function(){h.value?(l.value=!1,c.value=!0):(c.value=!1,l.value=0===t.dataCount,f.value!==h.value&&n("updateData")),f.value=h.value}),{immediate:!0}),{showInfoForFirstRun:c,showInfoForNoData:l}}}),f=n(4),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showInfoForFirstRun||t.showInfoForNoData?n("InfoBox",{staticClass:"mb-6"},[t.showInfoForFirstRun?[n("h2",{staticClass:"cSubline"},[t._v("\n      "+t._s(t.$t("WeAreCollectingData"))+"\n    ")]),t._v(" "),n("p",[n("Richtext",{attrs:{content:t.$t("WeCollectDataSentence")}})],1)]:t._e(),t._v(" "),t.showInfoForNoData?[t._v("\n    "+t._s(t.$t("noStatsOnProject"))+"\n  ")]:t._e()],2):t._e()}),[],!1,null,null,null);e.a=component.exports},925:function(t,e,n){"use strict";var o=n(9),r=(n(25),n(39),n(17),n(15),n(1));e.a=function(t){var e=Object(r.l)(),n=e.$apiClient,c=e.route.value.params.sid,l=Object(r.i)(0),f=Object(r.i)(null),h=Object(r.m)(Object(o.a)(regeneratorRuntime.mark((function e(){var o,r,h,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getRepository("checklighthouse");case 3:return o=e.sent,e.next=6,o.getResults(c,t);case 6:r=e.sent,h=r.results,d=Object.keys(h).map((function(t){return h[t]})),l.value=d.filter((function(t){return t.results.length})).length,f.value=d,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))));return{fetch:h.fetch,fetchState:h.fetchState,dataCount:l,lighthouseResult:f}}}}]);