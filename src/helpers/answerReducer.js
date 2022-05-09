// ----- IMPORT ----- //
import { initialState } from "./context";
import { handleAnswerValidation } from "./handleAnswerValidation";
import { handleKeyDown } from "./handleKeyDown";
import { handleRemoveLetters } from "./handleRemoveLetters";

// ----- CREATION LOGIQUE DE REPONSE AUX ACTIONS DE L'UTILISATEUR ----- //
export const answerReducer = (userInput, key) => {
  if (key === "Backspace") {
    return handleRemoveLetters(userInput);
  }

  if (key === "Enter") {
    return handleAnswerValidation(userInput, initialState.secretWord);
  }

  return handleKeyDown(userInput, key, initialState.secretWord);
};
