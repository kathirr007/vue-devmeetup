(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)n=o[d],i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vue-devmeetup/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=a("bb71");a("da64");s["a"].use(i["a"],{iconfont:"md",theme:{}});var r=a("8aa5"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{staticClass:"teal",attrs:{dark:"",temporary:"",app:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-list",[t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t.userIsAuthenticated?a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("exit_to_app")])],1),a("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),a("v-toolbar",{attrs:{dark:"",color:"teal darken-4"}},[a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Vue DevMeetup")])],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return a("v-btn",{key:e.title,staticClass:"text-capitalize",attrs:{flat:"",to:e.link}},[a("v-icon",{staticClass:"hidden-sm-and-down",attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t.userIsAuthenticated?a("v-btn",{staticClass:"text-capitalize",attrs:{flat:""},on:{click:t.onLogout}},[a("v-icon",{staticClass:"hidden-sm-and-down",attrs:{left:"",dark:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),a("main",{},[a("router-view")],1)],1)},o=[],l={name:"App",data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"supervisor_account",title:"View Meetups",link:"/meetups"},{icon:"room",title:"Organize Meetup",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},c=l,u=(a("5c0b"),a("b0a0"),a("2877")),d=a("6544"),p=a.n(d),f=a("7496"),m=a("8336"),v=a("132d"),h=a("8860"),g=a("ba95"),x=a("40fe"),b=a("5d23"),w=a("f774"),C=a("9910"),y=a("71d9"),_=a("2a7f"),V=a("706c"),D=Object(u["a"])(c,n,o,!1,null,null,null),M=D.exports;p()(D,{VApp:f["a"],VBtn:m["a"],VIcon:v["a"],VList:h["a"],VListTile:g["a"],VListTileAction:x["a"],VListTileContent:b["a"],VNavigationDrawer:w["a"],VSpacer:C["a"],VToolbar:y["a"],VToolbarItems:_["a"],VToolbarSideIcon:V["a"],VToolbarTitle:_["b"]});var k=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[a("v-btn",{attrs:{large:"",dark:"",color:"teal",router:"",to:"/meetups"}},[t._v("Explore Meetups")])],1),a("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[a("v-btn",{attrs:{large:"",dark:"",color:"teal",router:"",to:"/meetup/new"}},[t._v("Organize Meetup")])],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?a("v-progress-circular",{staticClass:"primary--text",attrs:{value:70,indeterminate:"",width:7}}):t._e()],1)],1),t.loading?t._e():a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.meetups,function(e,s){return a("v-carousel-item",{key:s,staticStyle:{cursor:"pointer"},attrs:{src:e.imageUrl},on:{click:function(a){return t.onLoadMeetup(e.id)}}},[a("div",{staticClass:"title",attrs:{"align-center":""}},[t._v(t._s(e.title))])])}),1)],1)],1),a("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("p",[t._v("Join our Awesome Meetups!")])])],1)],1)},T=[],$={computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/".concat(t))}}},U=$,L=(a("75ff"),a("5e66")),S=a("3e35"),P=a("a523"),E=a("0e8f"),j=a("a722"),A=a("490a"),O=Object(u["a"])(U,I,T,!1,null,"5334f56a",null),F=O.exports;p()(O,{VBtn:m["a"],VCarousel:L["a"],VCarouselItem:S["a"],VContainer:P["a"],VFlex:E["a"],VLayout:j["a"],VProgressCircular:A["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},t._l(t.meetups,function(e){return a("v-layout",{key:e.id,staticClass:"mb-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[a("v-card",{staticClass:"teal lighten-2"},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[a("v-img",{attrs:{cover:"",height:"125",src:e.imageUrl}})],1),a("v-flex",{attrs:{sm8:"",md9:""}},[a("v-card-title",{class:{"pa-3":t.$vuetify.breakpoint.smAndUp,"pa-0 py-3":t.$vuetify.breakpoint.xs},attrs:{"primary-title":""}},[a("div",[a("h4",{staticClass:"headline white--text mb-0"},[t._v(t._s(e.title))]),a("div",[t._v(t._s(t.formatDate(e.date)))])])]),a("v-card-actions",{class:{"pa-0 px-3":t.$vuetify.breakpoint.smAndUp,"pa-0":t.$vuetify.breakpoint.xs}},[a("v-btn",{staticClass:"teal",attrs:{dark:"",to:"meetups/"+e.id}},[a("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("View Meetup\n                ")],1)],1)],1)],1)],1)],1)],1)],1)}),1)},q=[],z=a("70f2"),K=a.n(z),Y={data:function(){return{format:K.a}},methods:{formatDate:function(t){return K()(t,"Do MMM YYYY hh:mm A")}},computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},N=Y,R=a("b0af"),H=a("99d9"),J=a("12b2"),W=a("adda"),Z=Object(u["a"])(N,B,q,!1,null,"179171d0",null),Q=Z.exports;p()(Z,{VBtn:m["a"],VCard:R["a"],VCardActions:H["a"],VCardTitle:J["a"],VContainer:P["a"],VFlex:E["a"],VIcon:v["a"],VImg:W["a"],VLayout:j["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("h4",{staticClass:"teal--text headline"},[t._v("Create a new Meetup")])])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onCreateMeetup(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-btn",{staticClass:"teal white--text text-capitalize ma-0 mb-3",on:{click:t.onPickFile}},[t._v("Upload Image")]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("img",{attrs:{src:t.imageUrl,height:"200"}})])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-textarea",{attrs:{label:"Description",name:"description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),a("v-layout",{staticClass:"mb-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-date-picker",{attrs:{"header-color":"teal",color:"cyan"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-time-picker",{attrs:{"header-color":"teal",color:"cyan"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),a("v-layout",{staticClass:"mt-3",attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-btn",{staticClass:"teal white--text ma-0",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create Meetup")])],1)],1)],1)])],1)],1)},X=[],tt=a("768b"),et=(a("7f7f"),a("4917"),{data:function(){return{title:"",location:"",description:"",imageUrl:"",date:(new Date).toISOString().substr(0,10),time:new Date,image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},submitableDateTime:function(){var t=new Date(this.date);if("string"===typeof this.time){var e=this.time.match(/^(\d+)/)[1],a=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(a)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submitableDateTime,id:"wert78ikjhgfd".concat(Math.floor(1e4*Math.random()))};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,a=t.target.files,s=a[0].name;if(s.lastIndexOf(".")<=0)return alert("Please add a value file!");var i=new FileReader;i.addEventListener("load",function(){e.imageUrl=i.result}),i.readAsDataURL(a[0]);var r=Object(tt["a"])(a,1);this.image=r[0]}}}),at=et,st=a("2e4b"),it=a("2677"),rt=a("a844"),nt=a("c964"),ot=Object(u["a"])(at,G,X,!1,null,"3457f4f2",null),lt=ot.exports;p()(ot,{VBtn:m["a"],VContainer:P["a"],VDatePicker:st["a"],VFlex:E["a"],VLayout:j["a"],VTextField:it["a"],VTextarea:rt["a"],VTimePicker:nt["a"]});var ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Profile Page")])])}],dt={},pt=dt,ft=Object(u["a"])(pt,ct,ut,!1,null,"0ae28e8c",null),mt=ft.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.err?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("app-alert",{attrs:{text:t.err.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-text",[a("v-container",[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSignin(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"email",label:"Email Address",id:"email",type:"email",color:"teal",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",color:"teal",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"teal white--text ma-0",type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign in\n                    "),a("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[a("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},ht=[],gt={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},err:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){console.log("Alert Dismissed..."),this.$store.dispatch("clearError")}}},xt=gt,bt=Object(u["a"])(xt,vt,ht,!1,null,"081bb697",null),wt=bt.exports;p()(bt,{VBtn:m["a"],VCard:R["a"],VCardText:H["b"],VContainer:P["a"],VFlex:E["a"],VIcon:v["a"],VLayout:j["a"],VTextField:it["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.err?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("app-alert",{attrs:{text:t.err.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-text",[a("v-container",[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSignup(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"email",label:"Email Address",id:"email",type:"email",color:"teal",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",color:"teal",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",color:"teal",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"teal white--text ma-0",type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign up\n                    "),a("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[a("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},yt=[],_t={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password===this.confirmPassword||"Passwords do not match"},user:function(){return this.$store.getters.user},err:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){console.log({email:this.email,password:this.password,confirmPassword:this.confirmPassword}),this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){console.log("Alert Dismissed..."),this.$store.dispatch("clearError")}}},Vt=_t,Dt=Object(u["a"])(Vt,Ct,yt,!1,null,"57c5b9d7",null),Mt=Dt.exports;p()(Dt,{VBtn:m["a"],VCard:R["a"],VCardText:H["b"],VContainer:P["a"],VFlex:E["a"],VIcon:v["a"],VLayout:j["a"],VTextField:it["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[t.loading?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?a("v-progress-circular",{staticClass:"primary--text",attrs:{value:70,indeterminate:"",width:7}}):t._e()],1)],1):a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[a("h4",{staticClass:"headline teal--text"},[t._v(t._s(t.meetup.title))]),t.userIsCreator?[a("v-spacer"),a("app-edit-meetup-details-dialog",{attrs:{meetup:t.meetup}})]:t._e()],2),a("v-img",{attrs:{responsive:"",height:"400",src:t.meetup.imageUrl}}),a("v-card-text",{staticClass:"mt-2"},[a("div",{staticClass:"info--text title mb-2"},[t._v(t._s(t.formatDate(t.meetup.date))+" - "+t._s(t.meetup.location))]),a("div",[t.userIsCreator?a("app-edit-meetup-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t.userIsCreator?a("app-edit-meetup-time-dialog",{attrs:{meetup:t.meetup}}):t._e()],1),a("p",[t._v(t._s(t.meetup.description))])]),a("v-card-actions",[a("v-spacer"),t.userIsAuthenticated&&!t.userIsCreator?a("app-meetup-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)},It=[],Tt={data:function(){return{format:K.a}},methods:{formatDate:function(t){return K()(t,"Do MMM YYYY hh:mm A")}},props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}},$t=Tt,Ut=Object(u["a"])($t,kt,It,!1,null,"d54ac4be",null),Lt=Ut.exports;p()(Ut,{VCard:R["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:J["a"],VContainer:P["a"],VFlex:E["a"],VImg:W["a"],VLayout:j["a"],VProgressCircular:A["a"],VSpacer:C["a"]});var St=a("2f62"),Pt=(a("55dd"),a("cebc")),Et=(a("7514"),{state:{loadedMeetups:[{imageUrl:"https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg",id:"qsdfhsdfghjk",title:"Meetup-01",date:new Date,location:"Madurai",description:"The meetup is happening at Madurai"},{imageUrl:"https://images.pexels.com/photos/682016/pexels-photo-682016.jpeg",id:"12wedrt678uijk",title:"Meetup-02",date:new Date,location:"Delhi",description:"The meetup is happening at Delhi"},{imageUrl:"https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",id:"1234eftyukl",title:"Meetup-03",date:new Date,location:"Chennai",description:"The meetup is happening at Chennai"},{imageUrl:"https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",id:"dfgh7678ijhg",title:"Meetup-04",date:new Date,location:"Bangalore",description:"The meetup is happening at Bangalore"},{imageUrl:"https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",id:"qw46yghjio",title:"Meetup-05",date:new Date,location:"Mysore",description:"The meetup is happening at Mysore"}]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetup:function(t,e){var a=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(a.title=e.title),e.description&&(a.description=e.description),e.date&&(a.date=e.date)}},actions:{loadMeetups:function(t){var e=t.commit;e("setLoading",!0),r["database"]().ref("meetups").once("value").then(function(t){var a=[],s=t.val();for(var i in s)a.push({id:i,title:s[i].title,description:s[i].description,imageUrl:s[i].imageUrl,date:s[i].date,location:s[i].location,creatorId:s[i].creatorId});e("setLoadedMeetups",a),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!0)})},createMeetup:function(t,e){var a,s,i=t.commit,n=t.getters,o={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:n.user.id};r["database"]().ref("meetups").push(o).then(function(t){return console.log(t),s=t.key,s}).then(function(t){var a=e.image.name,s=a.slice(a.lastIndexOf("."));return r["storage"]().ref("meetups/".concat(t,".").concat(s)).put(e.image)}).then(function(t){return console.log(t),a=t.metadata.name,r["storage"]().ref(t.metadata.fullPath).getDownloadURL()}).then(function(t){return a=t,r["database"]().ref("meetups").child(s).update({imageUrl:t})}).then(function(){i("createMeetup",Object(Pt["a"])({},o,{id:s,imageUrl:a}))}).catch(function(t){console.log(t)})},updateMeetupData:function(t,e){var a=t.commit;a("setLoading",!0);var s={};e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date),r["database"]().ref("meetups").child(e.id).update(s).then(function(){a("setLoading",!1),a("updateMeetup",e)}).catch(function(t){console.log(t),a("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}}),jt=a("d656"),At=a.n(jt),Ot=(a("20d6"),{state:{user:null},mutations:{registerUserForMeetup:function(t,e){var a=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===a})>=0||(t.user.registeredMeetups.push(a),t.user.fbKeys[a]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var a=t.user.registeredMeetups;a.splice(a.findIndex(function(t){return t.id===e}),1),At()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var a=t.commit,s=t.getters;a("setLoading",!0);var i=s.user;r["database"]().ref("/users/".concat(i.id)).child("/registrations/").push(e).then(function(t){a("setLoading",!1),a("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),a("setLoading",!1)})},unregisterUserFromMeetup:function(t,e){var a=t.commit,s=t.getters;a("setLoading",!0);var i=s.user;if(i.fbKeys){var n=i.fbKeys[e];r["database"]().ref("/users/".concat(i.id,"/registrations/")).child(n).remove().then(function(){a("setLoading",!1),a("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),a("setLoading",!1)})}},signUserUp:function(t,e){var a=t.commit;a("setLoading",!0),a("clearError"),r["auth"]().createUserWithEmailAndPassword(e.email,e.password).then(function(t){a("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};a("setUser",e)}).catch(function(t){a("setLoading",!1),a("setError",t),console.warn(t)})},signUserIn:function(t,e){var a=t.commit;a("setLoading",!0),a("clearError"),r["auth"]().signInWithEmailAndPassword(e.email,e.password).then(function(t){a("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};a("setUser",e)}).catch(function(t){a("setLoading",!1),a("setError",t),console.warn(t)})},autoSignIn:function(t,e){var a=t.commit;a("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(t){var e=t.commit,a=t.getters;e("setLoading",!0),r["database"]().ref("/users/".concat(a.user.id,"/registrations")).once("value").then(function(t){var s=t.val(),i=[],r={};for(var n in s)i.push(s[n]),r[s[n]]=n;console.log(i),console.log(r);var o={id:a.user.id,registeredMeetups:i,fbKeys:r};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;r["auth"]().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}}),Ft={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){var e=t.commit;e("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}};s["a"].use(St["a"]);var Bt=new St["a"].Store({modules:{meetup:Et,user:Ot,shared:Ft}}),qt=function(t,e,a){Bt.getters.user?a():a("/signin")};s["a"].use(k["a"]);var zt=new k["a"]({mode:"history",base:"/vue-devmeetup/",routes:[{path:"*",component:F},{path:"/",name:"Home",component:F},{path:"/meetups",name:"Meetups",component:Q},{path:"/meetup/new",name:"CreateMeetup",component:lt,beforeEnter:qt},{path:"/meetups/:id",name:"Meetup",props:!0,component:Lt},{path:"/profile",name:"Profile",component:mt,beforeEnter:qt},{path:"/signup",name:"Signup",component:Mt},{path:"/signin",name:"Signin",component:wt}]}),Kt=a("9483");Object(Kt["a"])("".concat("/vue-devmeetup/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Yt=function(t){var e=new Date(t);return e.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minutes:"2-digit"})},Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",{attrs:{value:!0,color:"error",icon:"warning",error:"",dismissible:""},on:{input:t.onClose}},[t._v("\n  "+t._s(t.text)+"\n")])},Rt=[],Ht={props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},Jt=Ht,Wt=a("0798"),Zt=Object(u["a"])(Jt,Nt,Rt,!1,null,"0ebddcc8",null),Qt=Zt.exports;p()(Zt,{VAlert:Wt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{staticClass:"teal white--text",attrs:{slot:"activator",fab:""},slot:"activator"},[a("v-icon",[t._v("edit")])],1),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"px-0"},[a("h4",{staticClass:"headline teal--text"},[t._v("Edit Mettup")])])],1)],1),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[a("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),a("v-textarea",{attrs:{label:"Description",name:"description",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-actions",{staticClass:"pa-0 mt-3"},[a("v-btn",{staticClass:"teal--text darken-1 ma-0 mr-3",on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),a("v-btn",{staticClass:"teal--text darken-1 ma-0",on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},Xt=[],te={props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}},ee=te,ae=a("169a"),se=a("ce7e6"),ie=Object(u["a"])(ee,Gt,Xt,!1,null,"469f04a8",null),re=ie.exports;p()(ie,{VBtn:m["a"],VCard:R["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:J["a"],VContainer:P["a"],VDialog:ae["a"],VDivider:se["a"],VFlex:E["a"],VIcon:v["a"],VLayout:j["a"],VTextField:it["a"],VTextarea:rt["a"]});var ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{staticClass:"teal white--text ma-0 mb-3",attrs:{slot:"activator"},slot:"activator"},[t._v("\n    Edit Date\n  ")]),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"px-0"},[a("h4",{staticClass:"headline teal--text"},[t._v("Edit Mettup Date")])])],1)],1),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-date-picker",{staticStyle:{width:"100%"},attrs:{"full-width":"",actions:""},model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}},[[a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("v-btn",{staticClass:"teal white--text text-capitalize",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),a("v-btn",{staticClass:"teal white--text text-capitalize",attrs:{flat:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("Save")])],1)]],2)],1)],1)],1)],1)],1)},oe=[],le={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),a=new Date(this.editableDate).getUTCMonth(),s=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(a),t.setUTCFullYear(s),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t}),this.editDialog=!1}},created:function(){this.editableDate=new Date(this.meetup.date).toISOString().substr(0,10)}},ce=le,ue=Object(u["a"])(ce,ne,oe,!1,null,"1aaf69a7",null),de=ue.exports;p()(ue,{VBtn:m["a"],VCard:R["a"],VCardTitle:J["a"],VContainer:P["a"],VDatePicker:st["a"],VDialog:ae["a"],VDivider:se["a"],VFlex:E["a"],VLayout:j["a"]});var pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{staticClass:"teal white--text ma-0 mb-3 ml-3",attrs:{slot:"activator"},slot:"activator"},[t._v("\n    Edit Time\n  ")]),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{staticClass:"px-0"},[a("h4",{staticClass:"headline teal--text"},[t._v("Edit Mettup Time")])])],1)],1),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-time-picker",{staticStyle:{width:"100%"},attrs:{"full-width":"",actions:"",format:"24hr"},model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}},[[a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:"","justify-end":""}},[a("v-btn",{staticClass:"teal white--text text-capitalize",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),a("v-btn",{staticClass:"teal white--text text-capitalize",attrs:{flat:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("Save")])],1)]],2)],1)],1)],1)],1)],1)},fe=[],me={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date,e=this.editableTime.match(/^(\d+)/)[1],a=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(a),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t}),this.editDialog=!1}},created:function(){this.editableTime=new Date}},ve=me,he=Object(u["a"])(ve,pe,fe,!1,null,"92fdb04a",null),ge=he.exports;p()(he,{VBtn:m["a"],VCard:R["a"],VCardTitle:J["a"],VContainer:P["a"],VDialog:ae["a"],VDivider:se["a"],VFlex:E["a"],VLayout:j["a"],VTimePicker:nt["a"]});var xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[a("v-btn",{staticClass:"teal white--text ma-0 mb-3",attrs:{slot:"activator"},slot:"activator"},[t._v("\n    "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n  ")]),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?a("v-card-title",{staticClass:"px-0"},[a("h4",{staticClass:"headline teal--text"},[t._v("Unregister from Meetup?")])]):a("v-card-title",{staticClass:"px-0"},[a("h4",{staticClass:"headline teal--text"},[t._v("Register for Meetup?")])])],1)],1),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[t._v("\n                      You can always change your decision later on.\n                  ")])],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-actions",[a("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")]),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgee}},[t._v("Confirm")])],1)],1)],1)],1)],1)],1)},be=[],we={props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgee:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}},Ce=we,ye=Object(u["a"])(Ce,xe,be,!1,null,"8398dae2",null),_e=ye.exports;p()(ye,{VBtn:m["a"],VCard:R["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:J["a"],VContainer:P["a"],VDialog:ae["a"],VDivider:se["a"],VFlex:E["a"],VLayout:j["a"]}),s["a"].config.productionTip=!1,s["a"].filter("date",Yt),s["a"].component("app-alert",Qt),s["a"].component("app-edit-meetup-details-dialog",re),s["a"].component("app-edit-meetup-date-dialog",de),s["a"].component("app-edit-meetup-time-dialog",ge),s["a"].component("app-meetup-register-dialog",_e),new s["a"]({el:"#app",router:zt,store:Bt,render:function(t){return t(M)},created:function(){var t=this;r["initializeApp"]({apiKey:"AIzaSyAbA1H6ZLadHkQ0wuzS_1NYRkDiIgZKHlw",authDomain:"vue-devmeetup-eadcf.firebaseapp.com",databaseURL:"https://vue-devmeetup-eadcf.firebaseio.com",projectId:"vue-devmeetup-eadcf",storageBucket:"gs://vue-devmeetup-eadcf.appspot.com"}),r["auth"]().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},"5c0b":function(t,e,a){"use strict";var s=a("6879"),i=a.n(s);i.a},6879:function(t,e,a){},"75ff":function(t,e,a){"use strict";var s=a("8a1a"),i=a.n(s);i.a},"8a1a":function(t,e,a){},b0a0:function(t,e,a){"use strict";var s=a("bfea"),i=a.n(s);i.a},bfea:function(t,e,a){}});
//# sourceMappingURL=app.65be0ecc.js.map