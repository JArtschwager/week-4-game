<<<<<<< HEAD
# Crystal Collectors 

## Bootstrap, Css, JavaScript, jQuery
---
### A game using Bootstrap with CSS for styling and JavaScript with JQuery for functionality.

* A new game is set with a randomized number being selected by the computer on load. 
* Four random numbers are assigned to each of the crystals by using a for loop with Math.random, pushing 4 numbers into an array.
* The value of each guessed number is added to the user's score.  An if/else statement is used to check if the score is not yet met, has been met, or has gone over.
* Wins or losses are incremented, then a win or loss banner appears for a short period of time using jquery's .show and .hide methods prior to starting the new game.