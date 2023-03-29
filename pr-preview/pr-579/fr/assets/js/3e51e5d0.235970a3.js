"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a="Deploy a bridge node",l={unversionedId:"nodes/itn-deploy-bridge",id:"nodes/itn-deploy-bridge",title:"Deploy a bridge node",description:"Description",source:"@site/docs/nodes/itn-deploy-bridge.md",sourceDirName:"nodes",slug:"/nodes/itn-deploy-bridge",permalink:"/pr-preview/pr-579/fr/nodes/itn-deploy-bridge",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-deploy-bridge.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-a-bridge-node"},"Deploy a bridge node"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Deploy a Celestia Bridge Node and Perform Data Availability\nSampling (DAS)."),(0,o.kt)("p",null,"You can find resources on doing this by following the\ntutorial ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/bridge-node"},"here"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial#submit-a-pfd-transaction"},"here"),"."),(0,o.kt)("p",null,"For an RPC endpoint, you as a Bridge Node Operator must run your own\nConsensus Full Node and connect your Bridge Node to it."),(0,o.kt)("p",null,"The docs for that are found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/consensus-full-node"},"here"),"."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup Your Celestia Bridge Node"),(0,o.kt)("li",{parentName:"ol"},"How to find your bridge node id is found\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/developers/node-gateway-docs/#post-p2pinfo"},"here")),(0,o.kt)("li",{parentName:"ol"},"Make sure that the wallet address the node uses is funded"),(0,o.kt)("li",{parentName:"ol"},"The keys directory under ",(0,o.kt)("inlineCode",{parentName:"li"},".celestia-bridge-blockspacerace-0/keys"),"\ncontains your ",(0,o.kt)("inlineCode",{parentName:"li"},"pubkey")," for both DA and Tendermint networks. In\nthe leaderboard your pubkey for DA nodes looks similar to this\n",(0,o.kt)("inlineCode",{parentName:"li"},"12D3KooWSJoAF9pF7AkyEAhQCtNF9TA8JrAujWdqoPJ11uojuKZb"))),(0,o.kt)("p",null,"Please do a backup of the keys directory in order to not lose your progress."),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points for submitting node ID and wallet address."),(0,o.kt)("li",{parentName:"ol"},"No points for not submitting both.")),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"Please submit your Bridge Node ID and wallet address."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"celestia1vsvx8n7f8dh5udesqqhgrjutyun7zqrgehdq2l")))}c.isMDXComponent=!0}}]);