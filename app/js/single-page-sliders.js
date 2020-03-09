import { log } from "./main"

export default function(){

 $('.card_s__image-slider').slick({
   slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true
      }
    }
  ]
  // asNavFor: '.card_s__preview-slider',
  // adaptiveHeight:true
}).on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.card_s__preview-slide').removeClass('active');
  $('.card_s__preview-slide').eq(currentSlide).addClass('active');
});;



	// $('.card_s__preview-slider').slick({
 //  slidesToShow: 5,
 //  slidesToScroll: 1,
 //  // asNavFor: ,
 //  // slidesToShow: 1,
 //  arrows: false,
 //  asNavFor: '.card_s__image-slider',
 //  vertical: true,
 //  autoplay: true,
 //  infinite: true,
 //  verticalSwiping: true,
 //  centerMode: true,
 //  focusOnSelect: true,
 //  centerPadding: "0px",
	// });

  $('.card_s__preview-slide').on('click', function(){
    $('.card_s__preview-slide').removeClass('active');
    $(this).addClass('active');
    let index = $('.card_s__preview-slide').index($(this));
    console.log(index);
    $('.card_s__image-slider').slick('slickGoTo', index);
  })
}