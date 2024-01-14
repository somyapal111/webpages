const questions = [
    {
        question1: "What is the capital of France?",
        options: ["London", "Berlin", "Paris"],
        answer: "Paris",
        question2: "how to comment a html tag?",
        options: ["/*--*/", "//", "!--"],
        answer: "!--",
    }
];
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.querySelector(".options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (const option of questions[currentQuestion].options) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = "Wrong!";
        }
    } else {
        resultElement.textContent = "Please select an option.";
    }
    
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        resultElement.textContent = "";
        nextButton.disabled = true;
    } else {
        questionElement.textContent = "Quiz completed! Your Score: " + score + " out of " + questions.length;
        optionsElement.innerHTML = "";
        resultElement.textContent = "";
        nextButton.style.display = "none";
    }
});

showQuestion();
