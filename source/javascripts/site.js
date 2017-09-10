// This is where it all goes :)

$(document).ready(function(){
  $('.btn-large2').hide();

  $('.btn-large').on('click', function(){
      $('.btn-large2').slideDown( "slow", function() {
        // action at the end of animation
    });
  });
});
