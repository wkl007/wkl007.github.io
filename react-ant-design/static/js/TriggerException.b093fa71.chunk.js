(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1118:function(r,t,n){var e=n(1119);"string"===typeof e&&(e=[[r.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(40)(e,a);e.locals&&(r.exports=e.locals)},1119:function(r,t,n){(t=r.exports=n(39)(!1)).push([r.i,".index__trigger__1RcEI .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n",""]),t.locals={trigger:"index__trigger__1RcEI"}},1185:function(r,t,n){"use strict";n.r(t);n(103);var e=n(41),a=(n(219),n(133)),i=(n(68),n(27)),o=n(28),c=n(29),s=n(32),g=n(30),p=n(31),l=n(0),u=n.n(l),f=n(1118),d=n.n(f),h=function(r){function t(){var r,n;Object(o.a)(this,t);for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(r=Object(g.a)(t)).call.apply(r,[this].concat(a)))).state={isLoading:!1},n.triggerError=function(r){n.props.history.push("/exception/".concat(r))},n}return Object(p.a)(t,r),Object(c.a)(t,[{key:"render",value:function(){var r=this;return u.a.createElement(e.a,null,u.a.createElement(a.a,{spinning:this.state.isLoading,wrapperClassName:d.a.trigger},u.a.createElement(i.a,{type:"danger",onClick:function(){return r.triggerError("403")}},"403"),u.a.createElement(i.a,{type:"danger",onClick:function(){return r.triggerError("404")}},"404"),u.a.createElement(i.a,{type:"danger",onClick:function(){return r.triggerError("500")}},"500")))}}]),t}(l.Component);t.default=h}}]);