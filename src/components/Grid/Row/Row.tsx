import { Tile } from '../Tile';
import { MAX_WORD_LENGTH } from '../../../Config/Settings';
import { WordStatusType } from '../../WordStatus';

type RowProps = {
    // columnIndex: number;
    letter: string;
    wordStatus?: WordStatusType[];
}

const Tiles: React.FC<RowProps> = (props: RowProps) => {
    const letterArray = props.letter ? props.letter.split("") : [];
    return (
        <>

            {
                letterArray.map((char, index) => {
                    if (props.wordStatus) {
                        // set already guessed letter in tile
                        return <Tile key={index} letter={char} status={props.wordStatus[index]}></Tile>
                    } else {
                        // set current letter in tile
                        return <Tile key={index} letter={char}></Tile>
                    }
                })
            }
            {
                // set empty tiles
                [...Array(MAX_WORD_LENGTH - letterArray.length)].map((char, index) => {
                    return <Tile key={index} letter={char}></Tile>
                })
            }
        </>
    );
}

export const Row: React.FC<RowProps> = (props: RowProps) => {
    return (
        <div className="Row">
            <Tiles letter={props.letter} wordStatus={props.wordStatus} />
        </div>
    );
}