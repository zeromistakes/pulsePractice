$(document).ready(function(){
		$('.carousel__inner').slick({
				speed: 1200,
				prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
				nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
				responsive: [
						{
								breakpoint: 992,
								settings: {
									dots: true,
									arrows: false
								}
							}
				]
		});

		$('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
			$(this)
				.addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
				.closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
		});

		function toggleSlide(slide) {
			$(slide).each(function(i) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
					$('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
				})
			});
		};

		toggleSlide('.catalogue-item__link');
		toggleSlide('.catalogue-item__back');
		
		// modal 

		$('[data-modal=consultation]').on('click', function() {
				$('.overlay, #consultation').fadeIn();
		});
		$('.modal__close').on('click', function() {
			$('.overlay, #consultation, #order, #thanks').fadeOut();
		});
		$('.button_mini').each(function(i){
			$(this).on('click', function() {
				$('#order .modal__descr').text($('.catalogue-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn();
			});
		});

		//  pageup

		$(window).scroll(function() {
			if ($(this).scrollTop() > 1500) {
				$('.pageup').fadeIn();
			} else {
				$('.pageup').fadeOut();
			}
		});
	});