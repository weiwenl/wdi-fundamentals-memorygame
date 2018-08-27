console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}
var flipCard = function(cardId) {
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
  console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);
