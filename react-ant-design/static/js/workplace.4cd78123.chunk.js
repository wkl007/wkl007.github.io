(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{228:function(e,t,n){e.exports=n(1)(1469)},229:function(e,t,n){"use strict";n(242);var a=n(234),r=n(30),i=n(31),o=n(75),l=(n(114),n(231)),_=(n(235),n(237)),c=n(0),p=n.n(c),m=n(28),s=n(18),d=n.n(s),x=n(5),u=n(6),g=n(8),f=n(7),b=n(9),h=n(238),k=n.n(h),v=function(e){function t(){return Object(x.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.contentWidth,n=e.children,a="".concat(k.a.main);return"Fixed"===t&&(a="".concat(k.a.main," ").concat(k.a.wide)),p.a.createElement("div",{className:a},n)}}]),t}(c.PureComponent),W=n(230),w=n(228),j=n.n(w),y=n(50),E=function(e,t,n,a){var r=n.indexOf(e)===n.length-1;return"/"===e.path?p.a.createElement(m.Link,{to:a.join("/")},e.breadcrumbName):r||!e.component?p.a.createElement("span",null,e.breadcrumbName):p.a.createElement(m.Link,{to:a.join("/")},e.breadcrumbName)},C=function(e){return e.breadcrumbList.map(function(e){var t=e.title;return{path:e.href,breadcrumbName:t}})},L=function(e,t,n){var a=n.home,r=Object(y.f)(e.pathname).map(function(e){var n=function(e,t){var n=e[t];return n||Object.keys(e).forEach(function(a){j()(a).test(t)&&(n=e[a])}),n||{}}(t,e);if(n.inherited)return null;var a=n.name,r=n.hideInBreadcrumb;return a&&!r?{path:e,breadcrumbName:a}:null}).filter(function(e){return null!==e});return a&&r.unshift({path:"/",breadcrumbName:a}),r},N=function(e){var t=e.breadcrumbList,n=function(e){return{routes:e.routes,params:e.params,routerLocation:e.location,breadcrumbNameMap:e.breadcrumbNameMap}}(e),a=n.routes,r=n.params,i=n.routerLocation,o=n.breadcrumbNameMap;return t&&t.length?{routes:C(e),params:r,itemRender:E}:a&&r?{routes:a.filter(function(e){return e.breadcrumbName}),params:r,itemRender:E}:i&&i.pathname?{routes:L(i,o,e),itemRender:E}:{}},O=n(240),z=n.n(O),P=_.default.Title,T=function(e){var t=e.tabList,n=e.tabActiveKey,a=e.onTabChange,r=e.tabBarExtraContent;return t&&t.length?p.a.createElement(l.default,{className:z.a.tabs,activeKey:n,onChange:function(e){a&&a(e)},tabBarExtraContent:r},t.map(function(e){return p.a.createElement(l.default.TabPane,{tab:e.tab,key:e.key})})):null};t.a=function(e){var t=e.children,n=e.contentWidth,l=e.fluid,_=e.wrapperClassName,c=e.home,s=e.top,x=e.title,u=e.content,g=e.logo,f=e.extraContent,b=e.hiddenBreadcrumb,h=Object(o.a)(e,["children","contentWidth","fluid","wrapperClassName","home","top","title","content","logo","extraContent","hiddenBreadcrumb"]);return p.a.createElement("div",{style:{margin:"-24px -24px 0"},className:d()(_,z.a.main)},s,p.a.createElement(W.a.Consumer,null,function(e){return p.a.createElement("div",{className:z.a.wrapper},p.a.createElement("div",{className:d()(Object(i.a)({},z.a.wide,!l&&"Fixed"===n))},p.a.createElement(a.default,Object.assign({title:p.a.createElement(p.a.Fragment,null,g&&p.a.createElement("span",{className:z.a.logo},g),p.a.createElement(P,{level:4,style:{marginBottom:0,display:"inline-block"}},x)),key:"pageheader"},h,{breadcrumb:!b&&N(Object(r.a)({},e,h,null!==c&&{home:"\u9996\u9875"}))},e,{className:z.a.pageHeader,linkElement:m.Link,footer:T(h)}),p.a.createElement("div",{className:z.a.detail},p.a.createElement("div",{className:z.a.main},p.a.createElement("div",{className:z.a.row},u&&p.a.createElement("div",{className:z.a.content},u),f&&p.a.createElement("div",{className:z.a.extraContent},f)))))))}),t?p.a.createElement("div",{className:z.a["children-content"]},p.a.createElement(v,null,t)):null)}},230:function(e,t,n){"use strict";var a=n(0);t.a=Object(a.createContext)()},231:function(e,t,n){e.exports=n(1)(240)},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){e.exports=n(1)(675)},235:function(e,t,n){"use strict";n(10),n(236),n(51),n(45)},236:function(e,t,n){},237:function(e,t,n){e.exports=n(1)(704)},238:function(e,t,n){var a=n(239);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,r);a.locals&&(e.exports=a.locals)},239:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,".GridContent__main__V9SJt {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.GridContent__main__V9SJt.GridContent__wide__26_PS {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n",""]),t.locals={main:"GridContent__main__V9SJt",wide:"GridContent__wide__26_PS"}},240:function(e,t,n){var a=n(241);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,r);a.locals&&(e.exports=a.locals)},241:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.index__children-content__2jFRU {\n  margin: 24px 24px 0;\n}\n.index__main__2tSfx .index__wrapper__3o3Zg {\n  padding: 16px 24px 0;\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n}\n.index__main__2tSfx .index__wrapper__3o3Zg .ant-page-header {\n  padding: 0;\n}\n.index__main__2tSfx .index__wrapper__3o3Zg .ant-page-header-title-view-extra {\n  top: 0;\n  right: 0;\n}\n.index__main__2tSfx .index__wide__1O1ZK {\n  max-width: 1200px;\n  margin: auto;\n}\n.index__main__2tSfx .index__detail__1giba {\n  display: flex;\n}\n.index__main__2tSfx .index__row__1aQaZ {\n  display: flex;\n  width: 100%;\n}\n.index__main__2tSfx .index__logo__3O-j9 {\n  display: inline-block;\n  margin-top: -1px;\n  margin-right: 16px;\n  vertical-align: middle;\n}\n.index__main__2tSfx .index__logo__3O-j9 > img {\n  display: block;\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n}\n.index__main__2tSfx .index__title-content__1sW1N {\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 576px) {\n  .index__main__2tSfx .index__children-content__2jFRU {\n    margin: 24px 0 0;\n  }\n}\n.index__main__2tSfx .index__title__2d9Vj,\n.index__main__2tSfx .index__content__308C2 {\n  flex: auto;\n}\n.index__main__2tSfx .index__extraContent__3xcuL,\n.index__main__2tSfx .index__main__2tSfx {\n  flex: 0 1 auto;\n}\n.index__main__2tSfx .index__main__2tSfx {\n  width: 100%;\n}\n.index__main__2tSfx .index__title__2d9Vj {\n  margin-bottom: 16px;\n}\n.index__main__2tSfx .index__content__308C2,\n.index__main__2tSfx .index__extraContent__3xcuL {\n  margin-bottom: 16px;\n}\n.index__main__2tSfx .index__extraContent__3xcuL {\n  min-width: 242px;\n  margin-left: 88px;\n  text-align: right;\n}\n@media screen and (max-width: 1200px) {\n  .index__main__2tSfx .index__extraContent__3xcuL {\n    margin-left: 44px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .index__main__2tSfx .index__extraContent__3xcuL {\n    margin-left: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .index__main__2tSfx .index__row__1aQaZ {\n    display: block;\n  }\n  .index__main__2tSfx .index__action__pJPNt,\n  .index__main__2tSfx .index__extraContent__3xcuL {\n    margin-left: 0;\n    text-align: left;\n  }\n}\n@media screen and (max-width: 576px) {\n  .index__main__2tSfx .index__detail__1giba {\n    display: block;\n  }\n}\n/*\n.content {\n  margin: 24px 24px 0;\n}\n\n@media screen and (max-width: @screen-sm) {\n  .content {\n    margin: 24px 0 0;\n  }\n}*/\n",""]),t.locals={"children-content":"index__children-content__2jFRU",main:"index__main__2tSfx",wrapper:"index__wrapper__3o3Zg",wide:"index__wide__1O1ZK",detail:"index__detail__1giba",row:"index__row__1aQaZ",logo:"index__logo__3O-j9","title-content":"index__title-content__1sW1N",title:"index__title__2d9Vj",content:"index__content__308C2",extraContent:"index__extraContent__3xcuL",action:"index__action__pJPNt"}},242:function(e,t,n){"use strict";n(232),n(72),n(10),n(233),n(73),n(74)},246:function(e,t,n){e.exports=n(1)(1428)},247:function(e,t,n){e.exports=n(1)(3)},248:function(e,t,n){e.exports=n(1)(5)},250:function(e,t,n){e.exports=n(1)(12)},251:function(e,t,n){e.exports=n(1)(15)},253:function(e,t,n){e.exports=n(1)(804)},254:function(e,t,n){e.exports=n(1)(4)},255:function(e,t,n){e.exports=n(1)(6)},262:function(e,t,n){e.exports=n(1)(17)},263:function(e,t,n){e.exports=n(1)(390)},266:function(e,t,n){e.exports=n(1)(85)},267:function(e,t,n){e.exports=n(1)(162)},268:function(e,t,n){e.exports=n(1)(894)},275:function(e,t,n){e.exports=n(1)(463)},277:function(e,t,n){e.exports=n(1)(105)},514:function(e,t,n){var a=n(515);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,r);a.locals&&(e.exports=a.locals)},515:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.index__linkGroup__wa88O {\n  padding: 20px 0 8px 24px;\n  font-size: 0;\n}\n.index__linkGroup__wa88O > a {\n  color: rgba(0, 0, 0, 0.65);\n  display: inline-block;\n  font-size: 14px;\n  margin-bottom: 13px;\n  width: 25%;\n}\n.index__linkGroup__wa88O > a:hover {\n  color: #1890ff;\n}\n",""]),t.locals={linkGroup:"index__linkGroup__wa88O"}},516:function(e,t,n){var a=n(517);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,r);a.locals&&(e.exports=a.locals)},517:function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.Workplace__activitiesList__1MrGs {\n  padding: 0 24px 8px 24px;\n}\n.Workplace__activitiesList__1MrGs .Workplace__username__2_euc {\n  color: rgba(0, 0, 0, 0.65);\n}\n.Workplace__activitiesList__1MrGs .Workplace__event__3rF4P {\n  font-weight: normal;\n}\n.Workplace__pageHeaderContent__39Oxs {\n  display: flex;\n}\n.Workplace__pageHeaderContent__39Oxs .Workplace__avatar__cevzJ {\n  flex: 0 1 72px;\n  margin-bottom: 8px;\n}\n.Workplace__pageHeaderContent__39Oxs .Workplace__avatar__cevzJ > span {\n  border-radius: 72px;\n  display: block;\n  width: 72px;\n  height: 72px;\n}\n.Workplace__pageHeaderContent__39Oxs .Workplace__content__1caPF {\n  position: relative;\n  top: 4px;\n  margin-left: 24px;\n  flex: 1 1 auto;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n}\n.Workplace__pageHeaderContent__39Oxs .Workplace__content__1caPF .Workplace__contentTitle__1sTxL {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  margin-bottom: 12px;\n}\n.Workplace__extraContent__241BW {\n  zoom: 1;\n  float: right;\n  white-space: nowrap;\n}\n.Workplace__extraContent__241BW:before,\n.Workplace__extraContent__241BW:after {\n  content: ' ';\n  display: table;\n}\n.Workplace__extraContent__241BW:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ {\n  padding: 0 32px;\n  position: relative;\n  display: inline-block;\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ > p:first-child {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 22px;\n  margin-bottom: 4px;\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ > p {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 30px;\n  line-height: 38px;\n  margin: 0;\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ > p > span {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 20px;\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ:after {\n  background-color: #e8e8e8;\n  position: absolute;\n  top: 8px;\n  right: 0;\n  width: 1px;\n  height: 40px;\n  content: '';\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ:last-child {\n  padding-right: 0;\n}\n.Workplace__extraContent__241BW .Workplace__statItem__31odQ:last-child:after {\n  display: none;\n}\n.Workplace__members__1Laup a {\n  display: block;\n  margin: 12px 0;\n  line-height: 24px;\n  height: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.Workplace__members__1Laup a .Workplace__member__3-t3V {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 24px;\n  max-width: 100px;\n  vertical-align: top;\n  margin-left: 12px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.Workplace__members__1Laup a:hover span {\n  color: #1890ff;\n}\n.Workplace__projectList__2mPTY .ant-card-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n  height: 44px;\n  line-height: 22px;\n  overflow: hidden;\n}\n.Workplace__projectList__2mPTY .Workplace__cardTitle__PPKLH {\n  font-size: 0;\n}\n.Workplace__projectList__2mPTY .Workplace__cardTitle__PPKLH a {\n  color: rgba(0, 0, 0, 0.85);\n  margin-left: 12px;\n  line-height: 24px;\n  height: 24px;\n  display: inline-block;\n  vertical-align: top;\n  font-size: 14px;\n}\n.Workplace__projectList__2mPTY .Workplace__cardTitle__PPKLH a:hover {\n  color: #1890ff;\n}\n.Workplace__projectList__2mPTY .Workplace__projectGrid__1Fatc {\n  width: 33.33%;\n}\n.Workplace__projectList__2mPTY .Workplace__projectItemContent__2Y5_Y {\n  display: flex;\n  margin-top: 8px;\n  font-size: 12px;\n  height: 20px;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.Workplace__projectList__2mPTY .Workplace__projectItemContent__2Y5_Y a {\n  color: rgba(0, 0, 0, 0.45);\n  display: inline-block;\n  flex: 1 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  white-space: nowrap;\n}\n.Workplace__projectList__2mPTY .Workplace__projectItemContent__2Y5_Y a:hover {\n  color: #1890ff;\n}\n.Workplace__projectList__2mPTY .Workplace__projectItemContent__2Y5_Y .Workplace__datetime__NDI6P {\n  color: rgba(0, 0, 0, 0.25);\n  flex: 0 0 auto;\n  float: right;\n}\n.Workplace__datetime__NDI6P {\n  color: rgba(0, 0, 0, 0.25);\n}\n@media screen and (max-width: 1200px) and (min-width: 992px) {\n  .Workplace__activeCard__1UDgZ {\n    margin-bottom: 24px;\n  }\n  .Workplace__members__1Laup {\n    margin-bottom: 0;\n  }\n  .Workplace__extraContent__241BW {\n    margin-left: -44px;\n  }\n  .Workplace__extraContent__241BW .Workplace__statItem__31odQ {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .Workplace__activeCard__1UDgZ {\n    margin-bottom: 24px;\n  }\n  .Workplace__members__1Laup {\n    margin-bottom: 0;\n  }\n  .Workplace__extraContent__241BW {\n    float: none;\n    margin-right: 0;\n  }\n  .Workplace__extraContent__241BW .Workplace__statItem__31odQ {\n    padding: 0 16px;\n    text-align: left;\n  }\n  .Workplace__extraContent__241BW .Workplace__statItem__31odQ:after {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Workplace__extraContent__241BW {\n    margin-left: -16px;\n  }\n  .Workplace__projectList__2mPTY .Workplace__projectGrid__1Fatc {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .Workplace__pageHeaderContent__39Oxs {\n    display: block;\n  }\n  .Workplace__pageHeaderContent__39Oxs .Workplace__content__1caPF {\n    margin-left: 0;\n  }\n  .Workplace__extraContent__241BW .Workplace__statItem__31odQ {\n    float: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  .Workplace__projectList__2mPTY .Workplace__projectGrid__1Fatc {\n    width: 100%;\n  }\n}\n",""]),t.locals={activitiesList:"Workplace__activitiesList__1MrGs",username:"Workplace__username__2_euc",event:"Workplace__event__3rF4P",pageHeaderContent:"Workplace__pageHeaderContent__39Oxs",avatar:"Workplace__avatar__cevzJ",content:"Workplace__content__1caPF",contentTitle:"Workplace__contentTitle__1sTxL",extraContent:"Workplace__extraContent__241BW",statItem:"Workplace__statItem__31odQ",members:"Workplace__members__1Laup",member:"Workplace__member__3-t3V",projectList:"Workplace__projectList__2mPTY",cardTitle:"Workplace__cardTitle__PPKLH",projectGrid:"Workplace__projectGrid__1Fatc",projectItemContent:"Workplace__projectItemContent__2Y5_Y",datetime:"Workplace__datetime__NDI6P",activeCard:"Workplace__activeCard__1UDgZ"}},571:function(e,t,n){"use strict";n.r(t);n(48);var a=n(22),r=(n(49),n(15)),i=(n(46),n(19)),o=(n(26),n(4)),l=(n(53),n(32)),_=n(5),c=n(6),p=n(8),m=n(7),s=n(9),d=(n(284),n(285)),x=n.n(d),u=n(0),g=n.n(u),f=n(28),b=n(16),h=n.n(b),k=n(18),v=n.n(k),W=(n(29),n(20)),w=n(514),j=n.n(w),y=function(e){function t(){return Object(_.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.links,n=e.onAdd,a=e.linkElement;return g.a.createElement("div",{className:j.a.linkGroup},t.map(function(e){return Object(u.createElement)(a,{key:"linkGroup-item-".concat(e.id||e.title),to:e.href,href:e.href},e.title)}),g.a.createElement(W.default,{size:"small",type:"primary",ghost:!0,onClick:n,icon:"plus"},"\u6dfb\u52a0"))}}]),t}(u.PureComponent);y.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var E=y,C=n(229),L=n(516),N=n.n(L),O=x.a.Radar,z=[{title:"\u64cd\u4f5c\u4e00",href:""},{title:"\u64cd\u4f5c\u4e8c",href:""},{title:"\u64cd\u4f5c\u4e09",href:""},{title:"\u64cd\u4f5c\u56db",href:""},{title:"\u64cd\u4f5c\u4e94",href:""},{title:"\u64cd\u4f5c\u516d",href:""}],P=[{id:"members-1",title:"\u79d1\u5b66\u642c\u7816\u7ec4",logo:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",link:""},{id:"members-2",title:"\u7a0b\u5e8f\u5458\u65e5\u5e38",logo:"https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",link:""},{id:"members-3",title:"\u8bbe\u8ba1\u5929\u56e2",logo:"https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png",link:""},{id:"members-4",title:"\u4e2d\u4e8c\u5c11\u5973\u56e2",logo:"https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png",link:""},{id:"members-5",title:"\u9a97\u4f60\u5b66\u8ba1\u7b97\u673a",logo:"https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png",link:""}],T=[{id:"trend-1",updatedAt:"2018-05-29T04:11:09.475Z",user:{name:"\u66f2\u4e3d\u4e3d",avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"},group:{name:"\u9ad8\u903c\u683c\u8bbe\u8ba1\u5929\u56e2",link:"http://github.com/"},project:{name:"\u516d\u6708\u8fed\u4ee3",link:"http://github.com/"},template:"\u5728 @{group} \u65b0\u5efa\u9879\u76ee @{project}"},{id:"trend-2",updatedAt:"2018-05-29T04:11:09.475Z",user:{name:"\u4ed8\u5c0f\u5c0f",avatar:"https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png"},group:{name:"\u9ad8\u903c\u683c\u8bbe\u8ba1\u5929\u56e2",link:"http://github.com/"},project:{name:"\u516d\u6708\u8fed\u4ee3",link:"http://github.com/"},template:"\u5728 @{group} \u65b0\u5efa\u9879\u76ee @{project}"},{id:"trend-3",updatedAt:"2018-05-29T04:11:09.475Z",user:{name:"\u6797\u4e1c\u4e1c",avatar:"https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png"},group:{name:"\u4e2d\u4e8c\u5c11\u5973\u56e2",link:"http://github.com/"},project:{name:"\u516d\u6708\u8fed\u4ee3",link:"http://github.com/"},template:"\u5728 @{group} \u65b0\u5efa\u9879\u76ee @{project}"},{id:"trend-4",updatedAt:"2018-05-29T04:11:09.475Z",user:{name:"\u5468\u661f\u661f",avatar:"https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png"},project:{name:"5 \u6708\u65e5\u5e38\u8fed\u4ee3",link:"http://github.com/"},template:"\u5c06 @{project} \u66f4\u65b0\u81f3\u5df2\u53d1\u5e03\u72b6\u6001"},{id:"trend-5",updatedAt:"2018-05-29T04:11:09.475Z",user:{name:"\u6731\u504f\u53f3",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png"},project:{name:"\u5de5\u7a0b\u6548\u80fd",link:"http://github.com/"},comment:{name:"\u7559\u8a00",link:"http://github.com/"},template:"\u5728 @{project} \u53d1\u5e03\u4e86 @{comment}"},{id:"trend-6",updatedAt:"2018-05-29T04:11:09.475Z",user:{name:"\u4e50\u54e5",avatar:"https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png"},group:{name:"\u7a0b\u5e8f\u5458\u65e5\u5e38",link:"http://github.com/"},project:{name:"\u54c1\u724c\u8fed\u4ee3",link:"http://github.com/"},template:"\u5728 @{group} \u65b0\u5efa\u9879\u76ee @{project}"}],S=[{id:"xxx1",title:"Alipay",logo:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",description:"\u90a3\u662f\u4e00\u79cd\u5185\u5728\u7684\u4e1c\u897f\uff0c\u4ed6\u4eec\u5230\u8fbe\u4e0d\u4e86\uff0c\u4e5f\u65e0\u6cd5\u89e6\u53ca\u7684",updatedAt:"2018-05-29T04:11:09.475Z",member:"\u79d1\u5b66\u642c\u7816\u7ec4",href:"",memberLink:""},{id:"xxx2",title:"Angular",logo:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",description:"\u5e0c\u671b\u662f\u4e00\u4e2a\u597d\u4e1c\u897f\uff0c\u4e5f\u8bb8\u662f\u6700\u597d\u7684\uff0c\u597d\u4e1c\u897f\u662f\u4e0d\u4f1a\u6d88\u4ea1\u7684",updatedAt:"2017-07-24T00:00:00.000Z",member:"\u5168\u7ec4\u90fd\u662f\u5434\u5f66\u7956",href:"",memberLink:""},{id:"xxx3",title:"Ant Design",logo:"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",description:"\u57ce\u9547\u4e2d\u6709\u90a3\u4e48\u591a\u7684\u9152\u9986\uff0c\u5979\u5374\u504f\u504f\u8d70\u8fdb\u4e86\u6211\u7684\u9152\u9986",updatedAt:"2018-05-29T04:11:09.475Z",member:"\u4e2d\u4e8c\u5c11\u5973\u56e2",href:"",memberLink:""},{id:"xxx4",title:"Ant Design Pro",logo:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",description:"\u90a3\u65f6\u5019\u6211\u53ea\u4f1a\u60f3\u81ea\u5df1\u60f3\u8981\u4ec0\u4e48\uff0c\u4ece\u4e0d\u60f3\u81ea\u5df1\u62e5\u6709\u4ec0\u4e48",updatedAt:"2017-07-23T00:00:00.000Z",member:"\u7a0b\u5e8f\u5458\u65e5\u5e38",href:"",memberLink:""},{id:"xxx5",title:"Bootstrap",logo:"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",description:"\u51db\u51ac\u5c06\u81f3",updatedAt:"2017-07-23T00:00:00.000Z",member:"\u9ad8\u903c\u683c\u8bbe\u8ba1\u5929\u56e2",href:"",memberLink:""},{id:"xxx6",title:"React",logo:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",description:"\u751f\u547d\u5c31\u50cf\u4e00\u76d2\u5de7\u514b\u529b\uff0c\u7ed3\u679c\u5f80\u5f80\u51fa\u4eba\u610f\u6599",updatedAt:"2017-07-23T00:00:00.000Z",member:"\u9a97\u4f60\u6765\u5b66\u8ba1\u7b97\u673a",href:"",memberLink:""}],B=[{name:"\u4e2a\u4eba",label:"\u5f15\u7528",value:10},{name:"\u4e2a\u4eba",label:"\u53e3\u7891",value:8},{name:"\u4e2a\u4eba",label:"\u4ea7\u91cf",value:4},{name:"\u4e2a\u4eba",label:"\u8d21\u732e",value:5},{name:"\u4e2a\u4eba",label:"\u70ed\u5ea6",value:7},{name:"\u56e2\u961f",label:"\u5f15\u7528",value:3},{name:"\u56e2\u961f",label:"\u53e3\u7891",value:9},{name:"\u56e2\u961f",label:"\u4ea7\u91cf",value:6},{name:"\u56e2\u961f",label:"\u8d21\u732e",value:3},{name:"\u56e2\u961f",label:"\u70ed\u5ea6",value:1},{name:"\u90e8\u95e8",label:"\u5f15\u7528",value:4},{name:"\u90e8\u95e8",label:"\u53e3\u7891",value:1},{name:"\u90e8\u95e8",label:"\u4ea7\u91cf",value:6},{name:"\u90e8\u95e8",label:"\u8d21\u732e",value:5},{name:"\u90e8\u95e8",label:"\u70ed\u5ea6",value:7}],I=function(e){function t(e){var n;return Object(_.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).renderActivities=function(){return T.map(function(e){var t=e.template.split(/@\{([^{}]*)\}/gi).map(function(t){return e[t]?g.a.createElement("a",{href:e[t].link,key:e[t].name},e[t].name):t});return g.a.createElement(o.default.Item,{key:e.id},g.a.createElement(o.default.Item.Meta,{avatar:g.a.createElement(l.default,{src:e.user.avatar}),title:g.a.createElement("span",null,g.a.createElement("span",{className:v()(N.a.username,"link-button")},e.user.name),"\xa0",g.a.createElement("span",{className:N.a.event},t)),description:g.a.createElement("span",{className:N.a.datetime,title:e.updatedAt},h()(e.updatedAt).fromNow())}))})},n.state={projectLoading:!1,activitiesLoading:!1,radarDataLoading:!1,currentUserLoading:!1},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({projectLoading:!0,activitiesLoading:!0,radarDataLoading:!0,currentUserLoading:!0}),setTimeout(function(){e.setState({projectLoading:!1,activitiesLoading:!1,radarDataLoading:!1,currentUserLoading:!1})},500)}},{key:"render",value:function(){var e=this.state,t=e.projectLoading,n=e.activitiesLoading,_=e.radarDataLoading,c=e.currentUserLoading,p=g.a.createElement("div",{className:N.a.pageHeaderContent},g.a.createElement("div",{className:N.a.avatar},g.a.createElement(l.default,{size:"large",src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"})),g.a.createElement("div",{className:N.a.content},g.a.createElement("div",{className:N.a.contentTitle},"\u65e9\u5b89\uff0c\u66f2\u4e3d\u4e3d\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),g.a.createElement("div",null,"\u4ea4\u4e92\u4e13\u5bb6 | \u8682\u8681\u91d1\u670d\uff0d\u67d0\u67d0\u67d0\u4e8b\u4e1a\u7fa4\uff0d\u67d0\u67d0\u5e73\u53f0\u90e8\uff0d\u67d0\u67d0\u6280\u672f\u90e8\uff0dUED"))),m=g.a.createElement("div",{className:N.a.extraContent},g.a.createElement("div",{className:N.a.statItem},g.a.createElement("p",null,"\u9879\u76ee\u6570"),g.a.createElement("p",null,"56")),g.a.createElement("div",{className:N.a.statItem},g.a.createElement("p",null,"\u56e2\u961f\u5185\u6392\u540d"),g.a.createElement("p",null,"8",g.a.createElement("span",null," / 24"))),g.a.createElement("div",{className:N.a.statItem},g.a.createElement("p",null,"\u9879\u76ee\u8bbf\u95ee"),g.a.createElement("p",null,"2,223")));return g.a.createElement(C.a,{loading:c,content:p,extraContent:m},g.a.createElement(a.default,{gutter:24},g.a.createElement(r.default,{xl:16,lg:24,md:24,sm:24,xs:24},g.a.createElement(i.default,{className:N.a.projectList,style:{marginBottom:24},title:"\u8fdb\u884c\u4e2d\u7684\u9879\u76ee",bordered:!1,extra:g.a.createElement(f.Link,{to:"/"},"\u5168\u90e8\u9879\u76ee"),loading:t,bodyStyle:{padding:0}},S.map(function(e){return g.a.createElement(i.default.Grid,{className:N.a.projectGrid,key:e.id},g.a.createElement(i.default,{bodyStyle:{padding:0},bordered:!1},g.a.createElement(i.default.Meta,{title:g.a.createElement("div",{className:N.a.cardTitle},g.a.createElement(l.default,{size:"small",src:e.logo}),g.a.createElement(f.Link,{to:e.href},e.title)),description:e.description}),g.a.createElement("div",{className:N.a.projectItemContent},g.a.createElement(f.Link,{to:e.memberLink},e.member||""),e.updatedAt&&g.a.createElement("span",{className:N.a.datetime,title:e.updatedAt},h()(e.updatedAt).fromNow()))))})),g.a.createElement(i.default,{bodyStyle:{padding:0},bordered:!1,className:N.a.activeCard,title:"\u52a8\u6001",loading:n},g.a.createElement(o.default,{loading:n,size:"large"},g.a.createElement("div",{className:N.a.activitiesList},this.renderActivities())))),g.a.createElement(r.default,{xl:8,lg:24,md:24,sm:24,xs:24},g.a.createElement(i.default,{style:{marginBottom:24},title:"\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a",bordered:!1,bodyStyle:{padding:0}},g.a.createElement(E,{onAdd:function(){},links:z,linkElement:f.Link})),g.a.createElement(i.default,{style:{marginBottom:24},title:"XX \u6307\u6570",bordered:!1,loading:_},g.a.createElement("div",{className:N.a.chart},g.a.createElement(O,{hasLegend:!0,height:343,data:B}))),g.a.createElement(i.default,{style:{marginBottom:24},title:"\u56e2\u961f",bordered:!1,bodyStyle:{paddingTop:12,paddingBottom:12}},g.a.createElement("div",{className:N.a.members},g.a.createElement(a.default,{gutter:48},P.map(function(e){return g.a.createElement(r.default,{span:12,key:"members-item-".concat(e.id)},g.a.createElement(f.Link,{to:e.link},g.a.createElement(l.default,{src:e.logo,size:"small"}),g.a.createElement("span",{className:N.a.member},e.title)))})))))))}}]),t}(u.Component);t.default=I}}]);