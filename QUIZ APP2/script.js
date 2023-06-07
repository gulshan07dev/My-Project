const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');


const questions = [
    {
        question: "HTML stands for:",
        answers: {
            a: "High Text Markup Language",
            b: "Hypertext Markup Language",
            c: "Hypertext Markdown Language",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Number of header sizes available in HTML are:",
        answers: {
            a: "1",
            b: "2",
            c: "5",
            d: "6"
        },
        correctAnswer: "d"
    },
    {
        question: "HTML files are saved with the extension:",
        answers: {
            a: "txt",
            b: ".hmt",
            c: ".html",
            d: "both b and c"
        },
        correctAnswer: "d"
    },
    {
        question: "Which is the largest header in size?",
        answers: {
            a: "H2",
            b: "H3",
            c: "H6",
            d: "H1"
        },
        correctAnswer: "d"
    },
    {
        question: "HTML tags are enclosed within:",
        answers: {
            a: "{}",
            b: "[]",
            c: "<>",
            d: "//"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of them does not require a closing tag:",
        answers: {
            a: "hr",
            b: "br",
            c: "p",
            d: "both a and b"
        },
        correctAnswer: "d"
    },
    {
        question: "Which tag is used to make the text bold:",
        answers: {
            a: "h1",
            b: "p",
            c: "b",
            d: "h6"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct HTML tag for creating a hyperlink?",
        answers: {
            a: "link",
            b: "a",
            c: "hyperlink",
            d: "url"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct HTML tag for creating a line break?",
        answers: {
            a: "break",
            b: "br",
            c: "line",
            d: "newline"
        },
        correctAnswer: "b"
    }
    // {
    //     question: "Which attribute is used to specify the URL for an image in HTML?",
    //     answers: {
    //         a: "src",
    //         b: "url",
    //         c: "img",
    //         d: "picture"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "What is the basic structure of an HTML document?",
    //     answers: {
    //         a: "head, body, and footer",
    //         b: "header, main, and footer",
    //         c: "head, body, and script",
    //         d: "doctype, head, and body"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "What attribute is used to specify the URL of a link in the <a> tag?",
    //     answers: {
    //         a: "href",
    //         b: "src",
    //         c: "link",
    //         d: "url"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "What is the correct syntax for creating an image in HTML?",
    //     answers: {
    //         a: "img>image.jpg",
    //         b: "< img src='image.jpg' >",
    //         c: "img href=image.jpg",
    //         d: "image src=image.jpg"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "How do you write a comment in HTML?",
    //     answers: {
    //         a: "! comment",
    //         b: "-- comment –",
    //         c: "<!-- comment -->",
    //         d: "# comment #"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "Are comments visible to the user when the website is viewed in a browser?",
    //     answers: {
    //         a: "Yes",
    //         b: "No",
    //         c: "Sometimes",
    //         d: "None of the above"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "CSS stands for:",
    //     answers: {
    //         a: "Cascading style sheets",
    //         b: "Cascading sheet style",
    //         c: "Correcting style sheet",
    //         d: "None of the above"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "How many ways are there to bring CSS in an HTML file?",
    //     answers: {
    //         a: "2",
    //         b: "1",
    //         c: "3",
    //         d: "4"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "To write inline CSS we use ______ tag",
    //     answers: {
    //         a: "Class",
    //         b: "Style",
    //         c: "Id",
    //         d: "Onstyle"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "How do you import an external style sheet?",
    //     answers: {
    //         a: "Style tag",
    //         b: "Script tag",
    //         c: "Link tag",
    //         d: "Import tag"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "What file extension should we give to a css file?",
    //     answers: {
    //         a: ".styles",
    //         b: ".stylesheet",
    //         c: "csssheet",
    //         d: ".css"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "How many different types of selectors in CSS?",
    //     answers: {
    //         a: "3",
    //         b: "4",
    //         c: "5",
    //         d: "6"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "An id is not always unique within the page so it is chosen to select a single, unique element.",
    //     answers: {
    //         a: "True",
    //         b: "False",
    //         c: "Cannot Say",
    //         d: "Can be true or false"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "Id written with the ?",
    //     answers: {
    //         a: ".",
    //         b: "$",
    //         c: "@",
    //         d: "#"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "How can you change the text color of an element in CSS?",
    //     answers: {
    //         a: "text-color: #ff0000;",
    //         b: "font-color: #ff0000;",
    //         c: "color: #ff0000;",
    //         d: "text-style: color: #ff0000;"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "How can you change the font size of text in CSS?",
    //     answers: {
    //         a: "text-size: 16px;",
    //         b: "font-size: 16px;",
    //         c: "size: 16px;",
    //         d: "font: 16px;"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "What does the display property in CSS do?",
    //     answers: {
    //         a: "It sets the background color of an element",
    //         b: "It controls the visibility of an element",
    //         c: "It defines how an element should be displayed on a web page",
    //         d: "It sets the font size of text"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "What is the default display value of a element in HTML?",
    //     answers: {
    //         a: "inline",
    //         b: "none",
    //         c: "block",
    //         d: "inline-block"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "How do we specify colors in HTML ?",
    //     answers: {
    //         a: "RGBA values",
    //         b: "RGB values",
    //         c: "HEX values",
    //         d: "All of the above"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "HTML tags are",
    //     answers: {
    //         a: "Case sensitive",
    //         b: "Not case sensitive",
    //         c: "In upper case",
    //         d: "In lower case"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "Which property is used to set border colors in HTML ?",
    //     answers: {
    //         a: "Border-color",
    //         b: "Border",
    //         c: "Both a and b",
    //         d: "None of the above"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "Which HTML tag will help in displaying the power expression in  (x² – y²)?",
    //     answers: {
    //         a: "br",
    //         b: "sup",
    //         c: "sub",
    //         d: "None of the above"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "Tag to be used to show the options in the drop-down selection lists?",
    //     answers: {
    //         a: "list",
    //         b: "dropdown",
    //         c: "option",
    //         d: "select"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "________ is  used to read an HTML page and render it?",
    //     answers: {
    //         a: "Web server",
    //         b: "Web network",
    //         c: "Web browser",
    //         d: "Web matrix"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "Author information is mentioned in?",
    //     answers: {
    //         a: "header",
    //         b: "body",
    //         c: "footer",
    //         d: "head"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "Which of the following is not the keyword of form method attribute?",
    //     answers: {
    //         a: "GET",
    //         b: "POST",
    //         c: "OUT",
    //         d: "PUT"
    //     },
    //     correctAnswer: "c"
    // }

];

let noOfAnswerCorrect;

if (localStorage.getItem(noOfAnswerCorrect)) {
    quizContainer.classList.add("showResult");
    resultContainer.classList.add("showResult");
    resultContainer.innerHTML = `You got ${localStorage.getItem(noOfAnswerCorrect)} out of ${questions.length}.`;
}

function showQuestions() {
    let output = [];

    questions.forEach((question, questionNumber) => {
        let answers = [];
        for (letter in question.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}. ${question.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
                <h3>Q.${questionNumber + 1} ${question.question}</h3>
                <div class="answers">${answers.join('')}</div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

let numAnswered = 0;

function checkResults() {
    if (checkOptions()) {
        showResult();
    } else {
        alert("Please answer all questions.");
    }
}

function checkOptions() {
    let answerContainers = quizContainer.querySelectorAll(".answers");
    let allAnswered = true;
    questions.forEach((question, questionNumber) => {
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (!userAnswer) {
            allAnswered = false;
        }
    });
    return allAnswered;
}


function showResult() {
    submitBtn.innerHTML = "Reset";
    submitBtn.style.background = "red";
    submitBtn.removeEventListener("click", checkResults);
    submitBtn.addEventListener("click", resetQuiz);

    let answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;

    questions.forEach((question, questionNumber) => {
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;
        let correctAnswerLabel = answerContainer.querySelector(`input[value="${question.correctAnswer}"]`).parentNode;

        if (userAnswer === question.correctAnswer) {
            numCorrect++;
            correctAnswerLabel.style.color = "#1fb700";
            correctAnswerLabel.style.fontWeight = "600";
        } else {
            let userAnswerLabel = answerContainer.querySelector(`input[value="${userAnswer}"]`).parentNode;
            if (userAnswerLabel) {
                userAnswerLabel.style.color = "red";
            }
            correctAnswerLabel.style.color = "#1fb700";
        }
    });


    localStorage.setItem(noOfAnswerCorrect, numCorrect)
    console.log(localStorage.getItem(noOfAnswerCorrect));

    quizContainer.classList.add("showResult");
    resultContainer.classList.add("showResult");
    alert(`You got ${numCorrect} out of ${questions.length}.`);
    resultContainer.innerHTML = `You got ${numCorrect} out of ${questions.length}.`;
}


function resetQuiz() {
    let answerContainers = quizContainer.querySelectorAll(".answers");

    // Clear user's answers and styles
    answerContainers.forEach((answerContainer) => {
        let inputs = answerContainer.querySelectorAll("input");
        inputs.forEach((input) => {
            input.checked = false;
            input.parentNode.style.color = "";
            input.parentNode.style.fontWeight = "";
        });
    });

    // Reset result container
    quizContainer.classList.remove("showResult");
    resultContainer.classList.remove("showResult");

    // Reset result message
    resultContainer.innerHTML = "";

    // Reset submit button
    submitBtn.innerHTML = "Submit";
    submitBtn.style.background = "linear-gradient(to left, #3a3aff, #3535ff)";
    submitBtn.removeEventListener("click", resetQuiz);
    submitBtn.addEventListener("click", checkResults);
}

showQuestions();

submitBtn.addEventListener("click", checkResults);
