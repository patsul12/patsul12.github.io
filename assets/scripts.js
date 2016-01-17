$(function(){
  if($(window).width() >= 590) {
    $(".typed-section").typed({
      strings: ["Developer", "Coffee-Addict", "Dog-Lover", "Free-Thinker", "Nature-Enthusiast"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  }
});
