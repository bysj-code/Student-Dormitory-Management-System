(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shiwuzhaoling/add-or-update"],{"05da":function(e,n,r){"use strict";r.r(n);var i=r("a53d"),t=r.n(i);for(var u in i)"default"!==u&&function(e){r.d(n,e,(function(){return i[e]}))}(u);n["default"]=t.a},"303a":function(e,n,r){},"46f2":function(e,n,r){"use strict";r.r(n);var i=r("efec"),t=r("05da");for(var u in t)"default"!==u&&function(e){r.d(n,e,(function(){return t[e]}))}(u);r("7363");var a,o=r("f0c5"),s=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"3871aa7d",null,!1,i["a"],a);n["default"]=s.exports},7363:function(e,n,r){"use strict";var i=r("303a"),t=r.n(i);t.a},a53d:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function u(e,n,r,i,t,u,a){try{var o=e[u](a),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(i,t)}function a(e){return function(){var n=this,r=arguments;return new Promise((function(i,t){var a=e.apply(n,r);function o(e){u(a,i,t,o,s,"next",e)}function s(e){u(a,i,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("deef"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{biaoti:"",wupinmingcheng:"",wupintupian:"",shidedizhi:"",shideshijian:"",renlingdizhi:"",fabushijian:"",wupinmiaoshu:"",xuehao:"",xingming:"",shouji:""},user:{},ro:{biaoti:!1,wupinmingcheng:!1,wupintupian:!1,shidedizhi:!1,shideshijian:!1,renlingdizhi:!1,fabushijian:!1,wupinmiaoshu:!1,xuehao:!1,xingming:!1,shouji:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return a(i.default.mark((function t(){var u,a,o,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.ruleForm.shideshijian=r.$utils.getCurDateTime(),r.ruleForm.fabushijian=r.$utils.getCurDateTime(),u=e.getStorageSync("nowTable"),t.next=5,r.$api.session(u);case 5:if(a=t.sent,r.user=a.data,r.ruleForm.xuehao=r.user.xuehao,r.ro.xuehao=!0,r.ruleForm.xingming=r.user.xingming,r.ro.xingming=!0,r.ruleForm.shouji=r.user.shouji,r.ro.shouji=!0,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=21;break}return r.ruleForm.id=n.id,t.next=19,r.$api.info("shiwuzhaoling",r.ruleForm.id);case 19:a=t.sent,r.ruleForm=a.data;case 21:if(r.cross=n.cross,!n.cross){t.next=81;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 25:if((t.t1=t.t0()).done){t.next=81;break}if(s=t.t1.value,"biaoti"!=s){t.next=31;break}return r.ruleForm.biaoti=o[s],r.ro.biaoti=!0,t.abrupt("continue",25);case 31:if("wupinmingcheng"!=s){t.next=35;break}return r.ruleForm.wupinmingcheng=o[s],r.ro.wupinmingcheng=!0,t.abrupt("continue",25);case 35:if("wupintupian"!=s){t.next=39;break}return r.ruleForm.wupintupian=o[s],r.ro.wupintupian=!0,t.abrupt("continue",25);case 39:if("shidedizhi"!=s){t.next=43;break}return r.ruleForm.shidedizhi=o[s],r.ro.shidedizhi=!0,t.abrupt("continue",25);case 43:if("shideshijian"!=s){t.next=47;break}return r.ruleForm.shideshijian=o[s],r.ro.shideshijian=!0,t.abrupt("continue",25);case 47:if("renlingdizhi"!=s){t.next=51;break}return r.ruleForm.renlingdizhi=o[s],r.ro.renlingdizhi=!0,t.abrupt("continue",25);case 51:if("fabushijian"!=s){t.next=55;break}return r.ruleForm.fabushijian=o[s],r.ro.fabushijian=!0,t.abrupt("continue",25);case 55:if("wupinmiaoshu"!=s){t.next=59;break}return r.ruleForm.wupinmiaoshu=o[s],r.ro.wupinmiaoshu=!0,t.abrupt("continue",25);case 59:if("xuehao"!=s){t.next=63;break}return r.ruleForm.xuehao=o[s],r.ro.xuehao=!0,t.abrupt("continue",25);case 63:if("xingming"!=s){t.next=67;break}return r.ruleForm.xingming=o[s],r.ro.xingming=!0,t.abrupt("continue",25);case 67:if("shouji"!=s){t.next=71;break}return r.ruleForm.shouji=o[s],r.ro.shouji=!0,t.abrupt("continue",25);case 71:if("clicktime"!=s){t.next=75;break}return r.ruleForm.clicktime=o[s],r.ro.clicktime=!0,t.abrupt("continue",25);case 75:if("clicknum"!=s){t.next=79;break}return r.ruleForm.clicknum=o[s],r.ro.clicknum=!0,t.abrupt("continue",25);case 79:t.next=25;break;case 81:r.styleChange();case 82:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shideshijianConfirm:function(e){console.log(e),this.ruleForm.shideshijian=e.result,this.$forceUpdate()},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},wupintupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.wupintupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(i.default.mark((function r(){var t,u,a,o,s,c,l,f,h,d;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.wupinmingcheng){r.next=3;break}return n.$utils.msg("物品名称不能为空"),r.abrupt("return");case 3:if(n.ruleForm.shidedizhi){r.next=6;break}return n.$utils.msg("拾得地址不能为空"),r.abrupt("return");case 6:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){r.next=9;break}return n.$utils.msg("点击次数应输入整数"),r.abrupt("return");case 9:if(!n.cross){r.next=25;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=25;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=21;break}for(l in c)l==o&&(c[l]=s);return f=e.getStorageSync("crossTable"),r.next=19,n.$api.update("".concat(f),c);case 19:r.next=25;break;case 21:t=Number(e.getStorageSync("userid")),u=c["id"],a=e.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!t){r.next=47;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=u,h={page:1,limit:10,crossuserid:t,crossrefid:u},r.next=31,n.$api.list("shiwuzhaoling",h);case 31:if(d=r.sent,!(d.data.total>=a)){r.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!n.ruleForm.id){r.next=42;break}return r.next=40,n.$api.update("shiwuzhaoling",n.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,n.$api.add("shiwuzhaoling",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!n.ruleForm.id){r.next=52;break}return r.next=50,n.$api.update("shiwuzhaoling",n.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,n.$api.add("shiwuzhaoling",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),i=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(r,"-").concat(i,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},efec:function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"deef"))}},t=function(){var e=this,n=e.$createElement;e._self._c},u=[]},f3bc:function(e,n,r){"use strict";(function(e){r("dfc9");i(r("66fd"));var n=i(r("46f2"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])}},[["f3bc","common/runtime","common/vendor"]]]);