"use strict"

class Dice {
  constructor(diceNum=1) {
    this.diceNum = diceNum
  }
  roll() {
    this.diceNum = Math.ceil(Math.random()*6)
    return this.diceNum
  }
}


export default Dice
