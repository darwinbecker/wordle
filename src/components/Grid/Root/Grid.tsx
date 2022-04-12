import { Row } from '../Row';
import { MAX_WORD_LENGTH } from '../../../Config/Settings';
import { MAX_GUESSES } from '../../../Config/Settings';
import { WordStatusType } from '../../WordStatus';

type GridProps = {
    letter: string;
    guessedWords: string[];
    wordStatuses?: string[][];
}

const Rows: React.FC<GridProps> = (props: GridProps) => {
    return (
        <>
            {
                // set already guessed words in row
                props.guessedWords.map((char, index) => {
                    if (props.wordStatuses) {
                        return <Row key={index} letter={char} wordStatus={props.wordStatuses[index] as WordStatusType[]}></Row>
                    }
                })
            }
            {
                // set current guess word in row
                props.guessedWords.length < MAX_GUESSES ?
                    [...Array(1)].map((char, index) => {
                        return <Row key={index} letter={props.letter}></Row>
                    })
                    :
                    <></>
            }
            {
                // set empty rows
                props.guessedWords.length < MAX_GUESSES ?
                    [...Array((MAX_GUESSES - 1) - props.guessedWords.length)].map((char, index) => {
                        return <Row key={index} letter={char}></Row>
                    })
                    :
                    <></>
            }
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