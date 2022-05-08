// ----- IMPORT ----- //
import "./grid.scss";

import Row from "./Row";

// ----- COMPONENT ----- //
function Grid() {
  return (
    <section className="grid">
      {/* Je définis une ligne active comme celle du jeu en cours.
          Les autres sont donc automatiquement sur false
          On aura alors une alternance de la valeur true au cours du jeu */}
      <Row isActive />
      <Row isActive={false} />
      <Row isActive={false} />
      <Row isActive={false} />
      <Row isActive={false} />
      <Row isActive={false} />
    </section>
  );
}

// ----- EXPORT ----- //
export default Grid;
