/**
 * Created by wkl on 2016/11/13.
 */
//视口
(function(){

    var num=1/window.devicePixelRatio;

    document.write('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale='+num+', maximum-scale='+num+', minimum-scale='+num+'">');

    var fontSize=document.documentElement.clientWidth/10;

    document.querySelector('html').style.fontSize=fontSize+'px';

})();