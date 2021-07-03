import { useState } from "react";

function StateCard({ state, updateLikes }) {
    const {id, name, capital, image, fact, likes} = state

    function upVote(e) {
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


    return (
        <div>
            <h2>State:{name}</h2>
            <h3>Capital:{capital}</h3>
            <img src={image}/>
            <p>Fun Fact: {fact}</p>
            <p>Total Likes:{likes}</p>
            <button onClick={upVote}>💙</button>
        </div>
    )
}

export default StateCard;