$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});
