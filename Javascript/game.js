

//  a random number generates at the begining of the game.
// each crystal represents a number that you can't see.  when you click the cyrstal it will add the worth amount to the total score.
// click on the crystal to get the number that it's worth.
//goal is to match the score to the random number.


// when you win a different random number will appear.
//the jems are different random numbers each time.
// numbers random between 1-12 the guess number is random between 19-120 


//add the points to the board


//goal is to try to match the score to the random number.


// mark wins

//mark lossess

var wins = 0;
var losses = 0;
var randomNumber = 0;
var responseScore = 0;

//place to store numbers
var randomCompNumbers = [];

// functions to use the stored numbers
function newNumbers() {
    for (i = 0; i < 4; i++) {
        var newRand= Math.floor(Math.random() * (12-1+1)+1);
        randomCompNumbers.push(newRand);
    }
    console.log(randomCompNumbers);
 
}


newNumbers()

// $("#wins")
 
// document.getElementById("losses").innerHTML = losses;

function newRound() {
    randomNumber = 0;
    responseScore = 0;
}

if (randomNumber === responseScore) {
    wins += 1;
    // document.getElementById("wins").innerHTML = wins;
    newRound();
}