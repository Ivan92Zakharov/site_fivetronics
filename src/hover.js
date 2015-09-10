$(document).ready(function(){
  // $("div").css("opacity","1");

  $(".image").ready(function(){

    // $(this).css("opacity", "0.7");
  });

  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#arrow").addClass("vertical");
  }
  else
  {
    $("#arrow").addClass("horizontal");
  }


  $("#right > .intro").hover(
    function(){
      $("#right > .image").css("transform", "scale(1.07,1.07)");
    },
    function(){
      $("#right > .image").css("transform", "scale(1.01,1.01)");
    }
  );

 $("#left > .intro").hover(
    function(){
      $("#left > .image").css("transform", "scale(1.07,1.07)");
    },
    function(){
      $("#left > .image").css("transform", "scale(1.01,1.01)");
    }
  );

});



