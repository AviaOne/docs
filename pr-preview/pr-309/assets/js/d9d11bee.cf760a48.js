"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4445],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:g,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[N,O]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=g){const e=w[g];null!=e&&e!==N&&f.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==N&&(I(t),O(r),null!=g&&y(g,String(r)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},8980:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));n(5488),n(5162);const l={sidebar_label:"Setup"},o="\ud83d\udcbb\xa0Setup",i={unversionedId:"developers/gm-setup",id:"developers/gm-setup",title:"\ud83d\udcbb\xa0Setup",description:"- Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).",source:"@site/docs/developers/gm-setup.mdx",sourceDirName:"developers",slug:"/developers/gm-setup",permalink:"/pr-preview/pr-309/developers/gm-setup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-setup.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setup"},sidebar:"developers",previous:{title:"gm world Overview",permalink:"/pr-preview/pr-309/developers/gm-world"},next:{title:"Run a Light Node",permalink:"/pr-preview/pr-309/developers/gm-node"}},s={},u=[{value:"\ud83c\udfc3\xa0Install Golang",id:"install-golang",level:2},{value:"\ud83d\udd25\xa0Install Ignite CLI",id:"install-ignite-cli",level:2},{value:"\ud83c\udf7a\xa0Install Homebrew",id:"install-homebrew",level:2},{value:"\ud83c\udfc3\xa0Install wget and jq",id:"install-wget-and-jq",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"\ud83d\udcbb\xa0Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating systems: GNU/Linux, macOS, or Windows Subsystem for Linux (WSL).\nRecommended GNU/Linux or macOS.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"This tutorial was made on an M2 Mac with macOS Monterey Version 12.6."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/"},"Golang")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ignite/cli/"},"Ignite CLI v0.25.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/wget/"},"wget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/nodes/light-node/"},"A Celestia Light Node"))),(0,a.kt)("h2",{id:"install-golang"},"\ud83c\udfc3\xa0Install Golang"),(0,a.kt)("p",null,"Celestia-App, Celestia-Node, and Cosmos-SDK are written in the Golang\nprogramming language. You will need Golang to build and run them."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Be sure to use the same testnet installation instructions through this\nentire tutorial"))),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-309/developers/environment#install-golang"},"install Golang here"),"."),(0,a.kt)("h2",{id:"install-ignite-cli"},"\ud83d\udd25\xa0Install Ignite CLI"),(0,a.kt)("p",null,"First, you will need to create ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," if you have not already:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 775 /usr/local/bin\n")),(0,a.kt)("p",null,"Run this command in your terminal to install Ignite CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://get.ignite.com/cli! | bash\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u270b On some machines, you may run into permissions errors like the one below.\nYou can resolve this error by following the guidance\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/install#write-permission"},"here")," or below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Error\njcs @ ~ % curl https://get.ignite.com/cli! | bash\n\n\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  16847      0 --:--:-- --:--:-- --:--:-- 17475\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nmv: rename ./ignite to /usr/local/bin/ignite: Permission denied\n============\nError: mv failed\n")),(0,a.kt)("p",null,"The following command will resolve the permissions error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl https://get.ignite.com/cli! | sudo bash\n")),(0,a.kt)("p",null,"A successful installation will return something similar the response below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  3967    0  3967    0     0  15586      0 --:--:-- --:--:-- --:--:-- 15931\nInstalling ignite v0.25.1.....\n######################################################################## 100.0%\nInstalled at /usr/local/bin/ignite\n")),(0,a.kt)("p",null,"Verify you\u2019ve installed Ignite CLI by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ignite version\n")),(0,a.kt)("p",null,"The response that you receive should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jcs @ ~ % ignite version\nIgnite CLI version: v0.25.1\nIgnite CLI build date:  2022-10-20T15:52:00Z\nIgnite CLI source hash: cc393a9b59a8792b256432fafb472e5ac0738f7c\nCosmos SDK version: v0.46.3\nYour OS:        darwin\nYour arch:      arm64\nYour Node.js version:   v18.10.0\nYour go version:    go version go1.19.2 darwin/arm64\nYour uname -a:      Darwin Joshs-MacBook-Air.local 21.6.0 Darwin Kernel Version 21.6.0: Mon Aug 22 20:20:07 PDT 2022; root:xnu-8020.140.49~2/RELEASE_ARM64_T8110 arm64\nYour cwd:       /Users/joshstein\nIs on Gitpod:       false\n")),(0,a.kt)("h2",{id:"install-homebrew"},"\ud83c\udf7a\xa0Install Homebrew"),(0,a.kt)("p",null,"Homebrew will allow us to install dependencies for our Mac:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Be sure to run the commands similar to the output below from the successful installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,a.kt)("h2",{id:"install-wget-and-jq"},"\ud83c\udfc3\xa0Install wget and jq"),(0,a.kt)("p",null,"wget is an Internet file retriever and jq is a lightweight and flexible\ncommand-line JSON processor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget && brew install jq\n")))}p.isMDXComponent=!0}}]);