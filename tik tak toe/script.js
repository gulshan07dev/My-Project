// get the music
let music = new Audio('./assests/music.mp3');
let gameOver = new Audio('./assests/gameover.mp3');
let ting = new Audio('./assests/ting.mp3');
music.loop = true;
// music.play();

// .........main game code.........
console.log("Welcome to Tik Tak Toe");

let turn = "X";
const result = document.querySelector(".result");
const restartBtn = document.querySelector('#restart');

// Function to change turn
function changeTurn() {
    if (turn === "X") {
        turn = "O";
        if (player2Name.length > 0) {
            result.innerHTML = `${player2Name} turn (O)`
        }
        else {
            result.innerHTML = `turn O`;
        }
    } else {
        turn = "X";
        if (player1Name.length > 0) {
            result.innerHTML = `${player1Name} turn (X)`
        }
        else {
            result.innerHTML = `turn X`;
        }
    }
    if (tingYesOrNot) {
        ting.play();
    }

}

// Adding click event to the boxes
const boxes = document.querySelectorAll(".box");
const boxText = document.querySelectorAll('.box-text');
boxes.forEach((box, idx) => {
    box.addEventListener("click", () => {
        // If the box is not already clicked
        if (boxText[idx] === "") {
            boxText[idx].textContent = turn;
            changeTurn();
        }
    });
});

// Function to check if there is a winner
function checkWinner() {
    const winningCombinations = [
        // Horizontal combinations
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical combinations
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal combinations
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winner = null;
    winningCombinations.forEach((combination) => {
        const [a, b, c] = combination;
        if (
            boxes[a].textContent !== "" &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent
        ) {
            winner = boxes[a].textContent;
            exited.style.width = "100px";
        }
    });

    return winner;
}

// Function to check if the game is a tie
function checkTie() {
    let tie = true;
    boxes.forEach((box) => {
        if (box.textContent === "") {
            tie = false;
        }
    });
    return tie;
}

// Function to end the game
const exited = document.querySelector('#exited');
function endGame(winner) {
    let message;
    if (winner == 'X' && player1Name.length > 0) {
        message = winner ? `${player1Name} wins! (${winner})` : "It's a tie!";
    }
    else if (player1Name.length == 0) {
        message = winner ? `${winner} wins!` : "It's a tie!";
    }
    else if (winner == 'O' && player2Name.length > 0) {
        message = winner ? `${player2Name} wins! (${winner})` : "It's a tie!";
    }
    else {
        message = winner ? `${winner} wins!` : "It's a tie!";
    }
    result.innerHTML = `${message}`;
    restartBtn.classList.add('block');
    boxes.forEach((box) => {
        box.removeEventListener("click", () => { });
    });
}

// Adding click event to the boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // If the box is not already clicked
        if (box.textContent === "") {
            box.textContent = turn;
            const winner = checkWinner();
            if (winner) {
                endGame(winner);
            } else if (checkTie()) {
                endGame(null);
                if (gmeOverYesOrNot) {
                    gameOver.play();
                }
            } else {
                changeTurn();
            }
        }
    });
});

// restart the game
restartBtn.addEventListener("click", () => {
    boxes.forEach((el) => {
        el.textContent = '';
        if (player1Name.length > 0) {
            result.innerHTML = `${player1Name} turn (X)`
        }
        else {
            result.innerHTML = `turn X`;
        }
        exited.style.width = "0";
        restartBtn.classList.remove('block');
    })
})



// ........game setting...........

const settingBtn = document.querySelector('#setting-icon');
const settingDisplay = document.querySelector('#setting');
const gameContainer = document.querySelector('.game-container');

settingBtn.addEventListener("click", () => {
    settingDisplay.classList.toggle('setting-toggle');
    gameContainer.classList.toggle('setting-toggle');
})

// Add event listener to window object to listen for clicks outside setting
window.addEventListener('click', (e) => {
    if (!e.target.closest('#setting') && !e.target.closest('#setting-icon')) {
        // Remove 'menu-toggle' class from 'menu' element if it is present
        settingDisplay.classList.remove('setting-toggle');
        gameContainer.classList.remove('setting-toggle');
    }
});

const bgMusic = document.querySelector('#bg-m');
const tingMusic = document.querySelector('#ting-m');
const gOverM = document.querySelector('#gover-m');

// for background music option
bgMusic.addEventListener("change", () => {
    const selectedOption = bgMusic.options[bgMusic.selectedIndex];
    const selectedValue = selectedOption.value;
    console.log(selectedValue);
    if (selectedValue == 'on') {
        music.play();
    }
    else {
        music.pause();
    }
})

// for ting music option
let tingYesOrNot = true;
tingMusic.addEventListener("change", () => {
    const selectedOption = tingMusic.options[tingMusic.selectedIndex];
    const selectedValue = selectedOption.value;
    if (selectedValue == 'on') {
        tingYesOrNot = true;
    }
    else {
        tingYesOrNot = false;
    }
})

// for game over music option
let gmeOverYesOrNot = true;
gOverM.addEventListener("change", () => {
    const selectedOption = gOverM.options[gOverM.selectedIndex];
    const selectedValue = selectedOption.value;
    if (selectedValue == 'on') {
        gmeOverYesOrNot = true;
    }
    else {
        gmeOverYesOrNot = false;
    }
})

// player setting
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');

let player1Name = '';
let player2Name = '';

player1.addEventListener("keyup", () => {
    player1Name = player1.value;
    if (player1Name.length > 0) {
        result.innerHTML = `${player1Name} turn (X)`
    }
    else {
        result.innerHTML = `turn O`;
    }
})
player2.addEventListener("keyup", () => {
    player2Name = player2.value;
})