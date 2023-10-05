"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={description:"Unity SDK API reference",sidebar_position:2},o="Unity SDK API",s={unversionedId:"reference/sdk-unity-api",id:"reference/sdk-unity-api",title:"Unity SDK API",description:"Unity SDK API reference",source:"@site/wallet/reference/sdk-unity-api.md",sourceDirName:"reference",slug:"/reference/sdk-unity-api",permalink:"/fix-footer-wallet-how-to-link/wallet/reference/sdk-unity-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-unity-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Unity SDK API reference",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"JavaScript SDK options",permalink:"/fix-footer-wallet-how-to-link/wallet/reference/sdk-js-options"},next:{title:"Ethereum provider API",permalink:"/fix-footer-wallet-how-to-link/wallet/reference/provider-api"}},l={},c=[{value:"MetaMaskUnity",id:"metamaskunity",level:2},{value:"Instance",id:"instance",level:3},{value:"Initialize",id:"initialize",level:3},{value:"SaveSession",id:"savesession",level:3},{value:"LoadSession",id:"loadsession",level:3},{value:"MetaMaskWallet",id:"metamaskwallet",level:2},{value:"Connect",id:"connect",level:3},{value:"Disconnect",id:"disconnect",level:3},{value:"Request",id:"request",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unity-sdk-api"},"Unity SDK API"),(0,i.kt)("p",null,"The following is an overview of the API methods used in the ",(0,i.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/how-to/connect/set-up-sdk/gaming/unity"},"Unity SDK"),"."),(0,i.kt)("h2",{id:"metamaskunity"},"MetaMaskUnity"),(0,i.kt)("p",null,"This is a singleton class that you can use to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance, which is\nspecific to Unity."),(0,i.kt)("h3",{id:"instance"},"Instance"),(0,i.kt)("p",null,"This is the singleton instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity")," class that is lazy-loaded when you access it\nfor the first time."),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("p",null,"This method initializes the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaMaskWallet")," instance and makes it accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet")," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialize using default settings\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n")),(0,i.kt)("h3",{id:"savesession"},"SaveSession"),(0,i.kt)("p",null,"This method saves the current session to persistent storage.\nIt is useful when you want to save the session and restore it later.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."),(0,i.kt)("h3",{id:"loadsession"},"LoadSession"),(0,i.kt)("p",null,"This method loads the session from persistent storage.\nIt is useful when you want to restore the session after the application quits.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."),(0,i.kt)("h2",{id:"metamaskwallet"},"MetaMaskWallet"),(0,i.kt)("h3",{id:"connect"},"Connect"),(0,i.kt)("p",null,"This method connects to MetaMask.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connection screen appears in MetaMask Mobile where the user can\napprove the connection with your Unity game."),(0,i.kt)("h3",{id:"disconnect"},"Disconnect"),(0,i.kt)("p",null,"This method disconnects the user from the MetaMask session."),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("p",null,"This method sends a request to MetaMask.\nYou can use it to call any ",(0,i.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/reference/provider-api"},"provider API method"),"."))}d.isMDXComponent=!0}}]);