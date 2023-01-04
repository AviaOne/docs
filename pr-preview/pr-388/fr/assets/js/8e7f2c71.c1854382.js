"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3129],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),o=n(4334),l=n(2389),c=n(7392),i=n(7094),s=n(2466),m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:d,groupId:h,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,c.l)(w,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!w.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[N,C]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=g[h];null!=e&&e!==N&&w.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=w[n].value;r!==N&&(O(t),C(r),null!=h&&k(h,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},w.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},1138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const c={sidebar_label:"Contract Deployment"},i="Contract Deployment on CosmWasm with Rollmint",s={unversionedId:"developers/cosmwasm-contract-deployment",id:"developers/cosmwasm-contract-deployment",title:"Contract Deployment on CosmWasm with Rollmint",description:"Compile the Smart Contract",source:"@site/docs/developers/cosmwasm-contract-deployment.mdx",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-deployment",permalink:"/pr-preview/pr-388/fr/developers/cosmwasm-contract-deployment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-deployment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Contract Deployment"},sidebar:"developers",previous:{title:"Setup Network Environment",permalink:"/pr-preview/pr-388/fr/developers/cosmwasm-environment"},next:{title:"Contract Interaction",permalink:"/pr-preview/pr-388/fr/developers/cosmwasm-contract-interaction"}},m={},u=[{value:"Compile the Smart Contract",id:"compile-the-smart-contract",level:2},{value:"Unit Tests",id:"unit-tests",level:2},{value:"Optimized Smart Contract",id:"optimized-smart-contract",level:2},{value:"AMD Machines",id:"amd-machines",level:3},{value:"ARM Machines",id:"arm-machines",level:3},{value:"Contract Deployment",id:"contract-deployment",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-deployment-on-cosmwasm-with-rollmint"},"Contract Deployment on CosmWasm with Rollmint"),(0,a.kt)("h2",{id:"compile-the-smart-contract"},"Compile the Smart Contract"),(0,a.kt)("p",null,"In a new terminal instance, we will run the following commands to pull down the\nNameservice smart contract and compile it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/InterWasm/cw-contracts\ncd cw-contracts\ncd contracts/nameservice\ncargo wasm\n")),(0,a.kt)("p",null,"The compiled contract is outputted to:\n",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_nameservice.wasm"),"."),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"If we want to run tests, we can do so with the following command in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo unit-test\n")),(0,a.kt)("h2",{id:"optimized-smart-contract"},"Optimized Smart Contract"),(0,a.kt)("p",null,"Because we are deploying the compiled smart contract to ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd"),",\nwe want it to be as small as possible."),(0,a.kt)("p",null,"The CosmWasm team provides a tool called ",(0,a.kt)("inlineCode",{parentName:"p"},"rust-optimizer")," which we need\n",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-388/fr/developers/cosmwasm-dependency/#docker-installation"},"Docker")," for in order to compile."),(0,a.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"amd",label:"AMD",mdxType:"TabItem"},(0,a.kt)("h3",{id:"amd-machines"},"AMD Machines"),(0,a.kt)("p",null,"Run the following command in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice"),"\ndirectory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n')),(0,a.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice.wasm"),".")),(0,a.kt)(l.Z,{value:"arm",label:"ARM",mdxType:"TabItem"},(0,a.kt)("h3",{id:"arm-machines"},"ARM Machines"),(0,a.kt)("p",null,"Run the following command in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice"),"\ndirectory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --platform linux/arm64 --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer-arm64:0.12.8\n')),(0,a.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice.wasm"),"."))),(0,a.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,a.kt)("p",null,"Let's now deploy our smart contract!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before deploying your contract, you may need to redeclare the following\nvariables:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'CHAIN_ID=celeswasm\nKEY_NAME=celeswasm-key\nCHAINFLAG="--chain-id ${CHAIN_ID}"\nTXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\nNODEIP="--node http://127.0.0.1:26657"\n')),(0,a.kt)("p",null,"Run the following in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from $KEY_NAME --keyring-backend test $TXFLAG $NODEIP --output json -y | jq -r '.txhash') && echo $TX_HASH\n")),(0,a.kt)("p",null,"This will get you the transaction hash for the smart contract deployment. Given\nwe are using Rollmint, there will be a delay on the transaction being included\ndue to Rollmint waiting on Celestia's Data Availability Layer to confirm the block\nhas been included before submitting a new block."))}d.isMDXComponent=!0}}]);