"use strict";(self.webpackChunk_git_filesystem_website=self.webpackChunk_git_filesystem_website||[]).push([[646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"Client Factory",sidebar_position:1},a=void 0,l={unversionedId:"typescript/usage/client-factory",id:"typescript/usage/client-factory",title:"Client Factory",description:"The primary entrypoint into the main library is via the ClientFactory class.",source:"@site/docs/typescript/usage/client-factory.mdx",sourceDirName:"typescript/usage",slug:"/typescript/usage/client-factory",permalink:"/docs/typescript/usage/client-factory",draft:!1,editUrl:"https://github.com/git-filesystem/git-filesystem/tree/main/docs/typescript/usage/client-factory.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Client Factory",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to use git-filesystem",permalink:"/docs/typescript/usage/"},next:{title:"Client",permalink:"/docs/typescript/usage/client"}},s={},p=[{value:"<code>getClientForProvider()</code>",id:"getclientforprovider",level:3},{value:"Author / Commiter",id:"author--commiter",level:4},{value:"Json Configuration",id:"json-configuration",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The primary entrypoint into the main library is via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientFactory")," class."),(0,i.kt)("h3",{id:"getclientforprovider"},(0,i.kt)("inlineCode",{parentName:"h3"},"getClientForProvider()")),(0,i.kt)("p",null,"After importing ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientFactory"),", new one up and then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"getClientForProvider")," method."),(0,i.kt)("p",null,"This is the only time you need to know which provider you're handling, from this point onwards the APIs are all the same."),(0,i.kt)("p",null,"The four things you need to pass in are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The provider of choice (",(0,i.kt)("inlineCode",{parentName:"li"},"github"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gitlab"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"bitbucket"),")"),(0,i.kt)("li",{parentName:"ul"},"A username"),(0,i.kt)("li",{parentName:"ul"},"A personal access token (PAT) / API key"),(0,i.kt)("li",{parentName:"ul"},"A user-agent name")),(0,i.kt)("p",null,"The user agent name should represent your product/service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { ClientFactory } from "git-filesystem";\n\nconst client = new ClientFactory().getClientForProvider(\n  "github",\n  "username",\n  "access-token",\n  "user-agent-name"\n);\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getClientForProvider")," method can also take other optional parameters."),(0,i.kt)("h4",{id:"author--commiter"},"Author / Commiter"),(0,i.kt)("p",null,"The first two optional parameters are ",(0,i.kt)("inlineCode",{parentName:"p"},"authorDetails")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"committerDetails")," respectively.\nThese are both git terminology, and relate to the person(s) that the library is making commits on behalf of."),(0,i.kt)("p",null,"Both use the following TypeScript interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface GitUser {\n  name: string;\n  email: string;\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History#:~:text=You%20may%20be%20wondering%20what%20the%20difference%20is%20between%20author%20and%20committer.%20The%20author%20is%20the%20person%20who%20originally%20wrote%20the%20work%2C%20whereas%20the%20committer%20is%20the%20person%20who%20last%20applied%20the%20work."},"See the git website for the difference between the two options"),",\nthough you'll usually want to pass in the same details for both.")),(0,i.kt)("h4",{id:"json-configuration"},"Json Configuration"),(0,i.kt)("p",null,"The final optional argument is a set of JSON configuration options."),(0,i.kt)("p",null,"The TypeScript/JavaScript libraries contain some helper methods to read/write objects to files as JSON.\nBy default these methods will use pretty-printed JSON using 2 spaces, but you can use this option to change that."),(0,i.kt)("p",null,"There are two possible types you can use for this JSON configuration (other than ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type FormatJsonConfig = {\n  prettyFormat: true;\n  indentChar: " " | "\\t";\n  indentSize: number; // How many of the `indentChar` to use\n};\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type NoFormatJsonConfig = {\n  prettyFormat: false;\n};\n")),(0,i.kt)("p",null,"The return type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"getClientForProvider")," method is an instance of the ",(0,i.kt)("a",{parentName:"p",href:"./client"},(0,i.kt)("inlineCode",{parentName:"a"},"Client"))," class."))}u.isMDXComponent=!0}}]);