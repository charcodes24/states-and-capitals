import { useState, useEffect } from "react";
import ScoreboardItem from "./ScoreboardItem";

function Scoreboard() {
    const [scoreboard, setScoreboard] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/scoreboard?_sort=score&_order=desc&_start=0&_limit=10')
        .then(res => res.json())
        .then(data => setScoreboard(data))
    }, []);

    const tableDisplay = {
        width: "100px", 
        height: "500px"
    }



    const displayScores = scoreboard.map((score) => {
        return (
            <ScoreboardItem
            key={score.id}
            score={score}
            />
        )
    })

    return (
        <div className="scoreboard">
            <h1>Top 10 Scores...</h1>
            <table className="ui very basic collapsing celled table">
                <thead>
                    <tr><th>Player</th>
                    <th>Correct Guesses</th>
                </tr></thead>
                <tbody>
                    {displayScores}
                </tbody>
            </table>
        </div>
    )
}

export default Scoreboard;