"use strict"

class Dice {
  constructor() {
    this.number;
  }
  roll() {
    this.number = Math.floor(Math.random() * 6) + 1;
    return this.number;
  }
}

export default Dice
