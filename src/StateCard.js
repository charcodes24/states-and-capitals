function StateCard({ state, updateLikes }) {
    const {id, name, capital, image, fact, likes, est, flag} = state

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

    const backOfCardStyle = {
        textAlign: "center",
    }


    return (
        <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={image} className="visible content" style={imageStyle} alt={`Picture of ${name}`} />
          <div className="hidden content" style={backOfCardStyle}>
                <h1>{capital}, {name}</h1>
                <p style={{fontSize: '16px', fontWeight: 'bold', padding: '8px'}}>{fact}</p>
                <p style={{fontSize: '10px', color: 'red'}}>Fun fact brought to you by:</p>
                <a style={{fontSize: '10px'}} href="https://www.lonelyplanet.com/articles/fun-facts-about-us-states">www.lonelyplanet.com</a>
            </div>
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">{capital}</span>
            <br/>
            <span className="date">Est.{est}</span>
          </div>
        </div>
        <div className="extra content">
          <a onClick={upVote}>
            <i className="heart icon" />
            {likes}
          </a>
        </div>
      </div>
    )


    // return (
    //     <div className="column">
    //         <h2>{name}</h2>
    //         <h3>Capital:{capital}</h3>
    //         <img src={image} className="image" style={imageStyle}/>
    //         <p>Fun Fact: {fact}</p>
    //         <div onClick={upVote} className="ui labeled button" tabindex="0">
    //             <div className="ui button">
    //                 <i className="heart icon"></i> Like
    //             </div>
    //             <a className="ui basic left pointing label">
    //              {likes}
    //             </a>
    //         </div>
    //     </div>
    // )
}

export default StateCard;