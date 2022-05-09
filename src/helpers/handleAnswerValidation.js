// ----- LOGIQUE ANALYSE REPONSE ----- //
export const handleAnswerValidation = (input, answer) => {
  if (input.length < answer.length) {
    console.log("mot trop court");
    return input; // On évite la remise à zéro de la saisie de l'utilisateur
  }

  if (input !== answer) {
    console.log("nope, trompé");
    return input; // On évite la remise à zéro de la saisie de l'utilisateur
  }

  console.log("bravo t'as trouvé", input);
  return input; // On évite la remise à zéro de la saisie de l'utilisateur
};
