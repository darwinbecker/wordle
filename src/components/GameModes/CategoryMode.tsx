import { useEffect } from "react";
import { Category } from "../../types/Category";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { usePopup } from "../Context/Popup/Popup";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { PlayerStats } from "../LocalStorage";
import { Categories } from "../PopupContent";
import { WordStatusType } from "../WordStatus";

type CategoryModeProps = {
  guessedWord: string;
  guessedWords: string[];
  wordStatuses: WordStatusType[][];
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
  showPopup: boolean;
  togglePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
  stats: PlayerStats;
  category: Category;
  getNextCategoryWord: () => void;
};

export const CategoryMode = (props: CategoryModeProps) => {
  const { solution, youLose, youWin } = useGamestate();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  useEffect(() => {
    // set popup content
    setPopupContent(<Categories />);
    setForceInput(true);
    setAnimationDelay(false);
  }, [setForceInput, setPopupContent, setAnimationDelay]);

  return (
    <>
      <Grid isInputError={props.isInputError}></Grid>

      <Keyboard
        handleChange={props.handleChange}
        handeSubmit={props.handleSubmit}
        handleRemove={props.handleRemove}
      />

      {(youWin || youLose) && (
        <div className="gameover-feedback">
          <button className="next-word" onClick={props.getNextCategoryWord}>
            nächstes Wort
          </button>
          <h4>gesuchtes Wort war:</h4>
          <div className="solution-word">{solution}</div>
        </div>
      )}
    </>
  );
};
