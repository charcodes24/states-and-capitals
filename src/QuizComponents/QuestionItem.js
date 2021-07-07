import { useState, useEffect } from "react";
import ScoreCard from "./ScoreCard";

function QuestionItem({ state, answer, nextQuestion, score, handleInput, resetQuiz }) {
    const [timer, setTimer] = useState(10)
    const {name, "answers":{answer1, answer2, answer3, answer4} } = state

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
    }, [timer]);


 


    function renderQuestion() {
       return (
           <div className="question-container">
               <div className="timer score">
                    <span>TIMER: {timer}</span>
                    <span>SCORE: {score}/50</span>
                </div>
                <div className="question">
                    <h3>What's the state capital of {name}?</h3>
                </div>
                <div className="answer options">
                    <div>
                        <input 
                            type="radio" 
                            id={answer1}
                            checked={answer===answer1}
                            value={answer1} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer1}</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id={answer2}
                            checked={answer===answer2}
                            value={answer2} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer2}</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id={answer3}
                            checked={answer===answer3}
                            value={answer3} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer3}</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id={answer4}
                            checked={answer===answer4}
                            value={answer4} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer4}</label>
                    </div>
                </div>
                <div className="next">
                    <button className="ui blue basic button" onClick={nextQuestion}>Next Question</button>
                </div>
           </div>
       )
       }

    {return (timer === 0) ? <ScoreCard score={score} resetQuiz={resetQuiz}/> : renderQuestion()}

}

export default QuestionItem;