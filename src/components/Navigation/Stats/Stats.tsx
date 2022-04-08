import { useState } from 'react';
import Countdown from 'react-countdown'
import { WORD_OF_THE_DAY } from '../../../Config/Wordlist';
import { StoredPlayerStats } from '../../LocalStorage';
import { Histogram } from './Histogram';

type StatsProps = {
    stats: StoredPlayerStats
}

export const Stats = (props: StatsProps) => {
    return (
        <div className='stats'>
            <h1>Statistiken</h1>
            <div className="main">
                <Histogram stats={props.stats} />

                <div className='divider'></div>

                <div className='game-stats'>
                    <div className='games'>
                        Spiele: {props.stats.gamesPlayed}
                        <div className='wins-and-losses'>
                            (<span className='wins'>{props.stats.wins}</span>/<span className='losses'>{props.stats.losses}</span>)
                        </div>
                    </div>

                    <div className='streak'>
                        <div>
                            aktuelle Siegesserie: {props.stats.winStreak}
                        </div>
                        <div>
                            höchste Siegesserie: {props.stats.bestWinStreak} <i className="fa-solid fa-crown"></i>
                        </div>
                    </div>
                </div>


            </div>

            <div className='next-word-timer'>
                <div>nächstes Wort in:</div>
                <Countdown date={WORD_OF_THE_DAY().tomorrow} daysInHours={true} />
            </div>
        </div>
    );
}