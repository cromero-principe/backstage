/*! For license information please see 17c01e53.87551a28.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[320897],{149732:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>l});var n=t(824246),s=t(511151);const u={id:"plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters",title:"KubernetesClustersSupplier.getClusters()",description:"API reference for KubernetesClustersSupplier.getClusters()"},o=void 0,c={id:"reference/plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters",title:"KubernetesClustersSupplier.getClusters()",description:"API reference for KubernetesClustersSupplier.getClusters()",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters",title:"KubernetesClustersSupplier.getClusters()",description:"API reference for KubernetesClustersSupplier.getClusters()"}},i={},l=[];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:(0,n.jsx)(r.code,{children:"KubernetesClustersSupplier"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier.getclusters",children:(0,n.jsx)(r.code,{children:"getClusters"})})]}),"\n",(0,n.jsx)(r.p,{children:"Returns the cached list of clusters."}),"\n",(0,n.jsx)(r.p,{children:"Implementations _should_ cache the clusters and refresh them periodically, as getClusters is called whenever the list of clusters is needed."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getClusters(): Promise<ClusterDetails[]>;\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.clusterdetails",children:"ClusterDetails"}),"[]>"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var u,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var l in u=Object(arguments[i]))t.call(u,l)&&(c[l]=u[l]);if(r){o=r(u);for(var a=0;a<o.length;a++)n.call(u,o[a])&&(c[o[a]]=u[o[a]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),s=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;s=u("react.element"),r.Fragment=u("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,u={},l=null,a=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:a,props:u,_owner:o.current}}r.jsx=l,r.jsxs=l},541535:(e,r,t)=>{var n=t(862525),s=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var o=60109,c=60110,i=60112;r.Suspense=60113;var l=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;s=f("react.element"),u=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),o=f("react.provider"),c=f("react.context"),i=f("react.forward_ref"),r.Suspense=f("react.suspense"),l=f("react.memo"),a=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function g(){}function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=m.prototype=new g;v.constructor=m,n(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,u={},o=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(o=""+r.key),r)_.call(r,n)&&!j.hasOwnProperty(n)&&(u[n]=r[n]);var i=arguments.length-2;if(1===i)u.children=t;else if(1<i){for(var l=Array(i),a=0;a<i;a++)l[a]=arguments[a+2];u.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===u[n]&&(u[n]=i[n]);return{$$typeof:s,type:e,key:o,ref:c,props:u,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var w=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case s:case u:i=!0}}if(i)return o=o(i=e),e=""===n?"."+O(i,0):n,Array.isArray(o)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),x(o,r,t,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,r){return{$$typeof:s,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),r.push(o)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=n+O(c=e[l],l);i+=x(c,r,t,a,o)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(c=e.next()).done;)i+=x(c=c.value,r,t,a=n+O(c,l++),o);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,t){if(null==e)return e;var n=[],s=0;return x(e,n,"","",(function(e){return r.call(t,e,s++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},r.Component=b,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var u=n({},e.props),o=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=k.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in r)_.call(r,a)&&!j.hasOwnProperty(a)&&(u[a]=void 0===r[a]&&void 0!==l?l[a]:r[a])}var a=arguments.length-2;if(1===a)u.children=t;else if(1<a){l=Array(a);for(var f=0;f<a;f++)l[f]=arguments[f+2];u.children=l}return{$$typeof:s,type:e.type,key:o,ref:c,props:u,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>u});var n=t(667294);const s=n.createContext({});function u(e){const r=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:u(e),n.createElement(s.Provider,{value:c},r)}}}]);