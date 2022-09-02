import { useEffect, useState } from "react";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { usePopup } from "../Context/Popup/Popup";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { Rapid } from "../PopupContent";
import { Timer } from "../Timer";

type RapidModeProps = {
  // guessedWord: string;
  // guessedWords: string[];
  // wordStatuses: WordStatusType[][];
  // solution: string;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
  handleRemove: () => void;
  isInputError: boolean;
  // youWin: boolean;
  // youLose: boolean;
  // setYouLose: (value: boolean) => void;
  // showPopup: boolean;
  // togglePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // stats: PlayerStats;
  // rapidModeScore: number;
  // resetRapidMode: () => void;
  // timer: number | undefined;
  // setTimer: (value: number) => void;
  // pauseTimer: boolean;
  // setPauseTimer: (value: boolean) => void;
};

export const RapidMode = (props: RapidModeProps) => {
  const { youLose, solution, setSolution, resetGame } = useGamestate();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  const [timer, setTimer] = useState<number>();
  const [pauseTimer, setPauseTimer] = useState<boolean>(true);

  const [rapidMode, setRapidMode] = useState<number>(0);
  const [rapidModeScore, setRapidModeScore] = useState<number>(0);

  const resetRapidMode = (): void => {
    resetGame();
    setSolution("TIMER");
    setRapidModeScore(0);
    setPauseTimer(true);
    const t = new Date().getTime() + rapidMode * 60 * 1000;
    setTimer(t);
  };

  useEffect(() => {
    // set popup content
    setPopupContent(<Rapid setRapidMode={setRapidMode} setTimer={setTimer} />);
    setForceInput(true);
    setAnimationDelay(false);
  }, [setAnimationDelay, setForceInput, setPopupContent]);

  return (
    <>
      <Grid isInputError={props.isInputError}></Grid>

      <Keyboard
        handleChange={props.handleChange}
        handeSubmit={props.handleSubmit}
        handleRemove={props.handleRemove}
      />

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

        {timer && !youLose && (
          <Timer
            expiryTimestamp={timer}
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
