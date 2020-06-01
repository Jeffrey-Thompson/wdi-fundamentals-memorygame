const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}];
let cardElement;
let cardsInPlay = [];
let cardID;
let score = 0;
function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			score++;
			document.getElementById('score').innerHTML = score;
		} else
			alert("Sorry, try again.")
	}
};
function flipCard() {
	let cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	this.setAttribute('src', cards[cardID].cardImage);
	checkForMatch();
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		//creates cardElement and sets to img type
		var cardElement = document.createElement('img');
		//sets cardElement attributes to image sorce 
		cardElement.setAttribute('src', 'images/back.png');
		//gives cardElement a id
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		//appends cardElement to game-board
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

document.getElementById('button').addEventListener('click', reset);

function reset() {
	document.getElementById('game-board').innerHTML = "";
	cardsInPlay = [];
	createBoard();
}