// Get references to the question element, answer buttons container, and the next button
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currrentQuestionIndex = 0; // Tracks the current question index
let score = 0; // Tracks the user's score

// Function to start or restart the quiz
function startQuiz () {
    currrentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    nextBtn.innerHTML = "Next"; // Set the next button's text to "Next"
    showQuestion(); // Show the first question
}

// Function to display the current question and its answer options
function showQuestion () {
    resetState(); // Reset the state before displaying the next question

    // Get the current question from the questions array
    let currrentQuestion = questions[currrentQuestionIndex];
    let questionNo = currrentQuestionIndex + 1; // Display question number (1-based)
    questionElement.innerHTML = questionNo + ". " + currrentQuestion.question; // Show the question

    // Loop through each answer option and create a button for each
    currrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; // Set the text of the button to the answer text
        button.classList.add("btn"); // Add a class for styling

        // If the answer is correct, add a data attribute to mark it as correct
        if(answer.correct) {
          button.dataset.correct = answer.correct; 
        }

        // Add the button to the answer buttons container
        answerButtons.appendChild(button);

        // Add a click event listener to the button to handle answer selection
        button.addEventListener("click", selectAnswer);
    })
}

// Function to reset the state before showing the next question
function resetState() {
    nextBtn.style.display = "none"; // Hide the next button
    // Remove all the previous answer buttons (clean up from the last question)
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer (e) {
    const selectedBtn = e.target; // Get the button that was clicked
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the answer is correct

    if(isCorrect) {
        selectedBtn.classList.add("correct"); // Add a class for correct answers
        score++; // Increment the score if the answer is correct
    } else {
        selectedBtn.classList.add("incorrect"); // Add a class for incorrect answers
    }

    // Highlight the correct answer and disable all buttons
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct"); // Highlight the correct answer
        }
        button.disabled = true; // Disable all buttons after selecting an answer
    });

    nextBtn.style.display = "block"; // Show the next button after an answer is selected
}

// Function to display the final score at the end of the quiz
function showScore() {
    resetState(); // Reset the state (remove previous question and answers)
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`; // Display the score
    nextBtn.innerHTML = "Play Again!"; // Change the next button's text to "Play Again!"
    nextBtn.style.display = "block"; // Show the next button to allow restarting the quiz
}

// Function to handle the next question or show the score at the end
function handleNextButton() {
    currrentQuestionIndex++; // Move to the next question
    if(currrentQuestionIndex < questions.length) {
        showQuestion(); // Show the next question
    } else {
        showScore(); // Show the final score when all questions are answered
    }
}

// Event listener for the next button to handle question navigation or restarting the quiz
nextBtn.addEventListener("click", () => {
    if(currrentQuestionIndex < questions.length) {
        handleNextButton(); // Move to the next question
    } else {
        startQuiz(); // Restart the quiz if all questions are completed
    }
});

// Start the quiz on page load
startQuiz();

/*
Steps of the program:
1. **Initialize Elements**:
   - Get references to the question display area, answer buttons container, and the next button.
   - Initialize variables to track the current question index and the user’s score.

2. **Start Quiz**:
   - The `startQuiz()` function initializes the quiz, resetting the score and the current question index.
   - It shows the first question by calling the `showQuestion()` function.

3. **Show Question**:
   - The `showQuestion()` function resets the state (clearing previous answers), displays the current question and its associated answer options.
   - Each answer is rendered as a button, and a click event listener is attached to handle answer selection.

4. **Answer Selection**:
   - When an answer is clicked, the `selectAnswer()` function checks if the selected answer is correct or incorrect.
   - It adds corresponding styles (e.g., green for correct and red for incorrect) and disables further interaction with the answer buttons.
   - It shows the "Next" button to move to the next question or end the quiz.

5. **Show Score**:
   - When all questions have been answered, the `showScore()` function is called to display the final score.
   - The "Next" button is renamed "Play Again" to allow the user to restart the quiz.

6. **Next Button**:
   - The `nextBtn` has an event listener attached, which either moves to the next question or restarts the quiz if all questions have been completed.

7. **Reset State**:
   - The `resetState()` function is called to hide the "Next" button and remove previous question elements before displaying the next question.

8. **Score Tracking**:
   - The user's score is tracked throughout the quiz, incremented by 1 for each correct answer, and displayed at the end of the quiz.
*/
