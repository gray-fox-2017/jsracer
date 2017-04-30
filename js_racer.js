"use strict"

import Dice from "./dice.js"


class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.player = this.generate_players();
    this.pos = this.start_position();
    this.finish = false;
    this.winnerPlayers = [];
  }

  start_position() {
    let pos = [];
    for (let i = 0; i < this.players; i++) {
      pos.push(0);
    }
    return pos;
  }

  generate_players() {
    return "abcdefghijklm".split("");
  }

  print_board_start() {
    for (let i = 0; i < this.players; i++) {
      console.log(this.print_line(this.player[i], this.pos[i]));
      }
    }

  print_board() {
    let random = new Dice();
    for (let i = 0; i < this.players; i++) {
      let randomStep = random.roll();
      this.pos[i] += randomStep;
      console.log(this.print_line(this.player[i], this.pos[i]));
      if (this.pos[i] >= this.length) {
        this.finish = true;
        this.winnerPlayers.push(this.player[i]);
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
    return this.winnerPlayers[0];
  }

  reset_board() {
    console.log("\x1B[2J");
  }
}

export default JSRacer

// Test
