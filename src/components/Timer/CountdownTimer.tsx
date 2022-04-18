// Source: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
import { useEffect, useState } from "react";
import { useTimer, useTimerFreeze } from ".";
import TimeDisplay from "./TimeDisplay";

const ExpiredCountdownNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

type DisplayTimerProps = {
  minutes: number,
  seconds: number
}

const DisplayTimer = (props: DisplayTimerProps) => {
  return (
    <div className="show-counter">
      <TimeDisplay value={props.minutes} type={'Mins'} isDanger={false} />
      <p>:</p>
      <TimeDisplay value={props.seconds} type={'Seconds'} isDanger={props.minutes == 0 && props.seconds <= 10} />
    </div>
  );
};


const getReturnValues = (countDown: number) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

type CountdownTimerProps = {
  targetDate: number,
  setYouLose: (value: boolean) => void,
}

export const CountdownTimer = (props: CountdownTimerProps) => {
  // const [minutes, seconds] = useTimer(props.targetDate);
  const countDownDate = new Date(props.targetDate).getTime();

  const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
  );

  useEffect(() => {
      if (new Date().getTime() <= countDownDate) {
          const interval = setInterval(() => {
              setCountDown(countDownDate - new Date().getTime());
          }, 1000);
          return () => {
              clearInterval(interval);
          }
      } else{
          props.setYouLose(true);
          return () => [0, 0];
      }

  }, [countDown]);

  const [minutes, seconds] = getReturnValues(countDown);

  if (minutes + seconds <= 0) {
    return <></>;
    // return <ExpiredCountdownNotice />;
  } else {
    return <DisplayTimer minutes={minutes} seconds={seconds} />;
  }
};

type FreezeTimerProps = {
  targetDate: number,
}

export const FreezeTimer = (props: FreezeTimerProps) => {
  const [minutes, seconds] = useTimerFreeze(props.targetDate);

  if (minutes + seconds <= 0) {
    return <DisplayTimer minutes={0} seconds={0} />;
  } else {
    return <DisplayTimer minutes={minutes} seconds={seconds} />;
  }
};
