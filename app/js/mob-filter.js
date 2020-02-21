import { log } from './main'

export default function() {
    $('.top__filter-icon svg').on('click', showFilters);

    function showFilters() {
        $('.top__filters').fadeToggle(250);
        $(this).toggleClass('active');
    }


    $(window).on('load', function() {
        if ($(this).width() <= 767) {
            let filter = $('.top__filters-list-item.active').attr('data-filter');
            log(filter);

            $(`.top__simulator-card.${filter}:gt(2)`).addClass('unvisible-card');
        }

    })
}