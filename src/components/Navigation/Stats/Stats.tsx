import Countdown from 'react-countdown'
import { WORD_OF_THE_DAY } from '../../../Config/Wordlist';
import { StoredPlayerStats } from '../../LocalStorage';

type StatsProps = {
    stats: StoredPlayerStats
}

export const Stats = (props: StatsProps) => {
    return (
        <>
            <h1>Statistik</h1>
            <div className="text">
                <div>
                    Spiele: {props.stats.gamesPlayed}
                </div>
                <div>
                    Siege: {props.stats.wins}
                </div>
                <div>
                    Niederlagen: {props.stats.losses}
                </div>
                <div>
                    höchste Siegesserie: {props.stats.bestWinStreak}
                </div>
                <div>
                    aktuelle Siegesserie: {props.stats.winStreak}
                </div>
                <div>
                    <div>nächstes Wort in:</div>
                    <Countdown date={WORD_OF_THE_DAY().tomorrow} daysInHours={true} />
                </div>
            </div>
        </>
    );
}