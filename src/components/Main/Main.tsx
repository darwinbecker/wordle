import { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import { MAX_WORD_LENGTH } from '../../config/settings';
import { MAX_GUESSES } from '../../config/settings';
import { Grid } from '../grid/root';
import { checkstatus, StatusType } from '../wordStatus';
import { isInDictionary, DICTIONARY } from '../../config/dictionary';
import { WORD_OF_THE_DAY } from '../../config/wordlist';


export const Main: React.FC = () => {
    // const happyPress = useKeyDown("h");
    // const sadPress = useKeyDown("s");
    // const robotPress = useKeyDown("r");
    // const foxPress = useKeyDown("f");
    const [guessedWord, setGuessedWord] = useState<string>("");
    const [guessedWords, setGuessedWords] = useState<string[]>([]);

    const [rowIndex, setRowIndex] = useState<number>(0);
    const [columnIndex, setColumnIndex] = useState<number>(0);

    // const [wordStatus, setWordStatus] = useState<StatusType[]>([]);
    const [wordStatuses, setWordStatuses] = useState<StatusType[][]>([]);

    const [youWin, setYouWin] = useState<boolean>(false);
    const [youLose, setYouLose] = useState<boolean>(false);

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
        console.log(event);
    };

    const handleChange = (value: string) => {
        // && guesses.length < MAX_CHALLENGES && !isGameWon
        if (guessedWord.length < MAX_WORD_LENGTH) {
            setGuessedWord(`${guessedWord}${value}`);
            setColumnIndex(columnIndex + 1);
        } else {
            // TODO: display feedback for user
        }
    }

    const handleRemove = () => {
        if (guessedWord.length > 0) {
            setGuessedWord(guessedWord.slice(0, -1));
            setColumnIndex(columnIndex - 1);
        }
    }

    const handleSubmit = () => {
        console.log("Submitted:")
        console.log(guessedWord)
        if (guessedWords.length < MAX_GUESSES) {
            // TODO check if guessWord is in dictionary
            if(!isInDictionary(guessedWord)){ 
                console.log("WORD IS NOT IN DICTIONARY");
                return;
            }

            setGuessedWords([...guessedWords, guessedWord]);
            setRowIndex(rowIndex + 1);
            setColumnIndex(0);
            setGuessedWord("");
            const status = checkstatus(guessedWord, "WORDS");
            console.log(status);
            setWordStatuses([...wordStatuses, status]);

            if (!status.includes('semi') && !status.includes('wrong')) {
                setYouWin(true);
            }

            // last guess
            if (guessedWords.length == MAX_GUESSES - 1) {
                if (status.includes('semi') || status.includes('wrong')) {
                    setYouLose(true);
                    console.log("YOU LOSE!");
                }
            }

        }
    }


    useEffect(() => {
        WORD_OF_THE_DAY();
        if (youWin || youLose) return;
        const listener = (event: globalThis.KeyboardEvent): any => {
            if (event.code === 'Enter') {
                if (guessedWord.length == 5) {
                    handleSubmit()
                }
                else {
                    // TODO enter 5 characters => shake animation
                    console.log("enter 5 characters")
                }
            } else if (event.code === 'Backspace') {
                handleRemove()
            } else {
                const key = event.key.toLocaleUpperCase();
                // TODO remove A-Z => problem with german letters üäö 
                if (key.length == 1 && key >= 'A' && key <= 'Z') {
                    handleChange(key)
                }
            }
        }
        window.addEventListener('keyup', listener)
        return () => {
            window.removeEventListener('keyup', listener)
        }

    }, [handleSubmit, handleRemove, handleChange])

    return (
        <>
            {/* <div className="table-content" onClick={handleMouseEvent}> */}

            {/* <Grid rowIndex={rowIndex} columnIndex={columnIndex} letter={letter}></Grid> */}
            <Grid letter={guessedWord} guessedWords={guessedWords} wordStatuses={wordStatuses}></Grid>

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