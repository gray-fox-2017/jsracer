"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.ceil((Math.random() * 6) + 1);

  }
}

export default Dice
