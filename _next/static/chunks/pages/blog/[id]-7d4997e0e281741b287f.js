(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{3542:function(e,t,r){"use strict";r(7294);var n=r(3855),i=r(4790),c=r(5893);t.Z=function(e){var t=e.dateString,r=(0,n.Z)(t);return(0,c.jsx)("time",{dateTime:t,children:(0,i.Z)(r,"LLLL d, yyyy")})}},9888:function(e,t,r){"use strict";r.d(t,{Z:function(){return m},y:function(){return f}});r(7294);var n=r(9008),i=r(4106),c=r(4942),a=r(4925),s=r(5893),l=r(4155),o=["alt","src"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=function(e){var t=e.alt,r=e.src,n=(0,a.Z)(e,o);return(0,s.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({src:"".concat(l.env.BASE_PATH).concat(r),alt:t},n))},d=r(831),p=r.n(d),g=r(2247),j=r.n(g),_="My Name",f="Next.js Sample Website";var m=function(e){var t=e.children,r=e.home;return(0,s.jsxs)("div",{className:p().container,children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"".concat("/nextjs-blog","/favicon.ico")}),(0,s.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(f),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,s.jsx)("meta",{name:"og:title",content:f}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,s.jsx)("header",{className:p().header,children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{className:j().borderCircle,src:"/images/profile.jpg",height:144,width:144,alt:_}),(0,s.jsx)("h1",{className:j().heading2Xl,children:_})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{to:"/",children:(0,s.jsx)(u,{className:j().borderCircle,src:"/images/profile.jpg",height:108,width:108,alt:_})}),(0,s.jsx)("h2",{className:j().headingLg,children:(0,s.jsx)(i.Z,{className:j().colorInherit,to:"/",children:_})})]})}),(0,s.jsx)("main",{children:t}),!r&&(0,s.jsx)("div",{className:p().backToHome,children:(0,s.jsx)(i.Z,{to:"/",children:"\u2190 Back to home"})})]})}},4106:function(e,t,r){"use strict";var n=r(4942),i=r(4925),c=r(1664),a=r(5893),s=["children","to","as","replace","scroll","shallow","prefetch","locale"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.children,r=e.to,n=e.as,l=e.replace,h=e.scroll,u=e.shallow,d=e.prefetch,p=e.locale,g=(0,i.Z)(e,s);return(0,a.jsx)(c.default,{href:r,as:n,replace:l,scroll:h,shallow:u,prefetch:d,locale:p,children:(0,a.jsx)("a",o(o({},g),{},{children:t}))})}},8320:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o}});var n=r(9008),i=r(3542),c=r(9888),a=r(2247),s=r.n(a),l=r(5893);var o=!0;t.default=function(e){var t=e.postData;return(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(n.default,{children:(0,l.jsx)("title",{children:t.title})}),(0,l.jsx)("h1",{className:s().headingXl,children:t.title}),(0,l.jsx)("p",{className:s().lightText,children:(0,l.jsx)(i.Z,{dateString:t.date})}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})}},7921:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return r(8320)}])},831:function(e){e.exports={container:"layout_container__jlHaX",header:"layout_header__3xOaY",backToHome:"layout_backToHome__aZaES"}},2247:function(e){e.exports={heading2Xl:"utils_heading2Xl__lr9mx",headingXl:"utils_headingXl__1ivW1",headingLg:"utils_headingLg__1xzWv",headingMd:"utils_headingMd__1BqkX",borderCircle:"utils_borderCircle__30sid",colorInherit:"utils_colorInherit__BNp6p",padding1px:"utils_padding1px__18k9U",list:"utils_list__1bBBC",listItem:"utils_listItem__3bnuB",lightText:"utils_lightText__nQtep"}}},function(e){e.O(0,[250,774,888,179],(function(){return t=7921,e(e.s=t);var t}));var t=e.O();_N_E=t}]);