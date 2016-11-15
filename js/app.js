$( document ).ready(function(){

  $(".button-collapse").sideNav();

  $('ul li a').click(function(){
    $('li').removeClass("active");
    $(this).parent().addClass("active");
  });  
  
});