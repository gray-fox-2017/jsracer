"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players=0, length=5) {
    this.players = players;
    this.length = length;
    this.info =
  }
  print_board() {
    let infoObj = {};
    let playerArr = ("abcdefghijklmnopqrstuvwxyz").split("");
    for (let i = 0; i < this.players; i++) {
      print_line(playerArr[i], )
      // this.info[i].name = playerArr[i];
      // this.info[i].pos += this.advanced_player(playerArr[i]);
      // console.log("player ",playerArr[i]);
      // infoObj[playerArr[i]] = 1;
      // console.log("position ",infoObj[playerArr[i]]);
      // let tmpPosisi = infoObj[playerArr[i]];
      // console.log("temp posisi ", tmpPosisi);
      // tmpPosisi += this.advanced_player(playerArr[i])
      // infoObj[playerArr[i]] = tmpPosisi;
      // console.log(this.print_line(playerArr[i] , step));
    }
  }
  print_line(player, pos=0) {
    this.player = player;

    let displayBoard = [];
    for (let i = 0; i < this.length; i++) {
      displayBoard.push("| ");
    }

    if (this.pos >= this.length) {
      displayBoard[this.length - 1] = "|" + this.player ;
    } else {
      displayBoard[this.pos] = "|" + this.player;
    }
    return displayBoard.join("")

    // this.player = player;
    // this.pos = pos;
    //
    // let displayBoard = [];
    // for (let i = 0; i < this.length; i++) {
    //   displayBoard.push(" |");
    // }
    //
    // displayBoard.splice(this.pos,0, " "+this.player);
    // let line = displayBoard.join("");
    // console.log(line);
  }
  advanced_player(player) {
    this.player = player;
    return random;

  }
  finished() {
    if (this.pos > this.length) {
      return true;
    } else {
      return false;
    }

  }
  winner() {
    // if (this.pos > this.length) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer

// Test






















// console.log(getRandom.roll());
