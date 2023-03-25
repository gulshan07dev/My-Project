// get the elements
const displayQues = document.getElementById("question");
const questionContainer = document.getElementsByClassName("question-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const options = document.getElementById("option-btn");

let quesIndex = 0;
let score = 0;

function startQuiz() {

    const questions = [
        {
            question: "HTML stands for:",
            answer: [
                { option: "High Text Markup Language", correct: false },
                { option: "Hypertext Markup Language", correct: true },
                { option: "Hypertext Markdown Language", correct: false },
                { option: "None of the above", correct: false },
            ]
        },
        {
            question: " Number of header sizes available in HTML are:",
            answer: [
                { option: "1", correct: false },
                { option: "2", correct: false },
                { option: "5", correct: false },
                { option: "6", correct: true },
            ]
        },
        {
            question: "HTML files are saved with the extension:",
            answer: [
                { option: "txt", correct: false },
                { option: ".hmt", correct: false },
                { option: ".html", correct: false },
                { option: "both b and c", correct: true },
            ]
        },
        {
            question: "Which is the largest header in size ? ",
            answer: [
                { option: "H2", correct: false },
                { option: "H3", correct: false },
                { option: "H6", correct: false },
                { option: "H1", correct: true },
            ]
        },
        {
            question: "HTML tags are enclosed within:",
            answer: [
                { option: "{}", correct: false },
                { option: "[]", correct: false },
                { option: "<>", correct: true },
                { option: "//", correct: false },
            ]
        },
        {
            question: "Which of them does not require a closing tag:",
            answer: [
                { option: "hr", correct: false },
                { option: "br", correct: false },
                { option: "p", correct: false },
                { option: "both a and b", correct: true },
            ]
        },
        {
            question: "Which tag is used to make the text bold:",
            answer: [
                { option: "h1", correct: false },
                { option: "p", correct: false },
                { option: "b", correct: true },
                { option: "h6", correct: false },
            ]
        },
        {
            question: "What is the correct HTML tag for creating a hyperlink?",
            answer: [
                { option: "link", correct: false },
                { option: "a", correct: true },
                { option: "hyperlink", correct: false },
                { option: "url", correct: false },
            ]
        },
        {
            question: "What is the correct HTML tag for creating a line break?",
            answer: [
                { option: "break", correct: false },
                { option: "br", correct: true },
                { option: "line", correct: false },
                { option: "newline", correct: false },
            ]
        },
        {
            question: "Which attribute is used to specify the URL for an image in HTML?",
            answer: [
                { option: "src", correct: true },
                { option: "url", correct: false },
                { option: "img", correct: false },
                { option: "picture", correct: false },
            ]
        },
        {
            question: "What is the basic structure of an HTML document?",
            answer: [
                { option: "head, body, and footer", correct: false },
                { option: "header, main, and footer", correct: false },
                { option: "head, body, and script", correct: false },
                { option: "doctype, head, and body", correct: true },
            ]
        },
        {
            question: "What attribute is used to specify the URL of a link in the tag?",
            answer: [
                { option: "href", correct: true },
                { option: "src", correct: false },
                { option: "link", correct: false },
                { option: "url", correct: false },
            ]
        },
        {
            question: "What is the correct syntax for creating an image in HTML?",
            answer: [
                { option: "img>image.jpg", correct: false },
                { option: "<img src='image.jpg'>", correct: true },
                { option: "img href=image.jpg", correct: false },
                { option: "image src=image.jpg", correct: false },
            ]
        },
        {
            question: "How do you write a comment in HTML?",
            answer: [
                { option: "! comment ", correct: false },
                { option: "-- comment –", correct: false },
                { option: "<!-- comment -->", correct: true },
                { option: "# comment #", correct: false },
            ]
        },
        {
            question: "Are comments visible to the user when the website is viewed in a browser?",
            answer: [
                { option: "Yes", correct: false },
                { option: "No", correct: true },
                { option: "Sometimes", correct: false },
                { option: "None of the above", correct: false },
            ]
        },
        {
            question: "CSS stands for:",
            answer: [
                { option: "Cascading style sheets", correct: true },
                { option: "Cascading sheet style", correct: false },
                { option: "Correcting style sheet", correct: false },
                { option: "None of the above", correct: false },
            ]
        },
        {
            question: "How many ways are there to bring CSS in an HTML file?",
            answer: [
                { option: "2", correct: false },
                { option: "1", correct: false },
                { option: "3", correct: true },
                { option: "4", correct: false },
            ]
        },
        {
            question: "To write inline CSS we use ______ tag",
            answer: [
                { option: "Class", correct: false },
                { option: "Style", correct: true },
                { option: "Id", correct: false },
                { option: "Onstyle", correct: false },
            ]
        },
        {
            question: "How do you import an external style sheet?",
            answer: [
                { option: "Style tag", correct: false },
                { option: "Script tag", correct: true },
                { option: "Link tag", correct: false },
                { option: "Import tag", correct: false },
            ]
        },
        {
            question: "What file extension should we give to a css file?",
            answer: [
                { option: ".styles", correct: false },
                { option: ".stylesheet", correct: false },
                { option: "csssheet", correct: false },
                { option: ".css", correct: true },
            ]
        },
        {
            question: "How many different types of selectors in CSS?",
            answer: [
                { option: "3", correct: false },
                { option: "4", correct: false },
                { option: "5", correct: true },
                { option: "6", correct: false },
            ]
        },
        {
            question: "An id is not always unique within the page so it is chosen to select a single, unique element.",
            answer: [
                { option: "True", correct: true },
                { option: "False", correct: false },
                { option: "Cannot Say", correct: false },
                { option: "Can be true or false", correct: false },
            ]
        },
        {
            question: "Id written with the ?",
            answer: [
                { option: ".", correct: false },
                { option: "$", correct: false },
                { option: "@", correct: false },
                { option: "#", correct: true },
            ]
        },
        {
            question: "How can you change the text color of an element in CSS?",
            answer: [
                { option: "text-color: #ff0000;", correct: false },
                { option: "font-color: #ff0000;", correct: false },
                { option: "color: #ff0000;", correct: true },
                { option: "text-style: color: #ff0000;", correct: false },
            ]
        },
        {
            question: "How can you change the font size of text in CSS?",
            answer: [
                { option: "text-size: 16px;", correct: false },
                { option: "font-size: 16px;", correct: true },
                { option: "size: 16px;", correct: false },
                { option: "font: 16px;", correct: false },
            ]
        },
        {
            question: "What does the display property in CSS do?",
            answer: [
                { option: "It sets the background color of an element", correct: false },
                { option: "It controls the visibility of an element", correct: false },
                { option: "It defines how an element should be displayed on a web page", correct: true },
                { option: "It sets the font size of text", correct: false },
            ]
        },
        {
            question: "What is the default display value of a element in HTML?",
            answer: [
                { option: "inline", correct: false },
                { option: " none", correct: true },
                { option: "block", correct: false },
                { option: "inline-block", correct: false },
            ]
        },
        {
            question: "How do we specify colors in HTML ?",
            answer: [
                { option: "RGBA values", correct: false },
                { option: "RGB values", correct: false },
                { option: "HEX values", correct: false },
                { option: "All of the above", correct: true },
            ]
        },
        {
            question: "HTML tags are",
            answer: [
                { option: "Case sensitive", correct: false },
                { option: "Not case sensitive", correct: true },
                { option: "In upper case", correct: false },
                { option: "In lower case", correct: false },
            ]
        },
        {
            question: "Which property is used to set border colors in HTML ?",
            answer: [
                { option: "Border-color", correct: true },
                { option: "Border", correct: false },
                { option: "Both a and b", correct: false },
                { option: "None of the above", correct: false },
            ]
        },
        {
            question: "Which HTML tag will help in displaying the power expression in  (x² – y²)?",
            answer: [
                { option: "br", correct: false },
                { option: "sup", correct: true },
                { option: "sub", correct: false },
                { option: "None of the above", correct: false },
            ]
        },
        {
            question: "Tag to be used to show the options in the drop-down selection lists?",
            answer: [
                { option: "list", correct: false },
                { option: "dropdown", correct: false },
                { option: "option", correct: false },
                { option: "select", correct: true },
            ]
        },
        {
            question: "________ is  used to read an HTML page and render it?",
            answer: [
                { option: "Web server", correct: false },
                { option: "Web network", correct: false },
                { option: "Web browser", correct: true },
                { option: "Web matrix", correct: false },
            ]
        },
        {
            question: "Author information is mentioned in?",
            answer: [
                { option: "header", correct: false },
                { option: "body", correct: false },
                { option: "footer", correct: true },
                { option: "head", correct: false },
            ]
        },
        {
            question: "Which of the following is not the keyword of form method attribute?",
            answer: [
                { option: "GET", correct: false },
                { option: "POST", correct: false },
                { option: "OUT", correct: true },
                { option: "PUT", correct: false },
            ]
        }
    ];
         

    // function to load the question
    function loadQuestion(index) {
        quesIndex = index;
        const question = questions[index];
        // adding the question with question number
        displayQues.innerText = `Q${index + 1}. ${question.question}`

        // adding the options
        options.innerHTML = "";
        for (let i = 0; i < question.answer.length; i++) {
            const option = question.answer[i];
            const optionElement = document.createElement("button");
            optionElement.innerText = option.option;
            optionElement.addEventListener("click", function () {
                checkAnswer(option.correct);
            });
            options.appendChild(optionElement);
        }

        // adding submit button
        if(quesIndex < questions.length - 2) {
            nextBtn.style.background = "linear-gradient(to bottom, #1e8fec, #0e89ee, #0289f7)";
        }
        else if(quesIndex > questions.length - 2) {
            nextBtn.innerText = "submit";
            nextBtn.style.background = "#36ce36";
        }
        else if(quesIndex > questions.length - 1) {
            questionContainer[0].style.height = "50%";
            nextBtn.style.width = "100%";
        }
    };

    // function to check the answer
    function checkAnswer(isCorrect) {
        if (isCorrect) {
            score++;
        }
        if (quesIndex < questions.length - 1) {
            quesIndex++;
            loadQuestion(quesIndex);
        } else {
            // end of quiz
            endQuiz();
        }
    }

    // function to end the quiz
    function endQuiz() {
        // display the score
        displayQues.innerText = `Quiz ended! Your score is ${score} out of ${questions.length}`
        // hide the navigation buttons
        prevBtn.style.display = "none";
        score = 0;
        quesIndex = 0;
        options.innerHTML = "";
        nextBtn.innerText = "Restart the Quiz";
        nextBtn.classList.add("restart-btn");

        prevBtn.removeEventListener("click", function () {
            if (quesIndex > 0) {
                quesIndex--;
                loadQuestion(quesIndex);
            }
        });

        // add event listener to reset the quiz when "next" button is clicked
        nextBtn.addEventListener("click", function resetQuiz() {
            // reset the button text and class
            nextBtn.innerText = "Next Ques";
            prevBtn.style.display = "block";
            nextBtn.classList.remove("restart-btn");

            // remove the event listener for resetting the quiz
            nextBtn.removeEventListener("click", resetQuiz);

            // restart the quiz
            loadQuestion(0);
        });
    }


    // load the first question
    loadQuestion(0);

    // add event listeners to navigation buttons
    nextBtn.addEventListener("click", function () {
        if (quesIndex < questions.length - 1) {
            quesIndex++;
            loadQuestion(quesIndex);
        } else {
            // end of quiz
            endQuiz();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (quesIndex > 0) {
            quesIndex--;
            loadQuestion(quesIndex);
        }
    });
}

startQuiz();