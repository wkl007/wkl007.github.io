webpackJsonp([2],{542:function(t,i,e){function a(t){e(587)}var n=e(8)(e(560),e(599),a,"data-v-ec111780",null);t.exports=n.exports},550:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(54),n=e.n(a),s=e(63),o=e.n(s),A=e(186),l=e.n(A),r=e(187),c=e.n(r),d=e(122),p=e(45),g=e(81),u=e.i(d.a)("transform"),m=e.i(d.a)("backdrop-filter");i.default={mixins:[g.a],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranslateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:n()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},e.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranslateY,t),e=1,a=0,n=0,s=Math.abs(t/this.imageHeight);t>0?(e=1+s,a=10):n=Math.min(20,20*s),this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[m]="blur("+n+"px)",t<this.minTranslateY?(a=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+e+")",this.$refs.bgImage.style.zIndex=a}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},551:function(t,i,e){i=t.exports=e(540)(!0),i.push([t.i,".music-list[data-v-77c0eaa0]{position:fixed;z-index:100;top:0;left:0;right:0;bottom:0;background:#222}.music-list .back[data-v-77c0eaa0]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77c0eaa0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77c0eaa0]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77c0eaa0]{position:relative;width:100%;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77c0eaa0]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77c0eaa0]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77c0eaa0]{position:relative;height:100%;background:#222}.music-list .list[data-v-77c0eaa0]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77c0eaa0]{padding:20px 30px}.music-list .list .loading-container[data-v-77c0eaa0]{position:absolute;width:100%;top:50%;tranform:translateY(-50%)}","",{version:3,sources:["E:/webProject/htdocs/vue-music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,6BAA8B,AACtB,qBAAsB,AAC9B,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,yBAA2B,CAC5B",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-77c0eaa0] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #222;\n}\n.music-list .back[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-77c0eaa0] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-77c0eaa0] {\n  position: relative;\n  width: 100%;\n  padding-top: 70%;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-77c0eaa0] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-77c0eaa0] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-77c0eaa0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-77c0eaa0] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-77c0eaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  tranform: translateY(-50%);\n}"],sourceRoot:""}])},552:function(t,i,e){var a=e(551);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(541)("18945d56",a,!0)},553:function(t,i,e){function a(t){e(552)}var n=e(8)(e(550),e(554),a,"data-v-77c0eaa0",null);t.exports=n.exports},554:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]}},556:function(t,i,e){"use strict";function a(){var t=r()({},d.b,{platform:"h5",uin:0,needNewCode:1});return e.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,d.c)}function n(){var t=r()({},d.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return g.a.get("/api/getDiscList",{params:t}).then(function(t){return A.a.resolve(t.data)})}function s(t){var i=r()({},d.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return e.i(c.a)("https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",i,d.c)}i.b=a,i.c=n,i.a=s;var o=e(83),A=e.n(o),l=e(82),r=e.n(l),c=e(185),d=e(62),p=e(188),g=e.n(p)},560:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(54),n=e.n(a),s=e(553),o=e.n(s),A=e(556),l=e(62),r=e(123),c=e(45);i.default={computed:n()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},e.i(c.b)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");e.i(A.a)(this.disc.dissid).then(function(i){i.code===l.a&&(t.songs=t._normalizeSongs(i.cdlist[0].songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){t.songid&&t.albummid&&i.push(e.i(r.b)(t))}),i}},components:{MusicList:o.a}}},577:function(t,i,e){i=t.exports=e(540)(!0),i.push([t.i,".slide-enter-active[data-v-ec111780],.slide-leave-active[data-v-ec111780]{transition:all .3s}.slide-enter[data-v-ec111780],.slide-leave-to[data-v-ec111780]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}","",{version:3,sources:["E:/webProject/htdocs/vue-music/src/components/disc/disc.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,wCAA2C,AACnC,+BAAmC,CAC5C",file:"disc.vue",sourcesContent:["\n.slide-enter-active[data-v-ec111780],\n.slide-leave-active[data-v-ec111780] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-ec111780],\n.slide-leave-to[data-v-ec111780] {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},587:function(t,i,e){var a=e(577);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(541)("57b7eeea",a,!0)},599:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.77b386ebb50764afa3e4.js.map