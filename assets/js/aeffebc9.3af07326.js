"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(r),g=a,h=c["".concat(p,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},28370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Genesis Restart Upgrades",sidebar_label:"Genesis Restart Upgrades",sidebar_position:3,slug:"/ibc/upgrades/genesis-restart"},s="Genesis Restart Upgrades",o={unversionedId:"ibc/upgrades/genesis-restart",id:"version-v6.2.x/ibc/upgrades/genesis-restart",title:"Genesis Restart Upgrades",description:"Learn how to upgrade your chain and counterparty clients using genesis restarts.",source:"@site/versioned_docs/version-v6.2.x/01-ibc/05-upgrades/03-genesis-restart.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/genesis-restart",permalink:"/v6/ibc/upgrades/genesis-restart",draft:!1,tags:[],version:"v6.2.x",sidebarPosition:3,frontMatter:{title:"Genesis Restart Upgrades",sidebar_label:"Genesis Restart Upgrades",sidebar_position:3,slug:"/ibc/upgrades/genesis-restart"},sidebar:"defaultSidebar",previous:{title:"IBC Client Developer Guide to Upgrades",permalink:"/v6/ibc/upgrades/developer-guide"},next:{title:"Governance Proposals",permalink:"/v6/ibc/proposals"}},p={},l=[{value:"IBC Client Breaking Upgrades",id:"ibc-client-breaking-upgrades",level:2},{value:"Step-by-Step Upgrade Process for SDK Chains",id:"step-by-step-upgrade-process-for-sdk-chains",level:3},{value:"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients",id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients",level:4},{value:"Non-IBC Client Breaking Upgrades",id:"non-ibc-client-breaking-upgrades",level:3}],d={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"genesis-restart-upgrades"},"Genesis Restart Upgrades"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn how to upgrade your chain and counterparty clients using genesis restarts. ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Regular genesis restarts are currently unsupported by relayers!"),(0,a.kt)("h2",{id:"ibc-client-breaking-upgrades"},"IBC Client Breaking Upgrades"),(0,a.kt)("p",null,"IBC client breaking upgrades are possible using genesis restarts.\nIt is highly recommended to use the in-place migrations instead of a genesis restart.\nGenesis restarts should be used sparingly and as backup plans. "),(0,a.kt)("p",null,"Genesis restarts still require the usage of an IBC upgrade proposal in order to correctly upgrade counterparty clients."),(0,a.kt)("h3",{id:"step-by-step-upgrade-process-for-sdk-chains"},"Step-by-Step Upgrade Process for SDK Chains"),(0,a.kt)("p",null,"If the IBC-connected chain is conducting an upgrade that will break counterparty clients, it must ensure that the upgrade is first supported by IBC using the ",(0,a.kt)("a",{parentName:"p",href:"/v6/ibc/upgrades/quick-guide#ibc-client-breaking-upgrades"},"IBC Client Breaking Upgrade List")," and then execute the upgrade process described below in order to prevent counterparty clients from breaking."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a 02-client ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/v6.2.0/proto/ibc/core/client/v1/client.proto#L58-L77"},(0,a.kt)("inlineCode",{parentName:"a"},"UpgradeProposal"))," with an ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradePlan")," and a new IBC ClientState in the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradedClientState")," field. Note that the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradePlan")," must specify an upgrade height ",(0,a.kt)("strong",{parentName:"li"},"only")," (no upgrade time), and the ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientState")," should only include the fields common to all valid clients and zero out any client-customizable fields (such as TrustingPeriod)."),(0,a.kt)("li",{parentName:"ol"},"Vote on and pass the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradeProposal")),(0,a.kt)("li",{parentName:"ol"},"Halt the node after successful upgrade. "),(0,a.kt)("li",{parentName:"ol"},"Export the genesis file."),(0,a.kt)("li",{parentName:"ol"},"Swap to the new binary."),(0,a.kt)("li",{parentName:"ol"},"Run migrations on the genesis file."),(0,a.kt)("li",{parentName:"ol"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"UpgradeProposal")," plan from the genesis file. This may be done by migrations."),(0,a.kt)("li",{parentName:"ol"},"Change desired chain-specific fields (chain id, unbonding period, etc). This may be done by migrations."),(0,a.kt)("li",{parentName:"ol"},"Reset the node's data."),(0,a.kt)("li",{parentName:"ol"},"Start the chain.")),(0,a.kt)("p",null,"Upon the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradeProposal")," passing, the upgrade module will commit the UpgradedClient under the key: ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedClient"),". On the block right before the upgrade height, the upgrade module will also commit an initial consensus state for the next chain under the key: ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade/UpgradedIBCState/{upgradeHeight}/upgradedConsState"),"."),(0,a.kt)("p",null,"Once the chain reaches the upgrade height and halts, a relayer can upgrade the counterparty clients to the last block of the old chain. They can then submit the proofs of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradedClient")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradedConsensusState")," against this last block and upgrade the counterparty client."),(0,a.kt)("h4",{id:"step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"},"Step-by-Step Upgrade Process for Relayers Upgrading Counterparty Clients"),(0,a.kt)("p",null,"These steps are identical to the regular ",(0,a.kt)("a",{parentName:"p",href:"/v6/ibc/upgrades/quick-guide#step-by-step-upgrade-process-for-relayers-upgrading-counterparty-clients"},"IBC client breaking upgrade process"),"."),(0,a.kt)("h3",{id:"non-ibc-client-breaking-upgrades"},"Non-IBC Client Breaking Upgrades"),(0,a.kt)("p",null,"While ibc-go supports genesis restarts which do not break IBC clients, relayers do not support this upgrade path.\nHere is a tracking issue on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/ibc-rs/issues/1152"},"Hermes"),".\nPlease do not attempt a regular genesis restarts unless you have a tool to update counterparty clients correctly."))}u.isMDXComponent=!0}}]);