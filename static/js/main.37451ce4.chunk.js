(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r.n(a),l=(r(13),r(4)),s=r(1),c={value:"",isTouched:!1},i=function(e,t){return"INPUT"===t.type?{value:t.value,isTouched:e.isTouched}:"BLUR"===t.type?{isTouched:!0,value:e.value}:"RESET"===t.type?{value:"",isTouched:!1}:c},o=function(e){var t=Object(s.useReducer)(i,c),r=Object(l.a)(t,2),a=r[0],n=r[1],o=e(a.value),u=!o&&a.isTouched;return{value:a.value,isValid:o,hasError:u,valueChangeHandler:function(e){n({type:"INPUT",value:e.target.value})},inputBlurHandler:function(e){n({type:"BLUR"})},reset:function(){n({type:"RESET"})}}},u=r(0),d=function(e){return""!==e.trim()},j=function(e){return e.includes("@")},m=function(e){var t=o(d),r=t.value,a=t.isValid,n=t.hasError,l=t.valueChangeHandler,s=t.inputBlurHandler,c=t.reset,i=o(d),m=i.value,h=i.isValid,v=i.hasError,b=i.valueChangeHandler,p=i.inputBlurHandler,x=i.reset,f=o(j),O=f.value,g=f.isValid,N=f.hasError,y=f.valueChangeHandler,B=f.inputBlurHandler,E=f.reset,T=!1;a&&h&&g&&(T=!0);var H=n?"form-control invalid":"form-control",C=v?"form-control invalid":"form-control",R=N?"form-control invalid":"form-control";return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),T&&(console.log("Submitted!"),console.log(r,m,O),c(),x(),E())},children:[Object(u.jsxs)("div",{className:"control-group",children:[Object(u.jsxs)("div",{className:H,children:[Object(u.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(u.jsx)("input",{type:"text",id:"name",value:r,onChange:l,onBlur:s}),n&&Object(u.jsx)("p",{className:"error-text",children:"Please enter a first name."})]}),Object(u.jsxs)("div",{className:C,children:[Object(u.jsx)("label",{htmlFor:"name",children:"Last Name"}),Object(u.jsx)("input",{type:"text",id:"name",value:m,onChange:b,onBlur:p}),v&&Object(u.jsx)("p",{className:"error-text",children:"Please enter a last name."})]})]}),Object(u.jsxs)("div",{className:R,children:[Object(u.jsx)("label",{htmlFor:"name",children:"E-Mail Address"}),Object(u.jsx)("input",{type:"text",id:"name",value:O,onChange:y,onBlur:B}),N&&Object(u.jsx)("p",{className:"error-text",children:"Please enter a valid email address."})]}),Object(u.jsx)("div",{className:"form-actions",children:Object(u.jsx)("button",{disabled:!T,children:"Submit"})})]})};var h=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(m,{})})};n.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(h,{}))}},[[15,1,2]]]);
//# sourceMappingURL=main.37451ce4.chunk.js.map