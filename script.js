$(document).ready(function(){
    slide_num = 0;
    $('#slide_bt_box>li').click(function(){
        $(this).css({'background-color':'#fff'}).siblings().css({'background-color':'#4c4b4a'})
        slide_num = slide_num - 100;
        $('#slide_img').css({'left':slide_num+"%"})
    })

})