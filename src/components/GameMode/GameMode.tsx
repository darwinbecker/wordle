import { useEffect, useState } from "react";
import { MAX_GUESSES } from "../../config/settings";
import { WORD_OF_THE_DAY } from "../../config/wordlist";
import { WinService } from "../gameHandler";
import { loadGameStateFromLocalStorage } from "../localStorage";
import { StatusType } from "../wordStatus";
import { Popup } from "../settings/categories/Popup";
import { GameModeService } from "./GameModeService";

// WOTD = Word Of The Day
// TR = Training
// C = Category
// R = Rapid
export type GameModeType = 'WOTD' | 'TR' | 'C' | 'R';

type ModeProps = {
    resetGame: () => void;
    setSolution: (solution: string) => void;
    setGuessedWords: (guessedWords: string[]) => void;
    setWordStatuses: (wordStatuses: StatusType[][]) => void;
    getNextWord: () => void;
}

export const GameMode: React.FC<ModeProps> = (props: ModeProps) => {

    const [mode, setMode] = useState<GameModeType>("WOTD");
    const [showPopup, setShowPopup] = useState(true);

    const handleMode = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedMode = event.target.value as GameModeType;
        setMode(selectedMode);
        GameModeService.setGameMode(selectedMode);
    }

    useEffect(() => {
        const subscription = GameModeService.onGameModeChange().subscribe(mode => {
            if (mode == 'WOTD') {
                props.resetGame();
                props.setSolution(WORD_OF_THE_DAY().solution);
                const loaded = loadGameStateFromLocalStorage();
                console.log("loaded", loaded);
                if (loaded) {
                    if (loaded.solution !== WORD_OF_THE_DAY().solution) {
                        const data: string[] = [];
                        props.setGuessedWords(data);
                        const wordStatuses: StatusType[][] = [];
                        props.setWordStatuses(wordStatuses);
                    } else {
                        const gameWasWon = loaded.guessedWords.includes(WORD_OF_THE_DAY().solution);
                        if (gameWasWon) {
                            WinService.setWin(true);
                        }

                        if (loaded.guessedWords.length === MAX_GUESSES && !gameWasWon) {
                            WinService.setWin(false);
                            //     showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
                            //     persist: true,
                            //   })
                        }
                        const data: string[] = loaded.guessedWords;
                        props.setGuessedWords(data);
                        const wordStatuses: StatusType[][] = loaded.wordStatuses;
                        props.setWordStatuses(wordStatuses);
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
        console.log(event.currentTarget.value);
        const category = event.currentTarget.value;
        setShowPopup(!showPopup);
    }

    return (
        <div className="Mode">
            <div className="game-mode-nav-wrapper">
                {/* <div><i className="fa-regular fa-chart-column"></i></div> */}
                {/* <div><i className="fa-regular fa-chart-simple"></i></div> */}

                {/* <div><i className="fa-solid fa-chart-column"></i></div> */}

                <div className="game-mode-icons-wrapper">
                    <button><i className="fa-solid fa-circle-info"></i></button>
                    {/* <div><i className="fa-solid fa-circle-info"></i></div> */}
                    <button><i className="fa-solid fa-chart-simple"></i></button>
                    {/* <div><i className="fa-solid fa-chart-simple"></i></div> */}
                </div>

                <select className="game-mode-select" onChange={handleMode}>
                    <option value="WOTD">Wort des Tages</option>
                    <option value="TR">Training</option>
                    <option value="C">Kategorie</option>
                    <option value="R">Blitz</option>
                </select>
                <div className="game-mode-icons-wrapper">
                    {/* <div><i className="fa-solid fa-moon"></i></div> */}
                    {/* <div><i className="fa-solid fa-circle-half-stroke"></i></div> */}
                    <button><i className="fa-solid fa-moon"></i></button>
                    <button><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
            </div>

            {mode === 'C' && showPopup && (
                <div className="category">
                    <Popup content={'categories'} closePopup={togglePopup}></Popup>
                </div>
            )}

            {mode === 'R' && showPopup && (
                <div className="rapid">
                    <Popup content={'rapid'} closePopup={togglePopup}></Popup>
                </div>
            )}
        </div>
    );
}
