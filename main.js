// Written in jquery

// Makes the "Refresh" button print a new aphorism

// Prints an aphorism as soon as the page is started

$(function(){
  $("#output").text("Testing testing");

  // Prints new aphorism when Refresh button is clicked

  $("#refresh").click(function(){
    $("#output").text("Refresh succesful!");
  });

});
