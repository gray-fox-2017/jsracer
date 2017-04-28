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
let players = [
  {name: 'A', posisi: 0},
  {name: 'B', posisi: 0},
  {name: 'C', posisi: 0}
 ]

let game = new JSRacer(players,20);

while(!game.finished()){
  game.print_board();
  sleep(1000);
}
console.log(game.winner());

console.log(game.players[0].posisi);
console.log(game.players[1].posisi);
console.log(game.players[2].posisi);




// Your code here...
