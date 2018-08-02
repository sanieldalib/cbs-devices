$('img.svg').each((i, e) => {

 const $img = $(e);

 const imgID = $img.attr('id');

 const imgClass = $img.attr('class');

 const imgURL = $img.attr('src');

 $.get(imgURL, (data) => {
     // Get the SVG tag, ignore the rest
     let $svg = $(data).find('svg');

     // Add replaced image's ID to the new SVG
     if (typeof imgID !== 'undefined') {
         $svg = $svg.attr('id', imgID);
     }
     // Add replaced image's classes to the new SVG
     if (typeof imgClass !== 'undefined') {
         $svg = $svg.attr('class', `${imgClass}replaced-svg`);
     }

     // Remove any invalid XML tags as per http://validator.w3.org
     $svg = $svg.removeAttr('xmlns:a');

     // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
     if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
         $svg.attr(`viewBox 0 0  ${$svg.attr('height')} ${$svg.attr('width')}`);
     }

     // Replace image with new SVG
     $img.replaceWith($svg);
 }, 'xml');
});

$(function(){
  if($(window).width() < 768){
    $('#tabs-web').removeClass('sticky-top-tabs')
  } else {
    $('#tabs-web').addClass('sticky-top-tabs')
  }
});

$(function(){
  $('.tab-item').click(function(event){
    if($(window).width() < 768){
      var id = event.currentTarget.id;
      console.log(id);
      var div = $("#" + id + "-row");
      $('.mob-on').toggleClass('mob-off');
      $('.mob-on').toggleClass('mob-on');
      div.toggleClass('mob-off');
      div.toggleClass('mob-on');

      $('.selected').toggleClass('selected');
      $('#' + id ).toggleClass('selected');

      $('.blue').addClass('unselected');
      $('.white').removeClass('unselected');
      $('#' + id + " > .white").toggleClass('unselected');
      $('#' + id + " > .blue").toggleClass('unselected');

      switch (id){
        case 'ctp':
        $('.section-header').empty();
        $('.section-header').html('Computers, Phones & Tablets');
        break;
        case 'tvp':
        $('.section-header').html('TV\'s & Players');
        break;
        case 'consoles':
        $('.section-header').html('Consoles');
        break;
        case 'smarthome':
        $('.section-header').html('Smart Home Devices');
        break;
        default: break;
      }
    } else {
      location.href = "#anchor";
    }
  });
});

var terms = $("ul li");

function rotateTerm() {

  var ct = $("#rotate").data("term") || 0;

  // console.log(terms.eq([ct]).text());

  $("#rotate").data("term",
  ct == terms.length -1 ? 0 : ct + 1).text(terms.eq([ct]).text())
  .fadeIn().delay(2000).fadeOut(200, rotateTerm);

}
$(rotateTerm);

$('.slider-slick').slick({
centerMode:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: '1000px',
    dots: false,
    arrows: false,
    infinite: false,
    // cssEase: 'linear',
    variableWidth: true,
    variableHeight: true
});

$('.col1').hover(()=>{
  $('#ctp > p').toggleClass('selected-text')
}, null)

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
