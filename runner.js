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
var race = new JSRacer([{nama:'a',pos:0},{nama:'b',pos:0},{nama:'c',pos:0}],30);


while(!race.finished()){
race.print_board();
// console.log(race.players[0].pos);
// console.log(race.players[1].pos);
// console.log(race.players[2].pos);
sleep(1000);
}
console.log(`the Winner ${race.winner()}!`)
