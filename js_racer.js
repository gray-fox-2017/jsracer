"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.dice = new Dice();
  }

  print_board() {
    this.reset_board();
    this.advanced_player();
     for(let i=0; i<this.players.length; i++){
       console.log(this.print_line(this.players[i].name,this.players[i].posisi));
     }

  }

  print_line(player, pos) {
    let line = [];
    for(let i=0; i<this.length; i++){
       if(pos == i){
        line.push(player);
      }else{
        line.push(' ');
      }
    }
    return line.join('|');
  }

  advanced_player() {
    for(let i=0; i<this.players.length; i++){
        this.players[i].posisi = this.players[i].posisi + this.dice.roll();
       if(this.players[i].posisi >= this.length-1){
         this.players[i].posisi = this.length-1;
       }
    }
  }
  finished() {
    for(let i=0; i<this.players.length; i++){
      if(this.players[i].posisi >= this.length-1){
        return true;
      }
    }
  }
  winner() {
    for(let i=0; i<this.players.length; i++){
      if(this.players[i].posisi >= this.length-1){
        return this.players[i].name;
      }
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}


export default JSRacer
