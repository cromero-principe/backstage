/*! For license information please see ce665d95.9671f73f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[737641],{521779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(824246),o=t(511151);const c={id:"core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons"},a=void 0,i={id:"reference/core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons",source:"@site/../docs/reference/core-app-api.appicons.md",sourceDirName:"reference",slug:"/reference/core-app-api.appicons",permalink:"/docs/reference/core-app-api.appicons",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.appicons.md",tags:[],version:"current",frontMatter:{id:"core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons"}},u={},s=[];function p(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-app-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api.appicons",children:(0,r.jsx)(n.code,{children:"AppIcons"})})]}),"\n",(0,r.jsx)(n.p,{children:"A set of well-known icons that should be available within an app."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type AppIcons = {\n    'kind:api': IconComponent;\n    'kind:component': IconComponent;\n    'kind:domain': IconComponent;\n    'kind:group': IconComponent;\n    'kind:location': IconComponent;\n    'kind:system': IconComponent;\n    'kind:user': IconComponent;\n    'kind:resource': IconComponent;\n    'kind:template': IconComponent;\n    brokenImage: IconComponent;\n    catalog: IconComponent;\n    chat: IconComponent;\n    dashboard: IconComponent;\n    docs: IconComponent;\n    email: IconComponent;\n    github: IconComponent;\n    group: IconComponent;\n    help: IconComponent;\n    scaffolder: IconComponent;\n    search: IconComponent;\n    techdocs: IconComponent;\n    user: IconComponent;\n    warning: IconComponent;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.iconcomponent",children:"IconComponent"})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))t.call(c,s)&&(i[s]=c[s]);if(n){a=n(c);for(var p=0;p<a.length;p++)r.call(c,a[p])&&(i[a[p]]=c[a[p]])}}return i}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,c={},s=null,p=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:p,props:c,_owner:a.current}}n.jsx=s,n.jsxs=s},541535:(e,n,t)=>{var r=t(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,i=60110,u=60112;n.Suspense=60113;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),a=f("react.provider"),i=f("react.context"),u=f("react.forward_ref"),n.Suspense=f("react.suspense"),s=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function v(){}function _(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=_.prototype=new v;b.constructor=_,r(b,h.prototype),b.isPureReactComponent=!0;var g={current:null},C=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,c={},a=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(a=""+n.key),n)C.call(n,r)&&!j.hasOwnProperty(r)&&(c[r]=n[r]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];c.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:g.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function x(e,n,t,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return a=a(u=e),e=""===r?"."+O(u,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),x(a,n,t,"",(function(e){return e}))):null!=a&&(I(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),n.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=r+O(i=e[s],s);u+=x(i,n,t,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(i=e.next()).done;)u+=x(i=i.value,n,t,p=r+O(i,s++),a);else if("object"===i)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function S(e,n,t){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:S,forEach:function(e,n,t){S(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error(d(143));return e}},n.Component=h,n.PureComponent=_,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var c=r({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=g.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(p in n)C.call(n,p)&&!j.hasOwnProperty(p)&&(c[p]=void 0===n[p]&&void 0!==s?s[p]:n[p])}var p=arguments.length-2;if(1===p)c.children=t;else if(1<p){s=Array(p);for(var f=0;f<p;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=I,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:c(e),r.createElement(o.Provider,{value:i},n)}}}]);