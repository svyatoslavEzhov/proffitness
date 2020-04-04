import { log } from './main';


export default function() {

	let path = document.location.pathname;
  path = path.slice(1) + 'Show';

    $('.filter_ca_arrow').on('click', showFilters);


    if(sessionStorage.getItem(path) == 'true') {
    	$('.filter_ca__sort').css({ display: 'flex' });
	     $('.filter_ca_arrow').addClass('rotate');
    } else if (sessionStorage.getItem(path) == 'false') {
    		$('.filter_ca__sort').css({ display: 'none' });
	        $('.filter_ca_arrow').removeClass('rotate');
    }

    function showFilters() {
	    	let show = sessionStorage.getItem(path) || 'false'; 
	    	sessionStorage.setItem(path,  'false');
	    	if(show === 'false') {
	    				show = 'true';
		    			sessionStorage.setItem(path, show);
		    		$('.filter_ca__sort').fadeIn(400).css({ display: 'flex' });
		        $(this).addClass('rotate');
		    	} else if(show === 'true') {
		    		show = 'false';
		    		sessionStorage.setItem(path, show);
		    			$('.filter_ca__sort').fadeOut(400);
		        $(this).removeClass('rotate');
		        
		    }
    	}
}