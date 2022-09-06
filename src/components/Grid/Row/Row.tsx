import { Tile } from "../Tile";
import { MAX_WORD_LENGTH } from "../../../config/Settings";
import { WordStatusType } from "../../WordStatus";
import { useInput } from "../../Context/Input/Input";

type RowProps = {
  letter: string;
  wordStatus?: WordStatusType[];
  isInputError: boolean;
};

const Tiles: React.FC<RowProps> = (props: RowProps) => {
  const letterArray = props.letter ? props.letter.split("") : [];
  return (
    <>
      {letterArray.map((char, index) => {
        if (props.wordStatus) {
          // set already guessed letter in tile
          return (
            <Tile
              key={index}
              letter={char}
              status={props.wordStatus[index]}
              isInputError={false}
            ></Tile>
          );
        } else {
          // set current letter in tile
          return <Tile key={index} letter={char} isInputError={false}></Tile>;
        }
      })}
      {
        // set empty tiles
        [...Array(MAX_WORD_LENGTH - letterArray.length)].map((char, index) => {
          return (
            <Tile
              key={index}
              letter={char}
              isInputError={props.isInputError}
            ></Tile>
          );
        })
      }
    </>
  );
};

export const Row: React.FC<RowProps> = (props: RowProps) => {
  return (
    <div className={"Row" + (props.isInputError ? " shake" : "")}>
      <Tiles
        letter={props.letter}
        wordStatus={props.wordStatus}
        isInputError={props.isInputError}
      />
    </div>
  );
};
