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

// Your code here..
let myRace = new JSRacer(['a','b','c'], 20)

let step = 0
while (!myRace.finished()){
  myRace.reset_board()
  if (step==0){
    console.log(myRace.start_board())
  } else {
    console.log(myRace.print_board())
  }
  sleep(500)
  step++
}
console.log(myRace.winner())
