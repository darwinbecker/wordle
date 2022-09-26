import { useCallback, useEffect, useState } from "react";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { usePopup } from "../Context/Popup/Popup";
import { WinService } from "../../libs/Observables/WinService";
import { Keyboard } from "../Keyboard/Keyboard";
import { InputService } from "../../libs/Observables/InputService";
import { Rapid, Stats } from "../PopupContent";
import { Timer } from "../Timer/Timer";
import { loadRapidScore, saveRapidScore } from "../../libs/LocalStorage";
import { timer } from "rxjs";
import { Grid } from "../Grid";

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

        // save score to local storage
        const loadedRapidScore = loadRapidScore(rapidMode!.toString());
        if (loadedRapidScore <= rapidModeScore)
          saveRapidScore(rapidMode!.toString(), rapidModeScore);

        // set popup content
        setPopupContent(<Stats />);
        setForceInput(false);
        setAnimationDelay(true);
      }
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [
    getNextWord,
    rapidMode,
    rapidModeScore,
    setAnimationDelay,
    setForceInput,
    setPopupContent,
    setYouLose,
    setYouWin,
  ]);

  return (
    <>
      <Grid></Grid>
      <Keyboard />

      <div className="rapid">
        {rapidMode && youLose && (
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
                rapidMode={rapidMode}
                rapidModeScore={rapidModeScore}
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
            rapidMode={rapidMode}
            rapidModeScore={rapidModeScore}
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
