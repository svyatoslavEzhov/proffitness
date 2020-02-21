import { log } from './main'

export default function() {
    let filterSlider = document.getElementById('filter_ca__slider');

    if (filterSlider) {
        noUiSlider.create(filterSlider, {
            connect: true,
            animate: true,
            start: [1600, 7000],
            tooltips: [wNumb({
                decimals: 0,
                suffix: '€'
            }), wNumb({ decimals: 0, suffix: "€" })],
            range: {
                'min': 0,
                'max': 8500
            }
        });
    }

}