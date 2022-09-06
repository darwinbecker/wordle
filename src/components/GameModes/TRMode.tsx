import { useEffect } from "react";
import { Confetti } from "../Animations/Confetti";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { WinService } from "../GameHandler/WinService";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";

type TRModeProps = {
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
};

export const TRMode = (props: TRModeProps) => {
  const { youLose, youWin, setYouWin, solution } = useGamestate();
  const { getNextWord } = useInput();

  useEffect(() => {
    getNextWord();
  }, [getNextWord]);

  useEffect(() => {
    const subscription = WinService.onWinChange().subscribe((win) => {
      if (win) {
        setYouWin(true);
        Confetti();
      }
    });

    // return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [setYouWin]);

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
          <button className="next-word" onClick={getNextWord}>
            nächstes Wort
          </button>
          <h4>gesuchtes Wort war:</h4>
          <div className="solution-word">{solution}</div>
        </div>
      )}
    </>
  );
};
