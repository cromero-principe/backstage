/*! For license information please see abd42fe8.1c25c38b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[945392],{919332:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=r(824246),o=r(511151);const i={id:"backend-plugin-manager.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment"},a=void 0,c={id:"reference/backend-plugin-manager.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment",source:"@site/../docs/reference/backend-plugin-manager.legacypluginenvironment.md",sourceDirName:"reference",slug:"/reference/backend-plugin-manager.legacypluginenvironment",permalink:"/docs/reference/backend-plugin-manager.legacypluginenvironment",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-manager.legacypluginenvironment.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-manager.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment"}},u={},s=[];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager",children:(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-manager"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.legacypluginenvironment",children:(0,t.jsx)(n.code,{children:"LegacyPluginEnvironment"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(n.p,{children:"Support for the legacy backend system will be removed in the future."}),"\n",(0,t.jsx)(n.p,{children:"When adding a legacy plugin installer entrypoint in your plugin, you should always take the opportunity to also implement support for the new backend system if not already done."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type LegacyPluginEnvironment = {\n    logger: Logger;\n    cache: PluginCacheManager;\n    database: PluginDatabaseManager;\n    config: Config;\n    reader: UrlReader;\n    discovery: PluginEndpointDiscovery;\n    tokenManager: TokenManager;\n    permissions: PermissionEvaluator;\n    scheduler: PluginTaskScheduler;\n    identity: IdentityApi;\n    eventBroker: EventBroker;\n    pluginProvider: BackendPluginProvider;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-common.plugincachemanager",children:"PluginCacheManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.databaseservice",children:"PluginDatabaseManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReader"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"PluginEndpointDiscovery"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.tokenmanagerservice",children:"TokenManager"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-tasks.plugintaskscheduler",children:"PluginTaskScheduler"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.identityapi",children:"IdentityApi"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventbroker",children:"EventBroker"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backendpluginprovider",children:"BackendPluginProvider"})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(c[s]=i[s]);if(n){a=n(i);for(var l=0;l<a.length;l++)t.call(i,a[l])&&(c[a[l]]=i[a[l]])}}return c}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,i={},s=null,l=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!u.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:a.current}}n.jsx=s,n.jsxs=s},541535:(e,n,r)=>{var t=r(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,c=60110,u=60112;n.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),a=f("react.provider"),c=f("react.context"),u=f("react.forward_ref"),n.Suspense=f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||g}function m(){}function v(e,n,r){this.props=e,this.context=n,this.refs=y,this.updater=r||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var b=v.prototype=new m;b.constructor=v,t(b,h.prototype),b.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var t,i={},a=null,c=null;if(null!=n)for(t in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,t)&&!_.hasOwnProperty(t)&&(i[t]=n[t]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===i[t]&&(i[t]=u[t]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,r,t,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===t?"."+w(u,0):t,Array.isArray(a)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),O(a,n,r,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),n.push(a)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=t+w(c=e[s],s);u+=O(c,n,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)u+=O(c=c.value,n,r,l=t+w(c,s++),a);else if("object"===c)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function S(e,n,r){if(null==e)return e;var t=[],o=0;return O(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function C(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:S,forEach:function(e,n,r){S(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},n.Component=h,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error(d(267,e));var i=t({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,u=k.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)j.call(n,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===n[l]&&void 0!==s?s[l]:n[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=x,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return $().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,r){return $().useReducer(e,n,r)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>i});var t=r(667294);const o=t.createContext({});function i(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:i(e),t.createElement(o.Provider,{value:c},n)}}}]);