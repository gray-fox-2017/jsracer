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
let player = new JSRacer(['a','b','c'],20);
while (player.finished()===false) {
    player.advanced_player();
    player.finished();
}
player.winner();

