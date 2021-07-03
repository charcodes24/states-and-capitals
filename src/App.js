import { useEffect, useState } from "react";
import { Route } from "react-router-dom"
import NavBar from "./QuizComponents/NavBar";
import Home from "./Home";
import Quiz from "./QuizComponents/Quiz";
import FunFacts from "./FunFacts";

function App() {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/states')
    .then(res => res.json())
    .then(data => setStates(data))
  }, []);

  function updateLikes(updatedObj) {
    setStates((mostUpdatedState) => {
      return mostUpdatedState.map((state) => {
        if(updatedObj.id === state.id) {
          return updatedObj
        } else {
          return state
        }
      })
    })
  }


  return (
    <div>
      <NavBar />
        <Route exact path="/quiz">
          <Quiz 
            states={states}
          />
        </Route>
        <Route exact path="/funfacts">
          <FunFacts 
            states={states}
            updateLikes={updateLikes}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

      
      
    </div>
  );
}

export default App;
