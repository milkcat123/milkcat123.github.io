$(document).ready(function(){
    $(window).on('load scroll resize reload', function(){
        let slick_dots = $('ul.slick-dots');    
        if($(window).width() < 769){
            slick_dots.attr('style','display:none');
        }else{
            slick_dots.attr('style','display:block');
        }
    });

});