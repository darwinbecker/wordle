import { useEffect, useState } from "react";
import { MAX_GUESSES } from "../../Config/Settings";
import { WORD_OF_THE_DAY, getRandomWord } from "../../Config/Wordlist";
import { loadGameState, loadPlayerStats, saveGameState, GameState, PlayerStats, savePlayerStats } from "../LocalStorage";
import { WordStatusType } from "../WordStatus";
import { Popup } from "../Popup";
import { GameModeHandlerService } from "./GameModeHandlerService";
import { Confetti } from "../Animations";
import { NavigationBar } from "../Navigation";
import { Grid } from "../Grid";
import { CategoryMode, InputHandler, RapidMode, TRMode, WOTDMode } from ".";
import { useTimer } from "../Timer";
import { CountdownTimer } from "../Timer";

// WOTD = Word Of The Day / TR = Training / C = Category / R = Rapid
export type GameModeType = 'WOTD' | 'TR' | 'C' | 'R';

export const GameHandler: React.FC = () => {

    const [gameMode, setGameMode] = useState<GameModeType>("WOTD");
    const [showPopup, setShowPopup] = useState(true);

    const loadedGameState: GameState = loadGameState();
    const loadedPlayerStats: PlayerStats = loadPlayerStats();

    const [youWin, setYouWin] = useState<boolean>(() => {
        return loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [youLose, setYouLose] = useState<boolean>(() => {
        return loadedGameState.guessedWords.length === MAX_GUESSES && !loadedGameState?.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false;
    });
    const [solution, setSolution] = useState<string>(() => {
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

    const [timer, setTimer] = useState<number>(0);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);

    const resetGame = () => {
        setGuessedWords([]);
        setRowIndex(0);
        setColumnIndex(0);
        setGuessedWord("");
        setWordStatuses([]);
        setYouWin(false);
        setYouLose(false);
        setSolution("");
        setTimerStarted(false);
    }

    const getNextWord = () => {
        resetGame();
        setSolution(getRandomWord());
    }

    useEffect(() => {
        if (gameMode === "WOTD") {
            const solution = WORD_OF_THE_DAY().solution;
            saveGameState({ guessedWords, wordStatuses, solution });
        }
    }, [guessedWords, wordStatuses]);

    useEffect(() => {
        const subscription = GameModeHandlerService.onGameModeChange().subscribe(mode => {
            if (mode == 'WOTD') {
                setShowPopup(true);
                resetGame();
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
                resetGame();
                setShowPopup(true);
            } else if (mode == 'R') {
                resetGame();
                setShowPopup(true);
                console.log("load Rapid mode");
            }
        });

        // return unsubscribe method to execute when component unmounts
        return () => {
            subscription.unsubscribe();
        }
    }, []);

    const togglePopup = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("load category dictionary");
        console.log(gameMode)
        console.log(event.currentTarget.value);

        // TODO: load category dictionary if mode is C, or timer if mode is R
        if (gameMode === "C") {
            const category = event.currentTarget.value;
        } else if (gameMode === "R") {
            const timerValue = parseInt(event.currentTarget.value);
            setTimer(timerValue);
        }


        setShowPopup(!showPopup);
    }

    return (
        <div className="Game">

            <NavigationBar setMode={setGameMode} stats={stats} />

            <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>

            <InputHandler mode={gameMode} youWin={youWin} youLose={youLose} setYouWin={setYouWin} setYouLose={setYouLose}
            solution={solution} stats={stats} setStats={setStats} guessedWord={guessedWord} setGuessedWord={setGuessedWord}
            guessedWords={guessedWords} setGuessedWords={setGuessedWords} wordStatuses={wordStatuses} setWordStatuses={setWordStatuses}
            rowIndex={rowIndex} setRowIndex={setRowIndex} columnIndex={columnIndex} setColumnIndex={setColumnIndex} 
            timer={timer} setTimer={setTimer} timerStarted={timerStarted} setTimerStarted={setTimerStarted}/>

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

            {gameMode === 'WOTD' && showPopup && (youWin || youLose) && (
                <>
                    <Popup content={'stats'} closePopup={togglePopup} forceInput={false} animationDelay={true} stats={stats}></Popup>
                </>
            )}


            {gameMode === 'WOTD' && (youLose) && (
                <div className="gameover-feedback">
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{WORD_OF_THE_DAY().solution}</div>
                </div>
            )}

            {gameMode === 'TR' && (youWin || youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={getNextWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{solution}</div>
                </div>
            )}

            {gameMode === 'R' && (
                <>
                    <div className="timer">
                        {timerStarted && (
                            <CountdownTimer targetDate={timer} setYouLose={setYouLose} />
                        )}
                    </div>
                </>
            )}
            
            {gameMode === 'R' && (youLose) && (
                <div className="gameover-feedback">
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{solution}</div>
                </div>
            )}

        </div>
    );
}

