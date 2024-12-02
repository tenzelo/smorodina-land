$(document).ready(function(){
    $('.menu-toggle').click(function(){
       $(".nav").toggleClass("mobile-nav");
       $(this).toggleClass("is-active");
       $(".nav-wrapper").addClass("toglactive");
       $('html').toggleClass('no-scroll');
    });
 })


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".nav-wrapper").addClass("toglactive");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".nav-wrapper").removeClass("toglactive");
        }
    });
});


