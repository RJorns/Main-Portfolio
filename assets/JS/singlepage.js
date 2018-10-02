$(document).ready(function() {

  $(window).scroll(function() {
    parallax();
  })

  function parallax() {

    var wScroll = $(window).scrollTop();

    $('body').css('background-position', 'center ' +(wScroll*0.5)+'px')
  }

});
