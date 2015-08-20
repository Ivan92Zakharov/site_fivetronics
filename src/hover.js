$("body").mousemove(function(e){
  var X = e.pageX; // положения по оси X
  var Left = $(window).width()/2;
  // alert('Вы двинули мышью! С вас 3 доллара за оказанные услуги ясновидения.'+ Left);
  if (X < Left){
    $("#right").removeClass("yellow");
    $("#left").addClass("yellow");
  } else {
    $("#left").removeClass("yellow");
    $("#right").addClass("yellow");

  }

});

// $("a.left").mousemove(function (e) {
//   this.addClass("foo");
// })
