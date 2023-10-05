"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[872],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,c(c({ref:e},s),{},{components:n})):a.createElement(d,c({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[m]="string"==typeof t?t:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73806:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2},c="Contract factory",i={unversionedId:"how-to/interact-with-smart-contracts/unity/contract-factory",id:"how-to/interact-with-smart-contracts/unity/contract-factory",title:"Contract factory",description:"When interacting with smart contracts in Unity, the contract factory is responsible for",source:"@site/wallet/how-to/interact-with-smart-contracts/unity/contract-factory.md",sourceDirName:"how-to/interact-with-smart-contracts/unity",slug:"/how-to/interact-with-smart-contracts/unity/contract-factory",permalink:"/fix-footer-wallet-how-to-link/wallet/how-to/interact-with-smart-contracts/unity/contract-factory",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/interact-with-smart-contracts/unity/contract-factory.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Contract interface",permalink:"/fix-footer-wallet-how-to-link/wallet/how-to/interact-with-smart-contracts/unity/contract-interface"},next:{title:"Contract proxy class",permalink:"/fix-footer-wallet-how-to-link/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class"}},l={},p=[{value:"Contract factory types",id:"contract-factory-types",level:2},{value:"Impromptu contract factory",id:"impromptu-contract-factory",level:3},{value:"Backed type contract factory",id:"backed-type-contract-factory",level:3},{value:"Set the contract factory",id:"set-the-contract-factory",level:2}],s={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-factory"},"Contract factory"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/"},"interacting with smart contracts in Unity"),", the contract factory is responsible for\ncreating the ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/how-to/interact-with-smart-contracts/unity/contract-proxy-class"},"contract proxy class")," with the given\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/how-to/interact-with-smart-contracts/unity/contract-interface"},"contract interface")," type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,r.kt)("h2",{id:"contract-factory-types"},"Contract factory types"),(0,r.kt)("h3",{id:"impromptu-contract-factory"},"Impromptu contract factory"),(0,r.kt)("p",null,"The impromptu contract factory uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Impromptu")," library to return a new instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract"),"\nthat behaves likes the given interface type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),".\nSince the contract is a dynamic object, all method invocations to the returned object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\nare automatically routed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The impromptu contract factory is only supported on Mono or in a runtime that has the CLR.\nThe IL2CPP runtime does not support this factory.\nUse the backed type contract factory if you need a more concrete type.")),(0,r.kt)("h3",{id:"backed-type-contract-factory"},"Backed type contract factory"),(0,r.kt)("p",null,"The backed type contract factory uses a concrete ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," type that inherits the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class and\nthe given interface type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),".\nTo use this factory, the given interface must declare the class attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"BackedType"),"\nthat specifies which concrete ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," type must be used when creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," instance.\nThe declared ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," must inherit from the given interface type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[BackedType(typeof(ERC20Backing))]  \npublic interface ERC20 : IContract  \n{\n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    Task<BigInteger> Decimals();\n    \n    // TODO Define other interface methods\n}\n')),(0,r.kt)("p",null,"Inside the backed ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),", you must override all interface methods and either invoke custom logic or\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," class to automatically perform the correct logic based on the method data.\nYou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"var method = System.Reflection.MethodBase.GetCurrentMethod();")," to get the current\nmethod being invoked, and then you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"base.InvokeMethod(MethodInfo method, object[] args)")," to\ninvoke the correct logic for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class ERC20Backing : Contract, ERC20  \n{\n    public string Address  \n    {  \n       get => base.Address;  \n    }\n    \n    [EvmMethodInfo(Name = "decimals", View = true)]  \n    [return: EvmParameterInfo(Type = "uint8")]  \n    public Task<BigInteger> Decimals()  \n    {  \n       var method = System.Reflection.MethodBase.GetCurrentMethod();  \n       return (Task<BigInteger>) InvokeMethod(method, new object[] {  });  \n    }\n\n    // TODO Define other interface methods\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/wallet/#generate-contract-code"},"contract code generator")," automatically generates a backing\n",(0,r.kt)("inlineCode",{parentName:"p"},"class")," for each contract interface generated."),(0,r.kt)("p",null,"This contract factory is useful for when you need more concrete definitions of the contract\ninterface type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),".\nThis can be useful in runtimes where ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicObject")," are not available (IL2CPP)."),(0,r.kt)("h2",{id:"set-the-contract-factory"},"Set the contract factory"),(0,r.kt)("p",null,"To set the current contract factory, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract.ContractFactory"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Contract.ContractFactory = new BackedTypeContractFactory();\n")),(0,r.kt)("p",null,"You don't need to do this, unless you create a custom contract factory.\nWe recommend just using the default contract factories for each runtime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mono runtime - ",(0,r.kt)("a",{parentName:"li",href:"#impromptu-contract-factory"},"Impromptu contract factory")),(0,r.kt)("li",{parentName:"ul"},"IL2CPP runtime - ",(0,r.kt)("a",{parentName:"li",href:"#backed-type-contract-factory"},"Backed typed contract factory"))))}u.isMDXComponent=!0}}]);