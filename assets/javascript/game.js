// other global vars =================================================

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userPick = [];

// letter selection =================================================

var theAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
	"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// computer randomly chooses a letter ==================================================

var computerPick = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];


document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess ===============================
	var userPick = String.fromCharCode(event.keyCode).toUpperCase();

	// log user's picks, decrement guesses left for wrong matches
	if (guessesSoFar.indexOf(userPick) < 0 && theAlphabet.indexOf(userPick) >= 0) {
		guessesSoFar[guessesSoFar.length]=userPick;
		guessesLeft--;
	}

	// user gains a win for every letter matched, reset the game ============================
	if (computerPick == userPick) {
		wins++;
		guessesLeft = 10;
		guessesSoFar = [];
		computerPick = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
	}

	// when no more guesses left, reset game ====================================
	if (guessesLeft == 0) {
		losses++;
		guessesLeft = 10;
		guessesSoFar = [];
		computerPick = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];
	}

	// Displaying progress to html
	var html = "<h1>The Psychic Game</h1>" + "<h3>Guess what letter I\'m thinking of</h3>" +
		"<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>" + "<h3>Guesses Left: "
		+ guessesLeft + "</h3>" + "<h3>Your guesses so far: " + guessesSoFar + "</h3>";
	document.querySelector("#game").innerHTML = html;

}