!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),d={width:{2:"g-inputBlock-input--width-2",3:"g-inputBlock-input--width-3",4:"g-inputBlock-input--width-4",5:"g-inputBlock-input--width-5",10:"g-inputBlock-input--width-10",20:"g-inputBlock-input--width-20",30:"g-inputBlock-input--width-30"},type:{Button:"button",Checkbox:"checkbox",Color:"color",Date:"date","DateTime: Local":"datetime-local",Email:"email",File:"file",Hidden:"hidden",Image:"image",Month:"month",Number:"number",Password:"password",Radio:"radio",Range:"range",Reset:"reset",Search:"search",Submit:"submit",Telephone:"tel",Text:"text",Time:"time",URL:"url",Week:"week"},autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},l=function(e){var t=e.hasError,n=e.inputId,r=e.label,i=e.hintId,o=e.hint,l=e.errorId,c=e.error,u=e.width,m=e.name,s=e.disabled,p=e.readOnly,h=e.autoFocus,y=e.value,f=e.type,g=e.spellCheck,b=e.autoComplete,v=e.onChange;return a.createElement("div",{className:"g-inputBlock-form-group".concat(t?" g-inputBlock-form-group--error":"")},a.createElement("label",{className:"g-inputBlock-label",htmlFor:n},void 0!==r?r:a.createElement(a.Fragment,null,"Example text")),a.createElement("div",{className:"g-inputBlock-hint",id:i},void 0!==o?o:a.createElement(a.Fragment,null,"Example text")),void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-inputBlock-error-message",id:l},a.createElement("span",{className:"g-inputBlock-visually-hidden"},"Error: "),void 0!==c?c:a.createElement(a.Fragment,null,"Example text"))):"",a.createElement("input",{"aria-describedby":void 0!==i||void 0!==l?"".concat(i||"").concat(l?" "+l:""):void 0,className:"g-inputBlock-input".concat(void 0!==d.width[u]?" "+d.width[u]:"").concat(t?" g-inputBlock-input--error":""),id:n,name:m,type:d.type[f],disabled:s,readOnly:p,autoFocus:h,value:y,spellCheck:g,autoComplete:d.autoComplete[b],onChange:v}))};function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},m=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},s=function(e){return r.a.createElement(m,{},r.a.createElement(u,{},r.a.createElement(l,c({},{},{width:"30",label:"30 character width",hint:"Fits a short sentence answer or a long address line.",name:"anyNameWidth30",inputId:"anyId3",hintId:"anyHintId3"}))),r.a.createElement(u,{},r.a.createElement(l,c({},{},{type:"Email",width:"20",label:"20 character width",hint:"Fits an email address.",name:"anyNameWidth20",inputId:"anyId4",hintId:"anyHintId4"}))),r.a.createElement(u,{},r.a.createElement(l,c({},{},{width:"10",label:"10 character width",hint:"Fits a name.",name:"anyNameWidth10",inputId:"anyId5",hintId:"anyHintId5"}))),r.a.createElement(u,{},r.a.createElement(l,c({},{},{width:"5",label:"5 character width",hint:"Fits a post code.",name:"anyNameWidth5",inputId:"anyId6",hintId:"anyHintId6"}))),r.a.createElement(u,{},r.a.createElement(l,c({},{},{width:"4",label:"4 character width",hint:"Fits a 4-digit group of a credit card number.",name:"anyNameWidth4",inputId:"anyId7",hintId:"anyHintId7"}))),r.a.createElement(u,{},r.a.createElement(l,c({},{},{width:"3",label:"3 character width",hint:"Fits a prefix for a mobile number.",name:"anyNameWidth3",inputId:"anyId8",hintId:"anyHintId8"}))),r.a.createElement(u,{},r.a.createElement(l,c({},{},{width:"2",label:"2 character width",hint:"Fits the 2-digit part of a bank account number.",name:"anyNameWidth2",inputId:"anyId9",hintId:"anyHintId9"}))))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.render(r.a.createElement(s,null),e):console.error("Couldn't find app mount point ","#root")})}]);