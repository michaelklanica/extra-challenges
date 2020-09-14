"use strict";

var simonSequence = [];
var playerSequence = [];

function simonTurn(sequence) {
    console.log(sequence);
    sequence.forEach(function(color) {
        if (color === 0) {
            $('#red-button').fadeOut(1000).fadeIn(1000).delay(1000);
        } else if (color === 1) {
            $('#yellow-button').fadeOut(1000).fadeIn(1000).delay(1000);
        } else if (color === 2) {
            $('#blue-button').fadeOut(1000).fadeIn(1000).delay(1000);
        } else {
            $('#green-button').fadeOut(1000).fadeIn(1000).delay(1000);
        }
    })
}

// function playerTurn() {
//     var playerChoice = $('.game-button').click(function () {
//         $(this).fadeOut(200);
//         $(this).fadeIn(200);
//         if (playerChoice === 0) {
//             playerSequence.push(0)
//         } else if (playerChoice === 1) {
//             $('#yellow-button').fadeOut(1000).fadeIn(1000).delay(1000);
//         } else if (playerChoice === 2) {
//             $('#blue-button').fadeOut(1000).fadeIn(1000).delay(1000);
//         } else {
//             $('#green-button').fadeOut(1000).fadeIn(1000).delay(1000);
//         }
//
//         console.log(playerChoice)
//     })
//
// }


function gamePlay() {
    var simonSequence = [];
    var playerSequence = [];
    var gameTurn = 1;
    var randomColor

    for (var i = 0; i < gameTurn; i++) {
        // Simon's turn
        randomColor = Math.floor(Math.random() * 4);
        simonSequence.push(randomColor);
        simonTurn(simonSequence);
        // playerTurn();






    }
}

gamePlay();

