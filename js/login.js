$(document).ready(function(){
    $('#eye').click(function(){
        $('#eye').toggleClass('open')
        $('#eye').children('i').toggleClass("fa-regular fa-eye-slash fa-regular fa-eye")
        if($(this).hasClass('open')){
            $('#password').attr('type', 'text');
        }else{
            $('#password').attr('type', 'password');
        }
    });
});

$(document).ready(function(){
    $('#eye1').click(function(){
        $('#eye1').toggleClass('open')
        $('#eye1').children('i').toggleClass("fa-regular fa-eye-slash fa-regular fa-eye")
        if($(this).hasClass('open')){
            $('#password1').attr('type', 'text');
        }else{
            $('#password1').attr('type', 'password');
        }
    });
});