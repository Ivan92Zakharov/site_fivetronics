$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    animateOut: "slideInRight",
    dots: true
  });

  $(".owl-item").css("height", $(window).height());
  $(window).resize(function(){
    $(".owl-item").css("height", $(window).height());
  });
  // var owl = $('.owl-carousel');
  // owl.on('prev.owl.carousel', function(event){
  //   animateOut: "slideInRight"
  //   console.log('Hello!!!');
  // });


});


// owl-prev
// owl-next
