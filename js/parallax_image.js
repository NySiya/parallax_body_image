$(document).ready(function() {
  imageParallax();
});

// $('.parallax').scroll(function(){
//   console.log('khihi');
//   var difference = $(window).scrollTop() - $(this).offset().top;
//   var half = (difference / 2) + 'px';
//   $(this).find('.img-parallax').css('top', half);
// })

$(window).scroll(function(){
  imageParallax();
})

function imageParallax() {
  var parallax = $('.parallax');
  // var difference = $(document).scrollTop() - parallax.offset().top;
  // var half = (difference / 2) + 'px';
  // parallax.find('.img-parallax').css('top', half);
  // console.log($(window).scrollTop() - parallax.offset().top);

  // parallax.find('.img-parallax').css('top', ($(window).scrollTop() - parallax.offset().top) / 2);

  parallax.find('.img-parallax').animate({'top': ($(window).scrollTop() - parallax.offset().top) / 2}, 0, 'linear');

}

// $(function(){
//   $(window).scroll(function(){
//     var parallax = $('.parallax');
    // var difference = $(window).scrollTop() - parallax.offset().top;
    // var half = (difference / 2) + 'px';

    // console.log("parallax: " + parallax.offset().top);
    // console.log("Window: " + $(window).scrollTop());
    // console.log("Difference: " + difference);
    // console.log("Half: " + half);

    // parallax.find('.img-parallax').css('top', $(window).scrollTop() - parallax.offset().top);

    // parallax.find('.img-parallax').animate({'top': half}, 0, 'linear');

    // parallax.find('.img-parallax').animate({
    //   top: half
    // }, {
    //   duration: 0,
    //   step: function( now, fx ) {
    //     parallax.find('.img-parallax').css( "top", now );
    //   }
    // });
//   });
// })
