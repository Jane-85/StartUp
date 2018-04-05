$(function() {
  $('.bxslider').bxSlider({
      caption: true,
      spead: 100,
      minSlides: 4,
      maxSlides: 4,
      slideWidth: 320,
      mode: 'horizontal',
      slideMargin: 10,
      infiniteLoop: false,
      hideControlOnEnd: true,
      responsive: true
  });

  $("#navbar").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 2000);
    });
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > $(this).height()){
      $('.top').addClass('active');
    }
    else{
      $('.top').removeClass('active');
    }
  });

  $('.top').click(function(){
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });

});