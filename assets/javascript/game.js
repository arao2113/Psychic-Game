// Create an array that lists all options
var letterGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to keep scores
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessesSoFar = [];

// This function is run whenever user enters a key
document.onkeyup = function(event) {

    // Determines which key was pressed
    var userGuess = event.key;

    // Randomly chooses a letter from the array
    var computerGuess = letterGuess[Math.floor(Math.random() * letterGuess.length)];

    // This logic will determine if user guess is identical to cpu guess
    if (userGuess === computerGuess){
        wins++;
        guessLeft = 9;
        guessesSoFar = [];
    }

    else {
        guessLeft--;
        guessesSoFar.push(userGuess);
    }

    if (guessLeft === 0) {
        losses++;
        guessLeft = 9;
        guessesSoFar = [];
    }
    
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessLeft + "</P>" +
    "<p>Your guesses so far: " + guessesSoFar + "</p>";

    document.querySelector(".stats").innerHTML = html;
};