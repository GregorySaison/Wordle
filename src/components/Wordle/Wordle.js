// ----- IMPORTS ----- //
import { useEffect, useReducer } from "react"; // Import des Hooks permettant la création et la manipulation du composant
import { Context, initialState } from "./../../helpers/context"; // Import du contexte crée et de ses données
import { answerReducer } from "../../helpers/answerReducer"; // Import du Reducer

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
    <Context.Provider value={{ ...initialState, answer }}>
      <div className="wrapper">
        mot secret: {initialState.secretWord}
        <Grid />
      </div>
    </Context.Provider>
  );
}

// ----- EXPORT ----- //
export default Wordle;
