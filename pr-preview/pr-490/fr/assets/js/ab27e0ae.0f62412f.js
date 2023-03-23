"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||k[p]||r;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(7462),a=n(7294),r=n(6010),o=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}function k(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=k(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,c]=m({queryString:n,groupId:l}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,u.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),g=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),k=e=>{const t=e.currentTarget,n=u.indexOf(t),l=c[n].value;l!==i&&(d(t),s(l))},p=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:k},o,{className:(0,r.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:l}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(f,(0,l.Z)({},e,t)),a.createElement(v,(0,l.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(y,(0,l.Z)({key:String(t)},e))}},464:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.1","node-latest-sha":"c958fd3b3921ca993489d88530e59fe7f337bf4d"})},8842:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.2","node-latest-sha":"eea18a72891af318fb26abb7264416b679ec2a16"})},578:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({golangNode:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6"})},8549:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"})},7245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>b});var l=n(7462),a=(n(7294),n(3905)),r=n(578),o=n(8549),i=n(464),s=n(8842),c=n(4866),u=n(5162);const d={sidebar_label:"Installing celestia-node"},k="celestia-node",p={unversionedId:"nodes/celestia-node",id:"nodes/celestia-node",title:"celestia-node",description:"This tutorial goes over building and installing celestia-node. This",source:"@site/docs/nodes/celestia-node.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-node",permalink:"/pr-preview/pr-490/fr/nodes/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing celestia-node"},sidebar:"nodes",previous:{title:"Setting up environment",permalink:"/pr-preview/pr-490/fr/nodes/environment"},next:{title:"Docker images",permalink:"/pr-preview/pr-490/fr/nodes/docker-images"}},m={},b=[{value:"Install celestia-node",id:"install-celestia-node",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Network selection",id:"network-selection",level:3},{value:"Resetting your config",id:"resetting-your-config",level:3},{value:"All nodes",id:"all-nodes",level:4},{value:"Example for blockspacerace",id:"example-for-blockspacerace",level:5},{value:"Clearing the data store",id:"clearing-the-data-store",level:3},{value:"Bridge and full nodes",id:"bridge-and-full-nodes",level:4},{value:"Light nodes",id:"light-nodes",level:4}],g={toc:b},h="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-node"},"celestia-node"),(0,a.kt)("p",null,"This tutorial goes over building and installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-490/fr/nodes/environment"},"here"),"."),(0,a.kt)("h2",{id:"install-celestia-node"},"Install celestia-node"),(0,a.kt)(c.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,a.kt)(c.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the blockspacerace testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the blockspacerace testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the blockspacerace testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the blockspacerace testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))))),(0,a.kt)(u.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)(c.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))))),(0,a.kt)(u.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)(c.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make build ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null))))))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"network-selection"},"Network selection"),(0,a.kt)("p",null,"Note: If you do not select a network, the default network will be 'Mocha'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node-type> init --p2p.network <network> \ncelestia <node-type> start --p2p.network <network> --core.ip <address> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching networks to reinitialize\nyour node via ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,a.kt)("h3",{id:"resetting-your-config"},"Resetting your config"),(0,a.kt)("h4",{id:"all-nodes"},"All nodes"),(0,a.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,a.kt)("p",null,"You can re-initialize your node's config with the following commands:"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Save your config so custom values are not lost.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, remove your config:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm ~./<path-to-node-store>/config.toml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Re-initialize the node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node-type> init --p2p.network <network>\n")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have saved any custom value, add them back to the config.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the node: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node-type> start --p2p.network <network>\n")))),(0,a.kt)("h5",{id:"example-for-blockspacerace"},"Example for blockspacerace"),(0,a.kt)("p",null,"Here's an example for blockspacerace with a light node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./celestia-light-blockspacerace-0/data\ncelestia light init --p2p.network blockspacerace\n")),(0,a.kt)("p",null,"Your output will look similar to below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'2022-11-01T22:23:19.581+0100    INFO    node    nodebuilder/init.go:20  Initializing Light Node Store over \'/Users/joshstein/.celestia-light-blockspacerace-0\'\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:51  Saving config   {"path": "/Users/joshstein/.celestia-light-blockspacerace-0/config.toml"}\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:52  Node Store initialized\n')),(0,a.kt)("p",null,"Then start your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network blockspacerace --core.ip <address> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,a.kt)("h3",{id:"clearing-the-data-store"},"Clearing the data store"),(0,a.kt)("h4",{id:"bridge-and-full-nodes"},"Bridge and full nodes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, remove the data store:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store>/data\nrm -rf ~./<path-to-node-store>/transients\nrm -rf ~./<path-to-node-store>/index\nrm -rf ~./<path-to-node-store>/blocks\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Re-initialize the node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node type> init --p2p.network <network>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the node: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node type> start --p2p.network <network>\n")))),(0,a.kt)("h4",{id:"light-nodes"},"Light nodes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, remove the data store:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store>/data\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Re-initialize the node:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network <network>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the node: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network <network>\n")))))}f.isMDXComponent=!0}}]);