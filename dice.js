"use strict"

class Dice {
  constructor() {
    this.num = 0
  }
  roll() {
    let getRandomNum = () => {
      let random = Math.floor(Math.random()*5 + 1);
      return random;
    }
    this.num = getRandomNum();
    return this.num;
  }
}

export default Dice
