import { log } from './main'

export default function() {
    // let filter = $('.top__filters-list-item.active').attr('data-filter');
    let path = document.location.pathname;
    let count = 1;
    path = path.slice(1);
    
    $(`.unvisible-card:lt(${ 3 * +sessionStorage.getItem(path)})`).fadeIn(300).css({display: 'flex'}).removeClass('unvisible-card');
     if ($(`.unvisible-card`).length <= 0) {
            $('.filter_ca__button').hide();
        }
    $('.filter_ca__button').on('click', showMore);

    function showMore(e) {
        e.preventDefault();
        count = +sessionStorage.getItem(path);
        count++;
        sessionStorage.setItem(path,  count);
        $(`.unvisible-card:lt(3)`).fadeIn(300).css({display: 'flex'}).removeClass('unvisible-card');

        if ($(`.unvisible-card`).length <= 0) {
            $('.filter_ca__button').hide();
        }
    }


}