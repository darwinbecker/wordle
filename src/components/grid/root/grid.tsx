import { Row } from '../row';
import { MAX_WORD_LENGTH } from '../../../config/settings';
import { MAX_GUESSES } from '../../../config/settings';

type GridProps = {
    rowIndex: number;
    // columnIndex: number;
    letter: string;
    guessedWords: string[];
}

const Rows: React.FC<GridProps> = (props: GridProps) => {
    return (
        <>
            {
                // set already guessed words
                props.guessedWords.map((element, index) => {
                    return <Row key={index} letter={element}></Row>
                })
            }
            {
                // set current guess
                [...Array(props.guessedWords.length - props.rowIndex + 1)].map((element, index) => {
                    return <Row key={index} letter={props.letter}></Row>
                })
            }
            {
                // set empty rows
                [...Array((MAX_GUESSES - 1) - props.rowIndex)].map((element, index) => {
                    return <Row key={index} letter={element}></Row>
                })
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
            <Rows letter={props.letter} rowIndex={props.rowIndex} guessedWords={props.guessedWords} />
        </div>
    );
}

export const getTileID = (rowIndex: number, columnIndex: number) => {
    return rowIndex * MAX_WORD_LENGTH + columnIndex;
}