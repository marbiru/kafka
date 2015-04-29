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
