import { Row } from '../row/row';
import { MAX_GUESSES } from '../../../config/settings';

type GridProps = {
    rowIndex: number;
    letter: string;
}

export const Rows: React.FC<GridProps> = (props: GridProps) => {
    return (
        <>
            {
                [...Array(MAX_GUESSES)].map((element, index) => {
                    return <Row key={index} letter={props.letter}></Row>
                })
            }
        </>

    );
}

export const Grid: React.FC<GridProps> = (props: GridProps) => {
    return (
        <div className="Grid">
            <Rows letter={props.letter} rowIndex={0} />
        </div>
    );
}