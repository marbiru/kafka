// Written in jquery

// Prints an aphorism as soon as the page is started

$(function(){
  $("#refresh_button").click(function(){
    $("#output").text(print_aphorism());
  });
  $( "#refresh_button" ).trigger( "click" );


function print_aphorism() {
	document.getElementById("output").innerHTML = aphorisms[Math.floor(Math.random() * aphorisms.length)]
    };

});

$( "button" ).click(function() {
  $( "#credits" ).slideToggle( "slow" );
});
