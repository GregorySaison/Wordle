// ----- IMPORT ----- //
import React from "react";
import { Context } from "../../helpers/context"; // Import d'un contexte crée
import { useContext } from "react"; // Hook permettant l'utilisation d'un contexte défini

import "./grid.scss";

import Square from "./Square";

// ----- COMPONENT ----- //
function Row(props) {
  // J'utilise le contexte comme valeur de la variable answer
  const { answer } = useContext(Context);
  // Le props contient une propriété isActive
  // Si elle est true, on entre la valeur de answer
  // Si non, on ne retourne rien
  // C'est ainsi que seul le composant Row avec la valeur isActive sur true verra l'input de l'utilisateur entré
  const getAnswer = (i) => {
    if (props.isActive) {
      return answer[i];
    } else {
      return "";
    }
  };

  return (
    <div className="grid__row">
      {/* On crée un découpage de la valeur de answer pour entré lettre par lettre dans chaque composant Square */}
      {Array.from(Array(5).keys()).map((_, i) => (
        <Square answer={getAnswer(i)} />
      ))}
    </div>
  );
}

// ----- EXPORT ----- //
export default Row;
