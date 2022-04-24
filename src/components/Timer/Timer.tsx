// https://www.npmjs.com/package/react-timer-hook
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { WinService } from '../GameHandler';

type TimerProps = {
    expiryTimestamp: number,
    setExpiryTimestamp: (value: number) => void,
    pauseTimer: boolean
    setPauseTimer: (value: boolean) => void
    youLose: boolean
    setYoulose: (value: boolean) => void
    addExtraTimeAlert?: boolean;
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

    // const [expired, setExpired] = useState<boolean>(false);
    const extraTimeInSeconds = 5;
    const [displayAddedExtraTime, setDisplayAddedExtraTime] = useState<boolean>(false);


    useEffect(() => {
        if (displayAddedExtraTime) {
            setDisplayAddedExtraTime(false);
        }
        const subscription = WinService.onWinChange().subscribe(win => {
            console.log("YOU WON ODER SO WASDASDASASD")
            AddExtraTime();
            setDisplayAddedExtraTime(true);
        });

        // return unsubscribe method to execute when component unmounts
        return () => {
            subscription.unsubscribe();
        }
    }, [seconds]);

    useEffect(() => {
        // console.log("props.pauseTimer")
        // console.log(props.pauseTimer)
        if (props.pauseTimer) {
            pause();
        } else {
            start();
        }
    }, [props.pauseTimer]);

    const onExpire = () => {
        console.warn('onExpire called')
        props.setPauseTimer(true);
        props.setYoulose(true);
    }

    const AddExtraTime = () => {
        const extraTime = Date.now() + (minutes * 60000) + ((seconds + extraTimeInSeconds) * 1000);
        const newExpiryDate = new Date(extraTime);

        props.setExpiryTimestamp(extraTime);
        setExpiryDate(newExpiryDate);
        restart(newExpiryDate);
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

            {!props.youLose && !isRunning && (
                // <p>{isRunning ? 'Running' : 'Not running'}</p>
                <p>- Drücke einen Buchstaben, um den Timer zu starten -</p>
            )}

            {displayAddedExtraTime && (
                <div className='added-extra-time animate__animated animate__fadeOutUp animate__delay-2s'>+5 Sekunden</div>
                // <div className='added-extra-time'>+5 Sekunden</div>
            )}
            
            {/* {!displayAddedExtraTime && (
                <div className='added-extra-time animate__animated animate__fadeInUp animate__fadeOutUp'>+5 Sekunden</div>
            )} */}

            {/* <button onClick={AddExtraTime}>Add 5 secs</button> */}

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

