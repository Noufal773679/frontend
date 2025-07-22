const questions = [
  
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["let", "var", "int", "define"],
    answer: "var"
  },
  {
    question: "Which method adds an element to the end of an array in JavaScript?",
    options: ["push()", "append()", "insert()", "add()"],
    answer: "push()"
  },


  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HyperType Machine Language", "HighText Meta Language", "Hyperlink Text Management Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which tag inserts an image in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },


  {
    question: "Which property sets text color in CSS?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: "color"
  },
  {
    question: "How do you center a div horizontally using CSS?",
    options: ["margin-left: auto;", "text-align: center;", "margin: 0 auto;", "padding: auto;"],
    answer: "margin: 0 auto;"
  },

 
  {
    question: "Which is the correct main method declaration in Java?",
    options: [
      "public static void main(String[] args)",
      "public void main(String args[])",
      "static void main(String args)",
      "public void main()"
    ],
    answer: "public static void main(String[] args)"
  },
  {
    question: "What is the default value of an int in Java?",
    options: ["0", "null", "undefined", "NaN"],
    answer: "0"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectOption(li, option);
    optionsList.appendChild(li);
  });
}

function selectOption(selectedElement, selectedOption) {
  const allOptions = document.querySelectorAll("#options li");
  allOptions.forEach(opt => opt.classList.remove("selected"));
  selectedElement.classList.add("selected");

  const correct = questions[currentQuestion].answer;
  if (selectedOption === correct) score++;
  document.getElementById("score").textContent = `Score: ${score}`;

  document.body.classList.add("dark-mode");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>🎉 Quiz Complete!</h2>
      <p>Your Final Score: <strong>${score}/${questions.length}</strong></p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.body.classList.remove("dark-mode");

  document.querySelector(".quiz-container").innerHTML = `
    <h1>Tech Quiz</h1>
    <div id="question">Question text</div>
    <ul id="options"></ul>
    <button onclick="nextQuestion()">Next</button>
    <p id="score">Score: 0</p>
  `;
  loadQuestion();
}

window.onload = loadQuestion;