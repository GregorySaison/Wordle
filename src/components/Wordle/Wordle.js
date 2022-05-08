// ----- IMPORT ----- //
import { useState } from "react"; // Hook permettant la création et la manipulation de l'état du composant
import { Context } from "./../../helpers/context"; // Import d'un contexte crée

import "./wordle.scss";

import Grid from "./../Grid";

// ----- COMPONENT ----- //
function Wordle() {
  // Je définis un état initial sur la valeur "" dans une variable answer
  // Et une méthode setAnswer me permettant de manipuler ultérieurement cette valeur définie
  const [answer, setAnswer] = useState("");

  return (
    // Je définis mon contexte comme état de mon composant et je lui donne la valeur de answer...
    <Context.Provider value={{ answer }}>
      <div className="wrapper">
        <Grid />
        <input
          maxLength={5}
          type="text"
          // ... Cette valeur étant défini en fonction de l'input de l'utilisateur
          onChange={(event) => setAnswer(event.currentTarget.value)}
        />
      </div>
    </Context.Provider>
  );
}

// ----- EXPORT ----- //
export default Wordle;
