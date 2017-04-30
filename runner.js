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

// Your code here...
let game = new JSRacer(10, 20);

game.reset_board();
game.print_board_start();
sleep(10000);

while (game.winner() == undefined) {
  game.reset_board();
  game.print_board();
  sleep(10000);
}
console.log(`yang menang ${game.winner()}`);
