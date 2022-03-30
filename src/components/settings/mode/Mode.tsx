import { ChangeEvent, useEffect, useState } from "react";
import { MAX_GUESSES } from "../../../config/settings";
import { WORD_OF_THE_DAY } from "../../../config/wordlist";
import { loadGameStateFromLocalStorage } from "../../localStorage";
import { StatusType } from "../../wordStatus";
// import Popup from 'reactjs-popup';
import { Popup } from "../categories/Popup";


// WOTD = Word Of The Day
// TR = Training
// C = Category
// R = Rapid
export type ModeType = 'WOTD' | 'TR' | 'C' | 'R';

type ModeProps = {
    handleMode: (event: ChangeEvent<HTMLSelectElement>) => void;
    currentMode: ModeType;
    resetGame: () => void;
    solution: string;
    setSolution: (solution: string) => void;
    guessedWords: string[];
    setGuessedWords: (guessedWords: string[]) => void;
    setWordStatuses: (wordStatuses: StatusType[][]) => void;
    setYouWin: (youWin: boolean) => void;
    setYouLose: (youLose: boolean) => void;
    getNextWord: () => void;
}

export const Mode: React.FC<ModeProps> = (props: ModeProps) => {

    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {

        if (props.currentMode == 'WOTD') {
            props.resetGame();
            props.setSolution(WORD_OF_THE_DAY().solution);

            let data: string[] = [];
            let wordStatuses: StatusType[][] = []
            const loaded = loadGameStateFromLocalStorage();
            console.log("loaded", loaded);
            if (loaded) {
                if (loaded.solution !== WORD_OF_THE_DAY().solution) {
                    data = [];
                } else {
                    const gameWasWon = loaded.guessedWords.includes(WORD_OF_THE_DAY().solution);
                    if (gameWasWon) {
                        props.setYouWin(true);
                    }

                    if (loaded.guessedWords.length === MAX_GUESSES && !gameWasWon) {
                        props.setYouLose(true);
                        //     showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
                        //     persist: true,
                        //   })
                    }
                    data = loaded.guessedWords;
                    wordStatuses = loaded.wordStatuses;
                }
            }

            props.setGuessedWords(data);
            props.setWordStatuses(wordStatuses);
        }
        else if (props.currentMode == 'TR') {
            props.getNextWord();
        }
        else if (props.currentMode == 'C') {
            props.resetGame();
            setShowPopup(true);
        } else if (props.currentMode == 'R') {
            props.resetGame();
            setShowPopup(true);
            console.log("load Rapid mode");
        }
    }, [props.currentMode])

    const togglePopup = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.value);
        const category = event.currentTarget.value;
        setShowPopup(!showPopup);
    }

    return (
        <div className="Mode">
            <div className="mode-select-wrapper">
                <select className="mode-select" onChange={props.handleMode}>
                    <option value="WOTD">Wort des Tages</option>
                    <option value="TR">Training</option>
                    <option value="C">Kategorie</option>
                    <option value="R">Blitz</option>
                </select>
            </div>

            {props.currentMode === 'C' && showPopup && (
                <div className="category">
                    <Popup content={'categories'} closePopup={togglePopup}></Popup>
                </div>
            )}

            {props.currentMode === 'R' && showPopup && (
                <div className="rapid">
                    <Popup content={'rapid'} closePopup={togglePopup}></Popup>
                </div>
            )}
        </div>
    );
}
