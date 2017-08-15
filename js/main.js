jQuery(document).ready(function($){
	console.log("js is twerking");
	//console.log("The whole world hates ie, Stop using it! -__-"); 

	// Smooth Scrolling on all local anchor links 
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	}); 


 
	$(".site-header__menu-icon").on("click", function(){
		console.log("menu button clicked"); 
		$(".body__main").toggleClass("body__main--active");
		$(".body__side-menu").toggleClass("body__side-menu--active");
	}); 

	$(".side-menu__close-btn").on("click", function(){
		$(".body__main").removeClass("body__main--active");
		$(".body__side-menu").removeClass("body__side-menu--active");
	})

	// // Mobile/Ham burger Menu Transition 
	// function MobileMenu(){

	// 	this.siteHeader = $('.site-header'); // header tag
	// 	this.menuIcon = $(".site-header__menu-icon"); // ham menu
	// 	//this.menuContent = $('.site-header__menu-content'); // nothing
	// 	this.siteHeaderLinks = $('.site-header__main-menu__links'); // all links in header tag
	// 	this.siteHeaderLogo = $('.site-header__logo'); // all links in header tag

	// 	this.events = function(){
	// 		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
	// 		this.siteHeaderLinks.click(this.clearMenu.bind(this)); 
	// 		this.siteHeaderLogo.click(this.clearMenu.bind(this)); 
	// 	}

	// 	this.toggleTheMenu = function(){
	// 		//this.menuContent.toggleClass('site-header__menu-content--is-visible');  
	// 		this.siteHeader.toggleClass('site-header--is-expanded'); 
	// 		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	// 	}

	// 	this.clearMenu = function(){
	// 		this.siteHeader.removeClass('site-header--is-expanded');
	// 		this.menuIcon.removeClass('site-header__menu-icon--close-x');
	// 	}
	// 	this.events(); 
	// }

	// var garyveeMenu = new MobileMenu; 





});