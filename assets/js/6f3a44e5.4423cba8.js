"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"IBC Applications",sidebar_label:"IBC Applications",sidebar_position:1,slug:"/ibc/apps/apps"},i="IBC Applications",l={unversionedId:"ibc/apps/apps",id:"version-v7.3.x/ibc/apps/apps",title:"IBC Applications",description:"Learn how to build custom IBC application modules that enable packets to be sent to and received from other IBC-enabled chains.",source:"@site/versioned_docs/version-v7.3.x/01-ibc/03-apps/01-apps.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/apps",permalink:"/v7/ibc/apps/apps",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:1,frontMatter:{title:"IBC Applications",sidebar_label:"IBC Applications",sidebar_position:1,slug:"/ibc/apps/apps"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/v7/ibc/integration"},next:{title:"Implement `IBCModule` interface and callbacks",permalink:"/v7/ibc/apps/ibcmodule"}},p={},s=[{value:"Working example",id:"working-example",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ibc-applications"},"IBC Applications"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn how to build custom IBC application modules that enable packets to be sent to and received from other IBC-enabled chains. ")),(0,o.kt)("p",null,"This document serves as a guide for developers who want to write their own Inter-blockchain Communication Protocol (IBC) applications for custom use cases."),(0,o.kt)("p",null,"Due to the modular design of the IBC protocol, IBC application developers do not need to concern themselves with the low-level details of clients, connections, and proof verification. Nevertheless, an overview of these low-level concepts can be found in ",(0,o.kt)("a",{parentName:"p",href:"/v7/ibc/overview"},"the Overview section"),".\nThe document goes into detail on the abstraction layer most relevant for application developers (channels and ports), and describes how to define your own custom packets, ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCModule")," callbacks and more to make an application module IBC ready."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To have your module interact over IBC you must:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"IBCModule")," interface, i.e.:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"channel (opening) handshake callbacks"),(0,o.kt)("li",{parentName:"ul"},"channel closing handshake callbacks"),(0,o.kt)("li",{parentName:"ul"},"packet callbacks"))),(0,o.kt)("li",{parentName:"ul"},"bind to a port(s)"),(0,o.kt)("li",{parentName:"ul"},"add keeper methods"),(0,o.kt)("li",{parentName:"ul"},"define your own packet data and acknowledgement structs as well as how to encode/decode them"),(0,o.kt)("li",{parentName:"ul"},"add a route to the IBC router")),(0,o.kt)("p",null,"The following sections provide a more detailed explanation of how to write an IBC application\nmodule correctly corresponding to the listed steps."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"pre-requisites-readings"},"Pre-requisites Readings"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v7/ibc/overview"},"IBC Overview"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v7/ibc/integration"},"IBC default integration")))),(0,o.kt)("h2",{id:"working-example"},"Working example"),(0,o.kt)("p",null,"For a real working example of an IBC application, you can look through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ibc-transfer")," module\nwhich implements everything discussed in this section."),(0,o.kt)("p",null,"Here are the useful parts of the module to look at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/genesis.go"},"Binding to transfer\nport")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/relay.go"},"Sending transfer\npackets")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/ibc_module.go"},"Implementing IBC\ncallbacks")))}d.isMDXComponent=!0}}]);