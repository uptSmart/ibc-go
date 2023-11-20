"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},s="Messages",o={unversionedId:"apps/transfer/messages",id:"version-v7.3.x/apps/transfer/messages",title:"Messages",description:"MsgTransfer",source:"@site/versioned_docs/version-v7.3.x/02-apps/01-transfer/04-messages.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/messages",permalink:"/v7/apps/transfer/messages",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:4,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},sidebar:"defaultSidebar",previous:{title:"State Transitions",permalink:"/v7/apps/transfer/state-transitions"},next:{title:"Events",permalink:"/v7/apps/transfer/events"}},l={},p=[{value:"<code>MsgTransfer</code>",id:"msgtransfer",level:2},{value:"Memo",id:"memo",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("h2",{id:"msgtransfer"},(0,a.kt)("inlineCode",{parentName:"h2"},"MsgTransfer")),(0,a.kt)("p",null,"A fungible token cross chain transfer is achieved by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTransfer"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type MsgTransfer struct {\n  SourcePort        string\n  SourceChannel     string\n  Token             sdk.Coin\n  Sender            string\n  Receiver          string\n  TimeoutHeight     ibcexported.Height\n  TimeoutTimestamp  uint64\n  Memo              string\n}\n")),(0,a.kt)("p",null,"This message is expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SourcePort")," is invalid (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SourceChannel")," is invalid (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Token")," is invalid (denom is invalid or amount is negative)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Token.Amount")," is not positive."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Token.Denom")," is not a valid IBC denomination as per ",(0,a.kt)("a",{parentName:"li",href:"/architecture/adr-001-coin-source-tracing"},"ADR 001 - Coin Source Tracing"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Sender")," is empty."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Receiver")," is empty."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TimeoutHeight")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"TimeoutTimestamp")," are both zero.")),(0,a.kt)("p",null,"This message will send a fungible token to the counterparty chain represented by the counterparty Channel End connected to the Channel End with the identifiers ",(0,a.kt)("inlineCode",{parentName:"p"},"SourcePort")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SourceChannel"),"."),(0,a.kt)("p",null,"The denomination provided for transfer should correspond to the same denomination represented on this chain. The prefixes will be added as necessary upon by the receiving chain."),(0,a.kt)("h3",{id:"memo"},"Memo"),(0,a.kt)("p",null,"The memo field was added to allow applications and users to attach metadata to transfer packets. The field is optional and may be left empty. When it is used to attach metadata for a particular middleware, the memo field should be represented as a json object where different middlewares use different json keys."),(0,a.kt)("p",null,"For example, the following memo field is used by the ",(0,a.kt)("a",{parentName:"p",href:"/v7/middleware/callbacks/overview"},"callbacks middleware")," to attach a source callback to a transfer packet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n')),(0,a.kt)("p",null,"You can find more information about other applications that use the memo field in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry/blob/master/_memo_keys/ICS20_memo_keys.json"},"chain registry"),"."))}d.isMDXComponent=!0}}]);