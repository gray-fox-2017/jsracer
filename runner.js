"use strict"

import JSRacer from "./js_racer"
import Dice from "./dice.js"


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
let game = new JSRacer(2, 20);
let dice = new Dice();
let step = 0;
let count = 7;
while (count > 0) {
  step += dice.roll();
  game.reset_board();
  game.print_line("a");
  game.print_board();
  count -= 1;
  sleep(1000);
}
