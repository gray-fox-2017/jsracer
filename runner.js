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
let race = new JSRacer(['a', 'b', 'c', 'd'], 40);


let hitung = 1;
while(race.finished() !== true) {
  // console.log(`Turn ${hitung}`)
  for(let j = 0; j < race.player.length; j++) {
    let step = race.advanced_player(j);
    let boost = race.boost(j);
    race.player[j].position = race.player[j].position + step + boost;
    if(race.player[j].position >= race.length) race.player[j].position = race.length;
    // race.boost(j);
    // pos = pos;
    race.print_line(j, race.player[j].position);
  }
  console.log(race.print_board());
  sleep(1000);
  race.reset_board();
  race.winner();
  hitung++;
}
