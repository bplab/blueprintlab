(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
			}

		//Scroll Effect 1.
			$('.scroll-effect1').scrollex({

				// Scroll event: Perform various CSS tweaks based on the user's progress through this element.
				scroll: function(progress) {

					var $this = $(this),
						$inner = $this.find('.inner'),
						$button = $this.find('.mobile-float'),
						x, y;
					
						// No progress decrease
						x = progress;

						// Progress decrease after half-point
						if (progress > 0.5)
							y = 1 - progress;
						else
							y = progress;
						
						// Responsive height adjustment
						x = Math.max(0, Math.min(1, x * ($this.height() / window.innerHeight * 2.8)));
						y = Math.max(0, Math.min(1, y * ($this.height() / window.innerHeight * 2.8)));

						// Opacity.
						$this.css('opacity', x);
						$button.css('opacity', y);

						// Scale.
						$inner
							.css('-moz-transform', 'scale(' + x + ')')
							.css('-webkit-transform', 'scale(' + x + ')')
							.css('-o-transform', 'scale(' + x + ')')
							.css('-ms-transform', 'scale(' + x + ')')
							.css('transform', 'scale(' + x + ')');

						$button
							.css('-moz-transform', 'scale(' + x + ')')
							.css('-webkit-transform', 'scale(' + x + ')')
							.css('-o-transform', 'scale(' + x + ')')
							.css('-ms-transform', 'scale(' + x + ')')
							.css('transform', 'scale(' + x + ')');

						// Change z-index multiplier if you want higher than 1
						$button.css('z-index', y * 3);
					}
			});

		//Scroll Effect 2.
			$('.scroll-effect2').scrollex({

				// Scroll event: Perform various CSS tweaks based on the user's progress through this element.
				scroll: function(progress) {

					var $this = $(this),
						$inner = $this.find('.inner'),
						x;
					
						// No progress decrease
						x = progress;

						// For sections less than 100vh
						x = Math.max(0, Math.min(1, x * ($this.height() / window.innerHeight * 3.8)));

						// Opacity.
						$this.css('opacity', x);

						// Scale.
						$inner
							.css('-moz-transform', 'scale(' + x + ')')
							.css('-webkit-transform', 'scale(' + x + ')')
							.css('-o-transform', 'scale(' + x + ')')
							.css('-ms-transform', 'scale(' + x + ')')
							.css('transform', 'scale(' + x + ')');
					}
			});
	});

})(jQuery);
