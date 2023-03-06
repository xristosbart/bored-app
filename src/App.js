import './App.css';
import { useState } from 'react';


function App() {
  const [suggestions, setSuggestions] = useState([])
  const newIdeaId = suggestions.length

  async function generateIdea() {
    return fetch('https://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => setSuggestions([...suggestions, {...data, ideaId : newIdeaId}]));
  }

  return (
    <div className="App">
      <button onClick={generateIdea}>Generate</button>
      <ul>
        {suggestions.map( (item) => <li key={item.ideaId}>{item.activity}</li>)}
      </ul>
    </div>
  );
}

export default App;
