(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1059:function(e,t,n){"use strict";n.r(t);var r=n(9),c=(n(25),n(39),n(17),n(15),n(723)),o=n(929),l=n(285),d=n(1),f=n(871),m=Object(d.b)({name:"PageA11yWCAGAA",components:{LoadingSpinner:l.a,SeoResults:o.a,SegmentHeader:c.a},setup:function(){var e=Object(d.l)(),t=e.$apiClient,n=e.route.value.params.sid,c=Object(d.i)(0),o=Object(d.i)(null),l=Object(f.a)(),m=l.url,h=l.screenshot,v=Object(d.m)(Object(r.a)(regeneratorRuntime.mark((function e(){var r,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getRepository("checkA11y");case 3:return r=e.sent,e.next=6,r.getResults(n);case 6:l=e.sent,d=l.results,f=Object.keys(d).map((function(e){return d[e]})),c.value=0===f.filter((function(e){return e.results.length})).length,o.value=f,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))),j=v.fetch,O=v.fetchState;return{url:m,screenshot:h,a11yResults:o,dataCount:c,fetchState:O,fetch:j}}}),h=n(4),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SegmentHeader"),e._v(" "),e.$fetchState.pending?n("LoadingSpinner"):[e.dataCount?n("p",[e._v("\n      "+e._s(e.$t("noStatsOnProject"))+"\n    ")]):e._e(),e._v(" "),e._l(e.a11yResults,(function(component){return n("SeoResults",{key:component.component.id,staticClass:"mb-5",attrs:{id:component.component.id,component:component,screenshot:e.screenshot(component.component.id),"external-url":e.url(component.component.id)}})}))]],2)}),[],!1,null,null,null);t.default=component.exports}}]);