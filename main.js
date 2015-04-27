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

