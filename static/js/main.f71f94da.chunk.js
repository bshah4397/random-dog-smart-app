(this["webpackJsonprandom-dog-smart-app"]=this["webpackJsonprandom-dog-smart-app"]||[]).push([[0],{244:function(A,e,t){},318:function(A,e){},320:function(A,e){},330:function(A,e){},332:function(A,e){},357:function(A,e){},359:function(A,e){},360:function(A,e){},365:function(A,e){},367:function(A,e){},386:function(A,e){},398:function(A,e){},401:function(A,e){},407:function(A,e,t){"use strict";t.r(e);var n=t(47),c=(t(0),t(64)),s=(t(244),t(245),t(84)),a=t(214),i=t(3),l="http://www.nlm.nih.gov/research/umls/rxnorm";function r(A){var e=A.med,t=function(){var A="Unnamed Medication(TM)",e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(A){return A.system===l}));return e&&e.display&&(A=e.display),A}(Object(s.getPath)(e,"medicationCodeableConcept.coding")||Object(s.getPath)(e,"medicationReference.code.coding"));return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:t})}),Object(i.jsx)("td",{children:e.status||"-"}),Object(i.jsx)("td",{children:e.intent||"-"}),Object(i.jsx)("td",{children:Object(s.getPath)(e,"dosageInstruction.0.text")||"-"})]})}var d=function(A){var e=A.patient,t=A.meds;return console.log(e),Object(i.jsxs)("div",{className:"App",style:{padding:"20px"},children:[e?Object(i.jsx)(a.a,{patient:e}):Object(i.jsx)(i.Fragment,{}),Object(i.jsx)("hr",{}),t?Object(i.jsxs)("table",{className:"table table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Medication"}),Object(i.jsx)("th",{children:"Status"}),Object(i.jsx)("th",{children:"Intent"}),Object(i.jsx)("th",{children:"Dosage Instruction"})]})}),Object(i.jsx)("tbody",{children:t.map((function(A){return Object(i.jsx)(r,{med:A},A.id)}))})]}):Object(i.jsx)(i.Fragment,{})]})},o=t(424),j=t(418),h=t(132),u=t(420),b=t(421),m=t(425),p=t(427),x=t(428),O=t(429),y=t(430),g=t(431),f=t(432),v=t.p+"static/media/location.8fd9cd85.png",E=t.p+"static/media/tracker.1543b769.png",S={global:{font:{family:"Roboto",size:"18px",height:"20px"}}};var k=function(){return Object(i.jsx)(o.a,{theme:S,full:!0,children:Object(i.jsx)(j.a,{pad:"medium",children:Object(i.jsxs)(h.a,{direction:"column",pad:"none",gap:"small",height:"full",children:[Object(i.jsxs)(h.a,{direction:"row",pad:"small",gap:"medium",height:"small",children:[Object(i.jsx)(h.a,{pad:"none",justify:"center",children:Object(i.jsx)(u.a,{height:"small",children:Object(i.jsx)(b.a,{pad:"small",justify:"center",children:Object(i.jsx)(m.a,{style:{height:"140px",width:"140px"},src:"data:image/jpeg;base64,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"})})})}),Object(i.jsx)(h.a,{pad:"none",direction:"column",basis:"full",children:Object(i.jsx)(u.a,{height:"small",children:Object(i.jsxs)(b.a,{pad:"small",children:[Object(i.jsx)(p.a,{margin:"none",level:4,children:"Jake Medlock"}),Object(i.jsx)(x.a,{maxLines:2,size:"small",margin:{bottom:"xsmall"},children:"10 Cactus Drive, Los Angeles, CA 90001"}),Object(i.jsxs)(h.a,{direction:"row",gap:"xsmall",wrap:!0,width:"xxlarge",children:[Object(i.jsx)(O.a,{size:"xsmall",name:"Gender",value:"M"}),Object(i.jsx)(O.a,{size:"xsmall",name:"DOB",value:"XXXX-XX-XX"}),Object(i.jsx)(O.a,{size:"xsmall",name:"Height",value:"6 Ft"}),Object(i.jsx)(O.a,{size:"xsmall",name:"Weight",value:"187 lbs"}),Object(i.jsx)(O.a,{size:"xsmall",name:"Blood type",value:"O+"})]})]})})})]}),Object(i.jsx)(h.a,{direction:"row",pad:"small",width:"full",height:"full",children:Object(i.jsx)(u.a,{basis:"full",height:"3/4",children:Object(i.jsx)(b.a,{pad:"small",children:Object(i.jsxs)(y.a,{justify:"start",basis:"full",children:[Object(i.jsx)(g.a,{title:"Pain Body Location Map",children:Object(i.jsx)(h.a,{pad:"medium",height:"full",children:Object(i.jsx)(f.a,{fit:"contain",src:v})})}),Object(i.jsx)(g.a,{title:"Pain Tracker",children:Object(i.jsx)(h.a,{pad:"medium",height:"full",children:Object(i.jsx)(f.a,{fit:"contain",fill:!0,src:E})})})]})})})})]})})})};var M=function(A){var e=A.patient,t=A.meds;return sessionStorage.clear(),e||console.log("Rendering Static App"),e?Object(i.jsx)(d,{patient:e,meds:t}):Object(i.jsx)(k,{})},q=t(234),w=document.getElementById("root");q.oauth2.init({clientId:"0oae3i5p2p4ikNR4C297",scope:"launch offline_access openid fhirUser user/MedicationRequest.read user/Patient.read user/Observation.read",pkceMode:"required",fullSessionStorageSupport:!1,completeInTarget:!0}).then((function(A){return Promise.all([A.patient.read().catch((function(A){console.log(A)})),A.patient.request("MedicationRequest").catch((function(A){console.log(A)}))])})).then((function(A){var e=Object(n.a)(A,2),t=e[0],s=e[1];Object(c.render)(Object(i.jsx)(M,{patient:t,meds:s}),w)}),(function(A){console.error(A),Object(c.render)(Object(i.jsx)(M,{patient:void 0,meds:void 0}),w)}))}},[[407,1,2]]]);
//# sourceMappingURL=main.f71f94da.chunk.js.map