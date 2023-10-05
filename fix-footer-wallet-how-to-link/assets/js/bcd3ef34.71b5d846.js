"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[82],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={description:"Learn about the Snaps Keyring API.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},o="About the Keyring API",s={unversionedId:"concepts/keyring-api",id:"concepts/keyring-api",title:"About the Keyring API",description:"Learn about the Snaps Keyring API.",source:"@site/snaps/concepts/keyring-api.md",sourceDirName:"concepts",slug:"/concepts/keyring-api",permalink:"/fix-footer-wallet-how-to-link/snaps/concepts/keyring-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/keyring-api.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about the Snaps Keyring API.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Snaps design guidelines",permalink:"/fix-footer-wallet-how-to-link/snaps/concepts/design-guidelines"},next:{title:"Tutorials",permalink:"/fix-footer-wallet-how-to-link/snaps/tutorials"}},p={},l=[{value:"Terminology",id:"terminology",level:2},{value:"Components diagram",id:"components-diagram",level:2},{value:"Keyring interface",id:"keyring-interface",level:2},{value:"Snap account creation flow",id:"snap-account-creation-flow",level:3},{value:"Synchronous signing flow",id:"synchronous-signing-flow",level:3},{value:"Asynchronous signing flow",id:"asynchronous-signing-flow",level:3}],c={toc:l},h="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-the-keyring-api"},"About the Keyring API"),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"API documentation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/keyring-api/"},"Keyring API reference")," for all the Keyring API methods.")),(0,r.kt)("p",null,"The Snaps Keyring API integrates custom EVM accounts inside MetaMask.\nPreviously, you needed a companion dapp to display custom EVM accounts, such multi-party computation\n(MPC) accounts.\nNow you can display these custom accounts alongside regular MetaMask accounts in the UI:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(56517).Z,alt:"Keyring Snap accounts in Metamask UI",width:"360"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/tutorials/custom-evm-accounts"},"Create a Keyring Snap to integrate custom EVM accounts in MetaMask."),"\nYour dapp can then use the ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," MetaMask\nJSON-RPC API method to connect to the custom accounts, and seamlessly interact with them using other\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},"JSON-RPC methods"),"."),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("p",null,"The following terminology is used across the Keyring API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blockchain account"),": An object in a single blockchain, representing an account, with its\nbalance, nonce, and other account details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Request"),": A request from a dapp to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyring account"),": An account model that represents one or more blockchain accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyring Snap"),": A Snap that implements the Keyring API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keyring request"),": A request from MetaMask to a Keyring Snap.\nMetaMask wraps the original request sent by the dapp and adds some metadata to it.")),(0,r.kt)("h2",{id:"components-diagram"},"Components diagram"),(0,r.kt)("p",null,"The following diagram shows the components you encounter when interacting with accounts managed by a\nKeyring Snap:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keyring Snap component diagram",src:n(65521).Z,width:"500",height:"398"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User"),": The user interacting with the Snap, the dapp, and MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dapp"),": The dapp requesting an action to be performed on an account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MetaMask"),": The wallet the dapp connects to.\nMetaMask routes requests to the Keyring Snaps and lets the user perform some level of account management."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Snap"),": A Snap that implements the Keyring API to manage the user's accounts, and to handle\nrequests that use these accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Snap UI"),": The Snap's UI component that allows the user to interact with the Snap to perform\ncustom operations on accounts and requests.")),(0,r.kt)("h2",{id:"keyring-interface"},"Keyring interface"),(0,r.kt)("p",null,"The first step to create a Keyring Snap is to implement the\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/keyring-api/type-aliases/Keyring"},(0,r.kt)("inlineCode",{parentName:"a"},"Keyring"))," interface.\nThis interface describes all the methods necessary to make your custom EVM accounts work inside\nMetaMask with your own logic."),(0,r.kt)("p",null,"The following sections describe the different flows that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface handles."),(0,r.kt)("h3",{id:"snap-account-creation-flow"},"Snap account creation flow"),(0,r.kt)("p",null,"The first interaction between users and the Keyring Snap is the Snap account creation process.\nThe flow looks like the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keyring Snap account creation flow",src:n(36749).Z,width:"871",height:"695"})),(0,r.kt)("p",null,"The MetaMask account selection modal has an option called ",(0,r.kt)("strong",{parentName:"p"},"Add Snap account"),":"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(48061).Z,alt:"Add Snap account option",width:"360"})),(0,r.kt)("p",null,"This option shows a list of Keyring Snaps.\nEach Snap redirects the user to the companion dapp that contains all the UI to configure and manage the Snap."),(0,r.kt)("p",null,"The dapp presents a custom UI allowing the user to configure their custom EVM account.\nThe dapp uses the ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#createaccount"},(0,r.kt)("inlineCode",{parentName:"a"},"createAccount")),"\nmethod of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),", which calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface's method of the same name.\nYou can find an example of this in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/blob/d3f7f0156c59059c995fea87f90a3d0ad3a4c135/packages/site/src/pages/index.tsx#L136"},"example Keyring Snap companion dapp"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"createAccount")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface creates the account based on the parameters passed\nto the method.\nThe Snap keeps track of the accounts that it creates using ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/rpc-api#snap_managestate"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".\nOnce the Snap has created an account, it notifies MetaMask using the\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/rpc-api#createaccount"},(0,r.kt)("inlineCode",{parentName:"a"},"createAccount"))," sub-method of ",(0,r.kt)("inlineCode",{parentName:"p"},"snap_manageAccounts"),".\nYou can find an example of this process in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/blob/d3f7f0156c59059c995fea87f90a3d0ad3a4c135/packages/snap/src/keyring.ts#L61"},"example companion dapp"),"."),(0,r.kt)("p",null,"Once the Snap has created an account, that account can be used to sign messages and transactions."),(0,r.kt)("h3",{id:"synchronous-signing-flow"},"Synchronous signing flow"),(0,r.kt)("p",null,"If the Keyring Snap can sign transactions directly, it implements a simple synchronous signing flow.\nIf the Snap needs a third party such as a hardware key or a second account's signature (for example,\nin a threshold signature scheme), it implements an ",(0,r.kt)("a",{parentName:"p",href:"#asynchronous-signing-flow"},"asynchronous signing flow"),".\nThe synchronous flow looks like the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Synchronous signing flow",src:n(24991).Z,width:"2044",height:"1260"})),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring"},"example Keyring Snap companion dapp")," for a\nfull example."),(0,r.kt)("p",null,"The flow starts when a dapp calls a ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_subscribe"},"MetaMask JSON-RPC method"),", or\nwhen the user initiates a new funds transfer from the MetaMask UI.\nAt that point, MetaMask detects that this interaction is requested for an account controlled by the\nKeyring Snap."),(0,r.kt)("p",null,"After the user approves the transaction in the UI, MetaMask calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"submitRequest")," method of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface.\n",(0,r.kt)("inlineCode",{parentName:"p"},"submitRequest")," receives the original RPC request, and returns a\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/keyring-api/variables/SubmitRequestResponseStruct"},(0,r.kt)("inlineCode",{parentName:"a"},"SubmitRequestResponse")),"\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"pending")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," set to the requested signature."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the Keyring Snap receives an\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," request, it should treat it like an\n",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_signtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTransaction"))," request.\nThat is, the Snap is responsible for providing the signature in the response, and MetaMask is\nresponsible for broadcasting the transaction.")),(0,r.kt)("h3",{id:"asynchronous-signing-flow"},"Asynchronous signing flow"),(0,r.kt)("p",null,"If the Keyring Snap implements a complex scheme such as threshold signing, it implements an\nasynchronous signing flow with more ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," methods.\nThe asynchronous flow looks like the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Asynchronous signing flow",src:n(153).Z,width:"1822",height:"1512"})),(0,r.kt)("p",null,"The flow starts the same way as the ",(0,r.kt)("a",{parentName:"p",href:"#synchronous-signing-flow"},"synchronous flow"),": a dapp or user\ninitiates a request to sign a transaction or arbitrary data.\nAfter approval, the ",(0,r.kt)("inlineCode",{parentName:"p"},"submitRequest")," method of the Snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface is called."),(0,r.kt)("p",null,"Since the Snap doesn't answer the request directly, it stores the pending request in its internal\nstate using ",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/rpc-api#snap_managestate"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_manageState")),".\nThis list of pending requests is returned when the ",(0,r.kt)("inlineCode",{parentName:"p"},"listRequests")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getRequest")," methods of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface are called."),(0,r.kt)("p",null,"After storing the pending request, the Snap creates a pop-up using\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," instructing the user to go to the companion\ndapp's URL."),(0,r.kt)("p",null,"The dapp lists the Snap's pending requests using an RPC call facilitated by the\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#listrequests"},(0,r.kt)("inlineCode",{parentName:"a"},"listRequests")),"\nmethod of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),".\nThe user can then act on those requests using whatever process applies to the Snap."),(0,r.kt)("p",null,"Once the signing process completes, the companion dapp resolves the request using the\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#approverequest"},(0,r.kt)("inlineCode",{parentName:"a"},"approveRequest")),"\nmethod of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyringSnapRpcClient"),", which calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface's method of the same name.\nThis method receives the request's ID and final result."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"approveRequest")," is called, it can resolve the pending request by using the\n",(0,r.kt)("a",{parentName:"p",href:"/fix-footer-wallet-how-to-link/snaps/reference/rpc-api#submitresponse"},(0,r.kt)("inlineCode",{parentName:"a"},"submitResponse"))," sub-method of ",(0,r.kt)("inlineCode",{parentName:"p"},"snap_manageAccounts"),"."))}u.isMDXComponent=!0},56517:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accounts-ui-070dca33037f5063a08753cf792b8cb3.png"},48061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-snap-account-dc3f67405f09d799d958d9829dd2189d.png"},153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/asynchronous-flow-b1f803e0e7329c394f17910c67b9350d.png"},65521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/components-diagram-fe20de86d108f422853c9c00649d3f10.png"},36749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-account-flow-425c4feb8388212d3a55b843a40e5146.png"},24991:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/synchronous-flow-86d162f98ddac87d1fcfd21fed2d161d.png"}}]);