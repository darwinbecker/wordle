import { useState, KeyboardEvent, MouseEvent, useEffect, useRef } from "react";
import { MAX_WORD_LENGTH } from '../../config/settings';
import { MAX_GUESSES } from '../../config/settings';
import { Grid } from '../grid/root';
import { checkstatus, StatusType } from '../wordStatus';
import { isInDictionary, DICTIONARY } from '../../config/dictionary';
import { WORD_OF_THE_DAY, getRandomWord } from '../../config/wordlist';
import { Win } from '../gameHandler';
import { Mode } from "../settings/mode";
import { ModeType } from "../settings/mode/Mode";

export const Main: React.FC = () => {
    const [mode, setMode] = useState<ModeType>("WOTD");

    const [solution, setSolution] = useState<string>("");
    const [guessedWord, setGuessedWord] = useState<string>("");
    const [guessedWords, setGuessedWords] = useState<string[]>([]);

    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);

    // const [wordStatus, setWordStatus] = useState<StatusType[]>([]);
    const [wordStatuses, setWordStatuses] = useState<StatusType[][]>([]);

    const [youWin, setYouWin] = useState<boolean>(false);
    const [youLose, setYouLose] = useState<boolean>(false);

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
        console.log("Solution:")
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
                    setYouWin(true);
                    // TODO display win screen with button resetGame();
                    Win();
                }

                // last guess
                if (guessedWords.length == MAX_GUESSES - 1) {
                    if (status.includes('semi') || status.includes('wrong')) {
                        setYouLose(true);
                        console.log("YOU LOSE!");
                    }
                }

            }
        }
        else {
            // TODO enter 5 characters => shake animation
            console.log("enter 5 characters")
        }
    }

    const getNextWord = () => {
        resetGame();
        setSolution(getRandomWord());
    }

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


    const handleMode = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedMode = event.target.value as ModeType;
        setMode(selectedMode);
    }

    useEffect(() => {
        // WORD_OF_THE_DAY();

        if (youWin || youLose) return;

        const listener = (event: globalThis.KeyboardEvent): any => {
            if (event.code === 'Enter') {
                // Win();
                handleSubmit();
            } else if (event.code === 'Backspace') {
                handleRemove();
            } else {
                const key = event.key.toLocaleUpperCase();
                // TODO remove A-Z => problem with german letters üäö 
                if (key.length == 1 && key >= 'A' && key <= 'Z') {
                    handleChange(key)
                }
            }
        }
        window.addEventListener('keyup', listener)
        return () => {
            window.removeEventListener('keyup', listener)
        }

    }, [handleSubmit, handleRemove, handleChange])


    // useEffect(() => {
    //     if (mode == 'WOTD') {
    //         resetGame();
    //         setSolution(WORD_OF_THE_DAY().solution);
    //     }
    //     else if (mode == 'TR') {
    //         getNextWord();
    //     }
    //     else if (mode == 'C') {
    //     }
    // }, [mode])

    return (
        <>
            <Mode handleMode={handleMode} currentMode={mode} resetGame={resetGame} setSolution={setSolution} getNextWord={getNextWord}></Mode>

            <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>
            <canvas id="confetti-canvas"></canvas>


            {mode === 'TR' && (youWin || youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={getNextWord}>nächstes Wort</button>
                    <h3>gesuchtes Wort war:</h3>
                    <div className="solution-word">{solution}</div>
                </div>
            )}




            {/* {mode === 'WOTD' && (
                <>
                    <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>
                    <canvas id="confetti-canvas"></canvas>
                </>
            )}

            {mode === 'TR' && (
                <>
                    <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>
                    <canvas id="confetti-canvas"></canvas>
                </>
            )} */}


        </>
    );
}