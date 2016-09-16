// Constructor file
// will contain all the methods which will check the letters guessed vs. the random word selected

// checkLettesr() function
// It's where we will do all of the comparisons for matches.
function checkLetters(letter) {

	var letterInWord = false; // this boolean will be toggled based on whether or not a user letter is found anywhere in the word

	// Check if a leter exists inside the array at all.
	for (var i=0; i<numBlanks; i++) {
		if(chosenWord[i] == letter) {
			letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step.
 		}
	}

	// If the letter exists somewhere in the word, then figure out exactly where (which indices)
	if(letterInWord){

		// loop through the word
		for (var i=0; i<numBlanks; i++){

			// Populate the blanksAndSuccesses with every instance of the letter.
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
			}
		}
		console.log(blanksAndSuccesses); // logging for testing
	}
	// If the letter doesn't exist at all...
	else {
		wrongGuesses.push(letter); // then we add the letter to the list of wrong letters
		numGuesses--; // and we subtract one of the guesses
	}
}
