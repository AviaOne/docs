"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9645],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),x=s(r),d=a,f=x["".concat(c,".").concat(d)]||x[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=x;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},7543:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var n=r(3117),a=(r(7294),r(3905));const l={sidebar_label:"Creating A Wallet"},o="Wallet",i={unversionedId:"developers/wallet",id:"developers/wallet",title:"Wallet",description:"Create a Wallet",source:"@site/docs/developers/wallet.md",sourceDirName:"developers",slug:"/developers/wallet",permalink:"/pr-preview/pr-311/fr/developers/wallet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wallet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Creating A Wallet"},sidebar:"developers",previous:{title:"Installing Celestia App",permalink:"/pr-preview/pr-311/fr/developers/celestia-app"},next:{title:"Create A Celestia Testnet",permalink:"/pr-preview/pr-311/fr/developers/instantiate-testnet"}},c={},s=[{value:"Create a Wallet",id:"create-a-wallet",level:2},{value:"Fund a Wallet",id:"fund-a-wallet",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet"},"Wallet"),(0,a.kt)("h2",{id:"create-a-wallet"},"Create a Wallet"),(0,a.kt)("p",null,"First, create an application CLI configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,a.kt)("p",null,'You can pick whatever wallet name you want.\nFor our example we used "validator" as the wallet name:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys add validator\n")),(0,a.kt)("p",null,"Save the mnemonic output as this is the only way to\nrecover your validator wallet in case you lose it!"),(0,a.kt)("p",null,"To check all your wallets you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys list\n")),(0,a.kt)("h2",{id:"fund-a-wallet"},"Fund a Wallet"),(0,a.kt)("p",null,"For the public celestia address, you can fund the\npreviously created wallet via ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/celestiacommunity"},"Discord"),"\nby sending this message to #arabica-faucet channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$request celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,a.kt)("p",null,"Wait to see if you get a confirmation that the\ntokens have been successfully sent. To check if\ntokens have arrived successfully to the destination\nwallet run the command below replacing the public\naddress with your own:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\ncelestia-appd query bank balances celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")))}u.isMDXComponent=!0}}]);