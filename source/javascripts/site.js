$(document).ready(function(){
  $('.btn-hidden').hide();
  $('.quad').hide();


  var degree = 90;

  $('.btn-large').on('click', function(){
      $('.rotate-at-click').toggleClass('rotated');
      $('.btn-hidden').slideToggle( "slow", "swing", function() {
        // action at the end of animation
    });
  });
});
