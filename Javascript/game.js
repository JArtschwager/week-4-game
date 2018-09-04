

var wins = 0;
var losses = 0;
var addingScore = 0;
var randomCompNumbers = [];
var goalNumber = 0;


function newGame() {
    // set initial random number for the game
    goalNumber= Math.floor(Math.random() * (50-25+1)+25);
    console.log(goalNumber);

    // calculating the jem values
    randomCompNumbers= [];
    addingScore= 0;
    //above - array back to empty before the new game.
    for (i = 0; i < 4; i++) {
        var newRand= Math.floor(Math.random() * (12-1+1)+1);
        randomCompNumbers.push(newRand);
    }
    console.log(randomCompNumbers);

    $(".goalnumber").text(goalNumber);
    $("#totalScore").text(addingScore);
    $(".winsValue").text(wins);
    $(".lossValue").text(losses);
    $(".congrats").hide();
    $(".failure").hide();
    $(".jemsToClick").show();


}

function addValue(jemID) {
    addingScore += randomCompNumbers[jemID];
    $("#totalScore").text(addingScore);
    console.log(`addingScore: ${addingScore}, jemID: ${jemID}, jemValue: ${randomCompNumbers[jemID]}`);
    // console.log(addingScore);
    // console.log("jemID");
    // console.log(jemID);
    // console.log("jemValue");
    // console.log(randomCompNumbers[jemID]);
    if (addingScore === goalNumber) {
        youWin();
    } else {
       if (addingScore > goalNumber) {
            youLose();
        }
    }
}

function youWin() {
    wins += 1;
    $(".congrats").show();
    $(".jemsToClick").hide();
    setTimeout(function() {
        newGame();
    }, 3000);
}
function youLose() {
    losses += 1;
    $(".failure").show();
    $(".jemsToClick").hide();
    setTimeout(function() {
        newGame();
    }, 3000);
}



    //do the on click for each jem
    $(".blueJem").click(function() {
        addValue(0);
    });

    $(".greenJem").click(function() {
        addValue(1);
    });
    $(".orangeJem").click(function() {
        addValue(2);
    });
    $(".purpleJem").click(function() {
        addValue(3);
    });


//call the new game.
newGame()