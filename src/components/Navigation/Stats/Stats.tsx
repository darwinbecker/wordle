import Countdown from 'react-countdown'
import { WORD_OF_THE_DAY } from '../../../Config/Wordlist';

export const Stats = () => {
    return (
        <>
            <h1>Statistik</h1>
            <div className="text">
                render Statistik...
                <div>
                    <div>nächstes Wort in:</div>
                    <Countdown date={WORD_OF_THE_DAY().tomorrow} daysInHours={true} />
                </div>
            </div>
        </>
    );
}