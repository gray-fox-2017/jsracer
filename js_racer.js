"use strict"

import Dice from "./dice.js";
const SUPERPS = [{
    name: 'long jump',
    step: 2,
    operator: '*',
    damage: 'self'
  },
  {
    name: 'stop',
    step: 0,
    operator: 'x',
    damage: 'others'
  },
  {
    name: 'walk',
    step: 1,
    operator: '+',
    damage: 'self'
  },
  {
    name: 'avalance',
    step: 2,
    operator: '-',
    damage: 'others'
  }, {
    name: 'storm',
    step: 2,
    operator: '/',
    damage: 'others'
  }

];

class JSRacer {

  constructor(players = 1, length = 20) {
    this.players = [];
    this.len = length;
    this.dice = new Dice();
    this.winner = null;

    for (let i = 0; i < players; i++) {
      let player = {};
      player['name'] = String.fromCharCode(97 + i);;
      player['pos'] = 0;
      player['superp'] = Math.floor((Math.random() * 4) + 0);
      player['effect'] = null;
      player['duration'] = null;
      this.players.push(player);
    }

  }

  trapped(idx) {
    let step = Math.floor((Math.random() * 2) + 1);
    this.players[idx].pos -= step;
    console.log(this.players[idx].name + ' menginjak trap! Mundur sebanyak ' + step);
  }

  print_line(idx, len) {
    let line = [];
    let winner = this.winner;
    let name = this.players[idx].name;
    let pos = this.players[idx].pos;

    for (let i = 0; i <= len; i++) line.push(' |');
    line[pos] = ((pos < len) ? name + '|' : ' | ' + name);
    return line.join('');
  }

  print_board() {
    let board = [];
    for (let i = 0; i < this.players.length; i++) board.push(this.print_line(i, this.len));
    console.log(board.join('\n'));
  }

  advanced_players() {
    for (let i = 0; i < this.players.length; i++) this.advanced_player(i);
    this.print_board();
  }

  advanced_player(idx) {
    let step = this.dice.roll();
    if (this.players[idx].effect !== 'stop') {
      if (this.winner == null) {
        let nPos;
        if (step === 6) {
          this.activate_super(this.players[idx].superp, idx);
          nPos = this.players[idx].pos;
        } else nPos = this.players[idx].pos + step;

        if (nPos >= this.len) {
          this.players[idx].pos = this.len;
          this.winner = idx;
          this.finished();
        } else if (step !== 6) {
          this.players[idx].pos += step;
          if (nPos % 3 === 0) this.trapped(idx);
        }
      }
    } else this.players[idx].effect = null;
  }

  activate_super(isuper, iplayer) {
    let superp = SUPERPS[isuper];

    if (superp.damage === 'self') {
      switch (superp.operator) {
        case '*':
          this.players[iplayer].pos *= superp.step;
          break;
        case '+':
          this.players[iplayer].pos += superp.step;
          break;
      }
    } else {
      this.players[iplayer].pos += 3;
      for (let i = 0; i < this.players.length; i++) {
        if (i !== iplayer) {
          let npos = this.players[i].pos;
          switch (superp.operator) {
            case 'x':
              this.players[i].effect = superp.name;
              break;
            case '-':
              npos -= superp.step;
              this.players[i].pos = (npos <= 0) ? 0 : npos;
              break;
            case '/':
              npos /= superp.step;
              npos = Math.round(npos);
              this.player[i].pos = (npos <= 0) ? 0 : npos;
              break;
          }
        }

      }

    }

    console.log(this.players[iplayer].name + ' use ' + SUPERPS[isuper].name);
  }

  finished() {

  }

  showWinner() {
    let winner = this.players[this.winner];
    console.log(`The winner is ${winner.name}`);
  }

  reset_board() {
    console.log("\x1B[2J")
  }


}

export default JSRacer
