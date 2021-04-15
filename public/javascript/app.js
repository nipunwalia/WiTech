$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
var slideIndex = 0;
showSlides();
function showSlides() {
  var a;
  var slides = document.getElementsByClassName("carousel-item")
  var dots = document.getElementsByClassName("dot");
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  slideIndex++;
  for (a = 0; a < dots.length; a++) {
    dots[a].className = dots[a].className.replace(" active", "");
}
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
var i=0;
slideShow();
function slideShow() {
  var n;
  var slides = document.getElementsByClassName("carousel-item1")
  var dots = document.getElementsByClassName("dot");
  for (n = 0; n < slides.length; n++) {
    slides[n].style.display = "none";
  }
  i++;
  for (n = 0; n< dots.length; n++) {
    dots[n].className = dots[n].className.replace(" active", "");
}
  if (i> slides.length) {i = 1}
  slides[i-1].style.display = "block";
  dots[i-1].className += " active";
  setTimeout(slideShow, 2000);
}
