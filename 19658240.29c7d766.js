(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1631:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):p({},t,{},e)),a},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||c;return a?r.a.createElement(m,p({ref:t},b,{components:a})):r.a.createElement(m,p({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},302:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(9),c=(a(0),a(1631)),o={title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},p={id:"version-2.2.8/apis/base/update/getUpdateManager",title:"Taro.getUpdateManager()",description:"\u83b7\u53d6**\u5168\u5c40\u552f\u4e00**\u7684\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u3002",source:"@site/versioned_docs/version-2.2.8/apis/base/update/getUpdateManager.md",permalink:"/taro/docs/apis/base/update/getUpdateManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.8/apis/base/update/getUpdateManager.md",version:"2.2.8",sidebar_label:"getUpdateManager",sidebar:"version-2.2.8/API",previous:{title:"Taro.getSystemInfoSync()",permalink:"/taro/docs/apis/base/system/getSystemInfoSync"},next:{title:"UpdateManager",permalink:"/taro/docs/apis/base/update/UpdateManager"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:i};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6",Object(c.b)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u3002\n\u5173\u4e8e\u5c0f\u7a0b\u5e8f\u7684\u66f4\u65b0\u673a\u5236\uff0c\u53ef\u4ee5\u67e5\u770b",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html"}),"\u8fd0\u884c\u673a\u5236"),"\u6587\u6863\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => UpdateManager\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const updateManager = Taro.getUpdateManager()\n  updateManager.onCheckForUpdate(function (res) {\n  // \u8bf7\u6c42\u5b8c\u65b0\u7248\u672c\u4fe1\u606f\u7684\u56de\u8c03\n  console.log(res.hasUpdate)\n})\nupdateManager.onUpdateReady(function () {\n  Taro.showModal({\n    title: '\u66f4\u65b0\u63d0\u793a',\n    content: '\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f',\n    success: function (res) {\n      if (res.confirm) {\n        // \u65b0\u7684\u7248\u672c\u5df2\u7ecf\u4e0b\u8f7d\u597d\uff0c\u8c03\u7528 applyUpdate \u5e94\u7528\u65b0\u7248\u672c\u5e76\u91cd\u542f\n        updateManager.applyUpdate()\n      }\n    }\n  })\n})\nupdateManager.onUpdateFailed(function () {\n  // \u65b0\u7684\u7248\u672c\u4e0b\u8f7d\u5931\u8d25\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getUpdateManager"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);