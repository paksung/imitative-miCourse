/* 
* @Author: pengshuang
* @Date:   2016-11-02 14:44:29
* @Last Modified time: 2016-11-07 09:54:38
*/

$(document).ready(function(){

    //输入时判断是否输入值符合规则
    $(".ipt").eq(0).on("keyup",function(){
        emailTips($(this));
        setSubmit($(this));
    });
    $(".ipt").eq(2).on("keyup",function(){
        emailTips($(this));
        setSubmit($(this));
    });

    $(".ipt").eq(1).on("keyup",function(){
        passwordTips($(this));
        setSubmit($(this));
    });
    $(".ipt").eq(3).on("keyup",function(){
        passwordTips($(this));
        setSubmit($(this));
    });

    $(".forgot-password").on("keyup",function(){
        emailTips($(this));
        setSubmit($(this));
    });
    //判断是否符合邮箱的规则
    function isEmail(str){
        var reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
        return reg.test(str);
    }

    //获取邮箱输入框的值，判断是否符合要求，不符合则显示提示框
    function emailTips(obj){
        var email = obj.val();
        if(!isEmail(email)){
            obj.siblings('.tips').text('邮箱格式错误,请重新输入');
            obj.siblings('.tips').show();
        }else{
            //当邮箱符合时，再次判断密码是否符合要求，防止事先输入密码不符合再输入正确邮箱时提示框消失
            if(obj.siblings('.ipt').length != 0){
                obj.siblings('.ipt').val().length > 6 ? obj.siblings('.tips').hide() : passwordTips(obj.siblings('.ipt'));
            }else{
                obj.siblings('.tips').hide();
            }
            
        }
    }
    //获取密码输入框的值，同上
    function passwordTips(obj){
        var password = obj.val();
        if(password.length < 6){
            obj.siblings('.tips').text('密码长度不能低于6位');
            obj.siblings('.tips').show();
        }else{
            //同上
            isEmail(obj.siblings('.ipt').val()) ? obj.siblings('.tips').hide() : emailTips(obj.siblings('.ipt'));
        }
    }

    //当提示框出现时，表明不符合规则，不能提交表单，将submit按钮设置为不可用，提示框消失时才可用
    function setSubmit(obj){
        if(obj.siblings('.tips').is(":hidden")){
            obj.siblings(":submit").removeAttr('disabled');
        }else{
            obj.siblings(":submit").attr('disabled', 'disabled');
        }
    }
});