$(document).ready(function () {

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop(), nav = $('#page');
    
      if ($(this).scrollTop() > 30) {
        nav.addClass("header-fixed");
      } else {
        nav.removeClass("header-fixed");
      }
  
  
  //  $(".image-banner").css("background-position","center " + wScroll / 10 + "px"); /* x y */
  //  $(".range").css("background-position", + wScroll / 2 + "px " + wScroll * 2 + "px");
  //  $(".range-banner").css("background-position", + wScroll / 2 + "px " + wScroll * 2 + "px");
  
    if (wScroll > $('.quote').offset().top - ($(window).height() / 1.2)) {
      $('.quote').addClass('is-showing');
    } else {
      $('.quote').removeClass('is-showing');
	}
    
    if (wScroll > $('.row1 .range-product-list').offset().top - ($(window).height() / 1.2)) {
      $('.row1 .range-product-list li').each(function(i){
        setTimeout(function(){
          $('.row1 .range-product-list li').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
    }
    
    if (wScroll > $('.row2 .range-product-list').offset().top - ($(window).height() / 1.2)) {
      $('.row2 .range-product-list li').each(function(i){
        setTimeout(function(){
          $('.row2 .range-product-list li').eq(i).addClass('is-showing');
        }, 150 * (i+1));
      });
    }
  
  });

  
        $('#subnav li').each(function(i){
          setTimeout(function(){
          $('#subnav li').eq(i).addClass('is-showing');
          }, 150 * (i+1));
      });
		
});
