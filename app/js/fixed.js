import { log } from './main'



export default function(flag) {

    // $(window).on('resize', function() {
    //     $('.close-btn').hide();
    // })
    $(window).on('scroll load', fixedMenu);

    function fixedMenu() {
        // flag = true;
        if ($(this).scrollTop() > 3) {

            $('.header').addClass("fixed");
            $('.header__menu').removeClass('visible');
            $('.ham').fadeIn(250);


        } else {
            $('.header').removeClass("fixed");
            $('.header__menu').addClass('visible');
            $('.ham, .close-btn').fadeOut(0);

        }
    }

    $('.hamRotate.ham1').on('click', function() {
        // $(this).toggleClass('active');
        $('.header__menu').fadeIn(400).addClass('flex fixed')
        $('body, html').addClass('noScroll');
        $('.close-btn').addClass('visible').fadeIn();
    })


    $('.close-btn').on('click', function() {
        $('body, html').removeClass('noScroll');
        $(this).removeClass('visible');
        $('.header__menu').fadeOut(400, function() {
            $(this).removeClass('flex fixed');
        })
    })
}