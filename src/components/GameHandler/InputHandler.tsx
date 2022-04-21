import { RefObject, useEffect } from "react";
import { MAX_WORD_LENGTH, MAX_GUESSES } from "../../Config/Settings";
import { Confetti } from "../Animations";
import { GameModeType } from "../GameHandler";
import { Keyboard } from "../Keyboard";
import { PlayerStats, savePlayerStats, loadRapidScore1Min, saveRapidScore1Min, loadRapidScore3Min, loadRapidScore5Min, saveRapidScore3Min, saveRapidScore5Min } from "../LocalStorage";
import { checkstatus, WordStatusType } from "../WordStatus";
import { WinService } from "./WinService";

type InputHandlerProps = {
    mode: GameModeType;
    youWin: boolean;
    youLose: boolean;
    setYouWin: (value: boolean) => void;
    setYouLose: (value: boolean) => void;
    solution: string;
    stats: PlayerStats;
    setStats: (value: PlayerStats) => void;
    guessedWord: string;
    setGuessedWord: (value: string) => void;
    guessedWords: string[];
    setGuessedWords: (value: string[]) => void;
    wordStatuses: WordStatusType[][];
    setWordStatuses: (value: WordStatusType[][]) => void;
    rowIndex: number;
    setRowIndex: (value: number) => void;
    columnIndex: number;
    setColumnIndex: (value: number) => void;
    // timerStarted: boolean;
    // setTimerStarted: (value: boolean) => void;
    pauseTimer: boolean;
    setPauseTimer: (value: boolean) => void;
    // addTimervalue: number;
    getNextWord: () => void;
    rapidModeScore: number;
    setRapidModeScore: (value: number) => void;
    rapidMode: number;
}

export const InputHandler: React.FC<InputHandlerProps> = (props: InputHandlerProps) => {

    const rapidModeAddSeconds: number = 5;



    const handleChange = (value: string) => {
        if (props.youWin || props.youLose) return;
        // && guesses.length < MAX_CHALLENGES && !isGameWon
        if (props.guessedWord.length < MAX_WORD_LENGTH) {
            props.setGuessedWord(`${props.guessedWord}${value}`);
            props.setColumnIndex(props.columnIndex + 1);
        } else {
            // TODO: display feedback for user
        }
    }

    const handleRemove = () => {
        if (props.guessedWord.length > 0) {
            props.setGuessedWord(props.guessedWord.slice(0, -1));
            props.setColumnIndex(props.columnIndex - 1);
        }
    }

    const handleSubmit = () => {
        // console.log("Solution:");
        // console.log(props.solution);

        if (props.guessedWord.length == 5) {
            if (props.guessedWords.length < MAX_GUESSES) {
                // TODO check if guessWord is in dictionary
                // if (!isInDictionary(props.guessedWord)) {
                //     console.log("WORD IS NOT IN DICTIONARY");
                //     return;
                // }

                props.setRowIndex(props.rowIndex + 1);
                props.setColumnIndex(0);
                props.setGuessedWord("");
                props.setGuessedWords([...props.guessedWords, props.guessedWord]);
                const status = checkstatus(props.guessedWord, props.solution);
                props.setWordStatuses([...props.wordStatuses, status]);

                // set win
                if (props.guessedWord === props.solution) {
                    if (props.mode === "WOTD") {
                        const newStats = updatePlayerStats(true);
                        props.setStats(newStats);
                        savePlayerStats(newStats);
                    }

                    if (props.mode == "R") {
                        // TODO: ADD 5 SECS TO TIMER
                        // const newTimerValue = props.timer + (rapidModeAddSeconds * 1000);
                        // const newTimerValue = new Date().getTime() + props.timer * 15 * 1000;
                        // props.setTimer(newTimerValue);
                        props.setRapidModeScore(props.rapidModeScore + 1);
                        props.getNextWord();
                    } else {
                        props.setYouWin(true);
                        Confetti();
                    }
                    WinService.setWin(true);

                    return;
                }

                // last guess, set lose
                if (props.guessedWords.length == MAX_GUESSES - 1) {
                    if (props.guessedWord !== props.solution) {
                        console.log("YOU LOSE!");
                        if (props.mode === "WOTD") {
                            const newStats = updatePlayerStats(false);
                            props.setStats(newStats);
                            savePlayerStats(newStats);
                        }

                        if (props.mode == "R") {
                            props.setPauseTimer(true);
                            console.log("rapidModeTimerMinutes")
                            console.log(props.rapidMode)
                            if (props.rapidMode == 1) {
                                const loadedRapidScore = loadRapidScore1Min();
                                if (loadedRapidScore <= props.rapidModeScore) saveRapidScore1Min(props.rapidModeScore);
                            } else if (props.rapidMode == 3) {
                                const loadedRapidScore = loadRapidScore3Min();
                                if (loadedRapidScore <= props.rapidModeScore) saveRapidScore3Min(props.rapidModeScore);
                            } else if (props.rapidMode == 5) {
                                const loadedRapidScore = loadRapidScore5Min();
                                if (loadedRapidScore <= props.rapidModeScore) saveRapidScore5Min(props.rapidModeScore);
                            }
                            // loadedRapidScore.
                            // saveRapidScore(props.rapidModeScore);
                        }

                        props.setYouLose(true);
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

    const updatePlayerStats = (win: boolean): PlayerStats => {
        const gameStats: PlayerStats = { ...props.stats }
        gameStats.gamesPlayed += 1;
        console.log(win);
        if (win) {
            gameStats.wins += 1;
            gameStats.trysPerWin[props.guessedWords.length] += 1;
            gameStats.winStreak += 1;
            gameStats.bestWinStreak = (gameStats.winStreak >= gameStats.bestWinStreak) ? gameStats.winStreak : gameStats.bestWinStreak;
        } else {
            gameStats.losses += 1;
            gameStats.winStreak = 0;
        }

        return gameStats;
    }

    useEffect(() => {
        if (props.youWin || props.youLose) return;

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
                    if (props.mode == 'R' && props.pauseTimer) {
                        // TODO: SET TIMER
                        // const newTimerValue = new Date().getTime() + props.timer * 60 * 1000;
                        // const newTimerValue = new Date().getTime() + props.timer * 15 * 1000;
                        // console.log("new timer value: " + newTimerValue);
                        // props.setTimer(newTimerValue);
                        props.setPauseTimer(false);
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

    }, [handleSubmit, handleRemove, handleChange, props.youWin, props.youLose]);

    return (
        <>
            <Keyboard wordStatuses={props.wordStatuses} guessedWords={props.guessedWords} solution={props.solution}
                handleChange={handleChange} handeSubmit={handleSubmit} handleRemove={handleRemove} />
        </>
    );
}