(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-genghuanshenqing-detail"],{"30a0":function(t,r,e){"use strict";e.r(r);var i=e("c5f0"),o=e("aa3f");for(var a in o)"default"!==a&&function(t){e.d(r,t,(function(){return o[t]}))}(a);e("5b4d");var n,d=e("f0c5"),s=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"fecf257a",null,!1,i["a"],n);r["default"]=s.exports},"3a53":function(t,r,e){var i=e("683b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("3bcf7e4a",i,!0,{sourceMap:!1,shadowMode:!1})},"5b4d":function(t,r,e){"use strict";var i=e("3a53"),o=e.n(i);o.a},"683b":function(t,r,e){var i=e("24fb");r=i(!1),r.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-fecf257a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-fecf257a]{width:100%;height:%?450?%}.swiper uni-image[data-v-fecf257a]{width:100%}.detail-content[data-v-fecf257a]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-fecf257a]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-fecf257a]{font-size:%?33?%;color:red}.time-content[data-v-fecf257a]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-fecf257a]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-fecf257a]{position:fixed;bottom:0;left:0;width:100%}.bottom-content uni-button[data-v-fecf257a]{margin:0 0 0 %?20?%!important;padding:0 %?20?%;box-shadow:0 0 %?12?% transparent}.comoment-header[data-v-fecf257a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-fecf257a]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-fecf257a]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-fecf257a]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-fecf257a]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-fecf257a]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-fecf257a]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-fecf257a]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-fecf257a]{padding:0 %?24?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-fecf257a]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-fecf257a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-fecf257a]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-fecf257a]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}',""]),t.exports=r},aa3f:function(t,r,e){"use strict";e.r(r);var i=e("f628"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(r,t,(function(){return i[t]}))}(a);r["default"]=o.a},c5f0:function(t,r,e){"use strict";var i={"mescroll-uni":e("f05e").default,"uni-popup":e("1c89").default},o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(r){arguments[0]=r=t.$handleEvent(r),t.mescrollInit.apply(void 0,arguments)},down:function(r){arguments[0]=r=t.$handleEvent(r),t.downCallback.apply(void 0,arguments)},up:function(r){arguments[0]=r=t.$handleEvent(r),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"container"},[e("v-uni-swiper",{staticClass:"swiper",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"20rpx 3%",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"94%",borderStyle:"solid",height:"300rpx"},attrs:{"indicator-dots":!0,autoplay:t.autoplaySwiper,circular:!0,"indicator-active-color":"rgba(130, 198, 249, 1)","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:t.intervalSwiper,vertical:!1}},t._l(t.swiperList,(function(r,i){return e("v-uni-swiper-item",{key:i,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"}},[e("v-uni-image",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+r}})],1)})),1),e("v-uni-view",{staticClass:"detail-content"},[e("v-uni-view",{staticClass:"name shop-title",style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",color:"#000",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"auto",fontSize:"32rpx",borderStyle:"solid"}},[t._v("姓名："+t._s(t.detail.xingming))]),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("申请编号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shenqingbianhao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("原宿舍号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.yuansushehao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("新宿舍号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.xinsushehao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("申请时间：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shenqingshijian))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("学号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.xuehao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("手机：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shouji))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("宿管账号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.suguanzhanghao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"rgba(193, 193, 193, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 0 0 40rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"200rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("宿管姓名：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 200rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.suguanxingming))])],1)],1),e("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("更换原因")]),e("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[t._v(t._s(t.detail.genghuanyuanyin))])],1),e("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("审核回复")]),e("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[t._v(t._s(t.detail.shhf))])],1),e("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop",style:{padding:"0px",boxShadow:"rgb(0 0 0 / 0%) 0px 0px 12rpx",margin:"0px",borderColor:"rgb(204, 204, 204)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"0px",borderWidth:"2rpx 0 0 0",width:"100%",borderStyle:"solid",height:"100rpx"}},[e("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),e("v-uni-view",{staticStyle:{"text-align":"right"}},[t.userid&&t.isAuth("genghuanshenqing","申请提交")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("shenqingtijiao","是","","")}}},[t._v("申请提交")]):t._e(),!t.userid&&t.isAuthFront("genghuanshenqing","申请提交")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("shenqingtijiao","是","","")}}},[t._v("申请提交")]):t._e(),t.userid&&t.isAuth("genghuanshenqing","审核")?e("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[4],borderColor:t.btnColor[4]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e(),!t.userid&&t.isAuthFront("genghuanshenqing","审核")?e("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[4],borderColor:t.btnColor[4]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e()],1)],1)],1),e("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[e("v-uni-form",{staticClass:"popup-form"},[e("v-uni-view",{staticClass:"cu-form-group margin-top"},[e("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(r){arguments[0]=r=t.$handleEvent(r),t.sfshChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(r){t.$set(t.detail,"shhf",r)},expression:"detail.shhf"}})],1),e("v-uni-view",{staticClass:"btn-content"},[e("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},a=[];e.d(r,"b",(function(){return o})),e.d(r,"c",(function(){return a})),e.d(r,"a",(function(){return i}))},f628:function(t,r,e){"use strict";var i=e("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,e("28a5"),e("f559"),e("55dd"),e("96cf");var o=i(e("3b8d")),a={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=r.id,r.userid&&(this.userid=r.userid);case 2:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),onShow:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),e=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:i=t.sent,this.user=i.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","genghuanshenqing"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(t,r,e,i,o){if("是"!=r||"是"==this.detail.sfsh){if(uni.setStorageSync("crossTable","genghuanshenqing"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",e),uni.setStorageSync("statusColumnValue",o),uni.setStorageSync("tips",i),""!=e&&!e.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var n in a)if(n==e&&a[n]==o)return void this.$utils.msg(i)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("genghuanshenqing",this.id);case 2:r=t.sent,this.detail=r.data,this.swiperList=this.detail.zhaopian?this.detail.zhaopian.split(","):[];case 5:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.endSuccess(r.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var r=this;t=r.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(r.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussgenghuanshenqing/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("genghuanshenqing",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};r.default=a}}]);