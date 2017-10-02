// Array of letters for the computer to chose from//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Variables the conputer uses to keep count of
var wins = 0;
var losses =0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];

         // When key is pressed the function runs //
        document.onkeyup = function(event) {
        // Records user guess and stores it as a lowercase letter //
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // Selects random letter from Alphabet Array //
        var computer = alphabet[Math.floor(Math.random()*alphabet.length)];
        // Inserts the key pressed by user into Guessed Letters Array //
        guessedLetters.push(userGuess);
        // If userguess equals computer, then add 1 to the wins, reset guesses left to 9, and delete the guessed letters array //
        if (userGuess == computer) {
        // Add 1 to the wins score //
            wins++;
        // Bring guesses left back to 9 //
            guessesLeft = 9;
        // Delete the letters guessed in the array //
            guessedLetters.length = 0;
        }
        // Then if the guessesleft equal zero //
        else if (guessesLeft == 0){
        // Add 1 to the loss score //
            losses++;
        // Bring guesses left back to 9 in the memory bank //
            guessesLeft = 9;
        // Delete the letters guessed in the HTML array //
            guessedLetters.length = 0;
        }
        // f the userguess does not equal what the computer guessed //
        else if (userGuess !== computer){
        // Bring guesses left down by 1 //
            guessesLeft--;
}
        // Changes to the html file //
        var html = "<p>Total Wins: " + wins + "</p>" +
                   "<p>Total Losses: " + losses + "</p>" +
                   "<p>Guesses Left: " + guessesLeft + "</p>" +
                   "<p>Your Guesses so far: " + guessedLetters + "</p>";
        // Placing the html into the game ID //
        document.querySelector('#game').innerHTML = html;
}

