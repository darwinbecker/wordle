import { useEffect, useState } from "react";
import { MAX_GUESSES } from "../../Config/Settings";
import { WORD_OF_THE_DAY, getRandomWord } from "../../Config/Wordlist";
import { loadGameState, loadPlayerStats, saveGameState, GameState, PlayerStats, savePlayerStats, loadRapidScore1Min, loadRapidScore3Min, loadRapidScore5Min } from "../LocalStorage";
import { WordStatusType } from "../WordStatus";
import { Popup } from "../Popup";
import { GameModeHandlerService } from "./GameModeHandlerService";
import { Confetti } from "../Animations";
import { NavigationBar } from "../Navigation";
import { Grid } from "../Grid";
import { CategoryMode, InputHandler, RapidMode, TRMode, WOTDMode } from ".";
import { useTimer } from "../Timer";
import { CountdownTimer } from "../Timer";
import { isTemplateLiteral } from "typescript";
import { FreezeTimer } from "../Timer/CountdownTimer";

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

    const [displayTimerFreezeValue, setDisplayTimerFreezeValue] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);
    const [freezeTimer, setFreezeTimer] = useState<boolean>(true);

    const [rapidModeScore, setRapidModeScore] = useState<number>(0);
    const [rapidModeMinutes, setRapidModeMinutes] = useState<number>(0);
    

    const resetGame = () => {
        setGuessedWords([]);
        setRowIndex(0);
        setColumnIndex(0);
        setGuessedWord("");
        setWordStatuses([]);
        setYouWin(false);
        setYouLose(false);
        setSolution("");
        // setTimerStarted(false);
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
            setGameMode(mode as GameModeType);
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
                console.log("load Rapid mode");
                resetGame();
                setSolution("TIMER");
                setShowPopup(true);
                setTimer(0);
                setDisplayTimerFreezeValue(0);
                setFreezeTimer(true);
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
            const rapidModeTimerValue = parseInt(event.currentTarget.value);
            setRapidModeMinutes(rapidModeTimerValue);
            setTimer(rapidModeTimerValue);
            const t = new Date().getTime() + rapidModeTimerValue * 60 * 1001;
            setDisplayTimerFreezeValue(t);
        }


        setShowPopup(!showPopup);
    }

    // const newTimerValue = new Date().getTime() + props.timer * 15 * 1000;
    return (
        <div className="Game">

            <NavigationBar stats={stats} />

            <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>

            <InputHandler mode={gameMode} youWin={youWin} youLose={youLose} setYouWin={setYouWin} setYouLose={setYouLose}
                solution={solution} stats={stats} setStats={setStats} guessedWord={guessedWord} setGuessedWord={setGuessedWord}
                guessedWords={guessedWords} setGuessedWords={setGuessedWords} wordStatuses={wordStatuses} setWordStatuses={setWordStatuses}
                rowIndex={rowIndex} setRowIndex={setRowIndex} columnIndex={columnIndex} setColumnIndex={setColumnIndex}
                timer={timer} setTimer={setTimer} freezeTimer={freezeTimer} setFreezeTimer={setFreezeTimer} 
                getNextWord={getNextWord} rapidModeScore={rapidModeScore} setRapidModeScore={setRapidModeScore} 
                rapidModeMinutes={rapidModeMinutes} />

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



            {gameMode === 'R' && (
                <div className="rapid">
                    {youLose && (
                        <>
                            <div className="rapid-score">
                                <h4>Score:</h4>
                                <div className="score-value">{rapidModeScore}</div>
                                {rapidModeMinutes == 1 && (
                                    <>
                                        <h4>höchste Serie:</h4>
                                        <div className="score-value">{loadRapidScore1Min()}</div>
                                    </>
                                )}
                                {rapidModeMinutes == 3 && (
                                    <>
                                        <h4>höchste Serie:</h4>
                                        <div className="score-value">{loadRapidScore3Min()}</div>
                                    </>
                                )}
                                {rapidModeMinutes == 5 && (
                                    <>
                                        <h4>höchste Serie:</h4>
                                        <div className="score-value">{loadRapidScore5Min()}</div>
                                    </>
                                )}

                            </div>

                            <div className="timer">
                                {console.log(timer)}
                                <FreezeTimer targetDate={timer} />
                            </div>

                            <div className="gameover-feedback">
                                <h4>gesuchtes Wort war:</h4>
                                <div className="solution-word">{solution}</div>
                            </div>
                        </>
                    )}

                    {freezeTimer && !youLose && (
                        <div className="timer">
                            <FreezeTimer targetDate={displayTimerFreezeValue} />
                        </div>
                    )}

                    {!youLose && !freezeTimer && (
                        <div className="timer">
                            <CountdownTimer targetDate={timer} setYouLose={setYouLose} />
                        </div>
                    )}
                </div>
            )}

            {gameMode === 'WOTD' && (youLose) && (
                <div className="gameover-feedback">
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{solution}</div>
                </div>
            )}

            {gameMode === 'TR' && (youWin || youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={getNextWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{solution}</div>
                </div>
            )}

        </div>
    );
}

