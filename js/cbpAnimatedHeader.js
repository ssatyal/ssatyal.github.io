var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
            $('.scroll-top').removeClass('hidden-sm hidden-xs');
            $('.scroll-top').fadeIn(500);
            }
		else {
			classie.remove( header, 'navbar-shrink' );
            $('.scroll-top').fadeOut(500,  function() {
            $('.scroll-top').addClass('hidden-sm hidden-xs');
            });

		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
