(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuisuxinxi/add-or-update"],{"10e9":function(e,n,u){"use strict";var t;u.d(n,"b",(function(){return r})),u.d(n,"c",(function(){return a})),u.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},3782:function(e,n,u){"use strict";(function(e){u("dfc9");t(u("66fd"));var n=t(u("4787"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,u("543d")["createPage"])},4787:function(e,n,u){"use strict";u.r(n);var t=u("10e9"),r=u("4b01");for(var a in r)"default"!==a&&function(e){u.d(n,e,(function(){return r[e]}))}(a);u("ab1d");var i,s=u("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"35698472",null,!1,t["a"],i);n["default"]=o.exports},"4b01":function(e,n,u){"use strict";u.r(n);var t=u("4f0a"),r=u.n(t);for(var a in t)"default"!==a&&function(e){u.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},"4f0a":function(e,n,u){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(u("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,u,t,r,a,i){try{var s=e[a](i),o=s.value}catch(c){return void u(c)}s.done?n(o):Promise.resolve(o).then(t,r)}function i(e){return function(){var n=this,u=arguments;return new Promise((function(t,r){var i=e.apply(n,u);function s(e){a(i,t,r,s,o,"next",e)}function o(e){a(i,t,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([u.e("common/vendor"),u.e("components/w-picker/w-picker")]).then(function(){return resolve(u("deef"))}.bind(null,u)).catch(u.oe)},o={data:function(){return{cross:"",ruleForm:{sushelouhao:"",sushehao:"",chuangweihao:"",xuehao:"",xingming:"",fengmian:"",tuisuleixing:"",tuisushuoming:"",tuisuriqi:"",suguanzhanghao:"",suguanxingming:"",userid:""},sushelouhaoOptions:[],sushelouhaoIndex:0,tuisuleixingOptions:[],tuisuleixingIndex:0,user:{},ro:{sushelouhao:!1,sushehao:!1,chuangweihao:!1,xuehao:!1,xingming:!1,fengmian:!1,tuisuleixing:!1,tuisushuoming:!1,tuisuriqi:!1,suguanzhanghao:!1,suguanxingming:!1,userid:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var u=this;return i(t.default.mark((function r(){var a,i,s,o;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u.ruleForm.tuisuriqi=u.$utils.getCurDate(),a=e.getStorageSync("nowTable"),r.next=4,u.$api.session(a);case 4:return i=r.sent,u.user=i.data,u.ruleForm.suguanzhanghao=u.user.suguanzhanghao,u.ro.suguanzhanghao=!0,u.ruleForm.suguanxingming=u.user.suguanxingming,u.ro.suguanxingming=!0,r.next=12,u.$api.option("sushefenpei","sushelouhao",{});case 12:if(i=r.sent,u.sushelouhaoOptions=i.data,u.tuisuleixingOptions="毕业,休学,退学".split(","),u.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(u.ruleForm.refid=n.refid,u.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=23;break}return u.ruleForm.id=n.id,r.next=21,u.$api.info("tuisuxinxi",u.ruleForm.id);case 21:i=r.sent,u.ruleForm=i.data;case 23:if(u.cross=n.cross,!n.cross){r.next=79;break}s=e.getStorageSync("crossObj"),r.t0=t.default.keys(s);case 27:if((r.t1=r.t0()).done){r.next=79;break}if(o=r.t1.value,"sushelouhao"!=o){r.next=33;break}return u.ruleForm.sushelouhao=s[o],u.ro.sushelouhao=!0,r.abrupt("continue",27);case 33:if("sushehao"!=o){r.next=37;break}return u.ruleForm.sushehao=s[o],u.ro.sushehao=!0,r.abrupt("continue",27);case 37:if("chuangweihao"!=o){r.next=41;break}return u.ruleForm.chuangweihao=s[o],u.ro.chuangweihao=!0,r.abrupt("continue",27);case 41:if("xuehao"!=o){r.next=45;break}return u.ruleForm.xuehao=s[o],u.ro.xuehao=!0,r.abrupt("continue",27);case 45:if("xingming"!=o){r.next=49;break}return u.ruleForm.xingming=s[o],u.ro.xingming=!0,r.abrupt("continue",27);case 49:if("fengmian"!=o){r.next=53;break}return u.ruleForm.fengmian=s[o],u.ro.fengmian=!0,r.abrupt("continue",27);case 53:if("tuisuleixing"!=o){r.next=57;break}return u.ruleForm.tuisuleixing=s[o],u.ro.tuisuleixing=!0,r.abrupt("continue",27);case 57:if("tuisushuoming"!=o){r.next=61;break}return u.ruleForm.tuisushuoming=s[o],u.ro.tuisushuoming=!0,r.abrupt("continue",27);case 61:if("tuisuriqi"!=o){r.next=65;break}return u.ruleForm.tuisuriqi=s[o],u.ro.tuisuriqi=!0,r.abrupt("continue",27);case 65:if("suguanzhanghao"!=o){r.next=69;break}return u.ruleForm.suguanzhanghao=s[o],u.ro.suguanzhanghao=!0,r.abrupt("continue",27);case 69:if("suguanxingming"!=o){r.next=73;break}return u.ruleForm.suguanxingming=s[o],u.ro.suguanxingming=!0,r.abrupt("continue",27);case 73:if("userid"!=o){r.next=77;break}return u.ruleForm.userid=s[o],u.ro.userid=!0,r.abrupt("continue",27);case 77:r.next=27;break;case 79:u.styleChange();case 80:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},sushelouhaoChange:function(e){var n=this;return i(t.default.mark((function u(){var r;return t.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return n.sushelouhaoIndex=e.target.value,n.ruleForm.sushelouhao=n.sushelouhaoOptions[n.sushelouhaoIndex],u.next=4,n.$api.follow("sushefenpei","sushelouhao",{columnValue:n.ruleForm.sushelouhao});case 4:r=u.sent,r.data.sushehao&&(n.ruleForm.sushehao=r.data.sushehao),r.data.chuangweihao&&(n.ruleForm.chuangweihao=r.data.chuangweihao),r.data.xuehao&&(n.ruleForm.xuehao=r.data.xuehao),r.data.xingming&&(n.ruleForm.xingming=r.data.xingming);case 9:case"end":return u.stop()}}),u)})))()},tuisuriqiChange:function(e){this.ruleForm.tuisuriqi=e.target.value,this.$forceUpdate()},tuisuleixingChange:function(e){this.tuisuleixingIndex=e.target.value,this.ruleForm.tuisuleixing=this.tuisuleixingOptions[this.tuisuleixingIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function u(){var r,a,i,s,o,c,l,g,h,f;return t.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:if(n.ruleForm.tuisuleixing){u.next=3;break}return n.$utils.msg("退宿类型不能为空"),u.abrupt("return");case 3:if(n.ruleForm.tuisuriqi){u.next=6;break}return n.$utils.msg("退宿日期不能为空"),u.abrupt("return");case 6:if(!n.cross){u.next=22;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){u.next=22;break}if(c=e.getStorageSync("crossObj"),s.startsWith("[")){u.next=18;break}for(l in c)l==s&&(c[l]=o);return g=e.getStorageSync("crossTable"),u.next=16,n.$api.update("".concat(g),c);case 16:u.next=22;break;case 18:r=Number(e.getStorageSync("userid")),a=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 22:if(!a||!r){u.next=44;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:r,crossrefid:a},u.next=28,n.$api.list("tuisuxinxi",h);case 28:if(f=u.sent,!(f.data.total>=i)){u.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),u.abrupt("return",!1);case 34:if(!n.ruleForm.id){u.next=39;break}return u.next=37,n.$api.update("tuisuxinxi",n.ruleForm);case 37:u.next=41;break;case 39:return u.next=41,n.$api.add("tuisuxinxi",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:u.next=52;break;case 44:if(!n.ruleForm.id){u.next=49;break}return u.next=47,n.$api.update("tuisuxinxi",n.ruleForm);case 47:u.next=51;break;case 49:return u.next=51,n.$api.add("tuisuxinxi",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return u.stop()}}),u)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,u=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?u-=60:"end"===e&&(u+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(u,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,u("543d")["default"])},ab1d:function(e,n,u){"use strict";var t=u("abce"),r=u.n(t);r.a},abce:function(e,n,u){}},[["3782","common/runtime","common/vendor"]]]);