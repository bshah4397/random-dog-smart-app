(this["webpackJsonprandom-dog-smart-app"]=this["webpackJsonprandom-dog-smart-app"]||[]).push([[0],{244:function(e,t,n){},318:function(e,t){},320:function(e,t){},330:function(e,t){},332:function(e,t){},357:function(e,t){},359:function(e,t){},360:function(e,t){},365:function(e,t){},367:function(e,t){},386:function(e,t){},398:function(e,t){},401:function(e,t){},407:function(e,t,n){"use strict";n.r(t);var a=n(47),c=(n(0),n(64)),i=(n(244),n(245),n(84)),s=n(214),r=n(3),l="http://www.nlm.nih.gov/research/umls/rxnorm";function d(e){var t=e.med,n=function(){var e="Unnamed Medication(TM)",t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(e){return e.system===l}));return t&&t.display&&(e=t.display),e}(Object(i.getPath)(t,"medicationCodeableConcept.coding")||Object(i.getPath)(t,"medicationReference.code.coding"));return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("b",{children:n})}),Object(r.jsx)("td",{children:t.status||"-"}),Object(r.jsx)("td",{children:t.intent||"-"}),Object(r.jsx)("td",{children:Object(i.getPath)(t,"dosageInstruction.0.text")||"-"})]})}var j=function(e){var t=e.patient,n=e.meds;return console.log(t),Object(r.jsxs)("div",{className:"App",style:{padding:"20px"},children:[t?Object(r.jsx)(s.a,{patient:t}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("hr",{}),n?Object(r.jsxs)("table",{className:"table table-hover",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Medication"}),Object(r.jsx)("th",{children:"Status"}),Object(r.jsx)("th",{children:"Intent"}),Object(r.jsx)("th",{children:"Dosage Instruction"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){return Object(r.jsx)(d,{med:e},e.id)}))})]}):Object(r.jsx)(r.Fragment,{})]})},o=n(424),h=n(418),b=n(132),u=n(420),x=n(421),m=n(425),O=n(427),p=n(428),f=n(429),g=n(430),v=n(431),y=n(432),w=n.p+"static/media/location.8fd9cd85.png",M=n.p+"static/media/tracker.1543b769.png",z={global:{font:{family:"Roboto",size:"18px",height:"20px"}}};var P=function(){return Object(r.jsx)(o.a,{theme:z,full:!0,children:Object(r.jsx)(h.a,{pad:"medium",children:Object(r.jsxs)(b.a,{direction:"column",pad:"none",gap:"small",height:"full",children:[Object(r.jsxs)(b.a,{direction:"row",pad:"small",gap:"medium",height:"small",children:[Object(r.jsx)(b.a,{pad:"none",justify:"center",children:Object(r.jsx)(u.a,{height:"small",children:Object(r.jsx)(x.a,{pad:"small",justify:"center",children:Object(r.jsx)(m.a,{size:"xlarge",src:"//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?"})})})}),Object(r.jsx)(b.a,{pad:"none",direction:"column",basis:"full",children:Object(r.jsx)(u.a,{height:"small",children:Object(r.jsxs)(x.a,{pad:"small",children:[Object(r.jsx)(O.a,{margin:"none",level:4,children:"Wendy Little"}),Object(r.jsx)(p.a,{maxLines:2,size:"small",margin:{bottom:"xsmall"},children:"418 Kohler Crossroad Unit 74, Medford, Massachusetts, 02145"}),Object(r.jsxs)(b.a,{direction:"row",gap:"xsmall",wrap:!0,width:"xxlarge",children:[Object(r.jsx)(f.a,{size:"xsmall",name:"Gender",value:"F"}),Object(r.jsx)(f.a,{size:"xsmall",name:"DOB",value:"2000-11-15"}),Object(r.jsx)(f.a,{size:"xsmall",name:"Height",value:"153cm"}),Object(r.jsx)(f.a,{size:"xsmall",name:"Weight",value:"130lbs"}),Object(r.jsx)(f.a,{size:"xsmall",name:"Blood type",value:"O +"})]})]})})})]}),Object(r.jsx)(b.a,{direction:"row",pad:"small",width:"full",height:"full",children:Object(r.jsx)(u.a,{basis:"full",height:"3/4",children:Object(r.jsx)(x.a,{pad:"small",children:Object(r.jsxs)(g.a,{justify:"start",basis:"full",children:[Object(r.jsx)(v.a,{title:"Pain Body Location Map",children:Object(r.jsx)(b.a,{pad:"medium",height:"full",children:Object(r.jsx)(y.a,{fit:"contain",src:w})})}),Object(r.jsx)(v.a,{title:"Pain Tracker",children:Object(r.jsx)(b.a,{pad:"medium",height:"full",children:Object(r.jsx)(y.a,{fit:"contain",fill:!0,src:M})})})]})})})})]})})})};var k=function(e){var t=e.patient,n=e.meds;return t||console.log("Rendering Static App"),t?Object(r.jsx)(j,{patient:t,meds:n}):Object(r.jsx)(P,{})},I=n(234),R=document.getElementById("root");I.oauth2.init({clientId:"0oae3i5p2p4ikNR4C297",scope:"launch offline_access openid fhirUser user/MedicationRequest.read user/Patient.read user/Observation.read patient/MedicationRequest.read patient/Patient.read patient/Observation.read",pkceMode:"required",completeInTarget:!0}).then((function(e){return Promise.all([e.patient.read()])})).then((function(e){var t=Object(a.a)(e,1)[0];Object(c.render)(Object(r.jsx)(k,{patient:t}),R)}),(function(e){console.error(e),Object(c.render)(Object(r.jsx)(k,{patient:void 0,meds:void 0}),R)}))}},[[407,1,2]]]);
//# sourceMappingURL=main.2bca15d1.chunk.js.map