const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
      answer: 0
    }
  ];
  
  // State variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM elements
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  const scoreEl = document.getElementById('score');
  
  // Load question
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => handleAnswer(index));
      optionsEl.appendChild(button);
    });
  }
  
  // Handle answer
  function handleAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
      score++;
    }
    nextButton.style.display = 'block';
  }
  
  // Next question
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      nextButton.style.display = 'none';
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  // Show score
  function showScore() {
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    nextButton.style.display = 'none';
    scoreEl.style.display = 'block';
    scoreEl.textContent = `Your Score: ${score}`;
  }
  
  // Initialize quiz
  loadQuestion();
  