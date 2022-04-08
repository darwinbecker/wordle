import { useState, useEffect, useContext } from "react";
import { MAX_WORD_LENGTH, MAX_GUESSES } from '../../Config/Settings';
import { Grid } from '../Grid/Root';
import { checkstatus, WordStatusType } from '../WordStatus';
import { isInDictionary, DICTIONARY } from '../../Config/Dictionary';
import { getRandomWord, WORD_OF_THE_DAY } from '../../Config/Wordlist';
import { GameMode, GameModeType, GameModeService } from "../GameMode";
import { loadGameStateFromLocalStorage, loadPlayerStatsFromLocalStorage, saveGameStateToLocalStorage, StoredGameState, StoredPlayerStats, savePlayerStatsToLocalStorage } from "../LocalStorage";
import { Confetti } from "../Animations";
// import { WinService } from '../GameHandler';

export const Main: React.FC = () => {
    const loadedGameState: StoredGameState | null = loadGameStateFromLocalStorage();
    const loadedPlayerStats: StoredPlayerStats = loadPlayerStatsFromLocalStorage();

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
        return loadedGameState?.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [youLose, setYouLose] = useState<boolean>(() => {
        return loadedGameState?.guessedWords.length === MAX_GUESSES && !loadedGameState?.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [solution, setSolution] = useState<string>(() => {
        return WORD_OF_THE_DAY().solution;
    });
    const [guessedWord, setGuessedWord] = useState<string>("");
    // const [guessedWords, setGuessedWords] = useState<string[]>([]);
    const [guessedWords, setGuessedWords] = useState<string[]>(() => {
        return loadedGameState?.solution !== WORD_OF_THE_DAY().solution ? [] : loadedGameState.guessedWords;
    });
    // const [wordStatuses, setWordStatuses] = useState<StatusType[][]>([]);
    const [wordStatuses, setWordStatuses] = useState<WordStatusType[][]>(() => {
        return loadedGameState?.solution !== WORD_OF_THE_DAY().solution ? [] : loadedGameState.wordStatuses;
    });
    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);


    const [stats, setStats] = useState<StoredPlayerStats>(loadedPlayerStats);


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

    const updatePlayerStats = (win: boolean): StoredPlayerStats => {

        const gameStats: StoredPlayerStats = { ...stats }
        gameStats.gamesPlayed += 1;
        console.log(win);
        if (win) {
            gameStats.wins += 1;
            gameStats.trysPerWin[guessedWords.length] += 1;
            gameStats.winStreak += 1;
            gameStats.bestWinStreak = (gameStats.winStreak >= gameStats.bestWinStreak) ? gameStats.winStreak : gameStats.bestWinStreak;
        } else {
            gameStats.losses += 1;
            gameStats.winStreak = 0;
        }

        return gameStats;
    }

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
                    // WinService.setWin(true);
                    if (mode === "WOTD") {
                        const newStats = updatePlayerStats(true);
                        setStats(newStats);
                        savePlayerStatsToLocalStorage(newStats);
                    }
                    setYouWin(true);
                    Confetti();
                    //TODO: setStats(updateStats);
                    // TODO display win screen with button resetGame();
                    return;
                }

                // last guess
                if (guessedWords.length == MAX_GUESSES - 1) {
                    if (status.includes('semi') || status.includes('wrong')) {
                        console.log("YOU LOSE!");
                        // WinService.setWin(false);
                        if (mode === "WOTD") {
                            const newStats = updatePlayerStats(false);
                            setStats(newStats);
                            savePlayerStatsToLocalStorage(newStats);
                            setYouLose(true);
                        }
                        //TODO: setStats(updateStats);
                        return;
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

    // useEffect(() => {
    //     if (mode === "WOTD") {
    //         console.log("YOU WIN ODER SO!");

    //         const newStats = updatePlayerStats(true);
    //         setStats(newStats);
    //         savePlayerStatsToLocalStorage(newStats);
    //     }
    // }, [youLose, youWin]);

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

    // useEffect(() => {
    //     const subscription = WinService.onWin().subscribe(win => {
    //         if (win) {
    //             // win event
    //             setYouWin(true);
    //             setYouLose(false);
    //             Confetti();
    //         } else {
    //             // lose event
    //             setYouWin(false);
    //             setYouLose(true);
    //         }
    //     });

    //     // return unsubscribe method to execute when component unmounts
    //     return () => {
    //         subscription.unsubscribe();
    //     }
    // }, []);

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
            <GameMode youWin={youWin} youLose={youLose} setYouWin={setYouWin}  setYouLose={setYouLose}resetGame={resetGame} setSolution={setSolution} setGuessedWords={setGuessedWords} setWordStatuses={setWordStatuses} getNextWord={getNextWord} stats={stats}></GameMode>

            <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>
            <canvas id="confetti-canvas"></canvas>

            {mode === 'WOTD' && (youLose) && (
                <div className="gameover-feedback">
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{WORD_OF_THE_DAY().solution}</div>
                </div>
            )}

            {mode === 'TR' && (youWin || youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={getNextWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
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