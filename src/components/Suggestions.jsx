import Suggestion from "./Suggestion.jsx";

function Suggestions(props) {
  return (
    <ul>
      {props.children.map((item) => <Suggestion>{item}</Suggestion>).reverse()}
    </ul>
  );
}

export default Suggestions;
