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


let test = new JSRacer(["A","B","C","D"],30);

test.init_position();
while(test.finished === false){
  sleep(1000);
  test.finish();
  // console.log(test.finished);
  console.log(test.print_board());
}
