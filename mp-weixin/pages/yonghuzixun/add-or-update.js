(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghuzixun/add-or-update"],{2246:function(n,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(r("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e,r,t,a,i,u){try{var o=n[i](u),c=o.value}catch(s){return void r(s)}o.done?e(c):Promise.resolve(c).then(t,a)}function u(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var u=n.apply(e,r);function o(n){i(u,t,a,o,c,"next",n)}function c(n){i(u,t,a,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("8f9d"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{cross:"",ruleForm:{shangpinmingcheng:"",tupian:"",maijiazhanghao:"",zixunneirong:"",zixunshijian:"",yonghuzhanghao:"",yonghuxingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{shangpinmingcheng:!1,tupian:!1,maijiazhanghao:!1,zixunneirong:!1,zixunshijian:!1,yonghuzhanghao:!1,yonghuxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var r=this;return u(t.default.mark((function a(){var i,u,o,c;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.ruleForm.zixunshijian=r.$utils.getCurDateTime(),i=n.getStorageSync("nowTable"),a.next=4,r.$api.session(i);case 4:if(u=a.sent,r.user=u.data,r.ruleForm.yonghuzhanghao=r.user.yonghuzhanghao,r.ro.yonghuzhanghao=!0,r.ruleForm.yonghuxingming=r.user.yonghuxingming,r.ro.yonghuxingming=!0,r.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(r.ruleForm.refid=e.refid,r.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=18;break}return r.ruleForm.id=e.id,a.next=16,r.$api.info("yonghuzixun",r.ruleForm.id);case 16:u=a.sent,r.ruleForm=u.data;case 18:if(r.cross=e.cross,!e.cross){a.next=58;break}o=n.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 22:if((a.t1=a.t0()).done){a.next=58;break}if(c=a.t1.value,"shangpinmingcheng"!=c){a.next=28;break}return r.ruleForm.shangpinmingcheng=o[c],r.ro.shangpinmingcheng=!0,a.abrupt("continue",22);case 28:if("tupian"!=c){a.next=32;break}return r.ruleForm.tupian=o[c],r.ro.tupian=!0,a.abrupt("continue",22);case 32:if("maijiazhanghao"!=c){a.next=36;break}return r.ruleForm.maijiazhanghao=o[c],r.ro.maijiazhanghao=!0,a.abrupt("continue",22);case 36:if("zixunneirong"!=c){a.next=40;break}return r.ruleForm.zixunneirong=o[c],r.ro.zixunneirong=!0,a.abrupt("continue",22);case 40:if("zixunshijian"!=c){a.next=44;break}return r.ruleForm.zixunshijian=o[c],r.ro.zixunshijian=!0,a.abrupt("continue",22);case 44:if("yonghuzhanghao"!=c){a.next=48;break}return r.ruleForm.yonghuzhanghao=o[c],r.ro.yonghuzhanghao=!0,a.abrupt("continue",22);case 48:if("yonghuxingming"!=c){a.next=52;break}return r.ruleForm.yonghuxingming=o[c],r.ro.yonghuxingming=!0,a.abrupt("continue",22);case 52:if("userid"!=c){a.next=56;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,a.abrupt("continue",22);case 56:a.next=22;break;case 58:r.styleChange();case 59:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zixunshijianConfirm:function(n){console.log(n),this.ruleForm.zixunshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function r(){var a,i,u,o,c,s,g,f,h,l;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.cross){r.next=16;break}if(o=n.getStorageSync("statusColumnName"),c=n.getStorageSync("statusColumnValue"),""==o){r.next=16;break}if(s=n.getStorageSync("crossObj"),o.startsWith("[")){r.next=12;break}for(g in s)g==o&&(s[g]=c);return f=n.getStorageSync("crossTable"),r.next=10,e.$api.update("".concat(f),s);case 10:r.next=16;break;case 12:a=Number(n.getStorageSync("userid")),i=s["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){r.next=38;break}return e.ruleForm.crossuserid=a,e.ruleForm.crossrefid=i,h={page:1,limit:10,crossuserid:a,crossrefid:i},r.next=22,e.$api.list("yonghuzixun",h);case 22:if(l=r.sent,!(l.data.total>=u)){r.next=28;break}return e.$utils.msg(n.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!e.ruleForm.id){r.next=33;break}return r.next=31,e.$api.update("yonghuzixun",e.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,e.$api.add("yonghuzixun",e.ruleForm);case 35:e.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!e.ruleForm.id){r.next=43;break}return r.next=41,e.$api.update("yonghuzixun",e.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,e.$api.add("yonghuzixun",e.ruleForm);case 45:e.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,r=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?r-=60:"end"===n&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,r("543d")["default"])},"8c2d":function(n,e,r){"use strict";(function(n){r("4afe");t(r("66fd"));var e=t(r("9f4b"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,r("543d")["createPage"])},"9f4b":function(n,e,r){"use strict";r.r(e);var t=r("d46c"),a=r("da39");for(var i in a)"default"!==i&&function(n){r.d(e,n,(function(){return a[n]}))}(i);r("ac6a");var u,o=r("f0c5"),c=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"19d91f5a",null,!1,t["a"],u);e["default"]=c.exports},ac6a:function(n,e,r){"use strict";var t=r("ce06"),a=r.n(t);a.a},ce06:function(n,e,r){},d46c:function(n,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"8f9d"))}},a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},da39:function(n,e,r){"use strict";r.r(e);var t=r("2246"),a=r.n(t);for(var i in t)"default"!==i&&function(n){r.d(e,n,(function(){return t[n]}))}(i);e["default"]=a.a}},[["8c2d","common/runtime","common/vendor"]]]);