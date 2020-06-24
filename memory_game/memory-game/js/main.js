const cards = [
{
rank: "queen1",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen2",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king1",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king2",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
{
rank: "queen1",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen2",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king1",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king2",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}];

let cardsInPlay = [];
let cardID;
let score = 0;
let ranNums = [];

for (let i = 0; i < cards.length; i++) {
	ranNums.push(i);
};

//Fisher-Yates Shuffle function
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
};

shuffle(ranNums);
console.log(ranNums);

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			//document.getElementById('message').innerHTML = "You found a match!\nBoard Shuffled!";
			alert("You found a match!\nBoard Shuffled!");
			score++;
			document.getElementById('score').innerHTML = score;
			reset();	
		} else
			//document.getElementById('message').innerHTML = "Sorry, try again.\nHide Cards?";
			alert("Sorry, try again.\nHide Cards?")
			document.getElementById('game-board').innerHTML = "";
			cardsInPlay = [];
			createBoard();
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
		let cardElement = document.createElement('img'); 
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', ranNums[i]);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

document.getElementById('button').addEventListener('click', reset);
document.getElementById('scoreReset').addEventListener('click', zeroScore);

function reset() {
	document.getElementById('game-board').innerHTML = "";
	document.getElementById('message').innerHTML = "";
	cardsInPlay = [];
	createBoard();
	shuffle(ranNums);
	console.log(ranNums);
};

function zeroScore() {
	score = 0;
	document.getElementById('score').innerHTML = score;
};
