(window.webpackJsonp=window.webpackJsonp||[]).push([[50,10],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(116),a(175)),l=(a(124),a(115)),o=a(117),s=a(49),c=a.n(s),d=a(352),u=a(172);const m=[{title:"Palm oil fuel",imageUrl:"img/home/bahanBakarMinyak.png",link:"/trend",description:"PT Pertamina (Persero) focuses on developing the production of environmentally friendly fuels or green energy. In addition to protecting the environment, the development of environmentally friendly energy is encouraged to reduce dependence on fossil fuels, whose reserves are depleting. \n    Crude palm oil (CPO) is one of the main renewable energy (EBT) commodities used by Pertamina to substitute fossil fuels and produce environmentally friendly energy."}];function g({imageUrl:e,title:t,description:a,link:n}){let r=Object(o.a)(n);return i.a.createElement(u.Story,{image:e,reverse:!1},i.a.createElement(u.TextBlock,{label:t,color:"black"},i.a.createElement(u.Text,null,a),i.a.createElement(u.LightCta,{href:r},"Show More")))}function h(e){let t=e.data;return i.a.createElement(u.Stories,{reverse:!1,alternate:!0},t.map((e,t)=>i.a.createElement(u.Story,{key:t,image:e.imageUrl},i.a.createElement(u.TextBlock,{label:e.title,title:"",color:"nebula"},i.a.createElement(u.Text,null,e.description),i.a.createElement(u.LightCta,{href:e.link},"Show More")))))}t.default=function(){const e=Object(l.a)(),{siteConfig:t={}}=e;return i.a.createElement(r.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},i.a.createElement("div",{className:c.a.bannerBackColor},i.a.createElement(u.Section,{background:"transparent",noPaddingBottom:!0,noPaddingTop:!0},i.a.createElement(u.Banner,{className:"uil-m-auto uil-maw-1200",button:"Explore",href:"#",image:"img/home/palmBanner.png",subtitle:t.tagline,theme:"mars",title:t.title}))),i.a.createElement("div",{className:c.a.headlinesBackColor},i.a.createElement(u.Section,{background:"transparent"},i.a.createElement(u.SectionHeader,{title:"Headlines",align:"left"},"some important things that will be discussed in this documentation"),i.a.createElement(h,{data:d}))),i.a.createElement("div",{className:c.a.trendBackColor},i.a.createElement(u.Section,{background:"transparent"},i.a.createElement(u.SectionHeader,{title:"Trending",align:"left"},"Hot news about palm oil"),i.a.createElement(g,m[0]))))}},176:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(114),l=a.n(r),o=a(167),s=a(115);t.a=e=>{const t=Object(n.useRef)(!1),r=Object(n.useRef)(null),c=Object(o.useHistory)(),{siteConfig:d={}}=Object(s.a)(),{baseUrl:u}=d,m=()=>{t.current||(Promise.all([fetch(u+"search-doc.json").then(e=>e.json()),fetch(u+"lunr-index.json").then(e=>e.json()),Promise.all([a.e(57),a.e(60)]).then(a.bind(null,181)),a.e(39).then(a.t.bind(null,180,7))]).then(([e,t,{default:a}])=>{((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const n=u+a.url;document.createElement("a").href=n,c.push(n)}})})(e,t,a)}),t.current=!0)},g=Object(n.useCallback)(t=>{r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return i.a.createElement("div",{className:"navbar__search",key:"search-box"},i.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:g,onKeyDown:g,tabIndex:0}),i.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:g,onBlur:g,ref:r}))}},178:function(e,t,a){var n={"./algolia-stopwatch":125,"./algolia-stopwatch.d":126,"./algolia-stopwatch.d.ts":126,"./algolia-stopwatch.js":125,"./crawler":127,"./crawler.d":128,"./crawler.d.ts":128,"./crawler.js":127,"./devices":129,"./devices.d":130,"./devices.d.ts":130,"./devices.js":129,"./drag-up":131,"./drag-up.d":132,"./drag-up.d.ts":132,"./drag-up.js":131,"./facebook":133,"./facebook.d":134,"./facebook.d.ts":134,"./facebook.js":133,"./instagram":135,"./instagram.d":136,"./instagram.d.ts":136,"./instagram.js":135,"./learn":137,"./learn.d":138,"./learn.d.ts":138,"./learn.js":137,"./linkedin":139,"./linkedin.d":140,"./linkedin.d.ts":140,"./linkedin.js":139,"./mac":141,"./mac.d":142,"./mac.d.ts":142,"./mac.js":141,"./multi-cluster":143,"./multi-cluster.d":144,"./multi-cluster.d.ts":144,"./multi-cluster.js":143,"./multi-device":145,"./multi-device.d":146,"./multi-device.d.ts":146,"./multi-device.js":145,"./partners":147,"./partners.d":148,"./partners.d.ts":148,"./partners.js":147,"./social-facebook":149,"./social-facebook.d":150,"./social-facebook.d.ts":150,"./social-facebook.js":149,"./social-instagram":151,"./social-instagram.d":152,"./social-instagram.d.ts":152,"./social-instagram.js":151,"./social-linkedin":153,"./social-linkedin.d":154,"./social-linkedin.d.ts":154,"./social-linkedin.js":153,"./social-twitter":155,"./social-twitter.d":156,"./social-twitter.d.ts":156,"./social-twitter.js":155,"./social-youtube":157,"./social-youtube.d":158,"./social-youtube.d.ts":158,"./social-youtube.js":157,"./triangle-left":159,"./triangle-left.d":160,"./triangle-left.d.ts":160,"./triangle-left.js":159,"./triangle-right":161,"./triangle-right.d":162,"./triangle-right.d.ts":162,"./triangle-right.js":161,"./twitter":163,"./twitter.d":164,"./twitter.d.ts":164,"./twitter.js":163,"./vault":165,"./vault.d":166,"./vault.d.ts":166,"./vault.js":165};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=178},352:function(e){e.exports=JSON.parse('[{"title":"Oil Palm Seedlings","imageUrl":"img/home/seed.png","link":"docs/seedlings","description":"PPKS (Palm Oil Research Center) has produced superior international quality oil palm seeds in accordance with the \'Quality Management System\' (ISO 9001: 2008)"},{"title":"Oil Palm Cultivation","imageUrl":"img/home/budidaya.png","link":"docs/cultivation","description":"How to cultivate oil palm can increase crop yields. The main thing in the cultivation of oil palm by fulfilling the requirements for growing oil palm"},{"title":"Palm Oil Processing","imageUrl":"img/home/pengolahan.png","link":"docs/processing","description":"The most important part to be processed from oil palm is the fruit. The pulp of the fruit produces crude palm oil which is processed into raw material for cooking oil."}]')}}]);