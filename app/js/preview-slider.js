import { log } from './main'
import { SSL_OP_NO_TLSv1_1 } from 'constants';

export default function() {
    $('.preview__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        arrows: false,
        speed: 450
    }).on('afterChange', function(event, slick, currentSlide, nextSlide) {

        $(slick.$slides).find('.preview__slide-img_right, .preview__slide-img_left').removeClass('animated');
        $(slick.$slides).find('.preview__slide-title, .preview__slide-text, .preview__slide .main-btn, .preview__slide-list').removeClass('animated');
        $(slick.$slides[currentSlide]).find('.preview__slide-img_right, .preview__slide-img_left').addClass('animated');
        $(slick.$slides[currentSlide]).find('.preview__slide-title, .preview__slide-text, .preview__slide .main-btn, .preview__slide-list').addClass('animated');
    });

    $('.preview__slide').eq(1).find('.preview__slide-title, .preview__slide-text, .main-btn, .preview__slide-img_right, .preview__slide-img_left, .preview__slide-list').addClass('animated');


}