"use strict";(self.webpackChunk_git_filesystem_website=self.webpackChunk_git_filesystem_website||[]).push([[111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>S,contentTitle:()=>j,default:()=>P,frontMatter:()=>I,metadata:()=>x,toc:()=>C});var n=r(7462),a=r(7294),l=r(3905),i=r(4334),o=r(2466),s=r(6550),u=r(1980),c=r(7392),p=r(12);function f(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??f(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=y({queryString:r,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=r(2389);const g="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),f=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:f},o,{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(T,(0,n.Z)({key:String(t)},e))}const E="tabItem_Ymn6";function O(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(E,n),hidden:r},t)}const I={title:"Installation",sidebar_position:1},j=void 0,x={unversionedId:"typescript/installation",id:"typescript/installation",title:"Installation",description:"The TypeScript library is broken out into a few different npm packages.",source:"@site/docs/typescript/installation.mdx",sourceDirName:"typescript",slug:"/typescript/installation",permalink:"/docs/typescript/installation",draft:!1,editUrl:"https://github.com/git-filesystem/git-filesystem/tree/main/docs/typescript/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/docs/category/typescript"},next:{title:"Quickstart",permalink:"/docs/typescript/quickstart"}},S={},C=[],V={toc:C};function P(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},V,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The TypeScript library is broken out into a few different npm packages."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://npmjs.org/git-filesystem"},(0,l.kt)("inlineCode",{parentName:"a"},"git-filesystem"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://npmjs.org/@git-filesystem/abstractions"},(0,l.kt)("inlineCode",{parentName:"a"},"@git-filesystem/abstractions"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://npmjs.org/@git-filesystem/github"},(0,l.kt)("inlineCode",{parentName:"a"},"@git-filesystem/github"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://npmjs.org/@git-filesystem/gitlab"},(0,l.kt)("inlineCode",{parentName:"a"},"@git-filesystem/gitlab")))),(0,l.kt)("p",null,"All of the packages are originally written in TypeScript but are compiled down to JavaScript and ship with their respective type files (",(0,l.kt)("inlineCode",{parentName:"p"},".d.ts")," files)."),(0,l.kt)("p",null,"If you only want to interact with one specific git provider, then you can install the specific package for that provider."),(0,l.kt)("p",null,"If you want to allow your users to pick the provider of their choice, then install the main package (",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.org/git-filesystem"},(0,l.kt)("inlineCode",{parentName:"a"},"git-filesystem")),").\nThis package uses the other packages under the hood and exposes a single API for all of them, meaning you don't need to write different code to handle different providers!"),(0,l.kt)(N,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(O,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install git-filesystem\n"))),(0,l.kt)(O,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add git-filesystem\n")))))}P.isMDXComponent=!0}}]);