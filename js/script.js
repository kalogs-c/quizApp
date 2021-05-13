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
        console.log(answer, quizData[currentQuestion].correct)
        score++
    }
}

const uncheckAnswers = () => {
    a.checked = false
    b.checked = false
    c.checked = false
    d.checked = false
}

loadQuiz()

submitButton.addEventListener('click', () => {
    getSelected()
    
    if (!answer) {
        alert('selecione uma resposta')
    }
    if (answer) {
        checkCorrectAnswer()
        uncheckAnswers()
        currentQuestion++
    }
    if (currentQuestion === quizData.length) {
        alert(`acabou. sua pontuaçao: ${score}`)
        score = 0
        currentQuestion = 0
    }
    console.log(currentQuestion)

    loadQuiz()
})