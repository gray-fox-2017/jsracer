class JSRacer {
  constructor(players, length) {
    this.players_list = players;
    this.player_num = players.length;
    this.length = length;
    this.random = Math.ceil(Math.random()*6);
  }
  print_board() {
    let board = [];
    for (let j = 0; j < this.player_num; j++){
      let a_player = this.players_list[j];
      board.push(this.print_line(a_player,this.random));
    }
    return board;
  }
  print_line(player, pos) {
    //Player = siapa playernya , pos = current position
    let tmp = [];
     for (let i = 0; i < this.length; i++){
       tmp.push(" | ");
     }
    tmp[pos] = player;
    return tmp.join("");
  }
}

let test = new JSRacer(["A","B","C"],25);
console.log(test.print_board());
