function scrollToElement(target, navHeight) {
const $target = $(target);
  const targetOffsetTop = $target.offset().top - navHeight;
  if ($target.hasClass('top-content') || $(window).scrollTop() !== targetOffsetTop) {
    $('html, body').stop().animate({ scrollTop: targetOffsetTop }, 1000);
	}
}

$(document).ready(() => {
  // Navigation click handling
  $('a.scroll-link').on('click', (e) => {
		e.preventDefault();
    scrollToElement($(e.target.hash), $('nav').outerHeight());
	});

  // Toggle navbar background class based on scroll position
  $('.top-content .text').waypoint(() => {
		$('nav').toggleClass('navbar-no-bg');
	});
	
  // Initialize WOW.js for animations
	new WOW().init();
    
  // Search form interaction
  $('.navbar-search-button .search-button').on('click', (e) => {
		e.preventDefault();
    $(e.target).blur();
		$('.navbar-menu-items').toggleClass('disabled fadeIn animated');
		$('.navbar-search-form').toggleClass('disabled fadeInLeft animated');
		$('.navbar-search-form input.search').val('').focus();
	});
});
