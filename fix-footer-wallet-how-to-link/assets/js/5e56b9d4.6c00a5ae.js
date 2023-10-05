"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={description:"Register a contract's method names with users.",sidebar_position:2},s="Display a contract's method names",i={unversionedId:"how-to/display/method-names",id:"how-to/display/method-names",title:"Display a contract's method names",description:"Register a contract's method names with users.",source:"@site/wallet/how-to/display/method-names.md",sourceDirName:"how-to/display",slug:"/how-to/display/method-names",permalink:"/fix-footer-wallet-how-to-link/wallet/how-to/display/method-names",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/method-names.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Register a contract's method names with users.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Display tokens",permalink:"/fix-footer-wallet-how-to-link/wallet/how-to/display/tokens"},next:{title:"Display a dapp icon",permalink:"/fix-footer-wallet-how-to-link/wallet/how-to/display/icon"}},l={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display-a-contracts-method-names"},"Display a contract's method names"),(0,a.kt)("p",null,"MetaMask uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.4byte.directory/"},"Ethereum Signature Database")," to display\nmethod names on the confirmation screen.\nFor many common method names, such as token methods, this allows MetaMask to look up the method\nnames by their ",(0,a.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"method signature"),".\nHowever, sometimes you're using a method that isn't in that database, and MetaMask simply\ndisplays ",(0,a.kt)("strong",{parentName:"p"},"Contract Interaction")," to the user."),(0,a.kt)("p",null,"To register your contract's method names so they show in the MetaMask interface,\n",(0,a.kt)("a",{parentName:"p",href:"https://www.4byte.directory/submit/"},"submit each method's signature to the Ethereum Signature Database"),"."))}d.isMDXComponent=!0}}]);