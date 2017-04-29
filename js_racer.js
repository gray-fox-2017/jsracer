"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.player = players
    this.line = length
    this.position = this.advanced_player(this.player.length)
    this.dice = new Dice()
    this.finish = false;
    this.trap = Math.floor(Math.random()*this.line)
    this.win = ""
    this.power = Math.floor(Math.random()*this.line)-5
    this.warptrap = Math.floor(Math.random()*this.line)


  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  print_board() {
    console.log(`* = Spike Trap: Player going 3 spaces backwards\nWARP = Warp trap: Player warped to random location\n$ = Booster: Player next move + 4 spaces`)
    while(this.finish === false){
    this.sleep(1200)
    this.reset_board()
    for(let i = 0; i < this.player.length; i++){
        if(this.finish === false){
        this.position[i] += this.dice.roll()
        if (this.position[i] === this.trap){
            this.position[i] = this.position[i]-3
            console.log(`${this.player[i]} hit by a trap!! going 3 spaces backward`)
          }
        if(this.position[i] === this.power){
            this.position[i] += this.dice.roll() + 4
            console.log(`${this.player[i]} BOOSTED!! next move + 4 spaces`)
          }
        if(this.position[i] === this.warptrap){
            this.position[i] = Math.floor(Math.random()*this.line)
            console.log(`${this.player[i]} WARPED to random location!!`)
          }
        }
        if(this.position[i] >= this.line-1){
          this.position[i] = this.line-1
          this.finish = true
          this.win = this.player[i]
        }
        console.log(this.print_line(this.player[i],this.position[i]))
        console.log(`\n`)
      }
    }
    console.log(this.winner())
  }

  print_line(player, pos) {
    let track = []
  //  let trap = Math.floor(Math.random()*this.line)
    for (let i = 0; i < this.line; i++){
      if(i === pos){
        track.push(player)
      }
      if(i === this.trap){
        track.push("*")
      }
      if(i === this.warptrap){
        track.push("WARP")
      }
      if(i === this.power){
        track.push("$")
      }

      if(i === pos && pos === this.trap){
        track.push("****" + player + "****")
      }
      if(i === pos && pos === this.power){
        track.push("-------" + player + "---->>>>>>>>")
      }

      else {
        track.push("_")
      }
    }
    // for(let i = Math.floor(Math.random()*this.line); i < this.line; i++){
    // track.push(i)
    // }
    return track.join("|")
  }

  advanced_player(player) {
    let starter = []
    for (let i = 0; i < player; i++){
      starter.push(0)
    }
    return starter
  }

  winner() {
    return `Congratulation ${this.win} WINS!!`
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
