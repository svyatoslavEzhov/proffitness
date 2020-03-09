import { log } from './main'

export default function() {
    let filterSlider = document.getElementById('filter_ca__slider');

    let topSimulatorCardPrice = document.querySelectorAll('.top__simulator-card-price');

    console.log(topSimulatorCardPrice);

    let arr =  [].map.call(topSimulatorCardPrice, function(el, ind){
        return +el.innerText.replace(/[^0-9]/gim,'')
    })

    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let obj;

    if(!localStorage.getItem("obj")) {
        obj = {
        min, max
        }
 
    

    let json = JSON.stringify(obj);
    localStorage.removeItem('obj');
    localStorage.setItem('obj', json);
   }
    let returnObj = JSON.parse(localStorage.getItem("obj"));

    console.log(returnObj);

    if (filterSlider) {
        noUiSlider.create(filterSlider, {
            connect: true,
            animate: true,
            start: [returnObj.min, returnObj.max + 1000],
            tooltips: [wNumb({
                decimals: 0,
                suffix: '€'
            }), wNumb({ decimals: 0, suffix: "€" })],
            range: {
                min: 0,
                max: returnObj.max + 1000
            }
        });
    }

}