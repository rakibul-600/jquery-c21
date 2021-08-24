$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 250){
        $('.back-to-top').show();
    }else{
        $('.back-to-top').hide();
    }
    if(scrolling > 450){
        $('.menu').addClass('menu-fixed');
    }else{
        $('.menu').removeClass('menu-fixed');
    }

});
