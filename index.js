const blessed = require('blessed')
    , contrib = require('blessed-contrib')
    , program = blessed.program()
    , screen = blessed.screen()

const Gomoku = require('gomoku-js')

let size = 5

let game = new Gomoku(size)

let order = true

let grid = new contrib.grid({rows: size, cols: size, screen: screen})

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        box = grid.set(i, j, 4, 4, blessed.box, {
            content: '',
            bold: 'bold'
        })
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

screen.render()

program.on('keypress', function (ch, key) {
    if (key.name === 'q') {
        program.clear();
        program.disableMouse();
        program.showCursor();
        program.normalBuffer();
        process.exit(0);
    }
})