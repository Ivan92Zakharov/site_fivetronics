$(document).ready(function(){

  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#arrow").addClass("vertical");
  }
  else
  {
    $("#arrow").addClass("horizontal");
  }

  $("#arrow").click(function(){
    if ($("#arrow").hasClass("horizontal")) {
      horizontalSwap();
    }
    else{
      verticalSwap();
    }
  });

  $("#left, #right").click(function(){
    $("#arrow").scc("animation", "shake 2s infinite linear");
  });

  function horizontalSwap(){

    if ($("#left").hasClass("yellow")) {
      $("#left").animate({
        left: "50%"
      }, 600);
      $("#right").addClass("yellow").animate({
        left: "+50%"
      }, 600, function(){
      });
      $(".subtitle.left").animate({color: "white"}, 600);
      $(".subtitle.right").animate({color: "black"}, 600);
      $("#left").toggleClass("yellow");
      $("#arrow").css(rotate_arrow('0'));
      $(".text.right, .text.left").toggleClass("text_hide");
    }
    else {
      $("#right").animate({ left: "0%" }, 600, function(){
        $("#left").toggleClass("yellow").css("left","0%");
        $("#right").toggleClass("yellow");
      });
        $(".subtitle.left").animate({color: "black"}, 600);
        $(".subtitle.right").animate({color: "white"}, 600);
        $("#arrow").css(rotate_arrow('180'));
        $(".text.right, .text.left").toggleClass("text_hide");

    }
  }

  function verticalSwap(){
    var lenghtLeft = $("#left.yellow").length;
    var lenghtRight = $("#right.yellow").length;
    if (lenghtLeft > lenghtRight) {
      $("#left").animate({
        top: "50%"
      }, 600);
      $("#right").addClass("yellow").animate({
        top: "+50%"
      }, 600, function(){
      });
      $(".subtitle.left").animate({color: "white"}, 600);
      $(".subtitle.right").animate({color: "black"}, 600);
      $("#left").removeClass("yellow");
      $(".text.right").removeClass("text_hide");
      $("#left").removeClass("yellow");
      $("#arrow").css(rotate_arrow('90'));
    }
    else {
      $("#right").animate({ top: "0%" }, 600, function(){
        $("#left").addClass("yellow").css("top","0%");
        $("#right").removeClass("yellow");
      });
        $(".subtitle.left").animate({color: "black"}, 600);
        $(".subtitle.right").animate({color: "white"}, 600);
        $("#arrow").css(rotate_arrow('270'));
    }
  };

  function shake_arrow(){

  };

  function mega_shake_arrow(){

  };

  function rotate_arrow(grad) {
    var rot = 'rotate('+grad+'deg)';
    return {
      '-webkit-transform': rot,
         '-moz-transform': rot,
          '-ms-transform': rot,
           '-o-transform': rot,
              'transform': rot
    }
  };

});



