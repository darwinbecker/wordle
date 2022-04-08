import { StoredPlayerStats } from "../../LocalStorage";

type HistogramProps = {
    stats: StoredPlayerStats;
}

export const Histogram = (props: HistogramProps) => {
    const maxValue = Math.max(...props.stats.trysPerWin);
    return (
        <div className='histogram'>
            <div>
                Siege pro Versuch:
            </div>
            {props.stats.trysPerWin.map((item, index) => {
                return (
                    <div className="histogram-bar-item" key={index}>
                        <div className="histogram-bar-index">
                            {index + 1}.
                        </div>
                        <div className='histogram-bar-wrapper'>
                            {/* <div className="histogram-bar" style={{ width: `${10 + Math.round((item / maxValue) * 100)}%` }}> */}
                            <div className="histogram-bar" style={{ width: `${Math.round((item / maxValue) * 100)}%` }}>
                                {item > 0 ? item : null}
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}