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
            if (status[solutionChars.indexOf(char)] == 'correct') {
                status[index] = 'wrong';
            }
        }
    });


    return status;
}