/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
      Swipper Slider Activation
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  nextButton: '.swipe-prev',
  prevButton: '.swipe-next',
  pagination: {
    el: '.swiper-pagination',
   
  },

  // Navigation arrows

  navigation: {
    nextEl: '.swipe-next',
    prevEl: '.swipe-prev',
  },
  breakpoints: {  
    '480': {
      slidesPerView: 1,
      spaceBetween: 40,},
    '768': {
      slidesPerView: 2,
      spaceBetween: 50, },
    '992': {
        slidesPerView: 2,
        spaceBetween: 50, },
        '1366': {
          slidesPerView: 3,
          spaceBetween: 50, },
  },
});
