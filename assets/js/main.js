$(document).ready(function(){

	// slideshow
	var images = new Array('assets/images/background.jpeg','assets/images/background1.jpeg','assets/images/background3.jpg'); 
	var slideIndex = 0;
	showslides();

	function showslides(){
		if (slideIndex>=images.length){slideIndex=0;}
		$('#header')
		.css('background-image', 'url("'+images[slideIndex++]+'")')
		.fadeIn(500, function(){
			setTimeout(showslides, 3000);
		});
	
	};

	// toggle button
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')

	});
	// sticky navbar less padding
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>=700){
			$('.navbar').addClass('navbar-background');
			$('.navbar').addClass('fixed-top');
		}
		else{

			$('.navbar').removeClass('navbar-background');
			$('.navbar').removeClass('fixed-top');

		}	
	})
	
	// smoothscroll
	$('.nav-item a, .header-link, #back-to-top').click(function(link){
		link.preventDefault();

		let target = $(this).attr('href');

		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 25
		},3000);

	})

	// back-to-top
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		if(position>= 700){
			$('#back-to-top').addClass('scrollTop');
		} else{
			$('#back-to-top').removeClass('scrollTop');
		}	
	})

	// ripples

	$("header, .info").ripples({
  		dropRadius: 20,
  		perturbance: 0.07,
	});

	// magnific-popup
	$('.parent-container').magnificPopup({
  		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  		gallery:{
  			enabled: true
  		}
  		// other options
	});


})



// 	var i;
// 	var x = 
// 	document.getElementById("header");
// 	for (i=0; i< x.length; i++){
// 		x[i].style.display = "none";

// 	}
// 	slideIndex++;
// 	if (slideIndex > x.length)
// 	{slideIndex = 1}
	
// 	setTimeout (showslides, 3000); 
	
// }
