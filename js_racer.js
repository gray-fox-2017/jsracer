"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.player = "abcdefghijklm".split("");
    this.pos = this.start_position();
    this.finish = false;
    this.winner = "";
  }
  start_position() {
    let pos = [];
    for (let i = 0; i < this.players; i++) {
      pos.push(0);
    }
    return pos;
  }
  print_board() {
    let random = new Dice();
    for (let i = 0; i < this.players; i++) {
      console.log("finish ??",this.finished());
      console.log("posisi >>> ", this.pos[i]);
      console.log(this.print_line(this.player[i], this.pos[i]));
      let randomStep = random.roll();
      this.pos[i] += randomStep;
      if (this.pos[i] >= this.length) {
        this.finish = true;
        console.log("yang menang" + this.player[i]);
        this.winner = this.player[i];
      } else {
        this.finish = false;
      }
    }
  }
  print_line(player, pos) {
    let lineArr = [];
    for (let i = 0; i < this.length; i++) {
      lineArr.push(" |");
    }
    if (pos >= this.length) {
      lineArr[this.length] = player + "";
    } else {
      lineArr[pos] = player + "|";
    }
    return lineArr.join("");
  }
  advanced_player(player) {

  }
  finished() {
    return this.finish === true;
  }
  winner() {
    return this.winner;
  }
  reset_board() {
    console.log("\x1B[2J");
  }
}

export default JSRacer

// Test
