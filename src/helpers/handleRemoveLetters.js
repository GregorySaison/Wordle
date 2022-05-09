// ----- LOGIQUE SUPPRESSION LETTRE ----- //
export const handleRemoveLetters = (input) => {
  return input.slice(0, -1); // On supprime la lettre précédente de la saisie actuelle de l'utilisateur
};
