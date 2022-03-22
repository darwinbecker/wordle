import { Row } from '../row';
import { MAX_WORD_LENGTH } from '../../../config/settings';
import { MAX_GUESSES } from '../../../config/settings';

type GridProps = {
    letter: string;
    guessedWords: string[];
    wordStatuses?: string[][];
}

const Rows: React.FC<GridProps> = (props: GridProps) => {
    return (
        <>
            {
                // set already guessed words
                props.guessedWords.map((element, index) => {
                    if (props.wordStatuses) {
                        return <Row key={index} letter={element} wordStatus={props.wordStatuses[index]}></Row>
                    }
                })
            }
            {
                props.guessedWords.length < MAX_GUESSES ?
                    // set current guess
                    [...Array(1)].map((element, index) => {
                        return <Row key={index} letter={props.letter}></Row>
                    })
                    :
                    <></>
            }
            {
                props.guessedWords.length < MAX_GUESSES ?

                    [...Array((MAX_GUESSES - 1) - props.guessedWords.length)].map((element, index) => {
                        return <Row key={index} letter={element}></Row>
                    })
                    :
                    <></>
            }


            {/* {
                [...Array(MAX_GUESSES)].map((element, index) => {
                    if (index == props.rowIndex) {
                        return <Row key={index} letter={props.letter}></Row>
                    } else {
                        return <Row key={index} letter={element}></Row>
                    }
                })
            } */}
        </>

    );
}

export const Grid: React.FC<GridProps> = (props: GridProps) => {
    return (
        <div className="Grid">
            <Rows letter={props.letter} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses} />
        </div>
    );
}

export const getTileID = (rowIndex: number, columnIndex: number) => {
    return rowIndex * MAX_WORD_LENGTH + columnIndex;
}