"use strict"

class Dice {
  constructor() {
    this._num = 0
  }
  set roll() {
    newNum = Math.floor(Math.random()*6)+1
    this._num = newNum;
  }

  get roll() {
    return this._num;
  }
}

export default Dice
