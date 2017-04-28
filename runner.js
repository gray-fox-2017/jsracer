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
let race = new JSRacer(10,20);


race.reset_board();
race.print_board();
sleep(3000);
while (race.winner === null) {
  race.reset_board();
  race.advanced_players();
  sleep(5000000000000000);
}
race.showWinner();
