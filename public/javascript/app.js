$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

  var index = 0, time = 3000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}
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
function Show1() {
  var x = document.getElementById('show1_events');
  var sb=document.getElementById('show1_button');
  sb.style.display='none';
  var hb=document.getElementById('hide1_button');
  hb.style.display='block';
  x.style.display='block';
}
Show1()
function Hide1()
{
  var x = document.getElementById('show1_events');
  var sb=document.getElementById('show1_button');
  sb.style.display='block';
  var hb=document.getElementById('hide1_button');
  hb.style.display='none';
  x.style.display='none';
}
Hide1()
function Show2() {
  var x = document.getElementById('show2_events');
  var sb=document.getElementById('show2_button');
  sb.style.display='none';
  var hb=document.getElementById('hide2_button');
  hb.style.display='block';
  x.style.display='block';
}
Show2()
function Hide2()
{
  var x = document.getElementById('show2_events');
  var sb=document.getElementById('show2_button');
  sb.style.display='block';
  var hb=document.getElementById('hide2_button');
  hb.style.display='none';
  x.style.display='none';
}
Hide2()
function Show3() {
  var x = document.getElementById('show3_events');
  var sb=document.getElementById('show3_button');
  sb.style.display='none';
  var hb=document.getElementById('hide3_button');
  hb.style.display='block';
  x.style.display='block';
}
Show3()
function Hide3()
{
  var x = document.getElementById('show3_events');
  var sb=document.getElementById('show3_button');
  sb.style.display='block';
  var hb=document.getElementById('hide3_button');
  hb.style.display='none';
  x.style.display='none';
}
Hide3()
