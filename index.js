$(function() {
  if ($(window).width() < 768) {
    $("#tabs-web").removeClass("sticky-top-tabs");
  } else {
    $("#tabs-web").addClass("sticky-top-tabs");
  }
});

$(function() {
  $(".tab-item").click(function(event) {
    if ($(window).width() < 768) {
      var id = event.currentTarget.id;
      console.log(id);
      var div = $("#" + id + "-row");
      $(".mob-on").toggleClass("mob-off");
      $(".mob-on").toggleClass("mob-on");
      div.toggleClass("mob-off");
      div.toggleClass("mob-on");

      $(".selected").toggleClass("selected");
      $("#" + id).toggleClass("selected");

      $(".blue").addClass("unselected");
      $(".white").removeClass("unselected");
      $("#" + id + " > .white").toggleClass("unselected");
      $("#" + id + " > .blue").toggleClass("unselected");

      switch (id) {
        case "ctp":
          $(".section-header").empty();
          $(".section-header").html("Computers, Phones & Tablets");
          break;
        case "tvp":
          $(".section-header").html("TV's & Players");
          break;
        case "consoles":
          $(".section-header").html("Consoles");
          break;
        case "smarthome":
          $(".section-header").html("Smart Home Devices");
          break;
        default:
          break;
      }
    } else {
      location.href = "#device-grid";
    }
  });
});

$(function() {
  $(".device").click(function(event) {
    if ($(window).width() < 768) {
      $(".dropdown").css("opacity", "0");
      $(".dropdown").css("z-index", "-1000");
      $(this)
        .children("div.dropdown")
        .css("opacity", "1");
      $(this)
        .children("div.dropdown")
        .css("z-index", "1000");
    }
  });
});

var terms = $("ul li");

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;

  // console.log(terms.eq([ct]).text());

  $("#rotate")
    .data("term", ct == terms.length - 1 ? 0 : ct + 1)
    .text(terms.eq([ct]).text())
    .fadeIn()
    .delay(2000)
    .fadeOut(200, rotateTerm);
}
$(rotateTerm);

// $('.slider-slick').slick({
// centerMode:true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // centerPadding: '1000px',
//     dots: false,
//     arrows: false,
//     infinite: false,
//     // cssEase: 'linear',
//     variableWidth: true,
//     variableHeight: true
// });

// $('.col1').hover(()=>{
//   $('#ctp > p').toggleClass('selected-text')
// }, null)

// function goToByScroll(div) {
//   // Scroll
//   console.log()
//   if($(window).width() < 768){
//     console.log(div.position());
//     $('html,body').animate({
//       scrollTop: div.position().top - 151
//     }, 'slow');
//   }
// }
