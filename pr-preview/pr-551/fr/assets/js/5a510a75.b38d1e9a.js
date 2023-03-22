"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1739],{3905:function(e,l,t){t.d(l,{Zo:function(){return p},kt:function(){return g}});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function u(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),i=function(e){var l=n.useContext(s),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},p=function(e){var l=i(e.components);return n.createElement(s.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},m=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(t),g=a,c=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return t?n.createElement(c,o(o({ref:l},p),{},{components:t})):n.createElement(c,o({ref:l},p))}));function g(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var u={};for(var s in l)hasOwnProperty.call(l,s)&&(u[s]=l[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,l,t){t.d(l,{Z:function(){return o}});var n=t(7294),a=t(4334),r="tabItem_Ymn6";function o(e){let{children:l,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:t},l)}},5488:function(e,l,t){t.d(l,{Z:function(){return g}});var n=t(3117),a=t(7294),r=t(4334),o=t(2389),u=t(7392),s=t(7094),i=t(2466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var l;const{lazy:t,block:o,defaultValue:m,values:g,groupId:c,className:b}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=g??k.map((e=>{let{props:{value:l,label:t,attributes:n}}=e;return{value:l,label:t,attributes:n}})),h=(0,u.l)(v,((e,l)=>e.value===l.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const T=null===m?m:m??(null==(l=k.find((e=>e.props.default)))?void 0:l.props.value)??k[0].props.value;if(null!==T&&!v.some((e=>e.value===T)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${T}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,s.U)(),[y,x]=(0,a.useState)(T),Z=[],{blockElementScrollPositionUntilNextRender:$}=(0,i.o5)();if(null!=c){const e=f[c];null!=e&&e!==y&&v.some((l=>l.value===e))&&x(e)}const I=e=>{const l=e.currentTarget,t=Z.indexOf(l),n=v[t].value;n!==y&&($(l),x(n),null!=c&&w(c,String(n)))},N=e=>{var l;let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const l=Z.indexOf(e.currentTarget)+1;t=Z[l]??Z[0];break}case"ArrowLeft":{const l=Z.indexOf(e.currentTarget)-1;t=Z[l]??Z[Z.length-1];break}}null==(l=t)||l.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},v.map((e=>{let{value:l,label:t,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===l?0:-1,"aria-selected":y===l,key:l,ref:e=>Z.push(e),onKeyDown:N,onClick:I},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":y===l})}),t??l)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==y})))))}function g(e){const l=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(l)},e))}},578:function(e,l){const t=Object.freeze({golangNode:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6"});l.Z=t},2409:function(e,l,t){t.r(l),t.d(l,{assets:function(){return d},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=t(3117),a=(t(7294),t(3905)),r=t(578),o=t(5488),u=t(5162);const s={sidebar_label:"Setting up environment"},i="Development environment",p={unversionedId:"nodes/environment",id:"nodes/environment",title:"Development environment",description:"This tutorial will go over setting up your development environment to run",source:"@site/docs/nodes/environment.mdx",sourceDirName:"nodes",slug:"/nodes/environment",permalink:"/pr-preview/pr-551/fr/nodes/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/environment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setting up environment"},sidebar:"nodes",previous:{title:"Quick start",permalink:"/pr-preview/pr-551/fr/nodes/quick-start"},next:{title:"Installing celestia-node",permalink:"/pr-preview/pr-551/fr/nodes/celestia-node"}},d={},m=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3}],g={toc:m};function c(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-environment"},"Development environment"),(0,a.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,a.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,a.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,a.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,a.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,a.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,a.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,a.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,a.kt)("p",null,"Using Homebrew, in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,a.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,a.kt)("p",null,"Using Homebrew, in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,a.kt)("h3",{id:"install-golang"},"Install Golang"),(0,a.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev"},"Golang"),"\nso we must install Golang to build and run them."),(0,a.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null))))),(0,a.kt)("p",null,"Now we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,a.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,a.kt)("p",null,"To check if Go was installed correctly run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,a.kt)("p",null,"The output should be the version installed:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/amd64"))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/arm64"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/arm64"))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/amd64"))))),(0,a.kt)(u.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null))))),(0,a.kt)("p",null,"Now we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,a.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,a.kt)("p",null,"To check if Go was installed correctly run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,a.kt)("p",null,"The output should be the version installed:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/amd64"))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/arm64"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/arm64"))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/amd64"))))),(0,a.kt)(u.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null))))),(0,a.kt)("p",null,"Now we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,a.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,a.kt)("p",null,"To check if Go was installed correctly run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,a.kt)("p",null,"The output should be the version installed:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/amd64"))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/arm64"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/arm64"))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/amd64")))))))}c.isMDXComponent=!0}}]);