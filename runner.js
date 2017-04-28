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

let jsracer = new JSRacer (["A","B","C"], 30);
jsracer.print_board()
sleep(2000);
jsracer.reset_board()
jsracer.finished();
