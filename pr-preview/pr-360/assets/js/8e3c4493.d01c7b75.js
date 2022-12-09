"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3910],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const l={sidebar_label:"Rollmint"},i="Rollmint",a={unversionedId:"developers/rollmint",id:"developers/rollmint",title:"Rollmint",description:"rollmint",source:"@site/docs/developers/rollmint.md",sourceDirName:"developers",slug:"/developers/rollmint",permalink:"/pr-preview/pr-360/developers/rollmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollmint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Rollmint"},sidebar:"developers",previous:{title:"Node API",permalink:"/pr-preview/pr-360/developers/node-api"},next:{title:"gm world",permalink:"/pr-preview/pr-360/category/gm-world"}},s={},c=[{value:"Tutorials",id:"tutorials",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rollmint"},"Rollmint"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rollmint",src:n(6256).Z,width:"1280",height:"910"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/rollmint"},"Rollmint")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,o.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,o.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,o.kt)("p",null,"The goal of Rollmint is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,o.kt)("p",null,'Furthermore, while Rollmint allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollmint currently only supports\na single sequencer.'),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollmint. We call those chains Sovereign Rollups."),(0,o.kt)("p",null,"You can get started with the following tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-world"},"gm world")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./recipe-book"},"Recipe Book")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./wordle"},"Wordle Game")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./cosmwasm"},"CosmWasm Tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./ethermint"},"Ethermint Tutorial"))))}u.isMDXComponent=!0},6256:function(e,t,n){t.Z=n.p+"assets/images/rollmint-5be7479f6bad05fad502a38ad0f3c5c6.png"}}]);