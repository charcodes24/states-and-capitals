import { useState } from "react";
import { Route } from "react-router-dom";
import QuestionItem from "./QuestionItem";
import Scoreboard from "./Scoreboard";

function Quiz({ states }) {
    //useEffect 
    const [questionIndex, setQuestionIndex] = useState(Math.floor(Math.random() * states.length));
    const [displayQuestion, setDisplayQuestion] = useState(false)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState("")
    const [hideButton, setHideButton] = useState(false)
  
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
      //initial value to be 0
      //useEffect when states change set question index 
    setQuestionIndex(Math.floor(Math.random() * states.length))
    if (answer === states[questionIndex].capital) {
      setScore(score + 1)
      setAnswer(e.target.value)
    } else {
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
      console.log(states, questionIndex)
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
      <div>
        <button onClick={toggleDisplayQuestion} style={{display: hideButton ? 'block' : null}} className="ui button">Start Quiz!</button>
      </div>
    )
  }
  
    {return displayQuestion ? renderQuestionItem() : renderStartQuizButton()}
 

}

export default Quiz;