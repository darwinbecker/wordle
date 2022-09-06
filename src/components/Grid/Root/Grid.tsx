import { Row } from "../Row";
import { MAX_WORD_LENGTH } from "../../../config/Settings";
import { MAX_GUESSES } from "../../../config/Settings";
import { WordStatusType } from "../../WordStatus";
import { useInput } from "../../Context/Input/Input";

const Rows: React.FC = () => {
  const { guessedWord, guessedWords, wordStatuses, isInputError } = useInput();

  return (
    <>
      {
        // set already guessed words in row
        guessedWords.map((char, index) => {
          return (
            <Row
              key={index}
              letter={char}
              wordStatus={wordStatuses[index] as WordStatusType[]}
              isInputError={false}
            ></Row>
          );
        })
      }
      {
        // set current guess word in row
        guessedWords.length < MAX_GUESSES ? (
          [...Array(1)].map((_, index) => {
            return (
              <Row
                key={index}
                letter={guessedWord}
                isInputError={isInputError}
              ></Row>
            );
          })
        ) : (
          <></>
        )
      }
      {
        // set empty rows
        guessedWords.length < MAX_GUESSES ? (
          [...Array(MAX_GUESSES - 1 - guessedWords.length)].map(
            (char, index) => {
              return <Row key={index} letter={char} isInputError={false}></Row>;
            }
          )
        ) : (
          <></>
        )
      }
    </>
  );
};

export const Grid: React.FC = () => {
  return (
    <div className="Grid">
      <Rows />
    </div>
  );
};

export const getTileID = (rowIndex: number, columnIndex: number) => {
  return rowIndex * MAX_WORD_LENGTH + columnIndex;
};
