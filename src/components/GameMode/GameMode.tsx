import { useEffect, useState } from "react";
import { MAX_GUESSES } from "../../Config/Settings";
import { WORD_OF_THE_DAY } from "../../Config/Wordlist";
import { WinService } from "../GameHandler";
import { loadGameStateFromLocalStorage } from "../LocalStorage";
import { WordStatusType } from "../WordStatus";
import { Popup } from "../Popup";
import { GameModeService } from "./GameModeService";
import { NavType } from "../Navigation";

// WOTD = Word Of The Day
// TR = Training
// C = Category
// R = Rapid
export type GameModeType = 'WOTD' | 'TR' | 'C' | 'R';

type ModeProps = {
    youWin: boolean;
    youLose: boolean;
    resetGame: () => void;
    setSolution: (solution: string) => void;
    setGuessedWords: (guessedWords: string[]) => void;
    setWordStatuses: (wordStatuses: WordStatusType[][]) => void;
    getNextWord: () => void;
}

export const GameMode: React.FC<ModeProps> = (props: ModeProps) => {

    const [mode, setMode] = useState<GameModeType>("WOTD");
    const [showPopup, setShowPopup] = useState(true);
    const [showNavPopup, setShowNavPopup] = useState(false);
    const [navMode, setNavMode] = useState<NavType>();

    const handleMode = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        event.target.blur();
        const selectedMode = event.target.value as GameModeType;
        setMode(selectedMode);
        GameModeService.setGameMode(selectedMode);
    }

    useEffect(() => {
        const subscription = GameModeService.onGameModeChange().subscribe(mode => {
            if (mode == 'WOTD') {
                setShowPopup(true);
                props.resetGame();
                props.setSolution(WORD_OF_THE_DAY().solution);
                const loaded = loadGameStateFromLocalStorage();
                console.log("loaded", loaded);
                if (loaded) {
                    if (loaded.solution !== WORD_OF_THE_DAY().solution) {
                        const data: string[] = [];
                        props.setGuessedWords(data);
                        const wordStatuses: WordStatusType[][] = [];
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
                        const wordStatuses: WordStatusType[][] = loaded.wordStatuses;
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
        // TODO: load category dictionary
        setShowPopup(!showPopup);
    }

    const toggleNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const navButton = event.currentTarget.value;
        if (navButton) {
            setNavMode(navButton as NavType);
        } else {
            setNavMode(undefined);
        }
        setShowNavPopup(!showNavPopup);
    }

    const toggleDarkmode = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("toggle darkmode");
    }
    const toggleContrast = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("toggle contrast");
    }

    return (
        <div className="Mode">
            <div className="game-mode-nav-wrapper">

                <div className="game-mode-icons-wrapper">
                    <button value="info" onClick={toggleNavButton}><i className="fa-solid fa-circle-info"></i></button>
                    <button value="stats" onClick={toggleNavButton}><i className="fa-solid fa-chart-simple"></i></button>
                </div>

                <select className="game-mode-select" onChange={handleMode}>
                    <option value="WOTD">Wort des Tages</option>
                    <option value="TR">Training</option>
                    <option value="C">Kategorie</option>
                    <option value="R">Blitz</option>
                </select>

                <div className="game-mode-icons-wrapper">
                    <button onClick={toggleDarkmode}><i className="fa-solid fa-moon"></i></button>
                    <button onClick={toggleContrast}><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
            </div>

            {mode === 'C' && showPopup && (
                <>
                    <Popup content={'categories'} closePopup={togglePopup} forceInput={true}></Popup>
                </>
            )}

            {mode === 'R' && showPopup && (
                <>
                    <Popup content={'rapid'} closePopup={togglePopup} forceInput={true}></Popup>
                </>
            )}

            {showPopup && (props.youWin || props.youLose) && (
                <>
                    <Popup content={'nav'} closePopup={togglePopup} forceInput={false} navType={'stats'}></Popup>
                </>
            )}

            {showNavPopup && (
                <>
                    <Popup content={'nav'} closePopup={toggleNavButton} forceInput={false} navType={navMode}></Popup>
                </>
            )}
        </div>
    );
}
