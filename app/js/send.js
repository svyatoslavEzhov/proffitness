import { log } from './main'

export function send_form(formid, url) {
    var form_id = '#' + formid;
    var msg = $(form_id).serialize();
    $.ajax({
        type: 'POST',
        url: url,
        data: msg,
        success: function(data) {
            if (data == "send_error") {
                alert('Возникла ошибка при отправке. Попробуйте пожалуйста еще раз.');
            } else if (data == "send_success") {
                $(form_id)[0].reset();
                if (form_id === '#new__form') {
                    ga('gtag_UA_49981753_1.send', 'event', 'form', 'send1');
                    log('good');
                } else if (form_id === '#callback__form') {
                    ga('gtag_UA_49981753_1.send', 'event', 'form', 'send2');
                    log('good2');
                }
                $.magnificPopup.open({
                    items: {
                        src: '#thanks-popup' // can be a HTML string, jQuery object, or CSS selector
                    },
                    type: 'inline',
                    mainClass: 'my-mfp-zoom-in'
                });


            }
        },
        error: function(xhr, str) {
            alert('Error: ' + xhr.responseCode + ' Please, try again later.');
        }
    });
}