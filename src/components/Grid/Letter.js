// ----- IMPORT ----- //
import "./grid.scss";

// ----- COMPONENT ----- //
function Letter(props) {
  return <span className="square__letter">{props.answer}</span>;
}

// ----- EXPORT ----- //
export default Letter;
