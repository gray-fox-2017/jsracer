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
let play = new JSRacer(3, 20);

while(play.finished() === false) {
  sleep(1100);
  play.reset_board();
  play.print_board();
}
