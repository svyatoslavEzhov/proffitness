import { log } from "./main"

export default function(){

 $('.card_s__image-slider').slick({
   slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card_s__preview-slider',
  // adaptiveHeight:true
});


	$('.card_s__preview-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.card_s__image-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
   centerPadding: '0px',
  vertical: true,
  // top: true,
  arrows: false,
  verticalSwiping: true
	});
}