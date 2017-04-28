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
    this.position = {};
  }

  init_position(){
    for (let j = 0; j < this.player_num; j++){
      this.position[this.players_list[j]] = 1;
    }
  }

  print_board() {
    let board = [];
    for (let j = 0; j < this.player_num; j++){
      this.position[this.players_list[j]] = this.advanced_player(this.players_list[j]);
      //panggil advanced player
      board.push(this.print_line(this.players_list[j], this.position[this.players_list[j]]));
    }
    return board;
  }

  print_line(player, pos) {
    //Player = siapa playernya , pos = current position
    let tmp = [];
    let tmp_player = "";
     for (let i = 0; i < this.length; i++){
       tmp.push(" | ");
     }
    tmp[pos] = player; //player ini bukan STRING
    //change pos with advanded player return.
    return tmp.join("");
  }
  advanced_player(player) {
    //to change player position
    //output angka
    let current = this.position[player];
    let accu = this.position[player] + this.rand_num.roll();
    return accu;
  }

  finish() {
    // console.log(this.position.length);
    for(let x = 0; x < this.players_list.length; x++){
      if(this.position[this.players_list[x]] >= this.length){
        this.finished = true;
      } else {
        this.finished = false;
      }
    }

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
export default JSRacer
