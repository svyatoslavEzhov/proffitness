import { log } from './main';


export default function() {

    $('.filter_ca_arrow').on('click', showFilters);

    function showFilters() {
        $('.filter_ca__sort').fadeToggle(400).css({ display: 'flex' });
        $(this).toggleClass('rotate');
    }
}