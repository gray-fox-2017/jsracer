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
let race = new JSRacer(['a', 'b', 'c'], 40);


let hitung = 1;
while(race.finished() !== true) {
  console.log(`Turn ${hitung}`)
  for(let j = 0; j < race.player.length; j++) {
    let step = race.advanced_player(j);
    // console.log(step)
    race.player[j].position = race.player[j].position + step;
    let pos = race.player[j].position
    if(pos > race.length - 1) pos = race.length;
    // console.log(pos)
    race.print_line(j, pos);
    console.log(race.print_board())
  }
  // race.reset_board();
  race.winner();
  hitung++;
}
