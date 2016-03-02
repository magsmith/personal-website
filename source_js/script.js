$(document).ready(function(){

  	$('.center').slick({	//slick carousel
	  	centerMode: true,
	  	centerPadding: '5%',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		arrows: false,
		variableWidth: true,

		responsive: [
			{
		    breakpoint: 1024,
		    settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1,
		    }
			},

			{
		    breakpoint: 600,
		    	settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },

		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$('#next-slick').click(function(){		//use my own arrows for slick carousel
    	$('.center').slick('slickNext');
	});
	$('#prev-slick').click(function(){
	    $('.center').slick('slickPrev');
	});

 });

$('a[href*=#]:not([href=#])').click(function() {		//smooth scroll
    if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top - $('.title-bar.navsmaller').height()
            }, 700);
            return false;
        }
    }
});



$(window).scroll(function() {

	var $titlebar = $('.title-bar');
    var windscroll = $(window).scrollTop(); // shrink navbar after scrolling down
    if (windscroll+5 >= $( window ).height() ) {
      $titlebar.addClass('navsmaller');
    }
    else{
        $titlebar.removeClass('navsmaller');
    } 



    var navheight = $titlebar.height();
    console.log(navheight);
    var $sec1 = $('#sectiontop').offset().top - navheight; //offset from top of this element
    var $sec2 = $('#sectiontravel').offset().top - navheight; 

    var $link1 = $('#link1');
    var $link2 = $('#link2');

    if(windscroll < $sec1){
    	$link1.removeClass("current");	//home
    }

    else if (windscroll < $sec2 ){         //contact stuff
      $link1.addClass("current");
      $link2.removeClass("current");
    }

    else {
      $link2.addClass("current");   //travel
      $link1.removeClass("current");
      console.log("contact");
    }
 //// end position indicator

}).scroll();
