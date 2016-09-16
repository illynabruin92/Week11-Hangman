//will randomly select a word for the player

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList

lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters
