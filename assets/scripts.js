function draw() {
  var canvas = document.getElementById('canvas');
  var height = $(document).height();
  var width  = $(document).width();
  
  canvas.height = height;
  canvas.width  = width;

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY
  }, false);
  var ctx = canvas.getContext('2d');
}

$(function(){
  if($(window).width() >= 590) {
    $(".typed-section").typed({
      strings: ["Developer", "Coffee-Addict", "Dog-Lover", "Free-Thinker", "Nature-Enthusiast"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  }

  draw();
});


