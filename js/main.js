$(function(){
	$('.header-slider').slick({
		dots: true,
		fade: true,
		centerMode: true,
		speed: 800,
		autoplay: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="Предыдущий слайд"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="Следующий слайд"></button>',
		responsive: [
			{
			breakpoint: 361,
			settings: {
				dots: false,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000
				}
			}
		]
	});

	$('.product__name').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		vertical: true,
		speed: 800,
		prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="Предыдущий продукт"></button>',
		nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="Следующий продукт"></button>',
		asNavFor: '.product__content',
		responsive: [
			{
			breakpoint: 866,
			settings: {
				vertical: false,
				slidesToShow: 3,
				arrows: false,
				dots: true
				}
			},
			{
			breakpoint: 491,
			settings: {
				vertical: false,
				slidesToShow: 1,
				arrows: false,
				dots: true
				}
			}
		]
	});

	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 800,
		arrows: false,
		asNavFor: '.product__name'
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

});