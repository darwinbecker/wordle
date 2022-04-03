import { useState, useEffect } from "react";
import { MAX_WORD_LENGTH, MAX_GUESSES } from '../../Config/Settings';
import { Grid } from '../Grid/Root';
import { checkstatus, WordStatusType } from '../WordStatus';
import { isInDictionary, DICTIONARY } from '../../Config/Dictionary';
import { getRandomWord, WORD_OF_THE_DAY } from '../../Config/Wordlist';
import { WinService } from '../GameHandler';
import { GameMode, GameModeType, GameModeService } from "../GameMode";
import { loadGameStateFromLocalStorage, saveGameStateToLocalStorage, StoredGameState } from "../LocalStorage";
import { Confetti } from "../Animations";

export const Main: React.FC = () => {
    const loaded: StoredGameState | null = loadGameStateFromLocalStorage();

    const [mode, setMode] = useState<GameModeType>("WOTD");
    // const [youWin, setYouWin] = useState<boolean>(false);
    // const [youLose, setYouLose] = useState<boolean>(false);
    const [youWin, setYouWin] = useState<boolean>(() => {
        // if (loaded?.guessedWords.includes(WORD_OF_THE_DAY().solution)) {
        //     Confetti();
        //     return true;
        // } else{
        //     return false;
        // }
        return loaded?.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [youLose, setYouLose] = useState<boolean>(() => {
        return loaded?.guessedWords.length === MAX_GUESSES && !loaded?.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [solution, setSolution] = useState<string>(() => {
        return WORD_OF_THE_DAY().solution;
    });
    const [guessedWord, setGuessedWord] = useState<string>("");
    // const [guessedWords, setGuessedWords] = useState<string[]>([]);
    const [guessedWords, setGuessedWords] = useState<string[]>(() => {
        return loaded?.solution !== WORD_OF_THE_DAY().solution ? [] : loaded.guessedWords;
    });
    // const [wordStatuses, setWordStatuses] = useState<StatusType[][]>([]);
    const [wordStatuses, setWordStatuses] = useState<WordStatusType[][]>(() => {
        return loaded?.solution !== WORD_OF_THE_DAY().solution ? [] : loaded.wordStatuses;
    });
    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);



    // const gameWasWon = loaded.guessedWords.includes(WORD_OF_THE_DAY().solution);
    // if (gameWasWon) {
    //     WinService.setWin(true);
    // }
    // if (loaded.guessedWords.length === MAX_GUESSES && !gameWasWon) {
    //     WinService.setWin(false);
    //     //   showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
    //     //     persist: true,
    //     //   })
    // }



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
                if (!isInDictionary(guessedWord)) {
                    console.log("WORD IS NOT IN DICTIONARY");
                    return;
                }

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

    useEffect(() => {
        if (mode === "WOTD") {
            const solution = WORD_OF_THE_DAY().solution;
            saveGameStateToLocalStorage({ guessedWords, wordStatuses, solution });
        }
    }, [guessedWords, wordStatuses]);

    useEffect(() => {
        const subscription = GameModeService.onGameModeChange().subscribe(mode => {
            console.log("changed mode to: " + mode);
            setMode(mode as GameModeType);
            // if(mode == "WOTD") {
            //     setSolution(WORD_OF_THE_DAY().solution);
            // }
        });
        return () => {
            subscription.unsubscribe();
        }
    }, []);

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

    }, [handleSubmit, handleRemove, handleChange, youWin, youLose]);

    return (
        <>
            <GameMode youWin={youWin} youLose={youLose} resetGame={resetGame} setSolution={setSolution} setGuessedWords={setGuessedWords} setWordStatuses={setWordStatuses} getNextWord={getNextWord}></GameMode>

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