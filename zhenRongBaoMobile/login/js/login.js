/**
 * Created by wkl on 2016/11/13.
 */
$(window).load(function () {
    //表单验证
    (function () {
        var del=$('.login-wrap .del');
        var input=$('.login-wrap input');
        var eye=$('.login-wrap .eye');
        var tip=$('.login-wrap .tip');
        var btn=$('.login-wrap .btn');
        input.keyup(function () {
            if($(this).val()!=''){
                $(this).next('.del').show();
            }else {
                $(this).next('.del').hide();
            }
        });
        input.eq(0).blur(function () {
           if(!/0?(13|14|15|18)[0-9]{9}/.test($(this).val())) {
               tip.show().html('手机号码不正确！')
           }else {
               tip.hide();
           }
        });
        del.each(function (i) {
           del[i].addEventListener('touchend',function () {
               $(del[i]).prev('input').val('');
               $(del[i]).hide();
           })
        });
        eye[0].addEventListener('touchend',function () {
            if($(eye[0]).hasClass('eye-active')){
                $(this).removeClass('eye-active');
                input[1].type='password';
            }else {
                $(this).addClass('eye-active');
                input[1].type='text';
            }
        });
        btn[0].addEventListener('touchend',function () {
            if(input.val()==''){
                tip.show().html('有一项未填写');
            }else {
                $(this).html('登陆中...');
                setTimeout(function () {
                    window.location.href='../index.html'
                },5000)
            }
        })






    })();


});