'use strict'

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.setPlayers = this.setObjPlayers();
    this.length = length;
    this.dice = new Dice();
    this.finish = {name : "", Winner : false};
  }

  setObjPlayers (){
    let arr = [];
    for (let i = 0; i < this.players.length ; i++){
      let objPlayers = {
        name : this.players[i],
        pos : 0
      }
      arr.push(objPlayers);
    }
    return arr;
  }

  print_board() {
    for(let i = 0; i < this.setPlayers.length ; i++) {
      this.print_line(this.setPlayers[i].name, this.setPlayers[i].pos);
    }
  }

  print_line(player, pos) {
    let lineRace = [];
    for (let i = 0; i < this.length+1 ; i++) {
      if (pos == i){
        lineRace.push(player);
      } else {
        lineRace.push(" ")
      }
    }
    console.log(lineRace.join("|"));
  }

  advanced_player() {
    for (let i = 0 ; i < this.setPlayers.length ; i++) {
      let lastPost  = this.finish.Winner == true ? this.setPlayers[i].pos += this.dice.roll(0, 0) : this.setPlayers[i].pos += this.dice.roll(3, 1);
      if(this.setPlayers[i].pos >= this.length -1) {
        this.finish.name = this.setPlayers[i].name;
        this.finish.Winner = true;
        this.print_line(this.setPlayers[i].name, this.length)
      } else {
        this.print_line(this.setPlayers[i].name, lastPost)
      }
    }
  }

  play() {

    do{
      this.sleep(700)
      this.reset_board()
      this.advanced_player();
    } while (this.finish.Winner == false)
    console.log(this.finish.name + " is a Winner");
  }

  // winner(player) {
  //   return 'you win' + player
  // }

  reset_board() {
    console.log("\x1B[2J")
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
}

export default JSRacer
