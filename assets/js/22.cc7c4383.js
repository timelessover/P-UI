(window.webpackJsonp=window.webpackJsonp||[]).push([[22,40],{247:function(t,e,n){},248:function(t,e,n){"use strict";var r={name:"cl-icon",props:{name:String}},i=(n(252),n(4)),a=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("i",{class:"cl-icon--"+this.name})},[],!1,null,null,null);e.a=a.exports},249:function(t,e,n){"use strict";var r,i,a=n(258),s=RegExp.prototype.exec,c=String.prototype.replace,o=s,l=(r=/a/,i=/b*/g,s.call(r,"a"),s.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(o=function(t){var e,n,r,i,o=this;return u&&(n=new RegExp("^"+o.source+"$(?!\\s)",a.call(o))),l&&(e=o.lastIndex),r=s.call(o,t),l&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),u&&r&&r.length>1&&c.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=o},250:function(t,e,n){"use strict";var r=n(9),i=n(33),a=n(34),s=n(21),c=n(253),o=n(254),l=Math.max,u=Math.min,h=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;n(255)("replace",2,function(t,e,n,f){return[function(r,i){var a=t(this),s=null==r?void 0:r[e];return void 0!==s?s.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=f(n,t,this,e);if(i.done)return i.value;var h=r(t),v=String(this),d="function"==typeof e;d||(e=String(e));var p=h.global;if(p){var g=h.unicode;h.lastIndex=0}for(var m=[];;){var x=o(h,v);if(null===x)break;if(m.push(x),!p)break;""===String(x[0])&&(h.lastIndex=c(v,a(h.lastIndex),g))}for(var b,C="",y=0,w=0;w<m.length;w++){x=m[w];for(var $=String(x[0]),S=l(u(s(x.index),v.length),0),E=[],A=1;A<x.length;A++)E.push(void 0===(b=x[A])?b:String(b));var k=x.groups;if(d){var j=[$].concat(E,S,v);void 0!==k&&j.push(k);var O=String(e.apply(void 0,j))}else O=_($,v,S,E,k,e);S>=y&&(C+=v.slice(y,S)+O,y=S+$.length)}return C+v.slice(y)}];function _(t,e,r,a,s,c){var o=r+t.length,l=a.length,u=d;return void 0!==s&&(s=i(s),u=v),n.call(c,u,function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var v=h(u/10);return 0===v?n:v<=l?void 0===a[v-1]?i.charAt(1):a[v-1]+i.charAt(1):n}c=a[u-1]}return void 0===c?"":c})}})},251:function(t,e,n){"use strict";n(250);e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{trim:function(t){return t.replace(/^ {8}/gm,"").trim()},showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick(function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+25+"px":e.codeParent[t].style.height=0})},getCodesHeight:function(){var t=this.$el.getElementsByClassName("code-content-height");this.codeParent=this.$el.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick(function(){t.getCodesHeight()})}}},252:function(t,e,n){"use strict";var r=n(247);n.n(r).a},253:function(t,e,n){"use strict";var r=n(256)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},254:function(t,e,n){"use strict";var r=n(257),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var a=n.call(t,e);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},255:function(t,e,n){"use strict";n(261);var r=n(10),i=n(2),a=n(19),s=n(20),c=n(3),o=n(249),l=c("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var v=c(t),d=!a(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),f=d?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[v](""),!e}):void 0;if(!d||!f||"replace"===t&&!u||"split"===t&&!h){var _=/./[v],p=n(s,v,""[t],function(t,e,n,r,i){return e.exec===o?d&&!i?{done:!0,value:_.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=p[0],m=p[1];r(String.prototype,t,g),i(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},256:function(t,e,n){var r=n(21),i=n(20);t.exports=function(t){return function(e,n){var a,s,c=String(i(e)),o=r(n),l=c.length;return o<0||o>=l?t?"":void 0:(a=c.charCodeAt(o))<55296||a>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):a:t?c.slice(o,o+2):s-56320+(a-55296<<10)+65536}}},257:function(t,e,n){var r=n(31),i=n(3)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},258:function(t,e,n){"use strict";var r=n(9);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},261:function(t,e,n){"use strict";var r=n(249);n(30)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},267:function(t,e,n){var r=n(11).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(5)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},362:function(t,e,n){},363:function(t,e,n){},364:function(t,e,n){},365:function(t,e,n){},411:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{table1:[{param:"height",des:"顶栏高度",type:"string",choice:"-",def:"10vh"}],table2:[{param:"width",des:"侧边栏宽度",type:"string",choice:"-",def:"150px"}],table3:[{param:"height",des:"底栏高度",type:"string",choice:"-",def:"10vh"}]}}},i=n(4),a=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base"},[n("section",[n("h2",[t._v("Header Attributes")]),t._v(" "),n("div",{staticClass:"attr"},[n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.table1,function(e,r){return n("tr",{key:r},[n("th",[t._v(t._s(e.param))]),t._v(" "),n("th",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),n("th",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.choice))]),t._v(" "),n("td",[t._v(t._s(e.def))])])}),0)])])]),t._v(" "),n("section",[n("h2",[t._v("Aside Attributes")]),t._v(" "),n("div",{staticClass:"attr"},[n("table",[t._m(1),t._v(" "),n("tbody",t._l(t.table2,function(e,r){return n("tr",{key:r},[n("th",[t._v(t._s(e.param))]),t._v(" "),n("th",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),n("th",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.choice))]),t._v(" "),n("td",[t._v(t._s(e.def))])])}),0)])])]),t._v(" "),n("section",[n("h2",[t._v("Footer Attributes")]),t._v(" "),n("div",{staticClass:"attr"},[n("table",[t._m(2),t._v(" "),n("tbody",t._l(t.table3,function(e,r){return n("tr",{key:r},[n("th",[t._v(t._s(e.param))]),t._v(" "),n("th",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),n("th",{staticClass:"type"},[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.choice))]),t._v(" "),n("td",[t._v(t._s(e.def))])])}),0)])])])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),n("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),n("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),n("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])])}],!1,null,null,null);e.default=a.exports},493:function(t,e,n){"use strict";var r=n(362);n.n(r).a},494:function(t,e,n){"use strict";var r=n(363);n.n(r).a},495:function(t,e,n){"use strict";var r=n(364);n.n(r).a},496:function(t,e,n){"use strict";var r=n(365);n.n(r).a},534:function(t,e,n){"use strict";n.r(e);var r=n(248),i=n(251),a=(n(267),n(35),{name:"cl-container",data:function(){return{containerClass:{hasAside:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"cl-aside"===e.$options.name&&(t.containerClass.hasAside=!0)})}}),s=(n(493),n(4)),c=Object(s.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"cl-container",class:this.containerClass},[this._t("default")],2)},[],!1,null,"76b564f5",null).exports,o={name:"cl-header",props:{height:{type:String,default:"10vh"}}},l=Object(s.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"cl-header",style:{height:this.height}},[this._t("default")],2)},[],!1,null,"3b506c88",null).exports,u={name:"cl-aside",props:{width:{type:String,default:"150px"}}},h=(n(494),Object(s.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("aside",{staticClass:"cl-aside",style:{width:this.width}},[this._t("default")],2)},[],!1,null,"0c2caa2b",null).exports),v={name:"cl-main"},d=(n(495),Object(s.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("main",{staticClass:"cl-main"},[this._t("default")],2)},[],!1,null,"2472b20f",null).exports),f={name:"cl-footer",props:{height:{type:String,default:"10vh"}}},_=Object(s.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"cl-footer",style:{height:this.height}},[this._t("default")],2)},[],!1,null,"208b11fd",null).exports,p=n(411),g={mixins:[i.a],components:{ClIcon:r.a,ClContainer:c,ClHeader:l,ClMain:d,ClFooter:_,ClAside:h,Attributes:p.default},data:function(){return{codeStr:'\n<cl-container>\n  <cl-header>Header</cl-header>\n  <cl-container>\n    <cl-aside width="150px">Aside</cl-aside>\n    <cl-main>Main</cl-main>\n  </cl-container>\n  <cl-footer>Footer</cl-footer>\n</cl-container>\n        '}},computed:{baseMethods:function(){return this.trim(this.codeStr)}}},m=(n(496),Object(s.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("p",[t._v("Container 布局容器")]),t._v(" "),n("h3",[t._v("常见页面布局")]),t._v(" "),n("p",[t._v("用于布局的容器组件，方便快速搭建页面的基本结构")]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("cl-container",[n("cl-header",{attrs:{height:"10vh"}},[t._v("Header")]),t._v(" "),n("cl-container",[n("cl-aside",{attrs:{width:"150px"}},[t._v("Aside")]),t._v(" "),n("cl-main",[t._v("Main")])],1),t._v(" "),n("cl-footer",[t._v("Footer")])],1)],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.baseMethods))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("cl-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow[0]?"arrow-down":"arrow-up"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("Attributes")],1)},[],!1,null,"4b74e5c4",null));e.default=m.exports}}]);