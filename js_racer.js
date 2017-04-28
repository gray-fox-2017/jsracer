"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length = 30) {
    this.players = players
    this.panjang = length
    //this.position = []
    this.dice = new Dice()
  }
  print_board() {
      this.reset_board()
      this.advanced_player()
      for (let i = 0; i< this.players.length; i++) {
        console.log(this.print_line(this.players[i].nama, this.players[i].posisi));
        console.log(`\n`)
      }
  }
  print_line(player, pos) {
    let line = []
    for (let i = 0; i<this.panjang; i++) {
      if (pos == i) {
        line.push(player)
      } else {
        line.push(" ")
      }
    }
    return line.join("|")
  }
  advanced_player() {
    for (let i = 0; i < this.players.length; i++) {
        this.players[i].posisi += this.dice.roll()
        
        // if (this.players[i].posisi > 30) {
        //   return this.panjang - 1
        // }
        if (this.players[i].posisi >= this.panjang - 2) {
             this.players[i].posisi = this.panjang - 2
             //return true
             //return this.
        }
    }
  }
  finished() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].posisi >= this.panjang - 2) {
           //this.players[i].posisi = this.panjang - 3
           return true
        }
    }


  }
  winner() {
    let ar = []
    for (let i = 0; i <this.players.length; i++) {
      if (this.players[i].posisi >= this.panjang - 2) {
         ar.push(this.players[i].nama)

      }
    }
    return ar.join(' ')

  }
  reset_board() {
    console.log("\x1B[2J")
  }


}

// let test = new JSRacer(3)
// console.log(test.print_line());
//test membuat object baru dari JSRacer
//test.print_line() memanggil print_line dari variabel object test

export default JSRacer
