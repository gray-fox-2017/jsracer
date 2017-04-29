"use strict"

import Dice from "./dice.js"

class JSRacer {
<<<<<<< HEAD
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
=======
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
>>>>>>> d3bab7616e16659b635b89e5f96c53e0c6df370c
  }
  advanced_player(player) {
    this.player = player;
    return random;

  }
  finished() {
<<<<<<< HEAD
    return this.finish === true;
  }
  winner() {
    return this.winner;
=======
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
>>>>>>> d3bab7616e16659b635b89e5f96c53e0c6df370c
  }
  reset_board() {
    console.log("\x1B[2J");
  }
}

export default JSRacer

// Test
<<<<<<< HEAD
=======






















// console.log(getRandom.roll());
>>>>>>> d3bab7616e16659b635b89e5f96c53e0c6df370c
