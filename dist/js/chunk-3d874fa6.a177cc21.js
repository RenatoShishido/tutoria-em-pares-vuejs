(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d874fa6"],{"05dc":function(t,a,s){"use strict";var e=s("e772"),r=s.n(e);r.a},"58a1":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("NavDrag"),s("DashTutoria")],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"altura"},[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:t.$store.state.color},model:{value:t.$store.state.snackbar,callback:function(a){t.$set(t.$store.state,"snackbar",a)},expression:"$store.state.snackbar"}},[e("span",[t._v(t._s(t.$store.state.texto))]),e("v-btn",{attrs:{text:"",color:"white"},on:{click:function(a){t.$store.state.snackbar=!1}}},[t._v("Close")])],1),e("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[e("v-container",{staticClass:"my-12"},[e("h1",{staticClass:"d-flex justify-center subheading grey--text"},[t._v("Dashboard")]),e("v-layout",{staticClass:"d-flex flex-wrap justify-center align-center"},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-btn",{staticClass:"mb-4",attrs:{dense:"",text:"",color:"black"},on:{click:function(a){return t.sortBy("institution")}}},[e("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-folder")]),e("span",{staticClass:"body-1"},[t._v("Ordenar por Bloco")])],1)],1),e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-btn",{staticClass:"mb-4",attrs:{dense:"",text:"",color:"black"},on:{click:function(a){return t.sortBy("discipline")}}},[e("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-file-document")]),e("span",{staticClass:"body-1"},[t._v("Ordenar por disciplina")])],1)],1),e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-btn",{staticClass:"mb-4",attrs:{dense:"",text:"",color:"black"},on:{click:function(a){t.refresh(),t.refreshProject()}}},[e("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-refresh")]),e("span",{staticClass:"body-1"},[t._v("Refresh")])],1)],1)],1),t._l(t.projects,(function(a){return e("v-card",{key:a.id,staticClass:"mb-10 ",attrs:{flat:""}},["Agendado"===a.status?e("div",[e("v-divider"),e("v-layout",{class:"pa-3 project "+a.status,attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Bloco")]),e("div",[t._v(t._s(a.institution))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Disciplina")]),e("div",[t._v(t._s(a.discipline))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Conteudo")]),e("div",{staticClass:"text-justify "},[t._v(t._s(a.content))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Data")]),e("div",[t._v(t._s(t._f("moment")(a.data,"DD/MM/YYYY")))])]),e("v-flex",{attrs:{xs12:"",sm4:"",md2:""}},[e("div",{staticClass:"d-flex justify-center caption grey--text"},[t._v("Nome")]),e("div",{staticClass:"d-flex justify-center mt-6"},[e("v-avatar",{attrs:{size:"100"}},[void 0===a.user.profile?e("div",[e("img",{staticStyle:{width:"100%",height:"100px"},attrs:{src:s("0463")}})]):e("div",[e("img",{staticStyle:{width:"100%",height:"100px"},attrs:{src:a.user.profile}})])]),e("div",{staticClass:"d-flex align-self-center mx-4"},[t._v(" "+t._s(a.user.nome)+" ")])],1)]),e("v-flex",{attrs:{xs12:"",sm4:"",md1:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Status")]),e("div",[t._v(t._s(a.status))])]),e("v-flex",{attrs:{xs6:"",sm4:"",md1:""}},[e("v-list",{staticClass:"d-flex flex-row"},[e("v-list-item",[e("v-btn",{staticClass:"error",attrs:{fab:"",text:""},on:{click:function(s){t.dialog=!t.dialog,t.receberTutoria(a)}}},[e("v-icon",[t._v("mdi-delete")])],1),!0===t.dialog?e("v-row",{attrs:{justify:"center"}},[e("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v("Voce tem certeza que deseja deletar esta tutoria?")]),e("v-card-text",[t._v(" Caso dejese deletar esta tutoria, esteje ciente que estes dados serao apagados da base dados da nossa plataforma, e voce nao podera consultar novamente esta tutoria!!. ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Discordar")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(a){t.dialog=!1,t.removerDashboard()}}},[t._v("Aceito")])],1)],1)],1)],1):t._e()],1)],1)],1),e("v-flex",{attrs:{xs12:"",sm8:"",md1:""}},[e("div",[e("v-list-item",{staticClass:"d-flex justify-start align-end"},[e("v-btn",{staticClass:"green black--text"},[t._v("ACEITAR PROPOSTA DE PROVA")])],1)],1)])],1),e("v-divider")],1):t._e()])})),e("Pagination",{attrs:{tutorias:t.projects}})],2)],1)],1)},o=[],n=s("bcb3"),c=s("e924"),l={components:{Pagination:c["a"]},data:function(){return{projects:{},fields:{},user:{},isActive:!1,dialog:!1,dialog1:!1,tutoria:{},pages:[]}},mounted:function(){this.refresh()},methods:{sortBy:function(t){this.projects.sort((function(a,s){return a[t]<s[t]?-1:1}))},refresh:function(){var t=this;n["a"].listar().then((function(a){t.projects=a,t.user=JSON.parse(localStorage.getItem("user"))})).catch((function(t){return t}))},receberTutoria:function(t){this.tutoria=t,this.fields=this.tutoria},removerDashboard:function(){var t=this;n["a"].removerTutoria(this.tutoria._id).then((function(a){t.$store.getters.snackbarRes,t.$store.state.texto="Tutoria removida com sucesso!"})).catch((function(a){t.$store.getters.snackbarErr,t.$.store.stete.texto="Falha ao remover tutoria!"}))}}},d=l,v=(s("05dc"),s("2877")),u=s("6544"),f=s.n(u),m=s("8212"),x=s("8336"),p=s("b0af"),b=s("99d9"),g=s("a523"),_=s("169a"),h=s("ce7e"),C=s("0e8f"),k=s("132d"),y=s("a722"),V=s("8860"),j=s("da13"),w=s("0fd9"),D=s("2db4"),$=s("2fa4"),A=Object(v["a"])(d,i,o,!1,null,null,null),T=A.exports;f()(A,{VAvatar:m["a"],VBtn:x["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VContainer:g["a"],VDialog:_["a"],VDivider:h["a"],VFlex:C["a"],VIcon:k["a"],VLayout:y["a"],VList:V["a"],VListItem:j["a"],VRow:w["a"],VSnackbar:D["a"],VSpacer:$["a"]});var O=s("f321"),S={components:{DashTutoria:T,NavDrag:O["a"]}},B=S,P=s("7496"),R=Object(v["a"])(B,e,r,!1,null,null,null);a["default"]=R.exports;f()(R,{VApp:P["a"]})},e772:function(t,a,s){}}]);
//# sourceMappingURL=chunk-3d874fa6.a177cc21.js.map