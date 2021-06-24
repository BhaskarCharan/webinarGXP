// init ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.reveal', {
  origin: 'top',
  duration: 900,
  distance: '20px',
  scale: 1
});

$(function(){
  
  // init smoothScroll
  $('.hero .btn').smoothScroll({
    offset: -20
  })
});