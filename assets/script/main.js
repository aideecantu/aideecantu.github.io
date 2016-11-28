$(document).ready(function(){

$('#about-button').click(function() {
    $('.about-container').fadeIn(1000);
    $('.n-background').hide();
    $('.contact-container').hide();
     $('.why-me-container').hide();
  });

  $('#contact-button').click(function() {
    $('.contact-container').fadeIn(1000);
    $('.n-background').hide();
    $('.about-container').hide();
    $('.why-me-container').hide();

  });

  $('#why-button').click(function() {
    $('.why-me-container').fadeIn(1000);
    $('.n-background').hide();
    $('.about-container').hide();
    $('.contact-container').hide();
  });
});