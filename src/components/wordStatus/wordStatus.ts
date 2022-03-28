export type StatusType = 'correct' | 'semi' | 'wrong';

export const checkstatus = (guess: string, solution: string): StatusType[] => {
    const guessChars = guess.split("");
    const solutionChars = solution.split("");

    const status: StatusType[] = [];

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
            console.log("----------start----------")

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