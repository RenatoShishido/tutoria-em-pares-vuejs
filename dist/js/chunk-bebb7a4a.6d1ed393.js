(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bebb7a4a"],{"0130":function(t,e,n){"use strict";var i=n("4c12"),a=n.n(i);a.a},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("ade3"),a=n("5530"),o=(n("4b85"),n("2b0e")),s=n("d9f7"),r=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,i){return n[t+Object(r["v"])(i)]=e(),n}),{})}var h=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},d=l("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},v=l("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var i=b[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var x=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d,{justify:{type:String,default:null,validator:f}},v,{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,a=e.data,o=e.children,r="";for(var c in n)r+=String(n[c]);var u=x.get(r);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var i=n[t],a=y(e,t,i);a&&u.push(a)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(r,u)}(),t(n.tag,Object(s["a"])(a,{staticClass:"row",class:u}),o)}})},"16b7":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})},"21be":function(t,e,n){"use strict";n("99af"),n("caad"),n("2532");var i=n("2909"),a=n("2b0e"),o=n("80d2");e["a"]=a["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o["o"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(o["o"])(e)],a=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),s=0;s<a.length;s++)t.includes(a[s])||n.push(Object(o["o"])(a[s]));return Math.max.apply(Math,n)}}})},2909:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return i(t)||a(t)||o()}},"4ad4":function(t,e,n){"use strict";n("caad"),n("45fc"),n("b0c0"),n("b64b");var i=n("53ca"),a=n("16b7"),o=n("f2e7"),s=n("58df"),r=n("80d2"),c=n("d9bd"),u=Object(s["a"])(a["a"],o["a"]);e["a"]=u.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}},watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(r["n"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(r["m"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var n=this.internalActivator?this.$el:document;e="string"===typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var i=this.activatorNode[0].componentInstance;e=i&&i.$options.mixins&&i.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?i.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(r["m"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4c12":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),a=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,a=n("7c73"),o=n("e2cc"),s=n("0366"),r=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),h=n("83ab"),d=n("f183").fastKey,f=n("69f3"),v=f.set,p=f.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){r(t,l,e),v(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=i&&c(i,t[u],t,n)})),f=p(e),g=function(t,e,n){var i,a,o=f(t),s=m(t,e);return s?s.value=n:(o.last=s={index:a=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),h?o.size++:t.size++,"F"!==a&&(o.index[a]=s)),t},m=function(t,e){var n,i=f(t),a=d(e);if("F"!==a)return i.index[a];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){var t=this,e=f(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,n=f(e),i=m(e,t);if(i){var a=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==i&&(n.first=a),n.last==i&&(n.last=o),h?n.size--:e.size--}return!!i},forEach:function(t){var e,n=f(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),o(l.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),h&&i(l.prototype,"size",{get:function(){return f(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",a=p(e),o=p(i);u(t,e,(function(t,e){v(this,{type:i,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),a=n("da84"),o=n("94ca"),s=n("6eeb"),r=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),h=n("d039"),d=n("1c7e"),f=n("d44e"),v=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",b=a[t],y=b&&b.prototype,x=b,w={},O=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof b||!(g||y.forEach&&!h((function(){(new b).entries().next()})))))x=n.getConstructor(e,t,p,m),r.REQUIRED=!0;else if(o(t,!0)){var A=new x,k=A[m](g?{}:-0,1)!=A,j=h((function(){A.has(1)})),C=d((function(t){new b(t)})),T=!g&&h((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));C||(x=e((function(e,n){u(e,x,t);var i=v(new b,e,x);return void 0!=n&&c(n,i[m],i,p),i})),x.prototype=y,y.constructor=x),(j||T)&&(O("delete"),O("has"),p&&O("get")),(T||k)&&O(m),g&&y.clear&&delete y.clear}return w[t]=x,i({global:!0,forced:x!=b},w),f(x,t),g||n.setStrong(x,t,p),x}},"75eb":function(t,e,n){"use strict";n("4160"),n("159b");var i=n("ade3"),a=n("53ca"),o=n("9d65"),s=n("80d2"),r=n("58df"),c=n("d9bd");function u(t){var e=Object(a["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]=Object(r["a"])(o["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(s["k"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},9734:function(t,e,n){},"9d65":function(t,e,n){"use strict";var i=n("d9bd"),a=n("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(i["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a4f0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Nav"),n("ForgotPassword")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("span",[t._v(t._s(t.texto))]),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("Esqueci senha")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""}})],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Coloque o seu email",name:"email","prepend-icon":"mdi-email",type:"text"},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.sendPassword()}}},[t._v("Enviar")])],1)],1)],1)],1)],1)],1)},s=[],r=n("bcb3"),c={name:"ForgotPassword",data:function(){return{fields:{},color:"",snackbar:!1,texto:""}},methods:{sendPassword:function(){var t=this;r["a"].forgotPassword(this.fields).then((function(e){t.snackbar=!0,t.color="green",t.texto="E-mail enviado com sucesso!",t.fields={}})).catch((function(e){return t.snackbar=!0,t.color="red",t.fields={},t.texto=e}))}}},u=c,l=n("2877"),h=n("6544"),d=n.n(h),f=n("8336"),v=n("b0af"),p=n("99d9"),g=n("a523"),m=(n("daaf"),n("d10f")),b=m["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,i=t.right,a=t.footer,o=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(a+o+s,"px"),paddingLeft:"".concat(r,"px")}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}}),y=n("0e8f"),x=n("4bd4"),w=n("a722"),O=n("2db4"),A=n("2fa4"),k=n("8654"),j=n("71d9"),C=n("2a7f"),T=(n("a9e3"),n("ade3")),E=(n("9734"),n("4ad4")),N=n("a9ad"),D=n("16b7"),$=n("b848"),S=n("75eb"),L=n("f573"),B=n("f2e7"),I=n("80d2"),_=n("d9bd"),M=n("58df"),V=Object(M["a"])(N["a"],D["a"],$["a"],S["a"],L["a"],B["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||i?o=a+e.width/2-n.width/2:(this.left||this.right)&&(o=a+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+e.height/2-n.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(I["f"])(this.maxWidth),minWidth:Object(I["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(I["n"])(this,"activator",!0)&&Object(_["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=E["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===I["q"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(T["a"])(t,this.contentClass,!0),Object(T["a"])(t,"menuable__content__active",this.isActive),Object(T["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),Y=Object(l["a"])(u,o,s,!1,null,null,null),F=Y.exports;d()(Y,{VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VContainer:g["a"],VContent:b,VFlex:y["a"],VForm:x["a"],VLayout:w["a"],VSnackbar:O["a"],VSpacer:A["a"],VTextField:k["a"],VToolbar:j["a"],VToolbarTitle:C["a"],VTooltip:V});var W=n("f86a"),z={components:{ForgotPassword:F,Nav:W["a"]}},P=z,R=n("7496"),X=Object(l["a"])(P,i,a,!1,null,null,null);e["default"]=X.exports;d()(X,{VApp:R["a"]})},a722:function(t,e,n){"use strict";n("20f6");var i=n("e8f2");e["a"]=Object(i["a"])("layout")},b848:function(t,e,n){"use strict";var i=n("2909"),a=n("58df");function o(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];a.isActive&&a.isDependent?e.push(a):e.push.apply(e,Object(i["a"])(o(a.$children)))}return e}e["a"]=Object(a["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?o(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,Object(i["a"])(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(i["a"])(this.getOpenDependentElements())),t}}})},daaf:function(t,e,n){},f573:function(t,e,n){"use strict";n("a9e3"),n("d3b7");var i=n("5530"),a=n("fe6c"),o=n("21be"),s=n("4ad4"),r=n("58df"),c=n("80d2"),u=Object(r["a"])(o["a"],a["a"],s["a"]);e["a"]=u.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,i=Math.max(t.width,e.width),a=0;if(a+=this.left?n-(i-t.width):n,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-o:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(c["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(c["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.pageYOffset+e,i=this.dimensions.activator,a=this.dimensions.content.height,o=t+a,s=n<o;return s&&this.offsetOverflow&&i.top>a?t=this.pageYOffset+(i.top-a):s&&!this.allowOverflow?t=n-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=s["a"].options.methods.genActivatorListeners.call(this),n=e.click;return e.click=function(e){t.openOnClick&&n&&n(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var n=e.$refs.content;n&&"none"===n.style.display?(n.style.display="inline-block",t(),n.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(i["a"])({},this.dimensions.activator),content:Object(i["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var n=this.getActivator();if(!n)return;e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,!1!==this.attach?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}})},f86a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{app:"",color:"purple darken-4",dark:"",height:"80"}},[i("a",{attrs:{href:"/"}},[i("v-icon",{attrs:{xLarge:"",color:"white",left:""}},[t._v("mdi-school")])],1),i("v-toolbar-title",{staticClass:"headline white--text hidden-md-and-down"},[i("img",{staticStyle:{width:"50%",height:"80px"},attrs:{src:n("9c6c"),alt:"logoTutoria"}})]),i("v-spacer"),i("v-row",{staticClass:"d-flex justify-end"},[i("div",{staticClass:"mx-4"},[i("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/login"}},[t._v("Login")])],1),i("div",{staticClass:"mx-4"},[i("v-btn",{staticClass:"purple darken-4 ",attrs:{text:"",xLarge:"",router:"",to:"/register"}},[t._v("Register")])],1)])],1)},a=[],o={name:"Nav",data:function(){return{hrefLogo:"/"}}},s=o,r=(n("0130"),n("2877")),c=n("6544"),u=n.n(c),l=n("40dc"),h=n("8336"),d=n("132d"),f=n("0fd9"),v=n("2fa4"),p=n("2a7f"),g=Object(r["a"])(s,i,a,!1,null,null,null);e["a"]=g.exports;u()(g,{VAppBar:l["a"],VBtn:h["a"],VIcon:d["a"],VRow:f["a"],VSpacer:v["a"],VToolbarTitle:p["a"]})}}]);
//# sourceMappingURL=chunk-bebb7a4a.6d1ed393.js.map