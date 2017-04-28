"use strict"

// import Dice from "./dice.js";             //klo pake ini mesti pake babel-node
let Dice = require('./dice.js')

class JSRacer {
  constructor(players='abc', length=80) {
    this.players = this.player_preparation(players);
    this.boardLength = length;
    this.finish = false;
    this.finisher = [];
    this.currentLeader = {pos:0,leader:''};
  }
  player_preparation(players) {
    let temp = []
    for(let i=0;i<players.length;i++){
      let obj = {
        name:players[i],
        pos:0
      }
      temp.push(obj)
    }
    return temp
  }
  print_board() {
    for(let i=0;i<this.players.length;i++){
      console.log(this.print_line(this.players[i].name,this.players[i].pos))
    }
    // let temp = []                                  //buat liatin nomor kolom
    // for (let j=0;j<4;j++){
    //   for(let i=0;i<10;i++){
    //     temp.push(i)
    //   }
    // }
    // console.log(temp.join('|'));
  }
  print_line(player, pos) {
    let temp = []
    for(let i=0;i<this.boardLength;i++){
      if(i === pos){
        temp.push(player)
      // }else if (i===this.boardLength-1) {          //buat liat kolom terakhir
      //   temp.push('x')
      } else {
        temp.push('_')
      }
    }
    return temp.join('|')
  }
  advanced_player() {
    let dice = new Dice();
    let temp = this.currentLeader
    for(let i=0;i<this.players.length;i++){
      this.players[i].pos += dice.roll()
      if(this.players[i].pos>temp.pos){
        temp.pos = this.players[i].pos
        temp.leader = this.players[i].name
      }
      if(this.players[i].pos>=this.boardLength-1){
        this.finisher.push(this.players[i].name);
        this.players[i].name = this.players[i].pos.toString();
        this.players[i].pos = this.boardLength-1;
        this.finish = true
      }
    }
    this.currentLeader = temp;
    this.print_board();
    console.log('\n')
  }
  finished() {
    if(this.finisher.length==1){
      console.log(`Finisher is: ${this.finisher.join()}`)
    } else {
      console.log(`Finisher are: ${this.finisher.join()}`)
    }
  }
  winner() {
    if(this.finisher.length==1){
      console.log(`The winner is: ${this.finisher[0]}`)
    } else {
      console.log(`The winner is: ${this.finisher[0]} (simply because he got there first :p)`)
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
// let race1 = new JSRacer(['a', 'b', 'c'], 20);
// race1.advanced_player()


// export default JSRacer                  //klo pake ini mesti pake babel-node
module.exports = JSRacer
