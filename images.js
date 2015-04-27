var counter_for_photos = 0

var photo_array = [
<img src="http://i.imgur.com/cmWb2x8.jpg" alt="David Cameron" height="349" width="366">,
<img src="http://i.imgur.com/15se11u.jpg" alt="Ed Miliband" height="349" width="366">,
<img src="http://i.imgur.com/S3DMtjm.jpg" alt="David Cameron">,
<img src="http://i.imgur.com/kph89Wo.jpg" alt="Ed Miliband">,
];

// changes the photo of the politician on 

$(function(){
  $("#refresh_button").click(function(){
    $("#pol_image").html(<img src="http://i.imgur.com/cmWb2x8.jpg" alt="David Cameron" height="349" width="366">);
  });
  // prints an aphorism on mouse-click
  $( "#refresh_button" ).trigger( "click" );