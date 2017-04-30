"use strict"

import Dice from "./dice.js"

class JSRacer {
    constructor(players, length) {
        this.player = players;
        this.length = length;
        this.arrBoard = [];
    }

    print_board() {
        var alpa = "abcdefghijklmnopqrstuvwxyz";
        this.arrAlpa = alpa.split("");

        console.log("Ready To Start");
        for (var i = 0; i < this.player; i++) {
            console.log(this.print_line(this.arrAlpa[i]),0);
        }
    }

    print_line(player, pos) {
        this.length;
        this.arrBoard = [];
        var randomStep = new Dice(6);
        for (var i = 0; i < this.length; i++) {
            this.arrBoard.push([" |"]);
        }

        if(pos == 0){
            this.arrBoard.splice(0, 1, player);
        }
        else {
           this.arrBoard.splice(randomStep.roll(),1,player);
        }
        return this.arrBoard.join("");
    }

    advanced_player(player) {


    }

    finished() {

    }

    winner() {

    }

    reset_board() {
        console.log("\x1B[2J")
    }
}


let coba = new JSRacer(4,50);
coba.print_board();



export default JSRacer