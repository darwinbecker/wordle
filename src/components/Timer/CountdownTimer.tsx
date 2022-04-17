// Source: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
import { useState } from "react";
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

type CountdownTimerProps = {
  targetDate: number,
}

export const CountdownTimer = (props: CountdownTimerProps) => {
  const [minutes, seconds] = useTimer(props.targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredCountdownNotice />;
  } else {
    return <DisplayTimer minutes={minutes} seconds={seconds} />;
  }
};

export const FreezeTimer = (props: CountdownTimerProps) => {
  const [minutes, seconds] = useTimerFreeze(props.targetDate);

  console.log("TESIBTSTTST")
  console.log(minutes)
  console.log(seconds)
  if (minutes + seconds <= 0) {
    return <ExpiredCountdownNotice />;
  } else {
    return <DisplayTimer minutes={minutes} seconds={seconds} />;
  }
};
