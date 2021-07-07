import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ScoreCardForm({ score, addNewScore }) {
    const [formData, setFormData] = useState({
        "username": "", 
        "score": score
    })
    const [isValid, setIsValid] = useState(true)
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
        fetch(`http://localhost:3000/scoreboard/`, configObj) 
        .then(res => res.json())
        .then(data => {
           console.log(data)
           if (formData.username.trim().length === 0 ) {
               setIsValid(false)
               alert(`please enter a name`)
           } else {
            history.push("/scoreboard");
           }
        })
    }

    console.log(formData)

    console.log(score)
    return (
        <div>
            <form onSubmit={handleSubmitScore} className="ui small form">
                <label style={{color: !isValid ? 'red' : 'black'}}>Name:</label>
                <input 
                    type="text" 
                    value={formData.username}
                    onChange={handleInput}
                    style={{borderColor: !isValid ? 'red' : 'black', 
                            background: !isValid ? 'lightBlue' : 'transparent'
                        }}
                />
                <button className="ui submit button">Submit Score</button>
            </form>
        </div>
    )
}

export default ScoreCardForm