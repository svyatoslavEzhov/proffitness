import { log } from './main'
// import slider from './filter-slider'
export default function() {
        let filterSlider = document.getElementById('filter_ca__slider');
        let priceMin = document.querySelector('.price-min');
        let priceMax = document.querySelector('.price-max');

        let path = document.location.pathname;
        let pathPrice = path.slice(1) + 'Price';
        let pathBrand = path.slice(1) + 'Brand';
        let pathSlider = path.slice(1) + 'Slider';

    $('input.price-sort').val($('.filter_ca__select').val());
    $('.filter_ca__select').val(sessionStorage.getItem(pathPrice) || "ASC");
    $('input.price-sort').val(sessionStorage.getItem(pathPrice) || "ASC");
    $('.filter_ca__select').on('change', function(){
        let select = $(this).val();
        $('input.price-sort').val(select);
        sessionStorage.setItem(pathPrice, select);
       
    })

    $('.filter_ca__checkbox').each(function(ind, el){
         if(sessionStorage.getItem(pathBrand) == $(el).val()) {
            $(el).attr('checked', true);
         }
    })

    $('.filter_ca__checkbox').on('change', function(){
        // alert($(this).val());
        sessionStorage.setItem(pathBrand, $(this).val());
    })


    if(filterSlider) {
            let returnObj;

            // if(JSON.parse(sessionStorage.getItem(pathSlider)) !== null) {
                returnObj = JSON.parse(sessionStorage.getItem(pathSlider)) || JSON.parse(sessionStorage.getItem(path.slice(1, -1)));
            // }

           
            filterSlider.noUiSlider.updateOptions({
                start: [returnObj.min, returnObj.max],
            })
            filterSlider.noUiSlider.on('update', function (values, handle) {
                let min = Math.round(values[0]);
                let max = Math.round(values[1]);
                priceMin.value = min;
                priceMax.value = max;

                let obj = {
                    min, max
                }

                let str = JSON.stringify(obj);
                sessionStorage.setItem(pathSlider, str);

            });

           


    }





    // $('.filter_ca__btn').on('click', function(){
    //     let path = document.location.pathname;
    //     path = path.slice(1) + 'Show';
    // })

}