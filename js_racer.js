"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length = 30,count) {
    this.players = players
    this.panjang = length
    this.dice = new Dice()
    this.count = 0
    this.pemain =  [
      {nama : 'e', posisi : 0},
      {nama : 'r', posisi : 0},
      {nama : 'n', posisi : 0}
    ]
  }
  print_board() {
      if (this.count === 3) {
        this.count = 0
      }
      this.advanced_player(this.pemain[this.count])
      for (let i = 0; i< this.pemain.length; i++) {
        console.log(this.print_line(this.pemain[i].nama, this.pemain[i].posisi));
        console.log(`\n`)
      }
      this.count++
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


  advanced_player(pemain) {
    if ((pemain.posisi + this.dice.roll()) > this.panjang) {
      pemain.posisi = this.panjang - 2
    } else {
      pemain.posisi += this.dice.roll()
    }
    // for (let i = 0; i < this.players.length; i++) {
    //   //if (this.count == this.players) {
    //     player.posisi += this.dice.roll()
      //}
      // } else if (this.players[i].posisi == 30 || this.players[i].posisi > 30 ) {
      //   break
      // }
        //  if (this.players[i].posisi >= 30) {
        //    return this.panjang
        //    break;
        // //  }
        // if (this.players[i].posisi >= this.panjang) {
        //      this.players[i].posisi = this.panjang
        //      return true
        //      //return true
        //      //return this.
        // }

  }
  finished() {
    for (let i = 0; i < this.pemain.length; i++) {
      if (this.pemain[i].posisi >= this.panjang - 2) {
           return this.pemain[i].posisi = this.panjang - 2
        }
    }
    return false

  }
  winner() {
    let ar = []
    for (let i = 0; i <this.pemain.length; i++) {
      if (this.pemain[i].posisi >= this.panjang - 2) {
         //ar.push(this.players[i].nama)
         return this.pemain[i].nama
      }
    }
    //return ar.join(' ')
    //return ar[0]
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
