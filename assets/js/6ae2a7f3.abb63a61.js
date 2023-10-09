/*! For license information please see 6ae2a7f3.abb63a61.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[119337],{801898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(824246),r=n(511151);const o={id:"software-catalog-overview",title:"Backstage Software Catalog",sidebar_label:"Overview",description:"The Backstage Software Catalog"},s=void 0,i={id:"features/software-catalog/software-catalog-overview",title:"Backstage Software Catalog",description:"The Backstage Software Catalog",source:"@site/../docs/features/software-catalog/index.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/",permalink:"/docs/features/software-catalog/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/index.md",tags:[],version:"current",frontMatter:{id:"software-catalog-overview",title:"Backstage Software Catalog",sidebar_label:"Overview",description:"The Backstage Software Catalog"},sidebar:"docs",previous:{title:"Debugging Backstage",permalink:"/docs/local-dev/debugging"},next:{title:"The Life of an Entity",permalink:"/docs/features/software-catalog/life-of-an-entity"}},c={},l=[{value:"What is a Software Catalog?",id:"what-is-a-software-catalog",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Adding components to the catalog",id:"adding-components-to-the-catalog",level:2},{value:"Manually register components",id:"manually-register-components",level:3},{value:"Creating new components through Backstage",id:"creating-new-components-through-backstage",level:3},{value:"Static catalog configuration",id:"static-catalog-configuration",level:3},{value:"Updating component metadata",id:"updating-component-metadata",level:3},{value:"Finding software in the catalog",id:"finding-software-in-the-catalog",level:2},{value:"Starring components",id:"starring-components",level:2},{value:"Integrated tooling through plugins",id:"integrated-tooling-through-plugins",level:2},{value:"Links",id:"links",level:2}];function u(e){const t=Object.assign({h2:"h2",p:"p",a:"a",img:"img",ol:"ol",li:"li",code:"code",h3:"h3",strong:"strong",pre:"pre",em:"em",ul:"ul"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-is-a-software-catalog",children:"What is a Software Catalog?"}),"\n",(0,a.jsxs)(t.p,{children:["The Backstage Software Catalog is a centralized system that keeps track of\nownership and metadata for all the software in your ecosystem (services,\nwebsites, libraries, data pipelines, etc). The catalog is built around the\nconcept of ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format",children:"metadata YAML files"})," stored together with the\ncode, which are then harvested and visualized in Backstage."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"software-catalog",src:n(476759).Z+"",width:"2354",height:"1427"})}),"\n",(0,a.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,a.jsx)(t.p,{children:"Backstage and the Backstage Software Catalog make it easy for one team to manage\n10 services \u2014 and makes it possible for your company to manage thousands of\nthem."}),"\n",(0,a.jsx)(t.p,{children:"More specifically, the Software Catalog enables two main use-cases:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Helping teams manage and maintain the software they own. Teams get a uniform\nview of all their software; services, libraries, websites, ML models \u2014 you\nname it, Backstage knows all about it."}),"\n",(0,a.jsx)(t.li,{children:"Makes all the software in your company, and who owns it, discoverable. No\nmore orphan software hiding in the dark corners of your software ecosystem."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(t.p,{children:["The Software Catalog is available to browse at ",(0,a.jsx)(t.code,{children:"/catalog"}),". If you've followed\n",(0,a.jsx)(t.a,{href:"../../getting-started",children:"Getting Started with Backstage"}),", you should be able to\nbrowse the catalog at ",(0,a.jsx)(t.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(790127).Z+"",width:"1552",height:"989"})}),"\n",(0,a.jsx)(t.h2,{id:"adding-components-to-the-catalog",children:"Adding components to the catalog"}),"\n",(0,a.jsxs)(t.p,{children:["The source of truth for the components in your software catalog are\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format",children:"metadata YAML files"})," stored in source control (GitHub,\nGitHub Enterprise, GitLab, ...)."]}),"\n",(0,a.jsx)(t.p,{children:"There are 3 ways to add components to the catalog:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Manually register components"}),"\n",(0,a.jsx)(t.li,{children:"Creating new components through Backstage"}),"\n",(0,a.jsxs)(t.li,{children:["Integrating with an ",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/external-integrations",children:"external source"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"manually-register-components",children:"Manually register components"}),"\n",(0,a.jsxs)(t.p,{children:["Users can register new components by going to ",(0,a.jsx)(t.code,{children:"/create"})," and clicking the\n",(0,a.jsx)(t.strong,{children:"REGISTER EXISTING COMPONENT"})," button:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(519290).Z+"",width:"1486",height:"484"})}),"\n",(0,a.jsx)(t.p,{children:"Backstage expects the full URL to the YAML in your source control. Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["More examples can be found\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(844157).Z+"",width:"1916",height:"741"})}),"\n",(0,a.jsx)(t.p,{children:"It is important to note that any kind of software can be registered in\nBackstage. Even if the software is not maintained by your company (SaaS\noffering, for example) it is still useful to create components for tracking\nownership."}),"\n",(0,a.jsx)(t.h3,{id:"creating-new-components-through-backstage",children:"Creating new components through Backstage"}),"\n",(0,a.jsxs)(t.p,{children:["All software created through the\n",(0,a.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Backstage Software Templates"})," are automatically\nregistered in the catalog."]}),"\n",(0,a.jsx)(t.h3,{id:"static-catalog-configuration",children:"Static catalog configuration"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to manually registering components, it is also possible to register\ncomponents through ",(0,a.jsx)(t.a,{href:"/docs/conf/",children:"static configuration"}),". For example, the\nabove example can be added using the following configuration:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["More information about catalog configuration can be found\n",(0,a.jsx)(t.a,{href:"/docs/features/software-catalog/configuration",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"updating-component-metadata",children:"Updating component metadata"}),"\n",(0,a.jsx)(t.p,{children:"Teams owning the components are responsible for maintaining the metadata about\nthem, and do so using their normal Git workflow."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(592923).Z+"",width:"713",height:"302"})}),"\n",(0,a.jsx)(t.p,{children:"Once the change has been merged, Backstage will automatically show the updated\nmetadata in the software catalog after a short while."}),"\n",(0,a.jsx)(t.h2,{id:"finding-software-in-the-catalog",children:"Finding software in the catalog"}),"\n",(0,a.jsxs)(t.p,{children:["By default the software catalog shows components owned by the team of the logged\nin user. But you can also switch to ",(0,a.jsx)(t.em,{children:"All"})," to see all the components across your\ncompany's software ecosystem. Basic inline ",(0,a.jsx)(t.em,{children:"search"})," and ",(0,a.jsx)(t.em,{children:"column filtering"})," makes\nit easy to browse a big set of components."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(161194).Z+"",width:"1243",height:"305"})}),"\n",(0,a.jsx)(t.h2,{id:"starring-components",children:"Starring components"}),"\n",(0,a.jsxs)(t.p,{children:["For easy and quick access to components you visit frequently, Backstage supports\n",(0,a.jsx)(t.em,{children:"starring"})," of components:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(509231).Z+"",width:"1243",height:"318"})}),"\n",(0,a.jsx)(t.h2,{id:"integrated-tooling-through-plugins",children:"Integrated tooling through plugins"}),"\n",(0,a.jsx)(t.p,{children:"The software catalog is a great way to organize the infrastructure tools you use\nto manage the software. This is how Backstage creates one developer portal for\nall your tools. Rather than asking teams to jump between different\ninfrastructure UIs (and incurring additional cognitive overhead each time they\nmake a context switch), most of these tools can be organized around the entities\nin the catalog."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://backstage.io/assets/images/tabs-abfdf72185d3ceb1d92c4237f7f78809.png",alt:"tools"})}),"\n",(0,a.jsxs)(t.p,{children:["The Backstage platform can be customized by incorporating\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins",children:"existing open source plugins"}),",\nor by ",(0,a.jsx)(t.a,{href:"/docs/plugins/",children:"building your own"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha",children:"[Blog post] Backstage Service Catalog released in alpha"})}),"\n"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},476759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/header-93351b4254863212ce2c149a2a5ea388.png"},592923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-edit-7e97cc18ec455a13a185cb295cd6e303.png"},519290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-register-1-6299a20af4f79a6bdd4a64d927f2ec29.png"},844157:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-register-2-f40631078ba9082e28a84d1cb301818e.png"},161194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-search-51a9aa0cdb9eb883d2bcf2451bc81362.png"},509231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bsc-starred-7c2f867de967e254b190aac28e55bd0b.png"},790127:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/software-catalog-home-c6be1611f7b84313d64f3156a9a8bb19.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var o,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))n.call(o,l)&&(i[l]=o[l]);if(t){s=t(o);for(var u=0;u<s.length;u++)a.call(o,s[u])&&(i[s[u]]=o[s[u]])}}return i}},371426:(e,t,n)=>{n(862525);var a=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,o={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var a=n(862525),r=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;r=f("react.element"),o=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),s=f("react.provider"),i=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function m(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||g}function y(){}function w(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=w.prototype=new y;b.constructor=w,a(b,m.prototype),b.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var a,o={},s=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:r,type:e,key:s,ref:i,props:o,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case o:c=!0}}if(c)return s=s(c=e),e=""===a?"."+C(c,0):a,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),O(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=a+C(i=e[l],l);c+=O(i,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=O(i=i.value,t,n,u=a+C(i,l++),s);else if("object"===i)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,n){if(null==e)return e;var a=[],r=0;return O(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function T(){var e=R.current;if(null===e)throw Error(h(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=m,t.PureComponent=w,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=a({},e.props),s=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=v.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:r,type:e.type,key:s,ref:i,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var a=n(667294);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),a.createElement(r.Provider,{value:i},t)}}}]);