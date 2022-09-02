import { useCallback, useEffect } from "react";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";

type TRModeProps = {
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
};

export const TRMode = (props: TRModeProps) => {
  const { youLose, youWin, solution, setSolution, resetGame } = useGamestate();

  useEffect(() => {
    getNextWord();
  }, []);

  const getNextWord = useCallback((): void => {
    resetGame();
    // setSolution(getRandomWord());
    setSolution("TIMER");
  }, [resetGame, setSolution]);

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
