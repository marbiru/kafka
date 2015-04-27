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
		'<img src="http://i.imgur.com/cmWb2x8.jpg" alt="David Cameron" height="349" width="366">',
		'<img src="http://i.imgur.com/15se11u.jpg" alt="Ed Miliband" height="349" width="366">',
		];

$('#pol_image').prepend(photo_array[photo_counter]);  

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