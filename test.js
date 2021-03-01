'use strict'

const Gomoku = require('gomoku-js')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let game
let order = true

let board = [[]]
let coordinationSystem = [[]]

let x
let y

startGame()

function startGame() {
    rl.question("Enter board size: ", function (size) {
        createBoard(parseInt(size))
        setChess()
    });
}

function createBoard(size) {
    game = new Gomoku(size)
    board.length = size

    for (let i = 0; i < board.length; i++) {
        board[i] = []
        coordinationSystem[i] = []
        for (let j = 0; j < board.length; j++) {
            board[i][j] = '[ ]'
            coordinationSystem[i][j] = `${i} ${j}`
        }
    }
    console.log(board, coordinationSystem)
}

function setChess() {
    rl.question('Enter chess coordinates using space: ', function (coordinates) {

        coordinates = coordinates.trim()
        x = parseInt(coordinates.charAt(0))
        y = parseInt(coordinates.charAt(2))

        if (x >= board.length || y >= board.length) {
            console.log('Out of the board scope')
        } else {
            if (order === true) {
                board[x][y] = '[X]'
            } else {
                board[x][y] = '[O]'
                order = false
            }
        }

        try {
            game.setChessOf(order, x, y)
            console.log(board, coordinationSystem)
            setChess()
            order = !order
            rl.resume()
        } catch (e) {
            if(e instanceof Error){
                console.log(e.message)
            }
            if (e instanceof RangeError) {
                console.log(e.message)
            } else if (e instanceof ReferenceError) {
                console.log(e.message)
                if (order === false) {
                    board[x][y] = '[X]'
                } else {
                    board[x][y] = '[O]'
                    order = true
                }
                setChess()
            }
        }
    });
}





