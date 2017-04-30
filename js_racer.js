"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, panjang) {
    this.board = []
    this.panjang = panjang
    this.player = players.map( x => x + '|')
    this.dice = new Dice;
    this.menang = 0

  }
  print_board() {
    let papan = []
    for (let i = 0; i < this.panjang*(this.player).length; i++) {
      (papan).push(' |');
    }
    this.board = papan;

    for (let i = 0; i<(this.board).length; i+=(this.panjang)) {
      (this.board).splice(i,1,(this.player)[i/(this.panjang)])
    }

    return this.board
  }

  print_line() {
    this.track = []
    for (let i=0; i<(this.board).length; i+=(this.panjang)) {
      (this.track).push((this.board).slice(i, i+(this.panjang)));
    }

    for (let i=0; i<(this.track).length; i++) {
      let sem = (this.track)[i].join('');
      (this.track).splice(i,1,sem);
    }
    let jalur = (this.track).join('\n')
    return jalur
  }

  advanced_player() {
    for (let i = 0; i<(this.player).length; i++) {
      let dadu = (this.dice).roll();
      let index = (this.board).indexOf((this.player)[i]);
      let maju = dadu + index;
      let max = ((this.panjang)*i)+((this.panjang-1));
      if (maju > max) {
        maju = max;
        (this.board).splice(index,1);
        (this.board).splice(maju, 0, (this.player)[i]);
      } else {
        (this.board).splice(index,1);
        (this.board).splice(maju, 0, (this.player)[i]);
      }
    }
  }
  finished() {

    let pemenang = 0
    for (let i=0; i<(this.player).length; i++) {
      if ((this.board).indexOf((this.player)[i]) === (this.panjang*i)+(this.panjang-1)) {
        pemenang++
      }
    }

    if (pemenang > 0) {
      return true
    } else {
      return false
    }
  }


  winner() {
    let pemenang = [];
    for (let i=0;i<(this.player).length;i++) {
      if ((this.board).indexOf((this.player)[i]) === (this.panjang*i)+(this.panjang-1)) {
        pemenang.push((this.player)[i]);
      }
    }

    return '\n\nSTOP! STOP! Balapan sudah selesai! Pemenangnya adalah ' + pemenang.join(', ')

  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
