"use strict";(self.webpackChunknl_api_docs=self.webpackChunknl_api_docs||[]).push([[311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1784:(e,n,t)=>{t.r(n),t.d(n,{Get:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},i=void 0,l={unversionedId:"API/search",id:"API/search",title:"search",description:"",source:"@site/docs/API/search.md",sourceDirName:"API",slug:"/API/search",permalink:"/docs/API/search",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"match",permalink:"/docs/API/match"},next:{title:"season",permalink:"/docs/API/season"}},c={},p=[{value:"/criteria",id:"criteria",level:2}],s=e=>{let{children:n,color:t}=e;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={toc:p,Get:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"criteria"},"/criteria"),(0,a.kt)(s,{color:"#25c2a0",mdxType:"Get"},"GET"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Gibt eine Liste von auf den Suchbegriff passenden Elementen zur\xfcck"))),(0,a.kt)("h3",null,"Anfrage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"GET https://api.nitroleague.de/search/<Criteria>\n")),(0,a.kt)("h3",null,"Antwort"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        "name":string,\n        "type": string,\n        "identifier": string\n    },\n    {\n        "name":string,\n        "type": string,\n        "identifier": string\n    },\n    ...\n]\n')),(0,a.kt)("h3",null,"Beispiel"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Anfrage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"GET https://api.nitroleague.de/search/need\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Antwort")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "name": "NoNeedOrga",\n        "type": "Team",\n        "identifier": "xroab8"\n    },\n    {\n        "name": "needforbleed",\n        "type": "Developer",\n        "identifier": "7v8ssgd0"\n    },\n    {\n        "name": "needforbleed8",\n        "type": "User",\n        "identifier": "indzs7rt"\n    },\n    ...\n]\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Die Suche gibt maximal 10 Eintr\xe4ge zur\xfcck")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);