!function(e){function t(t){for(var a,r,u=t[0],o=t[1],s=t[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(f&&f(t);l.length;)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},i={app:0},c=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{401:1,404:1,500:1,basicLayout:1,clipboard:1,dashboard:1,form:1,login:1,table:1,userLayout:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({401:"401",404:"404",500:"500",basicLayout:"basicLayout",clipboard:"clipboard",dashboard:"dashboard",form:"form",login:"login",menu1:"menu1","menu1-1":"menu1-1","menu1-2":"menu1-2","menu1-2-1":"menu1-2-1","menu1-2-2":"menu1-2-2","menu1-3":"menu1-3",menu2:"menu2",redirect:"redirect",table:"table",userLayout:"userLayout"}[e]||e)+"."+{401:"14a965ee",404:"48599eee",500:"739974a9",basicLayout:"7622dd51",clipboard:"2128393a",dashboard:"240f81b4",form:"b5ef0f20",login:"fa8d3a6d",menu1:"31d6cfe0","menu1-1":"31d6cfe0","menu1-2":"31d6cfe0","menu1-2-1":"31d6cfe0","menu1-2-2":"31d6cfe0","menu1-3":"31d6cfe0",menu2:"31d6cfe0",redirect:"31d6cfe0",table:"88c4cbad",userLayout:"32f965b3"}[e]+".css",i=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=(f=c[o]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===a||s===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){var f;if((s=(f=d[o]).getAttribute("data-href"))===a||s===i)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],l.parentNode.removeChild(l),n(c)},l.href=i,document.getElementsByTagName("head")[0].appendChild(l)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var c,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=function(e){return u.p+"js/"+({401:"401",404:"404",500:"500",basicLayout:"basicLayout",clipboard:"clipboard",dashboard:"dashboard",form:"form",login:"login",menu1:"menu1","menu1-1":"menu1-1","menu1-2":"menu1-2","menu1-2-1":"menu1-2-1","menu1-2-2":"menu1-2-2","menu1-3":"menu1-3",menu2:"menu2",redirect:"redirect",table:"table",userLayout:"userLayout"}[e]||e)+"."+{401:"2b130328",404:"c2f58548",500:"f1402a88",basicLayout:"f01b31ef",clipboard:"1c6b7220",dashboard:"3b6936b3",form:"f25c5903",login:"54a7a17f",menu1:"da805dc9","menu1-1":"d6148f7c","menu1-2":"893f0431","menu1-2-1":"d4f71ed5","menu1-2-2":"a03adef5","menu1-3":"3f93fcfe",menu2:"8f5bf1ef",redirect:"40a21dd4",table:"73581ca6",userLayout:"182b9ae7"}[e]+".js"}(e);var s=new Error;c=function(t){o.onerror=o.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:o})}),12e4);o.onerror=o.onload=c,document.head.appendChild(o)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var f=s;c.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"loginStatus",(function(){return y})),n.d(a,"accessToken",(function(){return O})),n.d(a,"userInfo",(function(){return V})),n.d(a,"permission",(function(){return _})),n.d(a,"settings",(function(){return j})),n.d(a,"tagsView",(function(){return x}));var r={};n.r(r),n.d(r,"setLoginStatus",(function(){return I})),n.d(r,"setAccessToken",(function(){return R})),n.d(r,"setSettings",(function(){return U})),n.d(r,"setUserInfo",(function(){return $})),n.d(r,"setPermission",(function(){return B})),n.d(r,"addView",(function(){return F})),n.d(r,"addVisitedView",(function(){return H})),n.d(r,"addCachedView",(function(){return K})),n.d(r,"deleteView",(function(){return Y})),n.d(r,"deleteVisitedView",(function(){return q})),n.d(r,"deleteCachedView",(function(){return G})),n.d(r,"deleteOtherViews",(function(){return J})),n.d(r,"deleteOtherVisitedViews",(function(){return z})),n.d(r,"deleteOtherCachedViews",(function(){return W})),n.d(r,"deleteAllViews",(function(){return Q})),n.d(r,"deleteAllVisitedViews",(function(){return X})),n.d(r,"deleteAllCachedViews",(function(){return Z})),n.d(r,"updateVisitedView",(function(){return ee}));var i=n("6e6d"),c=n("591a"),u=(n("9bd9"),n("2338"),n("f763"),n("fb37"),n("b04f")),o=(n("e04f"),n("d1c5")),s="Login_Status",d="Access_Token",f="Settings";function l(e,t){return o.a.session.set(e,t),t}function m(e,t){return o.a.session.get(e,t)}var p=n("d369"),b=n.n(p),h=n("49f4"),v=n.n(h);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g={loginStatus:m(s,!1),accessToken:m(d,""),settings:m(f,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b.a,{theme:v.a.theme})),userInfo:{},permission:{asyncRoutes:[],routes:[]},tagsView:{cachedViews:[],visitedViews:[]}},y=function(e){return e.loginStatus},O=function(e){return e.accessToken},V=function(e){return e.userInfo},_=function(e){return e.permission},j=function(e){return e.settings},x=function(e){return e.tagsView},P=n("ee86"),E=(n("0eb5"),n("a4c5"),n("35fb")),S=(n("7364"),n("f301"),n("df99"),"SET_LOGIN_STATUS"),k="SET_ACCESS_TOKEN",T="SET_USER_INFO",L="SET_PERMISSION",A="SET_SETTINGS",D="SET_TAGS_VIEW";function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N,I=function(e,t){var n=e.commit;e.state,t||function(e){o.a.session.remove(e)}(d),n(S,l(s,t))},R=function(e,t){var n=e.commit;e.state,n(k,l(d,t))},U=function(e,t){var n=e.commit;e.state,n(A,l(f,t))},$=function(e,t){var n=e.commit;e.state,n(T,t)},B=function(e,t){var n=e.commit;e.state,n(L,t)},F=function(e,t){var n=e.dispatch;n("addVisitedView",t),n("addCachedView",t)},H=function(e,t){var n=e.commit,a=e.state.tagsView,r=a.visitedViews,i=a.cachedViews;if(!r.some((function(e){return e.path===t.path}))){var c=M({},t,{title:t.meta.title||"no-name"});delete c.matched,r.push(c),n(D,{cachedViews:i,visitedViews:r})}},K=function(e,t){var n=e.commit,a=e.state.tagsView,r=a.visitedViews,i=a.cachedViews;i.includes(t.name)||t.meta.noCache||(i.push(t.name),n(D,{cachedViews:i,visitedViews:r}))},Y=function(e,t){var n=e.dispatch,a=e.state;return new Promise((function(e){n("deleteVisitedView",t),n("deleteCachedView",t),e({visitedViews:Object(E.a)(a.tagsView.visitedViews),cachedViews:Object(E.a)(a.tagsView.cachedViews)})}))},q=function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){var r=a.tagsView,i=r.visitedViews,c=r.cachedViews,u=!0,o=!1,s=void 0;try{for(var d,f=i.entries()[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var l=Object(P.a)(d.value,2),m=l[0];if(l[1].path===t.path){i.splice(m,1);break}}}catch(e){o=!0,s=e}finally{try{u||null==f.return||f.return()}finally{if(o)throw s}}n(D,{cachedViews:c,visitedViews:i}),e(Object(E.a)(a.tagsView.visitedViews))}))},G=function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){var r=a.tagsView,i=r.visitedViews,c=r.cachedViews,u=!0,o=!1,s=void 0;try{for(var d,f=c[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var l=d.value;if(l===t.name){var m=c.indexOf(l);c.splice(m,1);break}}}catch(e){o=!0,s=e}finally{try{u||null==f.return||f.return()}finally{if(o)throw s}}n(D,{cachedViews:c,visitedViews:i}),e(Object(E.a)(a.tagsView.cachedViews))}))},J=function(e,t){var n=e.dispatch,a=e.state;return new Promise((function(e){n("deleteOtherVisitedViews",t),n("deleteOtherCachedViews",t),e({visitedViews:Object(E.a)(a.tagsView.visitedViews),cachedViews:Object(E.a)(a.tagsView.cachedViews)})}))},z=function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){var r=a.tagsView,i=r.visitedViews,c=r.cachedViews,u=i.filter((function(e){return e.meta.affix||e.path===t.path}));n(D,{cachedViews:c,visitedViews:u}),e(Object(E.a)(a.tagsView.visitedViews))}))},W=function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){var r=a.tagsView,i=r.visitedViews,c=r.cachedViews,u=[],o=!0,s=!1,d=void 0;try{for(var f,l=c[Symbol.iterator]();!(o=(f=l.next()).done);o=!0){var m=f.value;if(m===t.name){var p=a.tagsView.cachedViews.indexOf(m);u=c.slice(p,p+1);break}}}catch(e){s=!0,d=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw d}}n(D,{cachedViews:u,visitedViews:i}),e(Object(E.a)(a.tagsView.cachedViews))}))},Q=function(e,t){var n=e.dispatch,a=e.state;return new Promise((function(e){n("deleteAllVisitedViews",t),n("deleteAllCachedViews",t),e({visitedViews:Object(E.a)(a.tagsView.visitedViews),cachedViews:Object(E.a)(a.tagsView.cachedViews)})}))},X=function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){var t=a.tagsView,r=t.visitedViews,i=t.cachedViews;r=r.filter((function(e){return e.meta.affix})),n(D,{cachedViews:i,visitedViews:r}),e(Object(E.a)(a.tagsView.visitedViews))}))},Z=function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){var t=a.tagsView.visitedViews;n(D,{cachedViews:[],visitedViews:t}),e(Object(E.a)(a.tagsView.cachedViews))}))},ee=function(e,t){var n=e.commit,a=e.state.tagsView,r=a.visitedViews,i=a.cachedViews,c=!0,u=!1,o=void 0;try{for(var s,d=r[Symbol.iterator]();!(c=(s=d.next()).done);c=!0){var f=s.value;if(f.path===t.path){f=M({},f,{},t);break}}}catch(e){u=!0,o=e}finally{try{c||null==d.return||d.return()}finally{if(u)throw o}}n(D,{cachedViews:i,visitedViews:r})},te=(N={},Object(u.a)(N,S,(function(e,t){e.loginStatus=t})),Object(u.a)(N,k,(function(e,t){e.accessToken=t})),Object(u.a)(N,T,(function(e,t){e.userInfo=t})),Object(u.a)(N,L,(function(e,t){e.permission=t})),Object(u.a)(N,A,(function(e,t){e.settings=t})),Object(u.a)(N,D,(function(e,t){e.tagsView=t})),N);i.default.use(c.a);var ne=new c.a.Store({state:g,mutations:te,getters:a,actions:r,plugins:[]});t.a=ne},"49f4":function(e,t,n){e.exports={theme:"#1890ff"}},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"dateFormat",(function(){return jn})),n.d(a,"numberFormat",(function(){return xn})),n.d(a,"nzhFormat",(function(){return Pn})),n.d(a,"imageFormat",(function(){return En})),n("dac5"),n("6e26"),n("9604"),n("df67");var r=n("6e6d"),i={name:"App"},c=n("6691"),u=Object(c.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,o=n("a18c"),s=n("4360"),d=n("7cbd"),f=n.n(d),l={bind:function(e,t){var n=new f.a(e,{text:function(){return t.value.value}});e.__success_callback__=t.value.success,e.__error_callback__=t.value.error,n.on("success",(function(t){var n=e.__success_callback__;n&&n(t)})),n.on("error",(function(t){var n=e.__error_callback__;n&&n(t)})),e.__clipboard__=n},update:function(e,t){e.__clipboard__.text=function(){return t.value.value},e.__success_callback__=t.value.success,e.__error_callback__=t.value.error},unbind:function(e,t){delete e.__success_callback__,delete e.__error_callback__,e.__clipboard__.destroy(),delete e.__clipboard__}},m=(n("f301"),n("df99"),{clipboard:l,permission:{inserted:function(e,t,n){var a=t.value,r=s.a.getters.userInfo.roles;if(!(a&&a instanceof Array&&0<a.length))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var i=a;r.some((function(e){return i.includes(e)}))||e.parentNode&&e.parentNode.removeChild(e)}}});(function(e){e.directive("clipboard",m.clipboard),e.directive("permission",m.permission)})(r.default),n("ae5f"),n("19dd");var p=n("f6a8"),b=n.n(p),h=(n("5ae4"),n("6813")),v=n.n(h),w=(n("80bc"),n("1e27")),g=n.n(w),y=(n("60e2"),n("9d28")),O=n.n(y),V=(n("bf92"),n("f692")),_=n.n(V),j=(n("4e4c"),n("35ac")),x=n.n(j),P=(n("6edb"),n("2759")),E=n.n(P),S=(n("5ccb"),n("2fb3")),k=n.n(S),T=(n("387c"),n("832a")),L=n.n(T),A=(n("656c"),n("1197")),D=n.n(A),C=(n("bb4c"),n("c6cd")),M=n.n(C),N=(n("ec2a"),n("60a3")),I=n.n(N),R=(n("c676"),n("bdf4")),U=n.n(R),$=(n("e9f6"),n("dff3")),B=n.n($),F=(n("d7c7"),n("5139")),H=n.n(F),K=(n("c78f"),n("5b53")),Y=n.n(K),q=(n("0834"),n("3293")),G=n.n(q),J=(n("c107"),n("18db")),z=n.n(J),W=(n("a282"),n("d15e")),Q=n.n(W),X=(n("dbf5"),n("b09f")),Z=n.n(X),ee=(n("b466"),n("906f")),te=n.n(ee),ne=(n("67e9"),n("8a74")),ae=n.n(ne),re=(n("f62d"),n("dd4a")),ie=n.n(re),ce=(n("270e"),n("1ed2")),ue=n.n(ce),oe=(n("0b02"),n("c50f")),se=n.n(oe),de=(n("2901"),n("73d5")),fe=n.n(de),le=(n("f116"),n("fa7f")),me=n.n(le),pe=(n("d024"),n("d3b1")),be=n.n(pe),he=(n("46e1"),n("4fc3")),ve=n.n(he),we=(n("d24b"),n("12fa")),ge=n.n(we),ye=(n("5157"),n("bfc6")),Oe=n.n(ye),Ve=(n("05a3"),n("79b1")),_e=n.n(Ve),je=(n("d17b"),n("072a")),xe=n.n(je),Pe=(n("ff1e"),n("632e")),Ee=n.n(Pe),Se=(n("83bd"),n("f199")),ke=n.n(Se),Te=(n("a0f1"),n("4b17")),Le=n.n(Te),Ae=(n("0e11"),n("0a16")),De=n.n(Ae),Ce=(n("2641"),n("2876")),Me=n.n(Ce),Ne=(n("32f1"),n("bf0e")),Ie=n.n(Ne),Re=(n("e5c0"),n("2015")),Ue=n.n(Re),$e=(n("eaa8"),n("f8e4")),Be=n.n($e),Fe=(n("710a"),n("94ac2")),He=n.n(Fe),Ke=(n("c63b"),n("4474")),Ye=n.n(Ke),qe=(n("d932"),n("241d")),Ge=n.n(qe),Je=(n("0cca"),n("f03a")),ze=n.n(Je),We=(n("acb8"),n("79fd")),Qe=n.n(We),Xe=(n("5e31"),n("1de9")),Ze=n.n(Xe),et=(n("aaa7"),n("1f9f")),tt=n.n(et),nt=(n("5564"),n("17d9")),at=n.n(nt),rt=(n("7fe3"),n("4d5c")),it=n.n(rt),ct=(n("c5f0"),n("66a6")),ut=n.n(ct),ot=(n("a05f"),n("afd3")),st=n.n(ot),dt=(n("66a7"),n("c1b1")),ft=n.n(dt),lt=(n("008d"),n("421a")),mt=n.n(lt),pt=(n("c53c"),n("bde3")),bt=n.n(pt),ht=(n("d5aa"),n("5a17")),vt=n.n(ht),wt=(n("9b3e"),n("11ca")),gt=n.n(wt),yt=(n("d2e4"),n("9b80")),Ot=n.n(yt),Vt=(n("9c84"),n("5746")),_t=n.n(Vt),jt=(n("da3d"),n("c471")),xt=n.n(jt),Pt=(n("c775"),n("aed1")),Et=n.n(Pt),St=(n("2652"),n("8c97")),kt=n.n(St),Tt=(n("f05e"),n("d9c4")),Lt=n.n(Tt),At=(n("56d1"),n("a6f1")),Dt=n.n(At),Ct=(n("1858"),n("2582")),Mt=n.n(Ct),Nt=(n("9028"),n("1009")),It=n.n(Nt),Rt=(n("0ffa"),n("17ca")),Ut=n.n(Rt),$t=(n("037b"),n("581b")),Bt=n.n($t),Ft=(n("65a2"),n("198a")),Ht=n.n(Ft),Kt=(n("3889"),n("fcc6")),Yt=n.n(Kt),qt=(n("a10e"),n("47b7")),Gt=n.n(qt),Jt=(n("fa59"),n("2d9c")),zt=n.n(Jt),Wt=(n("ae34"),n("14bd")),Qt=n.n(Wt),Xt=(n("cfab"),n("9d4f")),Zt=n.n(Xt),en=(n("6142"),n("22fc")),tn=n.n(en),nn=(n("9a22"),n("ada2")),an=n.n(nn),rn=(n("ebdd"),n("c0dc")),cn=n.n(rn),un=(n("6ec4"),n("dcff")),on=n.n(un),sn=(n("fc5c"),n("3e62")),dn=n.n(sn);r.default.use(dn.a),r.default.use(on.a),r.default.use(cn.a),r.default.use(an.a),r.default.use(tn.a),r.default.use(Zt.a),r.default.use(Qt.a),r.default.use(zt.a),r.default.use(Gt.a),r.default.use(Yt.a),r.default.use(Ht.a),r.default.use(Bt.a),r.default.use(Ut.a),r.default.use(It.a),r.default.use(Mt.a),r.default.use(Dt.a),r.default.use(Lt.a),r.default.use(kt.a),r.default.use(Et.a),r.default.use(xt.a),r.default.use(_t.a),r.default.use(Ot.a),r.default.use(gt.a),r.default.use(vt.a),r.default.use(bt.a),r.default.use(mt.a),r.default.use(ft.a),r.default.use(st.a),r.default.use(ut.a),r.default.use(it.a),r.default.use(at.a),r.default.use(tt.a),r.default.use(Ze.a),r.default.use(Qe.a),r.default.use(ze.a),r.default.use(Ge.a),r.default.use(Ye.a),r.default.use(He.a),r.default.use(Be.a),r.default.use(Ue.a),r.default.use(Ie.a),r.default.use(Me.a),r.default.use(De.a),r.default.use(Le.a),r.default.use(ke.a),r.default.use(Ee.a),r.default.use(xe.a),r.default.use(_e.a),r.default.use(Oe.a),r.default.use(ge.a),r.default.use(ve.a),r.default.use(be.a),r.default.use(me.a),r.default.use(fe.a),r.default.use(se.a),r.default.use(ue.a),r.default.use(ie.a),r.default.use(ae.a),r.default.use(te.a),r.default.use(Z.a),r.default.use(Q.a),r.default.use(z.a),r.default.use(G.a),r.default.use(Y.a),r.default.use(H.a),r.default.use(B.a),r.default.use(U.a),r.default.use(I.a),r.default.use(M.a),r.default.use(D.a),r.default.use(L.a),r.default.use(k.a),r.default.use(E.a),r.default.use(x.a),r.default.use(_.a);var fn=O.a,ln=fn.directive,mn=fn.service,pn=g.a,bn=pn.alert,hn=pn.confirm,vn=pn.prompt;r.default.use(ln),r.default.prototype.$loading=mn,r.default.prototype.$msgbox=pn,r.default.prototype.$alert=bn,r.default.prototype.$confirm=hn,r.default.prototype.$prompt=vn,r.default.prototype.$notify=v.a,r.default.prototype.$message=b.a,n("fb37"),n("f763"),n("7bc1");var wn=n("fce8"),gn=n.n(wn),yn=n("052e"),On=n.n(yn),Vn=n("9aa3"),_n=n.n(Vn);function jn(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";if(e)return gn()(e).format(t)}function xn(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"0,00.00";return On()(e).format(t)}function Pn(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"encodeS";return _n.a[t](e)}function En(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(e){if(!e.includes(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BUCKET))return e;var n=t.scale,a=t.width,r=t.height,i="https://".concat(Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BUCKET,".image.myqcloud.com").concat(e.split(".com")[1]);return n?"".concat(i,"?imageMogr2/thumbnail/!").concat(n,"p"):a&&r?"".concat(i,"?imageMogr2/thumbnail/").concat(a,"x").concat(r):a&&!r?"".concat(i,"?imageMogr2/thumbnail/").concat(a,"x"):!a&&r?"".concat(i,"?imageMogr2/thumbnail/x").concat(r):e}}Object.keys(a).forEach((function(e){r.default.filter(e,a[e])})),n("2338");var Sn=n("35fb"),kn=n("b04f"),Tn=(n("63ff"),n("cec5")),Ln=n("38bc"),An=n.n(Ln),Dn=n("ed08");function Cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Cn(n,!0).forEach((function(t){Object(kn.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n("70e7");var Nn=["/user/login"];function In(e){return new Promise(function(){var t=Object(Tn.a)(regeneratorRuntime.mark((function t(n,a){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=[],r=e.includes("admin")?o.a||[]:Object(Dn.b)(o.a,e),i={asyncRoutes:r,routes:[].concat(Object(Sn.a)(o.b),Object(Sn.a)(r))},t.next=6,s.a.dispatch("setPermission",i);case 6:n(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}o.c.beforeEach(function(){var e=Object(Tn.a)(regeneratorRuntime.mark((function e(t,n,a){var r,i,c,u,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(An.a.start(),document.title=Object(Dn.c)(t.meta.title),r=s.a.getters,i=r.loginStatus,c=r.userInfo.roles,u=r.accessToken,!i){e.next=46;break}if("/user/login"!==t.path){e.next=9;break}a({path:"/"}),An.a.done(),e.next=44;break;case 9:if(!(c&&0<c.length)){e.next=15;break}a(),An.a.done(),e.next=44;break;case 15:return e.prev=15,d={name:u.includes("admin")?"admin":"normal",roles:u.includes("admin")?["admin"]:["normal"],avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"},e.next=19,s.a.dispatch("setUserInfo",d);case 19:return e.next=21,In(d.roles);case 21:if(e.t0=e.sent,e.t0){e.next=24;break}e.t0=[];case 24:f=e.t0,o.c.addRoutes(f),a(Mn({},t,{replace:!0})),An.a.done(),e.next=44;break;case 30:return e.prev=30,e.t1=e.catch(15),e.next=34,s.a.dispatch("setLoginStatus",!1);case 34:return e.next=36,s.a.dispatch("setAccessToken","");case 36:return e.next=38,s.a.dispatch("setUserInfo",{});case 38:return e.next=40,s.a.dispatch("setPermission",{asyncRoutes:[],routes:[]});case 40:Object(o.d)(),b.a.error(e.t1||"系统错误"),a("/user/login?redirect=".concat(t.path)),An.a.done();case 44:e.next=48;break;case 46:0<=Nn.indexOf(t.path)?a():a("/user/login"),An.a.done();case 48:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(t,n,a){return e.apply(this,arguments)}}()),o.c.afterEach((function(){An.a.done()}));var Rn=n("e1bc");Object(Rn.a)("".concat("","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(e){}}),n("9f35"),n("508f"),n("6861"),r.default.config.productionTip=!1,new r.default({router:o.c,store:s.a,render:function(e){return e(u)}}).$mount("#app")},6861:function(e,t,n){e.exports={menutext:"#bfcbd9",menuactivetext:"#409eff",submenuactivetext:"#f4f4f5",menubg:"#304156",menuhover:"#263445",submenubg:"#1f2d3d",submenuhover:"#001528",sidebarwidth:"240px"}},a18c:function(e,t,n){"use strict";function a(){return n.e("basicLayout").then(n.bind(null,"f9ad"))}n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return f}));var r=n("6e6d"),i=n("c478"),c=i.a.prototype.push;i.a.prototype.push=function(e){return c.call(this,e).catch((function(e){return e}))},r.default.use(i.a);var u=[{path:"/user",name:"User",component:function(){return n.e("userLayout").then(n.bind(null,"687a"))},hidden:!0,children:[{path:"login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"9ed6"))},meta:{title:"登录"}}]},{path:"/",component:a,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"9406"))},meta:{title:"欢迎页",icon:"el-icon-s-home",affix:!0}}]},{path:"/example",name:"Example",component:a,redirect:"/example/table",meta:{title:"示例",icon:"el-icon-orange"},children:[{path:"tree",name:"ExampleTree",component:function(){return n.e("table").then(n.bind(null,"755f"))},meta:{title:"树"}},{path:"table",name:"ExampleTable",component:function(){return n.e("table").then(n.bind(null,"aa7c"))},meta:{title:"表格"}},{path:"theme",name:"ExampleTheme",component:function(){return n.e("clipboard").then(n.bind(null,"3512"))},meta:{title:"换肤"}},{path:"clipboard",name:"ExampleClipboard",component:function(){return n.e("clipboard").then(n.bind(null,"1ceb"))},meta:{title:"剪贴板"}}]},{path:"/redirect",name:"Redirect",component:a,hidden:!0,children:[{path:"/redirect/:path*",component:function(){return n.e("redirect").then(n.bind(null,"ef3c"))}}]},{path:"/exception",name:"Exception",component:a,hidden:!0,children:[{path:"401",name:"Exception401",component:function(){return n.e("401").then(n.bind(null,"c0e3"))},meta:{title:"401"}},{path:"404",name:"Exception404",component:function(){return n.e("404").then(n.bind(null,"1cae"))},meta:{title:"404"}},{path:"500",name:"Exception500",component:function(){return n.e("500").then(n.bind(null,"eec9"))},meta:{title:"500"}}]},{path:"/401",redirect:"/exception/401",hidden:!0},{path:"/404",redirect:"/exception/404",hidden:!0},{path:"/500",redirect:"/exception/500",hidden:!0}],o=[{path:"/form",component:a,meta:{roles:["admin"]},children:[{path:"index",name:"ExampleForm",component:function(){return n.e("form").then(n.bind(null,"371d"))},meta:{title:"表单",icon:"el-icon-s-platform"}}]},{path:"/nested",component:a,redirect:"/nested/menu1",meta:{title:"嵌套菜单",icon:"el-icon-more"},children:[{path:"menu1",name:"Menu1",component:function(){return n.e("menu1").then(n.bind(null,"e9bc"))},meta:{title:"菜单 1"},children:[{path:"menu1-1",name:"Menu1-1",component:function(){return n.e("menu1-1").then(n.bind(null,"91b3"))},meta:{title:"菜单 1-1"}},{path:"menu1-2",name:"Menu1-2",component:function(){return n.e("menu1-2").then(n.bind(null,"55cd"))},meta:{title:"菜单 1-2"},children:[{path:"menu1-2-1",name:"Menu1-2-1",component:function(){return n.e("menu1-2-1").then(n.bind(null,"6582"))},meta:{title:"菜单 1-2-1"}},{path:"menu1-2-2",name:"Menu1-2-2",component:function(){return n.e("menu1-2-2").then(n.bind(null,"b6fb"))},meta:{title:"菜单 1-2-2"}}]},{path:"menu1-3",name:"Menu1-3",component:function(){return n.e("menu1-3").then(n.bind(null,"8d8b"))},meta:{title:"菜单 1-3"}}]},{path:"menu2",name:"Menu2",component:function(){return n.e("menu2").then(n.bind(null,"dbb3"))},meta:{title:"菜单 2"}}]},{path:"*",redirect:"/404",hidden:!0}],s=function(){return new i.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:u})},d=s();function f(){var e=s();d.matcher=e.matcher}t.c=d},d369:function(e,t){e.exports={title:"小王管理系统",tagsView:!0,fixedHeader:!0,sideMenuLogo:!0,openSettings:!1,openSideMenu:!0,withoutAnimation:!1,device:"desktop"}},ed08:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f})),n("2338");var a=n("b04f"),r=(n("f301"),n("df99"),n("f763"),n("fb37"),n("34a3"),n("7c56"),n("3c6b"),n("d369")),i=n.n(r);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){return/^(https?:|mailto:|tel:)/.test(e)}function o(e,t){var n;return function(){for(var a=this,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];n&&clearTimeout(n),n=setTimeout((function(){e.apply(a,i)}),t)}}function s(e,t){if(e&&t){var n=e.className,a=n.indexOf(t);-1===a?n+=""+t:n=n.substr(0,a)+n.substr(a+t.length),e.className=n}}function d(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=i.a.title;return e?"".concat(e," - ").concat(t):"".concat(t)}function f(e,t){var n=[];return e.forEach((function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);!function(e,t){return!t.meta||!t.meta.roles||e.some((function(e){return t.meta.roles.includes(e)}))}(t,r)||(r.children&&(r.children=f(r.children,t)),n.push(r))})),n}n("4360")}});