(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{41:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),a=s.n(n),r=s(16),i=s.n(r),l=s(7),j=s(4),d=s(17),o=s.n(d),h=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)([]),i=Object(j.a)(r,2),d=i[0],h=i[1],b=Object(n.useState)("asc"),u=Object(j.a)(b,2),m=u[0],O=u[1],x=Object(n.useState)(""),f=Object(j.a)(x,2),g=f[0],p=f[1];Object(n.useEffect)((function(){o.a.get("https://randomuser.me/api/?results=30").then((function(e){h(e.data.results),a(e.data.results)}))}),[]);var v=function(){console.log("I was clicked! Trigger sort ascending!!!");var e=Object(l.a)(s).sort((function(e,t){var s=e.name.first,c=t.name.first;return s<c?-1:s>c?1:0}));h(e)},N=function(){console.log("I was clicked! I am descending!!!");var e=Object(l.a)(s).sort((function(e,t){var s=e.name.first,c=t.name.first;return s>c?-1:s<c?1:0}));h(e)};return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=s.filter((function(e){return e.phone.includes(g)}));h(t)},children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter phone number to filter by phone",name:"searchTerm",value:g,onChange:function(e){p(e.target.value)}}),Object(c.jsxs)("button",{class:"btn waves-effect waves-light",children:["Search",Object(c.jsx)("i",{class:"material-icons right",children:"search"})]}),Object(c.jsxs)("button",{class:"btn waves-effect waves-light",onClick:function(){h(s),p("")},type:"button",children:["Clear",Object(c.jsx)("i",{class:"material-icons right",children:"clear"})]})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"striped",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"s2",children:"ID"}),Object(c.jsx)("th",{className:"s2",children:"Photo"}),Object(c.jsxs)("th",{className:"s2",onClick:function(){"asc"===m?(v(),O("des")):(N(),O("asc"))},children:["Name"," "]}),Object(c.jsx)("th",{className:"s2",children:"Email"}),Object(c.jsx)("th",{className:"s2",children:"Phone Number"}),Object(c.jsx)("th",{className:"s2",children:"Date of Birth (DOB)"})]})}),Object(c.jsx)("tbody",{children:d.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"s2",children:e.id.value}),Object(c.jsx)("td",{className:"s2",children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:"User's thumbnail"})}),Object(c.jsxs)("td",{className:"s2",children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{className:"s2",children:e.email}),Object(c.jsx)("td",{className:"s2",children:e.phone}),Object(c.jsx)("td",{className:"s2",children:e.dob.date})]},t)}))})]})})]})},b=function(){return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("a",{href:"https://www.gatech.edu/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{className:"col s3",src:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092016/untitled-2_18.jpg?itok=SZJj7Hq5",alt:"GA Tech Logo",style:{height:145,width:195,paddingLeft:50}})}),Object(c.jsx)("h1",{className:"col s9",children:"GT Computer Science Staff Directory:"})]})},u=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"divider"}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12",children:Object(c.jsx)(h,{})})})})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),m()}},[[41,1,2]]]);
//# sourceMappingURL=main.01bce807.chunk.js.map