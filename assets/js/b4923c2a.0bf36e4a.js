/*! For license information please see b4923c2a.0bf36e4a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[867424],{723917:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"plugin-bitbucket-cloud-common.models.basecommitsummary.raw",title:"Models.BaseCommitSummary.raw",description:"API reference for Models.BaseCommitSummary.raw"},u=void 0,a={id:"reference/plugin-bitbucket-cloud-common.models.basecommitsummary.raw",title:"Models.BaseCommitSummary.raw",description:"API reference for Models.BaseCommitSummary.raw",source:"@site/../docs/reference/plugin-bitbucket-cloud-common.models.basecommitsummary.raw.md",sourceDirName:"reference",slug:"/reference/plugin-bitbucket-cloud-common.models.basecommitsummary.raw",permalink:"/docs/reference/plugin-bitbucket-cloud-common.models.basecommitsummary.raw",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-bitbucket-cloud-common.models.basecommitsummary.raw.md",tags:[],version:"current",frontMatter:{id:"plugin-bitbucket-cloud-common.models.basecommitsummary.raw",title:"Models.BaseCommitSummary.raw",description:"API reference for Models.BaseCommitSummary.raw"}},i={},s=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-bitbucket-cloud-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models",children:(0,n.jsx)(r.code,{children:"Models"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.basecommitsummary",children:(0,n.jsx)(r.code,{children:"BaseCommitSummary"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-bitbucket-cloud-common.models.basecommitsummary.raw",children:(0,n.jsx)(r.code,{children:"raw"})})]}),"\n",(0,n.jsx)(r.p,{children:"The text as it was typed by a user."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"raw?: string;\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in c=Object(arguments[i]))t.call(c,s)&&(a[s]=c[s]);if(r){u=r(c);for(var l=0;l<u.length;l++)n.call(c,u[l])&&(a[u[l]]=c[u[l]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:u.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,a=60110,i=60112;r.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),u=f("react.provider"),a=f("react.context"),i=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||d}function h(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=v.prototype=new h;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var _={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,c={},u=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)w.call(r,n)&&!j.hasOwnProperty(n)&&(c[n]=r[n]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:u,ref:a,props:c,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return u=u(i=e),e=""===n?"."+C(i,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),x(u,r,t,"",(function(e){return e}))):null!=u&&(S(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),r.push(u)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+C(a=e[s],s);i+=x(a,r,t,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)i+=x(a=a.value,r,t,l=n+C(a,s++),u);else if("object"===a)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(m(321));return e}var M={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(m(143));return e}},r.Component=b,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var c=n({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=_.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)w.call(r,l)&&!j.hasOwnProperty(l)&&(c[l]=void 0===r[l]&&void 0!==s?s[l]:r[l])}var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:u,ref:a,props:c,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:a},r)}}}]);