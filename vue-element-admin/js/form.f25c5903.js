(window.webpackJsonp=window.webpackJsonp||[]).push([["form"],{"371d":function(e,t,a){"use strict";a.r(t);var l={name:"ExampleForm",data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){this.$message("提交！")},onCancel:function(){this.$message({message:"取消！",type:"warning"})}}},o=(a("a545"),a("6691")),r=Object(o.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Activity name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"Activity zone"}},[a("el-select",{staticStyle:{float:"left"},attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),a("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"Activity time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"Instant delivery"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"Activity type"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),a("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),a("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),a("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"Resources"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"Sponsor"}}),a("el-radio",{attrs:{label:"Venue"}})],1)],1),a("el-form-item",{attrs:{label:"Activity form"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),a("el-button",{on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)}),[],!1,null,"dc4104bc",null);t.default=r.exports},a545:function(e,t,a){"use strict";var l=a("dfd3");a.n(l).a},dfd3:function(e,t,a){}}]);