import { Tile } from '../tile/tile';
import { MAX_WORD_LENGTH } from '../../../config/settings';

type RowProps = {
    letter: string;
}

const Tiles: React.FC<RowProps> = (props: RowProps) => {
    return (
        <>
            {
                [...Array(MAX_WORD_LENGTH)].map((element, index) => {
                    return <Tile key={index} letter={props.letter}></Tile>
                })
            }
        </>
    );
}

export const Row: React.FC<RowProps> = (props: RowProps) => {
    return (
        <div className="Row">
            <Tiles letter={props.letter} />
        </div>
    );
}