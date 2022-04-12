import React from "react";
import { idText } from "typescript";
import { WORD_OF_THE_DAY } from "../../Config/Wordlist";
import { getStatuses, WordStatusClassNames, WordStatusType } from "../WordStatus";

type KeyboardProps = {
    wordStatuses: WordStatusType[][];
    guessedWords: string[];
    solution: string;
}

export const Keyboard: React.FC<KeyboardProps> = (props: KeyboardProps) => {
    const firstRow: string[] = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"];
    const secondRow: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const thirdRow: string[] = ["ENTER", "Y", "X", "C", "V", "B", "N", "M", "DELETE"];
    const charStatuses = getStatuses(props.guessedWords, props.solution);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const buttonValue = event.currentTarget.value;
        console.log(buttonValue);
    }
    
    return (
        <div className="Keyboard">
            <div className="firstRow">
                {firstRow.map((letter, index) => {
                    return (
                        <button className={WordStatusClassNames('Key', charStatuses[letter])} onClick={handleClick} value={letter} key={index}>{letter}</button>
                    )
                })}
            </div>
            <div className="secondRow">
                {secondRow.map((letter, index) => {
                    return (
                        <button className={WordStatusClassNames('Key', charStatuses[letter])} onClick={handleClick} value={letter} key={index}>{letter}</button>
                    )
                })}
            </div>
            <div className="thirdRow">
                {thirdRow.map((letter, index) => {
                    if (index == 0) {
                        return (
                            <button  className={WordStatusClassNames('Key Enter-Key', charStatuses[letter])} onClick={handleClick} value={letter} key={index}><i className="fa-regular fa-circle-check"></i></button>
                        )
                    } else if(index == 8) {
                        return (
                            <button className={WordStatusClassNames('Key Delete-Key', charStatuses[letter])} onClick={handleClick} value={letter} key={index}><i className="fa-solid fa-delete-left"></i></button>
                        )
                    } else{
                        return (
                            <button className={WordStatusClassNames('Key', charStatuses[letter])} onClick={handleClick} value={letter} key={index}>{letter}</button>
                        )
                    }
                })}
            </div>
        </div>
    );
}