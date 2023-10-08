(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n,a=c(9),s=c.n(a),r=c(4),l=c(16),i=c(7),o=c(14),d=c(15),j=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(5),O=function(e){return{type:"filter/ADD_QUERY",payload:e}},f=function(e){return{type:"filter/ADD_STATUS",payload:e}},m={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/ADD_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/ADD_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},p=c(17),v=function(e){return{type:"todos/ADD",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?Object(p.a)(t.payload):e},N=Object(i.combineReducers)({currentTodo:b,filter:x,todos:y}),g=Object(i.createStore)(N,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),T=c(3),E=c(0),w=(c(25),c(26),c(10)),D=c.n(w),S=(r.b,r.c);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var A=c(1),k=function(){var e=Object(E.useState)(),t=Object(T.a)(e,2),c=t[0],a=t[1],s=Object(r.b)(),l=S((function(e){return e.filter})),i=S((function(e){return e.todos})),o=S((function(e){return e.currentTodo}));return Object(E.useEffect)((function(){a(i.filter((function(e){var t=e.title.toLowerCase().includes(l.query.toLowerCase());switch(l.status){case n.ALL:return t;case n.ACTIVE:return!e.completed&&t;case n.COMPLETED:return e.completed&&t;default:return t}})))}),[l]),Object(A.jsx)(A.Fragment,{children:c&&c.length?Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:c.map((function(e){var t=e.id,c=e.completed,n=e.title;return Object(A.jsxs)("tr",{"data-cy":"todo",className:D()({"has-background-info-light":(null===o||void 0===o?void 0:o.id)===t}),children:[Object(A.jsx)("td",{className:"is-vcentered",children:t}),Object(A.jsx)("td",{className:"is-vcentered",children:c&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:D()({"has-text-success":c,"has-text-danger":!c}),children:n})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){s(j(e))}(e)},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:D()("far",{"fa-eye":t!==(null===o||void 0===o?void 0:o.id),"fa-eye-slash":t===(null===o||void 0===o?void 0:o.id)})})})})})]},e.id)}))})]}):Object(A.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},C=function(){var e=Object(r.b)(),t=S((function(e){return e.filter})),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e(O(t))};return Object(A.jsxs)("form",{className:"field has-addons",children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",defaultValue:t.status,onChange:function(t){e(f(t.target.value))},children:[Object(A.jsx)("option",{value:"all",children:"All"}),Object(A.jsx)("option",{value:"active",children:"Active"}),Object(A.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){return c(e.target.value)}}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.query&&Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(A.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c()}})})]})]})},L=(c(28),function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var q=function(){var e=Object(E.useState)(null),t=Object(T.a)(e,2),c=t[0],n=t[1],a=S((function(e){return e.currentTodo})),s=Object(E.useState)(!1),l=Object(T.a)(s,2),i=l[0],o=l[1],d=Object(r.b)();Object(E.useEffect)((function(){var e;a&&(o(!0),(e=a.userId,_("/users/".concat(e))).then((function(e){return n(e)})).catch((function(){throw new Error("Something went wrong")})).finally((function(){return o(!1)})))}),[]);return Object(A.jsx)(A.Fragment,{children:a&&Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),i?Object(A.jsx)(L,{}):c&&Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a.id)}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){d(u())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:a.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[a.completed?Object(A.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(A.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]})]})})},I=function(){var e=S((function(e){return e.currentTodo})),t=Object(E.useState)(!1),c=Object(T.a)(t,2),n=c[0],a=c[1],s=Object(r.b)();return Object(E.useEffect)((function(){a(!0),_("/todos").then((function(e){return s(v(e))})).finally((function(){return a(!1)}))}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"box",children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(C,{})}),Object(A.jsx)("div",{className:"block",children:n?Object(A.jsx)(L,{}):Object(A.jsx)(k,{})})]})})}),e&&Object(A.jsx)(q,{})]})},M=function(){return Object(A.jsx)(r.a,{store:g,children:Object(A.jsx)(l.a,{children:Object(A.jsx)(I,{})})})};s.a.render(Object(A.jsx)(M,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7f10c156.chunk.js.map