function draw() {
  var canvas = document.getElementById('canvas');
  var height = $(document).height();
  var width  = $(document).width();
  
  canvas.height = height;
  canvas.width  = width;

  var ctx = canvas.getContext('2d');
  // draw circle
  ctx.beginPath();
  ctx.fillStyle="black";
  ctx.arc(100,20,10,0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
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


