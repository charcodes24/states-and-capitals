import { useState, useEffect } from "react";
import ScoreCard from "./ScoreCard";

function QuestionItem({ state, answer, nextQuestion, score, handleInput, resetQuiz }) {
    const [timer, setTimer] = useState(10)
    const {name, "answers":{answer1, answer2, answer3, answer4} } = state

    console.log(state.answers)

    // useEffect(() => {
    //     timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)

    // }, [timer]);

 


    // function renderQuestion() {
    
        return (
            <div>
                <div>
                    <h5>TIMER: {timer}</h5>
                    <h5>SCORE: {score}/50</h5>
                </div>
                <div>
                    <h3>What's the state capital of {name}?</h3>
                <div>
                    <div style={{padding: '10px'}}>
                        <input 
                            type="radio" 
                            id={answer1}
                            checked={answer===answer1}
                            value={answer1} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer1}</label>
                        <input 
                            type="radio" 
                            id={answer2}
                            checked={answer===answer2}
                            value={answer2} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer2}</label>
                        <input 
                            type="radio" 
                            id={answer3}
                            checked={answer===answer3}
                            value={answer3} 
                            name="choice"
                            onChange={handleInput}
                        />
                        <label>{answer3}</label>
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
                        <br/>
                        <button onClick={nextQuestion}>Next Question</button>
                    </div>
                </div>
            </div>
        )
    // }

    // {return (timer === 0) ? <ScoreCard score={score} resetQuiz={resetQuiz}/> : renderQuestion()}

}

export default QuestionItem;