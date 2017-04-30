"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.contributor = [
      {name:'Andrew', position:0},
      {name:'Bryan', position:0},
      {name:'Charles', position:0}
    ]
  }
  print_start() {
    for (let j = 0; j<this.players; j++) {
        console.log(this.print_line(this.contributor[j].name[0],this.contributor[j].position));
    }
  }
  print_board() {
    this.advanced_player()
    for (let j = 0; j<this.players; j++) {
        console.log(this.print_line(this.contributor[j].name[0],this.contributor[j].position));
    }
  }
  print_line(player, pos) {
    let liner = [];
    for (let i=0; i<this.length; i++) {
      if (pos == i) {
        liner.push(player);
      } else {
        liner.push(" ");
      }
    }
    return liner.join('|');
  }
  advanced_player() {
    for (let i = 0; i < this.players; i++) {
      this.contributor[i].position = this.contributor[i].position + dice.roll();
      if (this.contributor[i].position >= this.length-1) {
        this.contributor[i].position = this.length-1;
      }
    }
    return this.contributor;
  }
  finished() {
    for (let i = 0; i < this.players; i++) {
      if (this.contributor[i].position >= this.length-1) {
        this.winner(this.contributor[i].name);
        return true;
      }
    }
  }
  winner(x) {
    console.log("Congratulation " +x.toUpperCase()+ " You won first place");
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

let dice = new Dice();
// console.log(dice.roll());

export default JSRacer
