import { log } from './main'

export default function() {
    // let filter = $('.top__filters-list-item.active').attr('data-filter');
    $('.filter_ca__button').on('click', showMore);

    function showMore(e) {
        e.preventDefault();

        $(`.unvisible-card:lt(3)`).fadeIn(300).css({display: 'flex'}).removeClass('unvisible-card');

        if ($(`.unvisible-card`).length <= 0) {
            $('.filter_ca__button').hide();
        }
    }


}