"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,g=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={description:"Learn about the RPC methods for signing transactions in MetaMask.",sidebar_position:5},o="Signing methods",s={unversionedId:"concepts/signing-methods",id:"concepts/signing-methods",title:"Signing methods",description:"Learn about the RPC methods for signing transactions in MetaMask.",source:"@site/wallet/concepts/signing-methods.md",sourceDirName:"concepts",slug:"/concepts/signing-methods",permalink:"/fix-footer-wallet-how-to-link/wallet/concepts/signing-methods",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/signing-methods.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about the RPC methods for signing transactions in MetaMask.",sidebar_position:5},sidebar:"walletSidebar",previous:{title:"Convenience libraries",permalink:"/fix-footer-wallet-how-to-link/wallet/concepts/convenience-libraries"},next:{title:"Tutorials",permalink:"/fix-footer-wallet-how-to-link/wallet/tutorials"}},l={},p=[{value:"eth_signTypedData_v4",id:"eth_signtypeddata_v4",level:2},{value:"personal_sign",id:"personal_sign",level:2},{value:"Deprecated signing methods",id:"deprecated-signing-methods",level:2},{value:"eth_sign",id:"eth_sign",level:3},{value:"eth_signTypedData_v1 and eth_signTypedData_v3",id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3",level:3}],d={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing-methods"},"Signing methods"),(0,i.kt)("p",null,"This page describes the signing RPC methods in MetaMask.\nLearn how to ",(0,i.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/how-to/sign-data/"},"use the recommended signing methods"),"."),(0,i.kt)("h2",{id:"eth_signtypeddata_v4"},"eth_signTypedData_v4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signtypeddata_v4"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"\nis:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cheap to verify on chain."),(0,i.kt)("li",{parentName:"ul"},"Human-readable."),(0,i.kt)("li",{parentName:"ul"},"Protected against phishing signatures.")),(0,i.kt)("p",null,"If onchain verifiability cost is a high priority,\n",(0,i.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/how-to/sign-data/#use-eth_signtypeddata_v4"},"use ",(0,i.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."),(0,i.kt)("h2",{id:"personal_sign"},"personal_sign"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,i.kt)("inlineCode",{parentName:"a"},"personal_sign")),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Displays human-readable text when UTF-8 encoded, making it a popular choice for site logins\n(for example, ",(0,i.kt)("a",{parentName:"li",href:"/fix-footer-wallet-how-to-link/wallet/how-to/sign-data/siwe"},"Sign-In with Ethereum"),")."),(0,i.kt)("li",{parentName:"ul"},"Is protected against phishing signatures.")),(0,i.kt)("p",null,"The text prefix of ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign")," makes signatures expensive to verify on-chain.\nIf onchain verifiability cost is not a priority, you can\n",(0,i.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/how-to/sign-data/#use-personal_sign"},"use ",(0,i.kt)("inlineCode",{parentName:"a"},"personal_sign")),"."),(0,i.kt)("h2",{id:"deprecated-signing-methods"},"Deprecated signing methods"),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v1"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v3")," are deprecated.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign"),".")),(0,i.kt)("h3",{id:"eth_sign"},"eth_sign"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," allows signing an arbitrary hash, which means it can be used to sign transactions, or any other\ndata. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," is a dangerous phishing risk."),(0,i.kt)("p",null,"MetaMask disables ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," by default and does not recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," in production.\nSome applications (usually internal administrator panels) use ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," for ease of\nuse, or due to an inability to change the associated dapp.\nIf a wallet user must interact with a dapp that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," and accepts the risks,\nthe wallet user can re-enable ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," through advanced settings."),(0,i.kt)("h3",{id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3"},"eth_signTypedData_v1 and eth_signTypedData_v3"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData")," was introduced by ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),".\nThe EIP-712 specification changed several times resulting in multiple versions\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData"),"."),(0,i.kt)("p",null,"The earlier versions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v1")," \u2013 The same as ",(0,i.kt)("inlineCode",{parentName:"li"},"eth_signTypedData"),".\nRead the\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"},"introductory blog post to this method"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v3")," \u2013 A highly used version of the EIP-712 specification.\nRead the\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),".")),(0,i.kt)("p",null,"The missing ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," represents an intermediary design that the Cipher browser implemented."),(0,i.kt)("p",null,"All early versions of this method lack later security improvements.\nUse the latest version, ",(0,i.kt)("a",{parentName:"p",href:"#eth_signtypeddata_v4"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."))}c.isMDXComponent=!0}}]);