(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0453a291"],{"008a4":function(e,t,a){},"020f":function(e,t,a){e.exports=function(e){var t={};function a(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(s,o,function(t){return e[t]}.bind(null,o));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist/",a(a.s=89)}({0:function(e,t,a){"use strict";function s(e,t,a,s,o,i,n,r){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=l):o&&(l=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}a.d(t,"a",(function(){return s}))},11:function(e,t){e.exports=a("a4f6")},15:function(e,t){e.exports=a("72e8")},4:function(e,t){e.exports=a("3242")},89:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-dialog__wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleWrapperClick(t)}}},[a("div",{key:e.key,ref:"dialog",class:["el-dialog",{"is-fullscreen":e.fullscreen,"el-dialog--center":e.center},e.customClass],style:e.style,attrs:{role:"dialog","aria-modal":"true","aria-label":e.title||"dialog"}},[a("div",{staticClass:"el-dialog__header"},[e._t("title",[a("span",{staticClass:"el-dialog__title"},[e._v(e._s(e.title))])]),e.showClose?a("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button","aria-label":"Close"},on:{click:e.handleClose}},[a("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]):e._e()],2),e.rendered?a("div",{staticClass:"el-dialog__body"},[e._t("default")],2):e._e(),e.$slots.footer?a("div",{staticClass:"el-dialog__footer"},[e._t("footer")],2):e._e()])])])},o=[];s._withStripped=!0;var i=a(15),n=a.n(i),r=a(11),l=a.n(r),c=a(4),d=a.n(c),u={name:"ElDialog",mixins:[n.a,d.a,l.a],props:{title:{type:String,default:""},modal:{type:Boolean,default:!0},modalAppendToBody:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},width:String,fullscreen:Boolean,customClass:{type:String,default:""},top:{type:String,default:"15vh"},beforeClose:Function,center:{type:Boolean,default:!1},destroyOnClose:Boolean},data:function(){return{closed:!1,key:0}},watch:{visible:function(e){var t=this;e?(this.closed=!1,this.$emit("open"),this.$el.addEventListener("scroll",this.updatePopper),this.$nextTick((function(){t.$refs.dialog.scrollTop=0})),this.appendToBody&&document.body.appendChild(this.$el)):(this.$el.removeEventListener("scroll",this.updatePopper),this.closed||this.$emit("close"),this.destroyOnClose&&this.$nextTick((function(){t.key++})))}},computed:{style:function(){var e={};return this.fullscreen||(e.marginTop=this.top,this.width&&(e.width=this.width)),e}},methods:{getMigratingConfig:function(){return{props:{size:"size is removed."}}},handleWrapperClick:function(){this.closeOnClickModal&&this.handleClose()},handleClose:function(){"function"===typeof this.beforeClose?this.beforeClose(this.hide):this.hide()},hide:function(e){!1!==e&&(this.$emit("update:visible",!1),this.$emit("close"),this.closed=!0)},updatePopper:function(){this.broadcast("ElSelectDropdown","updatePopper"),this.broadcast("ElDropdownMenu","updatePopper")},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("closed")}},mounted:function(){this.visible&&(this.rendered=!0,this.open(),this.appendToBody&&document.body.appendChild(this.$el))},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},p=u,f=a(0),m=Object(f["a"])(p,s,o,!1,null,null,null);m.options.__file="packages/dialog/src/component.vue";var h=m.exports;h.install=function(e){e.component(h.name,h)};t["default"]=h}})},"0348":function(e,t,a){"use strict";var s=a("60d9"),o=a.n(s);o.a},"0652":function(e,t,a){"use strict";var s=a("f99c"),o=a.n(s);o.a},"3a4f":function(e,t,a){},"60d9":function(e,t,a){},"6b1a":function(e,t,a){},7724:function(e,t,a){e.exports=a.p+"static/img/headerImage.baefd97f.png"},"7c0b":function(e,t,a){"use strict";var s,o,i,n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"components-page-header"},[s("div",{staticClass:"page-header-inner",class:{"layout-container":!e.fullWidth,fullWidth:e.fullWidth}},[s("div",{staticClass:"inline-block logo-wrapper"},[s("img",{staticClass:"cursor-pointer",attrs:{src:a("86e1"),alt:""},on:{click:e.goHome}}),s("span",{staticClass:"cursor-pointer",on:{click:e.goHome}},[e._v("水墨文档")]),e._t("left-slot")],2),s("div",{staticClass:"header-center-wrapper"},[e._t("default")],2),s("div",{staticClass:"user-wrapper"},[e._t("right-slot"),s("userHeadBtn")],2)])])},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-head-btn-components"},[e.isLogined?a("el-dropdown",[a("div",{staticClass:"inline-block"},[a("div",{staticClass:"user-head-btn-img"},[a("img",{attrs:{src:e.userData.avatar||e.userHeadImage,alt:""}})]),a("span",{staticClass:"user-head-btn-name"},[e._v(e._s(e.userData.name))])]),e.isLogined?a("el-dropdown-menu",[a("el-dropdown-item",[a("userInfo",{attrs:{userData:e.userData,showEdit:!0}},[a("i",{staticClass:"el-icon-user"}),e._v(" 个人资料\n        ")])],1),a("el-dropdown-item",[a("resetPassword",[a("i",{staticClass:"el-icon-edit"}),e._v(" 修改密码\n        ")])],1),a("el-dropdown-item",[a("div",{on:{click:e.doLogout}},[a("i",{staticClass:"el-icon-switch-button"}),e._v(" 退出登录\n        ")])])],1):e._e()],1):a("div",{staticClass:"inline-block"},[a("span",{staticClass:"login-btn",on:{click:e.goLogin}},[e._v("登录/注册")])])],1)},c=[],d=a("ce3c"),u=(a("567e"),a("2984"),a("2b3e")),p=a.n(u),f=(a("cc43"),a("855f")),m=a.n(f),h=(a("93fd"),a("60cf")),b=a.n(h),g=(a("cc57"),a("e8bd"),a("3f00")),v=a.n(g),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"change-password inline-block"},[a("div",{staticClass:"inline-block",on:{click:e.show}},[e._t("default")],2),e.dialogleVisible?a("el-dialog",{staticClass:"page-dialog-wrapper",attrs:{title:"修改密码",width:"480px",visible:e.dialogleVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogleVisible=t},close:e.closePop}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,"label-width":"110px",rules:e.rules}},[a("el-form-item",{attrs:{label:"输入旧密码：",prop:"oldPassword"}},[a("el-input",{attrs:{placeholder:"请输入旧密码",type:"password"},model:{value:e.form.oldPassword,callback:function(t){e.$set(e.form,"oldPassword",t)},expression:"form.oldPassword"}})],1),a("el-form-item",{attrs:{label:"输入新密码：",prop:"newPass"}},[a("el-input",{attrs:{placeholder:"最少输入6位数字/字母，不可输入特殊字符",type:"password"},model:{value:e.form.newPass,callback:function(t){e.$set(e.form,"newPass",t)},expression:"form.newPass"}})],1),a("el-form-item",{attrs:{label:"确认新密码：",prop:"newPassword"}},[a("el-input",{attrs:{placeholder:"最少输入6位数字/字母，不可输入特殊字符",type:"password"},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closePop}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.savePassword}},[e._v("提交")])],1)],1):e._e()],1)},_=[],C=(a("b764"),a("77bb")),y=a.n(C),k=(a("008a4"),a("020f")),P=a.n(k),$=(a("32de"),a("8d99")),O=a.n($),j=(a("a68a"),a("230e")),x=a.n(j),E=a("ce7d"),B={components:(s={},Object(d["a"])(s,x.a.name,x.a),Object(d["a"])(s,O.a.name,O.a),Object(d["a"])(s,P.a.name,P.a),Object(d["a"])(s,v.a.name,v.a),Object(d["a"])(s,y.a.name,y.a),s),data:function(){var e=this,t=function(t,a,s){""===a?s(new Error("请再次输入密码")):a!==e.form.newPass?s(new Error("两次输入密码不一致!")):s()};return{loading:!1,dialogleVisible:!1,form:{newPass:"",oldPassword:"",newPassword:""},rules:{oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"},{required:!0,pattern:/^[A-Za-z0-9]\w{5,15}$/,message:"输入6-16位数字或字母，不可输入特殊字符",trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{required:!0,pattern:/^[A-Za-z0-9]\w{5,15}$/,message:"输入6-16位数字或字母，不可输入特殊字符",trigger:"blur"}],newPassword:[{required:!0,validator:t,trigger:"blur"}]}}},methods:{show:function(){this.dialogleVisible=!0},savePassword:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.loading=!0,e.$API.updateUserPass({oldPass:e.form.oldPassword,newPass:e.form.newPass}).then((function(){e.loading=!1,e.$alert("已修改密码，请重新登录","提示",{confirmButtonText:"确定",showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,center:!0}).then((function(){E["a"].doLogout()}))})).catch((function(){e.loading=!1}))}))},closePop:function(){this.dialogleVisible=!1,this.$emit("close")}}},D=B,I=(a("0652"),a("9ca4")),N=Object(I["a"])(D,w,_,!1,null,null,null),T=N.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-info-plane-dialog inline-block"},[a("div",{staticClass:"inline-block",on:{click:e.show}},[e._t("default")],2),e.dialogleVisible?a("el-dialog",{staticClass:"page-dialog-wrapper",attrs:{title:"",width:"400px",visible:e.dialogleVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogleVisible=t},close:e.closePop}},[a("div",{staticClass:"user-info-plane"},[a("div",{staticClass:"user-image-wrapper"},[a("div",{staticClass:"user-image-inner"},[a("img",{attrs:{src:e.userHeadImage}}),e.showEdit?a("div",{staticClass:"user-image-upload"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击头像更换 (只支持jpg、png格式且大小不超过200kb的图片)"}},[a("el-upload",{staticClass:"user-image-upload-input",attrs:{action:"/","before-upload":e.beforeUploadUserHeadImage,accept:"image/gif, image/jpeg, image/png, image/bmp","show-file-list":!1}},[a("i",{staticClass:"el-icon-upload"})])],1)],1):e._e()])]),a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"昵称："}},[e.editName?a("div",{staticClass:"edit-name-wrapper"},[a("div",{staticClass:"edit-name-input"},[a("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-button",{attrs:{size:"mini",icon:"el-icon-close",circle:""},on:{click:function(t){return e.showEditName(!1)}}}),a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",circle:""},on:{click:e.saveNickName}})],1):a("div",[a("span",{staticClass:"inline-block marginR20"},[e._v(e._s(e.userData.name))]),e.showEdit?a("el-button",{attrs:{size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(t){return e.showEditName(!0)}}}):e._e()],1)]),a("el-form-item",{attrs:{label:"用户名："}},[a("div",[e._v(e._s(e.userData.username))])]),a("el-form-item",{attrs:{label:"邮箱："}},[a("div",[e._v(e._s(e.userData.email))])]),a("el-form-item",{attrs:{label:"注册时间："}},[a("div",[e._v(e._s(e._f("formatTime")(e.userData.created)))])])],1)],1)]):e._e()],1)},H=[],L=(a("4f55"),a("c944")),V=a.n(L),U=(a("7b77"),a("3450")),A=a.n(U),M={components:(o={},Object(d["a"])(o,x.a.name,x.a),Object(d["a"])(o,O.a.name,O.a),Object(d["a"])(o,P.a.name,P.a),Object(d["a"])(o,v.a.name,v.a),Object(d["a"])(o,y.a.name,y.a),Object(d["a"])(o,A.a.name,A.a),Object(d["a"])(o,V.a.name,V.a),o),props:{userData:{type:Object,default:function(){return{}}},showEdit:{type:Boolean,default:!1}},data:function(){return{loading:!1,dialogleVisible:!1,editName:!1,name:"",userHeadImage:a("7724")}},created:function(){this.userHeadImage=this.userData.avatar||this.userHeadImage,this.name=this.userData.name},methods:{show:function(){this.dialogleVisible=!0},saveAvatar:function(e){var t=this,a=new FormData;a.append("file",e),this.$API.updateUserAvatar(a).then((function(e){t.$store.commit("UPDATE_USER_INFO",e.body)}))},closePop:function(){this.dialogleVisible=!1,this.$emit("close")},showEditName:function(e){this.name=this.userData.name,this.editName=!!e},saveNickName:function(){var e=this;this.$API.updateNickName({name:this.name}).then((function(t){e.$store.commit("UPDATE_USER_INFO",t.body),e.showEditName(!1)}))},beforeUploadUserHeadImage:function(e){if(!(e.size>204800))return this.saveAvatar(e),!1;this.$message.error("上传图片不能超过200kb！")}},watch:{userData:function(e){this.userHeadImage=e.avatar||this.userHeadImage,this.name=e.name}}},z=M,R=(a("d8db"),Object(I["a"])(z,S,H,!1,null,"c20c8b1c",null)),F=R.exports,W={name:"user-head-btn",components:(i={},Object(d["a"])(i,v.a.name,v.a),Object(d["a"])(i,b.a.name,b.a),Object(d["a"])(i,m.a.name,m.a),Object(d["a"])(i,p.a.name,p.a),Object(d["a"])(i,"resetPassword",T),Object(d["a"])(i,"userInfo",F),i),data:function(){return{userHeadImage:a("7724")}},computed:{isLogined:function(){return this.$store.state.user.access_token},userData:function(){return this.$store.state.user.userInfo||{}}},methods:{doLogout:function(){E["a"].doLogout()},goLogin:function(){E["a"].goLogin()}}},q=W,J=(a("0348"),Object(I["a"])(q,l,c,!1,null,"c7899efa",null)),X=J.exports,Z={props:{fullWidth:Boolean},components:{userHeadBtn:X},methods:{goHome:function(){this.$store.state.user.access_token?this.$router.push({name:"DashBoard"}):this.$router.push({name:"Home"})}}},G=Z,K=(a("f54f"),Object(I["a"])(G,n,r,!1,null,"4a1bbbb8",null));t["a"]=K.exports},"86e1":function(e,t,a){e.exports=a.p+"static/img/logo.6f3c98e4.png"},d8db:function(e,t,a){"use strict";var s=a("6b1a"),o=a.n(s);o.a},f54f:function(e,t,a){"use strict";var s=a("3a4f"),o=a.n(s);o.a},f99c:function(e,t,a){}}]);