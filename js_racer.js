"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = length
    this.position = this.advanced_player(this.players.length)
    this.dice = new Dice()
    this.finish = false;
    this.win = ''
    this.trap = Math.floor(Math.random()*this.length);
    this.updatePositiion = 0
  }

  print_board() {
      for (let i=0; i<this.players.length; i++){
        this.position[i] += this.dice.roll()
          if (this.position[i] === this.trap){
            this.position[i] -= 3
            console.log(`this player ${this.players[i]} is trapped`)
          }
          if (this.position[i] >= this.length){
            this.position[i] = this.length;
            this.win = this.players[i]
            this.finished(this.position[i])
          } else {
            if(this.finish === false){
              console.log(this.print_line(this.players[i], this.position[i] - 1));
            // } else {
            // //if(this.finish === true){
            //   //console.log(this.print_line(this.players[i], this.position[i] - 1));
            //   console.log(this.winner())
            // }
          }
        }
          // if(this.finish === false){
          //   console.log(this.print_line(this.players[i], this.position[i] - 1));
          // }
          // if(this.finish === true){
          //   //console.log(this.print_line(this.players[i], this.position[i] - 1));
          //   console.log(this.winner())
          // }

    }
    console.log(this.winner())
  }


  print_line(player, pos) {
    let line = []
    for (let i=0; i<this.length; i++){
      if (pos === i){
        line.push(player)
      }
      if (i === this.trap){
        line.push('<trap>')
      }
      line.push(' ')
    }
    return line.join(' | ');
  }

  advanced_player(player) {
    let start = []
    for(let i=0; i<player; i++){
      start.push(0);
    }
    return start
  }
  finished(params) {
      if (params <= this.length - 2){
        this.finish = false
        return false
      }
      this.finish = true;
      return true
  }

  winner() {
    return `the winner is ? >> ${this.win}`
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
