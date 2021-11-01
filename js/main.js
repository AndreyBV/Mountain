const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// Navigation button click
navBtn.addEventListener('click', function (event) {
	event.stopPropagation();
	toggleMobileNav();
});

// Window click except navigation panel
window.addEventListener('click', function () {
	// If user clicked behind the navigation panel, then hidden nav. panel
	if (mobileNav.classList.contains('mobile-nav-active')) {
		toggleMobileNav();
	}
});

// Except navigation panel on click window
mobileNav.addEventListener('click', function (event) {
	event.stopPropagation();
});

function toggleMobileNav() {
	// body.classList.toggle('no-scroll');
	mobileNav.classList.toggle('mobile-nav-active');
	navBtn.classList.toggle('nav-button-close');
}

// !Experiment - smooth scrolling animation
$(document).ready(function () {
	$('.hero-wrapper').on('click', 'a', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top - 150;
		$('body,html').animate({ scrollTop: top }, 1200);
	});
});
