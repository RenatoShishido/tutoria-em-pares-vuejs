(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e42b96"],{"17b3":function(t,e,a){},"6f60":function(t,e,a){"use strict";var s=a("bfa5"),i=a.n(s);i.a},"891e":function(t,e,a){"use strict";a("99af"),a("d81d"),a("a9e3"),a("d3b7"),a("25f0");var s=a("2909"),i=a("5530"),n=(a("17b3"),a("9d26")),r=a("dc22"),o=a("58df"),c=a("a9ad"),l=a("7560");e["a"]=Object(o["a"])(c["a"],l["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(i["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,i=Math.floor(e/2),n=this.length-i+1+a;if(this.value>i&&this.value<n){var r=this.value-i+2,o=this.value+i-2-a;return[1,"..."].concat(Object(s["a"])(this.range(r,o)),["...",this.length])}if(this.value===i){var c=this.value+i-1-a;return[].concat(Object(s["a"])(this.range(1,c)),["...",this.length])}if(this.value===n){var l=this.value-i+1;return[1,"..."].concat(Object(s["a"])(this.range(l,this.length)))}return[].concat(Object(s["a"])(this.range(1,i)),["..."],Object(s["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var s=t;s<=e;s++)a.push(s);return a},genIcon:function(t,e,a,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button"},on:a?{}:{click:s}},[t(n["a"],[e])])])},genItem:function(t,e){var a=this,s=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(s,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,s){return t("li",{key:s},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},a581:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("NavDrag"),a("Dashboard")],1)},i=[],n=a("c8ef"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"altura"},[s("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.$store.state.color},model:{value:t.$store.state.snackbar,callback:function(e){t.$set(t.$store.state,"snackbar",e)},expression:"$store.state.snackbar"}},[s("span",[t._v(t._s(t.$store.state.texto))]),s("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.$store.state.snackbar=!1}}},[t._v("Close")])],1),s("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[s("v-container",{staticClass:"my-12"},[s("h1",{staticClass:"d-flex justify-center subheading grey--text"},[t._v("Dashboard")]),s("v-layout",{staticClass:"d-flex flex-wrap justify-center align-center"},[s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("v-btn",{staticClass:"mb-4",attrs:{dense:"",text:"",color:"black"},on:{click:function(e){return t.sortBy("institution")}}},[s("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-folder")]),s("span",{staticClass:"body-1"},[t._v("Ordenar por Bloco")])],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("v-btn",{staticClass:"mb-4",attrs:{dense:"",text:"",color:"black"},on:{click:function(e){return t.sortBy("discipline")}}},[s("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-file-document")]),s("span",{staticClass:"body-1"},[t._v("Ordenar por disciplina")])],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[s("v-btn",{staticClass:"mb-4",attrs:{dense:"",text:"",color:"black"},on:{click:function(e){t.refresh(),t.refreshProject()}}},[s("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-refresh")]),s("span",{staticClass:"body-1"},[t._v("Refresh")])],1)],1)],1),t._l(t.projects,(function(e){return s("v-card",{key:e.id,staticClass:"mb-10 zoom",attrs:{flat:""}},[s("a",{attrs:{href:"/dashboard/"+e._id}},["Aguardando"===e.status?s("div",[s("v-divider"),s("v-layout",{class:"pa-3 project "+e.status,attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Bloco")]),s("div",{staticClass:"body-1 black--text"},[t._v(t._s(e.institution))])]),s("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Disciplina")]),s("div",{staticClass:"body-1 black--text"},[t._v(t._s(e.discipline))])]),s("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Conteudo")]),s("div",{staticClass:"body-1 black--text text-justify"},[t._v(t._s(e.content))])]),s("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Data")]),s("div",{staticClass:"body-1 black--text"},[t._v(t._s(t._f("moment")(e.data,"DD/MM/YYYY")))])]),s("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[s("div",{staticClass:"d-flex justify-center caption grey--text"},[t._v("Nome")]),s("div",{staticClass:"d-flex justify-center mt-6"},[s("v-avatar",{attrs:{size:"100"}},[void 0===e.user.profile?s("div",[s("img",{staticStyle:{width:"100%",height:"100px"},attrs:{src:a("0463")}})]):s("div",[s("img",{staticStyle:{width:"100%",height:"100px"},attrs:{src:e.user.profile}})])]),s("div",{staticClass:"body-1 black--text d-flex align-self-center mx-4"},[t._v(" "+t._s(e.user.nome)+" ")])],1)]),s("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[s("div",{staticClass:"caption grey--text"},[t._v("Status")]),s("div",{staticClass:"body-1 black--text"},[t._v(t._s(e.status))])]),e.user._id===t.user._id?s("v-flex",{attrs:{xs6:"",sm4:"",md1:""}},[s("v-list",{staticClass:"d-flex flex-row"},[s("v-list-item",[s("v-btn",{staticClass:"green",attrs:{fab:"",text:""},on:{click:function(a){t.dialog1=!t.dialog1,t.receberTutoria(e)}}},[s("v-icon",[t._v("mdi-pencil")])],1),!0===t.dialog1?s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[s("v-card",[s("v-form",{ref:"form",refInFor:!0,staticClass:"px-5 py-8"},[s("h1",{staticClass:"d-flex justify-center align-center"},[t._v("Alterar tutoria")]),s("v-text-field",{attrs:{value:t.fields.institution,label:"Bloco","prepend-icon":"mdi-castle"},model:{value:t.fields.institution,callback:function(e){t.$set(t.fields,"institution",e)},expression:"fields.institution"}}),s("v-text-field",{attrs:{value:t.fields.discipline,label:"Disciplina","prepend-icon":"mdi-folder"},model:{value:t.fields.discipline,callback:function(e){t.$set(t.fields,"discipline",e)},expression:"fields.discipline"}}),s("v-textarea",{attrs:{value:t.fields.content,label:"Duvida","prepend-icon":"mdi-table-edit"},model:{value:t.fields.content,callback:function(e){t.$set(t.fields,"content",e)},expression:"fields.content"}}),s("v-btn",{staticClass:"success mx-0 mt-3",attrs:{text:""},on:{click:function(e){t.dialog1=!1,t.atualizarDashoboard()}}},[t._v("Alterar")]),s("v-card-actions",[s("v-spacer")],1)],1)],1)],1)],1):t._e()],1),s("v-list-item",[s("v-btn",{staticClass:"error",attrs:{fab:"",text:""},on:{click:function(a){t.dialog=!t.dialog,t.receberTutoria(e)}}},[s("v-icon",[t._v("mdi-delete")])],1),!0===t.dialog?s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("Voce tem certeza que deseja deletar esta tutoria?")]),s("v-card-text",[t._v(" Caso dejese deletar esta tutoria, esteje ciente que estes dados serao apagados da base dados da nossa plataforma, e voce nao podera consultar novamente esta tutoria!!. ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Discordar")]),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1,t.removerDashboard()}}},[t._v("Aceito")])],1)],1)],1)],1):t._e()],1)],1)],1):t._e(),e.user.semestre<=1?t._e():s("div",[e.user._id!==t.user._id?s("v-list-item",{staticClass:"d-flex justify-start align-end "},[s("v-btn",{staticClass:"green black--text ",attrs:{text:""},on:{click:function(a){return t.doTutoriaUpdate(e)}}},[t._v("Fazer tutoria")])],1):t._e()],1)],1),s("v-divider")],1):t._e()])])})),s("Pagination",{attrs:{tutorias:t.projects}})],2)],1)],1)},o=[],c=a("bcb3"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("a",{on:{click:function(e){return t.navigate()}}},[a("v-pagination",{attrs:{value:t.page,length:t.paginas},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])},u=[],d=(a("4160"),a("159b"),{props:{tutorias:Array},data:function(){return{page:1,pages:[],projects:[],paginas:""}},created:function(){var t=this;c["a"].listar().then((function(e){e.forEach((function(e){"Agendado"!==e.status&&t.projects.push(e)})),t.pagination(),t.calcularNumeroPagina()})).catch((function(t){return t}))},methods:{ajax:function(){var t=this;c["a"].listarPage(this.page).then((function(e){e.forEach((function(e){"Agendado"!==e.status&&t.projects.push(e)}))})).catch((function(t){return t}))},navigate:function(){this.ajax()},pagination:function(){this.pages=[];for(var t=1;t<this.projects.length+1;t++)this.pages.push(t)},calcularNumeroPagina:function(){var t=this.pages[this.projects.length-1],e=t/10;this.paginas=Math.ceil(e)}}}),v=d,f=a("2877"),h=a("6544"),p=a.n(h),g=a("891e"),m=Object(f["a"])(v,l,u,!1,null,null,null),b=m.exports;p()(m,{VPagination:g["a"]});var x={components:{Pagination:b},data:function(){return{projects:{},fields:{},user:{},isActive:!1,dialog:!1,dialog1:!1,tutoria:{},pages:[]}},mounted:function(){this.refresh()},methods:{sortBy:function(t){this.projects.sort((function(e,a){return e[t]<a[t]?-1:1}))},refresh:function(){var t=this;c["a"].listar().then((function(e){t.projects=e,t.user=JSON.parse(localStorage.getItem("user"))})).catch((function(t){return t}))},receberTutoria:function(t){this.tutoria=t,this.fields=this.tutoria},removerDashboard:function(){var t=this;c["a"].removerTutoria(this.tutoria._id).then((function(e){t.$store.getters.snackbarRes,t.$store.state.texto="Tutoria removida com sucesso!"})).catch((function(e){t.$store.getters.snackbarErr,t.$.store.stete.texto="Falha ao remover tutoria!"}))},atualizarDashoboard:function(){var t=this;c["a"].updateTutoria(this.tutoria._id,this.fields).then((function(e){t.$store.getters.snackbarRes,t.$store.state.texto="Tutoria alterado com sucesso!"})).catch((function(e){t.$store.getters.snackbarErr,t.$store.state.texto="Falha ao alterar tutoria!"}))},doTutoriaUpdate:function(t){var e=this;t.status="Agendado",t.tutor=this.user._id,c["a"].updateTutoria(t._id,t).then((function(t){e.$store.getters.snackbarRes,e.$store.state.texto="Tutoria agendada com sucesso!"})).catch((function(t){e.$store.getters.snackbarErr,e.$store.state.texto="Falha no agendamento da tutoria!"}))}}},_=x,k=(a("6f60"),a("8212")),y=a("8336"),C=a("b0af"),$=a("99d9"),j=a("a523"),V=a("169a"),w=a("ce7e"),D=a("0e8f"),I=a("4bd4"),T=a("132d"),O=a("a722"),B=a("8860"),A=a("da13"),N=a("0fd9"),S=a("2db4"),z=a("2fa4"),E=a("8654"),F=a("a844"),R=Object(f["a"])(_,r,o,!1,null,null,null),M=R.exports;p()(R,{VAvatar:k["a"],VBtn:y["a"],VCard:C["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VContainer:j["a"],VDialog:V["a"],VDivider:w["a"],VFlex:D["a"],VForm:I["a"],VIcon:T["a"],VLayout:O["a"],VList:B["a"],VListItem:A["a"],VRow:N["a"],VSnackbar:S["a"],VSpacer:z["a"],VTextField:E["a"],VTextarea:F["a"]});var P={name:"View-Feed",components:{NavDrag:n["a"],Dashboard:M},data:function(){return{}}},Y=P,q=a("7496"),J=Object(f["a"])(Y,s,i,!1,null,null,null);e["default"]=J.exports;p()(J,{VApp:q["a"]})},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},bfa5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-53e42b96.1f75c914.js.map