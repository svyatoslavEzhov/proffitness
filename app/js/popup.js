import { log } from "./main"

export default function() {
    
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    })

    $('.popup-link__call').on('click', function() {
        let value = $('.phone-select').val();
        $(this).attr('href', value);
    })



    document.addEventListener('wpcf7mailfailed', function(event) {
        $.magnificPopup.open({
            items: {
                src: '#error-dialog'
            },
            type: 'inline',
            mainClass: 'my-mfp-zoom-in',

        });
    }, false);


    document.addEventListener('wpcf7mailsent', function(event) {
        $.magnificPopup.open({
            items: {
                src: '#thanks-dialog'
            },
            type: 'inline',
            mainClass: 'my-mfp-zoom-in',
            callbacks: {
                open: function() {
                    setTimeout(function() {
                        $(".check-icon").show();
                    }, 10);
                }
            }
        });
    }, false);
}