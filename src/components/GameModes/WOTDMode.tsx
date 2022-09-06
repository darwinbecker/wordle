import { useEffect } from "react";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { usePopup } from "../Context/Popup/Popup";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { Stats } from "../PopupContent";

type WOTDModeProps = {
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
};

export const WOTDMode = (props: WOTDModeProps) => {
  const { youLose, youWin, solution } = useGamestate();
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

      {youLose && (
        <div className="gameover-feedback">
          <h4>gesuchtes Wort war:</h4>
          <div className="solution-word">{solution}</div>
        </div>
      )}
    </>
  );
};
