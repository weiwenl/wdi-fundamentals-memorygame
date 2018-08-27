//console.log("Up and running!");

// Memory cards identities
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

//Initialise user input to an empty array
var cardsInPlay = [];

//Check user selected cards for match and display message
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

//When cards are click, this will flip over the cards and display cards value
var flipCard = function() {
  cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
  checkForMatch();
  }
  if (cardsInPlay.length === 4) {
  checkForMatch();
  }
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}

//Setting up memory game board
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

//Reset the game; triggered when button is clicked
var resetGame = function () {
  //Upon button press this function will reset game
  //Set cardsInPlay array to " "
  //Clear cardImage and set it to image/back
  //Or should I remove cardElement
  //Run createBoard()
  for (var i = 0; i < cards.length; i++) {

    cardElement.setAttribute('src', 'images/back.png');

    //cardElement.splice(i, 4);
  }
  cardsInPlay = [];
}

//Start the game for the first time
createBoard();
