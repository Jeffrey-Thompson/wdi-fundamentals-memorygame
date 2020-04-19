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
let cardsInPlay = [];
let cardID;
function checkForMatch() {
	this.setAttribute('src', cards[cardID].cardImage);
		if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else
			console.log("Sorry, try again.")
	}
};
function flipCard() {
	let cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	checkForMatch();
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		//creates cardElement and sets to img type
		let cardElement = document.createElement('img');
		//sets cardElement attributes to image sorce 
		cardElement.setAttribute('src', 'images/back.png');
		//gives cardElement a id
		cardElement.setAttribute('data-id', i);
		//appends cardElement to game-board
		document.getElementById('game-board')[0].appendChild(cardElement);
	}
};

cardElement.addEventListener('click', flipCard());

createBoard();