(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"542d":function(t,n,e){"use strict";e.r(n);var r=e("a64b"),a=e("881d");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("5732");var i,o=e("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=c.exports},5732:function(t,n,e){"use strict";var r=e("b1f6"),a=e.n(r);a.a},8399:function(t,n,e){"use strict";(function(t){e("a3fe"),e("921b");r(e("66fd"));var n=r(e("542d"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"881d":function(t,n,e){"use strict";e.r(n);var r=e("b1c6"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},a64b:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}))},b1c6:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a")),a=u(e("1551"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,a,u,i){try{var o=t[u](i),c=o.value}catch(s){return void e(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var u=t.apply(n,e);function o(t){i(u,r,a,o,c,"next",t)}function c(t){i(u,r,a,o,c,"throw",t)}o(void 0)}))}}var c={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var n=o(r.default.mark((function n(){var e,u,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.role=t.getStorageSync("role"),e=t.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:u=n.sent,this.user=u.data,this.tableName=e,i=a.default.list(),this.menuList=i;case 9:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onShow:function(){var n=o(r.default.mark((function n(){var e,u,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.role=t.getStorageSync("role"),e=t.getStorageSync("nowTable"),n.next=4,this.$api.session(e);case 4:u=n.sent,this.user=u.data,this.tableName=e,i=a.default.list(),this.menuList=i;case 9:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),methods:{onPageTap:function(n){t.navigateTo({url:n,fail:function(){t.switchTab({url:n})}})}}};n.default=c}).call(this,e("543d")["default"])},b1f6:function(t,n,e){}},[["8399","common/runtime","common/vendor"]]]);