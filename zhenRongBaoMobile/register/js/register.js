/**
 * Created by wkl on 2016/11/13.
 */
$(window).load(function () {
    (function () {
        var tip=$('.step-container .tip');
        var input=$('.step-container input');
        var eye=$('.step-container .eye');
        var btn=$('.btn-container .btn');
        var recom=$('.step-container .recom');
        var recomWrap=$('.step-container .recom-wrap');
        var getCode=$('.step-container .getcode');
        var del=$('.step-container .del');
        var timer=null;
        var num=60;
        //获取验证码
        getCode[0].addEventListener('touchend',function () {
            getCode.html('重新获取('+num+')').css('background','#c9c9c9');
            timer=setInterval(function () {
                num--;
                if(num<=0){
                    num=60;
                    clearInterval(timer);
                    getCode.html('重新获取').css('background','#ff5262');
                }else {
                    getCode.html('重新获取('+num+')');
                }

            },1000)
        });
        //推荐显示隐藏
        recom[0].addEventListener('touchend',function () {
            if($(this).children('.arrow').hasClass('active')){
                $(this).children('.arrow').removeClass('active');
                recomWrap.slideUp(200);
            }else {
                $(this).children('.arrow').addClass('active');
                recomWrap.slideDown(200);
            }
        });
        //删除显示隐藏
        input.keyup(function () {
            if($(this).val()!=''){
                $(this).next('.del').show();
            }else {
                $(this).next('.del').hide();
            }
        });
        //删除内容
        del.each(function (i) {
            del[i].addEventListener('touchend',function () {
                $(del[i]).prev('input').val('');
                $(del[i]).hide();
            })
        });
        //表单
        input.eq(0).blur(function () {
            if(!/0?(13|14|15|18)[0-9]{9}/.test($(this).val())) {
                tip.show().html('手机号码不正确！')
            }else {
                tip.hide();
            }
        });
        input.eq(1).blur(function () {
            if(!/^[\w\W]{4,6}$/.test($(this).val())) {
                tip.show().html('验证码输入不正确！')
            }else {
                tip.hide();
            }
        });
        input.eq(2).blur(function () {
            if(!/^[\w\W]{6,16}$/.test($(this).val())) {
                tip.show().html('请输入6-16个字符！')
            }else {
                tip.hide();
            }
        });
        input.eq(3).blur(function () {
            if(!/0?(13|14|15|18)[0-9]{9}/.test($(this).val())) {
                tip.show().html('手机号码不正确！')
            }else {
                tip.hide();
            }
        });

        eye[0].addEventListener('touchend',function () {
            if($(eye[0]).hasClass('eye-active')){
                $(this).removeClass('eye-active');
                input[2].type='password';
            }else {
                $(this).addClass('eye-active');
                input[2].type='text';
            }
        });
        input.blur(function () {
            if(input.eq(0).val()!=''&&input.eq(1).val()!=''&&input.eq(2).val()!=''&&input[4].checked&&tip[0].style.display=='none'){
                btn.addClass('active');
            }else {
                btn.removeClass('active');
            }
        });
        //点击提交
        btn[0].addEventListener('touchend',function () {
            if($(this).hasClass('active')){
                console.log({phone:input.eq(0).val(),code:input.eq(1).val(),password:input.eq(2).val()})
            }
        })









    })();
});