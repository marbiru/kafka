// Written in jquery

// Prints an aphorism as soon as the page is started

$(function(){
  $("#output").text(print_aphorism());

  // Prints new aphorism when Refresh button is clicked

  $("#refresh_button").click(function(){
    $("#output").text(print_aphorism());
  });

function print_aphorism() {
	document.getElementById("output").innerHTML = aphorisms[Math.floor(Math.random() * aphorisms.length)]
    };

});