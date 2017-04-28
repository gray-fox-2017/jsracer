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
let race = new JSRacer(['a', 'b', 'c', 'd'], 20);

while(race.finished() !== true) {
  for(let j = 0; j < race.player.length; j++) {
    let step = race.advanced_player(j);
    let boost = race.boost(j);
    race.player[j].position = race.player[j].position + step + boost;
    if(race.player[j].position >= race.length) race.player[j].position = race.length;
    race.print_line(j, race.player[j].position);
    if(race.finished() !== true) {
      race.print_board();
      sleep(500);
      race.reset_board();
    } else break;
  }
  race.winner();
}
