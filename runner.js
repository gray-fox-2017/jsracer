"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

let player = new JSRacer(['a','b','c','d','e','f'],30);
sleep(1000);

// Initialize game
player.reset_board();
player.print_board();
sleep(3000);

// Play the game
while (player.finished()===false) {
  player.reset_board();
  player.advanced_player();
  sleep(500);
  player.finished();
}

//Congratulate the winner
player.winner();

