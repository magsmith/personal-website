$(window).scroll(function() {

	var $titlebar = $('.title-bar');
    var windscroll = $(window).scrollTop(); // shrink navbar after scrolling down
    if (windscroll >= 400) {
      $titlebar.addClass('navsmaller');
    }
    else{
        $titlebar.removeClass('navsmaller');
    } 

}).scroll();