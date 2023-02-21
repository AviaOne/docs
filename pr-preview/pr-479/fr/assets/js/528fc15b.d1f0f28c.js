"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1001],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?l.createElement(f,i(i({ref:t},u),{},{components:r})):l.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4888:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var l=r(3117),n=(r(7294),r(3905));const o={sidebar_label:"Rollkit"},i="Rollkit",a={unversionedId:"developers/rollkit",id:"developers/rollkit",title:"Rollkit",description:"rollkit",source:"@site/docs/developers/rollkit.md",sourceDirName:"developers",slug:"/developers/rollkit",permalink:"/pr-preview/pr-479/fr/developers/rollkit",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollkit.md",tags:[],version:"current",frontMatter:{sidebar_label:"Rollkit"},sidebar:"developers",previous:{title:"Node API",permalink:"/pr-preview/pr-479/fr/developers/node-api"},next:{title:"Full stack modular blockchain development guide",permalink:"/pr-preview/pr-479/fr/developers/full-stack-modular-development-guide"}},s={},p=[{value:"Tutorials",id:"tutorials",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rollkit"},"Rollkit"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rollkit",src:r(2773).Z,width:"2500",height:"2825"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://rollkit.dev"},"Rollkit")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,n.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,n.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,n.kt)("p",null,"The goal of Rollkit is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,n.kt)("p",null,'Furthermore, while Rollkit allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollkit currently only supports\na single sequencer.'),(0,n.kt)("h2",{id:"tutorials"},"Tutorials"),(0,n.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollkit. We call those chains Sovereign Rollups."),(0,n.kt)("p",null,"You can get started with the following tutorials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/hello-world"},"Hello world")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/gm-world"},"GM world")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/recipe-book"},"Recipe book")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/wordle"},"Wordle game")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/cosmwasm"},"CosmWasm tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/ethermint"},"Ethermint tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-479/fr/developers/full-stack-modular-development-guide/"},"Full stack modular blockchain development guide"))))}c.isMDXComponent=!0},2773:function(e,t,r){t.Z=r.p+"assets/images/rollkit-a3c303985129391d591d82877628422a.png"}}]);