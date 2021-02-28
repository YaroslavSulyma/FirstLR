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
        createBoard(size)
        setChess()
    });
}

function createBoard(size) {
    game = new Gomoku(parseInt(size))
    board.length = parseInt(size)


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
    rl.question("Enter chess coordinates using space: ", function (coordinates) {

        coordinates = coordinates.trim()
        x = parseInt(coordinates.charAt(0))
        y = parseInt(coordinates.charAt(2))

        if (order === true) {
            board[x][y] = '[X]'
        } else {
            board[x][y] = '[O]'
            order = false
        }
        try {
            console.log(`${x} ${y}`)
            game.setChessOf(order, x, y)
            order = !order
            console.log(board, coordinationSystem)
            setChess()
            rl.resume()
        } catch (e) {
            if (e instanceof TypeError) {
                console.log(e)
                setChess()
                rl.resume()
            }
            console.log(e)
        }
    });
}





