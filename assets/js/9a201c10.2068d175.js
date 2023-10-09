/*! For license information please see 9a201c10.2068d175.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[403285],{790098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(824246),s=t(511151);const o={id:"plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",title:"AwsSqsConsumingEventPublisher",description:"API reference for AwsSqsConsumingEventPublisher"},u=void 0,i={id:"reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",title:"AwsSqsConsumingEventPublisher",description:"API reference for AwsSqsConsumingEventPublisher",source:"@site/../docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",permalink:"/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",title:"AwsSqsConsumingEventPublisher",description:"API reference for AwsSqsConsumingEventPublisher"}},c={},a=[{value:"Methods",id:"methods",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-events-backend-module-aws-sqs"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",children:(0,r.jsx)(n.code,{children:"AwsSqsConsumingEventPublisher"})})]}),"\n",(0,r.jsx)(n.p,{children:"Publishes events received from an AWS SQS queue. The message payload will be used as event payload and passed to registered subscribers."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class AwsSqsConsumingEventPublisher implements EventPublisher \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Implements:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventpublisher",children:"EventPublisher"})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Modifiers"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",children:"fromConfig(env)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"static"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.seteventbroker",children:"setEventBroker(eventBroker)"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var o,u,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in o=Object(arguments[c]))t.call(o,a)&&(i[a]=o[a]);if(n){u=n(o);for(var l=0;l<u.length;l++)r.call(o,u[l])&&(i[u[l]]=o[u[l]])}}return i}},371426:(e,n,t)=>{t(862525);var r=t(827378),s=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;s=o("react.element"),n.Fragment=o("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,o={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:u.current}}n.jsx=a,n.jsxs=a},541535:(e,n,t)=>{var r=t(862525),s=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var u=60109,i=60110,c=60112;n.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;s=f("react.element"),o=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),u=f("react.provider"),i=f("react.context"),c=f("react.forward_ref"),n.Suspense=f("react.suspense"),a=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function y(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||h}function m(){}function b(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var g=b.prototype=new m;g.constructor=b,r(g,y.prototype),g.isPureReactComponent=!0;var j={current:null},w=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},u=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(u=""+n.key),n)w.call(n,r)&&!_.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:s,type:e,key:u,ref:i,props:o,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var S=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function q(e,n,t,r,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case s:case o:c=!0}}if(c)return u=u(c=e),e=""===r?"."+E(c,0):r,Array.isArray(u)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),q(u,n,t,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,n){return{$$typeof:s,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(S,"$&/")+"/")+e)),n.push(u)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=r+E(i=e[a],a);c+=q(i,n,t,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)c+=q(i=i.value,n,t,l=r+E(i,a++),u);else if("object"===i)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function C(e,n,t){if(null==e)return e;var r=[],s=0;return q(e,r,"","",(function(e){return n.call(t,e,s++)})),r}function O(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(p(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},n.Component=y,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var o=r({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,c=j.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)w.call(n,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==a?a[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:s,type:e.type,key:u,ref:i,props:o,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=x,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:a,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>o});var r=t(667294);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||u:o(e),r.createElement(s.Provider,{value:i},n)}}}]);