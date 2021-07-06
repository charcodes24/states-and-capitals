function ScoreboardItem({ score }) {
    
    return (
        <h3>{score.username}: {score.score}</h3>
    )
}

export default ScoreboardItem