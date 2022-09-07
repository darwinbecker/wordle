import { useEffect } from "react";
import { Confetti } from "../Animations/Confetti";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { WinService } from "../../libs/Observables/WinService";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard/Keyboard";

export const TRMode = () => {
  const { youLose, setYouLose, youWin, setYouWin, solution } = useGamestate();
  const { getNextWord } = useInput();

  // get next word
  useEffect(() => {
    getNextWord();
  }, [getNextWord]);

  // on win => show confetti
  useEffect(() => {
    const subscription = WinService.onWinChange().subscribe((win) => {
      if (win) {
        setYouWin(true);
        Confetti();
      } else {
        setYouLose(true);
        console.log("YOU LOST!");
      }
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [setYouLose, setYouWin]);

  return (
    <>
      <Grid></Grid>
      <Keyboard />

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
