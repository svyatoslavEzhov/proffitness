import { log } from './main'

export default function() {
    let filter = $('.card_s__tab.active').attr('data-tab');
    $('.card_s__tab-description').hide();
    $(`.card_s__tab-description#${filter}`).fadeIn(250);

    $('.card_s__tab').on('click', activeteTab);

    function activeteTab() {
        let filter = $(this).attr('data-tab');

        $('.card_s__tab').removeClass('active');
        $(this).addClass('active');

        $('.card_s__tab-description').hide();
        $(`.card_s__tab-description#${filter}`).fadeIn(250);
    }
}