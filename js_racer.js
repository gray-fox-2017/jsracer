"use strict"

import Dice from "./dice.js"
// let dadu = new Dice();
// console.log(dadu.roll());


class JSRacer {
  constructor(players, length) {
    this.players_list = players;
    this.player_num = players.length;
    this.length = length;
    this.rand_num = new Dice();
    this.finished = false;
  }
  print_board() {
    let board = [];
    for (let j = 0; j < this.player_num; j++){
      let a_player = this.players_list[j];
      board.push(this.print_line(a_player,this.rand_num.roll()));
    }
    return board;
  }
  //pos = dice roll
  print_line(player, pos) {
    //Player = siapa playernya , pos = current position
    let tmp = [];
     for (let i = 0; i < this.length; i++){
       tmp.push(" | ");
     }
    tmp[pos] = player;
    //change pos with advanded player return.
    return tmp.join("");
  }
  advanced_player(player) {
    //to change player position.
    
  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
export default JSRacer
