import { useState } from "react";
import QuestionItem from "./QuestionItem";

function Quiz({ states }) {
    const [displayQuestion, setDisplayQuestion] = useState(false)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState("")
    const [hideButton, setHideButton] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0);
  
  function handleInput(e) {
    setAnswer(e.target.value)
  }
  console.log(answer)

  function resetQuiz() {
    setDisplayQuestion(!displayQuestion)
    setScore(0)
    setHideButton(!hideButton)
  }

  function nextQuestion(e) {
    if (answer === "") {
      alert(`Please select an answer!`)
    } else if (answer === states[questionIndex].capital && questionIndex < 51) {
      setQuestionIndex(questionIndex + 1)
      setScore(score + 1)
      setAnswer(e.target.value)
    } else {
      setQuestionIndex(questionIndex + 1)
      setAnswer(e.target.value)
      return score
    }
  }

  function toggleDisplayQuestion(e) {
    e.stopPropagation();
    setDisplayQuestion(!displayQuestion)
    setHideButton(!hideButton)
  }

  function renderQuestionItem() {
    if (states.length > 0) {
    return (
      <QuestionItem
        state={states[questionIndex]}
        nextQuestion={nextQuestion}
        handleInput={handleInput}
        score={score}
        answer={answer}
        resetQuiz={resetQuiz}
      />
      )} else {
          return <h1>Loading...</h1>
      }
  }

  function renderStartQuizButton() {
    return (
      <div className="quiz">
        <h1>How many state capitals can you get right in 60 seconds?</h1>
        <button 
          onClick={toggleDisplayQuestion} 
          style={{display: hideButton ? 'block' : null}} 
          className="ui red basic button">
          Start Quiz!
        </button>
      </div>
    )
  }
  
    {return displayQuestion ? renderQuestionItem() : renderStartQuizButton()}
 

}

export default Quiz;