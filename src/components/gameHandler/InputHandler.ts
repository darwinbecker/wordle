import { useState, useEffect } from "react";
import { MAX_WORD_LENGTH } from '../../Config/Settings';
import { MAX_GUESSES } from '../../Config/Settings';
import { Grid } from '../Grid/Root';
import { checkstatus, WordStatusType } from '../WordStatus';
import { isInDictionary, DICTIONARY } from '../../Config/Dictionary';
import { getRandomWord, WORD_OF_THE_DAY } from '../../Config/Wordlist';
import { WinService } from '.';
import { GameMode, GameModeType } from "../GameMode";
import { loadGameStateFromLocalStorage, saveGameStateToLocalStorage } from "../LocalStorage";
import { Confetti } from "../Animations";

import { Subject } from 'rxjs';

const subject = new Subject();

export const InputService = {
    // sendMessage: message => subject.next({ text: message }),
    // clearMessages: () => subject.next(),
    // onMessage: () => subject.asObservable()
    setGuess: (guess: string) => subject.next(guess),
    onGuess: () => subject.asObservable()
};

export const InputHandler = () => {
    const [mode, setMode] = useState<GameModeType>("WOTD");

    const [youWin, setYouWin] = useState<boolean>(false);
    const [youLose, setYouLose] = useState<boolean>(false);

    const [solution, setSolution] = useState<string>(() => {
        return WORD_OF_THE_DAY().solution;
    });

    const [guessedWord, setGuessedWord] = useState<string>("");
    // const [guessedWords, setGuessedWords] = useState<string[]>([]);

    const [guessedWords, setGuessedWords] = useState<string[]>([]);
    // const [guessedWords, setGuessedWords] = useState<string[]>(() => {
    //     const loaded = loadGameStateFromLocalStorage();
    //     if (loaded?.solution !== WORD_OF_THE_DAY().solution) {
    //         return [];
    //     }
    //     const gameWasWon = loaded.guessedWords.includes(solution);
    //     if (gameWasWon) {
    //         setYouWin(true);
    //     }
    //     if (loaded.guessedWords.length === MAX_GUESSES && !gameWasWon) {
    //         setYouLose(true);
    //         //   showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
    //         //     persist: true,
    //         //   })
    //     }
    //     return loaded.guessedWords;
    // });

    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);
    const [wordStatuses, setWordStatuses] = useState<WordStatusType[][]>([]);

    const handleChange = (value: string) => {
        // && guesses.length < MAX_CHALLENGES && !isGameWon
        if (guessedWord.length < MAX_WORD_LENGTH) {
            setGuessedWord(`${guessedWord}${value}`);
            setColumnIndex(columnIndex + 1);
        } else {
            // TODO: display feedback for user
        }
    }

    const handleRemove = () => {
        if (guessedWord.length > 0) {
            setGuessedWord(guessedWord.slice(0, -1));
            setColumnIndex(columnIndex - 1);
        }
    }

    const handleSubmit = () => {
        console.log("Solution:");
        console.log(solution);

        if (guessedWord.length == 5) {
            if (guessedWords.length < MAX_GUESSES) {
                // TODO check if guessWord is in dictionary
                // if (!isInDictionary(guessedWord)) {
                //     console.log("WORD IS NOT IN DICTIONARY");
                //     return;
                // }

                setGuessedWords([...guessedWords, guessedWord]);
                setRowIndex(rowIndex + 1);
                setColumnIndex(0);
                setGuessedWord("");
                const status = checkstatus(guessedWord, solution);
                setWordStatuses([...wordStatuses, status]);

                if (!status.includes('semi') && !status.includes('wrong')) {
                    WinService.setWin(true);
                    // TODO display win screen with button resetGame();
                }

                // last guess
                if (guessedWords.length == MAX_GUESSES - 1) {
                    if (status.includes('semi') || status.includes('wrong')) {
                        WinService.setWin(false);
                        console.log("YOU LOSE!");
                    }
                }

            }
        }
        else {
            // TODO enter 5 characters => shake animation
            console.log("enter 5 characters");
        }
    }

    // const getNextWord = () => {
    //     resetGame();
    //     setSolution(getRandomWord());
    // }

    const resetGame = () => {
        setGuessedWords([]);
        setRowIndex(0);
        setColumnIndex(0);
        setGuessedWord("");
        setWordStatuses([]);
        setYouWin(false);
        setYouLose(false);
        setSolution("");
    }

    useEffect(() => {
        if (mode === "WOTD") {
            const solution = WORD_OF_THE_DAY().solution;
            saveGameStateToLocalStorage({ guessedWords, wordStatuses, solution });
        }
    }, [guessedWords, wordStatuses]);

    useEffect(() => {
        const subscription = WinService.onWin().subscribe(win => {
            if (win) {
                // win event
                setYouWin(true);
                setYouLose(false);
                Confetti();
            } else {
                // lose event
                setYouWin(false);
                setYouLose(true);
            }
        });

        // return unsubscribe method to execute when component unmounts
        return () => {
            subscription.unsubscribe();
        }
    }, []);
    
    useEffect(() => {
        if (youWin || youLose) return;

        const listener = (event: globalThis.KeyboardEvent): any => {
            if (event.code === 'Enter') {
                handleSubmit();
            } else if (event.code === 'Backspace') {
                handleRemove();
            } else {
                const key = event.key.toLocaleUpperCase();
                // TODO remove A-Z => problem with german letters üäö 
                if (key.length == 1 && key >= 'A' && key <= 'Z') {
                    handleChange(key);
                }
            }
        }
        window.addEventListener('keyup', listener);
        return () => {
            window.removeEventListener('keyup', listener);
        }

    }, [handleSubmit, handleRemove, handleChange]);

    
}