let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardID;
function checkForMatch() {
		if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else
			console.log("Sorry, try again.")
	}
}
function flipCard(cardID) {
	cardsInPlay.push(cards[cardID]);
	console.log("User flipped " + cards[cardID]);
	checkForMatch();
}
flipCard(0);
flipCard(2);