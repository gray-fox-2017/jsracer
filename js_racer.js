"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = [];
    for(let i = 0; i < players.length; i++) {
      this.player[i] = {};
      this.player[i].name = players[i];
      this.player[i].position = 0;
      this.player[i].step = 0;
    }
    this.length = length;
    this.board = [];
  }
  print_line(player, pos = 0) {
    let line = [];
    for(let j = 0; j <= this.length; j++) {
      line[j] = '| ';
    }
    line[pos] = '|' + this.player[player].name;
    line = line.join('')
    return line;
  }
  print_board() {
    let board = [];
    for(let i = 0; i < this.player.length; i++) {
      board.push(this.print_line(i, this.player[i].position))
      board.push('\n')
    }
    board = board.join('');
    return board
  }
  advanced_player(player) {
    let dice = new Dice();
    let step = this.player[player].step;
    step = dice.roll();
    return step;
  }
  finished() {
    for(let i = 0; i < this.player.length; i++) {
      if(this.player[i].position >= this.length) {
        return true;
      }
    }
  }
  winner() {
    let pemenang = [];
    for(let i = 0; i < this.player.length; i++) {
      if(this.player[i].position >= this.length) {
        pemenang.push(this.player[i].name);
        // return console.log();
      }
    }
    if(pemenang.length > 1) {
      let pemenangs = pemenang.join(' and ')
      return console.log(`Player ${pemenangs} win!`);
    }
    if(pemenang.length > 0) {
      return console.log(`Player ${pemenang} win!`);
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}


// console.log(race.player)
// console.log(race.print_board())
// console.log(race.print_line(this.player[1]))
// console.log(race.print_line(0, 4))
// console.log(race.player.length)
// console.log(race.advanced_player(0))
export default JSRacer
