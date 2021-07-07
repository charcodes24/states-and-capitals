function ScoreboardItem({ score }) {
    
    return (
        <li>{score.username}...{score.score}</li>
    )
}


export default ScoreboardItem