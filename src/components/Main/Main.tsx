import { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import { useKeyDown } from "../useKeyDown/useKeyDown";



export const Main: React.FC = () => {
    // const happyPress = useKeyDown("h");
    // const sadPress = useKeyDown("s");
    // const robotPress = useKeyDown("r");
    // const foxPress = useKeyDown("f");

    const [letter, setLetter] = useState<string>("");
    const pressedKey = useKeyDown(letter);
    const MAX_WORD_LENGTH = 5;

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
        console.log(value);
        // && guesses.length < MAX_CHALLENGES && !isGameWon
        if (value.length <= MAX_WORD_LENGTH) {
            setLetter(`${letter}${value}`)
        }
    }

    const onDelete = () => {
        setLetter(letter.slice(0, -1));
        console.log(letter);
    }
    const onEnter = () => {
        console.log("Submitted:")
        console.log(letter)
    }


    useEffect(() => {
        const listener = (event: globalThis.KeyboardEvent): any => {
            if (event.code === 'Enter') {
                onEnter()
            } else if (event.code === 'Backspace') {
                onDelete()
            } else {
                // onChar(event.key)
                // const key = localeAwareUpperCase(event.key)
                // // TODO: check this test if the range works with non-english letters
                  onChar(event.key)
                // if (event.key.length == 1 && event.key >= 'A' && event.key <= 'Z') {
                //   onChar(event.key)
                // }
            }
        }
        window.addEventListener('keyup', listener)
        return () => {
            window.removeEventListener('keyup', listener)
        }
    }, [onEnter, onDelete, onChar])

    return (
        <>
            {/* <div className="table-content" onClick={handleMouseEvent}> */}
            <div className="table-content">
                {letter}
            </div>
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