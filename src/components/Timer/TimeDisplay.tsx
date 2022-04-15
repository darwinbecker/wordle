type TimerType = "Mins" | "Minutes" | "Seconds"| "Secs";

type TimeDisplayProps = {
    value: number,
    type: TimerType,
    isDanger: boolean
}

const TimeDisplay = (props: TimeDisplayProps) => {
    return (
        <div className={props.isDanger ? 'countdown danger' : 'countdown'}>
            <p>{props.value}</p>
            <span>{props.type}</span>
        </div>
    );
};

export default TimeDisplay;
