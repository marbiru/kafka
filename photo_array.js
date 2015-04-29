var photo_array = [
		'<img src="cameron.jpg" alt="David Cameron" height="366" width="366">',
		'<img src="miliband.jpg" alt="Ed Miliband" height="366" width="366">',
		'<img src="cameron2.jpg" alt="David Cameron" height="366" width="366">',
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

shuffle(photo_array);

/* '<img src="http://i.imgur.com/cmWb2x8.jpg" alt="David Cameron" height="349" width="366">',
'<img src="http://i.imgur.com/15se11u.jpg" alt="Ed Miliband" height="349" width="366">', */