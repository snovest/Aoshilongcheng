(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{351:function(t,e,o){var content=o(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("520c3dc9",content,!0,{sourceMap:!1})},352:function(t,e,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("55a1f84b",content,!0,{sourceMap:!1})},353:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("5937b2cd",content,!0,{sourceMap:!1})},354:function(t,e,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("5ccd6d4f",content,!0,{sourceMap:!1})},355:function(t,e,o){var content=o(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("606327d1",content,!0,{sourceMap:!1})},356:function(t,e,o){"use strict";o(351)},357:function(t,e,o){var r=o(85)(!1);r.push([t.i,".banner{padding:10px;display:flex;flex-direction:row;justify-content:space-between;box-sizing:border-box;background-size:contain;background-repeat:no-repeat}.banner.fixed{position:fixed;left:0;right:0;z-index:999}.banner.image{padding:0}.banner>.info{flex:1;display:flex;flex-direction:row;align-items:center}.banner>.info>.title{color:#333;font-size:13px;font-weight:700}.banner>.info>.title>div{margin-top:5px;font-size:12px;font-weight:400;color:#999}.banner>.info>.el-image{height:100%;border-radius:8px;margin-right:5px}.banner>.info>.el-image>.el-image__error{text-align:center;font-size:24px}",""]),t.exports=r},358:function(t,e,o){"use strict";o(352)},359:function(t,e,o){var r=o(85)(!1);r.push([t.i,".image-dialog.vars-dialog>.el-dialog>.el-dialog__body>.vars{position:absolute;margin-top:-20%;width:45%;line-height:1.5;text-align:center;white-space:pre-line}.vars-dialog .el-dialog__body{display:flex;justify-content:center;align-items:center;position:relative}",""]),t.exports=r},360:function(t,e,o){"use strict";o(353)},361:function(t,e,o){var r=o(85)(!1);r.push([t.i,".fixed{position:fixed;left:0;right:0;z-index:9999}.el-image__error{height:200px;font-size:xx-large}",""]),t.exports=r},362:function(t,e,o){"use strict";o(354)},363:function(t,e,o){var r=o(85)(!1);r.push([t.i,".turntable{width:100%;position:relative}.el-image{width:100%}.el-image__error{height:100%;font-size:xx-large}.pointer{position:absolute}.pointer .el-image{height:100%}",""]),t.exports=r},364:function(t,e,o){"use strict";o(355)},365:function(t,e,o){var r=o(85)(!1);r.push([t.i,".fixed{position:fixed;left:0;right:0;z-index:9999}.el-image__error{height:200px;font-size:xx-large}",""]),t.exports=r},366:function(t,e,o){"use strict";o.r(e);o(52),o(38),o(51),o(16),o(87),o(39),o(88);var r=o(30);o(65),o(29);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"Weight",data:function(){return{imageMode:!0,height:60,background:"https://5ishouyou.cn/static/jXi_zXQCN9Fe",fit:"cover",icon:"",name:"傲世龙城",summary:"产品描述",apk:"https://sdkapi.ezjhy.com/url/4esFXNQZ.apk",ios:"https://tg.ezjhy.com/html/h5.html?id=a12b97c1-87f1-48c5-aee0-57c57df51f7d",fixed:!0,position:"top",autoDownload:!1,autoTime:5,buttonText:"立即下载"}},computed:{buttonStyle:function(){return l(l(l({},this.buttonBackground),this.buttonFont),this.buttonBorder)}},mounted:function(){var t=this;this.autoDownload&&setTimeout((function(){umami&&umami.trackEvent("auto","click"),t.download()}),1e3*this.autoTime)},methods:{download:function(){var t=this.apk;/iPhone|iPod|iPad|Mac OS/gi.test(navigator.userAgent)&&(t=this.ios),window.location.href=t}}},d=(o(356),o(53)),component=Object(d.a)(c,(function(){var t,e,o=this,r=o.$createElement,n=o._self._c||r;return o.imageMode?n("div",{class:"umami--click--banner-download banner image"+(o.fixed?" fixed":""),style:(t={height:o.height},t[o.position]=0,t),on:{click:o.download}},[n("el-image",{attrs:{fit:o.fit,src:o.background}},[n("i",{staticClass:"el-image__error el-icon-picture-outline",attrs:{slot:"error"},slot:"error"}),o._v(" "),n("i",{staticClass:"el-image__error el-icon-picture-outline",attrs:{slot:"placeholder"},slot:"placeholder"})])],1):n("div",{class:"banner"+(o.fixed?" fixed":""),style:(e={background:/^http/.test(o.background)?"url("+o.background+")":o.background,height:o.height+"px"},e[o.position]=0,e)},[n("div",{staticClass:"info"},[n("el-image",{style:{width:o.height-20+"px"},attrs:{fit:o.fit,src:o.icon}},[n("i",{staticClass:"el-image__error el-icon-picture-outline",attrs:{slot:"error"},slot:"error"}),o._v(" "),n("i",{staticClass:"el-image__error el-icon-picture-outline",attrs:{slot:"placeholder"},slot:"placeholder"})]),o._v(" "),n("div",{staticClass:"title"},[o._v("\n      "+o._s(o.name)+"\n      "),n("div",[o._v(o._s(o.summary))])])],1),o._v(" "),n("el-button",{staticClass:"umami--click--banner-download",style:o.buttonStyle,on:{click:o.download}},[o._v(o._s(o.buttonText)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,o){"use strict";o.r(e);o(52),o(38),o(51),o(16),o(87),o(39),o(88),o(66),o(31),o(67),o(40),o(68),o(69),o(41);var r=o(30);o(65),o(29),o(174),o(89),o(235),o(234),o(123);function n(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,d=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){d=!0,n=t},f:function(){try{c||null==o.return||o.return()}finally{if(d)throw n}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Weight",data:function(){return{visible:!1,dialogImg:"https://5ishouyou.cn/static/ShvSzI36HK",trigger:"scroll",waitTime:0,scrollHeight:100,once:!0,apk:"https://sdkapi.ezjhy.com/url/4esFXNQZ.apk",ios:"https://tg.ezjhy.com/html/h5.html?id=a12b97c1-87f1-48c5-aee0-57c57df51f7d",shown:!1,vars:!1,paramsText:"",marginTop:"-20%",name:"傲世龙城"}},computed:{style:function(){return d(d({},this.varsStyle),{},{marginTop:this.marginTop})}},mounted:function(){var t=this;this.handleParams(),"scroll"===this.trigger?window.addEventListener("scroll",this.handleScroll):(this.waitTime<0&&(this.waitTime=0),0===this.waitTime?(this.visible=!0,this.shown=!0):setTimeout((function(){t.visible=!0,t.shown=!0}),1e3*this.waitTime))},methods:{handleParams:function(){if(this.vars&&this.paramsText){var t=this.paramsText;if(window&&window.location){var e=window.location.search;console.log(e);var o,r=n(e=(e=e.replace("?","")).split("&"));try{for(r.s();!(o=r.n()).done;){var q=o.value.split("="),l=new RegExp("{".concat(q[0],"}"),"g");t=t.replace(l,q[1])}}catch(t){r.e(t)}finally{r.f()}this.paramsText=t}}},handleScroll:function(t){this.visible||this.once&&this.shown||t.target.scrollingElement.scrollTop>this.scrollHeight&&(this.visible=!0,this.shown=!0)},download:function(){umami&&umami.trackEvent("dialog-download","click");var t=this.apk;/iPhone|iPod|iPad|Mac OS/gi.test(navigator.userAgent)&&(t=this.ios),window.location.href=t}}},f=(o(358),o(53)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{staticClass:"image-dialog vars-dialog",attrs:{visible:t.visible,"lock-scroll":"","close-on-click-modal":!1,"modal-append-to-body":!1},on:{"update:visible":function(e){t.visible=e}}},[o("el-image",{attrs:{src:t.dialogImg},on:{click:t.download}},[o("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])]),t._v(" "),t.vars?o("div",{staticClass:"vars",style:t.style},[t._v(t._s(t.paramsText))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,o){"use strict";o.r(e);o(52),o(38),o(51),o(16),o(87),o(39),o(88);var r=o(30);o(29);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={name:"Weight",data:function(){return{image:"https://5ishouyou.cn/static/42GKzqop0tx",fixed:!1,position:"top",width:"100%",height:0,card:!1,background:"",radius:0,autoHeight:!0,lazy:!1,fit:"contain",click:!1,ios:"https://tg.ezjhy.com/html/h5.html?id=a12b97c1-87f1-48c5-aee0-57c57df51f7d",apk:"https://sdkapi.ezjhy.com/url/4esFXNQZ.apk",tag:"image",name:"傲世龙城"}},computed:{style:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"background-color":this.background},this.padding)}},methods:{download:function(t){var e=this.apk;/iPhone|iPod|iPad|Mac OS/gi.test(navigator.userAgent)&&(e=this.ios),window.location.href=e}}},c=l,d=(o(360),o(53)),component=Object(d.a)(c,(function(){var t,e=this,o=e.$createElement,r=e._self._c||o;return r("div",{class:e.fixed?"fixed":"",style:Object.assign((t={},t[e.position]=0,t),e.style)},[e.click?r("el-image",{ref:"image",staticClass:"image",class:"umami--click--"+e.tag,style:{width:e.width,height:e.autoHeight?"auto":e.height+"px",borderRadius:e.radius+"px"},attrs:{lazy:!e.autoHeight&&e.lazy,fit:e.fit,src:e.image},nativeOn:{click:function(t){return e.download.apply(null,arguments)}}},[r("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])]):r("el-image",{ref:"image",staticClass:"image",style:{width:e.width,height:e.autoHeight?"auto":e.height+"px",borderRadius:e.radius+"px"},attrs:{lazy:!e.autoHeight&&e.lazy,fit:e.fit,src:e.image}},[r("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])])],1)}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,o){"use strict";o.r(e);o(124),o(234),o(29),o(123),o(65);var r={active:!0,name:"Weight",data:function(){return{bg:"https://5ishouyou.cn/static/9lMBK-ZGnV",pointer:"https://5ishouyou.cn/static/EtQKFniOl1",dialogImg:"https://5ishouyou.cn/static/MTMSJH0IOa1",width:158,height:157,top:15,left:2,count:3,rotate:280,visible:!1,apk:"https://sdkapi.ezjhy.com/url/4esFXNQZ.apk",ios:"https://tg.ezjhy.com/html/h5.html?id=a12b97c1-87f1-48c5-aee0-57c57df51f7d",name:"傲世龙城"}},computed:{pointerStyle:function(){var t="50% - ".concat(this.width/2,"px"),e="50% - ".concat(this.height/2,"px");return this.left<0?t+=" - ".concat(Math.abs(this.left),"px"):t+=" + ".concat(Math.abs(this.left),"px"),this.top<0?e+=" - ".concat(Math.abs(this.top),"px"):e+=" + ".concat(Math.abs(this.top),"px"),"width: ".concat(this.width,"px; height: ").concat(this.height,"px; left: calc(").concat(t,"); top: calc(").concat(e,")")}},methods:{handleRotate:function(t){var e=this,o=function t(e,o){if(e)return new RegExp(o).test(e.className)?e:t(e.offsetParent,o)}(t.target,"pointer");if(o){var r=300*this.count;o.style.transition="transform ".concat(r,"ms ease-in-out"),o.style.transform="rotate(0deg) rotate(".concat(360*this.count+this.rotate,"deg)"),setTimeout((function(){e.visible=!0}),r)}},dialogClosed:function(){var t=document.querySelector(".pointer");t.style.transition="",t.style.transform=""},download:function(){umami&&umami.trackEvent("dialog-download","click");var t=this.apk;/iPhone|iPod|iPad|Mac OS/gi.test(navigator.userAgent)&&(t=this.ios),window.location.href=t}}},n=(o(362),o(53)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"turntable"},[o("el-image",{attrs:{src:t.bg}},[o("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])]),t._v(" "),o("div",{staticClass:"pointer umami--click--turntable",style:t.pointerStyle,on:{click:t.handleRotate}},[o("el-image",{attrs:{src:t.pointer}},[o("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])])],1),t._v(" "),o("el-dialog",{staticClass:"image-dialog",attrs:{visible:t.visible,"lock-scroll":"","close-on-click-modal":!1,"modal-append-to-body":!1},on:{"update:visible":function(e){t.visible=e},closed:t.dialogClosed}},[o("el-image",{staticClass:"umami--click--turntable-dialog-download",attrs:{src:t.dialogImg},on:{click:t.download}},[o("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,o){"use strict";o.r(e);o(52),o(38),o(51),o(16),o(87),o(39),o(88);var r=o(30);o(29);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={name:"Weight",data:function(){return{image:"https://5ishouyou.cn/static/gLNT8wSNPU0",fixed:!1,position:"top",width:"100%",height:0,card:!1,background:"",radius:0,autoHeight:!0,lazy:!1,fit:"contain",click:!0,ios:"https://tg.ezjhy.com/html/h5.html?id=a12b97c1-87f1-48c5-aee0-57c57df51f7d",apk:"https://sdkapi.ezjhy.com/url/4esFXNQZ.apk",tag:"image",name:"傲世龙城"}},computed:{style:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"background-color":this.background},this.padding)}},methods:{download:function(t){var e=this.apk;/iPhone|iPod|iPad|Mac OS/gi.test(navigator.userAgent)&&(e=this.ios),window.location.href=e}}},c=l,d=(o(364),o(53)),component=Object(d.a)(c,(function(){var t,e=this,o=e.$createElement,r=e._self._c||o;return r("div",{class:e.fixed?"fixed":"",style:Object.assign((t={},t[e.position]=0,t),e.style)},[e.click?r("el-image",{ref:"image",staticClass:"image",class:"umami--click--"+e.tag,style:{width:e.width,height:e.autoHeight?"auto":e.height+"px",borderRadius:e.radius+"px"},attrs:{lazy:!e.autoHeight&&e.lazy,fit:e.fit,src:e.image},nativeOn:{click:function(t){return e.download.apply(null,arguments)}}},[r("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])]):r("el-image",{ref:"image",staticClass:"image",style:{width:e.width,height:e.autoHeight?"auto":e.height+"px",borderRadius:e.radius+"px"},attrs:{lazy:!e.autoHeight&&e.lazy,fit:e.fit,src:e.image}},[r("div",{staticClass:"el-image__error",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])])],1)}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,o){"use strict";o.r(e);o(65);var r={mounted:function(){setTimeout((function(){var t,e=document.querySelector(".landing"),o=document.querySelector(".landing .fixed");if(o&&(t=o.offsetHeight),t){var r=o.style.top?"paddingTop":o.style.bottom&&"paddingBottom";e.style[r]=t+"px"}}),500)}},n=o(53),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"landing",staticStyle:{background:"#fff"}},[o("Weight0"),t._v(" "),o("Weight1"),t._v(" "),o("Weight2"),t._v(" "),o("Weight3"),t._v(" "),o("Weight4")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Weight0:o(366).default,Weight1:o(367).default,Weight2:o(368).default,Weight3:o(369).default,Weight4:o(370).default})}}]);