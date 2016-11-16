$( document ).ready(function(){

  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('ul li a').click(function(){
    $('li').removeClass("active");
    $(this).parent().addClass("active");
  });  
  
});