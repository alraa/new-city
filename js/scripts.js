var homeslider_width = 10000;
var homeslider_loop = 1;
var homeslider_pause = 5000;
var homeslider_speed = 700;
var global, windowWidth;
var h_hght;
$(document).ready(function() {
	/* click or tap */
	if(Modernizr.touch) clickEvent = 'tap';
	else clickEvent = 'click';
	/* // */
	/* home slider */
	if($('#homeslider')[0]) {
		if(typeof(homeslider_speed) == 'undefined') homeslider_speed = 700;
		if(typeof(homeslider_pause) == 'undefined') homeslider_pause = 3500;
		if(typeof(homeslider_loop) == 'undefined') homeslider_loop = true;
		var tl = new TimelineMax();
		tl.from(".homeslider-description h2", 0.7, {
			left: -600
			, autoAlpha: 0
		}).from(".homeslider-description p", 0.5, {
			left: -500
			, autoAlpha: 0
		});
		if(!!$.prototype.bxSlider) $('#homeslider').bxSlider({
			mode: 'fade'
			, useCSS: false
			, maxSlides: 1
			, slideWidth: homeslider_width
			, infiniteLoop: homeslider_loop
			, hideControlOnEnd: true
			, pager: true
			, autoHover: false
			, autoControls: false
			, auto: homeslider_loop
			, speed: parseInt(homeslider_speed)
			, pause: homeslider_pause
			, controls: false
			, startText: ''
			, stopText: ''
			, onSliderLoad: function() {
				tl.play()
			}
			, onSlideBefore: function() {
				tl.restart()
			}
			, onSlideAfter: function() {}
		});
	}
	//--
	/* offers slider */
	if($('#offers_slider')[0]) {
		$('#offers_slider').slick({
			dots: false
			, infinite: true
			, speed: 500
			, autoplaySpeed: 2100
			, arrows: true
			, slidesToShow: 4
			, slidesToScroll: 1
			, autoplay: true
			, responsive: [
				{
					breakpoint: 1100
					, settings: {
						slidesToShow: 3
					, }
					}
				, {
					breakpoint: 750
					, settings: {
						slidesToShow: 2
					, }
					}
				, {
					breakpoint: 520
					, settings: {
						slidesToShow: 1
					, }
					}
				]
		});
	}
	//--
	/* actions slider */
	if($('#actions_slider')[0]) {
		$('#actions_slider').slick({
			dots: false
			, infinite: true
			, speed: 500
			, autoplaySpeed: 2000
			, arrows: true
			, slidesToShow: 4
			, slidesToScroll: 1
			, autoplay: true
			, responsive: [
				{
					breakpoint: 1100
					, settings: {
						slidesToShow: 3
					, }
					}
				, {
					breakpoint: 750
					, settings: {
						slidesToShow: 2
					, }
					}
				, {
					breakpoint: 520
					, settings: {
						slidesToShow: 1
					, }
					}
				]
		});
	}
	//--
	/* photo slider */
	if($('#photo_slider')[0]) {
		$('#photo_slider').slick({
			dots: false
			, infinite: true
			, speed: 500
			, arrows: true
			, slidesToShow: 3
			, slidesToScroll: 1
			, responsive: [
				{
					breakpoint: 640
					, settings: {
						slidesToShow: 2
					, }
					}
				, {
					breakpoint: 460
					, settings: {
						slidesToShow: 1
					, }
					}
				]
		});
	}
	//--
	/* sub category slider */
	if($('#sub_category_slider')[0]) {
		$('#sub_category_slider').slick({
			dots: false
			, infinite: true
			, speed: 500
			, arrows: true
			, slidesToShow: 8
			, slidesToScroll: 1
			, responsive: [
				{
					breakpoint: 1170
					, settings: {
						slidesToShow: 6
					, }
					}
				]
		});
	}
	//--
	/* text slider */
	if($('#text_slider')[0]) {
		$('#text_slider').slick({
			dots: false
			, infinite: true
			, speed: 500
			, arrows: true
			, slidesToShow: 1
			, slidesToScroll: 1
			, appendArrows: $('.text_slider_nav')
		});
	}
	//--
	/* photo slider */
	if($('#item_photo_slider')[0]) {
		$('.slider-for').slick({
			slidesToShow: 1
			, slidesToScroll: 1
			, dots: false
			, arrows: false
			, fade: true
			, infinite: false
			, asNavFor: '.slider-nav'
			, adaptiveHeight: true
			, responsive: [
				{
					breakpoint: 750
					, settings: {
						dots: true
						, fade: false
					}
					}
				]
		});
		$('.slider-nav').slick({
			slidesToShow: 4
			, slidesToScroll: 1
			, asNavFor: '.slider-for'
			, dots: false
			, infinite: false
			, arrows: true
			, focusOnSelect: true
			, vertical: true
			, verticalSwiping: true
		});
	}
	//--
	/* fancybox */
	if($('#item_photo_slider')[0] || $('#article_content')[0]) {
		$(".fancybox").fancybox({
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	}
	//--
	/* main submenu */
	$('.nav > li').hover(function() {
		if(windowWidth > 999 && !device.mobile() && !device.tablet()) {
			$(this).find('.megamenu').css('top', $('.nav').height()).stop(true, true).fadeIn(500);
		}
	}, function() {
		if(windowWidth > 999) {
			$(this).find('.megamenu').css('top', $('.nav').height()).stop(true, true).fadeOut(500);
			if($('.nav > li').hasClass('sub_opened')) $('.nav > li').removeClass('sub_opened')
		}
	});
	//--
	/* fixed menu */
	$(window).scroll(function() {
		if(windowWidth > 999) {
			var top = $(this).scrollTop();
			var elem = $('.nav_wrap');
			if(top < h_hght) {
				elem.removeClass('fixed');
				$('.nav_place').css('display', 'none');
			}
			else {
				elem.addClass('fixed');
				$('.nav_place').css('display', 'block');
			}
			if($('.nav_wrap').hasClass('fixed')) $('.nav > li .megamenu').css('top', '45px');
			else $('.nav > li .megamenu').css('top', '60px');
		}
		else {
			$('.nav_place').css('display', 'none');
		}
	});
	//--
	/* mobile menu */
	$('#mobile_nav')[clickEvent](function() {
		$(this).toggleClass('opened').next('.nav').slideToggle(300);
	});
	$('.nav > li > a.sub')[clickEvent](function() {
		$(this).parent().toggleClass('sub_opened').find('.megamenu').slideToggle(300);
		return false;
	});
	$('footer .span6 h4')[clickEvent](function() {
		$(this).toggleClass('foot_nav_opened').next('.nav_foot').slideToggle(300);
	});
	$('.sub_category_box h4')[clickEvent](function() {
		$(this).toggleClass('cat_opened').next('.mobile_category_list').slideToggle(300);
	});
	$('.items_wrap_container .hd h4')[clickEvent](function() {
		$(this).toggleClass('cat_opened').parent().next('.items_wrap').slideToggle(300);
	});
	$('.video_box h4')[clickEvent](function() {
		$(this).toggleClass('video_opened').next('.video_content').slideToggle(300);
	});
	//--
	/* show more */
	$('#show_more_categories')[clickEvent](function() {
		$(this).fadeOut(500);
		$('.category_list li:nth-child(n+4)').slideToggle(500);
		setTimeout(function() {
			addImageParallax('.categories', 'img/', 'category_bg.jpg', '1920', '591');
		}, 200);
	});
	$('#show_more_articles')[clickEvent](function() {
		$(this).fadeOut(500);
		$('.articles_box .row-fluid .photo_box_content:nth-child(n+4)').slideToggle(500, function() {
			if($(this).is(':visible')) $(this).css('display', 'inline-block');
		});
	});
	$('#show_more_items')[clickEvent](function() {
		$(this).fadeOut(500);
		$('.items_hide .items_list .item_box_wrap:nth-child(n+5)').slideToggle(500, function() {
			if($(this).is(':visible')) $(this).css('display', 'inline-block');
		});
	});
	//--
	global = {
		window: $(window)
	};
	global.window.resize(onResize);
	onResize();
});

function onResize() {
	windowWidth = global.window.width();
	h_hght = $('header').height() + $('.nav').height();
	/* control elements behavior */
	if(windowWidth > 999) {
		/* submenu */
		if($('.nav > li a.sub').parent().hasClass('sub_opened')) {
			$('.nav > li .megamenu').css('display', 'none');
			$('.nav > li.sub_opened').removeClass('sub_opened');
		}
		//--
		/* main menu */
		if(!$('#mobile_nav').hasClass('opened')) {
			$('.nav').css('display', 'block');
		}
		//--
		/* submenu position */
		$('.nav > li .megamenu').css('top', $('.nav').height());
		//--
		/* bottom menu */
		$('footer .span6 h4').each(function(i) {
			if($('footer .span6 h4:eq(' + i + ')').hasClass('foot_nav_opened')) {
				$(this).removeClass('foot_nav_opened');
			}
		});
		$('.nav_foot').css('display', 'block');
		//--
		/* items menu */
		if($('.sub_category_box h4').hasClass('cat_opened')) {
			$(this).removeClass('cat_opened');
			$('.mobile_category_list').css('display', 'none');
		}
		$('.items_wrap_container .items_wrap').css('display', 'block');
		//--
	}
	else {
		/* submenu position */
		$('.nav > li .megamenu').css('top', '0px');
		//--
		/* main menu */
		if(!$('#mobile_nav').hasClass('opened')) {
			$('.nav').css('display', 'none');
		}
		//--
		/* bottom menu */
		$('footer .span6 h4').each(function(i) {
			if($('footer .span6 h4:eq(' + i + ')').hasClass('foot_nav_opened')) {
				$('footer .span6 h4:eq(' + i + ')').next('.nav_foot').css('display', 'block');
			}
			else {
				$('footer .span6 h4:eq(' + i + ')').next('.nav_foot').css('display', 'none');
			}
		});
		//--
		/* items menu */
		if($('.sub_category_box h4').hasClass('cat_opened')) {
			$('.mobile_category_list').css('display', 'block');
		}
		if(!$('.items_wrap_container .hd h4').hasClass('cat_opened')) {
			$('.items_wrap_container .items_wrap').css('display', 'none');
		}
		else {
			$('.items_wrap_container .items_wrap').css('display', 'block');
		}
		//--
	}
	if(windowWidth > 640) {
		/* video */
		$('.video_content').css('display', 'block');
		$('.video_box h4').removeClass('video_opened');
		//--
	}
	else {
		/* video */
		$('.video_content').css('display', 'none');
		//--
	}
	//--
}
/* background parallax */
function addImageParallax(selector, path, filename, width, height) {
	var selector = $(selector);
	selector.addClass('parallax_section');
	selector.attr('data-type-media', 'image');
	selector.wrapInner('<div class="parallax_content"></div>');
	selector.append('<div class="parallax_inner"><img class="parallax_media" src="' + path + filename + '" data-base-width="' + width + '" data-base-height="' + height + '"/></div>');
	selector.tmMediaParallax();
}
$(window).load(function() {
	if($('#parallax_box')[0] || $('#text_box')[0]) {
		addImageParallax('.categories', 'img/', 'category_bg.jpg', '1920', '591');
		addImageParallax('.text_box', 'img/', 'text_bg.jpg', '1920', '330');
	}
});
//--