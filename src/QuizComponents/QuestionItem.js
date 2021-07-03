import { useState, useEffect } from "react";

function QuestionItem({ state, nextQuestion }) {
    const [timer, setTimer] = useState(90)
    const [score, setScore] = useState(0)
    const {name, "answers":{answer1, answer2, answer3, answer4}, capital} = state

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1500)
    }, [timer]);

    

    return (
        <div>
            <div>
                TIMER: {timer}
            </div>
            <div>
                SCORE: {score}/50
            </div>
            <div>
                <h3>What's the state capital of? {name}</h3>
            </div>
            <div>
                <div onClick={nextQuestion} value={answer1}>{answer1}</div>
                <div onClick={nextQuestion} value={answer2}>{answer2}</div>
                <div onClick={nextQuestion} value={answer3}>{answer3}</div>
                <div onClick={nextQuestion} value={answer4}>{answer4}</div>
            </div>
        </div>
    )
}

export default QuestionItem;