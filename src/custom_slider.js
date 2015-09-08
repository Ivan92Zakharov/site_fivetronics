$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    navSpeed: 800,
    navText: ["",""]
    // animateOut: "slideInRight"
  });

  $(".owl-item").css("height", $(window).height());
  $(window).resize(function(){
    $(".owl-item").css("height", $(window).height());
  });
  $(".owl-next").addClass("fa fa-angle-right fa-5x");
  $(".owl-prev").addClass("fa fa-angle-left fa-5x");

  $(".owl-next, .owl-prev").click(function(){
    if ($(".active").children(".customItem").hasClass("direct")){
      $(".fa-angle-left, .fa-angle-right").addClass("inverse");
      $("#baz").attr("src","/images/logo-in.png");
    }
    else{
      $(".fa-angle-left, .fa-angle-right").removeClass("inverse");
      $("#baz").attr("src","/images/logo.png");
    }
  });
  // var owl = $('.owl-carousel');
  // owl.on('prev.owl.carousel', function(event){
  //   animateOut: "slideInRight"
  //   console.log('Hello!!!');
  // });


});


// owl-prev
// owl-next
