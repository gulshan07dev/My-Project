const displayResult = document.getElementById('result');
const btn = document.getElementById('btn');
const progress = document.getElementById('progress');
const level = document.getElementById('level');
const input = document.getElementById('input');

let userLevel = 10;
// select level

// Add an event listener to the select element
level.addEventListener("change", function () {
    // Get the selected option
    const selectedOption = level.options[level.selectedIndex];

    // Get the value of the selected option
    const selectedValue = selectedOption.value;

    switch (selectedValue) {
        case 'easy':
            userLevel = 10;
            break;
        case 'medium':
            userLevel = 50;
            break;
        case 'hard':
            userLevel = 100;
            break;
        default:
            userLevel = 10;
    };
    
    // computer guess
    computerGuess = Math.floor(Math.random() * userLevel) + 1;
});



// computer guess
let computerGuess = Math.floor(Math.random() * userLevel) + 1;



btn.addEventListener("click", () => {
    setTimeout(() => {
        displayResult.textContent = "😎";
        // change the btn text
        btn.innerText = "check";
        // enable the input
        input.disabled = false;
        checkGuess();


        progress.style.display = "none";
    }, 3000)
    progress.style.display = "block";
    displayResult.innerText = "";
});


// Define the checkGuess function
function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(input.value);

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > userLevel) {
        displayResult.textContent = "Please enter your valid guessed number!";
        return;
    }

    // Compare the userGuess to the number
    if (userGuess === computerGuess) {
        displayResult.textContent = "Congratulations, you guessed the number!";
        // Disable the input and change the button text
        input.disabled = true;
        btn.innerText = "restart";
        input.value = "";
        // Generate a new random number
        computerGuess = Math.floor(Math.random() * userLevel) + 1;

    } else if (userGuess < computerGuess) {
        displayResult.textContent = "Too low, try again!";
    } else {
        displayResult.textContent = "Too high, try again!";
    }
}



// **************dark mode***************
document.querySelector('#dark-icon').addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.className == "dark-theme") {
        document.querySelector('#dark-icon').innerText = "Light Mode";
    } else {
        document.querySelector('#dark-icon').innerText = "Dark Mode";
    }
});