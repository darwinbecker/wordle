import { useEffect, useReducer, useState } from "react";
import { MAX_GUESSES, MAX_WORD_LENGTH } from "../../Config/Settings";
import { WORD_OF_THE_DAY, getRandomWord } from "../../Config/Wordlist";
import { loadGameState, loadPlayerStats, saveGameState, GameState, PlayerStats, savePlayerStats, loadRapidScore1Min, saveRapidScore1Min, loadRapidScore3Min, saveRapidScore3Min, loadRapidScore5Min, saveRapidScore5Min } from "../LocalStorage";
import { checkstatus, WordStatusType } from "../WordStatus";
import { Popup } from "../Popup";
import { GameModeHandlerService } from "./GameModeHandlerService";
import { Confetti } from "../Animations";
import { NavigationBar } from "../Navigation";
import { Grid } from "../Grid";
import { CategoryMode, InputHandler, RapidMode, TRMode, WinService, WOTDMode } from ".";
import { Timer } from "../Timer";
import { useSnackbar } from 'notistack';

// WOTD = Word Of The Day / TR = Training / C = Category / R = Rapid
export type GameModeType = 'WOTD' | 'TR' | 'C' | 'R';

const initialState = { count: 0 };

// function reducer(state: any, action: any): {} {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'reset':
//             return initialState;
//         default:
//             throw new Error();
//     }
// }

