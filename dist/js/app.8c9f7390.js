(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1dbe":function(e,t,r){},2032:function(e,t,r){"use strict";r("bbce")},"3c45":function(e,t,r){"use strict";r("acfd")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},s=[],o={name:"App"},i=o,l=r("2877"),c=r("6544"),u=r.n(c),d=r("7496"),m=Object(l["a"])(i,n,s,!1,null,null,null),p=m.exports;u()(m,{VApp:d["a"]});var v=r("1da1"),f=(r("96cf"),r("8c4f")),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",{staticClass:"grey lighten-4"},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{sm:"8",lg:"5",md:"6"}},[r("router-view")],1)],1)],1)],1)},b=[],w={name:"Auth"},g=w,_=r("62ad"),x=r("a523"),k=r("f6c4"),y=r("0fd9"),V=Object(l["a"])(g,h,b,!1,null,null,null),P=V.exports;u()(V,{VCol:_["a"],VContainer:x["a"],VMain:k["a"],VRow:y["a"]});var C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",{staticClass:"grey lighten-4"},[r("v-navigation-drawer",{attrs:{color:"primary",app:"","mini-variant":e.drawer,permanent:"","mini-variant-width":"70"}},[r("v-list-item",{staticClass:"secondary",class:{"pb-2":e.drawer&&!e.$vuetify.breakpoint.mobile,"pb-1":!e.drawer&&!e.$vuetify.breakpoint.mobile,"py-0":e.$vuetify.breakpoint.mobile},scopedSlots:e._u([{key:"default",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",[r("span",{class:{"font-weight-bold":e.drawer,"text-h5":e.drawer,"pb-3":e.drawer}},[e._v(" "+e._s(e.getName)+" ")])]),e.user&&e.user.email&&!e.drawer?r("v-list-item-subtitle",{staticClass:"caption"},[e._v(" "+e._s(e.user.email)+" ")]):e._e()],1)]},proxy:!0}])}),r("v-list",{attrs:{dense:"",nav:"",dark:""}},e._l(e.navs,(function(t){return r("v-list-item",{key:t.title,staticClass:"custom-hover rounded-0",attrs:{link:"",exact:"",to:{name:t.name},"exact-active-class":"custom-active"}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"overline"},[e._v(e._s(t.title))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"white"}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v(" Admin Dashboard")]),r("v-spacer"),r("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition","nudge-top":"5"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"secondary black--text elevation-0",attrs:{fab:"",small:""}},"v-btn",n,!1),a),[r("v-icon",[e._v("mdi-account")])],1),r("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-down")])]}}])},[r("v-list",[r("v-list-item",{attrs:{link:"",to:{name:"settings"}}},[r("v-list-item-title",{staticClass:"overline"},[e._v(" Settings ")])],1),r("v-list-item",{attrs:{link:"",to:{name:"profile"}}},[r("v-list-item-title",{staticClass:"overline"},[e._v(" Profile ")])],1),r("v-list-item",[r("v-list-item-title",[r("v-btn",{staticClass:"error black--text",attrs:{small:"",block:"",loading:e.loading},on:{click:e.logout}},[r("v-icon",[e._v("mdi-logout-variant")])],1)],1)],1)],1)],1)],1),r("v-container",{staticClass:"py-5"},[r("router-view")],1)],1)},O=[],$=r("2909"),j=(r("b0c0"),r("4d63"),r("ac1f"),r("25f0"),r("a1f0"),{name:"Pages",data:function(){return{loading:!1,user:null,drawer:null,navs:[{title:"Home",icon:"mdi-home",name:"home"},{title:"Dashboard",icon:"mdi-view-dashboard",name:"dashboard"},{title:"Photos",icon:"mdi-image",name:"photos"},{title:"About",icon:"mdi-help-box",name:"about"}]}},created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUser();case 2:case"end":return t.stop()}}),t)})))()},computed:{getName:function(){if(this.user&&this.user.name){if(this.drawer){var e,t,r=new RegExp(/(\p{L}{1})\p{L}+/,"gu"),a=Object($["a"])(this.user.name.matchAll(r))||[];return a=(((null===(e=a.shift())||void 0===e?void 0:e[1])||"")+((null===(t=a.pop())||void 0===t?void 0:t[1])||"")).toUpperCase(),a}return this.user.name}return""}},methods:{getUser:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$store.dispatch("auth/getUser");case 4:r=t.sent,e.user=r.attributes,t.next=12;break;case 8:return t.prev=8,t.t0=t["catch"](0),e.$toasted.show(t.t0.data.error),t.abrupt("return");case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))()},logout:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$store.dispatch("auth/logout");case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t["catch"](0),e.$toasted.show(t.t0.data.error),t.abrupt("return");case 10:return t.prev=10,e.$router.push({name:"login"}),e.loading=!1,t.finish(10);case 14:case"end":return t.stop()}}),t,null,[[0,6,10,14]])})))()}}}),S=j,q=(r("3c45"),r("40dc")),R=r("5bc1"),T=r("8336"),I=r("132d"),E=r("8860"),A=r("da13"),L=r("5d23"),D=r("34c3"),F=r("e449"),B=r("f774"),M=r("2fa4"),N=r("2a7f"),U=Object(l["a"])(S,C,O,!1,null,"0ed3b934",null),z=U.exports;u()(U,{VAppBar:q["a"],VAppBarNavIcon:R["a"],VBtn:T["a"],VContainer:x["a"],VIcon:I["a"],VList:E["a"],VListItem:A["a"],VListItemContent:L["a"],VListItemIcon:D["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VMain:k["a"],VMenu:F["a"],VNavigationDrawer:B["a"],VSpacer:M["a"],VToolbarTitle:N["a"]});var H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[e._v(" About ")])],1)},J=[],Y={name:"About"},G=Y,K=Object(l["a"])(G,H,J,!1,null,null,null),Q=K.exports;u()(K,{VCol:_["a"],VRow:y["a"]});var W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[r("v-card",{attrs:{dense:""}},[r("v-card-text",[r("v-card-actions",[r("v-btn",{staticClass:"mr-5",attrs:{color:"primary",rounded:""},on:{click:function(t){return t.stopPropagation(),e.showDialog()}}},[e._v(" Add ")]),r("v-text-field",{staticClass:"shrink mr-3",attrs:{dense:"","append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),r("v-divider",{staticClass:"py-5",attrs:{vertical:""}})],1),r("v-data-table",{attrs:{search:e.search,"item-key":"id","mobile-breakpoint":0,"calculate-widths":!1,headers:e.headers,items:e.items,"sort-by":"id","sort-desc":!0,"items-per-page":5},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[r("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return t.stopPropagation(),e.showDialog(a)}}},[r("v-icon",{attrs:{small:""}},[e._v("mdi-pencil")])],1),r("v-btn",{attrs:{icon:"",small:""},on:{click:function(t){return e.remove(a)}}},[r("v-icon",{attrs:{small:""}},[e._v("mdi-delete")])],1)]}}],null,!0)})],1)],1),r("v-dialog",{attrs:{"max-width":"500"},on:{"click:outside":function(t){return e.close()}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card",[r("v-card-title",{staticClass:"primary mb-6 white--text overline"},[e._v(" "+e._s(e.cardTitle)+" ")]),r("v-card-text",[r("ValidationProvider",{attrs:{name:"name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"name",label:"Name",dense:"","error-messages":a,required:""},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"calories",rules:"required|number"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"calories",label:"Calories",dense:"","error-messages":a,required:""},model:{value:e.item.calories,callback:function(t){e.$set(e.item,"calories",t)},expression:"item.calories"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"fat",rules:"required|number"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"fat",label:"Fat",dense:"","error-messages":a,required:""},model:{value:e.item.fat,callback:function(t){e.$set(e.item,"fat",t)},expression:"item.fat"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"carbs",rules:"required|number"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"carbs",label:"Carbs",dense:"","error-messages":a,required:""},model:{value:e.item.carbs,callback:function(t){e.$set(e.item,"carbs",t)},expression:"item.carbs"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"protein",rules:"required|number"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"protein",label:"Protein",dense:"","error-messages":a,required:""},model:{value:e.item.protein,callback:function(t){e.$set(e.item,"protein",t)},expression:"item.protein"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"iron",rules:"required|number"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"iron",label:"Iron",dense:"","error-messages":a,required:""},model:{value:e.item.iron,callback:function(t){e.$set(e.item,"iron",t)},expression:"item.iron"}})]}}],null,!0)})],1),r("v-card-actions",[r("v-btn",{staticClass:"mr-3",attrs:{loading:e.loading,text:"",color:"primary",disabled:a,dark:!a},on:{click:function(t){return e.create()}}},[e._v(" Save ")]),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.close()}}},[e._v(" Close ")]),r("v-spacer")],1)],1)]}}])})],1)],1)],1)},X=[],Z=(r("7db0"),r("a434"),r("b64b"),{name:"Home",data:function(){return{selectedItem:null,cardTitle:"Create Item",search:"",dialog:!1,loading:!1,item:{name:null,calories:null,fat:null,carbs:null,protein:null,iron:null},headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"},{text:"Actions",value:"actions",sortable:!1}],items:[{id:1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:1},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:1},{id:3,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:7},{id:4,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:8},{id:5,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:16},{id:6,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:0},{id:7,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:2},{id:8,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:45},{id:9,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:22}]}},methods:{create:function(){var e=this;if(this.selectedItem){var t=this.items.find((function(t){return t.id==e.selectedItem.id}));this.set(this.item,t)}else{var r=this.item;r["id"]=this.items.length+1,this.items.push(this.item)}this.close()},remove:function(e){var t=this.items.indexOf(e);t>-1&&this.items.splice(t,1)},showDialog:function(e){e?(this.selectedItem=e,this.set(e,this.item)):(this.selectedItem=null,this.reset(this.item)),this.dialog=!0},reset:function(e){this.$refs.observer&&this.$refs.observer.reset(),this.selectedItem=null,this.cardTitle="Create Item";for(var t=0,r=Object.keys(e);t<r.length;t++){var a=r[t];e[a]=null}},set:function(e,t){this.cardTitle="Update Item";for(var r=0,a=Object.keys(e);r<a.length;r++){var n=a[r];n in t&&(t[n]=e[n])}},close:function(){this.dialog=!1}}}),ee=Z,te=r("b0af"),re=r("99d9"),ae=r("8fea"),ne=r("169a"),se=r("ce7e"),oe=r("8654"),ie=Object(l["a"])(ee,W,X,!1,null,null,null),le=ie.exports;u()(ie,{VBtn:T["a"],VCard:te["a"],VCardActions:re["a"],VCardText:re["b"],VCardTitle:re["c"],VCol:_["a"],VDataTable:ae["a"],VDialog:ne["a"],VDivider:se["a"],VIcon:I["a"],VRow:y["a"],VSpacer:M["a"],VTextField:oe["a"]});var ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[e._v(" Settings ")])],1)},ue=[],de={name:"Settings"},me=de,pe=Object(l["a"])(me,ce,ue,!1,null,null,null),ve=pe.exports;u()(pe,{VCol:_["a"],VRow:y["a"]});var fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[e._v(" Profile ")])],1)},he=[],be={name:"Profile"},we=be,ge=Object(l["a"])(we,fe,he,!1,null,null,null),_e=ge.exports;u()(ge,{VCol:_["a"],VRow:y["a"]});var xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[e._v(" Dashboard ")])],1)},ke=[],ye={name:"Dashboard"},Ve=ye,Pe=Object(l["a"])(Ve,xe,ke,!1,null,null,null),Ce=Pe.exports;u()(Pe,{VCol:_["a"],VRow:y["a"]});var Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[e._v(" Photos ")])],1)},$e=[],je={name:"Photos"},Se=je,qe=Object(l["a"])(Se,Oe,$e,!1,null,null,null),Re=qe.exports;u()(qe,{VCol:_["a"],VRow:y["a"]});var Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card",[r("auth-card-title",[e._v("Login")]),r("v-card-text",[r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"email",label:"Email","prepend-inner-icon":"mdi-email-outline","error-messages":a,type:"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"password",label:"Password","prepend-inner-icon":"mdi-lock-outline","error-messages":a,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})]}}],null,!0)})],1),r("v-card-actions",[r("v-btn",{staticClass:"px-5",attrs:{loading:e.loading,color:"primary",rounded:"",disabled:a,dark:!a},on:{click:e.login}},[e._v(" Login ")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:"",small:"",to:{name:"password-reset-email"},plain:""}},[e._v(" Forgetten password? ")])],1),r("v-card-actions",{staticClass:"overline"},[r("v-spacer"),e._v(" Haven't registered? "),r("v-btn",{attrs:{color:"secondary",text:"",small:"",to:{name:"signup"},plain:""}},[e._v(" Sign up ")]),r("v-spacer")],1)],1)]}}])})},Ie=[],Ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"\n    text-uppercase\n    mt-4\n    text-center\n    py-4\n    card-title\n    font-weight-bold\n    secondary--text\n  "},[e._t("default",(function(){return[e._v("Title")]}))],2)},Ae=[],Le={name:"AuthCardTitle"},De=Le,Fe=(r("a470"),Object(l["a"])(De,Ee,Ae,!1,null,"9417f8bc",null)),Be=Fe.exports,Me={data:function(){return{showPassword:!1,loading:!1,user:{email:"",password:""}}},components:{AuthCardTitle:Be},methods:{login:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$store.dispatch("auth/login",e.user);case 4:e.$route.query.next?e.$router.push(e.$route.query.next):e.$router.push({name:"home"}),t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](0),e.$toasted.show(t.t0.data.error),t.abrupt("return");case 11:return t.prev=11,e.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})))()}}},Ne=Me,Ue=(r("845f"),Object(l["a"])(Ne,Te,Ie,!1,null,"127127b1",null)),ze=Ue.exports;u()(Ue,{VBtn:T["a"],VCard:te["a"],VCardActions:re["a"],VCardText:re["b"],VSpacer:M["a"],VTextField:oe["a"]});var He=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card",[r("auth-card-title",[e._v("Sign up")]),r("v-card-text",[r("v-row",[r("v-col",[r("ValidationProvider",{attrs:{name:"first_name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"first_name",label:"First Name","error-messages":a,required:""},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})]}}],null,!0)})],1),r("v-col",[r("ValidationProvider",{attrs:{name:"last_name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"last_name",label:"Last Name","error-messages":a,required:""},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})]}}],null,!0)})],1)],1),r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"email",label:"Email","prepend-inner-icon":"mdi-email-outline","error-messages":a,type:"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})]}}],null,!0)}),r("v-row",[r("v-col",[r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"password",label:"Password","prepend-inner-icon":"mdi-lock-outline","error-messages":a,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})]}}],null,!0)})],1),r("v-col",[r("ValidationProvider",{attrs:{name:"password_confirmation",vid:"password_confirmation",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"password_confirmation",label:"Confirm Password","prepend-inner-icon":"mdi-lock-outline","error-messages":a,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}})]}}],null,!0)})],1)],1),r("ValidationProvider",{attrs:{name:"market_id",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"market_id",label:"Market ID","error-messages":a,required:""},model:{value:e.user.market_id,callback:function(t){e.$set(e.user,"market_id",t)},expression:"user.market_id"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"terms_and_policy",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-checkbox",{attrs:{label:"I accept the terms and policies",name:"terms_and_policy",dense:"","error-messages":a,required:""},model:{value:e.user.terms_and_policy,callback:function(t){e.$set(e.user,"terms_and_policy",t)},expression:"user.terms_and_policy"}})]}}],null,!0)})],1),r("v-card-actions",[r("v-btn",{staticClass:"px-5",attrs:{loading:e.loading,color:"primary",rounded:"",disabled:a,dark:!a},on:{click:e.signup}},[e._v(" Sign up ")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:"",to:{name:"login"},plain:""}},[e._v(" Login ")])],1)],1)]}}])})},Je=[],Ye={data:function(){return{showPassword:!1,loading:!1,user:{first_name:"",last_name:"",email:"",password:"",password_confirmation:"",market_id:"",terms_and_policy:!1}}},components:{AuthCardTitle:Be},methods:{signup:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$store.dispatch("auth/signup",e.user);case 4:e.$toasted.show("A confirmation email has been sent",{type:"success"}),e.$router.push({name:"login"}),t.next=12;break;case 8:return t.prev=8,t.t0=t["catch"](0),e.$toasted.show(t.t0.data.error),t.abrupt("return");case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))()}}},Ge=Ye,Ke=(r("2032"),r("ac7c")),Qe=Object(l["a"])(Ge,He,Je,!1,null,"2236afe4",null),We=Qe.exports;u()(Qe,{VBtn:T["a"],VCard:te["a"],VCardActions:re["a"],VCardText:re["b"],VCheckbox:Ke["a"],VCol:_["a"],VRow:y["a"],VSpacer:M["a"],VTextField:oe["a"]});var Xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card",[r("auth-card-title",[e._v("Reset Password")]),r("v-card-text",[r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"password",label:"Password","prepend-inner-icon":"mdi-lock-outline","error-messages":a,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})]}}],null,!0)}),r("ValidationProvider",{attrs:{name:"password_confirmation",vid:"password_confirmation",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"password_confirmation",label:"Confirm Password","prepend-inner-icon":"mdi-lock-outline","error-messages":a,"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}})]}}],null,!0)})],1),r("v-card-actions",[r("v-btn",{staticClass:"px-5",attrs:{loading:e.loading,color:"primary",disabled:a,dark:!a},on:{click:function(t){return e.reset()}}},[e._v(" Reset Password ")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:"",to:{name:"login"},plain:""}},[e._v(" Login ")])],1)],1)]}}])})},Ze=[],et=r("5530"),tt={data:function(){return{showPassword:!1,loading:!1,user:{password:"",password_confirmation:""}}},components:{AuthCardTitle:Be},methods:{reset:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$store.dispatch("auth/resetPassword",Object(et["a"])(Object(et["a"])({},e.user),{},{token:e.$route.params.token}));case 4:e.$router.push({name:"login"}),t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](0),e.$toasted.show(t.t0.data.error),t.abrupt("return");case 11:return t.prev=11,e.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})))()}}},rt=tt,at=(r("63ab"),Object(l["a"])(rt,Xe,Ze,!1,null,"da0ba0c4",null)),nt=at.exports;u()(at,{VBtn:T["a"],VCard:te["a"],VCardActions:re["a"],VCardText:re["b"],VSpacer:M["a"],VTextField:oe["a"]});var st=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-card",[r("auth-card-title",[e._v("Password Reset Email")]),r("v-card-text",[r("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("v-text-field",{attrs:{name:"email",label:"Email","prepend-inner-icon":"mdi-email-outline","error-messages":a,type:"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})]}}],null,!0)})],1),r("v-card-actions",[r("v-btn",{staticClass:"px-5",attrs:{loading:e.loading,color:"primary",disabled:a,dark:!a},on:{click:function(t){return e.sendEmail()}}},[e._v(" Send Email ")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary",text:"",to:{name:"login"},plain:""}},[e._v(" Login ")])],1)],1)]}}])})},ot=[],it={data:function(){return{showPassword:!1,loading:!1,user:{email:""}}},components:{AuthCardTitle:Be},methods:{sendEmail:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$store.dispatch("auth/resetPasswordEmail",e.user);case 4:e.$toasted.show("Reset Email sent to ".concat(e.user.email),{type:"success"}),t.next=12;break;case 7:return t.prev=7,t.t0=t["catch"](0),console.log(t.t0),e.$toasted.show(t.t0.data.error),t.abrupt("return");case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,7,12,15]])})))()}}},lt=it,ct=Object(l["a"])(lt,st,ot,!1,null,"4b9678de",null),ut=ct.exports;u()(ct,{VBtn:T["a"],VCard:te["a"],VCardActions:re["a"],VCardText:re["b"],VSpacer:M["a"],VTextField:oe["a"]});var dt=r("2f62"),mt=r("1232"),pt={namespaced:!0,state:{token_data:{token:localStorage.getItem("t"),uid:localStorage.getItem("uid")},endpoints:{login:"auth/login/",logout:"auth/logout/",signup:"auth/signup/",user:"v1/users/",password_instructions:"auth/password_instructions/",reset_password:"auth/reset_password/"}},mutations:{updateToken:function(e,t){localStorage.setItem("t",t.authorization),localStorage.setItem("uid",t.uid)},removeToken:function(){localStorage.removeItem("t"),localStorage.removeItem("uid")}},actions:{login:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,s=e.state,r.prev=1,r.next=4,a["a"].axios.post(s.endpoints.login,{user:{email:t.email,password:t.password}});case 4:return o=r.sent,n("updateToken",o.headers),r.abrupt("return");case 9:throw r.prev=9,r.t0=r["catch"](1),r.t0.response;case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},logout:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.prev=1,s={headers:{Authorization:localStorage.getItem("t")}},t.next=5,a["a"].axios.delete(n.endpoints.logout,s);case 5:return r("removeToken"),t.abrupt("return");case 9:throw t.prev=9,t.t0=t["catch"](1),t.t0.response;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},signup:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,s,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,s=e.state,r.prev=1,r.next=4,a["a"].axios.post(s.endpoints.signup,{user:{first_name:t.first_name,last_name:t.last_name,email:t.email,password:t.password,password_confirmation:t.password_confirmation,market_id:t.market_id,terms_and_policy:t.terms_and_policy}});case 4:return o=r.sent,console.log(o.data),i=o.data.token,n("updateToken",i),r.abrupt("return");case 11:throw r.prev=11,r.t0=r["catch"](1),console.log(r.t0.data),r.t0.response;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},inspectToken:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=localStorage.getItem("t"),!t){e.next=9;break}if(r=Object(mt["a"])(t),n=r.exp,!(n-Date.now()/1e3<=0)){e.next=8;break}return a["a"].$toasted.show("Your token has expired. Please sign in",{type:"error"}),e.abrupt("return",!1);case 8:return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 12:return e.prev=12,e.t0=e["catch"](0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},resetPasswordEmail:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,r.prev=1,r.next=4,a["a"].axios.get(n.endpoints.password_instructions+"?email=".concat(t.email));case 4:return s=r.sent,r.abrupt("return",s.data);case 8:throw r.prev=8,r.t0=r["catch"](1),r.t0.response;case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},resetPassword:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,r.prev=1,r.next=4,a["a"].axios.put(n.endpoints.reset_password+"".concat(t.token,"/"),{registration:{password:t.password,password_confirmation:t.password_confirmation}});case 4:return s=r.sent,r.abrupt("return",s.data);case 8:throw r.prev=8,r.t0=r["catch"](1),r.t0.response;case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},getUser:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,t.prev=1,n={headers:{Authorization:localStorage.getItem("t")}},t.next=5,a["a"].axios.get(r.endpoints.user+"".concat(localStorage.getItem("uid"),"/"),n);case 5:return s=t.sent,o=s.data.data,t.abrupt("return",o);case 10:throw t.prev=10,t.t0=t["catch"](1),console.log(t.t0),t.t0.response;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}}};a["a"].use(dt["a"]);var vt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{auth:pt}});a["a"].use(f["a"]);var ft=[{path:"/auth",name:"auth",component:P,children:[{path:"/login",name:"login",component:ze},{path:"/signup",name:"signup",component:We},{path:"/password-reset/:token",name:"password-reset",component:nt},{path:"/password-reset-email",name:"password-reset-email",component:ut}]},{path:"/",component:z,meta:{requires_auth:!0},children:[{path:"/",name:"home",component:le},{path:"/profile",name:"profile",component:_e},{path:"/about",name:"about",component:Q},{path:"/dashboard",name:"dashboard",component:Ce},{path:"/photos",name:"photos",component:Re},{path:"/settings",name:"settings",component:ve}]}],ht=new f["a"]({mode:"history",base:"/",routes:ft});ht.beforeEach(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t,r,a){var n,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.query.next||t.fullPath||"/",s=t.matched.some((function(e){return e.meta.requires_auth})),e.next=4,vt.dispatch("auth/inspectToken");case 4:o=e.sent,s&&!o?a({name:"login",query:{next:n}}):a();case 6:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}());var bt=ht,wt=r("f309");a["a"].use(wt["a"]);var gt=new wt["a"]({theme:{themes:{light:{primary:"#023047",secondary:"#fb8500",accent:"#219ebc",error:"#d62828"}}}}),_t=r("7bb1"),xt=r("4c93");Object(_t["c"])("required",Object(et["a"])(Object(et["a"])({},xt["d"]),{},{message:"This field is required"})),Object(_t["c"])("email",Object(et["a"])(Object(et["a"])({},xt["c"]),{},{message:"Email is not valid"})),Object(_t["c"])("confirmed",Object(et["a"])(Object(et["a"])({},xt["a"]),{},{message:"Passwords do not match"})),Object(_t["c"])("double",Object(et["a"])(Object(et["a"])({},xt["b"]),{},{message:"Field is not a valid number"})),Object(_t["c"])("number",(function(e){var t=/^-?\d+\.?\d*$/,r=t.test(e);return!!r||"Field must be a number"})),a["a"].component("ValidationProvider",_t["b"]),a["a"].component("ValidationObserver",_t["a"]);var kt=r("bc3a"),yt=r.n(kt),Vt=r("2106"),Pt=r.n(Vt),Ct=yt.a.create({baseURL:"https://api-staging.veryfy.net/"});a["a"].use(Pt.a,Ct);var Ot=r("a65d"),$t=r.n(Ot);a["a"].use($t.a,{theme:"bubble",position:"top-right",duration:5e3,iconPack:"mdi",type:"error"}),a["a"].config.productionTip=!1,new a["a"]({router:bt,store:vt,vuetify:gt,render:function(e){return e(p)}}).$mount("#app")},"63ab":function(e,t,r){"use strict";r("a571")},"845f":function(e,t,r){"use strict";r("1dbe")},a470:function(e,t,r){"use strict";r("e829")},a571:function(e,t,r){},acfd:function(e,t,r){},bbce:function(e,t,r){},e829:function(e,t,r){}});
//# sourceMappingURL=app.8c9f7390.js.map