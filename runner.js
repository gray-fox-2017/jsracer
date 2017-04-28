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
let game = new JSRacer(['James','Stedy','Dery','Ambo'],76)
game.print_board()
//game.sleep(1500)

// Your code here...