export const GameHandler: React.FC = () => {

    // const [state, dispatch] = useReducer(reducer, initialState);

    const [gameMode, setGameMode] = useState<GameModeType>("WOTD");
    const [showPopup, setShowPopup] = useState(true);

    const loadedGameState: GameState = loadGameState();
    const loadedPlayerStats: PlayerStats = loadPlayerStats();

    const [youWin, setYouWin] = useState<boolean>(() => {
        return loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [youLose, setYouLose] = useState<boolean>(() => {
        return loadedGameState.guessedWords.length === MAX_GUESSES && !loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [solution, setSolution] = useState<string>(() => {
        console.log(WORD_OF_THE_DAY().solution);
        return WORD_OF_THE_DAY().solution;
    });
    const [guessedWord, setGuessedWord] = useState<string>("");
    const [guessedWords, setGuessedWords] = useState<string[]>(() => {
        return loadedGameState.solution !== WORD_OF_THE_DAY().solution ? [] : loadedGameState.guessedWords;
    });
    const [wordStatuses, setWordStatuses] = useState<WordStatusType[][]>(() => {
        return loadedGameState.solution !== WORD_OF_THE_DAY().solution ? [] : loadedGameState.wordStatuses;
    });

    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);
    const [stats, setStats] = useState<PlayerStats>(loadedPlayerStats);

    const [timer, setTimer] = useState<number>();
    const [pauseTimer, setPauseTimer] = useState<boolean>(true);

    const [rapidMode, setRapidMode] = useState<number>(0);
    const [rapidModeScore, setRapidModeScore] = useState<number>(0);

    const [isInputError, setIsInputError] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const resetRapidMode = () => {
        resetGame();
        setSolution("TIMER");
        setRapidModeScore(0);
        setPauseTimer(true);
        const t = new Date().getTime() + rapidMode * 60 * 1000;
        setTimer(t);
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
        setIsInputError(false);
    }

    const getNextWord = () => {
        resetGame();
        // setSolution(getRandomWord());
        setSolution("TIMER");
    }


    const handleChange = (value: string): void => {
        if (youWin || youLose) return;
        // && guesses.length < MAX_CHALLENGES && !isGameWon
        if (guessedWord.length < MAX_WORD_LENGTH) {
            // props.setIsInputError(false);
            setGuessedWord(`${guessedWord}${value}`);
            setColumnIndex(columnIndex + 1);
        } else {
            // TODO: display feedback for user
        }
    }

    const handleRemove = (): void => {
        if (guessedWord.length > 0) {
            // props.setIsInputError(false);
            setGuessedWord(guessedWord.slice(0, -1));
            setColumnIndex(columnIndex - 1);
        }
    }

    const handleSubmit = (): void => {
        // console.log("Solution:");
        // console.log(props.solution);

        if (guessedWord.length == 5) {
            if (guessedWords.length < MAX_GUESSES) {
                // TODO check if guessWord is in dictionary
                // if (!isInDictionary(props.guessedWord)) {
                //     console.log("WORD IS NOT IN DICTIONARY");
                //     return;
                // }

                setIsInputError(false);
                setRowIndex(rowIndex + 1);
                setColumnIndex(0);
                setGuessedWord("");
                setGuessedWords([...guessedWords, guessedWord]);
                const status = checkstatus(guessedWord, solution);
                setWordStatuses([...wordStatuses, status]);

                // set win
                if (guessedWord === solution) {
                    if (gameMode === "WOTD") {
                        const newStats = updatePlayerStats(true);
                        setStats(newStats);
                        savePlayerStats(newStats);
                        enqueueSnackbar('Du hast das heutige Wort richtig erraten! 🎉', { variant: 'success' });
                    }

                    if (gameMode == "R") {
                        setRapidModeScore(rapidModeScore + 1);
                        getNextWord();
                    } else {
                        setYouWin(true);
                        Confetti();
                    }
                    WinService.setWin(true);

                    return;
                }

                // last guess, set lose
                if (guessedWords.length == MAX_GUESSES - 1) {
                    if (guessedWord !== solution) {
                        console.log("YOU LOSE!");
                        if (gameMode === "WOTD") {
                            const newStats = updatePlayerStats(false);
                            setStats(newStats);
                            savePlayerStats(newStats);
                        }

                        if (gameMode == "R") {
                            setPauseTimer(true);
                            console.log("rapidModeTimerMinutes")
                            console.log(rapidMode)
                            if (rapidMode == 1) {
                                const loadedRapidScore = loadRapidScore1Min();
                                if (loadedRapidScore <= rapidModeScore) saveRapidScore1Min(rapidModeScore);
                            } else if (rapidMode == 3) {
                                const loadedRapidScore = loadRapidScore3Min();
                                if (loadedRapidScore <= rapidModeScore) saveRapidScore3Min(rapidModeScore);
                            } else if (rapidMode == 5) {
                                const loadedRapidScore = loadRapidScore5Min();
                                if (loadedRapidScore <= rapidModeScore) saveRapidScore5Min(rapidModeScore);
                            }
                            // loadedRapidScore.
                            // saveRapidScore(props.rapidModeScore);
                        }

                        setYouLose(true);
                        return;
                    }
                }

            }
        }
        else {
            // TODO enter 5 characters => shake animation
            console.log("enter 5 characters");
            setIsInputError(false);
            setIsInputError(true);
            enqueueSnackbar('Bitte 5 Buchstaben eingeben.', { variant: 'error', preventDuplicate: true, });
        }
    }

    const updatePlayerStats = (win: boolean): PlayerStats => {
        const gameStats: PlayerStats = { ...stats }
        gameStats.gamesPlayed += 1;
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


    useEffect(() => {
        if (youWin || youLose) return;

        const listener = (event: globalThis.KeyboardEvent): any => {
            if (event.code === 'Enter') {
                handleSubmit();
                return;
            } else if (event.code === 'Backspace') {
                handleRemove();
                return;
            }
            // else if (event.code === 'Space') {
            //     if (!props.timerStarted) {
            //         // TODO: TIMER
            //         const newTimerValue = new Date().getTime() + props.timer * 60 * 1000;
            //         // const newTimerValue = new Date().getTime() + props.timer * 15 * 1000;
            //         props.setTimer(newTimerValue);
            //         props.setTimerStarted(true);
            //         return;
            //     }
            // } 
            else {
                const key = event.key.toLocaleUpperCase();
                // TODO A-Z => problem with german letters üäö 
                if (key.length == 1 && key >= 'A' && key <= 'Z') {
                    if (gameMode == 'R' && pauseTimer) {
                        setPauseTimer(false);
                    }
                    handleChange(key);
                }
                return;
            }
        }
        window.addEventListener('keyup', listener);
        return () => {
            window.removeEventListener('keyup', listener);
        }

    }, [handleSubmit, handleRemove, handleChange, youWin, youLose]);


    useEffect(() => {
        if (gameMode === "WOTD") {
            const solution = WORD_OF_THE_DAY().solution;
            saveGameState({ guessedWords, wordStatuses, solution });
        }
    }, [guessedWords, wordStatuses]);

    useEffect(() => {
        const subscription = GameModeHandlerService.onGameModeChange().subscribe(mode => {
            setGameMode(mode as GameModeType);
            resetGame();
            if (mode == 'WOTD') {
                setShowPopup(true);
                setSolution(WORD_OF_THE_DAY().solution);
                const loaded = loadGameState();
                console.log("loaded", loaded);
                if (loaded) {
                    if (loaded.solution !== WORD_OF_THE_DAY().solution) {
                        const data: string[] = [];
                        setGuessedWords(data);
                        const wordStatuses: WordStatusType[][] = [];
                        setWordStatuses(wordStatuses);
                    } else {
                        const gameWasWon = loaded.guessedWords.includes(WORD_OF_THE_DAY().solution);
                        const data: string[] = loaded.guessedWords;
                        setGuessedWords(data);
                        const wordStatuses: WordStatusType[][] = loaded.wordStatuses;
                        setWordStatuses(wordStatuses);
                        if (gameWasWon) {
                            // WinService.setWin(true);
                            setYouWin(true);
                            setYouLose(false);
                            Confetti();
                            // enqueueSnackbar('Du hast das heutige Wort richtig erraten! 🎉', { variant: 'success' });
                            return;
                        } else if (loaded.guessedWords.length === MAX_GUESSES && !gameWasWon) {
                            // WinService.setWin(false);
                            setYouWin(false);
                            setYouLose(true);
                            return;
                            //     showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
                            //     persist: true,
                            //   })
                        }
                    }
                }
            }
            else if (mode == 'TR') {
                getNextWord();
            }
            else if (mode == 'C') {
                setShowPopup(true);
            } else if (mode == 'R') {
                console.log("load Rapid mode");
                setSolution("TIMER");
                setRapidModeScore(0);
                setShowPopup(true);
                setTimer(0);
                setPauseTimer(true);
            }
        });

        // return unsubscribe method to execute when component unmounts
        return () => {
            subscription.unsubscribe();
        }
    }, []);

    const togglePopup = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log("load category dictionary");
        console.log(gameMode)
        console.log(event.currentTarget.value);

        // TODO: load category dictionary if mode is C, or timer if mode is R
        if (gameMode === "C") {
            const category = event.currentTarget.value;
        } else if (gameMode === "R") {
            const rapidModeTimerValue = parseInt(event.currentTarget.value);
            setRapidMode(rapidModeTimerValue);
            const t = new Date().getTime() + rapidModeTimerValue * 60 * 1000;
            setTimer(t);
        }

        setShowPopup(false);
    }

    return (
        <div className="Game">

            <NavigationBar stats={stats} />

            {/* <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses} isInputError={isInputError} ></Grid> */}
            {/* <Keyboard wordStatuses={wordStatuses} guessedWords={guessedWords} solution={solution} /> */}

            {gameMode === 'C' && showPopup && (
                <>
                    <Popup content={'categories'} closePopup={togglePopup} forceInput={true} stats={stats}></Popup>
                </>
            )}

            {gameMode === 'R' && showPopup && (
                <>
                    <Popup content={'rapid'} closePopup={togglePopup} forceInput={true} stats={stats}></Popup>
                </>
            )}

            {gameMode === 'WOTD' && (
                <>
                    <WOTDMode guessedWord={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses} solution={solution}
                        handleChange={handleChange} handleSubmit={handleSubmit} handleRemove={handleRemove} isInputError={isInputError}
                        youWin={youWin} youLose={youLose} showPopup={showPopup} togglePopup={togglePopup} stats={stats} />
                </>
            )}
            
            {gameMode === 'TR' && (
                <>
                    <TRMode guessedWord={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses} solution={solution}
                        handleChange={handleChange} handleSubmit={handleSubmit} handleRemove={handleRemove} isInputError={isInputError}
                        youWin={youWin} youLose={youLose} resetGame={resetGame} getNextWord={getNextWord} />
                </>
            )}


            {/* <InputHandler mode={gameMode} youWin={youWin} youLose={youLose} setYouWin={setYouWin} setYouLose={setYouLose}
                solution={solution} stats={stats} setStats={setStats} guessedWord={guessedWord} setGuessedWord={setGuessedWord}
                guessedWords={guessedWords} setGuessedWords={setGuessedWords} wordStatuses={wordStatuses} setWordStatuses={setWordStatuses}
                rowIndex={rowIndex} setRowIndex={setRowIndex} columnIndex={columnIndex} setColumnIndex={setColumnIndex}
                pauseTimer={pauseTimer} setPauseTimer={setPauseTimer}
                getNextWord={getNextWord} rapidModeScore={rapidModeScore} setRapidModeScore={setRapidModeScore}
                rapidMode={rapidMode} setIsInputError={setIsInputError} /> */}

            {gameMode === 'R' && (
                <div className="rapid">

                    {youLose && (
                        <>
                            <div className="game-summary">

                                <div className="rapid-score">
                                    <h4>Score:</h4>
                                    <div className="score-value">{rapidModeScore}</div>

                                </div>

                                <Timer expiryTimestamp={timer ? timer : 0} setExpiryTimestamp={setTimer} pauseTimer={pauseTimer} setPauseTimer={setPauseTimer} youLose={youLose} setYoulose={setYouLose} />

                                <div className="gameover-feedback">
                                    <h4>gesuchtes Wort war:</h4>
                                    <div className="solution-word">{solution}</div>
                                </div>

                            </div>
                            <div>
                                <button className="new-game-button" onClick={resetRapidMode}>Neues Spiel</button>
                            </div>
                        </>
                    )}

                    {timer && !youLose && (
                        <Timer expiryTimestamp={timer} setExpiryTimestamp={setTimer} pauseTimer={pauseTimer} setPauseTimer={setPauseTimer} youLose={youLose} setYoulose={setYouLose} />
                    )}

                    {rapidModeScore > 0 && !youLose && (
                        <div className="rapid-score">
                            <h4>Score:</h4>
                            <div className="score-value">{rapidModeScore}</div>
                        </div>

                    )}

                </div>
            )}


            {/* {gameMode === 'WOTD' && (youLose) && (
                <div className="gameover-feedback">
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{solution}</div>
                </div>
            )} */}

            {/* {gameMode === 'TR' && (youWin || youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={getNextWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{solution}</div>
                </div>
            )} */}

        </div>
    );
}
