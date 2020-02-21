import { log } from './main'



export default function(flag) {
    // flag = false;
    $('.search-item').on('click', showInput);
    $('.close-btn').on('click', hideSearch);
    // $(window).on('resize', function() {
    //     $('.text-search').fadeOut(250);
    //     $('body, html').removeClass('noScroll');
    //     flag = false;
    // })
    $(window).on('keypress', function(e) {
        if (e.keyCode !== 13) return;

        if (flag) {
            $('.text-search').fadeOut(250);
            $('body, html').removeClass('noScroll');
            flag = false;
        }
    })

    function showInput() {
        if (!flag) {
            $('.text-search').fadeIn(250);
            $('body, html').addClass('noScroll');
            flag = true;
        } else {
            $('.text-search').fadeOut(250);
            $('body, html').removeClass('noScroll');
            flag = false;
        }
    }

    function hideSearch() {
        $('.text-search').fadeOut(250);
        flag = false;
    }

}