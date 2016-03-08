
var wins = 0
var losses = 0
var CurrentwordArray =[]
var guessesLeft= 10;
var pastGuesses= []


words = ["usa", "england", "brazil", "ireland", "france", "russia", "chile", "china", "japan", "mexico", "germany", "canada", "algeria", "lebanon", "kenya", "italy", "greenland", "honduras","greece", "zambia" ]

$('#inputLetter').hide();

$('#start').on('click', function () {
	currentWord= words[Math.floor(Math.random() * words.length)];
	console.log(currentWord);
	$('#inputLetter').show();
	$('#start').hide();




for (var i = 0; i < currentWord.length; i++) {
    $("#displayWord").append("_");
    }
 
 

});
// //initializes the GuessesSoFar variable
// var GuessesSoFar= []; 

// //sets up the user's guesses
// 	document.onkeyup = function(event) {
// 	    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();  //makes the user's guess lowercase
		

