import { useEffect, useState } from "react";
import Header from "./Header";
import Quiz from "./Quiz";
import FunFacts from "./FunFacts";

function App() {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/states')
    .then(res => res.json())
    .then(data => setStates(data))
  }, []);



  return (
    <div className="App">
      <Header />
      <Quiz />
      <FunFacts 
      states={states}
      />
    </div>
  );
}

export default App;
