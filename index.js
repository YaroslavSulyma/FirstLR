let blessed = require('blessed')
    , contrib = require('blessed-contrib')

const Gomoku = require('gomoku-js')

let size = 5

let game = new Gomoku(size)

let order = true // 1=X, 0=O

let screen = blessed.screen()

let grid = new contrib.grid({rows: size, cols: size, screen: screen})

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        grid.set(i, j, 4, 4,  blessed.box, {
            content: '',
            bold: 'bold'
        },)
    }
}

function setChess(i, j) {

    if (order === true) {
        grid.set(i, j, 4, 4, blessed.box, {
            content: 'X',
            bold: 'bold'
        },)
    } else {
        grid.set(i, j, 4, 4, blessed.box, {
            content: 'O',
            bold: 'bold'
        },)
        order = false
    }

    try {
        game.setChessOf(order, i, j)
        order = !order
    } catch (e) {
        console.log(e)
    }
}


screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0)
});

screen.render()