const questions = [
  {
    "question": "What is the capital of INDIA ?",
    "options": ["Berlin", "Madrid", "NEW Delhi", "Rome"],
    "answer": "NEW Delhi"
  },
  {
    "question": "What is the national animal of India?",
    "options": ["Lion", "Tiger", "Elephant", "Peacock"],
    "answer": "Tiger"
  },
  {
    "question": "Which river is known as the Ganga of the South?",
    "options": ["Godavari", "Krishna", "Kaveri", "Narmada"],
    "answer": "Kaveri"
  },
  {
    "question": "What is the official language of India?",
    "options": ["Hindi", "English", "Bengali", "Tamil"],
    "answer": "Hindi"
  },
  {
    "question": "Which city is known as the Silicon Valley of India?",
    "options": ["Mumbai", "Chennai", "Hyderabad", "Bangalore"],
    "answer": "Bangalore"
  },
  {
    "question": "Who was the first Prime Minister of India?",
    "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"],
    "answer": "Jawaharlal Nehru"
  },
  {
    "question": "Which Indian festival is known as the Festival of Lights?",
    "options": ["Holi", "Diwali", "Eid", "Christmas"],
    "answer": "Diwali"
  },
  {
    "question": "Which state in India has the highest population?",
    "options": ["Maharashtra", "Bihar", "West Bengal", "Uttar Pradesh"],
    "answer": "Uttar Pradesh"
  },
  {
    "question": "What is the currency of India?",
    "options": ["Rupee", "Dollar", "Pound", "Euro"],
    "answer": "Rupee"
  },
  {
    "question": "What is the national sport of India?",
    "options": ["Cricket", "Hockey", "Football", "Badminton"],
    "answer": "Hockey"
  },
  {
    "question": "Which monument in India is known as the Symbol of Love?",
    "options": ["Red Fort", "Qutub Minar", "Taj Mahal", "Gateway of India"],
    "answer": "Taj Mahal"
  }
]

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;

function startQuiz() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('quizpage').style.display = 'block';
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => selectOption(index);
    optionsDiv.appendChild(button);
  });
}

function selectOption(index) {
  const question = questions[currentQuestionIndex];
  if (question.options[index] === question.answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    resetTimer();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    if (timeLeft <= 0) {
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 20;
  document.getElementById('time').textContent = timeLeft;
  startTimer();
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById('quizpage').style.display = 'none';
  document.getElementById('scoreboard').style.display = 'block';
  document.getElementById('score').textContent = score;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('scoreboard').style.display = 'none';
  document.getElementById('homepage').style.display = 'block';
}
