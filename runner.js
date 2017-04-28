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
let pemain = [
  {nama : 'e', posisi : 0},
  {nama : 'r', posisi : 0},
  {nama : 'n', posisi : 0}
]
let test = new JSRacer (pemain,50)

while (!test.finished()) {
  sleep(500)
  test.print_board()

  //reset_board()
}
console.log(" the winner is : "+test.winner());
