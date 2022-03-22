export type StatusType = 'correct' | 'semi' | 'wrong';

export const checkstatus = (guess: string, solution: string): StatusType[] => {
    const guessChars = guess.split("");
    const solutionChars = solution.split("");

    const status: StatusType[] = [];

    // console.log("-------MAP-------")
    guessChars.map((char, index) => {
        if (char == solutionChars[index]) {
            console.log()
            status[index] = 'correct';
        } else if (solutionChars.includes(char)) {
            status[index] = 'semi';
        } else {
            status[index] = 'wrong';
        }
    });
    // console.log("-------MAP-END------")

    return status;
}