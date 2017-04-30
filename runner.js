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
let abc = new JSRacer(3,30);
abc.reset_board();
console.log("Welcome Participant and Spectators\n               to                \n         HACKTIV8 GRANPRIX\n___________________________________\n");
sleep(500);
abc.print_start();
while (abc.finished() != true) {
  sleep(500);
  abc.reset_board();
  abc.print_board();
}
