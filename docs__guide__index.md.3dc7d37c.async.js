(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"367t":function(e,a,n){"use strict";n.r(a);var t=n("uLvW"),l=n.n(t),c=n("Jc3n"),r=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"tech-hooks"},l.a.createElement(c["AnchorLink"],{to:"#tech-hooks","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"tech-hooks"),l.a.createElement("p",null,"React \u4e1a\u52a1 Hooks"),l.a.createElement("h2",{id:"\ufe0f-\u80fd\u529b\u652f\u6301"},l.a.createElement(c["AnchorLink"],{to:"#\ufe0f-\u80fd\u529b\u652f\u6301","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u26f0\ufe0f \u80fd\u529b\u652f\u6301"),l.a.createElement("h3",{id:"1-\u53ef\u9760\u7684\u4ee3\u7801\u5065\u58ee"},l.a.createElement(c["AnchorLink"],{to:"#1-\u53ef\u9760\u7684\u4ee3\u7801\u5065\u58ee","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u53ef\u9760\u7684\u4ee3\u7801\u5065\u58ee"),l.a.createElement("p",null,"\u4f7f\u7528 Typescript \u6784\u5efa\uff0c\u63d0\u4f9b\u5b8c\u5584\u7684\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6"),l.a.createElement("h3",{id:"2-\u5b8c\u5584\u7684\u6587\u6863\u80fd\u529b"},l.a.createElement(c["AnchorLink"],{to:"#2-\u5b8c\u5584\u7684\u6587\u6863\u80fd\u529b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"2. \u5b8c\u5584\u7684\u6587\u6863\u80fd\u529b"),l.a.createElement("p",null,"\u652f\u6301\u6587\u6863\u8bb0\u5f55\uff0c\u652f\u6301 demo \u6f14\u793a"),l.a.createElement("h3",{id:"3-\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b"},l.a.createElement(c["AnchorLink"],{to:"#3-\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3. \u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b"),l.a.createElement("p",null,"\u914d\u5957\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5e2e\u52a9\u60a8\u63d0\u5347\u9879\u76ee\u5065\u58ee\u6027"),l.a.createElement("h2",{id:"-\u8bbe\u8ba1\u76ee\u7684"},l.a.createElement(c["AnchorLink"],{to:"#-\u8bbe\u8ba1\u76ee\u7684","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83c\udf1f \u8bbe\u8ba1\u76ee\u7684"),l.a.createElement("p",null,"\u5728\u524d\u7aef\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u6709\u7740\u5404\u79cd\u5404\u6837\u53ef\u4ee5\u590d\u7528\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5982\u4f55\u80fd\u591f\u5c06\u91cd\u590d\u7684\u4ee3\u7801\u91cf\u8f6c\u4e3a\u53ef\u590d\u7528\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u662f\u5224\u65ad\u4e00\u4e2a\u7a0b\u5e8f\u5458\u7f16\u7801\u6c34\u5e73\u53ca\u4ee3\u7801\u80fd\u529b\u7684\u8861\u91cf\u56e0\u7d20\u4e4b\u4e00\u3002\u4f46\u5982\u4f55\u5b9e\u73b0\u4ee3\u7801\u590d\u7528\uff0c\u4e5f\u662f\u524d\u7aef\u5f00\u53d1\u540c\u5b66\u4e43\u81f3\u524d\u7aef\u67b6\u6784\u5e08\u90fd\u8001\u751f\u5e38\u8c08\u7684\u4e00\u4e2a\u95ee\u9898\u3002"),l.a.createElement("p",null,"Tech Hooks \u662f\u9488\u5bf9 React \u5f00\u53d1\u4e2d\u51fa\u73b0\u7684\u5404\u79cd\u5404\u6837\u53ef\u4ee5\u590d\u7528\u7684\u4e1a\u52a1\u573a\u666f\u5b9a\u5236\u7684\u4e00\u4e2a\u524d\u7aef\u4e1a\u52a1 react hooks \u5e93\u3002"),l.a.createElement("h2",{id:"\ufe0f-\u6280\u672f\u9009\u578b"},l.a.createElement(c["AnchorLink"],{to:"#\ufe0f-\u6280\u672f\u9009\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u2692\ufe0f \u6280\u672f\u9009\u578b"),l.a.createElement("h3",{id:"\u5305\u7ba1\u7406\u5de5\u5177----pnpm"},l.a.createElement(c["AnchorLink"],{to:"#\u5305\u7ba1\u7406\u5de5\u5177----pnpm","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5305\u7ba1\u7406\u5de5\u5177 -- pnpm"),l.a.createElement("p",null,"\u4f5c\u4e3a\u57fa\u7840\u5305\uff0c\u9009\u62e9\u793e\u533a\u5185\u66f4\u63a8\u5d07\u7684",l.a.createElement("code",null,"pnpm"),"\u4f5c\u4e3a\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u4e3b\u8981\u539f\u56e0\u6709\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"pnpm"),"\u5b89\u88c5\u901f\u5ea6\u66f4\u5feb\uff0c\u78c1\u76d8\u7a7a\u95f4\u5229\u7528\u7387\u9ad8\uff1b"),l.a.createElement("li",null,l.a.createElement("code",null,"pnpm"),"\u7684",l.a.createElement("code",null,"lock"),"\u6587\u4ef6\u9002\u7528\u4e8e\u591a\u4e2a\u5355\u4e00\u5b50\u529f\u80fd\u7684\u6a21\u5757\uff0c\u4e14\u80fd\u4fdd\u8bc1\u6bcf\u4e2a\u6a21\u5757\u7684\u4f9d\u8d56\u4e0d\u8026\u5408\uff1b"),l.a.createElement("li",null,"\u6253\u5305\u4ea7\u7269\u6e05\u6670\uff0c\u6253\u5305\u540e\u4ea7\u7269\u786e\u4fdd\u5168\u90e8\u4e3a\u9759\u6001\u7ad9\u70b9\u8d44\u6e90\uff1b")),l.a.createElement("h3",{id:"\u6784\u5efa\u5de5\u5177----webpack--gulp"},l.a.createElement(c["AnchorLink"],{to:"#\u6784\u5efa\u5de5\u5177----webpack--gulp","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6784\u5efa\u5de5\u5177 -- webpack & gulp"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6700\u7ec8\u4ea7\u7269\u4e3a\u591a\u4e2a\u57fa\u7840\u5b50\u529f\u80fd\u6a21\u5757\u7684\u8026\u5408\uff0c\u9009\u62e9",l.a.createElement("code",null,"gulp"),"\u8fd9\u79cd\u6d41\u7a0b\u5f0f\u7684\u6784\u5efa\u5de5\u5177\uff0c\u80fd\u591f\u66f4\u6e05\u6670\u7684\u8868\u8fbe\u6784\u5efa\u6d41\u7a0b\uff1b"),l.a.createElement("li",null,"\u9009\u62e9\u5e38\u7528\u7684",l.a.createElement("code",null,"webpack"),"\u4f5c\u4e3a\u6784\u5efa\u4ea7\u7269\u7684\u58f0\u660e\u5f0f\u63a5\u5165\u65b9\u5f0f\uff1b")),l.a.createElement("h3",{id:"\u9759\u6001\u6587\u4ef6\u6253\u5305\u5de5\u5177----dumi"},l.a.createElement(c["AnchorLink"],{to:"#\u9759\u6001\u6587\u4ef6\u6253\u5305\u5de5\u5177----dumi","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u6587\u4ef6\u6253\u5305\u5de5\u5177 -- dumi"),l.a.createElement("p",null,"\u5c31\u76ee\u524d\u524d\u7aef\u793e\u533a\u800c\u8a00\uff0c",l.a.createElement("code",null,"dumi"),"\u662f\u5f53\u4e4b\u65e0\u6127\u7684\u4e3a\u7ec4\u4ef6\u7814\u53d1\u800c\u751f\u7684\u9759\u6001\u7ad9\u70b9\u89e3\u51b3\u65b9\u6848\uff1b"),l.a.createElement("h3",{id:"\u6d4b\u8bd5\u5de5\u5177----jest"},l.a.createElement(c["AnchorLink"],{to:"#\u6d4b\u8bd5\u5de5\u5177----jest","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6d4b\u8bd5\u5de5\u5177 -- jest"),l.a.createElement("p",null,l.a.createElement("code",null,"jest"),"\u529f\u80fd\u5168\u9762\uff0c\u8d44\u6599\u4e30\u5bcc\uff0c\u80fd\u591f\u5f88\u597d\u5730\u652f\u6491\u539f\u5b50\u5316\u96c6\u5408\u7684\u5de5\u5177\u51fd\u6570\uff1b"),l.a.createElement("h2",{id:"-\u8054\u7cfb"},l.a.createElement(c["AnchorLink"],{to:"#-\u8054\u7cfb","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\udce7 \u8054\u7cfb"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"encode Hooks")," ",l.a.createElement(c["Link"],{to:"https://ostechbase.github.io/tech-hooks/"},"https://ostechbase.github.io/tech-hooks/")),l.a.createElement("li",null,l.a.createElement("strong",null,"GitHub"),": ",l.a.createElement(c["Link"],{to:"https://github.com/OSTechBase/tech-hooks"},"https://github.com/OSTechBase/tech-hooks"))),l.a.createElement("br",null)))}));a["default"]=e=>{var a=l.a.useContext(c["context"]),n=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:n})}}}]);