import { log } from './main'

export default function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $(document).height() / 3) {
            $('.to-top').fadeIn(200);
        } else {
            $('.to-top').fadeOut(200);
        }

    })

    $('.to-top').click(function() {

        $('body,html').animate({ scrollTop: 0 }, 800);

    });
}