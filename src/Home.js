import { Link } from "react-router-dom";


function Home() {

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'red'}}>U.S.A.</h1>
            <Link to="/quiz">
                <button 
                    type="button"  
                    className="ui red basic button">
                    States & Capitals Quiz
                </button>
            </Link>
            <Link to="/funfacts">
                <button 
                    type="button" 
                    className="ui blue basic button">
                    States Fun Facts
                </button>
            </Link>
        </div>
    )
}

export default Home;