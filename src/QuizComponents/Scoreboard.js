import { useState, useEffect } from "react";
import ScoreboardItem from "./ScoreboardItem";

function Scoreboard() {
    const [scoreboard, setScoreboard] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/scoreboard?_sort=score&_order=desc&_start=0&_limit=10')
        .then(res => res.json())
        .then(data => setScoreboard(data))
    }, []);

    //add key attribute
    //display 10: sort by scores, slice off first 10

    const displayScores = scoreboard.map((score) => {
        return (
            <ScoreboardItem
            score={score}
            />
        )
    })

    return (
        <div>
            <h1>Top 10 Scores</h1>
            {displayScores}
        </div>
    )
}

export default Scoreboard;