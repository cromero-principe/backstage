/*! For license information please see 2767ebd6.02443e13.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[909243],{33072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=r(824246),o=r(511151);const c={id:"cli-node.backstagepackagejson.publishconfig",title:"BackstagePackageJson.publishConfig",description:"API reference for BackstagePackageJson.publishConfig"},a=void 0,i={id:"reference/cli-node.backstagepackagejson.publishconfig",title:"BackstagePackageJson.publishConfig",description:"API reference for BackstagePackageJson.publishConfig",source:"@site/../docs/reference/cli-node.backstagepackagejson.publishconfig.md",sourceDirName:"reference",slug:"/reference/cli-node.backstagepackagejson.publishconfig",permalink:"/docs/reference/cli-node.backstagepackagejson.publishconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/cli-node.backstagepackagejson.publishconfig.md",tags:[],version:"current",frontMatter:{id:"cli-node.backstagepackagejson.publishconfig",title:"BackstagePackageJson.publishConfig",description:"API reference for BackstagePackageJson.publishConfig"}},s={},u=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/cli-node",children:(0,n.jsx)(t.code,{children:"@backstage/cli-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/cli-node.backstagepackagejson",children:(0,n.jsx)(t.code,{children:"BackstagePackageJson"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/cli-node.backstagepackagejson.publishconfig",children:(0,n.jsx)(t.code,{children:"publishConfig"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"publishConfig?: {\n        access?: 'public' | 'restricted';\n        directory?: string;\n        registry?: string;\n        alphaTypes?: string;\n        betaTypes?: string;\n    };\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))r.call(c,u)&&(i[u]=c[u]);if(t){a=t(c);for(var f=0;f<a.length;f++)n.call(c,a[f])&&(i[a[f]]=c[a[f]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,c={},u=null,f=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:f,props:c,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,s=60112;t.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),a=l("react.provider"),i=l("react.context"),s=l("react.forward_ref"),t.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=v.prototype=new b;k.constructor=v,n(k,h.prototype),k.isPureReactComponent=!0;var m={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,c={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&!j.hasOwnProperty(n)&&(c[n]=t[n]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];c.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:m.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return a=a(s=e),e=""===n?"."+P(s,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+P(i=e[u],u);s+=S(i,t,r,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(i=e.next()).done;)s+=S(i=i.value,t,r,f=n+P(i,u++),a);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function x(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var c=n({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=m.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in t)_.call(t,f)&&!j.hasOwnProperty(f)&&(c[f]=void 0===t[f]&&void 0!==u?u[f]:t[f])}var f=arguments.length-2;if(1===f)c.children=r;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];c.children=u}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>c});var n=r(667294);const o=n.createContext({});function c(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:i},t)}}}]);