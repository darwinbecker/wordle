// https://www.npmjs.com/package/react-timer-hook
import { useCallback, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { WinService } from "../../libs/Observables/WinService";
import { usePopup } from "../Context/Popup/Popup";
import { Stats } from "../PopupContent";
import { loadRapidScore, saveRapidScore } from "../../libs/LocalStorage";

type TimerProps = {
  expiryTimestamp: number;
  setExpiryTimestamp: (value: number) => void;
  pauseTimer: boolean;
  setPauseTimer: (value: boolean) => void;
  addExtraTimeAlert?: boolean;
  rapidMode: number;
  rapidModeScore: number;
};

export const Timer = (props: TimerProps) => {
  const { youLose, setYouLose } = useGamestate();
  const [expiryDate, setExpiryDate] = useState<Date>(
    new Date(props.expiryTimestamp)
  );
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  const { seconds, minutes, isRunning, start, pause, restart } = useTimer({
    autoStart: false,
    expiryTimestamp: expiryDate,
    onExpire: () => onExpire(),
  });

  const extraTimeInSeconds = 5;
  const [displayAddedExtraTime, setDisplayAddedExtraTime] =
    useState<boolean>(false);

  // add extra time if guessed word is correct (helper function)
  const AddExtraTime = useCallback(() => {
    const extraTime =
      Date.now() + minutes * 60000 + (seconds + extraTimeInSeconds) * 1000;
    const newExpiryDate = new Date(extraTime);

    props.setExpiryTimestamp(extraTime);
    setExpiryDate(newExpiryDate);
    restart(newExpiryDate);
  }, [minutes, props, restart, seconds]);

  // add extra time if guessed word is correct
  useEffect(() => {
    if (displayAddedExtraTime) {
      setDisplayAddedExtraTime(false);
    }
    const subscription = WinService.onWinChange().subscribe(() => {
      AddExtraTime();
      setDisplayAddedExtraTime(true);
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [seconds]); // important: <-- just add seconds as a dependency to re-run effect when seconds change (every second)

  // start timer if user starts to type
  useEffect(() => {
    if (props.pauseTimer) {
      pause();
    } else {
      start();
    }
  }, [pause, props.pauseTimer, start]);

  // on timer expire => set you lose, stop timer, save stats & show stats
  const onExpire = () => {
    console.warn("onExpire called");
    props.setPauseTimer(true);
    setYouLose(true);

    // save score to local storage
    const loadedRapidScore = loadRapidScore(props.rapidMode.toString());
    if (loadedRapidScore <= props.rapidModeScore)
      saveRapidScore(props.rapidMode.toString(), props.rapidModeScore);

    // set popup content
    setPopupContent(<Stats />);
    setForceInput(false);
    setAnimationDelay(true);
  };

  const isDanger = minutes === 0 && seconds < 10;
  return (
    <div className="timer">
      {youLose && <h4>Zeit:</h4>}

      <div
        className={
          isDanger && isRunning
            ? seconds <= 3
              ? "countdown expired"
              : "countdown danger"
            : "countdown"
        }
      >
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>

      {!youLose && !isRunning && (
        <p>- Drücke einen Buchstaben, um den Timer zu starten -</p>
      )}

      {displayAddedExtraTime && (
        <div className="added-extra-time animate__animated animate__fadeOutUp animate__delay-2s">
          +5 Sekunden
        </div>
      )}
    </div>
  );
};
