// Prints an aphorism as soon as the page is started

var aphorism_counter = 0

var aphorism = aphorism_array[aphorism_counter];

$(function(){
  $("#refresh_button").click(function(){
    $("#output").text(print_aphorism());
  });
  // prints an aphorism on mouse-click
  $( "#refresh_button" ).trigger( "click" );

// This still needs to be replaced with jQuery, not javascript
	function print_aphorism() {
		aphorism_counter = (aphorism_counter + 1) % aphorism_array.length;
		aphorism = aphorism_array[aphorism_counter];
		// for some reason this seems to start with aphorism_counter = 2, though that doesn't really matter since the aphorism-list gets shuffled.
		document.getElementById("output").innerHTML = aphorism;
    	};

});

// select and print a photo for the pol_image field

var photo_counter = Math.floor(Math.random() * photo_array.length);

var photo = photo_array[photo_counter];

$(function(){
  $("#refresh_button").click(function(){
  	photo_counter = (photo_counter + 1) % photo_array.length;
  	photo = photo_array[photo_counter];
    $("#pol_image").html(photo);
  });
  // prints an aphorism on mouse-click
  $( "#refresh_button" ).trigger( "click" );

});

// on click, the 'photo credits' button slides out the details of any photo credits

$(function() {
	$("#slider_button").click(function() {
		$("#credits").slideToggle("slow");
	});
});

$(document).ready(function() {
	$("#about_button").click(function() {
		$("#about_zurau").slideToggle("slow");
	});
});
