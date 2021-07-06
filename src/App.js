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
    .then(data => {
      console.log(data)
      setStates(data)})
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

  //sort & filter up here


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
