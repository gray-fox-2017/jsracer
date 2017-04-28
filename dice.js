"use strict"

class Dice {
  constructor() {

  }
  roll(num) {
      return Math.floor(Math.random() * num)
  }
}

export default Dice
