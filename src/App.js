import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Quiz from "./QuizComponents/Quiz";
import Scoreboard from "./QuizComponents/Scoreboard";
import FunFacts from "./FunFacts";

function App() {
  const [states, setStates] = useState([])

  

  useEffect(() => {
    fetch('http://localhost:3000/states')
    .then(res => res.json())
    .then(states => {
      const shuffledArray = states.sort((a, b) => 0.5 - Math.random());
      setStates(shuffledArray)})
  }, []);

  console.log(states)


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
        <Switch>
        <Route path="/quiz">
          <Quiz 
            states={states}
          />
        </Route>
        <Route path="/scoreboard">
          <Scoreboard />
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
        </Switch>
    </div>
  );
}

export default App;
