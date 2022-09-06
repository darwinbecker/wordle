import { useCallback, useEffect, useState } from "react";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { usePopup } from "../Context/Popup/Popup";
import { WinService } from "../Observables/WinService";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { InputService } from "../Observables/InputService";
import { Rapid } from "../PopupContent";
import { Timer } from "../Timer";
import {
  loadRapidScore1Min,
  saveRapidScore1Min,
  loadRapidScore3Min,
  saveRapidScore3Min,
  loadRapidScore5Min,
  saveRapidScore5Min,
} from "../LocalStorage";

export const RapidMode = () => {
  const { youLose, setYouLose, setYouWin, solution, setSolution } =
    useGamestate();
  const { resetGame, getNextWord } = useInput();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  const [timer, setTimer] = useState<number | null>(null);
  const [pauseTimer, setPauseTimer] = useState<boolean>(true);

  const [rapidMode, setRapidMode] = useState<number | null>(null);
  const [rapidModeScore, setRapidModeScore] = useState<number>(0);

  // reset game
  const resetRapidMode = useCallback((): void => {
    resetGame();
    setSolution("TIMER");
    setRapidModeScore(0);
    setPauseTimer(true);
    const t = new Date().getTime() + rapidMode! * 60 * 1000;
    setTimer(t);
  }, [resetGame, setSolution, rapidMode]);

  useEffect(() => {
    resetRapidMode();
  }, [resetRapidMode]);

  // set popup content
  useEffect(() => {
    setPopupContent(<Rapid setRapidMode={setRapidMode} />);
    setForceInput(true);
    setAnimationDelay(false);
  }, [setAnimationDelay, setForceInput, setPopupContent]);

  // on input change => start timer if not started
  useEffect(() => {
    const subscription = InputService.onInputChange().subscribe(() => {
      if (pauseTimer) {
        const t = new Date().getTime() + rapidMode! * 60 * 1000;
        setTimer(t);
        setPauseTimer(false);
      }
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [pauseTimer, rapidMode]);

  // on win => get next word & calculate score or save score if game over
  useEffect(() => {
    const subscription = WinService.onWinChange().subscribe((win) => {
      if (win) {
        setRapidModeScore(rapidModeScore + 1);
        getNextWord();
      } else {
        setPauseTimer(true);
        setYouLose(true);
        if (rapidMode === 1) {
          const loadedRapidScore = loadRapidScore1Min();
          if (loadedRapidScore <= rapidModeScore)
            saveRapidScore1Min(rapidModeScore);
        } else if (rapidMode === 3) {
          const loadedRapidScore = loadRapidScore3Min();
          if (loadedRapidScore <= rapidModeScore)
            saveRapidScore3Min(rapidModeScore);
        } else if (rapidMode === 5) {
          const loadedRapidScore = loadRapidScore5Min();
          if (loadedRapidScore <= rapidModeScore)
            saveRapidScore5Min(rapidModeScore);
        }
      }
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [getNextWord, rapidMode, rapidModeScore, setYouLose, setYouWin]);

  return (
    <>
      <Grid></Grid>
      <Keyboard />

      <div className="rapid">
        {youLose && (
          <>
            <div className="game-summary">
              <div className="rapid-score">
                <h4>Score:</h4>
                <div className="score-value">{rapidModeScore}</div>
              </div>

              <Timer
                expiryTimestamp={timer ? timer : 0}
                setExpiryTimestamp={setTimer}
                pauseTimer={pauseTimer}
                setPauseTimer={setPauseTimer}
              />

              <div className="gameover-feedback">
                <h4>gesuchtes Wort war:</h4>
                <div className="solution-word">{solution}</div>
              </div>
            </div>
            <div>
              <button className="new-game-button" onClick={resetRapidMode}>
                Neues Spiel
              </button>
            </div>
          </>
        )}

        {rapidMode && timer && !youLose && (
          <Timer
            expiryTimestamp={new Date().getTime() + rapidMode! * 60 * 1000}
            setExpiryTimestamp={setTimer}
            pauseTimer={pauseTimer}
            setPauseTimer={setPauseTimer}
          />
        )}

        {rapidModeScore > 0 && !youLose && (
          <div className="rapid-score">
            <h4>Score:</h4>
            <div className="score-value">{rapidModeScore}</div>
          </div>
        )}
      </div>
    </>
  );
};
