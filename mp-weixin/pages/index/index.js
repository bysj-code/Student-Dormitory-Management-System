(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"18f3":function(n,t,e){},"202f":function(n,t,e){"use strict";e.r(t);var i=e("7098"),o=e("c4b8");for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);e("288f");var r,a=e("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=c.exports},2658:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(e("a34a")),o=u(e("45aa"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=a(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var i=0,o=function(){};return{s:o,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,r=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return r=n.done,n},e:function(n){c=!0,u=n},f:function(){try{r||null==e.return||e.return()}finally{if(c)throw u}}}}function a(n,t){if(n){if("string"===typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function l(n,t,e,i,o,u,r){try{var a=n[u](r),c=a.value}catch(l){return void e(l)}a.done?t(c):Promise.resolve(c).then(i,o)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var u=n.apply(t,e);function r(n){l(u,i,o,r,a,"next",n)}function a(n){l(u,i,o,r,a,"throw",n)}r(void 0)}))}}e("d4b3");var f=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("cd32"))}.bind(null,e)).catch(e.oe)},d={components:{uniIcons:f},data:function(){return{rows:2,column:4,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",menuList:[],swiperMenuList:[],user:{},tableName:"",autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],sushegonggaolist:[],shiwuzhaolinglist:[],xunwuqishilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=this;return s(i.default.mark((function e(){var u,r,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.role=n.getStorageSync("role"),u=n.getStorageSync("nowTable"),e.next=4,t.$api.session(u);case 4:r=e.sent,t.user=r.data,t.tableName=u,a=o.default.list(),t.menuList=a,t.menuList.forEach((function(n,e){t.role==n.roleName&&n.frontMenu.forEach((function(n,e){n.child[0].buttons.indexOf("查看")>-1&&t.swiperMenuList.push(n)}))}));case 10:case"end":return e.stop()}}),e)})))()},onShow:function(){var n=this;return s(i.default.mark((function t(){var e,o,u,a,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:o=t.sent,u=r(o.data.list);try{for(u.s();!(a=u.n()).done;)c=a.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&e.push({img:c.value,title:c.name})}catch(i){u.e(i)}finally{u.f()}return e&&(n.swiperList=e),t.next=9,n.$api.recommend("sushegonggao",1,4);case 9:return o=t.sent,n.sushegonggaolist=o.data.list,t.next=13,n.$api.recommend("shiwuzhaoling",1,4);case 13:return o=t.sent,n.shiwuzhaolinglist=o.data.list,t.next=17,n.$api.recommend("xunwuqishi",1,4);case 17:o=t.sent,n.xunwuqishilist=o.data.list;case 19:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.setStorageSync("useridTag",0),n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=d}).call(this,e("543d")["default"])},"288f":function(n,t,e){"use strict";var i=e("18f3"),o=e.n(i);o.a},"55d3":function(n,t,e){"use strict";(function(n){e("dfc9");i(e("66fd"));var t=i(e("202f"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},7098:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}));var o=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.menuList,(function(t,e){var i=n.__get_orig(t),o=n.__map(t.frontMenu,(function(e,i){var o=n.__get_orig(e),u=n.role==t.roleName?n.__map(e.child,(function(t,e){var i=n.__get_orig(t),o=n.__map(t.buttons,(function(e,i){var o=n.__get_orig(e),u="查看"==e&&"yifahuodingdan"!=t.tableName&&"yituikuandingdan"!=t.tableName&&"yiquxiaodingdan"!=t.tableName&&"weizhifudingdan"!=t.tableName&&"yizhifudingdan"!=t.tableName&&"yiwanchengdingdan"!=t.tableName?t.menu.split("列表"):null;return{$orig:o,g0:u}}));return{$orig:i,l0:o}})):null;return{$orig:o,l1:u}}));return{$orig:i,l2:o}}))),i=n.__map(n.sushegonggaolist,(function(t,e){var i=n.__get_orig(t),o=t.fengmian?t.fengmian.split(","):null;return{$orig:i,g1:o}})),o=n.__map(n.shiwuzhaolinglist,(function(t,e){var i=n.__get_orig(t),o=t.wupintupian?t.wupintupian.split(","):null;return{$orig:i,g2:o}})),u=n.__map(n.xunwuqishilist,(function(t,e){var i=n.__get_orig(t),o=t.wupintupian?t.wupintupian.split(","):null;return{$orig:i,g3:o}}));n.$mp.data=Object.assign({},{$root:{l3:e,l4:i,l5:o,l6:u}})},u=[]},c4b8:function(n,t,e){"use strict";e.r(t);var i=e("2658"),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=o.a}},[["55d3","common/runtime","common/vendor"]]]);