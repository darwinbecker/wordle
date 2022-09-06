import Countdown from "react-countdown";
import { WORD_OF_THE_DAY } from "../../../config/Wordlist";
import {
  loadPlayerStats,
  loadRapidScore1Min,
  loadRapidScore3Min,
  loadRapidScore5Min,
  PlayerStats,
} from "../../LocalStorage";
import { Histogram } from "./Histogram";

type StatsProps = {
  stats?: PlayerStats;
};

export const Stats = (props: StatsProps) => {
  const stats = props.stats ? props.stats : loadPlayerStats();
  const rapidStats1Min = loadRapidScore1Min();
  const rapidStats3Min = loadRapidScore3Min();
  const rapidStats5Min = loadRapidScore5Min();
  return (
    <div className="stats">
      <h1>Statistiken</h1>
      <div className="main">
        <Histogram stats={stats} />

        <div className="divider"></div>

        <div className="game-stats">
          <div className="games">
            Spiele: {stats.gamesPlayed}
            <div className="wins-and-losses">
              (<span className="wins">{stats.wins}</span>/
              <span className="losses">{stats.losses}</span>)
            </div>
          </div>

          <div className="streak">
            <div>
              aktuelle Siegesserie:
              <span
                className={
                  stats.winStreak == stats.bestWinStreak ? "streakNumber" : ""
                }
              >
                {" "}
                {stats.winStreak}
              </span>
              {/*  / {stats.bestWinStreak} <i className="fa-solid fa-crown"></i> */}
            </div>
            <div>
              längste Siegesserie:
              <span className="streakNumber"> {stats.bestWinStreak}</span>{" "}
              <i className="fa-solid fa-crown"></i>
            </div>
          </div>

          <div className="rapidStreak">
            <div>höchster Blitz-Modus Score:</div>
            <div className="rapidStreakList">
              <div>
                1 Minute:
                <div className="streakNumber">{rapidStats1Min}</div>
              </div>
              <div>
                3 Minuten:
                <div className="streakNumber">{rapidStats3Min}</div>
              </div>
              <div>
                5 Minuten:
                <div className="streakNumber">{rapidStats5Min}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="next-word-timer">
        <div>nächstes Wort in:</div>
        <Countdown date={WORD_OF_THE_DAY().tomorrow} daysInHours={true} />
      </div>
    </div>
  );
};
