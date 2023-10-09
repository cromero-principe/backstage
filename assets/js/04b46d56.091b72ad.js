/*! For license information please see 04b46d56.091b72ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[252145],{859444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const i={id:"core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()"},c=void 0,s={id:"reference/core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()",source:"@site/../docs/reference/core-plugin-api.useelementfilter.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.useelementfilter",permalink:"/docs/reference/core-plugin-api.useelementfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.useelementfilter.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()"}},a={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(t.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.useelementfilter",children:(0,n.jsx)(t.code,{children:"useElementFilter"})})]}),"\n",(0,n.jsxs)(t.p,{children:["useElementFilter is a utility that helps you narrow down and retrieve data from a React element tree, typically operating on the ",(0,n.jsx)(t.code,{children:"children"})," property passed in to a component."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function useElementFilter<T>(node: ReactNode, filterFn: (arg: ElementCollection) => T, dependencies?: any[]): T;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"node"}),(0,n.jsx)(t.td,{children:"ReactNode"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filterFn"}),(0,n.jsxs)(t.td,{children:["(arg: ",(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.elementcollection",children:"ElementCollection"}),") => T"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dependencies"}),(0,n.jsx)(t.td,{children:"any[]"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"(Optional)"})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"T"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["A common use-case is to construct declarative APIs where a React component defines its behavior based on its children, such as the relationship between ",(0,n.jsx)(t.code,{children:"Routes"})," and ",(0,n.jsx)(t.code,{children:"Route"})," in ",(0,n.jsx)(t.code,{children:"react-router"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The purpose of this hook is similar to ",(0,n.jsx)(t.code,{children:"React.Children.map"}),", and it expands upon it to also handle traversal of fragments and Backstage specific things like the ",(0,n.jsx)(t.code,{children:"FeatureFlagged"})," component."]}),"\n",(0,n.jsxs)(t.p,{children:["The return value of the hook is computed by the provided filter function, but with added memoization based on the input ",(0,n.jsx)(t.code,{children:"node"}),". If further memoization dependencies are used in the filter function, they should be added to the third ",(0,n.jsx)(t.code,{children:"dependencies"})," argument, just like ",(0,n.jsx)(t.code,{children:"useMemo"}),", ",(0,n.jsx)(t.code,{children:"useEffect"}),", etc."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in i=Object(arguments[a]))r.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var l=0;l<c.length;l++)n.call(i,c[l])&&(s[c[l]]=i[c[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:c.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,s=60110,a=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),c=f("react.provider"),s=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function j(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=m.prototype;var g=v.prototype=new j;g.constructor=v,n(g,m.prototype),g.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,i={},c=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,n)&&!_.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===n?"."+O(a,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),R(c,t,r,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),t.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+O(s=e[u],u);a+=R(s,t,r,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=R(s=s.value,t,r,l=n+O(s,u++),c);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function S(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var F={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var i=n({},e.props),c=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)x.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:c,ref:s,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:s},t)}}}]);