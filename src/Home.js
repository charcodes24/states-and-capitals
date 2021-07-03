import { useHistory } from "react-router-dom";


function Home() {
    const history = useHistory();

    function handleQuizClick() {
        history.push("/quiz")
    }

    function handleFunFactsClick() {
        history.push("/funfacts")
    }


    return (
        <div>
            <h1>How well do you know the U.S. states?</h1>
            <button type="button" onClick={handleQuizClick}>Quizzes</button>
            <button type="button" onClick={handleFunFactsClick}>Fun Facts</button>
        </div>
    )
}

export default Home;