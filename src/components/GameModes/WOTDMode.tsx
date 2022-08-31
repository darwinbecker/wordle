import { useEffect } from "react";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { usePopup } from "../Context/Popup/Popup";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { PlayerStats } from "../LocalStorage";
import { Stats } from "../PopupContent";
import { WordStatusType } from "../WordStatus";

type WOTDModeProps = {
  guessedWord: string;
  guessedWords: string[];
  wordStatuses: WordStatusType[][];
  solution: string;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
  youWin: boolean;
  youLose: boolean;
  showPopup: boolean;
  togglePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
  stats: PlayerStats;
};

export const WOTDMode = (props: WOTDModeProps) => {
  const { youLose, youWin } = useGamestate();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  useEffect(() => {
    // set popup content
    if (youLose || youWin) {
      setPopupContent(<Stats />);
      setForceInput(false);
      setAnimationDelay(true);
    }
  }, [setAnimationDelay, setForceInput, setPopupContent, youLose, youWin]);

  return (
    <>
      <Grid isInputError={props.isInputError}></Grid>

      <Keyboard
        handleChange={props.handleChange}
        handeSubmit={props.handleSubmit}
        handleRemove={props.handleRemove}
      />

      {props.youLose && (
        <div className="gameover-feedback">
          <h4>gesuchtes Wort war:</h4>
          <div className="solution-word">{props.solution}</div>
        </div>
      )}
    </>
  );
};
