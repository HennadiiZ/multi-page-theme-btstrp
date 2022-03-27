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