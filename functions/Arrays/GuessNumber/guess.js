// generate a random number between 1 to 100

let randomNumber = Math.floor(Math.random()*100)+1;

let numGuesses = 0;
let currectAnswer;
console.log(randomNumber);

// user to guess a number and store their guess in a variable.
// it takes parseint method to a normal number 

let userGuess = parseInt(prompt("Guess a number between 1 and 100"));


// check if the user has guessed a random number

if (userGuess == randomNumber){
    console.log("congratulations!  you guessed a currect  number");
}else if (userGuess > randomNumber){
    console.log("your guess is too hight, guess again");
    numGuesses++;
}else {
    console.log("Your guess was too low. Guess again.");
    numGuesses++;
  }