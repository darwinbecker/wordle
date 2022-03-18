import { Row } from '../row/row';
import { MAX_WORD_LENGTH } from '../../../config/settings';
import { MAX_GUESSES } from '../../../config/settings';

type GridProps = {
    rowIndex: number;
    // columnIndex: number;
    letter: string;
}

type RowsProps = {
    // columnIndex: number;
    letter: string;
}

const Rows: React.FC<GridProps> = (props: GridProps) => {
    return (
        <>
            {
                // [...Array(MAX_GUESSES)].map((element, index) => {
                //     return <Row key={index} letter={props.letter}></Row>
                // })
                // props.letter.split("").map((element, index) => {
                //     return <Row key={index} letter={element}></Row>
                // })
                [...Array(props.rowIndex + 1)].map((element, index) => {
                    return <Row key={index} letter={props.letter}></Row>
                })
            }
            {
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
            <Rows letter={props.letter} rowIndex={props.rowIndex} />
        </div>
    );
}

export const getTileID = (rowIndex: number, columnIndex: number) => {
    return rowIndex * MAX_WORD_LENGTH + columnIndex;
}