(window.webpackJsonp=window.webpackJsonp||[]).push([[14,37],{247:function(e,n,t){},248:function(e,n,t){"use strict";var a={name:"cl-icon",props:{name:String}},l=(t(252),t(4)),i=Object(l.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("i",{class:"cl-icon--"+this.name})},[],!1,null,null,null);n.a=i.exports},251:function(e,n,t){"use strict";t(250);n.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{trim:function(e){return e.replace(/^ {8}/gm,"").trim()},showCode:function(e){var n=this;this.$set(this.isShow,e,!this.isShow[e]),this.$nextTick(function(){!0===n.isShow[e]?n.codeParent[e].style.height=+n.codeHeightArr[e]+25+"px":n.codeParent[e].style.height=0})},getCodesHeight:function(){var e=this.$el.getElementsByClassName("code-content-height");this.codeParent=this.$el.getElementsByClassName("code-content");for(var n=e.length,t=0;t<n;t++)this.codeHeightArr.push(e[t].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var e=this;this.$nextTick(function(){e.getCodesHeight()})}}},252:function(e,n,t){"use strict";var a=t(247);t.n(a).a},260:function(e,n,t){"use strict";var a=t(1),l=t(6),i=t(31),s=t(265),r=t(32),o=t(19),c=t(262).f,u=t(259).f,v=t(11).f,d=t(263).trim,h=a.Number,p=h,b=h.prototype,f="Number"==i(t(36)(b)),m="trim"in String.prototype,g=function(e){var n=r(e,!1);if("string"==typeof n&&n.length>2){var t,a,l,i=(n=m?n.trim():d(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(t=n.charCodeAt(2))||120===t)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:a=2,l=49;break;case 79:case 111:a=8,l=55;break;default:return+n}for(var s,o=n.slice(2),c=0,u=o.length;c<u;c++)if((s=o.charCodeAt(c))<48||s>l)return NaN;return parseInt(o,a)}}return+n};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var n=arguments.length<1?0:e,t=this;return t instanceof h&&(f?o(function(){b.valueOf.call(t)}):"Number"!=i(t))?s(new p(g(n)),t,h):g(n)};for(var _,y=t(5)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)l(p,_=y[w])&&!l(h,_)&&v(h,_,u(p,_));h.prototype=b,b.constructor=h,t(10)(a,"Number",h)}},263:function(e,n,t){var a=t(30),l=t(20),i=t(19),s=t(264),r="["+s+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),u=function(e,n,t){var l={},r=i(function(){return!!s[e]()||"​"!="​"[e]()}),o=l[e]=r?n(v):s[e];t&&(l[t]=o),a(a.P+a.F*r,"String",l)},v=u.trim=function(e,n){return e=String(l(e)),1&n&&(e=e.replace(o,"")),2&n&&(e=e.replace(c,"")),e};e.exports=u},264:function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},271:function(e,n,t){},281:function(e,n,t){e.exports=t(282)},282:function(e,n,t){t(277),t(283),e.exports=t(272).Array.from},283:function(e,n,t){"use strict";var a=t(306),l=t(297),i=t(308),s=t(284),r=t(285),o=t(307),c=t(286),u=t(309);l(l.S+l.F*!t(287)(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,l,v,d=i(e),h="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,f=void 0!==b,m=0,g=u(d);if(f&&(b=a(b,p>2?arguments[2]:void 0,2)),null==g||h==Array&&r(g))for(t=new h(n=o(d.length));n>m;m++)c(t,m,f?b(d[m],m):d[m]);else for(v=g.call(d),t=new h;!(l=v.next()).done;m++)c(t,m,f?s(v,b,[l.value,m],!0):l.value);return t.length=m,t}})},284:function(e,n,t){var a=t(280);e.exports=function(e,n,t,l){try{return l?n(a(t)[0],t[1]):n(t)}catch(n){var i=e.return;throw void 0!==i&&a(i.call(e)),n}}},285:function(e,n,t){var a=t(276),l=t(269)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||i[l]===e)}},286:function(e,n,t){"use strict";var a=t(295),l=t(298);e.exports=function(e,n,t){n in e?a.f(e,n,l(0,t)):e[n]=t}},287:function(e,n,t){var a=t(269)("iterator"),l=!1;try{var i=[7][a]();i.return=function(){l=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,n){if(!n&&!l)return!1;var t=!1;try{var i=[7],s=i[a]();s.next=function(){return{done:t=!0}},i[a]=function(){return s},e(i)}catch(e){}return t}},288:function(e,n,t){e.exports=t(289)},289:function(e,n,t){t(311),t(277),e.exports=t(290)},290:function(e,n,t){var a=t(310),l=t(269)("iterator"),i=t(276);e.exports=t(272).isIterable=function(e){var n=Object(e);return void 0!==n[l]||"@@iterator"in n||i.hasOwnProperty(a(n))}},292:function(e,n,t){"use strict";var a=t(271);t.n(a).a},293:function(e,n,t){"use strict";t(260);var a={name:"cl-input",props:{value:{type:[String,Number],default:""},inputValue:{},type:{type:String,default:"text"},placeholder:{type:String,default:""},icon:{type:String},iconLeft:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},label:{type:String},labelLeft:{type:String},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},suffixIcon:String,prefixIcon:String},data:function(){return{isShow:!1,focused:!1,passwordVisible:!1}},computed:{classObject:function(){return["cl-input",{"is-disabled":this.disabled},{"cl-input--suffix":this.suffixIcon||this.clearable||this.showPassword},{"cl-input--prefix":this.prefixIcon}]},inputDisabled:function(){return this.disabled},showClear:function(){return this.clearable&&this.value&&(this.focused||this.isShow)},valueEmpty:function(){return/^\s*$/.test(this.value)},getSuffixVisible:function(){return this.suffixIcon||this.showClear||this.showPassword},showPwdVisible:function(){return this.showPassword&&this.value}},methods:{updateValue:function(e){this.changeHandler(e),this.$emit("change",e)},clearHandler:function(){this.changeHandler("")},changeHandler:function(e){this.$emit("input",e)},clear:function(){"cl-cascader"===this.$parent.$options._componentTag?this.$parent.$emit("input",[]):(this.$emit("input",""),this.$emit("change",""),this.$emit("clear"))},handlePasswordVisible:function(){this.passwordVisible=!this.passwordVisible},handleBlur:function(e){this.focused=!1,this.$emit("blur",e)},handleFocus:function(e){this.focused=!0,this.$emit("focus",e)}}},l=(t(292),t(4)),i=Object(l.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.classObject,on:{mouseenter:function(n){e.isShow=!0},mouseleave:function(n){e.isShow=!1}}},[t("input",{staticClass:"cl-input__inner",attrs:{type:e.showPassword?e.passwordVisible?"text":"password":e.type,placeholder:e.placeholder,disabled:e.inputDisabled,readonly:e.readonly},domProps:{value:e.value?e.value:e.inputValue},on:{input:function(n){return e.updateValue(n.target.value)},blur:e.handleBlur,focus:e.handleFocus}}),e._v(" "),e.$slots.prefix||e.prefixIcon?t("span",{staticClass:"cl-input__prefix"},[e._t("prefix"),e._v(" "),e.prefixIcon?t("i",{staticClass:"cl-input__icon",class:"cl-icon--"+e.prefixIcon}):e._e()],2):e._e(),e._v(" "),e.$slots.suffix||e.getSuffixVisible?t("span",{staticClass:"cl-input__suffix"},[t("span",{staticClass:"cl-input__suffix-inner"},[e.showClear&&e.showPwdVisible?e._e():[e._t("suffix"),e._v(" "),e.suffixIcon?t("i",{staticClass:"cl-input__icon",class:"cl-icon--"+e.suffixIcon}):e._e()],e._v(" "),e.showClear?t("i",{staticClass:"cl-input-icon cl-icon--circle-close cl-input__clear",on:{click:function(n){return n.stopPropagation(),e.clear(n)}}}):e._e(),e._v(" "),e.showPwdVisible?t("i",{staticClass:"cl-input__icon cl-icon--view cl-input__clear",on:{click:e.handlePasswordVisible}}):e._e()],2)]):e._e()])},[],!1,null,"35f7142c",null);n.a=i.exports},294:function(e,n,t){"use strict";var a=t(304),l=t.n(a);var i=t(281),s=t.n(i),r=t(288),o=t.n(r);function c(e){return function(e){if(l()(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(o()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(n,"a",function(){return c})},356:function(e,n,t){},357:function(e,n,t){},358:function(e,n,t){},408:function(e,n,t){"use strict";t.r(n);var a={data:function(){return{table:[{param:"value/v-model",des:"选中项绑定值",type:"string/number/boolean",choice:"-",def:"-"},{param:"options",des:"可选项数据源",type:"array",choice:"-",def:"-"},{param:"placeholder",des:"输入框占位文本",type:"boolean",choice:"string",def:"请选择"},{param:"clearable",des:"是否支持清空选项",type:"boolean",choice:"-",def:"false"}],table1:[{name:"change",des:"当选中节点变化时触发",cb:"选中节点的值"}]}}},l=t(4),i=Object(l.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"base"},[t("section",[t("h2",[e._v("Attributes")]),e._v(" "),t("div",{staticClass:"attr"},[t("table",[e._m(0),e._v(" "),t("tbody",e._l(e.table,function(n,a){return t("tr",{key:a},[t("th",[e._v(e._s(n.param))]),e._v(" "),t("th",{staticClass:"des"},[e._v(e._s(n.des))]),e._v(" "),t("th",{staticClass:"type"},[e._v(e._s(n.type))]),e._v(" "),t("td",[e._v(e._s(n.choice))]),e._v(" "),t("td",[e._v(e._s(n.def))])])}),0)])])]),e._v(" "),t("section",[t("h2",[e._v("Events")]),e._v(" "),t("div",{staticClass:"attr"},[t("table",[e._m(1),e._v(" "),t("tbody",e._l(e.table1,function(n,a){return t("tr",{key:a},[t("th",[e._v(e._s(n.name))]),e._v(" "),t("th",{staticClass:"des"},[e._v(e._s(n.des))]),e._v(" "),t("th",{staticClass:"type"},[e._v(e._s(n.cb))])])}),0)])])])])},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",[t("tr",[t("th",[e._v("参数")]),e._v(" "),t("th",{staticClass:"des"},[e._v("说明")]),e._v(" "),t("th",{staticClass:"type"},[e._v("类型")]),e._v(" "),t("th",[e._v("可选值")]),e._v(" "),t("th",[e._v("默认值")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("thead",[n("tr",[n("th",[this._v("事件名称")]),this._v(" "),n("th",{staticClass:"des"},[this._v("说明")]),this._v(" "),n("th",{staticClass:"type"},[this._v("回调参数")])])])}],!1,null,null,null);n.default=i.exports},483:function(e,n,t){"use strict";var a=t(356);t.n(a).a},484:function(e,n,t){"use strict";var a=t(357);t.n(a).a},485:function(e,n,t){"use strict";var a=t(358);t.n(a).a},536:function(e,n,t){"use strict";t.r(n);t(35),t(250);var a=t(248),l=t(251),i=t(294),s=(t(260),{name:"cl-cascader-items",components:{Icon:a.a},props:{items:{type:Array},selected:{type:Array,default:function(){return[]}},level:{type:Number,default:0}},inject:["root"],data:function(){return{rightItems:null,label:{}}},watch:{selected:function(e){e[this.level]||(this.rightItems=null)}},methods:{rightArrowVisible:function(e){return e.children},onClickLabel:function(e){this.rightItems=e.children;JSON.parse(JSON.stringify(e));this.$emit("update:selected",{label:e.label,level:this.level}),this.items[0].children||this.root.close()},onUpdateSelected:function(e){this.$emit("update:selected",e)}}}),r=(t(483),t(4)),o=Object(r.a)(s,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"cl-cascader-items"},[t("div",{staticClass:"left"},e._l(e.items,function(n,a){return t("div",{key:a,staticClass:"label",class:{active:e.selected.indexOf(n.label)>-1},on:{click:function(t){return e.onClickLabel(n)}}},[t("span",{staticClass:"name"},[e._v(e._s(n.label))]),e._v(" "),t("span",{staticClass:"icons"},[[e.rightArrowVisible(n)?t("icon",{staticClass:"next",attrs:{name:"arrow-right"}}):e._e()]],2)])}),0),e._v(" "),e.rightItems?t("div",{staticClass:"right"},[t("cl-cascader-items",{attrs:{items:e.rightItems,level:e.level+1,selected:e.selected},on:{"update:selected":e.onUpdateSelected}})],1):e._e()])},[],!1,null,"78d6cee4",null).exports,c=function(e){var n=e.target;u.forEach(function(e){e.el===n||e.el.contains(n)||e.callback()})};document.addEventListener("click",c);var u=[],v={bind:function(e,n,t){u.push({el:e,callback:n.value})}},d={name:"cl-cascade",components:{CascaderItems:o,ClInput:t(293).a},directives:{ClickOutside:v},props:{value:{type:Array,default:function(){return[]}},options:{type:Array},clearable:{type:Boolean},placeholder:{type:[String,Number],default:"请选择"}},data:function(){return{popoverVisible:!1,level:0}},provide:function(){return{root:this}},computed:{result:function(){return this.value.map(function(e){return e}).join("/")}},destroyed:function(){document.removeEventListener("click",c)},methods:{close:function(){this.popoverVisible=!1},onUpdateSelected:function(e){var n=Object(i.a)(this.value);n[e.level]=e.label,n=n.slice(0,e.level+1),this.$emit("change",e.label),this.$emit("input",n)}}},h=(t(484),Object(r.a)(d,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.close,expression:"close"}],ref:"cascader",staticClass:"cl-cascader"},[t("cl-input",{attrs:{placeholder:e.placeholder,readonly:"",clearable:e.clearable},nativeOn:{click:function(n){e.popoverVisible=!e.popoverVisible}},model:{value:e.result,callback:function(n){e.result=n},expression:"result"}}),e._v(" "),e.popoverVisible?t("div",{staticClass:"cl-popover-wrapper"},[t("cascader-items",{staticClass:"popover",attrs:{items:e.options,selected:e.value},on:{"update:selected":e.onUpdateSelected}})],1):e._e()],1)},[],!1,null,"3662b45e",null).exports),p=t(408),b={name:"tabs-demo",mixins:[l.a],components:{ClIcon:a.a,ClCascader:h,Attributes:p.default},data:function(){return{codeStr:'<div class="block">\n    <cl-cascader v-model="value" :options="options" @change="handleChange"></cl-cascader>\n</div>\n    \ndata() {\n  return {\n    value: [],\n    options: [\n        {\n          value: "zhinan",\n          label: "指南",\n          children: [\n            {\n              value: "shejiyuanze",\n              label: "设计原则",\n              children: [\n                {\n                  value: "yizhi",\n                  label: "一致"\n                },\n                {\n                  value: "fankui",\n                  label: "反馈"\n                },\n                {\n                  value: "xiaolv",\n                  label: "效率"\n                },\n                {\n                  value: "kekong",\n                  label: "可控"\n                }\n              ]\n            },\n            {\n              value: "daohang",\n              label: "导航",\n              children: [\n                {\n                  value: "cexiangdaohang",\n                  label: "侧向导航"\n                },\n                {\n                  value: "dingbudaohang",\n                  label: "顶部导航"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          value: "zujian",\n          label: "组件",\n          children: [\n            {\n              value: "basic",\n              label: "Basic",\n              children: [\n                {\n                  value: "layout",\n                  label: "Layout 布局"\n                },\n                {\n                  value: "color",\n                  label: "Color 色彩"\n                },\n                {\n                  value: "typography",\n                  label: "Typography 字体"\n                },\n                {\n                  value: "icon",\n                  label: "Icon 图标"\n                },\n                {\n                  value: "button",\n                  label: "Button 按钮"\n                }\n              ]\n            },\n            {\n              value: "form",\n              label: "Form",\n              children: [\n                {\n                  value: "radio",\n                  label: "Radio 单选框"\n                },\n                {\n                  value: "checkbox",\n                  label: "Checkbox 多选框"\n                },\n                {\n                  value: "input",\n                  label: "Input 输入框"\n                },\n                {\n                  value: "input-number",\n                  label: "InputNumber 计数器"\n                },\n                {\n                  value: "select",\n                  label: "Select 选择器"\n                },\n                {\n                  value: "cascader",\n                  label: "Cascader 级联选择器"\n                },\n                {\n                  value: "switch",\n                  label: "Switch 开关"\n                },\n                {\n                  value: "slider",\n                  label: "Slider 滑块"\n                },\n                {\n                  value: "time-picker",\n                  label: "TimePicker 时间选择器"\n                },\n                {\n                  value: "date-picker",\n                  label: "DatePicker 日期选择器"\n                },\n                {\n                  value: "datetime-picker",\n                  label: "DateTimePicker 日期时间选择器"\n                },\n                {\n                  value: "upload",\n                  label: "Upload 上传"\n                },\n                {\n                  value: "rate",\n                  label: "Rate 评分"\n                },\n                {\n                  value: "form",\n                  label: "Form 表单"\n                }\n              ]\n            },\n            {\n              value: "data",\n              label: "Data",\n              children: [\n                {\n                  value: "table",\n                  label: "Table 表格"\n                },\n                {\n                  value: "tag",\n                  label: "Tag 标签"\n                },\n                {\n                  value: "progress",\n                  label: "Progress 进度条"\n                },\n                {\n                  value: "tree",\n                  label: "Tree 树形控件"\n                },\n                {\n                  value: "pagination",\n                  label: "Pagination 分页"\n                },\n                {\n                  value: "badge",\n                  label: "Badge 标记"\n                }\n              ]\n            },\n            {\n              value: "notice",\n              label: "Notice",\n              children: [\n                {\n                  value: "alert",\n                  label: "Alert 警告"\n                },\n                {\n                  value: "loading",\n                  label: "Loading 加载"\n                },\n                {\n                  value: "message",\n                  label: "Message 消息提示"\n                },\n                {\n                  value: "message-box",\n                  label: "MessageBox 弹框"\n                },\n                {\n                  value: "notification",\n                  label: "Notification 通知"\n                }\n              ]\n            },\n            {\n              value: "navigation",\n              label: "Navigation",\n              children: [\n                {\n                  value: "menu",\n                  label: "NavMenu 导航菜单"\n                },\n                {\n                  value: "tabs",\n                  label: "Tabs 标签页"\n                },\n                {\n                  value: "breadcrumb",\n                  label: "Breadcrumb 面包屑"\n                },\n                {\n                  value: "dropdown",\n                  label: "Dropdown 下拉菜单"\n                },\n                {\n                  value: "steps",\n                  label: "Steps 步骤条"\n                }\n              ]\n            },\n            {\n              value: "others",\n              label: "Others",\n              children: [\n                {\n                  value: "dialog",\n                  label: "Dialog 对话框"\n                },\n                {\n                  value: "tooltip",\n                  label: "Tooltip 文字提示"\n                },\n                {\n                  value: "popover",\n                  label: "Popover 弹出框"\n                },\n                {\n                  value: "card",\n                  label: "Card 卡片"\n                },\n                {\n                  value: "carousel",\n                  label: "Carousel 走马灯"\n                },\n                {\n                  value: "collapse",\n                  label: "Collapse 折叠面板"\n                }\n              ]\n            }\n          ]\n        },\n        {\n          value: "ziyuan",\n          label: "资源",\n          children: [\n            {\n              value: "axure",\n              label: "Axure Components"\n            },\n            {\n              value: "sketch",\n              label: "Sketch Templates"\n            },\n            {\n              value: "jiaohu",\n              label: "组件交互文档"\n            }\n          ]\n        }\n      ]\n   }  \n},\nmethods: {\n    handleChange(value) {\n      console.log(value);\n    }\n},\n    \n        ',value:[],options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}]}},computed:{baseMethods:function(){return this.codeStr.replace(/^ {20}/gm,"").trim()}},methods:{handleChange:function(e){console.log(e)}},mounted:function(){document.querySelectorAll(".component-wrapper-demo").forEach(function(e){e&&e.childNodes.forEach(function(e){e.classList&&e.classList.add("wave")})})}},f=(t(485),Object(r.a)(b,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demo"},[t("p",[e._v("分隔内容上有关联但属于不同类别的数据集合")]),e._v(" "),t("h3",[e._v("基础用法")]),e._v(" "),t("p",[e._v("基础的标签页")]),e._v(" "),t("div",{staticClass:"component-wrapper"},[t("div",{staticClass:"component-wrapper-demo"},[t("div",{staticClass:"block"},[t("cl-cascader",{attrs:{options:e.options},on:{change:e.handleChange},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1)]),e._v(" "),t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[t("div",{staticClass:"code-content-height"},[t("pre",[t("code",{staticClass:"html"},[e._v(e._s(e.baseMethods))])])])]),e._v(" "),t("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return e.showCode(0)}}},[t("cl-icon",{staticClass:"icon-down",attrs:{name:!1===e.isShow[0]?"arrow-down":"arrow-up"}}),e._v(" "),t("span",{staticClass:"lock-code-word"},[e._v(e._s(!1===e.isShow[0]?"显示代码":"隐藏代码"))])],1)]),e._v(" "),t("Attributes")],1)},[],!1,null,"5b914854",null));n.default=f.exports}}]);