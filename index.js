const Gomoku = require('gomoku-js');

let game = new Gomoku(5);

game.setChessOf(0, 0, 0);

game.setChessOf(1, 0, 1);

//  ...
//
//  It will return the index of winner

game.setChessOf(0, 0, 4);