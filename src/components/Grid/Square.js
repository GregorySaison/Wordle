// ----- IMPORT ----- //
import "./grid.scss";

import Letter from "./Letter";

// ----- COMPONENT ----- //
function Square(props) {
  return (
    <div className="row__square" isActive={!!props.answer}>
      <Letter answer={props.answer} />
    </div>
  );
}

// ----- EXPORT ----- //
export default Square;
