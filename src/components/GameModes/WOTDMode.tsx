import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { Confetti } from "../Animations/Confetti";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { usePopup } from "../Context/Popup/Popup";
import { useStats } from "../Context/Stats/Stats";
import { WinService } from "../GameHandler/WinService";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { savePlayerStats } from "../LocalStorage/PlayerStats/PlayerStats";
import { Stats } from "../PopupContent";

type WOTDModeProps = {
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
};

export const WOTDMode = (props: WOTDModeProps) => {
  const { youLose, setYouLose, youWin, setYouWin, solution } = useGamestate();
  const { guessedWord, guessedWords } = useInput();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();
  const { setStats, updatePlayerStats } = useStats();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // set popup content
    if (youLose || youWin) {
      setPopupContent(<Stats />);
      setForceInput(false);
      setAnimationDelay(true);
    }
  }, [setAnimationDelay, setForceInput, setPopupContent, youLose, youWin]);

  useEffect(() => {
    const subscription = WinService.onWinChange().subscribe((win) => {
      console.log("TEST HERE HQALLO");
      if (win) {
        const newStats = updatePlayerStats(true);
        setStats(newStats);
        savePlayerStats(newStats);
        enqueueSnackbar("Du hast das heutige Wort richtig erraten! 🎉", {
          variant: "success",
        });
        setYouWin(true);
        Confetti();
        // setPopupContent(<Stats />);
        // setForceInput(false);
        // setAnimationDelay(true);
      } else{
        const newStats = updatePlayerStats(false);
        setStats(newStats);
        savePlayerStats(newStats);
        enqueueSnackbar(
          `Du hast das heutige Wort: "${solution}" leider nicht erraten`,
          { variant: "error" }
        );
        setYouLose(true);
      }
    });

    // return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [enqueueSnackbar, guessedWord, guessedWords, setStats, setYouLose, setYouWin, solution, updatePlayerStats]);

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
