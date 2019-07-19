new WOW().init();
jQuery(function($){
  $(".popup-form__input").mask("+7 (999) 999-99-99");
		$(".form__input").mask("+7 (999) 999-99-99");
 });


	$(document).ready(function(){
$('.header-contacts__button').on("click", function(){
$('.overlay').show()
});

$('.popup-close').on("click", function(){
$('.overlay').hide()
});

var link = $('.menu-link');
var menu = $('.menu_mobile');
var a =$('.menu_mobile_link')

link.click(function(){
link.toggleClass('menu-link_active');
menu.toggleClass('menu_mobile_active');
});

a.click(function(){
link.removeClass('menu-link_active');
menu.removeClass('menu_mobile_active');
});
});

	$('.production-slider_top').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_left2"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_right2"></div>',
		asNavFor: '.production-slider_bottom'

	});

		$('.production-slider_bottom').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_prod  slider-arrow_right"></div>',
		asNavFor: '.production-slider_top'
	});

		$('.feedback-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slider-arrow  slider-arrow_left1"></div>',
			nextArrow: '<div class="slider-arrow  slider-arrow_right1"></div>',
		});

				$('.feedback-slider2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="slider-arrow  slider-arrow_left1"></div>',
			nextArrow: '<div class="slider-arrow  slider-arrow_right1"></div>',
		});


		$('form').submit(function(event) {
			event.preventDefault();
			$.ajax({
				type: "POST",
				url: "../mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Сообщение успешно отправлено");
				$("form").trigger("reset");
			});
			return false;
		});
