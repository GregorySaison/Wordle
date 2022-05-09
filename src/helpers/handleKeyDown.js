// ----- LOGIQUE ENTREE CLAVIER ----- //
export const handleKeyDown = (input, key, word) => {
  const answer = `${input}${key}`;

  if (answer.length < word.length + 1) {
    return answer;
  } else {
    return input;
  }
};
