function ScoreboardItem({ score }) {
    
    return (
        <tr>
            <td>{score.username}</td>
             <td>{score.score}</td>
        </tr>
    )
}


export default ScoreboardItem