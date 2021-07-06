function StateCard({ state, updateLikes }) {
    const {id, name, capital, image, fact, likes} = state

    function upVote(e) {
        e.preventDefault();
        const configObj = {
            method: "PATCH", 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({"likes": likes + 1})
        }
        fetch(`http://localhost:3000/states/${id}`, configObj) 
        .then(res => res.json())
        .then(data => {
            updateLikes(data)
        })
    }

    const imageStyle = {
        width: "300px", 
        height: "300px"
    }


    return (
        <div className="column">
            <h2>{name}</h2>
            <h3>Capital:{capital}</h3>
            <img src={image} className="image" style={imageStyle}/>
            <p>Fun Fact: {fact}</p>
            <div onClick={upVote} className="ui labeled button" tabindex="0">
                <div className="ui button">
                    <i className="heart icon"></i> Like
                </div>
                <a className="ui basic left pointing label">
                 {likes}
                </a>
            </div>
        </div>
    )
}

export default StateCard;