"use strict"

import JSRacer from "./js_racer"
import Dice from "./dice.js"


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
<<<<<<< HEAD
let game = new JSRacer(5, 20);

console.log(game);
while (!game.finished()) {
  game.reset_board();
  game.print_board();
  sleep(10000);
}
console.log(`yang menang ${game.winner}`);
console.log(game);
=======

let game = new JSRacer(2, 20);
// console.log(game.advanced_player("a"));;
game.print_board();
game.print_board();
game.print_board();
// let count = 7;
// while (count > 0) {
//   game.reset_board();
//   game.print_board();
//   count -= 1;
//   sleep(1000);
// }
>>>>>>> d3bab7616e16659b635b89e5f96c53e0c6df370c
