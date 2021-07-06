import Scoreboard from "./Scoreboard";
import ScoreCardForm from "./ScoreCardForm";

function ScoreCard({ score, resetQuiz }) {

    function scoreZero() {
        return (
            <div>
                <h1>Time's Up!</h1>
                <h2>Your Score: {score}</h2>
                <button type="button" onClick={resetQuiz} className="ui submit button">Re-Take Quiz!</button>
            </div>
        )
    }

    function scoreNotZero() {
        return (
            <div>
                <h1>Time's Up!</h1>
                <h2>Your Score: {score}</h2>
                <ScoreCardForm score={score} />
                <button type="button" onClick={resetQuiz} className="ui submit button">Re-Take Quiz!</button>
            </div>
        )
    }
    
    {return (score > 0) ? scoreNotZero() : scoreZero()}

}

export default ScoreCard;