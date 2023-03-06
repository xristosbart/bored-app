import './styles/App.css';
import { useState } from 'react';
import Generator from './components/Generator';
import Suggestions from './components/Suggestions';


function App() {
  const [suggestions, setSuggestions] = useState([])
  const newIdeaId = suggestions.length

  async function generateIdea() {
    return fetch('https://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => setSuggestions([...suggestions.slice(-9), {...data, ideaId : newIdeaId}]));
  }

  return (
    <div className="App">
      <Generator callback={generateIdea}></Generator>
      <Suggestions>{suggestions}</Suggestions>
    </div>
  );
}

export default App;
