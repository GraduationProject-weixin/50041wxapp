(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/user-info"],{"142d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,u,a){try{var s=t[u](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){u(a,i,r,s,o,"next",t)}function o(t){u(a,i,r,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{ruleForm:{},tableName:"",yonghuxingbieOptions:[],yonghuxingbieIndex:0}},onLoad:function(){var e=a(i.default.mark((function e(){var n,r,u=this;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:r=e.sent,this.ruleForm=r.data,this.tableName=n,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.yonghuxingbieOptions.forEach((function(t,e){t==u.ruleForm.xingbie&&(u.yonghuxingbieIndex=e)}))),this.styleChange();case 8:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){t.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var e=a(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=12;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){e.next=15;break}return this.$utils.msg("电话应输入手机格式"),e.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=18;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 18:if("yonghu"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=21;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 21:return n=t.getStorageSync("nowTable"),e.next=24,this.$api.update(n,this.ruleForm);case 24:this.$utils.msgBack("修改成功");case 26:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}};e.default=s}).call(this,n("543d")["default"])},2357:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},"7bb3":function(t,e,n){},c141:function(t,e,n){"use strict";(function(t){n("a3fe"),n("921b");i(n("66fd"));var e=i(n("cc25"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cc25:function(t,e,n){"use strict";n.r(e);var i=n("2357"),r=n("ea4e");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("e58e");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"62fa9dd4",null,!1,i["a"],a);e["default"]=o.exports},e58e:function(t,e,n){"use strict";var i=n("7bb3"),r=n.n(i);r.a},ea4e:function(t,e,n){"use strict";n.r(e);var i=n("142d"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a}},[["c141","common/runtime","common/vendor"]]]);