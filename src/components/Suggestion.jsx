import "../styles/Suggestion.css";
import PercentBar from "./PercentBar";

function Suggestion(props) {
  const item = props.children;
  return (
    <li key={item.ideaId} className="container">
      <h2>{item.activity}</h2>
      <span className="type">{item.type}</span>
      <br />
      <div className="property">
        Accessibility
        <PercentBar ideal="high">{1 - item.accessibility}</PercentBar>
      </div>
      <div className="property">
        Price
        <PercentBar ideal="low">{item.price}</PercentBar>
      </div>
    </li>
  );
}

export default Suggestion;
