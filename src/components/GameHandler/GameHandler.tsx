import { useEffect, useState } from "react";
import { MAX_GUESSES } from "../../Config/Settings";
import { WORD_OF_THE_DAY } from "../../Config/Wordlist";
import { loadGameState, PlayerStats } from "../LocalStorage";
import { WordStatusType } from "../WordStatus";
import { Popup } from "../Popup";
import { GameModeHandlerService } from "./GameModeHandlerService";
import { Confetti } from "../Animations";
import { NavigationBar } from "../Navigation";

// WOTD = Word Of The Day / TR = Training / C = Category / R = Rapid
export type GameModeType = 'WOTD' | 'TR' | 'C' | 'R';

type GameHandlerProps = {
    youWin: boolean;
    youLose: boolean;
    setYouWin: (win: boolean) => void;
    setYouLose: (lose: boolean) => void;
    resetGame: () => void;
    setSolution: (solution: string) => void;
    setGuessedWords: (guessedWords: string[]) => void;
    setWordStatuses: (wordStatuses: WordStatusType[][]) => void;
    getNextWord: () => void;
    stats: PlayerStats;
}

export const GameHandler: React.FC<GameHandlerProps> = (props: GameHandlerProps) => {

    const [gameMode, setGameMode] = useState<GameModeType>("WOTD");
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const subscription = GameModeHandlerService.onGameModeChange().subscribe(mode => {
            if (mode == 'WOTD') {
                setShowPopup(true);
                props.resetGame();
                props.setSolution(WORD_OF_THE_DAY().solution);
                const loaded = loadGameState();
                console.log("loaded", loaded);
                if (loaded) {
                    if (loaded.solution !== WORD_OF_THE_DAY().solution) {
                        const data: string[] = [];
                        props.setGuessedWords(data);
                        const wordStatuses: WordStatusType[][] = [];
                        props.setWordStatuses(wordStatuses);
                    } else {
                        const gameWasWon = loaded.guessedWords.includes(WORD_OF_THE_DAY().solution);
                        const data: string[] = loaded.guessedWords;
                        props.setGuessedWords(data);
                        const wordStatuses: WordStatusType[][] = loaded.wordStatuses;
                        props.setWordStatuses(wordStatuses);
                        if (gameWasWon) {
                            // WinService.setWin(true);
                            props.setYouWin(true);
                            props.setYouLose(false);
                            Confetti();
                            return;
                        } else if (loaded.guessedWords.length === MAX_GUESSES && !gameWasWon) {
                            // WinService.setWin(false);
                            props.setYouWin(false);
                            props.setYouLose(true);
                            return;
                            //     showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
                            //     persist: true,
                            //   })
                        }
                    }
                }
            }
            else if (mode == 'TR') {
                props.getNextWord();
            }
            else if (mode == 'C') {
                props.resetGame();
                setShowPopup(true);
            } else if (mode == 'R') {
                props.resetGame();
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
        console.log(event.currentTarget.value);
        const category = event.currentTarget.value;
        // TODO: load category dictionary
        setShowPopup(!showPopup);
    }

    return (
        <div className="Mode">

            <NavigationBar setMode={setGameMode} stats={props.stats} />

            {gameMode === 'C' && showPopup && (
                <>
                    <Popup content={'categories'} closePopup={togglePopup} forceInput={true} stats={props.stats}></Popup>
                </>
            )}

            {gameMode === 'R' && showPopup && (
                <>
                    <Popup content={'rapid'} closePopup={togglePopup} forceInput={true} stats={props.stats}></Popup>
                </>
            )}

            {gameMode === 'WOTD' && showPopup && (props.youWin || props.youLose) && (
                <>
                    <Popup content={'stats'} closePopup={togglePopup} forceInput={false} animationDelay={true} stats={props.stats}></Popup>
                </>
            )}
        </div>
    );
}
