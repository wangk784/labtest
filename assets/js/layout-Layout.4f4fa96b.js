(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,n){},202:function(t,e,n){"use strict";var r=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),a=(n(226),n(1)),s=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},226:function(t,e,n){"use strict";n(195)},230:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(203),a=n(222);const s=(t,e)=>t&&"object"==typeof t.config?Object.keys(t.config).filter(t=>e.startsWith(t)).sort((t,e)=>e.length-t.length):[],o=a.a.extend({data:()=>({encryptPasswordConfig:{}}),computed:{pathEncryptMatchKeys(){return s(this.encryptOptions,this.$route.path)},isPathEncrypted(){if(0===this.pathEncryptMatchKeys.length)return!1;const{config:t}=this.encryptOptions;return this.pathEncryptMatchKeys.every(e=>{const n=t[e],a="string"==typeof n?[n]:n;return!this.encryptPasswordConfig[e]||a.every(t=>!Object(r.compareSync)(this.encryptPasswordConfig[e],t))})}},mounted(){const t=localStorage.getItem("encryptConfig");t&&(this.encryptPasswordConfig=JSON.parse(t))},methods:{checkPathPassword(t){const{config:e}=this.$themeConfig.encrypt;for(const n of this.pathEncryptMatchKeys){const a=e[n];if(("string"==typeof a?[a]:a).filter(e=>Object(r.compareSync)(t,e))){this.$set(this.encryptPasswordConfig,n,t),localStorage.setItem("encryptConfig",JSON.stringify(this.encryptPasswordConfig));break}}}}})},292:function(t,e,n){},293:function(t,e,n){},297:function(t,e,n){},298:function(t,e,n){},299:function(t,e,n){},399:function(t,e,n){"use strict";n(292)},400:function(t,e,n){"use strict";n(293)},404:function(t,e,n){"use strict";n(297)},405:function(t,e,n){"use strict";n(298)},406:function(t,e,n){"use strict";n(299)},420:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(5),s=n(227),o=n(202),i=n(185);var c=r.a.extend({name:"Home",components:{MyTransition:o.a,NavLink:i.a},computed:{actionLinks(){const{action:t}=this.$frontmatter;return Array.isArray(t)?t:[t]}},methods:{navigate(t){((t,e,n)=>{if(t)if(t.startsWith("/"))n.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const r=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${r}/${encodeURI(t)}`)}})(t,this.$router,this.$route)}}}),l=(n(399),n(1)),p=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[n("MyTransition",[t.$frontmatter.heroImage?n("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("MyTransition",[t.$frontmatter.darkHeroImage?n("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("div",{staticClass:"hero-info"},[n("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?n("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.08}},[n("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?n("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return n("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?n("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(e,r){return[e.link?n("div",{key:r,staticClass:"feature link",class:"feature"+r%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(n){return t.navigate(e.link)}}},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])]):n("div",{key:r,staticClass:"feature",class:"feature"+r%9},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])]}))],2):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.24}},[n("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports,u=n(180);const h=(t,{text:e,link:n,level:r})=>t("RouterLink",{props:{to:n,activeClass:"",exactActiveClass:""},class:{"anchor-link":!0,[r?"heading"+r:""]:r}},[t("div",{},[e])]),d=(t,{children:e,route:n})=>t("ul",{class:"anchor-list"},e.map(e=>{const r=Object(u.e)(n,`${n.path}#${e.slug}`);return t("li",{class:{anchor:!0,active:r}},[h(t,{text:e.title,link:`${n.path}#${e.slug}`,level:e.level})])}));var f=r.a.extend({name:"Anchor",functional:!0,props:{items:{type:Array,default:()=>[]}},render:(t,{props:e,parent:{$page:n,$route:r}})=>t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[t("div",{class:"anchor-wrapper"},[e.items.length?d(t,{children:e.items,route:r}):n.headers?d(t,{children:n.headers,route:r}):null])])])}),m=(n(400),Object(l.a)(f,void 0,void 0,!1,null,null,null).exports),y=n(408),g=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,v=r.a.extend({name:"PageMeta",components:{EditIcon:g},computed:{locales(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.contributor&&!this.$page.frontmatter.contributor?[]:this.$page.contributors||[]},contributorsText(){return this.locales.contributor},updateTime(){return!1===this.$page.frontmatter.updateTime||!1===this.$themeConfig.updateTime&&!this.$page.frontmatter.updateTime?"":this.$page.updateTime||""},updateTimeText(){return this.locales.updateTime},editLink(){const t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,{repo:e,docsRepo:n}=this.$themeConfig;return!(!t||!e&&!n||!this.$page.relativePath)&&this.createEditLink()},editLinkText(){return this.locales.editLink}},methods:{createEditLink(){const{repo:t="",docsRepo:e=t,docsDir:n="",docsBranch:r="main"}=this.$themeConfig;if(/bitbucket.org/u.test(e))return`${e.replace(u.a,"")}/src/${r}/${n?n.replace(u.a,"")+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`;if(/gitlab.com/u.test(e))return`${e.replace(u.a,"")}/-/edit/${r}/${n?n.replace(u.a,"")+"/":""}${this.$page.relativePath}`;return`${(u.j.test(e)?e:"https://github.com/"+e).replace(u.a,"")}/edit/${r}/${n?n.replace(u.a,"")+"/":""}${this.$page.relativePath}`}}}),_=(n(404),Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-meta"},[t.editLink?n("div",{staticClass:"edit-link"},[n("EditIcon"),t._v(" "),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.updateTime?n("div",{staticClass:"meta-item update-time"},[n("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),n("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?n("div",{staticClass:"meta-item contributors"},[n("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),n("span",{staticClass:"info"},[t._l(t.contributors,(function(e,r){return[n("span",{key:r,staticClass:"contributor",attrs:{title:"email: "+e.email}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r!==t.contributors.length-1?[t._v(", ")]:t._e()]}))],2)]):t._e()])}),[],!1,null,null,null).exports),b=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon next-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,$=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon prev-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,C=n(231);const k=(t,e)=>{for(const n of t)"group"===n.type?k(n.children||[],e):e.push(n)},x=(t,{themeConfig:e,page:n,route:r,site:a,sidebarItems:s})=>{const o=e[t+"Links"],i=n.frontmatter[t];return!1!==o&&!1!==i&&("string"==typeof i?Object(C.c)(a.pages,Object(u.k)(i,r.path)):((t,e,n)=>{const r=[];k(e,r);for(let e=0;e<r.length;e++){const a=r[e];if("page"===a.type&&a.path===decodeURIComponent(t.path))return r[e+n]}return!1})(n,s,"prev"===t?-1:1))};var w=r.a.extend({name:"PageNav",components:{NextIcon:b,PrevIcon:$},props:{sidebarItems:{type:Array,default:()=>[]}},computed:{prev(){return x("prev",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})},next(){return x("next",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})}}}),P=(n(405),Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},["external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[n("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[n("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("OutboundLink"),t._v(" "),n("NextIcon")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("NextIcon")],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),T=n(229),I=n(230).a.extend({name:"Page",components:{Anchor:m,MyTransition:o.a,PageInfo:y.a,PageMeta:_,PageNav:P,Password:T.a},props:{sidebarItems:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]}},data:()=>({password:""}),computed:{pagePassword(){const{password:t}=this.$frontmatter;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted(){return this.password===this.pagePassword},pageInfoProps(){return{titleIcon:!0,titleIconPrefix:this.$themeConfig.iconPrefix,items:this.$themeConfig.pageInfo,categoryPath:"/category/$category/",tagPath:"/tag/$tag/",defaultAuthor:this.$themeConfig.author||""}}}}),L=(n(406),Object(l.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[n("MyTransition",[n("BreadCrumb",{key:t.$route.path,attrs:{show:!1!==t.$themeConfig.breadcrumb,icon:!1!==t.$themeConfig.breadcrumbIcon,"icon-prefix":t.$themeConfig.iconPrefix}})],1),t._v(" "),t._t("top"),t._v(" "),n("MyTransition",{attrs:{delay:.04}},[n("PageInfo",t._b({key:t.$route.path},"PageInfo",t.pageInfoProps,!1))],1),t._v(" "),t.pagePassword&&!t.pageDescrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}})],1):t.isPathEncrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":t.checkPathPassword}})],1):[n("MyTransition",{attrs:{delay:.12}},[n("Anchor",{key:t.$route.path})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-top"):t._e(),t._v(" "),n("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[n("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-bottom"):t._e(),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[n("PageMeta",{key:t.$route.path})],1),t._v(" "),n("MyTransition",{attrs:{delay:.14}},[n("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[t.$themeConfig.comment?n("CommentService",{key:t.$route.path}):t._e()],1)],t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),M=r.a.extend({name:"Layout",components:{BlogInfo:a.a,BlogHome:a.a,Common:s.a,ContentBottom:a.a,ContentTop:a.a,Home:p,NavbarCenter:a.a,NavbarEnd:a.a,NavbarStart:a.a,Page:L,PageBottom:a.a,PageTop:a.a,SidebarBottom:a.a,SidebarCenter:a.a,SidebarTop:a.a}}),S=Object(l.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([{key:"navbar-start",fn:function(){return[t._t("navbar-start",(function(){return[n("NavbarStart"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-start"}})]}))]},proxy:!0},{key:"navbar-center",fn:function(){return[t._t("navbar-center",(function(){return[n("NavbarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-center"}})]}))]},proxy:!0},{key:"navbar-end",fn:function(){return[t._t("navbar-end",(function(){return[n("NavbarEnd"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-end"}})]}))]},proxy:!0},{key:"sidebar-top",fn:function(){return[t._t("sidebar-top",(function(){return[n("SidebarTop"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-top"}})]}))]},proxy:!0},{key:"sidebar-center",fn:function(){return[t._t("sidebar-center",(function(){return[n("SidebarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-center"}})]}))]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[t._t("sidebar-bottom",(function(){return[n("SidebarBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-bottom"}})]}))]},proxy:!0},{key:"default",fn:function(e){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?n("BlogHome"):t.$frontmatter.home?n("Home"):n("Page",{attrs:{headers:e.headers,"sidebar-items":e.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top",(function(){return[n("PageTop"),t._v(" "),n("Content",{attrs:{"slot-key":"page-top"}})]}))]},proxy:!0},{key:"content-top",fn:function(){return[t._t("content-top",(function(){return[n("ContentTop"),t._v(" "),n("Content",{attrs:{"slot-key":"content-top"}})]}))]},proxy:!0},{key:"content-bottom",fn:function(){return[t._t("content-bottom",(function(){return[n("ContentBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"content-bottom"}})]}))]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom",(function(){return[n("PageBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"page-bottom"}})]}))]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=S.exports}}]);