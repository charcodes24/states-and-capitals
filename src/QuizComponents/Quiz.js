import { useState } from "react";
import QuestionItem from "./QuestionItem";

function Quiz({ states }) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [displayQuestion, setDisplayQuestion] = useState(false)
  const [hideButton, setHideButton] = useState(false)
  
  function nextQuestion() {
    setQuestionIndex(Math.floor(Math.random() * states.length))
  }


  function toggleDisplayQuestion(e) {
    e.stopPropagation();
    setDisplayQuestion(!displayQuestion)
    setHideButton(!hideButton)
  }

  function renderQuestionItem() {
    return (
      <QuestionItem
        state={states[questionIndex]}
        nextQuestion={nextQuestion}
      />
      )
  }

  function renderStartQuizButton() {
    return (
      <div>
        <button onClick={toggleDisplayQuestion} style={{display: hideButton ? 'block' : null}}>Start Quiz!</button>
      </div>
    )
  }

  {return displayQuestion ? renderQuestionItem() : renderStartQuizButton()}
  // return (
  //     <div>
  //       <div>
  //         {displayQuestion ? renderQuestionItem() : null}
  //       </div>
  //       <div>
  //       <button onClick={toggleDisplayQuestion} style={{display: hideButton ? 'block' : null}}>Start Quiz!</button>
  //       </div>
  //     </div>
  // );


}

export default Quiz;