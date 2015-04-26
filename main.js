// Written in jquery

// list of aphorisms

var aphorisms = [
"Sin always comes in the open, and available to the senses. It walks on its roots, and need not be torn from the ground.",
"There can be knowledge of evil without believing in it, because there is no more evil than already exists.",
"Only here is suffering truly suffering. Not because those who suffer in this world are to receive anything in the next, but because what in this world is Suffering in another world is (unchanged and only freed from its opposite) bliss.",
"The joys of this life are not its own, but our fear of rising to a higher life; the suffering of this life is not its own, but our self-affliction because of that fear.",
"Death hangs before of us, much as the schoolroom wall held a painting of Alexander the Great at war. What we must do, by our actions, is to darken (or even efface) the picture in our lifetimes.",
];

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