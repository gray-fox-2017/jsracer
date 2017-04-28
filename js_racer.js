"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players=players;
    this.length=length;
    this.dice = new Dice();
    this.trap=Math.floor((Math.random()*this.length)+5)
    this.jump=Math.floor((Math.random()*this.length)+5)
    this.turn=0;
  }

  print_line(player, pos) {

    let hasil=[];
    for(let i=0; i<this.length;i++){
      if(i===pos&&pos===this.trap){
        hasil.push(`%${player.nama}%|`)
        player.pos=player.pos-5;
      }
      else if(i===pos&&pos===this.jump){
        hasil.push(`${player.nama}>|`)
        player.pos=player.pos+5;
      }
      else if(i===pos){
        hasil.push(`${player.nama}|`)
      }
      else if(i===this.trap){
        hasil.push('*|')
      }
      else if(i===this.jump){
        hasil.push('+|')
      }
      else {
        hasil.push(' |');
      }
    }
    return hasil.join('');
  }

  print_board() {
    this.reset_board();
    for(let i =0; i<this.players.length;i++){
      this.players[i].pos=this.advanced_player(this.players[i].pos);
      console.log(this.print_line(this.players[i],this.players[i].pos));
      this.turn++;
    }
  }

  advanced_player(pos) {
    pos=pos+this.dice.roll()
    let hasil= (pos>=this.length) ? this.length-1 : pos;
    return hasil;
  }

  finished() {
    for(let i =0; i<this.players.length;i++){
      if(this.players[i].pos===this.length-1)
      return true;
    }
    return false;
  }
  winner() {
    let hasil=[];
    for(let i =0; i<this.players.length;i++){
      if(this.players[i].pos===this.length-1)
      hasil.push(this.players[i].nama);
    }
    return hasil.join(' ')
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
