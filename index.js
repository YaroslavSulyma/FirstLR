const Gomoku = require('gomoku-js');

let game = new Gomoku(5);

game.setChessOf(0, 0, 0);

game.setChessOf(1, 0, 1);

game.setChessOf(0, 1, 0);

game.setChessOf(1, 1, 1);

game.setChessOf(0, 2, 0);

game.setChessOf(1, 1, 2);

game.setChessOf(0, 3, 0);

game.setChessOf(1, 1, 3);

game.setChessOf(0, 4, 0);

game.setChessOf(1, 1, 4);

//  ...
//
//  It will return the index of winner
