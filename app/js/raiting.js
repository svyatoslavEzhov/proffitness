import { log } from './main'

export default function() {
    let raiting = $('.card_s__raiting').attr('data-raiting');
    let rLength = $('input[name=raiting]').length;

    $('input[name=raiting]').eq(rLength - raiting).attr('checked', true);
    log(raiting, rLength);

}