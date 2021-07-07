function ScoreboardItem({ score }) {
    
    return (
        <tr>
            <td>
                <h4 className="ui image header">
                    <i className="red star outline icon"></i>
                    <div className="content">{score.username}</div>
                 </h4></td>
            <td>
                {score.score}
            </td>
        </tr>
    
    )
}


export default ScoreboardItem