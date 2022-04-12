import { useEffect, useState } from "react";
import { MAX_WORD_LENGTH, MAX_GUESSES } from "../../Config/Settings";
import { WORD_OF_THE_DAY } from "../../Config/Wordlist";
import { Confetti } from "../Animations";
import { GameModeHandlerService, GameModeType } from "../GameHandler";
import { GameState, loadGameState, PlayerStats, loadPlayerStats, savePlayerStats, saveGameState } from "../LocalStorage";
import { checkstatus, WordStatusType } from "../WordStatus";

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
}

export const InputHandler: React.FC<InputHandlerProps> = (props: InputHandlerProps) => {

    const handleChange = (value: string) => {
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
        console.log("Solution:");
        console.log(props.solution);

        if (props.guessedWord.length == 5) {
            if (props.guessedWords.length < MAX_GUESSES) {
                // TODO check if guessWord is in dictionary
                // if (!isInDictionary(guessedWord)) {
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
                    props.setYouWin(true);
                    Confetti();
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
            } else if (event.code === 'Backspace') {
                handleRemove();
            } else {
                const key = event.key.toLocaleUpperCase();
                // TODO A-Z => problem with german letters üäö 
                if (key.length == 1 && key >= 'A' && key <= 'Z') {
                    handleChange(key);
                }
            }
        }
        window.addEventListener('keyup', listener);
        return () => {
            window.removeEventListener('keyup', listener);
        }

    }, [handleSubmit, handleRemove, handleChange, props.youWin, props.youLose]);

    return (
        <>
        </>
    );
}