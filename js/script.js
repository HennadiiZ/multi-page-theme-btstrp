$('#year').text(new Date().getFullYear());

//

//init Scrollspy
$('body').scrollspy({target: '#main-nav'}); 
// I dont actually need it here. It works perfectly fine without it


    //add smooth scrolling
    $('#main-nav a').on('click', function(e){
  //check for hash value 
  if(this.hash !== ''){
    //Prevent default behavior
    e.preventDefault();

    // store hash
    const hash = this.hash;

    //Animate smooth scrolling
    $('html, body').animate({
       scrollTop: $(hash).offset().top
    }, 100, function(){
      // Add hash to URL after scroll
      window.location.hash = hash;
    });
  }
})

// carousel
$('.carousel').carousel({
  interval: 2000,
  // keyboard: true,
  // pause: 'hover',
  // wrap: true,
})


// VIDEO MODAL
//Video Play
$(function() {
  //Audio Play modal video 
  $(".video").click(function(){
    let theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr('src', videoSRCauto);
    $(theModal + " button.close").click(function(){
      $(theModal + " iframe").attr('src', videoSRC);
    });
  });
});

// $(function() {
//   $(".video").click(function () {
//     var theModal = $(this).data("target"),
//     videoSRC = $(this).attr("data-video"),
//     videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal + ' button.close').click(function () {
//       $(theModal + ' iframe').attr('src', videoSRC);
//     });
//   });
// });