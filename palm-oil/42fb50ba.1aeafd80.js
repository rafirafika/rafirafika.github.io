(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(a,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return m}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function u(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var d=r.a.createContext({}),p=function(a){var e=r.a.useContext(d),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},c=function(a){var e=p(a.components);return r.a.createElement(d.Provider,{value:e},a.children)},b={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},s=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,u=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),c=p(n),s=t,m=c["".concat(u,".").concat(s)]||c[s]||b[s]||i;return n?r.a.createElement(m,l(l({ref:e},d),{},{components:n})):r.a.createElement(m,l({ref:e},d))}));function m(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,u=new Array(i);u[0]=s;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=a,l.mdxType="string"==typeof a?a:t,u[1]=l;for(var d=2;d<i;d++)u[d]=n[d];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},116:function(a,e,n){"use strict";function t(a){var e,n,r="";if("string"==typeof a||"number"==typeof a)r+=a;else if("object"==typeof a)if(Array.isArray(a))for(e=0;e<a.length;e++)a[e]&&(n=t(a[e]))&&(r&&(r+=" "),r+=n);else for(e in a)a[e]&&(r&&(r+=" "),r+=e);return r}e.a=function(){for(var a,e,n=0,r="";n<arguments.length;)(a=arguments[n++])&&(e=t(a))&&(r&&(r+=" "),r+=e);return r}},119:function(a,e,n){"use strict";var t=n(0);const r=Object(t.createContext)(void 0);e.a=r},120:function(a,e,n){"use strict";var t=n(0),r=n(119);e.a=function(){const a=Object(t.useContext)(r.a);if(null==a)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return a}},121:function(a,e,n){"use strict";var t=n(0),r=n.n(t),i=n(120),u=n(116),l=n(48),o=n.n(l);const d=37,p=39;e.a=function(a){const{block:e,children:n,defaultValue:l,values:c,groupId:b}=a,{tabGroupChoices:s,setTabGroupChoices:m}=Object(i.a)(),[k,g]=Object(t.useState)(l),[f,h]=Object(t.useState)(!1);if(null!=b){const a=s[b];null!=a&&a!==k&&c.some(e=>e.value===a)&&g(a)}const y=a=>{g(a),null!=b&&m(b,a)},j=[],O=a=>{a.metaKey||a.altKey||a.ctrlKey||h(!0)},v=()=>{h(!1)};return Object(t.useEffect)(()=>{window.addEventListener("keydown",O),window.addEventListener("mousedown",v)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":e})},c.map(({value:a,label:e})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===a,className:Object(u.a)("tabs__item",o.a.tabItem,{"tabs__item--active":k===a}),style:f?{}:{outline:"none"},key:a,ref:a=>j.push(a),onKeyDown:a=>{((a,e,n)=>{switch(n.keyCode){case p:((a,e)=>{const n=a.indexOf(e)+1;a[n]?a[n].focus():a[0].focus()})(a,e);break;case d:((a,e)=>{const n=a.indexOf(e)-1;a[n]?a[n].focus():a[a.length-1].focus()})(a,e)}})(j,a.target,a),O(a)},onFocus:()=>y(a),onClick:()=>{y(a),h(!1)},onPointerDown:()=>h(!1)},e))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},t.Children.toArray(n).filter(a=>a.props.value===k)[0]))}},122:function(a,e,n){"use strict";var t=n(0),r=n.n(t);e.a=function(a){return r.a.createElement("div",null,a.children)}},72:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return u})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return o})),n.d(e,"P",(function(){return d})),n.d(e,"default",(function(){return c}));var t=n(2),r=n(6),i=(n(0),n(113)),u=(n(121),n(122),{id:"leaf",title:"Daun (Folium)",sidebar_label:"Daun"}),l={unversionedId:"about/component/leaf",id:"about/component/leaf",isDocsHomePage:!1,title:"Daun (Folium)",description:"export const P = ({children}) => ( <p style={{",source:"@site/docs\\about\\component\\leaf.md",permalink:"/palm-oil/docs/next/about/component/leaf",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/about/component/leaf.md",version:"next",sidebar_label:"Daun",sidebar:"someSidebar",previous:{title:"Batang (Caulis)",permalink:"/palm-oil/docs/next/about/component/rod"},next:{title:"Bunga (Flos)",permalink:"/palm-oil/docs/next/about/component/flower"}},o=[{value:"Bagian Daun",id:"bagian-daun",children:[]},{value:"Kriteria Lain",id:"kriteria-lain",children:[]}],d=function(a){var e=a.children;return Object(i.b)("p",{style:{textAlign:"justify"}},e)},p={rightToc:o,P:d};function c(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Tahap perkembangan daun "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Lanceolate Daun awal yang keluar pada masa pembibitan berupa helaian daun yang utuh."),Object(i.b)("li",{parentName:"ul"},"Bifurcate Bentuk daun dan helaian daun sudah pecah tetapi bagian ujung belum terbuka."),Object(i.b)("li",{parentName:"ul"},"Pinnate Bentuk daun dengan helaian daun yang sudah membuka sempurna dengan arah anak daun keatas dan kebawah.")),Object(i.b)(d,{mdxType:"P"},"Pada umur bibit 5 bulan akan dijumpai 5 lanceolate, 4 bifurcate dan 3 pinnate. Sedangkan pada umur bibit 12 bulan akan terdapat 5 lanceolate, 4 bifurcate dan 10 pinnate."),Object(i.b)("h3",{id:"bagian-daun"},"Bagian Daun"),Object(i.b)("p",null,"Daun kelapa sawit terdiri dari beberapa bagian sebagai berikut"),Object(i.b)("blockquote",null,Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Kumpulan anak daun (leaflets) yang mempunyai helaian (lamina) dan tulang anak daun (midrip). "),Object(i.b)("li",{parentName:"ul"},"Rachis yang merupakan tempat anak daun melekat. "),Object(i.b)("li",{parentName:"ul"},"Tangkai daun (petiole) yan merupakan bagian antara daun dan batang. "),Object(i.b)("li",{parentName:"ul"},"Seludang daun (sheath) yang berfungsi sebagai pelindung dari kuncup dan memberi kekuatan pada batang."))),Object(i.b)("p",null,"Daun kelapa sawit memiliki panjang 7-8 m dan terdiri dari komponen-komponen berikut.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Panjang tangkai daun 1-1,5 m dan terdiri dari bagian daun antara batang dan titik penyisipan daun sejati pertama dan disertai duri.  "),Object(i.b)("li",{parentName:"ul"},"Tangkai antar daun (PCS) terletak pada titik penyisipan daun sejati pertama sekitar 40-90 cm2 tetapi tangkai daun ini jauh lebih luas pada titik lampiran ke batang. Tangkai antar daun merupakan indikator yang sensitif dan berguna untuk pertumbuhan vegetatif. "),Object(i.b)("li",{parentName:"ul"},"Panjang malai 5-6 m, asimetris secara berlawanan dengan permukaan abaksial dan permukaan bawah daun atau adaksial. Malai mendukung pertumbuhan daun."),Object(i.b)("li",{parentName:"ul"},"Daun (pinnae) terletak atas bawah pada sisi malai (rachis). Setiap daun berisi sekitar 150-250 lembar yang masing-masing dengan pelepah dan lamina. Lebar daun 3-5 cm di titik pertengahan dan panjang 80-120 cm.  ")),Object(i.b)(d,{mdxType:"P"},"Pembentukan tunas daun embrio dan kematian daun karena penuaan oleh alam dapat terjadi selama 4 tahun, namun durasi dari fase fungsional setelah membuka daun penuh sekitar dua tahun. Hal ini membutuhkan waktu sekitar 20-24 bulan untuk pemanjangan daun dan yang paling cepat dalam 5-6 bulan terakhir (Broekmans, 1957, Henry, 1955).  "),Object(i.b)(d,{mdxType:"P"},"Di perkebunan komersial, pelepah daun dibuang pada saat panen atau selama proses pemangkasan daun tua kurang dari 2 tahun.   Produksi daun mungkin lebih besar dari 40 daun/ tanaman/ tahun pada tanaman sangat muda (2-3 tst), tetapi tingkat produksi daun menurun cepat dan stabil 18-24 daun/ tahun pada tanaman > 4-6 tst. Daun yang tidak dipangkas sekitar 35-40 daun."),Object(i.b)("p",null,"Daun yang belum membuka atau tombak adalah indikator diagnostik yang baik untuk menduga cekaman kekeringan. Beberapa tanaman kelapa sawit mengalami kekeringan bila ditanam pada tanah yang bertekstrur tanah kasar dan kemungkinan sekitar 6 daun yang tidak membuka pada kondisi kekeringan (misalnya < 100 mm curah hujan per bulan selama > 3 bulan). Daun yang belum membuka dapat membuka karena hujan, namun tampak kuning untuk waktu yang singkat"),Object(i.b)("h3",{id:"kriteria-lain"},"Kriteria Lain"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pada tanaman muda mengeluarkan 30 daun ( umumnya disebut pelepah ) pertahun pada tanaman tua antara 28-24 pelepah per tahun."),Object(i.b)("li",{parentName:"ul"},"Panjang pelepah tanaman dewasa 9 m, anak daun 125-200 pasang dengan panjang 1-1,2 m dengan lebar tengah + 6 cm."),Object(i.b)("li",{parentName:"ul"},"Jumlah pelepah yang harus dipertahankan pada tanaman dewasa adalah 40-56 pelepah selebihnya dibuang saat panen."),Object(i.b)("li",{parentName:"ul"},"Kedudukan daun pada batang 3/8 artinya pada setiap tiga putaran terdapat 8 daun."),Object(i.b)("li",{parentName:"ul"},"Spiral kiri atau spiral kanan."),Object(i.b)("li",{parentName:"ul"},"Arah putaran dilihat dari arah atas kebawah, dan arah putaran ini tidak ada pengaruhnya terhadap produksi.")))}c.isMDXComponent=!0}}]);