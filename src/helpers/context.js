import React from "react";

// Un objet contenant les données a transmettre
// answer correspondant a la saisie utilisateur
// et secretWord le mot a trouvé
export const initialState = {
  answer: "",
  secretWord: "hello",
};

// On crée ce "props" téléportable avec en son sein les données de l'objet initialState
export const Context = React.createContext(initialState);
