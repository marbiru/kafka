var aphorism_array = [
"Sin always comes in the open, and available to the senses. It walks on its roots, and need not be torn from the ground.",
"There can be knowledge of evil without believing in it, because there is no more evil than already exists.",
"Only here is suffering suffering. Not because those who suffer in this world will be rewarded in the next, but because in that world Suffering (unchanged and only freed from its opposite) is bliss.",
"The joys of this life are not its own, but our fear of rising to a higher life; the suffering of this life is not its own, but our self-affliction because of that fear.",
"Death hangs before us, much like a painting of Alexander the Great on the schoolroom wall. What we must do, by our actions, is to darken (or efface) the picture in our lifetimes.",
"All human error comes from impatience, from breaking off too early from methodological rigours, superficially fencing in the apparent object.",
"The true Way is along a slackline just above the ground, not a tightrope high in the air. It seems intended more for stumbling than for balancing.",
"Hiding places are many, there is only one salvation, but the possibilities of salvation are as many as the hiding places. There is a destination but no way to get there; what we call the Path is hesitation.",
"There are so many views you can have of anything, even an apple: the view of the little boy who cranes his neck for a glimpse of it on the table; the view of the father who simply grabs it and hands it to his guest at the table.",
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(aphorism_array);