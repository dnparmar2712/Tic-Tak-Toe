const cell = document.querySelectorAll(".cell");
const winner = document.querySelector(".winner");
const reset = document.querySelector("button");

let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleClick(e) {
    const cell = e.target;
    const index = cell.getAttribute("data-index");
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkwinner()) {
        winner.textContent = `${currentPlayer} Wins`;
        gameActive = false;
        return;
    }
    if (board.every((cell) => cell !== "")) {
        winner.textContent = "Its a Drow";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "0" : "X";
}

function checkwinner() {
    return winnerCombinations.some((combination) => {
        return combination.every((index) => board[index] === currentPlayer);
    });
}

function resetGame() {

    currentPlayer = "X";
    gameActive = true;
    board = ["", "", "", "", "", "", "", "", ""];
    
    cell.forEach((cell) =>{
        cell.textContent="";
    });
    winner.textContent="";
}

cell.forEach((cell) =>{
    cell.addEventListener("click", handleClick);
});
reset.addEventListener("click", resetGame);