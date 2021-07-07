import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ScoreCardForm({ score, addNewScore }) {
    const [formData, setFormData] = useState({
        "username": "", 
        "score": score
    })
    const history = useHistory();


    function handleInput(e) {
        setFormData({
            "username": e.target.value,
            "score": score
        })
    }

    //separate route called top scores
    //push new route into history 

    function handleSubmitScore(e) {
        e.preventDefault();
        const configObj = {
            method: "POST", 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({
                "username": formData.username, 
                "score": formData.score
            })
        }
        if (formData.username.length > 0) {
        fetch(`http://localhost:3000/scoreboard/`, configObj) 
        .then(res => res.json())
        .then(data => {
           console.log(data)
            history.push("/scoreboard");
           }
        )
    } else {
        alert('Please enter a name...')
    }
    }

    console.log(formData)

    console.log(score)
    return (
        <div className=" timesup nameform">
            <form onSubmit={handleSubmitScore} className="ui small form">
                <label>Name:</label>
                <input 
                    type="text" 
                    value={formData.username}
                    onChange={handleInput}
                />
                <button className="ui red basic button tu-button">Submit Score</button>
            </form>
        </div>
    )
}

export default ScoreCardForm