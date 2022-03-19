import { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import { useKeyDown } from "../useKeyDown/useKeyDown";
import { MAX_WORD_LENGTH } from '../../config/settings';
import { MAX_GUESSES } from '../../config/settings';
import { Grid } from '../grid/root/grid';


export const Main: React.FC = () => {
    // const happyPress = useKeyDown("h");
    // const sadPress = useKeyDown("s");
    // const robotPress = useKeyDown("r");
    // const foxPress = useKeyDown("f");

    const [letter, setLetter] = useState<string>("");
    const [guessedWords, setGuessedWords] = useState<string[]>([]);

    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);
    const pressedKey = useKeyDown(letter);

    // const handleKeyboardEvent = (event: any) => {
    //     console.log(event.key);
    //     // letter.length <= 5 ? setLetter(letter + event.key) : null;
    //     console.log("letter.length");
    //     console.log(letter.length);
    //     if (letter.length <= 5) {
    //         setLetter(letter + event.key);
    //     }
    // };

    // window.addEventListener('keydown', handleKeyboardEvent);

    // const handleKeyboardEvent = (event: KeyboardEvent<HTMLImageElement>) => {
    //     // Do something
    //     console.log("YEP");
    //     console.log(event);
    // };

    const handleMouseEvent = (event: MouseEvent<HTMLImageElement>) => {
        // Do something
        console.log("YEP");
        console.log(event);
    };
    const onChar = (value: string) => {
        // && guesses.length < MAX_CHALLENGES && !isGameWon
        if (letter.length < MAX_WORD_LENGTH) {
            setLetter(`${letter}${value}`);
            setColumnIndex(columnIndex + 1);
        }
    }

    const onDelete = () => {
        if (letter.length > 0) {
            setLetter(letter.slice(0, -1));
            setColumnIndex(columnIndex - 1);
        }
    }
    const onEnter = () => {
        console.log("Submitted:")
        console.log(letter)
        if (rowIndex < (MAX_GUESSES - 1)) {
            setGuessedWords([...guessedWords, letter]);
            setRowIndex(rowIndex + 1);
            setColumnIndex(0);
            setLetter("");
        }
    }


    useEffect(() => {
        const listener = (event: globalThis.KeyboardEvent): any => {
            if (event.code === 'Enter') {
                onEnter()
            } else if (event.code === 'Backspace') {
                onDelete()
            } else {
                const key = event.key.toLocaleUpperCase();
                // TODO remove A-Z => problem with german letters üäö 
                if (key.length == 1 && key >= 'A' && key <= 'Z') {
                    onChar(key)
                }
            }
        }
        window.addEventListener('keyup', listener)
        console.log("rowIndex:" + rowIndex)
        console.log("columnIndex:" + columnIndex)
        return () => {
            window.removeEventListener('keyup', listener)
        }

    }, [onEnter, onDelete, onChar])

    return (
        <>
            {/* <div className="table-content" onClick={handleMouseEvent}> */}

            {/* <Grid rowIndex={rowIndex} columnIndex={columnIndex} letter={letter}></Grid> */}
            <Grid rowIndex={rowIndex} letter={letter} guessedWords={guessedWords} ></Grid>

            {/* <div className="table-content">
                {letter}
            </div> */}
            {/* <div className="table-content">
                <div className="table-row">
                    <div className="table-tile"></div>
                </div>
                <div className="table-row">
                    <div className="table-tile"></div>
                </div>
                <div className="table-row">
                    <div className="table-tile"></div>
                </div>
                <div className="table-row">
                    <div className="table-tile"></div>
                </div>
                <div className="table-row">
                    <div className="table-tile"></div>
                </div>
                <div className="table-row">
                    <div className="table-tile"></div>
                </div>
            </div> */}
        </>
    );
}