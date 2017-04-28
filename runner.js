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

let main = new JSRacer(['adi','budi','citra','dessy','emillia'], 35);

main.print_board()
console.log(main.print_line());
sleep();

while (main.finished() === false) {
  main.reset_board()
  main.advanced_player();
  console.log(main.print_line());
  sleep();
}

console.log(main.winner());


// Your code here...
