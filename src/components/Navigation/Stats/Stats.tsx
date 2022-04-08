import { useState } from 'react';
import Countdown from 'react-countdown'
import { WORD_OF_THE_DAY } from '../../../Config/Wordlist';
import { StoredPlayerStats } from '../../LocalStorage';

type StatsProps = {
    stats: StoredPlayerStats
}

export const Stats = (props: StatsProps) => {
    const maxValue = Math.max(...props.stats.trysPerWin);

    return (
        <div className='stats'>
            <h1>Statistiken</h1>
            <div className="text">
                <div className='game-stats'>
                    <div className='games'>
                        Spiele: {props.stats.gamesPlayed}
                        <div className='wins-and-losses'>
                            (<span className='wins'>{props.stats.wins}</span>/<span className='losses'>{props.stats.losses}</span>)
                        </div>
                    </div>

                    <div className='streak'>
                        Siegesserie: {props.stats.winStreak}/{props.stats.bestWinStreak} <i className="fa-solid fa-crown"></i>
                    </div>
                </div>

                <div className='histogram'>
                    {/* Histogram: {props.stats.trysPerWin} */}
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
                                    <div className="histogram-bar" style={{ width: `${5 + Math.round((item / maxValue) * 100)}%` }}>
                                        {item}
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div>
                    <div>nächstes Wort in:</div>
                    <Countdown date={WORD_OF_THE_DAY().tomorrow} daysInHours={true} />
                </div>
            </div>
        </div>
    );
}