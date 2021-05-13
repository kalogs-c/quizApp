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
}

const getSelected = () => {
    answersElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id
        }
    })
}

const checkCorrectAnswer = () => {
    if (answer === quizData[currentQuestion].correct) {
        return true
    }
}

loadQuiz()

submitButton.addEventListener('click', () => {
    getSelected()
    console.log(answer)
    if (checkCorrectAnswer() === true) {
        currentQuestion++

        if (currentQuestion < quizData.length) {
            loadQuiz()
        }
    }
})