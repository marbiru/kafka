// Prints an aphorism as soon as the page is started

$(function(){
  $("#refresh_button").click(function(){
    $("#output").text(print_aphorism());
  });
  // prints an aphorism on mouse-click
  $( "#refresh_button" ).trigger( "click" );

function print_aphorism() {
	document.getElementById("output").innerHTML = aphorisms[Math.floor(Math.random() * aphorisms.length)];
    };

});

// select and print a photo for the pol_image field

var photo_counter = 1;

var photo_array = [
		'<img src="cameron.jpg" alt="David Cameron" height="349" width="366">',
		'<img src="miliband.jpg" alt="Ed Miliband" height="349" width="366">',
		];

var photo = photo_array[photo_counter];

/* '<img src="http://i.imgur.com/cmWb2x8.jpg" alt="David Cameron" height="349" width="366">',
'<img src="http://i.imgur.com/15se11u.jpg" alt="Ed Miliband" height="349" width="366">', */

$(function(){
  $("#refresh_button").click(function(){
  	photo_counter = (photo_counter + 1) % photo_array.length;
  	// photo = photo_array[photo_counter];
    $("#pol_image").prepend(photo_counter);
  });
  // prints an aphorism on mouse-click
  $( "#refresh_button" ).trigger( "click" );

});

/* $(function(){
	$("#refresh_button").click(function(){
		var photo_counter = photo_counter + 1;
		var photo = lemon_array[photo_counter];
		$( "#pol_image" ).text(print_photo());
	});
	$( "#refresh_button" ).trigger( "click" );

function print_photo() {
	document.getElementById("pol_image").innerHTML = photo;
    };

}); */

// on click, the 'photo credits' button slides out the details of any photo credits

$(function(){
	$("#slider_button").click(function(){
		$( "#credits" ).slideToggle( "slow" );
	});
	$( "#slider_button" ).trigger( "click" );
});

$(function(){
	$("#about_button").click(function(){
		$( "#about_zurau" ).slideToggle( "slow" );
	});
	$( "#about_button" ).trigger( "click" );
});