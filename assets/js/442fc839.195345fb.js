"use strict";(self.webpackChunk_git_filesystem_website=self.webpackChunk_git_filesystem_website||[]).push([[927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={title:"Repository",sidebar_position:3},o=void 0,l={unversionedId:"typescript/usage/repository",id:"typescript/usage/repository",title:"Repository",description:"Files",source:"@site/docs/typescript/usage/repository.mdx",sourceDirName:"typescript/usage",slug:"/typescript/usage/repository",permalink:"/docs/typescript/usage/repository",draft:!1,editUrl:"https://github.com/git-filesystem/git-filesystem/tree/main/docs/typescript/usage/repository.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Repository",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/typescript/usage/client"},next:{title:"CommitBuilder",permalink:"/docs/typescript/usage/commitBuilder"}},s={},p=[{value:"Files",id:"files",level:2},{value:"<code>createFile()</code>",id:"createfile",level:3},{value:"Throws:",id:"throws",level:4},{value:"<code>readFile()</code>",id:"readfile",level:3},{value:"Throws:",id:"throws-1",level:4},{value:"<code>updateFile()</code>",id:"updatefile",level:3},{value:"Throws:",id:"throws-2",level:4},{value:"<code>deleteFile()</code>",id:"deletefile",level:3},{value:"Throws:",id:"throws-3",level:4},{value:"JSON Helper Methods",id:"json-helper-methods",level:3},{value:"Tags",id:"tags",level:2},{value:"<code>createCommitBuilder()</code>",id:"createcommitbuilder",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"files"},"Files"),(0,i.kt)("p",null,"When you have a repository from a ",(0,i.kt)("a",{parentName:"p",href:"./client"},"client"),", you can read and write to the files within it.\nThe available methods include:"),(0,i.kt)("h3",{id:"createfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"createFile()")),(0,i.kt)("p",null,"Creates a new commit that creates a new file in the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'await repository.createFile("path/to/file.txt", "file content");\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Due to API limitations, the GitHub implementation treats creating and updating a file as the same.\nCreating a file that already exists will overwrite it.")),(0,i.kt)("h4",{id:"throws"},"Throws:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CommitError"),": If there's an unknown error while committing.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"readfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"readFile()")),(0,i.kt)("p",null,"Reads a files content from the remote repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const fileContent = await repository.readFile("path/to/file.txt");\n')),(0,i.kt)("h4",{id:"throws-1"},"Throws:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FileNotFoundError"),": If the file does not exist.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatefile"},(0,i.kt)("inlineCode",{parentName:"h3"},"updateFile()")),(0,i.kt)("p",null,"Creates a new commit that replaces the content of a file in the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'await repository.updateFile("path/to/file.txt", "file content");\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"updateFile")," method requires you to pass in the whole file content, just like a traditional file-system API.\nYou cannot pass in a diff/patch/delta like you would with a Git API.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Due to API limitations, the GitHub implementation treats creating and updating a file as the same.\nUpdating a file that does not exist will create it.")),(0,i.kt)("h4",{id:"throws-2"},"Throws:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CommitError"),": If there's an unknown error while committing.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deletefile"},(0,i.kt)("inlineCode",{parentName:"h3"},"deleteFile()")),(0,i.kt)("p",null,"Creates a new commit that deletes a file from the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'await repository.deleteFile("path/to/file.txt");\n')),(0,i.kt)("h4",{id:"throws-3"},"Throws:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CommitError"),": If there's an unknown error while committing.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"json-helper-methods"},"JSON Helper Methods"),(0,i.kt)("p",null,"The create, read, and update methods also come with JSON helper-method equivalents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'await repository.createJsonFile("path/to/file.json", anyObject);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const anyObject = await repository.readJsonFile<ObjectType>("path/to/file.json");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'await repository.updateJsonFile("path/to/file.json", anyObject);\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("p",null,"The repository class also exposes methods for handling tags.\nYou can create tags at the current ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," of the repository's branch and then read files back from that tag at a later point in time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'await repository.createFile("path/to/file.txt", "original content");\n\nawait repository.createTag("myTag");\n\nawait repository.updateFile("path/to/file.txt", "new content");\n\nawait repository.readFile("path/to/file.txt"); // returns "new content"\nawait repository.readFile("path/to/file.txt", "myTag"); // returns "original content"\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"createcommitbuilder"},(0,i.kt)("inlineCode",{parentName:"h2"},"createCommitBuilder()")),(0,i.kt)("p",null,"Sometimes you might want to apply changes to multiple files using a single commit.\nTo achive this, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"createCommitBuilder()")," method to get a new ",(0,i.kt)("a",{parentName:"p",href:"./commitBuilder"},(0,i.kt)("inlineCode",{parentName:"a"},"CommitBuilder")),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"./commitBuilder"},(0,i.kt)("inlineCode",{parentName:"a"},"CommitBuilder"))," page for details on how to use it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const commitBuilder = repository.createCommitBuilder();\n")))}u.isMDXComponent=!0}}]);