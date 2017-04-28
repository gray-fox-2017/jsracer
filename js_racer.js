"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players=0, length=5) {
    this.players = players;
    this.length = length;

  }
  print_board() {
    let playerArr = ("abcdefghijklmnopqrstuvwxyz").split("");
    for (let i = 0; i < this.players; i++) {
      this.print_line(this.advanced_player(playerArr[i]), 0);
    }
  }
  print_line(player, pos) {
    this.player = player;
    this.pos = pos;

    let displayBoard = [];
    for (let i = 0; i < this.length; i++) {
      displayBoard.push(" |");
    }
    
    displayBoard.splice(this.pos,0, " "+this.player);
    let line = displayBoard.join("");
    console.log(line);
  }
  advanced_player(player) {
    this.player = player;
    return this.player;
  }
  finished() {


  }
  winner() {
    if (this.pos > this.length) {
      return true;
    } else {
      return false;
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer

// Test
let game = new JSRacer(2, 10);
console.log(game.advanced_player());





















// console.log(getRandom.roll());
