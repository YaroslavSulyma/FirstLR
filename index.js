/*
game.setChessOf(0, 0, 0);

game.setChessOf(1, 0, 1);

game.setChessOf(0, 1, 0);

game.setChessOf(1, 1, 1);

game.setChessOf(0, 2, 0);

game.setChessOf(1, 1, 2);

game.setChessOf(0, 3, 0);

game.setChessOf(1, 1, 3);

game.setChessOf(0, 4, 0);

game.setChessOf(1, 1, 4);*/

let blessed = require('blessed')
    , contrib = require('blessed-contrib')

const Gomoku = require('gomoku-js')

let size = 5

let game = new Gomoku(size)

let order = 1 // 1=X, 0=O

let screen = blessed.screen()

let grid = new contrib.grid({rows: size, cols: size, screen: screen})

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        grid.set(i, j, 4, 4, blessed.box, {
            content: '',
            bold: 'bold'
        },)
    }
}

function onClick(i, j) {

    if (order === 1) {
        grid.set(i, j, 4, 4, blessed.box, {
            content: 'X',
            bold: 'bold'
        },)
    } else {
        grid.set(i, j, 4, 4, blessed.box, {
            content: 'O',
            bold: 'bold'
        },)
        order = 1
    }

    game.setChessOf(order, i, j)

    order = 0
}


screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0)
});

screen.render()