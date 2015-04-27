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