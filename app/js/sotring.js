import { log } from './main'
// import slider from './filter-slider'
export default function() {
        let filterSlider = document.getElementById('filter_ca__slider');
        let priceMin = document.querySelector('.price-min');
        let priceMax = document.querySelector('.price-max');
    $('input.price-sort').val($('.filter_ca__select').val());
    $('.filter_ca__select').on('change', function(){
        let select = $(this).val();
        $('input.price-sort').val(select);
    })


    if(filterSlider) {
            filterSlider.noUiSlider.on('update', function (values, handle) {

                priceMin.value = Math.round(values[0]);
                priceMax.value = Math.round(values[1]);
            });
    }

}