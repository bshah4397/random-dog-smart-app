(this["webpackJsonprandom-dog-smart-app"]=this["webpackJsonprandom-dog-smart-app"]||[]).push([[0],{244:function(e,t,n){},318:function(e,t){},320:function(e,t){},330:function(e,t){},332:function(e,t){},357:function(e,t){},359:function(e,t){},360:function(e,t){},365:function(e,t){},367:function(e,t){},386:function(e,t){},398:function(e,t){},401:function(e,t){},407:function(e,t,n){"use strict";n.r(t);var c=n(47),i=(n(0),n(64)),a=(n(244),n(245),n(84)),s=n(214),l=n(3),r="http://www.nlm.nih.gov/research/umls/rxnorm";function o(e){var t=e.med,n=function(){var e="Unnamed Medication(TM)",t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(e){return e.system===r}));return t&&t.display&&(e=t.display),e}(Object(a.getPath)(t,"medicationCodeableConcept.coding")||Object(a.getPath)(t,"medicationReference.code.coding"));return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("b",{children:n})}),Object(l.jsx)("td",{children:t.status||"-"}),Object(l.jsx)("td",{children:t.intent||"-"}),Object(l.jsx)("td",{children:Object(a.getPath)(t,"dosageInstruction.0.text")||"-"})]})}var d=function(e){var t=e.patient,n=e.meds;return console.log(t),Object(l.jsxs)("div",{className:"App",style:{padding:"20px"},children:[t?Object(l.jsx)(s.a,{patient:t}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("hr",{}),n?Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Medication"}),Object(l.jsx)("th",{children:"Status"}),Object(l.jsx)("th",{children:"Intent"}),Object(l.jsx)("th",{children:"Dosage Instruction"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsx)(o,{med:e},e.id)}))})]}):Object(l.jsx)(l.Fragment,{})]})},j=n(424),h=n(418),u=n(131),b=n(420),m=n(421),x=n(425),O=n(426),p=n(427),f=n(429),g=n(430),v=n(431),w=n.p+"static/media/location.8fd9cd85.png",y=n.p+"static/media/tracker.1543b769.png",M={global:{font:{family:"Roboto",size:"18px",height:"20px"}}};var k=function(){return Object(l.jsx)(j.a,{theme:M,full:!0,children:Object(l.jsx)(h.a,{pad:"medium",children:Object(l.jsxs)(u.a,{direction:"column",pad:"none",gap:"small",height:"full",children:[Object(l.jsx)(u.a,{direction:"row",pad:"small",gap:"medium",height:"small",children:Object(l.jsx)(u.a,{pad:"none",direction:"column",basis:"full",children:Object(l.jsx)(b.a,{height:"small",children:Object(l.jsxs)(m.a,{pad:"small",children:[Object(l.jsx)(x.a,{margin:"none",level:4,children:"Jake Medlock"}),Object(l.jsx)(O.a,{maxLines:2,size:"small",margin:{bottom:"xsmall"},children:"10 Cactus Drive, Los Angeles, CA 90001"}),Object(l.jsxs)(u.a,{direction:"row",gap:"xsmall",wrap:!0,width:"xxlarge",children:[Object(l.jsx)(p.a,{size:"xsmall",name:"Gender",value:"M"}),Object(l.jsx)(p.a,{size:"xsmall",name:"DOB",value:"XXXX-XX-XX"}),Object(l.jsx)(p.a,{size:"xsmall",name:"Height",value:"6 Ft"}),Object(l.jsx)(p.a,{size:"xsmall",name:"Weight",value:"187 lbs"}),Object(l.jsx)(p.a,{size:"xsmall",name:"Blood type",value:"O+"})]})]})})})}),Object(l.jsx)(u.a,{direction:"row",pad:"small",width:"full",height:"full",children:Object(l.jsx)(b.a,{basis:"full",height:"3/4",children:Object(l.jsx)(m.a,{pad:"small",children:Object(l.jsxs)(f.a,{justify:"start",basis:"full",children:[Object(l.jsx)(g.a,{title:"Pain Body Location Map",children:Object(l.jsx)(u.a,{pad:"medium",height:"full",children:Object(l.jsx)(v.a,{fit:"contain",src:w})})}),Object(l.jsx)(g.a,{title:"Pain Tracker",children:Object(l.jsx)(u.a,{pad:"medium",height:"full",children:Object(l.jsx)(v.a,{fit:"contain",fill:!0,src:y})})})]})})})})]})})})};var X=function(e){var t=e.patient,n=e.meds;return sessionStorage.clear(),t||console.log("Rendering Static App"),t?Object(l.jsx)(d,{patient:t,meds:n}):Object(l.jsx)(k,{})},z=n(234),P=document.getElementById("root");z.oauth2.init({clientId:"0oae3i5p2p4ikNR4C297",scope:"launch offline_access openid fhirUser user/MedicationRequest.read user/Patient.read user/Observation.read",pkceMode:"required",fullSessionStorageSupport:!1,completeInTarget:!0}).then((function(e){return Promise.all([e.patient.read().catch((function(e){console.log(e)})),e.patient.request("MedicationRequest").catch((function(e){console.log(e)}))])})).then((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];Object(i.render)(Object(l.jsx)(X,{patient:n,meds:a}),P)}),(function(e){console.error(e),Object(i.render)(Object(l.jsx)(X,{patient:void 0,meds:void 0}),P)}))}},[[407,1,2]]]);
//# sourceMappingURL=main.ee6295ed.chunk.js.map