"use strict"

class Dice {
  constructor(Random_Angka){
    this.Random_Angka = Random_Angka;
  }

  roll() {
    let Dice = Math.floor(Math.random() * this.Random_Angka) + 1;
      return Dice;
  }
}

export default Dice
