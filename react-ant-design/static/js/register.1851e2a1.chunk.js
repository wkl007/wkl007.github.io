(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{252:function(e,t,a){"use strict";a(5),a(261)},261:function(e,t,a){},262:function(e,t,a){e.exports=a(1)(671)},309:function(e,t,a){e.exports=a(1)(304)},462:function(e,t,a){var n=a(463);"string"===typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,r);n.locals&&(e.exports=n.locals)},463:function(e,t,a){(t=e.exports=a(11)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.index__main__1HW39 {\n  width: 368px;\n  margin: 0 auto;\n}\n.index__main__1HW39 .ant-form-item {\n  margin-bottom: 24px;\n}\n.index__main__1HW39 h3 {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n.index__main__1HW39 .index__getCaptcha__2N4-1 {\n  display: block;\n  width: 100%;\n}\n.index__main__1HW39 .index__submit__i96ok {\n  width: 50%;\n}\n.index__main__1HW39 .index__login__Otztn {\n  float: right;\n  line-height: 40px;\n}\n.index__success__1vjFu,\n.index__warning__3Hy6f,\n.index__error__3jpd1 {\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.index__success__1vjFu {\n  color: #52c41a;\n}\n.index__warning__3Hy6f {\n  color: #faad14;\n}\n.index__error__3jpd1 {\n  color: #f5222d;\n}\n.index__progress-pass__BjBYX > .index__progress__4DSyZ .ant-progress-bg {\n  background-color: #faad14;\n}\n",""]),t.locals={main:"index__main__1HW39",getCaptcha:"index__getCaptcha__2N4-1",submit:"index__submit__i96ok",login:"index__login__Otztn",success:"index__success__1vjFu",warning:"index__warning__3Hy6f",error:"index__error__3jpd1","progress-pass":"index__progress-pass__BjBYX",progress:"index__progress__4DSyZ"}},540:function(e,t,a){"use strict";a.r(t);a(46);var n=a(22),r=(a(30),a(14)),s=(a(47),a(9)),i=(a(252),a(262)),l=(a(116),a(309)),o=a(23),c=a(16),p=a(17),u=a(20),d=a(18),m=a(19),_=(a(39),a(15)),f=(a(41),a(6)),g=(a(40),a(3)),h=a(0),v=a.n(h),b=a(29),x=a(26),y=a(462),w=a.n(y);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=g.default.Item,k=f.default.Option,P=_.default.Group,S={ok:v.a.createElement("div",{className:w.a.success},"\u5f3a\u5ea6\uff1a\u5f3a"),pass:v.a.createElement("div",{className:w.a.warning},"\u5f3a\u5ea6\uff1a\u4e2d"),poor:v.a.createElement("div",{className:w.a.error},"\u5f3a\u5ea6\uff1a\u592a\u77ed")},C={ok:"success",pass:"normal",poor:"exception"},z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).interval=void 0,a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86",submitting:!1},a.onGetCaptcha=function(){var e=59;a.setState({count:e}),a.interval=setInterval(function(){e-=1,a.setState({count:e}),0===e&&clearInterval(a.interval)},1e3)},a.getPasswordStatus=function(){var e=a.props.form.getFieldValue("password");return e&&e.length>9?"ok":e&&e.length>5?"pass":"poor"},a.checkPassword=function(e,t,n){if(t)if(a.setState({help:""}),a.state.visible||a.setState({visible:!!t}),t.length<6)n("error");else{var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()}else a.setState({help:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01",visible:!!t}),n("error")},a.checkConfirm=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u5339\u914d"):n()},a.changePrefix=function(e){a.setState({prefix:e})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.history;a.props.form.validateFields({force:!0},function(e,n){e||t.push({pathname:"/user/register-result",search:Object(x.stringify)(O({},n,{prefix:a.state.prefix}))})})},a.renderPasswordProgress=function(){var e=a.props.form.getFieldValue("password"),t=a.getPasswordStatus();return e&&e.length?v.a.createElement("div",{className:w.a["progress-".concat(t)]},v.a.createElement(l.default,{status:C[t],className:w.a.progress,strokeWidth:6,percent:10*e.length>100?100:10*e.length,showInfo:!1})):null},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props.form,t=this.state,a=t.count,l=t.help,o=t.visible,c=t.prefix,p=t.submitting,u=e.getFieldDecorator;return v.a.createElement("div",{className:w.a.main},v.a.createElement("h3",null,"\u6ce8\u518c"),v.a.createElement(g.default,{onSubmit:this.handleSubmit},v.a.createElement(j,null,u("mail",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740\uff01"},{type:"email",message:"\u90ae\u7bb1\u5730\u5740\u683c\u5f0f\u9519\u8bef\uff01"}]})(v.a.createElement(_.default,{size:"large",autoComplete:"off",placeholder:"\u90ae\u7bb1"}))),v.a.createElement(j,{help:l},v.a.createElement(i.default,{content:v.a.createElement("div",{style:{padding:"4px 0"}},S[this.getPasswordStatus()],this.renderPasswordProgress(),v.a.createElement("div",{style:{marginTop:"10px"}},"\u8bf7\u81f3\u5c11\u8f93\u5165 6 \u4e2a\u5b57\u7b26\u3002\u8bf7\u4e0d\u8981\u4f7f\u7528\u5bb9\u6613\u88ab\u731c\u5230\u7684\u5bc6\u7801\u3002")),overlayStyle:{width:240},placement:"right",visible:o},u("password",{rules:[{validator:this.checkPassword}]})(v.a.createElement(_.default,{size:"large",autoComplete:"off",type:"password",placeholder:"\u81f3\u5c116\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199"})))),v.a.createElement(j,null,u("confirm",{rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801\uff01"},{validator:this.checkConfirm}]})(v.a.createElement(_.default,{size:"large",type:"password",autoComplete:"off",placeholder:"\u786e\u8ba4\u5bc6\u7801"}))),v.a.createElement(j,null,v.a.createElement(P,{compact:!0},v.a.createElement(f.default,{size:"large",value:c,onChange:this.changePrefix,style:{width:"20%"}},v.a.createElement(k,{value:"86"},"+86"),v.a.createElement(k,{value:"87"},"+87")),u("mobile",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]})(v.a.createElement(_.default,{size:"large",autoComplete:"off",style:{width:"80%"},placeholder:"11\u4f4d\u624b\u673a\u53f7"})))),v.a.createElement(j,null,v.a.createElement(n.default,{gutter:8},v.a.createElement(s.default,{span:16},u("captcha",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})(v.a.createElement(_.default,{size:"large",autoComplete:"off",placeholder:"\u9a8c\u8bc1\u7801"}))),v.a.createElement(s.default,{span:8},v.a.createElement(r.default,{size:"large",disabled:!!a,className:w.a.getCaptcha,onClick:this.onGetCaptcha},a?"".concat(a," s"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))),v.a.createElement(j,null,v.a.createElement(r.default,{size:"large",loading:p,className:w.a.submit,type:"primary",htmlType:"submit"},"\u6ce8\u518c"),v.a.createElement(b.Link,{className:w.a.login,to:"/user/login"},"\u4f7f\u7528\u5df2\u6709\u8d26\u6237\u767b\u5f55"))))}}]),t}(h.Component);t.default=g.default.create()(z)}}]);