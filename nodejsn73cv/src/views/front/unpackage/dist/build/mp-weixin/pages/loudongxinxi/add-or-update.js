(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/loudongxinxi/add-or-update"],{"0e31":function(e,n,a){"use strict";var r;a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return r}));var t=function(){var e=this,n=e.$createElement;e._self._c},u=[]},1558:function(e,n,a){"use strict";(function(e){a("dfc9");r(a("66fd"));var n=r(a("c555"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},6894:function(e,n,a){},"9fbe":function(e,n,a){"use strict";var r=a("6894"),t=a.n(r);t.a},b079:function(e,n,a){"use strict";a.r(n);var r=a("c71b"),t=a.n(r);for(var u in r)"default"!==u&&function(e){a.d(n,e,(function(){return r[e]}))}(u);n["default"]=t.a},c555:function(e,n,a){"use strict";a.r(n);var r=a("0e31"),t=a("b079");for(var u in t)"default"!==u&&function(e){a.d(n,e,(function(){return t[e]}))}(u);a("9fbe");var i,o=a("f0c5"),s=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"856b575e",null,!1,r["a"],i);n["default"]=s.exports},c71b:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,a,r,t,u,i){try{var o=e[u](i),s=o.value}catch(c){return void a(c)}o.done?n(s):Promise.resolve(s).then(r,t)}function i(e){return function(){var n=this,a=arguments;return new Promise((function(r,t){var i=e.apply(n,a);function o(e){u(i,r,t,o,s,"next",e)}function s(e){u(i,r,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("deef"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{loudongbianhao:this.getUUID(),loudongmingcheng:"",weizhi:"",susheshuliang:"",chuangweishuliang:"",fengmian:"",suguanzhanghao:"",suguanxingming:"",beizhu:"",anpaishijian:"",userid:""},suguanzhanghaoOptions:[],suguanzhanghaoIndex:0,user:{},ro:{loudongbianhao:!1,loudongmingcheng:!1,weizhi:!1,susheshuliang:!1,chuangweishuliang:!1,fengmian:!1,suguanzhanghao:!1,suguanxingming:!1,beizhu:!1,anpaishijian:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return i(r.default.mark((function t(){var u,i,o,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.anpaishijian=a.$utils.getCurDate(),u=e.getStorageSync("nowTable"),t.next=4,a.$api.session(u);case 4:return i=t.sent,a.user=i.data,t.next=8,a.$api.option("suguan","suguanzhanghao",{});case 8:if(i=t.sent,a.suguanzhanghaoOptions=i.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=18;break}return a.ruleForm.id=n.id,t.next=16,a.$api.info("loudongxinxi",a.ruleForm.id);case 16:i=t.sent,a.ruleForm=i.data;case 18:if(a.cross=n.cross,!n.cross){t.next=70;break}o=e.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 22:if((t.t1=t.t0()).done){t.next=70;break}if(s=t.t1.value,"loudongbianhao"!=s){t.next=28;break}return a.ruleForm.loudongbianhao=o[s],a.ro.loudongbianhao=!0,t.abrupt("continue",22);case 28:if("loudongmingcheng"!=s){t.next=32;break}return a.ruleForm.loudongmingcheng=o[s],a.ro.loudongmingcheng=!0,t.abrupt("continue",22);case 32:if("weizhi"!=s){t.next=36;break}return a.ruleForm.weizhi=o[s],a.ro.weizhi=!0,t.abrupt("continue",22);case 36:if("susheshuliang"!=s){t.next=40;break}return a.ruleForm.susheshuliang=o[s],a.ro.susheshuliang=!0,t.abrupt("continue",22);case 40:if("chuangweishuliang"!=s){t.next=44;break}return a.ruleForm.chuangweishuliang=o[s],a.ro.chuangweishuliang=!0,t.abrupt("continue",22);case 44:if("fengmian"!=s){t.next=48;break}return a.ruleForm.fengmian=o[s],a.ro.fengmian=!0,t.abrupt("continue",22);case 48:if("suguanzhanghao"!=s){t.next=52;break}return a.ruleForm.suguanzhanghao=o[s],a.ro.suguanzhanghao=!0,t.abrupt("continue",22);case 52:if("suguanxingming"!=s){t.next=56;break}return a.ruleForm.suguanxingming=o[s],a.ro.suguanxingming=!0,t.abrupt("continue",22);case 56:if("beizhu"!=s){t.next=60;break}return a.ruleForm.beizhu=o[s],a.ro.beizhu=!0,t.abrupt("continue",22);case 60:if("anpaishijian"!=s){t.next=64;break}return a.ruleForm.anpaishijian=o[s],a.ro.anpaishijian=!0,t.abrupt("continue",22);case 64:if("userid"!=s){t.next=68;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,t.abrupt("continue",22);case 68:t.next=22;break;case 70:a.styleChange();case 71:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},suguanzhanghaoChange:function(e){var n=this;return i(r.default.mark((function a(){var t;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.suguanzhanghaoIndex=e.target.value,n.ruleForm.suguanzhanghao=n.suguanzhanghaoOptions[n.suguanzhanghaoIndex],a.next=4,n.$api.follow("suguan","suguanzhanghao",{columnValue:n.ruleForm.suguanzhanghao});case 4:t=a.sent,t.data.suguanxingming&&(n.ruleForm.suguanxingming=t.data.suguanxingming);case 6:case"end":return a.stop()}}),a)})))()},anpaishijianChange:function(e){this.ruleForm.anpaishijian=e.target.value,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(r.default.mark((function a(){var t,u,i,o,s,c,g,l,h,f;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.ruleForm.susheshuliang||n.$validate.isIntNumer(n.ruleForm.susheshuliang)){a.next=3;break}return n.$utils.msg("宿舍数量应输入整数"),a.abrupt("return");case 3:if(!n.ruleForm.chuangweishuliang||n.$validate.isIntNumer(n.ruleForm.chuangweishuliang)){a.next=6;break}return n.$utils.msg("床位数量应输入整数"),a.abrupt("return");case 6:if(!n.cross){a.next=22;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){a.next=22;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=18;break}for(g in c)g==o&&(c[g]=s);return l=e.getStorageSync("crossTable"),a.next=16,n.$api.update("".concat(l),c);case 16:a.next=22;break;case 18:t=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 22:if(!u||!t){a.next=44;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=u,h={page:1,limit:10,crossuserid:t,crossrefid:u},a.next=28,n.$api.list("loudongxinxi",h);case 28:if(f=a.sent,!(f.data.total>=i)){a.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 34:if(!n.ruleForm.id){a.next=39;break}return a.next=37,n.$api.update("loudongxinxi",n.ruleForm);case 37:a.next=41;break;case 39:return a.next=41,n.$api.add("loudongxinxi",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:a.next=52;break;case 44:if(!n.ruleForm.id){a.next=49;break}return a.next=47,n.$api.update("loudongxinxi",n.ruleForm);case 47:a.next=51;break;case 49:return a.next=51,n.$api.add("loudongxinxi",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,t=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(a,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])}},[["1558","common/runtime","common/vendor"]]]);