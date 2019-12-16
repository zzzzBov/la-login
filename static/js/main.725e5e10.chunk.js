(this["webpackJsonpla-login"]=this["webpackJsonpla-login"]||[]).push([[0],{11:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),i=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(11);var c,o=t(1),s=t(2),u=function(e){var a=e.onLogOut,t=e.username;return l.a.createElement("div",{className:"Greeting"},l.a.createElement("h1",null,"Welcome ",t,"!"),l.a.createElement("button",{className:"Greeting_logOut",type:"button",onClick:a},"Log Out"))},m=function(e){var a=e.children,t=e.id,r=e.invalid,i=e.label,c=e.name,o=e.onBlur,s=e.onChange,u=e.value,m=Object(n.useCallback)((function(e){s(e.currentTarget.value)}),[s]),d=r?"invalid":"valid";return l.a.createElement("div",{className:"PasswordField PasswordField-".concat(d),id:t},l.a.createElement("label",{className:"PasswordField_label PasswordField-".concat(d,"_label"),htmlFor:"".concat(t,"_input")},i,":"),a&&l.a.createElement("div",{className:"PasswordField_description PasswordField-".concat(d,"_description"),id:"".concat(t,"_description"),"aria-live":"polite"},a),l.a.createElement("input",{"aria-describedby":a?"".concat(t,"_description"):void 0,className:"PasswordField_input PasswordField-".concat(d,"_input"),id:"".concat(t,"_input"),name:c,onBlur:o,onChange:m,type:"password",value:u}))},d=function(e){var a=e.children;return l.a.createElement("button",{className:"SubmitButton",type:"submit"},a)},v=function(e){var a=e.children,t=e.id,r=e.invalid,i=e.label,c=e.name,o=e.onBlur,s=e.onChange,u=e.value,m=Object(n.useCallback)((function(e){s(e.currentTarget.value)}),[s]),d=r?"invalid":"valid";return l.a.createElement("div",{className:"TextField TextField-".concat(d),id:t},l.a.createElement("label",{className:"TextField_label TextField-".concat(d,"_label"),htmlFor:"".concat(t,"_input")},i,":"),a&&l.a.createElement("div",{className:"TextField_description TextField-".concat(d,"_description"),id:"".concat(t,"_description"),"aria-live":"polite"},a),l.a.createElement("input",{"aria-describedby":a?"".concat(t,"_description"):void 0,className:"TextField_input TextField-".concat(d,"_input"),id:"".concat(t,"_input"),name:c,onBlur:o,onChange:m,type:"text",value:u}))},b=t(3);!function(e){e.CLEAN="CLEAN",e.RESET="RESET",e.SET="SET",e.TOUCH="TOUCH"}(c||(c={}));var E=function(e,a){switch(a.type){case c.CLEAN:return Object(b.a)({},e,{dirty:!1});case c.RESET:return{dirty:!1,value:null!=a.payload?a.payload:e.value};case c.SET:return Object(b.a)({},e,{value:null!=a.payload?a.payload:e.value});case c.TOUCH:return Object(b.a)({},e,{dirty:!0});default:return e}},p=function(e,a){var t=Object(n.useReducer)(E,{dirty:!1,value:a}),l=Object(o.a)(t,2),r=l[0],i=r.dirty,s=r.value,u=l[1],m=Object(n.useCallback)((function(){u({type:c.CLEAN})}),[]),d=Object(n.useCallback)((function(){u({payload:a,type:c.RESET})}),[a]),v=Object(n.useCallback)((function(e){u(function(e){return{payload:e,type:c.SET}}(e))}),[]),b=Object(n.useCallback)((function(){u({type:c.TOUCH})}),[]),p=Object.entries(e).map((function(e){var a=Object(o.a)(e,2);return[a[0],(0,a[1])(s)]})),h=Object.fromEntries(p),g=p.every((function(e){var a=Object(o.a)(e,2);a[0];return a[1]}));return{clean:m,dirty:i,error:i&&!g,reset:d,set:v,touch:b,valid:g,validation:h,value:s}},h=function(e){return function(a){return null!=a&&e.test(a)}},g=function(e){return function(a){return a.length<=e}},f=function(e){return function(a){return a.length>=e}},w=function(e){return Boolean(e)},N=function(e){var a=e.children,t=e.onSubmit,r=p({required:w},""),i=p({required:w},""),c=Object(n.useCallback)((function(e){e.preventDefault(),r.touch(),i.touch(),r.valid&&i.valid&&t(r.value,i.value)}),[t,r,i]);return l.a.createElement("form",{className:"LoginForm",method:"POST",onSubmit:c},a&&l.a.createElement("div",{className:"LoginForm_message","aria-live":"assertive"},a),l.a.createElement("div",{className:"LoginForm_username"},l.a.createElement(v,{id:"login-username",invalid:r.error,label:"Username",name:"username",onBlur:r.touch,onChange:r.set,value:r.value},r.dirty&&!r.validation.required&&l.a.createElement("p",null,"Username is required"))),l.a.createElement("div",{className:"LoginForm_password"},l.a.createElement(m,{id:"login-password",invalid:i.error,label:"Password",name:"password",onBlur:i.touch,onChange:i.set,value:i.value},i.dirty&&!i.validation.required&&l.a.createElement("p",null,"Password is required"))),l.a.createElement("div",{className:"LoginForm_submit"},l.a.createElement(d,null,"Log In")))},O=function(e){var a=e.children;return l.a.createElement("main",{className:"Page"},a)},T=function(e){var a=e.children,t=e.valid;return l.a.createElement("li",{className:"ValidationItem ValidationItem-".concat(t?"valid":"invalid")},t?l.a.createElement("span",{role:"img","aria-label":"checked"},"\u2714"):l.a.createElement("span",{role:"img","aria-label":"unchecked"},"\u2716")," ",t?l.a.createElement("s",null,a):l.a.createElement(l.a.Fragment,null,a))},C=function(e){var a=e.children;return l.a.createElement("ul",{className:"ValidationList"},a)},F=function(e){var a=e.onSubmit,t=p({available:function(e){return"level"!==e},max:g(20),min:f(3)},""),r=p({lowercase:h(/[a-z]/),max:g(100),min:f(8),numbers:h(/\d/),uppercase:h(/[A-Z]/)},""),i=p({matches:function(e){return e===r.value}},""),c=Object(n.useCallback)((function(e){e.preventDefault(),t.touch(),r.touch(),i.touch(),t.valid&&r.valid&&i.valid&&a(t.value,r.value)}),[a,t,r,i]);return l.a.createElement("form",{className:"RegistrationForm",method:"POST",onSubmit:c},l.a.createElement("div",{className:"RegistrationForm_username"},l.a.createElement(v,{id:"registration-username",invalid:t.error,label:"Username",name:"username",onBlur:t.touch,onChange:t.set,value:t.value},l.a.createElement(C,null,l.a.createElement(T,{valid:t.validation.min&&t.validation.max},"Usernames must be between 3 and 20 characters long.")),!t.validation.available&&l.a.createElement("p",null,"That username is not available."))),l.a.createElement("div",{className:"RegistrationForm_password"},l.a.createElement(m,{id:"registration-password",invalid:r.error,label:"Password",name:"password",onBlur:r.touch,onChange:r.set,value:r.value},l.a.createElement("p",null,"Passwords must:"),l.a.createElement(C,null,l.a.createElement(T,{valid:r.validation.uppercase},"include an uppercase letter"),l.a.createElement(T,{valid:r.validation.lowercase},"include a lowercase letter"),l.a.createElement(T,{valid:r.validation.numbers},"include a number"),l.a.createElement(T,{valid:r.validation.min},"be at least 8 characters long")))),l.a.createElement("div",{className:"RegistrationForm_confirmation"},l.a.createElement(m,{id:"registration-confirmation",invalid:i.error,label:"Confirm Password",name:"confirm",onBlur:i.touch,onChange:i.set,value:i.value},l.a.createElement(C,null,l.a.createElement(T,{valid:i.validation.matches},"Password and confirmation must match")))),l.a.createElement("div",{className:"RegistrationForm_submit"},l.a.createElement(d,null,"Register")))};i.a.render(l.a.createElement((function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(0),c=Object(o.a)(i,2),m=c[0],d=c[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),E=b[0],p=b[1],h=Object(n.useCallback)((function(e,a){"level"===e&&"Access123"===a?(p(""),r(e)):p("Your username or password was incorrect.")}),[]),g=Object(n.useCallback)((function(e,a){r(e)}),[]);return l.a.createElement(O,null,t?l.a.createElement(u,{username:t,onLogOut:function(){return r("")}}):l.a.createElement(s.e,{className:"Tabs",index:m,onChange:d},l.a.createElement(s.b,{className:"TabList"},l.a.createElement(s.a,{className:"Tab Tab-".concat(0===m?"active":"inactive")},"Log in"),l.a.createElement(s.a,{className:"Tab Tab-".concat(1===m?"active":"inactive")},"Register")),l.a.createElement(s.d,{className:"TabPanels"},l.a.createElement(s.c,{className:"TabPanel"},l.a.createElement("h1",null,"Log In"),l.a.createElement(N,{onSubmit:h},E&&l.a.createElement("p",null,E))),l.a.createElement(s.c,{className:"TabPanel"},l.a.createElement("h1",null,"Register"),l.a.createElement(F,{onSubmit:g})))))}),null),document.querySelector(".Root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a,t){e.exports=t(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.725e5e10.chunk.js.map