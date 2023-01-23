(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(9),c(10),c(0)),i=function(e){var t=e.todos,c=e.setSelectedTodoId,s=e.selectedTodoId;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered"}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:s===e.id?Object(d.jsx)("button",{"data-cy":"selectButton",className:"button is-link",type:"button",onClick:function(){return c(0)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye-slash"})})}):Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},o=function(e){var t=e.setSortType,c=e.sortType,s=e.query,a=e.setQuery;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.selectedTodo,c=e.setSelectedTodoId,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,r("/users/".concat(e))).then(o)}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(d.jsx)(j,{})]})},h=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),h=Object(n.a)(a,2),u=h[0],m=h[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(""),v=Object(n.a)(N,2),y=v[0],g=v[1];Object(l.useEffect)((function(){r("/todos").then(s)}),[]);var T=c.filter((function(e){return"active"===f?!e.completed:"completed"!==f||e.completed})).filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(o,{setSortType:p,sortType:f,query:y,setQuery:g})}),Object(d.jsxs)("div",{className:"block",children:[0===c.length&&Object(d.jsx)(j,{}),Object(d.jsx)(i,{todos:T,setSelectedTodoId:m,selectedTodoId:u})]})]})})}),u&&Object(d.jsx)(b,{selectedTodo:c.find((function(e){return e.id===u}))||c[0],setSelectedTodoId:m})]})};a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e4af2438.chunk.js.map