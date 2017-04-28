"use strict"

// import JSRacer from "./js_racer"          //klo pake ini mesti pake babel-node
let JSRacer = require('./js_racer.js')

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function play(players,boardLength,delay){
  let race = new JSRacer(players, boardLength);
  let announcer = ['ARE YOU READY?',
                  'GET SET!',
                  'LET THE RACE BEGIN!',
                  'GO!GO!GO!GO!GO!GO!GO!GO!',
                  'THE RACE IS OVER GUYS! CONGRATULATIONS!']
  for(let j=0;j<announcer.length-3;j++){
    for(let i=0;i<100;i++){
      console.log('\r');
    }
    console.log(announcer[j]);
    race.print_board();
    console.log('\n');
    sleep(delay+700);
    race.reset_board();
  }
  while(!race.finish){
    console.log(race.currentLeader.pos,race.currentLeader.leader,boardLength);
    if(race.currentLeader.pos<boardLength/5){
      console.log(announcer[announcer.length-2]);
    } else if(race.currentLeader.pos<boardLength/2){
      console.log((`${race.currentLeader.leader} is leading`).toUpperCase());
    } else if(race.currentLeader.pos<boardLength*4/5){
    console.log((`${race.currentLeader.leader} is still on the lead`).toUpperCase());
    } else if(race.currentLeader.pos<boardLength){
    console.log((`The finish line is only a quarter mile ahead. Could ${race.currentLeader.leader} be the winner????`).toUpperCase());
    }
    race.advanced_player();
    sleep(delay);
    race.reset_board()
  };
  console.log(announcer[announcer.length-1]);
  race.print_board();
  race.finished();
  race.winner()
}



//// exports.tes = function() {
////   console.log('adasdasdasdasd')
//// }
// let tes = function() {
//   console.log('adasdasdasdasd')
// }
// module.exports = tes



// Your code here...''
play(['aldy','majid','saab'],80,150)
