import { log } from './main'

export default function() {
    let filterSlider = document.getElementById('filter_ca__slider');
    let path = document.location.pathname;
    path = path.slice(1, -1);



    let topSimulatorCardPrice = document.querySelectorAll('.top__simulator-card-price');


    let returnObj, json, min, max, obj, arr;

    if(topSimulatorCardPrice.length) {


    arr =  [].map.call(topSimulatorCardPrice, function(el, ind){
        return +el.innerText.replace(/[^0-9]/gim,'')
    })

    min = Math.min.apply(null, arr);
    max = Math.max.apply(null, arr);

    if(!sessionStorage.getItem(path)) {
        obj = {
        min, max
        }
 
    

    json = JSON.stringify(obj);
    sessionStorage.removeItem(path);
    sessionStorage.setItem(path, json);
   }
    
 
    returnObj = JSON.parse(sessionStorage.getItem(path));
} else {

    returnObj = JSON.parse(sessionStorage.getItem(path));
}


console.log(returnObj);
console.log(sessionStorage.getItem(path));

    if (filterSlider && topSimulatorCardPrice) {
        noUiSlider.create(filterSlider, {
            connect: true,
            animate: true,
            start: [returnObj.min, returnObj.max - 100],
            tooltips: [wNumb({
                decimals: 0,
                suffix: '€'
            }), wNumb({ decimals: 0, suffix: "€" })],
            range: {
                min: 0,
                max: returnObj.max
            }
        });
    }

}