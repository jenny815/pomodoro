(function(t){function e(e){for(var r,s,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},i={app:0},o=[];function a(t){return c.p+"js/"+({settings:"settings"}[t]||t)+"."+{settings:"450d3bb5"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={settings:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var r="css/"+({settings:"settings"}[t]||t)+"."+{settings:"407d56ba"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){u=f[a],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[t],d.parentNode.removeChild(d),n(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){s[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",f.name="ChunkLoadError",f.type=r,f.request=s,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1771:function(t,e,n){var r={"./alarm.mp3":"a362","./logo.png":"cf05","./yay.mp3":"c7a5"};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id="1771"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),s=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(s["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"box "},[n("ul",{staticClass:"pt-5",staticStyle:{"list-style":"none"}},[n("li",{staticClass:"d-flex flex-column col-12 p"},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:"user-circle",size:"6x"}})],1)],1),n("li",{staticClass:"d-flex flex-column col-12"},[n("router-link",{attrs:{to:"/"}},[t._v("JENNY")])],1),n("li",{staticClass:"p-2 pt-3"},[n("router-link",{attrs:{to:"/"}},[t._v("Tasks")])],1),n("li",{staticClass:"p-2"},[n("router-link",{attrs:{to:"/lists"}},[t._v("Lists")])],1),n("li",{staticClass:"p-2"},[n("router-link",{attrs:{to:"/settings"}},[t._v("Settings")])],1)])]),n("keep-alive",[n("router-view")],1)],1)},o=[],a=(n("034f"),n("2877")),c={},u=Object(a["a"])(c,i,o,!1,null,null,null),l=u.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-container",[n("b-row",[n("b-col",{staticClass:"d",attrs:{cols:"12"}},[n("h5",{staticClass:"i"},[t._v(t._s(t.currentText))])]),n("b-col",{staticClass:"e",attrs:{cols:"12"}},[n("b-container",{staticClass:"f"},[n("h1",{staticClass:"g"},[t._v(t._s(t.timeText))])]),n("b-col",{staticClass:"h",attrs:{cols:"3"}},[1!==t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1===t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0?n("b-btn",{attrs:{variant:"primary"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e()],1)],1)],1)],1)],1)},m=[],h=(n("99af"),{name:"Home",data:function(){return{timer:0}},computed:{status:function(){return this.$store.state.status},list:function(){return this.$store.state.list},current:function(){return this.$store.state.current},currentText:function(){var t=this.current;return 0===t.length&&(t=0===this.list.length?"沒有事項":"點擊開始"),t},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)}},methods:{pause:function(){clearInterval(this.timer),this.$store.commit("changeStatus",2)},start:function(){var t=this;2!==this.status&&this.list.length>0&&this.$store.commit("start"),this.current.length>0&&(this.$store.commit("changeStatus",1),this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.$store.commit("changeStatus",0),this.$store.commit("addFinish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.list.length>0?this.start():this.$swal({icon:"success",title:"結束"})}}}),g=h,v=(n("cccb"),Object(a["a"])(g,p,m,!1,null,null,null)),b=v.exports;r["default"].use(d["a"]);var y=[{path:"/",name:"Home",component:b,meta:{title:"番茄鐘"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/lists",name:"Lists",component:function(){return n.e("settings").then(n.bind(null,"ef9d"))},meta:{title:"番茄鐘 | 清單"}},{path:"/tasks",name:"Tasks",component:function(){return n.e("settings").then(n.bind(null,"eb1f"))},meta:{title:"番茄鐘 | 任務"}}],w=new d["a"]({routes:y});w.afterEach((function(t,e){document.title=t.meta.title}));var k=w,_=(n("b0c0"),n("a434"),n("2f62")),x=n("0e44"),C=parseInt("1500"),O=parseInt("300");r["default"].use(_["a"]);var S=new _["a"].Store({state:{sound:"alarm.mp3",list:[],finised:[],current:"",timeleft:C,isBreak:!1,status:0},mutations:{selectSound:function(t,e){t.sound=e},addList:function(t,e){t.list.push({name:e,edit:!1,model:e})},editList:function(t,e){t.list[e].edit=!0},changeList:function(t,e){t.list[e].name=t.list[e].model,t.list[e].edit=!1},cancellist:function(t,e){t.list[e].modek=t.list[e].name,t.list[e].edit=!1},delList:function(t,e){t.list.splice(e,1)},start:function(t){t.isBreak?t.current="休息一下":t.current=t.list.shift().name},changeStatus:function(t,e){t.status=e},countdown:function(t){t.timeleft--},addFinish:function(t){t.finised.push(t.current),t.current="",t.list.length>0&&(t.isBreak=!t.isBreak),t.timeleft=t.isBreak?O:C}},getters:{list:function(t){return t.list}},actions:{},modules:{},plugins:[Object(x["a"])({key:"pomodoro"})]}),j=n("ecee"),E=n("ad3d"),T=n("c074"),$=n("f9d5"),L=n.n($);n("4413");j["c"].add(T["h"],T["a"],T["c"],T["g"],T["f"],T["d"],T["b"],T["e"]),r["default"].component("font-awesome-icon",E["a"]),r["default"].use(L.a),r["default"].config.productionTip=!1,new r["default"]({router:k,store:S,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},cccb:function(t,e,n){"use strict";n("5ced")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.16abfede.js.map