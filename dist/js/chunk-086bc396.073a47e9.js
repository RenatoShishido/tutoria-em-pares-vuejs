(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-086bc396"],{1019:function(a,t,e){a.exports=e.p+"img/thread-14228820-3195885822592301428.84bb570f.png"},"9b0f":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("NavDrag"),e("DashTutoria")],1)},s=[],i=e("c8ef"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"altura"},[e("h1",{staticClass:"d-flex justify-center subheading grey--text"},[a._v("Dashboard")]),e("v-container",{staticClass:"d-flex justify-center"},[e("v-layout",{staticClass:"d-flex flex-wrap justify-center align-center"},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-btn",{attrs:{dense:"",text:"",color:"black"},on:{click:function(t){return a.sortBy("institution")}}},[e("v-icon",{attrs:{left:"",large:""}},[a._v("mdi-folder")]),e("span",{staticClass:"body-1"},[a._v("Ordenar por Bloco")])],1)],1),e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-btn",{attrs:{dense:"",text:"",color:"black"},on:{click:function(t){return a.sortBy("discipline")}}},[e("v-icon",{attrs:{left:"",large:""}},[a._v("mdi-file-document")]),e("span",{staticClass:"body-1"},[a._v("Ordenar por disciplina")])],1)],1),e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-btn",{staticClass:"d-flex",attrs:{dense:"",text:"",color:"black"},on:{click:function(t){a.refresh(),a.refreshProject()}}},[e("v-icon",{attrs:{left:"",large:""}},[a._v("mdi-refresh")]),e("span",{staticClass:"body-1"},[a._v("Refresh")])],1)],1)],1)],1),e("v-container",{staticClass:"d-flex flex-column justify-center"},a._l(a.projects,(function(t){return e("v-card",{key:t.nome,staticClass:"mb-10 card",attrs:{flat:""}},["Agendado"===t.status?e("div",[e("v-divider"),e("v-layout",{class:"pa-3 project "+t.status+" ",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[e("div",{staticClass:"caption grey--text"},[a._v("Bloco")]),e("div",[a._v(a._s(t.institution))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[a._v("Disciplina")]),e("div",[a._v(a._s(t.discipline))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md5:""}},[e("div",{staticClass:"caption grey--text"},[a._v("Conteudo")]),e("p",{staticClass:"text-justify"},[a._v(a._s(t.content))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[e("div",{staticClass:"caption grey--text"},[a._v("Data")]),e("div",[a._v(a._s(a._f("moment")(t.data,"DD/MM/YYYY")))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[a._v("Nome")]),e("div",[a._v(a._s(t.user.nome))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[e("div",{staticClass:"caption grey--text"},[a._v("Status")]),e("div",[a._v(a._s(t.status))])]),e("v-flex",{attrs:{xs12:"",sm8:"",md1:""}},[t.user._id===a.user._id?e("div",[e("v-list-item",{staticClass:"d-flex justify-start align-end"},[e("FinalizarTutoria",{attrs:{project:t}})],1)],1):a._e()]),e("v-flex",{staticClass:"d-flex justify-start",attrs:{xs12:"",sm8:"",md1:""}},[t.tutor===a.user._id?e("div",[e("v-list-item",{staticClass:"d-flex justify-start align-end"},[e("Prova",{attrs:{project:t,msg:"Elaborar Prova",color:"red"}})],1)],1):a._e()])],1),e("v-divider")],1):a._e()])})),1)],1)},n=[],c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-row",{attrs:{justify:"center"}},[e("v-btn",{attrs:{color:"red black--text",dark:""},on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},[a._v(" Fazer Prova ")]),e("v-dialog",{attrs:{"max-width":"480"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[a._v('"Voce tem certeza que deseja finalizar a tutoria?"')]),e("v-card-text",[a._v(" Com a finalizacao da tutoria voce tera que resolver uma prova dissertiva de no maximo 5 questoes e no minino 3 elaboradas pelo seu tutor. ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"red darken-1"},on:{click:function(t){a.dialog=!1}}},[a._v(" Discordar ")]),e("Prova",{attrs:{msg:"Concordar",color:"green",project:a.project}})],1)],1)],1)],1)},l=[],d=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-snackbar",{attrs:{timeout:4e3,top:"",color:a.cor},model:{value:a.snackbar,callback:function(t){a.snackbar=t},expression:"snackbar"}},[r("span",[a._v(a._s(a.texto))]),r("v-btn",{attrs:{text:"",color:"white"},on:{click:function(t){a.snackbar=!1}}},[a._v("Close")])],1),r("v-btn",{class:a.color,on:{click:function(t){t.stopPropagation(),a.dialog=!0}}},[r("v-icon",{attrs:{left:""}},[a._v("mdi-file-document")]),a._v(a._s(a.msg)+" ")],1),r("v-dialog",{attrs:{"max-width":"1000"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-items",["Elaborar Prova"===a.msg?r("div",{staticClass:"py-5 px-5"},[r("h1",[a._v("Para fazer a prova precisara seguir estes passos")]),r("p",[a._v("Aqui voce ira criar a sua prova para seguindo estes passos a seguir")]),r("v-img",{attrs:{src:e("1019"),height:"500px"}}),r("p",[a._v("Aqui voce ira pegar o link na pagina em questao e enviar para a gente.")]),r("v-img",{attrs:{src:e("f826"),height:"500px"}}),r("v-divider"),r("v-text-field",{staticClass:"mt-10",attrs:{label:"Iframe","prepend-icon":"mdi-file-document"},model:{value:a.fields.iframe,callback:function(t){a.$set(a.fields,"iframe",t)},expression:"fields.iframe"}}),r("div",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{color:"purple black--text",dark:"",xLarge:""},on:{click:function(t){a.enviarProva(a.project),a.dialog=!1}}},[a._v(" Enviar ")])],1)],1):r("div",[void 0===a.project.iframe?r("div",{staticClass:"py-12 px-12"},[r("v-card-title",{staticClass:"display-1 d-flex justify-center"},[a._v("Prova nao Elaborada!!")]),r("p",{staticClass:"headline"},[a._v("Ola parece que o tutor ainda nao elaborou a sua prova entre em contanto com ele para realizar a sua prova. para que seja feito o relatorio e no final do semestre obtenha as cargas horarias. ")])],1):r("div",[r("iframe",{attrs:{src:a.project.iframe,width:"1000",height:"1346",frameborder:"0",marginheight:"0",marginwidth:"0"}},[a._v("Carregando…")])])])])],1)],1)],1)},v=[],u=e("bcb3"),f={name:"Prova",props:{msg:String,color:String,project:Array},data:function(){return{tutoria:{},dialog:!1,includeFiles:!0,fields:{},user:{},snackbar:!1,cor:"",texto:""}},methods:{enviarProva:function(a){var t=this;this.tutoria=a,a.iframe=this.fields.iframe,u["a"].updateTutoria(a._id,a).then((function(a){t.snackbar=!0,t.cor="green",t.texto="Prova elaborada com sucesso!!",t.fields={}})).catch((function(a){t.snackbar=!0,t.cor="red",t.texto="Falha ao elabor a prova!!",t.fields={}}))}}},p=f,m=e("2877"),x=e("6544"),g=e.n(x),b=e("8336"),_=e("b0af"),h=e("99d9"),C=e("169a"),j=e("ce7e"),k=e("132d"),y=e("adda"),V=e("0fd9"),w=e("2db4"),P=e("8654"),D=Object(m["a"])(p,d,v,!1,null,null,null),T=D.exports;g()(D,{VBtn:b["a"],VCard:_["a"],VCardTitle:h["c"],VDialog:C["a"],VDivider:j["a"],VIcon:k["a"],VImg:y["a"],VRow:V["a"],VSnackbar:w["a"],VTextField:P["a"]});var z={name:"FinalizarTutoria",components:{Prova:T},props:["project"],data:function(){return{dialog:!1}},methods:{}},O=z,q=e("2fa4"),B=Object(m["a"])(O,c,l,!1,null,null,null),E=B.exports;g()(B,{VBtn:b["a"],VCard:_["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:C["a"],VRow:V["a"],VSpacer:q["a"]});var F={components:{FinalizarTutoria:E,Prova:T},data:function(){return{projects:{},tutoria:{},nomes:{},isActive:!1,user:{},dialogs:!1}},mounted:function(){this.refresh()},methods:{sortBy:function(a){this.projects.sort((function(t,e){return t[a]<e[a]?-1:1}))},refresh:function(){var a=this;u["a"].listar().then((function(t){a.projects=t;var e=JSON.parse(localStorage.getItem("user"));a.user=e})).catch((function(a){return a}))}}},A=F,S=(e("ad4d"),e("a523")),I=e("0e8f"),$=e("a722"),N=e("da13"),Y=Object(m["a"])(A,o,n,!1,null,null,null),J=Y.exports;g()(Y,{VBtn:b["a"],VCard:_["a"],VContainer:S["a"],VDivider:j["a"],VFlex:I["a"],VIcon:k["a"],VLayout:$["a"],VListItem:N["a"]});var L={name:"View-Tutoria",components:{NavDrag:i["a"],DashTutoria:J},data:function(){return{}}},R=L,M=e("7496"),G=Object(m["a"])(R,r,s,!1,null,null,null);t["default"]=G.exports;g()(G,{VApp:M["a"]})},a722:function(a,t,e){"use strict";e("20f6");var r=e("e8f2");t["a"]=Object(r["a"])("layout")},ad4d:function(a,t,e){"use strict";var r=e("ecb0"),s=e.n(r);s.a},ecb0:function(a,t,e){},f826:function(a,t,e){a.exports=e.p+"img/google-forms-2.da6f8150.png"}}]);
//# sourceMappingURL=chunk-086bc396.073a47e9.js.map