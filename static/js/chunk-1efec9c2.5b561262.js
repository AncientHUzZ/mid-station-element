(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1efec9c2"],{"6a56":function(e,r,s){"use strict";var l={loginName:[{required:!0,message:"请输入登录名",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"change"}],userName:[{required:!0,message:"请输入用户姓名",trigger:"blur"}],cellPhone:[{required:!0,message:"请输入联系电话",trigger:"blur"}]};r["a"]=l},8222:function(e,r,s){},"991c":function(e,r,s){"use strict";s.r(r);var l=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"personal"},[s("el-tabs",{attrs:{type:"border-card"}},[s("el-tab-pane",{attrs:{label:"基本信息"}},[s("el-form",{ref:"userForm",staticStyle:{width:"600px",margin:"0 auto"},attrs:{model:e.user,rules:e.userRules,"label-suffix":":","label-width":"100px"}},[s("el-form-item",{attrs:{label:"登录名",prop:"loginName"}},[s("el-input",{attrs:{disabled:"",placeholder:"请输入登录名",size:"medium"},model:{value:e.user.loginName,callback:function(r){e.$set(e.user,"loginName",r)},expression:"user.loginName"}})],1),s("el-form-item",{attrs:{label:"角色",prop:"role"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择角色",size:"medium",disabled:""},model:{value:e.user.role,callback:function(r){e.$set(e.user,"role",r)},expression:"user.role"}},[s("el-option",{attrs:{value:1,label:"管理员"}}),s("el-option",{attrs:{value:2,label:"车间人员"}}),s("el-option",{attrs:{value:3,label:"调度人员"}}),s("el-option",{attrs:{value:4,label:"质检人员"}}),s("el-option",{attrs:{value:5,label:"外部人员"}})],1)],1),s("el-form-item",{attrs:{label:"用户姓名",prop:"userName"}},[s("el-input",{attrs:{placeholder:"请输入用户姓名",size:"medium"},model:{value:e.user.userName,callback:function(r){e.$set(e.user,"userName",r)},expression:"user.userName"}})],1),s("el-form-item",{attrs:{label:"联系电话",prop:"cellPhone"}},[s("el-input",{attrs:{placeholder:"请输入联系电话",size:"medium"},model:{value:e.user.cellPhone,callback:function(r){e.$set(e.user,"cellPhone",r)},expression:"user.cellPhone"}})],1)],1),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{on:{click:e.resetUser}},[e._v("重 置")]),s("el-button",{attrs:{type:"primary"},on:{click:e.confirmUser}},[e._v("修 改")])],1)],1),s("el-tab-pane",{attrs:{label:"修改密码"}},[s("el-form",{ref:"passwordForm",staticStyle:{width:"600px",margin:"0 auto"},attrs:{model:e.pwd,rules:e.pwdRules,"label-suffix":":","label-width":"120px"}},[s("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[s("el-input",{attrs:{placeholder:"请输入旧密码",size:"medium"},model:{value:e.pwd.oldPassword,callback:function(r){e.$set(e.pwd,"oldPassword",r)},expression:"pwd.oldPassword"}})],1),s("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[s("el-input",{attrs:{placeholder:"请输入新密码",size:"medium"},model:{value:e.pwd.newPassword,callback:function(r){e.$set(e.pwd,"newPassword",r)},expression:"pwd.newPassword"}})],1),s("el-form-item",{attrs:{label:"确认新密码",prop:"confirmPassword"}},[s("el-input",{attrs:{placeholder:"请确认新密码",size:"medium"},model:{value:e.pwd.confirmPassword,callback:function(r){e.$set(e.pwd,"confirmPassword",r)},expression:"pwd.confirmPassword"}})],1)],1),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{on:{click:e.resetPassword}},[e._v("重 置")]),s("el-button",{attrs:{type:"primary"},on:{click:e.confirmPassword}},[e._v("修 改")])],1)],1)],1)],1)},t=[],a=s("6a56"),o={oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"}],confirmPassword:[{required:!0,message:"请确认新密码",trigger:"blur"}]},i=o,n={name:"index",data:function(){return{userRules:a["a"],user:{loginName:"admin",userName:"张三",role:1,cellPhone:"18112644267",password:"88888888"},pwd:{oldPassword:"",newPassword:"",confirmPassword:""},pwdRules:i}},methods:{resetUser:function(){},confirmUser:function(){var e=this;this.$refs["userForm"].validate((function(r){if(!r)return!1;console.log(e.user)}))},resetPassword:function(){},confirmPassword:function(){var e=this;this.$refs["passwordForm"].validate((function(r){if(!r)return!1;console.log(e.pwd)}))}}},u=n,d=(s("bf3f"),s("2877")),c=Object(d["a"])(u,l,t,!1,null,"ea594256",null);r["default"]=c.exports},bf3f:function(e,r,s){"use strict";s("8222")}}]);