import { Link } from "react-router-dom";


function Home() {

    return (
        <div>
            <h1>How well do you know the U.S. states?</h1>
            <Link to="/quiz"><button type="button"  className="ui button">Quiz</button></Link>
            <Link to="/funfacts"><button type="button" className="ui button">Fun Facts</button></Link>
        </div>
    )
}

export default Home;