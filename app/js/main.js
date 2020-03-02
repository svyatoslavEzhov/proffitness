// import {some} from './func';
// import './libs/libs.js';

import previewSlider from './preview-slider'
import top from './top'
import search from './search'
import fixed from './fixed'
import filterSlider from './filter-slider'
import filterMore from './filter_more'
import filterShow from './filter_show'
import raiting from './raiting'
// import tabs from './tabs'
import magnif from './magnify'
import popup from './popup'
import mob from './mob-filter' 
import totop from './totop'
import { send_form } from './send'
import test from './test'
// import axios from './axios'
import singlesliders from './single-page-sliders'




let flag = false;
export let log = function() {
    try {
        return console.log.apply(console, arguments);
    } catch (err) {}
}
log(send_form);
let main = {
    init() {
        previewSlider();
        top();
        search(flag);
        fixed(flag);
        filterSlider();
        filterMore();
        filterShow();
        raiting();
        // tabs();
        magnif();
        popup();
        mob();
        totop();
        this.send();
        test();
        // axios();
        singlesliders();

    },

    send() {
        $('form').on('submit', function() {
            send_form(this.id, 'mail/send.php');
        })
    }


};

$(function() {
    main.init();
});