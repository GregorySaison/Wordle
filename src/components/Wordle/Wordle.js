// ----- IMPORT ----- //
import { useEffect, useReducer } from "react";
import { Context } from "./../../helpers/context"; // Import d'un contexte crée
import { answerReducer } from "../../helpers/answerReducer";

import "./wordle.scss";

import Grid from "./../Grid";

// ----- COMPONENT ----- //
function Wordle() {
  // Je définis un état initial sur la valeur "" dans une variable answer
  // Et une méthode setAnswer me permettant de manipuler ultérieurement cette valeur définie
  // useReducer permet l'utilisation de mon answerReducer paramétré
  const [answer, setAnswer] = useReducer(answerReducer, "");

  // Logique de récupération de la valeur de answer
  // Utilisation du hook useEffect
  useEffect(() => {
    const handleKeyDown = (event) => setAnswer(event.key);

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    // Je définis mon contexte comme état de mon composant et je lui donne la valeur de answer...
    <Context.Provider value={{ answer }}>
      <div className="wrapper">
        <Grid />
      </div>
    </Context.Provider>
  );
}

// ----- EXPORT ----- //
export default Wordle;
