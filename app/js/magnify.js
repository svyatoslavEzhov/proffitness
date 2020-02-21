import { log } from "./main"
import magnifyc from "magnify";
window.magnify = magnifyc;

export default function() {
    $(window).on('load', function() {
        if ($(this).width() > 576) {
            $('.zoom').magnify({
                speed: 200,
            });
        }
    })

}