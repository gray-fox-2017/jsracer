"use strict"

import JSRacer from "./js_racer.js"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
let game = new JSRacer(['a', 'b', 'c'], 30);
while (game.finish == false){
  game.reset_board();
  game.print_board();
  sleep(1000);
}
