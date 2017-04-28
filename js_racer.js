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
      if(j == Math.round(this.length/4)) line[j] = '|o'
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
    console.log(board = board.join(''));
    return board;
  }
  advanced_player(player) {
    let dice = new Dice();
    let step = this.player[player].step;
    step = dice.roll();
    return step;
  }
  boost(player) {
    let step = this.player[player].step;
    let pos = this.player[player].position;
    if(pos == Math.round(this.length/4)) {
      step = step + 2;
      console.log(this.player[player].name + ' get boosted!');
    }
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
        this.print_board()
        console.log(`Player ${this.player[i].name} win!`);
        return;
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
