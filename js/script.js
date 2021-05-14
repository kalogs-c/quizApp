// Quiz Game elements
const questionText = document.querySelector(".question")
const answersElements = document.querySelectorAll(".answer")
const a_text = document.querySelector(".a_text")
const b_text = document.querySelector(".b_text")
const c_text = document.querySelector(".c_text")
const d_text = document.querySelector(".d_text")
const submitButton = document.querySelector(".submit-button")

let currentQuestion = 0
let score = 0
let answer = undefined

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuestion]

    questionText.textContent = currentQuizData.question
    a_text.textContent = currentQuizData.a
    b_text.textContent = currentQuizData.b
    c_text.textContent = currentQuizData.c
    d_text.textContent = currentQuizData.d

    answer = undefined
}

const getSelected = () => {
    answersElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id
        }
    })
}

const checkCorrectAnswer = () => {
    if (answer == quizData[currentQuestion].correct) {
        score++
    }
}

const uncheckAnswers = () => {
    a.checked = false
    b.checked = false
    c.checked = false
    d.checked = false
}

// Play again and results
const resultsDiv = document.querySelector('.results')
const scoreH2 = document.querySelector('.results > h2')
const playAgainButton = document.querySelector('.results > button')
const quizContainer = document.querySelector('.quiz-container')

const showResults = () => {
    quizContainer.style.opacity = '0'
    quizContainer.style.display = 'none'
    resultsDiv.style.display = 'flex'
    scoreH2.textContent = score

    score = 0
    currentQuestion = 0
}

playAgainButton.addEventListener('click', () => {
    quizContainer.style.opacity = '1'
    quizContainer.style.display = 'block'
    resultsDiv.style.display = 'none'
    loadQuiz()
})

// Alert
const alertBox = document.querySelector('.alert')
const alertButton = document.querySelector('.alert > button')

const showAlert = () => {
    quizContainer.classList.add('blur')
    alertBox.style.display = 'flex'
}

alertButton.addEventListener('click', () => {
    quizContainer.classList.remove('blur') 
    alertBox.style.display = 'none'
})

loadQuiz()

submitButton.addEventListener('click', () => {
    getSelected()
    
    if (!answer) {
        showAlert()
    }
    if (answer) {
        checkCorrectAnswer()
        uncheckAnswers()
        currentQuestion++
    }
    if (currentQuestion === quizData.length) {
        showResults()
    }
    console.log(currentQuestion)

    loadQuiz()
})