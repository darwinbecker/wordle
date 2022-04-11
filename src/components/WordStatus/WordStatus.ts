export type WordStatusType = 'correct' | 'semi' | 'wrong' | 'correct-high-contrast' | 'semi-high-contrast';

export const checkstatus = (guess: string, solution: string): WordStatusType[] => {
    const guessChars = guess.split("");
    const solutionChars = solution.split("");

    const status: WordStatusType[] = [];

    guessChars.map((char, index) => {
        if (char == solutionChars[index]) {
            status[index] = 'correct';
        } else if (solutionChars.includes(char)) {
            status[index] = 'semi';
        } else {
            status[index] = 'wrong';
        }
    });

    guessChars.map((char, index) => {
        if (status[index] == 'semi') {
            const charCount = solution.split(char);

            let guessedCorrect = false;
            let guessedCorrect2 = false;

            const i = solutionChars.indexOf(char);

            // if (charCount.length - 1 == 1)
            if (status[solutionChars.indexOf(char)] == 'correct') {
                status[index] = 'wrong';
                guessedCorrect = true;
            }

            if (charCount.length - 1 == 2) {
                if (status[solutionChars.indexOf(char, i + 1)] == 'correct' && guessedCorrect) {
                    status[index] = 'wrong';
                    guessedCorrect2 = true;
                } else {
                    status[index] = 'semi';
                }
            }

            if (charCount.length - 1 == 3) {
                const i2 = solutionChars.indexOf(char, i + 1);
                if (status[solutionChars.indexOf(char, i2 + 1)] == 'correct' && guessedCorrect2) {
                    status[index] = 'wrong';
                } else {
                    status[index] = 'semi';
                }
            }
        }
    });


    return status;
}





export const getStatuses = (guesses: string[], solution: string): { [key: string]: WordStatusType } => { // : { [key: string]: WordStatusType }
    const charObj: { [key: string]: WordStatusType } = {}
    const solutionChars = solution.split("");

    guesses.forEach((word) => {
        word.split("").forEach((letter, i) => {
            if (!solutionChars.includes(letter)) {
                return (charObj[letter] = 'wrong')
            }

            if (letter === solutionChars[i]) {
                return (charObj[letter] = 'correct')
            }

            if (charObj[letter] !== 'correct') {
                return (charObj[letter] = 'semi')
            }
        })
    })

    return charObj
}

