import { log } from "./main"
// import magnifyc from "magnify";
// window.magnify = magnifyc;
// import {Drift} from "../libs/libs";

export default function() {

let thumbs= document.querySelectorAll('.zoom');

$(window).on('load', function(){
	if($(this).width() > 576 && thumbs) {

		// console.log('fdfd');
		thumbs.forEach((el, i)=>{
		let thumb = el;

	let drift = new Drift(thumb, {
  paneContainer: document.querySelector(".cars_s__content"),
  // injectBaseStyles: false,
  zoomFactor: 5,
	hoverBoundingBox: true
});

})

	}
})


}


