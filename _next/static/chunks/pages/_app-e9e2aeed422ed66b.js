(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(d,c,a){"use strict";a.d(c,{F:function(){return j},f:function(){return k}});var b=a(7294);let e=["light","dark"],f="(prefers-color-scheme: dark)",g="undefined"==typeof window,h=(0,b.createContext)(void 0),i={setTheme(a){},themes:[]},j=()=>{var a;return null!==(a=(0,b.useContext)(h))&& void 0!==a?a:i},k=a=>(0,b.useContext)(h)?b.createElement(b.Fragment,null,a.children):b.createElement(l,a),l=({forcedTheme:a,disableTransitionOnChange:q=!1,enableSystem:d=!0,enableColorScheme:r=!0,storageKey:s="theme",themes:g=["light","dark"],defaultTheme:t=d?"system":"light",attribute:u="data-theme",value:i,children:j,nonce:v})=>{let[c,y]=(0,b.useState)(()=>n(s,t)),[k,z]=(0,b.useState)(()=>n(s)),w=i?Object.values(i):g,A=(0,b.useCallback)(f=>{let a=f;if(!a)return;"system"===f&&d&&(a=p());let c=i?i[a]:a,g=q?o():null,b=document.documentElement;if("class"===u?(b.classList.remove(...w),c&&b.classList.add(c)):c?b.setAttribute(u,c):b.removeAttribute(u),r){let h=e.includes(t)?t:null,j=e.includes(a)?a:h;b.style.colorScheme=j}null==g||g()},[]),l=(0,b.useCallback)(a=>{y(a);try{localStorage.setItem(s,a)}catch(b){}},[a]),x=(0,b.useCallback)(b=>{let e=p(b);z(e),"system"===c&&d&&!a&&A("system")},[c,a]);return(0,b.useEffect)(()=>{let a=window.matchMedia(f);return a.addListener(x),x(a),()=>a.removeListener(x)},[x]),(0,b.useEffect)(()=>{let a=a=>{a.key===s&&l(a.newValue||t)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[l]),(0,b.useEffect)(()=>{A(null!=a?a:c)},[a,c]),b.createElement(h.Provider,{value:{theme:c,setTheme:l,forcedTheme:a,resolvedTheme:"system"===c?k:c,themes:d?[...g,"system"]:g,systemTheme:d?k:void 0}},b.createElement(m,{forcedTheme:a,disableTransitionOnChange:q,enableSystem:d,enableColorScheme:r,storageKey:s,themes:g,defaultTheme:t,attribute:u,value:i,children:j,attrs:w,nonce:v}),j)},m=(0,b.memo)(({forcedTheme:h,storageKey:i,attribute:j,enableSystem:m,enableColorScheme:n,defaultTheme:c,value:d,attrs:o,nonce:p})=>{let k="system"===c,g="class"===j?`var d=document.documentElement,c=d.classList;c.remove(${o.map(a=>`'${a}'`).join(",")});`:`var d=document.documentElement,n='${j}',s='setAttribute';`,l=n?e.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",a=(a,c=!1,h=!0)=>{let f=d?d[a]:a,g=c?a+"|| ''":`'${f}'`,b="";return n&&h&&!c&&e.includes(a)&&(b+=`d.style.colorScheme = '${a}';`),"class"===j?b+=c||f?`c.add(${g})`:"null":f&&(b+=`d[s](n,${g})`),b},q=h?`!function(){${g}${a(h)}}()`:m?`!function(){try{${g}var e=localStorage.getItem('${i}');if('system'===e||(!e&&${k})){var t='${f}',m=window.matchMedia(t);if(m.media!==t||m.matches){${a("dark")}}else{${a("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${a(d?"x[e]":"e",!0)}}${k?"":"else{"+a(c,!1,!1)+"}"}${l}}catch(e){}}()`:`!function(){try{${g}var e=localStorage.getItem('${i}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${a(d?"x[e]":"e",!0)}}else{${a(c,!1,!1)};}${l}}catch(t){}}();`;return b.createElement("script",{nonce:p,dangerouslySetInnerHTML:{__html:q}})},()=>!0),n=(b,c)=>{if(g)return;let a;try{a=localStorage.getItem(b)||void 0}catch(d){}return a||c},o=()=>{let a=document.createElement("style");return a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},p=a=>(a||(a=window.matchMedia(f)),a.matches?"dark":"light")},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(8484)}])},8484:function(c,b,a){"use strict";a.r(b);var d=a(5893),e=a(2010);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a(2604),b.default=function(a){var b=a.Component,c=a.pageProps;return(0,d.jsx)(e.f,{attribute:"class",children:(0,d.jsx)(b,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){f(d,a,c[a])})}return d}({},c))})}},2604:function(){}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(880)}),_N_E=a.O()}])