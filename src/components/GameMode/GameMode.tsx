import { useEffect, useState } from "react";
import { MAX_GUESSES } from "../../Config/Settings";
import { WORD_OF_THE_DAY } from "../../Config/Wordlist";
// import { WinService } from "../GameHandler";
import { loadGameState, PlayerStats } from "../LocalStorage";
import { WordStatusType } from "../WordStatus";
import { Popup } from "../Popup";
import { GameModeService } from "./GameModeService";
import { PopupType } from "../Popup";
import { Confetti } from "../Animations";
import { DarkModeButton, HighContrastButton } from "../Navigation/";

// WOTD = Word Of The Day
// TR = Training
// C = Category
// R = Rapid
export type GameModeType = 'WOTD' | 'TR' | 'C' | 'R';

type ModeProps = {
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

export const GameMode: React.FC<ModeProps> = (props: ModeProps) => {

    const [mode, setMode] = useState<GameModeType>("WOTD");
    const [showPopup, setShowPopup] = useState(true);
    const [showNavPopup, setShowNavPopup] = useState(false);
    const [popupMode, setPopupMode] = useState<PopupType>();

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

    const toggleNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const navButton = event.currentTarget.value;
        if (navButton) {
            // if nav button is clicked => set mode
            setPopupMode(navButton as PopupType);
            setShowNavPopup(!showNavPopup);
        } else {
            // if popup is visible & user clicks outside of popup window => hide popup
            const popup = event.target as HTMLDivElement;
            if (popup.classList.contains('popup')) {
                setPopupMode(undefined);
                setShowNavPopup(!showNavPopup);
            }
        }
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
                    {/* <button onClick={toggleDarkmode}><i className="fa-solid fa-moon"></i></button> */}
                    <DarkModeButton />
                    <HighContrastButton/>
                </div>
            </div>

            {mode === 'C' && showPopup && (
                <>
                    <Popup content={'categories'} closePopup={togglePopup} forceInput={true} stats={props.stats}></Popup>
                </>
            )}

            {mode === 'R' && showPopup && (
                <>
                    <Popup content={'rapid'} closePopup={togglePopup} forceInput={true} stats={props.stats}></Popup>
                </>
            )}

            {showPopup && (props.youWin || props.youLose) && (
                <>
                    <Popup content={'stats'} closePopup={togglePopup} forceInput={false} animationDelay={true} stats={props.stats}></Popup>
                </>
            )}

            {showNavPopup && (
                <>
                    <Popup content={popupMode} closePopup={toggleNavButton} forceInput={false} stats={props.stats}></Popup>
                </>
            )}
        </div>
    );
}
