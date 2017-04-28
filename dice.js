"use strict"

class Dice {
  constructor(num) {
    this.num = num;

  }
  roll() {
    return Math.floor((Math.random() * 6) + 1);
  }
}

export default Dice

// Test

// let getRandom = new Dice();
// console.log(getRandom.roll());
