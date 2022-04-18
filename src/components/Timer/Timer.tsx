// https://www.npmjs.com/package/react-timer-hook
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

type TimerProps = {
    expiryTimestamp: number,
    pauseTimer: boolean
    setPauseTimer: (value: boolean) => void
    youLose: boolean
    setYoulose: (value: boolean) => void
}

export const Timer = (props: TimerProps) => {
    // const expiryDate: Date = new Date(props.expiryTimestamp);
    const [expiryDate, setExpiryDate] = useState<Date>(new Date(props.expiryTimestamp));

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ autoStart: false, expiryTimestamp: expiryDate, onExpire: () => onExpire() });

    const [expired, setExpired] = useState<boolean>(false);

    useEffect(() => {
        console.log("props.pauseTimer")
        console.log(props.pauseTimer)
        if (props.pauseTimer) {
            pause();
        } else {
            start();
        }
    }, [props.pauseTimer]);

    const onExpire = () => {
        console.warn('onExpire called')
        setExpired(true);
        props.setPauseTimer(true);
        props.setYoulose(true);
    }

    const isDanger = minutes == 0 && seconds < 10;
    return (
        <div className='timer'>

            {props.youLose && (
                <h4>Zeit:</h4>
            )}

            <div className={(isDanger && isRunning) ? seconds <= 3 ? 'countdown expired' : 'countdown danger' : 'countdown'}>
                {/* <span>{days}</span>:<span>{hours}</span>: */}
                {/* <span>{minutes < 10 ? "0" + minutes : minutes}</span>: */}
                {/* <span className={isDanger ? 'countdown danger' : 'countdown'}>{seconds < 10 ? "0" + seconds : seconds}</span> */}

                <span>
                    {minutes < 10 ? "0" + minutes : minutes}
                </span>:
                <span >
                    {seconds < 10 ? "0" + seconds : seconds}
                </span>

            </div>

            {!props.youLose && (
                <p>{isRunning ? 'Running' : 'Not running'}</p>
            )}


            <button onClick={() => {
                // Restarts to 5 minutes timer
                const newExpiryDate = new Date (expiryDate);
                newExpiryDate.setSeconds(expiryDate.getSeconds() + 5);
                setExpiryDate(newExpiryDate);
                setExpired(false);
                restart(newExpiryDate)
            }}>Add 5 secs</button>

            {/* <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 12);
                setExpired(false);
                restart(time)
            }}>Restart</button> */}
        </div>
    );
}

