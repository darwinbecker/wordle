import { WordStatus } from "../../types/WordStatus";

export const checkstatus = (guess: string, solution: string): WordStatus[] => {
  const guessChars = guess.toLocaleUpperCase().split("");
  const solutionChars = solution.toLocaleUpperCase().split("");

  const status: WordStatus[] = [];

  const guessHasRepeats = hasRepeats(guess);
  const repeats = [] as string[];

  guessChars.forEach((char, index) => {
    if (char === solutionChars[index]) {
      status[index] = "correct";
    } else if (solutionChars.includes(char)) {
      status[index] = "semi";
    } else {
      status[index] = "wrong";
    }
  });

  guessChars.forEach((char, index) => {
    if (status[index] === "semi") {
      const charCount = solution.split(char);

      let guessedCorrect = false;
      let guessedCorrect2 = false;

      const i = solutionChars.indexOf(char);

      // if (charCount.length - 1 == 1)
      if (status[i] === "correct") {
        status[index] = "wrong";
        guessedCorrect = true;
      }

      if(guessHasRepeats && repeats.includes(char)){
        console.log("test")
        status[index] = "wrong";
        guessedCorrect = true;
      }
      repeats.push(char);      
      
      if (charCount.length - 1 === 2) {
        if (
          status[solutionChars.indexOf(char, i + 1)] === "correct" &&
          guessedCorrect
        ) {
          status[index] = "wrong";
          guessedCorrect2 = true;
        } else {
          status[index] = "semi";
        }
      }

      if (charCount.length - 1 === 3) {
        const i2 = solutionChars.indexOf(char, i + 1);
        if (
          status[solutionChars.indexOf(char, i2 + 1)] === "correct" &&
          guessedCorrect2
        ) {
          status[index] = "wrong";
        } else {
          status[index] = "semi";
        }
      }
    }
  });

  return status;
};

export const getStatuses = (
  guesses: string[],
  solution: string
): { [key: string]: WordStatus } => {
  const charObj: { [key: string]: WordStatus } = {};
  const solutionChars = solution.toLocaleUpperCase().split("");

  guesses.forEach((word) => {
    word.split("").forEach((letter, i) => {
      if (!solutionChars.includes(letter)) {
        return (charObj[letter] = "wrong");
      }

      if (letter === solutionChars[i]) {
        return (charObj[letter] = "correct");
      }

      if (charObj[letter] !== "correct") {
        return (charObj[letter] = "semi");
      }
    });
  });

  return charObj;
};

function hasRepeats (str: string) {
  return /(.).*\1/.test(str);
}