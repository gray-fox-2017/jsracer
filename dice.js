"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.ceil(Math.random()*2)
  }
}

// export default Dice                       //klo pake ini mesti pake babel-node
module.exports = Dice
