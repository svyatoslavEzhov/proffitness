import { log } from './main'

export default function() {
    function clickItem() {
        $('.top__filters-list-item').removeClass('active');
        $(this).addClass('active');
        let filter = $(this).attr('data-filter');
        $(`.top__simulator-card`).addClass('hidden-card').removeClass('anim');
        $(`.top__simulator-card.${filter}`).removeClass('hidden-card').addClass('anim');

        if ($(`.unvisible-card.${filter}`).length <= 0) {
            $('.filter_ca__button').hide();
        } else {
            $('.filter_ca__button').show();
        }
    }
    $('.top__filters-list-item').on('click', clickItem)
    let filter = $('.top__filters-list-item.active').attr('data-filter');
    $(`.top__simulator-card.${filter}`).removeClass('hidden-card').addClass('anim');
}