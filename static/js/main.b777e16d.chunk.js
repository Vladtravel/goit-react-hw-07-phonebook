(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={ListTable:"ContactsList_ListTable__3LLX9"}},29:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),s=n(18),i=n(4),b=(n(29),n(15)),l=n(3),j=n(30),u=Object(l.b)("contacts/add",(function(e){return{payload:Object(b.a)(Object(b.a)({},e),{},{id:j.generate()})}})),d=Object(l.b)("contacts/delete"),m=Object(l.b)("contacts/changeFilter"),O=n(19),f=n.n(O),h=n(1),p=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){var t=e.contacts,n=t.filter,c=t.items,a=n.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(a)}))}));return Object(h.jsx)("table",{className:f.a.ListTable,children:Object(h.jsx)("tbody",{children:t.map((function(t){var n=t.name,c=t.number,a=t.id;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n}),Object(h.jsx)("td",{children:c}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return function(t){return e(d(t))}(a)},children:"delete"})})]},a)}))})})},x=n(16),v=n(7),F=n.n(v);var g=function(){var e=Object(i.b)(),t=Object(c.useState)(""),n=Object(x.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),s=Object(x.a)(o,2),b=s[0],l=s[1],j=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":l(c);break;default:return}};return Object(h.jsxs)("form",{className:F.a.Form,onSubmit:function(t){t.preventDefault(),""!==a.trim()&&""!==b.trim()?(e(u({name:a,number:b})),r(""),l("")):alert("Fill all fields!")},children:[Object(h.jsxs)("label",{className:F.a.FormLabel,children:["Name",Object(h.jsx)("input",{className:F.a.FormInput,type:"text",name:"name",value:a,onChange:j})]}),Object(h.jsxs)("label",{className:F.a.FormLabel,children:["Number",Object(h.jsx)("input",{className:F.a.FormInput,type:"text",name:"number",value:b,onChange:j})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})},y=function(){var e=Object(i.b)();return Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"text",name:"filter",onChange:function(t){return e(m(t.target.value))}})})};var C,L=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(g,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(h.jsx)(y,{}),Object(h.jsx)(p,{})]})},_=n(5),k=n(20),w=n.n(k),N=n(6),I=n(17),T=n(2),A=Object(l.c)([],(C={},Object(N.a)(C,u,(function(e,t){var n=e.find((function(e){return e.name.toLowerCase()===t.payload.name.toLowerCase()}));if(!n)return[].concat(Object(I.a)(e),[t.payload]);alert("".concat(n.name," is already in contacts."))})),Object(N.a)(C,d,(function(e,t){var n=e.filter((function(e){return e.id!==t.payload}));return Object(I.a)(n)})),C)),S=Object(l.c)("",Object(N.a)({},m,(function(e,t){return t.payload}))),B=Object(T.b)({items:A,filter:S}),J={key:"contacts",storage:w.a,blacklist:["filter"]},U=Object(l.a)({reducer:{contacts:Object(_.g)(J,B)},middleware:Object(l.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}}),devTools:!1}),z={store:U,persistor:Object(_.h)(U)};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(i.a,{store:z.store,children:Object(h.jsx)(s.a,{loading:null,persistor:z.persistor,children:Object(h.jsx)(L,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={Form:"ContactForm_Form__UemrB",FormLabel:"ContactForm_FormLabel__3WZi1",FormInput:"ContactForm_FormInput__1U2Yg"}}},[[42,1,2]]]);
//# sourceMappingURL=main.b777e16d.chunk.js.map