/**
 * Created by wkl on 2016/10/18.
 */
    //视口

$(window).load(function(){
    //轮播图
    (function () {
        var mySwiper=new Swiper('.swiper-container',{
            autoplay:2000,
            pagination:'.swiper-pagination',
            loop:true,  //用于无限循环切换
            speed:1000,
            direction:'horizontal' ,
            autoplayDisableOnInteraction : false
        })
    })();
});