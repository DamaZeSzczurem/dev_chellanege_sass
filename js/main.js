$(window).scroll(function(){
  var top = $(window).scrollTop();
  if(top > 100) {
    $('.main-nav').addClass('main-nav--small');
    $('.main-nav_logo').addClass('main-nav_logo--small');
    $('.main-nav_list').addClass('main-nav_list--small');
  }
  else {
    $('.main-nav').removeClass('main-nav--small');
    $('.main-nav_logo').removeClass('main-nav_logo--small');
    $('.main-nav_list').addClass('main-nav_list--small');
  }

});