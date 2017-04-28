"use strict"

class Dice {
  constructor() {
    this._num = 0
  }
  roll() {
    let newNum = Math.floor(Math.random()*6)+1
    this._num = newNum;
    return this._num
  }
}

export default Dice
