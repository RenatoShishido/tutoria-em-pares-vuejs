(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb83d60"],{1019:function(a,t,e){a.exports=e.p+"img/thread-14228820-3195885822592301428.84bb570f.png"},7519:function(a,t,e){"use strict";var r=e("c067"),s=e.n(r);s.a},a38f:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("DashTutoria")],1)},s=[],i=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-content",{attrs:{app:""}},[r("v-layout",{staticClass:"d-flex flex-wrap justify-center align-center py-5"},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-btn",{staticClass:"mb-4",attrs:{text:""},on:{click:function(t){return a.sortBy("institution")}}},[r("v-icon",{attrs:{left:"",xMedium:"",color:"blue"}},[a._v("mdi-folder")]),r("span",{staticClass:"body-1"},[a._v("Ordenar por Bloco")])],1)],1),r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-btn",{staticClass:"mb-4",attrs:{text:""},on:{click:function(t){return a.sortBy("discipline")}}},[r("v-icon",{attrs:{left:"",xMedium:"",color:"blue"}},[a._v("mdi-file-document")]),r("span",{staticClass:"body-1"},[a._v("Ordenar por disciplina")])],1)],1)],1),r("v-container",{staticClass:"d-flex flex-column justify-center"},[a._l(a.projects,(function(t){return r("v-card",{key:t.nome,staticClass:"mb-10 zoom",attrs:{flat:""}},[r("v-divider"),r("v-layout",{class:"pa-3 project "+t.status+" ",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[r("div",{staticClass:"caption grey--text"},[a._v("Bloco")]),r("div",[a._v(a._s(t.institution))])]),r("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[r("div",{staticClass:"caption grey--text"},[a._v("Disciplina")]),r("div",[a._v(a._s(t.discipline))])]),r("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[r("div",{staticClass:"caption grey--text"},[a._v("Conteudo")]),r("p",{staticClass:"text-justify"},[a._v(a._s(t.content))])]),r("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[r("div",{staticClass:"caption grey--text"},[a._v("Data")]),r("div",[a._v(a._s(a._f("moment")(t.data,"DD/MM/YYYY")))])]),r("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(s){var i=s.on;return[r("a",a._g({on:{click:function(e){return a.rotacionar(t)}}},i),[r("div",{staticClass:"d-flex justify-center caption grey--text"},[a._v("Nome")]),r("p",{staticClass:"d-flex justify-center text-justify black--text"},[a._v(a._s(t.user.nome))]),void 0===t.user.profile?r("div",{staticClass:"d-flex justify-center"},[r("v-avatar",{attrs:{size:"100"}},[r("img",{attrs:{src:e("0463")}})])],1):r("div",{staticClass:"d-flex justify-center"},[r("v-avatar",{attrs:{size:"80"}},[r("img",{attrs:{src:t.user.profile}})])],1)])]}}],null,!0)},[r("span",[a._v("Perfil")])])],1),r("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[r("div",{staticClass:"caption grey--text"},[a._v("Status")]),r("div",[a._v(a._s(t.status))])]),r("v-flex",{attrs:{xs12:"",sm8:"",md1:""}},[t.user._id===a.user._id?r("div",[r("v-list-item",{staticClass:"d-flex justify-start align-end"},[r("FinalizarTutoria",{attrs:{project:t}})],1)],1):a._e(),t.tutor===a.user._id?r("div",[r("v-list-item",{staticClass:"d-flex justify-start align-end"},[r("Prova",{attrs:{project:t,msg:"Elaborar Prova",color:"red"}})],1)],1):a._e()])],1),r("v-divider")],1)})),0!==a.paginas?r("div",{staticClass:"text-center"},[r("a",{on:{click:function(t){return a.refresh()}}},[r("v-pagination",{attrs:{value:a.page,length:a.paginas},model:{value:a.page,callback:function(t){a.page=t},expression:"page"}})],1)]):a._e()],2)],1)},o=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-row",{attrs:{justify:"center"}},[e("v-btn",{attrs:{color:"red black--text",dark:""},on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},[a._v(" Fazer Prova ")]),e("v-dialog",{attrs:{"max-width":"480"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[a._v('"Voce tem certeza que deseja finalizar a tutoria?"')]),e("v-card-text",[a._v(" Com a finalizacao da tutoria voce tera que resolver uma prova dissertiva de no maximo 5 questoes e no minino 3 elaboradas pelo seu tutor. ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"red darken-1"},on:{click:function(t){a.dialog=!1}}},[a._v(" Discordar ")]),e("Prova",{attrs:{msg:"Concordar",color:"green",project:a.project}})],1)],1)],1)],1)},c=[],l=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-btn",{class:a.color,on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},[r("v-icon",{attrs:{left:""}},[a._v("mdi-file-document")]),a._v(a._s(a.msg)+" ")],1),r("v-dialog",{attrs:{"max-width":"1000"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-items",["Elaborar Prova"===a.msg?r("div",{staticClass:"py-5 px-5"},[r("h1",[a._v("Para fazer a prova precisara seguir estes passos")]),r("p",[a._v("Aqui voce ira criar a sua prova para seguindo estes passos a seguir")]),r("v-img",{attrs:{src:e("1019"),height:"500px"}}),r("p",[a._v("Aqui voce ira pegar o link na pagina em questao e enviar para a gente.")]),r("v-img",{attrs:{src:e("f826"),height:"500px"}}),r("v-divider"),r("v-text-field",{staticClass:"mt-10",attrs:{label:"Iframe","prepend-icon":"mdi-file-document"},model:{value:a.fields.iframe,callback:function(t){a.$set(a.fields,"iframe",t)},expression:"fields.iframe"}}),r("div",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{color:"purple black--text",dark:"",xLarge:""},on:{click:function(t){a.enviarProva(a.project),a.dialog=!1}}},[a._v(" Enviar ")])],1)],1):r("div",[void 0===a.project.iframe?r("div",{staticClass:"py-12 px-12"},[r("v-card-title",{staticClass:"display-1 d-flex justify-center"},[a._v("Prova nao Elaborada!!")]),r("p",{staticClass:"headline"},[a._v("Ola parece que o tutor ainda nao elaborou a sua prova entre em contanto com ele para realizar a sua prova. para que seja feito o relatorio e no final do semestre obtenha as cargas horarias. ")])],1):r("div",[r("iframe",{attrs:{src:a.project.iframe,width:"1000",height:"1346",frameborder:"0",marginheight:"0",marginwidth:"0"}},[a._v("Carregando…")])])])])],1)],1)],1)},d=[],u=e("bcb3"),v={name:"Prova",props:{msg:String,color:String,project:Array},data:function(){return{tutoria:{},dialog:!1,includeFiles:!0,fields:{},user:{}}},methods:{enviarProva:function(a){var t=this;this.tutoria=a,a.iframe=this.fields.iframe,u["a"].updateTutoria(a._id,a).then((function(a){t.$store.dispatch("snackbar/show",{content:"Prova elaborada com sucesso!",color:"green"}),t.fields={}})).catch((function(a){t.$store.dispatch("snackbar/show",{content:"Falha ao elaborar a prova!",color:"error"}),t.fields={}}))}}},f=v,p=e("2877"),m=e("6544"),g=e.n(m),x=e("8336"),_=e("b0af"),h=e("99d9"),b=e("169a"),C=e("ce7e"),y=e("132d"),j=e("adda"),V=e("0fd9"),k=e("8654"),w=Object(p["a"])(f,l,d,!1,null,null,null),P=w.exports;g()(w,{VBtn:x["a"],VCard:_["a"],VCardTitle:h["d"],VDialog:b["a"],VDivider:C["a"],VIcon:y["a"],VImg:j["a"],VRow:V["a"],VTextField:k["a"]});var z={name:"FinalizarTutoria",components:{Prova:P},props:["project"],data:function(){return{dialog:!1}},methods:{}},T=z,D=e("2fa4"),$=Object(p["a"])(T,n,c,!1,null,null,null),q=$.exports;g()($,{VBtn:x["a"],VCard:_["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VDialog:b["a"],VRow:V["a"],VSpacer:D["a"]});var B={components:{FinalizarTutoria:q,Prova:P},data:function(){return{page:1,paginas:0,projects:{},tutoria:{},user:{}}},mounted:function(){this.refresh()},methods:{calcularNumeroPagina:function(a){var t=a/10;this.paginas=Math.ceil(t)},refresh:function(){var a=this;u["a"].paginationAgendado(this.page).then((function(t){a.projects=t.data.data,a.calcularNumeroPagina(t.data.count),a.user=a.$store.getters["user/GetUser"]})).catch((function(a){return a})),this.$router.push("/dashboard/tutorias/pagina/".concat(this.page))},sortBy:function(a){this.projects.sort((function(t,e){return t[a]<e[a]?-1:1}))}}},E=B,F=(e("7519"),e("8212")),A=e("a523"),O=e("a75b"),I=e("0e8f"),M=e("a722"),S=e("da13"),Y=e("891e"),L=e("3a2f"),N=Object(p["a"])(E,i,o,!1,null,null,null),J=N.exports;g()(N,{VAvatar:F["a"],VBtn:x["a"],VCard:_["a"],VContainer:A["a"],VContent:O["a"],VDivider:C["a"],VFlex:I["a"],VIcon:y["a"],VLayout:M["a"],VListItem:S["a"],VPagination:Y["a"],VTooltip:L["a"]});var R={name:"View-Tutoria",components:{DashTutoria:J},data:function(){return{}}},G=R,U=e("7496"),H=Object(p["a"])(G,r,s,!1,null,null,null);t["default"]=H.exports;g()(H,{VApp:U["a"]})},c067:function(a,t,e){},f826:function(a,t,e){a.exports=e.p+"img/google-forms-2.da6f8150.png"}}]);
//# sourceMappingURL=chunk-0bb83d60.de3c10bd.js.map