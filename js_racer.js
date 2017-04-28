"use strict"

import Dice from "./dice.js"
let randomDice = new Dice()
// console.log(randomDice.roll());

class JSRacer {
  constructor(players, length) {
    this.players = []
    for(var l=0; l<players.length;l++){
      var player = {}
      player['name'] = players[l]
      player['position'] = 0
      this.players.push(player)
    }
    this.lengthLine = length;
  }
  advanced_player(player) {
    var pos = this.players[player]
    if(!this.finished()){
      pos.position += randomDice.roll()
    }
    return pos.position
  }
  print_line(player, pos) {
    let line = []
    for (var i=0; i<this.lengthLine; i++){
      if(i==pos){
        line.push(this.players[player].name + '|')
      } else {
        line.push(' |')
      }
    }
    if(pos>=this.lengthLine){
      line.push(this.players[player].name)
    }
    return line.join(' ')
  }
  start_board() {
    let board = []
    for (var j=0; j<this.players.length; j++){ // starter board
      board.push(this.print_line(j, 0))
    }
    return board.join('\n');
  }
  print_board() {
    let board = []
    for (var j=0; j<this.players.length; j++){ // race begin
      board.push(this.print_line(j, this.advanced_player(j)))
    }
    return board.join('\n');
  }
  finished() {
    for(var m=0; m<this.players.length; m++){
      if(this.players[m].position >= this.lengthLine){
        return true
      }
    }
  }
  winner() {
    for(var n=0; n<this.players.length; n++){
      if(this.players[n].position >= this.lengthLine){
        return `Player '${this.players[n].name}' is the winner`
      }
    }
  }
  backObstacle(){

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}


export default JSRacer
