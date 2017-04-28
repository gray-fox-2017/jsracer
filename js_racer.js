"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length=40) {
    this.player = [];
    this.length = length;
    for (let k=0;k<players.length;k++){
      this.attrplayer = {};
      this.attrplayer.name=players[k];
      this.attrplayer.position=0;
      this.player.push(this.attrplayer);
    }
    this.isFinish = this.finished();
    console.log(this.player);
  }
  print_line() {
    let line = [];
    for (let j=1;j<this.length;j++){
      line.push(" ");
      line.push("|");
    }

    return line;
  }
  print_board() {
    let board = [];
    let currPosition = [];
    for (let i=0;i<this.player.length;i++){
      currPosition = this.print_line();
      currPosition[this.player[i].position*2] = this.player[i].name;
      board.push(currPosition.join(''));
    }

    console.log(board.join("\n"));
  }
  
  advanced_player(player) {
    let velocity = new Dice();
    for (let l=0;l<this.player.length;l++){
      this.player[l].position = this.player[l].position+velocity.roll();
    }
  }

  finished() {
    for (let i=0;i<this.player.length;i++){
      if (this.player[i].position>Math.floor(this.length/2)) return true;
    }
    return false;
  }
  
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

let player = new JSRacer(['a','b','c'],20);
console.log(player.isFinish);
while (player.finished()===false) {
  player.print_board();
  player.advanced_player();
  player.finished();
}

export default JSRacer
