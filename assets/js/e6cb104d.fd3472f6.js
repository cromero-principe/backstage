/*! For license information please see e6cb104d.fd3472f6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[83431],{218534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(824246),o=t(511151);const i={id:"plugin-auth-backend.signininfo",title:"SignInInfo",description:"API reference for SignInInfo"},u=void 0,c={id:"reference/plugin-auth-backend.signininfo",title:"SignInInfo",description:"API reference for SignInInfo",source:"@site/../docs/reference/plugin-auth-backend.signininfo.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.signininfo",permalink:"/docs/reference/plugin-auth-backend.signininfo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.signininfo.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.signininfo",title:"SignInInfo",description:"API reference for SignInInfo"}},a={},s=[];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.signininfo",children:(0,r.jsx)(n.code,{children:"SignInInfo"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(n.p,{children:["import from ",(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type SignInInfo<TAuthResult> = _SignInInfo<TAuthResult>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.signininfo",children:"_SignInInfo"})]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var s in i=Object(arguments[a]))t.call(i,s)&&(c[s]=i[s]);if(n){u=n(i);for(var f=0;f<u.length;f++)r.call(i,u[f])&&(c[u[f]]=i[u[f]])}}return c}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,i={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:i,_owner:u.current}}n.jsx=s,n.jsxs=s},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var u=60109,c=60110,a=60112;n.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),u=l("react.provider"),c=l("react.context"),a=l("react.forward_ref"),n.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function b(){}function m(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=m.prototype=new b;v.constructor=m,r(v,g.prototype),v.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var r,i={},u=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(u=""+n.key),n)j.call(n,r)&&!k.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function x(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function I(e,n,t,r,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return u=u(a=e),e=""===r?"."+x(a,0):r,Array.isArray(u)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),I(u,n,t,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),n.push(u)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=r+x(c=e[s],s);a+=I(c,n,t,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)a+=I(c=c.value,n,t,f=r+x(c,s++),u);else if("object"===c)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function C(e,n,t){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},n.Component=g,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var i=r({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=_.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in n)j.call(n,f)&&!k.hasOwnProperty(f)&&(i[f]=void 0===n[f]&&void 0!==s?s[f]:n[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];i.children=s}return{$$typeof:o,type:e.type,key:u,ref:c,props:i,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||u:i(e),r.createElement(o.Provider,{value:c},n)}}}]);