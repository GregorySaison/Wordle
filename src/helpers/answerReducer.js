export const answerReducer = (userInput, key) => {
  const answer = `${userInput}${key}`;
  console.log(answer);

  if (key === "Backspace") {
    return userInput.slice(0, -1);
  }

  if (answer.length < 6) {
    return answer;
  } else {
    return userInput;
  }
};
