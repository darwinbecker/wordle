import { ChangeEvent, useEffect, useState } from "react";
import { WORD_OF_THE_DAY } from "../../../config/wordlist";
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
    setSolution: (solution: string) => void;
    getNextWord: () => void;
}

export const Mode: React.FC<ModeProps> = (props: ModeProps) => {

    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {

        if (props.currentMode == 'WOTD') {
            props.resetGame();
            props.setSolution(WORD_OF_THE_DAY().solution);
        }
        else if (props.currentMode == 'TR') {
            props.getNextWord();
        }
        else if (props.currentMode == 'C') {
            setShowPopup(true);
        } else if (props.currentMode == 'R') {
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
                    <option value="WOTD">Word of the day</option>
                    <option value="TR">Training</option>
                    <option value="C">Category</option>
                    <option value="R">Rapid</option>
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
