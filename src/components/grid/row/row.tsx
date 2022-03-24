import { Tile } from '../tile';
import { MAX_WORD_LENGTH } from '../../../config/settings';

type RowProps = {
    // columnIndex: number;
    letter: string;
    wordStatus?: string[];
}

const Tiles: React.FC<RowProps> = (props: RowProps) => {
    const letterArray = props.letter ? props.letter.split("") : [];
    return (
        <>

            {
                letterArray.map((element, index) => {
                    if (props.wordStatus) {
                        // set already guessed letter in tile
                        return <Tile key={index} letter={element} status={props.wordStatus[index]}></Tile>
                    } else {
                        // set current letter in tile
                        return <Tile key={index} letter={element}></Tile>
                    }
                })
            }
            {
                // set empty tiles
                [...Array(MAX_WORD_LENGTH - letterArray.length)].map((element, index) => {
                    return <Tile key={index} letter={element}></Tile>
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