(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(e,t,n){e.exports=n(1)(1469)},229:function(e,t,n){"use strict";n(242);var a=n(234),i=n(30),r=n(31),l=n(75),o=(n(114),n(231)),c=(n(235),n(237)),m=n(0),d=n.n(m),s=n(28),_=n(18),p=n.n(_),u=n(5),x=n(6),f=n(8),b=n(7),g=n(9),E=n(238),h=n.n(E),y=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.contentWidth,n=e.children,a="".concat(h.a.main);return"Fixed"===t&&(a="".concat(h.a.main," ").concat(h.a.wide)),d.a.createElement("div",{className:a},n)}}]),t}(m.PureComponent),v=n(230),w=n(228),S=n.n(w),k=n(50),N=function(e,t,n,a){var i=n.indexOf(e)===n.length-1;return"/"===e.path?d.a.createElement(s.Link,{to:a.join("/")},e.breadcrumbName):i||!e.component?d.a.createElement("span",null,e.breadcrumbName):d.a.createElement(s.Link,{to:a.join("/")},e.breadcrumbName)},C=function(e){return e.breadcrumbList.map(function(e){var t=e.title;return{path:e.href,breadcrumbName:t}})},j=function(e,t,n){var a=n.home,i=Object(k.f)(e.pathname).map(function(e){var n=function(e,t){var n=e[t];return n||Object.keys(e).forEach(function(a){S()(a).test(t)&&(n=e[a])}),n||{}}(t,e);if(n.inherited)return null;var a=n.name,i=n.hideInBreadcrumb;return a&&!i?{path:e,breadcrumbName:a}:null}).filter(function(e){return null!==e});return a&&i.unshift({path:"/",breadcrumbName:a}),i},A=function(e){var t=e.breadcrumbList,n=function(e){return{routes:e.routes,params:e.params,routerLocation:e.location,breadcrumbNameMap:e.breadcrumbNameMap}}(e),a=n.routes,i=n.params,r=n.routerLocation,l=n.breadcrumbNameMap;return t&&t.length?{routes:C(e),params:i,itemRender:N}:a&&i?{routes:a.filter(function(e){return e.breadcrumbName}),params:i,itemRender:N}:r&&r.pathname?{routes:j(r,l,e),itemRender:N}:{}},O=n(240),D=n.n(O),L=c.default.Title,P=function(e){var t=e.tabList,n=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent;return t&&t.length?d.a.createElement(o.default,{className:D.a.tabs,activeKey:n,onChange:function(e){a&&a(e)},tabBarExtraContent:i},t.map(function(e){return d.a.createElement(o.default.TabPane,{tab:e.tab,key:e.key})})):null};t.a=function(e){var t=e.children,n=e.contentWidth,o=e.fluid,c=e.wrapperClassName,m=e.home,_=e.top,u=e.title,x=e.content,f=e.logo,b=e.extraContent,g=e.hiddenBreadcrumb,E=Object(l.a)(e,["children","contentWidth","fluid","wrapperClassName","home","top","title","content","logo","extraContent","hiddenBreadcrumb"]);return d.a.createElement("div",{style:{margin:"-24px -24px 0"},className:p()(c,D.a.main)},_,d.a.createElement(v.a.Consumer,null,function(e){return d.a.createElement("div",{className:D.a.wrapper},d.a.createElement("div",{className:p()(Object(r.a)({},D.a.wide,!o&&"Fixed"===n))},d.a.createElement(a.default,Object.assign({title:d.a.createElement(d.a.Fragment,null,f&&d.a.createElement("span",{className:D.a.logo},f),d.a.createElement(L,{level:4,style:{marginBottom:0,display:"inline-block"}},u)),key:"pageheader"},E,{breadcrumb:!g&&A(Object(i.a)({},e,E,null!==m&&{home:"\u9996\u9875"}))},e,{className:D.a.pageHeader,linkElement:s.Link,footer:P(E)}),d.a.createElement("div",{className:D.a.detail},d.a.createElement("div",{className:D.a.main},d.a.createElement("div",{className:D.a.row},x&&d.a.createElement("div",{className:D.a.content},x),b&&d.a.createElement("div",{className:D.a.extraContent},b)))))))}),t?d.a.createElement("div",{className:D.a["children-content"]},d.a.createElement(y,null,t)):null)}},230:function(e,t,n){"use strict";var a=n(0);t.a=Object(a.createContext)()},231:function(e,t,n){e.exports=n(1)(240)},234:function(e,t,n){e.exports=n(1)(675)},237:function(e,t,n){e.exports=n(1)(704)},238:function(e,t,n){var a=n(239);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},239:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,".GridContent__main__V9SJt {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.GridContent__main__V9SJt.GridContent__wide__26_PS {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n",""]),t.locals={main:"GridContent__main__V9SJt",wide:"GridContent__wide__26_PS"}},240:function(e,t,n){var a=n(241);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},241:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.index__children-content__2jFRU {\n  margin: 24px 24px 0;\n}\n.index__main__2tSfx .index__wrapper__3o3Zg {\n  padding: 16px 24px 0;\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n}\n.index__main__2tSfx .index__wrapper__3o3Zg .ant-page-header {\n  padding: 0;\n}\n.index__main__2tSfx .index__wrapper__3o3Zg .ant-page-header-title-view-extra {\n  top: 0;\n  right: 0;\n}\n.index__main__2tSfx .index__wide__1O1ZK {\n  max-width: 1200px;\n  margin: auto;\n}\n.index__main__2tSfx .index__detail__1giba {\n  display: flex;\n}\n.index__main__2tSfx .index__row__1aQaZ {\n  display: flex;\n  width: 100%;\n}\n.index__main__2tSfx .index__logo__3O-j9 {\n  display: inline-block;\n  margin-top: -1px;\n  margin-right: 16px;\n  vertical-align: middle;\n}\n.index__main__2tSfx .index__logo__3O-j9 > img {\n  display: block;\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n.index__main__2tSfx .index__title-content__1sW1N {\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 576px) {\n  .index__main__2tSfx .index__children-content__2jFRU {\n    margin: 24px 0 0;\n  }\n}\n.index__main__2tSfx .index__title__2d9Vj,\n.index__main__2tSfx .index__content__308C2 {\n  flex: auto;\n}\n.index__main__2tSfx .index__extraContent__3xcuL,\n.index__main__2tSfx .index__main__2tSfx {\n  flex: 0 1 auto;\n}\n.index__main__2tSfx .index__main__2tSfx {\n  width: 100%;\n}\n.index__main__2tSfx .index__title__2d9Vj {\n  margin-bottom: 16px;\n}\n.index__main__2tSfx .index__content__308C2,\n.index__main__2tSfx .index__extraContent__3xcuL {\n  margin-bottom: 16px;\n}\n.index__main__2tSfx .index__extraContent__3xcuL {\n  min-width: 242px;\n  margin-left: 88px;\n  text-align: right;\n}\n@media screen and (max-width: 1200px) {\n  .index__main__2tSfx .index__extraContent__3xcuL {\n    margin-left: 44px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .index__main__2tSfx .index__extraContent__3xcuL {\n    margin-left: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .index__main__2tSfx .index__row__1aQaZ {\n    display: block;\n  }\n  .index__main__2tSfx .index__action__pJPNt,\n  .index__main__2tSfx .index__extraContent__3xcuL {\n    margin-left: 0;\n    text-align: left;\n  }\n}\n@media screen and (max-width: 576px) {\n  .index__main__2tSfx .index__detail__1giba {\n    display: block;\n  }\n}\n/*\n.content {\n  margin: 24px 24px 0;\n}\n\n@media screen and (max-width: @screen-sm) {\n  .content {\n    margin: 24px 0 0;\n  }\n}*/\n",""]),t.locals={"children-content":"index__children-content__2jFRU",main:"index__main__2tSfx",wrapper:"index__wrapper__3o3Zg",wide:"index__wide__1O1ZK",detail:"index__detail__1giba",row:"index__row__1aQaZ",logo:"index__logo__3O-j9","title-content":"index__title-content__1sW1N",title:"index__title__2d9Vj",content:"index__content__308C2",extraContent:"index__extraContent__3xcuL",action:"index__action__pJPNt"}},246:function(e,t,n){e.exports=n(1)(1428)},253:function(e,t,n){e.exports=n(1)(804)},260:function(e,t,n){e.exports=n(1)(684)},263:function(e,t,n){e.exports=n(1)(390)},280:function(e,t,n){e.exports=n(1)(677)},289:function(e,t,n){e.exports=n(1)(682)},292:function(e,t,n){e.exports=n(1)(515)},534:function(e,t,n){var a=n(535);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},535:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.AdvancedProfile__headerList__2a78K {\n  margin-bottom: 4px;\n}\n.AdvancedProfile__tabsCard__2XHHM .ant-card-head {\n  padding: 0 16px;\n}\n.AdvancedProfile__noData__3xVIR {\n  color: rgba(0, 0, 0, 0.25);\n  text-align: center;\n  line-height: 64px;\n  font-size: 16px;\n}\n.AdvancedProfile__noData__3xVIR i {\n  font-size: 24px;\n  margin-right: 16px;\n  position: relative;\n  top: 3px;\n}\n.AdvancedProfile__heading__1eMPf {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 20px;\n}\n.AdvancedProfile__stepDescription__vmqp2 {\n  font-size: 14px;\n  position: relative;\n  left: 38px;\n}\n.AdvancedProfile__stepDescription__vmqp2 > div {\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n.AdvancedProfile__textSecondary__1asc8 {\n  color: rgba(0, 0, 0, 0.45);\n}\n@media screen and (max-width: 576px) {\n  .AdvancedProfile__stepDescription__vmqp2 {\n    left: 8px;\n  }\n}\n",""]),t.locals={headerList:"AdvancedProfile__headerList__2a78K",tabsCard:"AdvancedProfile__tabsCard__2XHHM",noData:"AdvancedProfile__noData__3xVIR",heading:"AdvancedProfile__heading__1eMPf",stepDescription:"AdvancedProfile__stepDescription__vmqp2",textSecondary:"AdvancedProfile__textSecondary__1asc8"}},557:function(e,t,n){"use strict";n.r(t);n(72);var a,i,r,l=n(52),o=(n(51),n(33)),c=(n(46),n(19)),m=(n(283),n(260)),d=n(5),s=n(6),_=n(8),p=n(7),u=n(9),x=n(278),f=(n(269),n(280)),b=(n(290),n(292)),g=(n(48),n(22)),E=(n(49),n(15)),h=(n(74),n(54)),y=(n(47),n(14)),v=(n(73),n(24)),w=(n(29),n(20)),S=(n(348),n(351)),k=n.n(S),N=(n(287),n(289)),C=n(0),j=n.n(C),A=n(246),O=n.n(A),D=n(253),L=n.n(D),P=n(18),z=n.n(P),I=n(229),B=n(534),F=n.n(B),M=N.default.Step,R=k.a.Description,J=w.default.Group,T=j.a.createElement(v.default,null,j.a.createElement(v.default.Item,{key:"1"},"\u9009\u9879\u4e00"),j.a.createElement(v.default.Item,{key:"2"},"\u9009\u9879\u4e8c"),j.a.createElement(v.default.Item,{key:"3"},"\u9009\u9879\u4e09")),V=j.a.createElement(C.Fragment,null,j.a.createElement(J,null,j.a.createElement(w.default,null,"\u64cd\u4f5c"),j.a.createElement(w.default,null,"\u64cd\u4f5c"),j.a.createElement(h.default,{overlay:T,placement:"bottomRight"},j.a.createElement(w.default,null,j.a.createElement(y.default,{type:"ellipsis"})))),j.a.createElement(w.default,{type:"primary"},"\u4e3b\u64cd\u4f5c")),Z=j.a.createElement(g.default,null,j.a.createElement(E.default,{xs:24,sm:12},j.a.createElement("div",{className:F.a.textSecondary},"\u72b6\u6001"),j.a.createElement("div",{className:F.a.heading},"\u5f85\u5ba1\u6279")),j.a.createElement(E.default,{xs:24,sm:12},j.a.createElement("div",{className:F.a.textSecondary},"\u8ba2\u5355\u91d1\u989d"),j.a.createElement("div",{className:F.a.heading},"\xa5 568.08"))),W=j.a.createElement(k.a,{className:F.a.headerList,size:"small",col:"2"},j.a.createElement(R,{term:"\u521b\u5efa\u4eba"},"\u66f2\u4e3d\u4e3d"),j.a.createElement(R,{term:"\u8ba2\u8d2d\u4ea7\u54c1"},"XX \u670d\u52a1"),j.a.createElement(R,{term:"\u521b\u5efa\u65f6\u95f4"},"2017-07-07"),j.a.createElement(R,{term:"\u5173\u8054\u5355\u636e"},j.a.createElement("span",{className:"link-button"},"12421")),j.a.createElement(R,{term:"\u751f\u6548\u65e5\u671f"},"2017-07-07 ~ 2017-08-08"),j.a.createElement(R,{term:"\u5907\u6ce8"},"\u8bf7\u4e8e\u4e24\u4e2a\u5de5\u4f5c\u65e5\u5185\u786e\u8ba4")),K=[{key:"detail",tab:"\u8be6\u60c5"},{key:"rule",tab:"\u89c4\u5219"}],G=j.a.createElement("div",{className:z()(F.a.textSecondary,F.a.stepDescription)},j.a.createElement(C.Fragment,null,"\u66f2\u4e3d\u4e3d",j.a.createElement(y.default,{type:"dingding-o",style:{marginLeft:8}})),j.a.createElement("div",null,"2016-12-12 12:32")),X=j.a.createElement("div",{className:F.a.stepDescription},j.a.createElement(C.Fragment,null,"\u5468\u6bdb\u6bdb",j.a.createElement(y.default,{type:"dingding-o",style:{color:"#00A0E9",marginLeft:8}})),j.a.createElement("div",null,j.a.createElement("span",{className:"link-button"},"\u50ac\u4e00\u4e0b"))),H=j.a.createElement("div",{style:{width:160}},"\u5434\u52a0\u53f7",j.a.createElement("span",{className:F.a.textSecondary,style:{float:"right"}},j.a.createElement(b.default,{status:"default",text:j.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},"\u672a\u54cd\u5e94")})),j.a.createElement("div",{className:F.a.textSecondary,style:{marginTop:4}},"\u8017\u65f6\uff1a2\u5c0f\u65f625\u5206\u949f")),U=function(e,t){return"process"===t.status?j.a.createElement(f.default,{placement:"topLeft",arrowPointAtCenter:!0,content:H},e):e},q=[{key:"tab1",tab:"\u64cd\u4f5c\u65e5\u5fd7\u4e00"},{key:"tab2",tab:"\u64cd\u4f5c\u65e5\u5fd7\u4e8c"},{key:"tab3",tab:"\u64cd\u4f5c\u65e5\u5fd7\u4e09"}],Q=[{title:"\u64cd\u4f5c\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u64cd\u4f5c\u4eba",dataIndex:"name",key:"name"},{title:"\u6267\u884c\u7ed3\u679c",dataIndex:"status",key:"status",render:function(e){return"agree"===e?j.a.createElement(b.default,{status:"success",text:"\u6210\u529f"}):j.a.createElement(b.default,{status:"error",text:"\u9a73\u56de"})}},{title:"\u64cd\u4f5c\u65f6\u95f4",dataIndex:"updatedAt",key:"updatedAt"},{title:"\u5907\u6ce8",dataIndex:"memo",key:"memo"}],Y=[{key:"op1",type:"\u8ba2\u8d2d\u5173\u7cfb\u751f\u6548",name:"\u66f2\u4e3d\u4e3d",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"},{key:"op2",type:"\u8d22\u52a1\u590d\u5ba1",name:"\u4ed8\u5c0f\u5c0f",status:"reject",updatedAt:"2017-10-03  19:23:12",memo:"\u4e0d\u901a\u8fc7\u539f\u56e0"},{key:"op3",type:"\u90e8\u95e8\u521d\u5ba1",name:"\u5468\u6bdb\u6bdb",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"},{key:"op4",type:"\u63d0\u4ea4\u8ba2\u5355",name:"\u6797\u4e1c\u4e1c",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"\u5f88\u68d2"},{key:"op5",type:"\u521b\u5efa\u8ba2\u5355",name:"\u6c57\u7259\u7259",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"}],$=[{key:"op1",type:"\u8ba2\u8d2d\u5173\u7cfb\u751f\u6548",name:"\u66f2\u4e3d\u4e3d",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"}],ee=[{key:"op1",type:"\u521b\u5efa\u8ba2\u5355",name:"\u6c57\u7259\u7259",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"}],te=(a=L()(),i=O()(200),r=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(_.a)(this,Object(p.a)(t).call(this,e))).onOperationTabChange=function(e){n.setState({operationkey:e})},n.state={loading:!1,operationkey:"tab1",stepDirection:"horizontal"},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setStepDirection(),window.addEventListener("resize",this.setStepDirection)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setStepDirection),this.setStepDirection.cancel()}},{key:"setStepDirection",value:function(){var e=this.state.stepDirection,t=window.innerWidth||document.documentElement.clientWidth;"vertical"!==e&&t<=576?this.setState({stepDirection:"vertical"}):"horizontal"!==e&&t>576&&this.setState({stepDirection:"horizontal"})}},{key:"render",value:function(){var e=this.state,t=e.stepDirection,n=e.loading,a=Y,i=$,r=ee,d={tab1:j.a.createElement(m.default,{pagination:!1,loading:n,dataSource:a,columns:Q}),tab2:j.a.createElement(m.default,{pagination:!1,loading:n,dataSource:i,columns:Q}),tab3:j.a.createElement(m.default,{pagination:!1,loading:n,dataSource:r,columns:Q})};return j.a.createElement(I.a,{title:"\u5355\u53f7\uff1a234231029431",logo:j.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"}),action:V,content:W,extraContent:Z,tabList:K,tabActiveKey:"detail"},j.a.createElement(c.default,{title:"\u6d41\u7a0b\u8fdb\u5ea6",style:{marginBottom:24},bordered:!1},j.a.createElement(N.default,{direction:t,progressDot:U,current:1},j.a.createElement(M,{title:"\u521b\u5efa\u9879\u76ee",description:G}),j.a.createElement(M,{title:"\u90e8\u95e8\u521d\u5ba1",description:X}),j.a.createElement(M,{title:"\u8d22\u52a1\u590d\u6838"}),j.a.createElement(M,{title:"\u5b8c\u6210"}))),j.a.createElement(c.default,{title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:24},bordered:!1},j.a.createElement(k.a,{style:{marginBottom:24}},j.a.createElement(R,{term:"\u7528\u6237\u59d3\u540d"},"\u4ed8\u5c0f\u5c0f"),j.a.createElement(R,{term:"\u4f1a\u5458\u5361\u53f7"},"32943898021309809423"),j.a.createElement(R,{term:"\u8eab\u4efd\u8bc1"},"3321944288191034921"),j.a.createElement(R,{term:"\u8054\u7cfb\u65b9\u5f0f"},"18112345678"),j.a.createElement(R,{term:"\u8054\u7cfb\u5730\u5740"},"\u66f2\u4e3d\u4e3d 18100000000 \u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u897f\u6e56\u533a\u9ec4\u59d1\u5c71\u8def\u5de5\u4e13\u8def\u4ea4\u53c9\u8def\u53e3")),j.a.createElement(k.a,{style:{marginBottom:24},title:"\u4fe1\u606f\u7ec4"},j.a.createElement(R,{term:"\u67d0\u67d0\u6570\u636e"},"725"),j.a.createElement(R,{term:"\u8be5\u6570\u636e\u66f4\u65b0\u65f6\u95f4"},"2017-08-08"),j.a.createElement(R,null,"\xa0"),j.a.createElement(R,{term:j.a.createElement("span",null,"\u67d0\u67d0\u6570\u636e",j.a.createElement(o.default,{title:"\u6570\u636e\u8bf4\u660e"},j.a.createElement(y.default,{style:{color:"rgba(0, 0, 0, 0.43)",marginLeft:4},type:"info-circle-o"})))},"725"),j.a.createElement(R,{term:"\u8be5\u6570\u636e\u66f4\u65b0\u65f6\u95f4"},"2017-08-08")),j.a.createElement("h4",{style:{marginBottom:16}},"\u4fe1\u606f\u7ec4"),j.a.createElement(c.default,{type:"inner",title:"\u591a\u5c42\u7ea7\u4fe1\u606f\u7ec4"},j.a.createElement(k.a,{size:"small",style:{marginBottom:16},title:"\u7ec4\u540d\u79f0"},j.a.createElement(R,{term:"\u8d1f\u8d23\u4eba"},"\u6797\u4e1c\u4e1c"),j.a.createElement(R,{term:"\u89d2\u8272\u7801"},"1234567"),j.a.createElement(R,{term:"\u6240\u5c5e\u90e8\u95e8"},"XX\u516c\u53f8 - YY\u90e8"),j.a.createElement(R,{term:"\u8fc7\u671f\u65f6\u95f4"},"2017-08-08"),j.a.createElement(R,{term:"\u63cf\u8ff0"},"\u8fd9\u6bb5\u63cf\u8ff0\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f...")),j.a.createElement(l.default,{style:{margin:"16px 0"}}),j.a.createElement(k.a,{size:"small",style:{marginBottom:16},title:"\u7ec4\u540d\u79f0",col:"1"},j.a.createElement(R,{term:"\u5b66\u540d"},"Citrullus lanatus (Thunb.) Matsum. et Nakai\u4e00\u5e74\u751f\u8513\u751f\u85e4\u672c\uff1b\u830e\u3001\u679d\u7c97\u58ee\uff0c\u5177\u660e\u663e\u7684\u68f1\u3002\u5377\u987b\u8f83\u7c97..")),j.a.createElement(l.default,{style:{margin:"16px 0"}}),j.a.createElement(k.a,{size:"small",title:"\u7ec4\u540d\u79f0"},j.a.createElement(R,{term:"\u8d1f\u8d23\u4eba"},"\u4ed8\u5c0f\u5c0f"),j.a.createElement(R,{term:"\u89d2\u8272\u7801"},"1234568")))),j.a.createElement(c.default,{title:"\u7528\u6237\u8fd1\u534a\u5e74\u6765\u7535\u8bb0\u5f55",style:{marginBottom:24},bordered:!1},j.a.createElement("div",{className:F.a.noData},j.a.createElement(y.default,{type:"frown-o"}),"\u6682\u65e0\u6570\u636e")),j.a.createElement(c.default,{className:F.a.tabsCard,bordered:!1,tabList:q,onTabChange:this.onOperationTabChange},d[this.state.operationkey]))}}]),t}(C.Component),Object(x.a)(r.prototype,"setStepDirection",[a,i],Object.getOwnPropertyDescriptor(r.prototype,"setStepDirection"),r.prototype),r);t.default=te}}]);