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
// sleep(1000);

let test = new JSRacer(["A","B","C","D"],30);
console.log(test.print_board());
