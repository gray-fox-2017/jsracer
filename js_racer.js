"use strict"

import Dice from "./dice.js"

class JSRacer {
  
  constructor(players, length=60) {
    this.player = [];
    this.length = length;
    for (let k=0;k<players.length;k++){
      this.attrplayer = {};
      this.attrplayer.name=players[k];
      this.attrplayer.position=0;
      this.player.push(this.attrplayer);
    }
    this.crushedCar = [];
    // Special property of HACKTIV8 Race
    console.log("Welcome to the HACKTIV8 race. This is not a real race. Life is unfair.");
  }
  
  print_line() {
    let line = [];
    for (let j=0;j<this.length;j++){
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

  crash() {
    for (let i=0;i<this.player.length-1;i++){
      if (this.player[i].position === this.player[i+1].position) {
        if (this.crushedCar.indexOf(this.player[i].name)<0) {
          this.crushedCar.push(this.player[i].name);
        }
        if (this.crushedCar.indexOf(this.player[i+1].name)<0) {
          this.crushedCar.push(this.player[i+1].name);
        }
        console.log(`Player ${this.player[i].name} and ${this.player[i+1].name} are crashing. They can't continue the race.`);
      }
    }
  }

  advanced_player(player) {
    let velocity = new Dice();
    for (let l=0;l<this.player.length;l++){
      if (this.crushedCar.indexOf(this.player[l].name)<0) {
        this.player[l].position += velocity.roll();
        // Special property of HACKTIV8 Race
        if (this.player[l].position >= this.length) break;
      }
    }
    this.crash();
    this.print_board();
  }

  finished() {
    for (let i=0;i<this.player.length;i++){
      if (this.player[i].position>=this.length)return true;
    }
    if (this.crushedCar.length === this.player.length) return true;
    return false;
  }
  
  winner() {
    let winners = [];
    let realWinners = [];
    
    for (let i=0;i<this.player.length;i++){
      winners.push(this.player[i].position);
    }

    if (this.length > Math.max(...winners)) {
      console.log("The race is cancelled because of accidents.");
    }
    else {
      for (let i=0;i<this.player.length;i++){
        if (winners[i]===Math.max (...winners)) realWinners.push(this.player[i].name);
      }
  
      if (realWinners.length === 1) {
        console.log((realWinners[0].toUpperCase() + " wins the race!"));
      }
      else {
        let announcement = "";
        for (let i=0; i<realWinners.length; i++) {
          if (i === realWinners.length-1) {
            announcement += realWinners[i].toUpperCase();
          }
          else {
            announcement += realWinners[i].toUpperCase() + ",";
          }
        }
        console.log (announcement + " share the podium!");
      }
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
