import Countdown from "react-countdown";
import { RAPID_MODE_MINUTES } from "../../../config/Settings";
import { WORD_OF_THE_DAY } from "../../../config/Wordlist";
import { loadPlayerStats, loadRapidScore } from "../../../libs/LocalStorage";
import { PlayerStats } from "../../../types";
import { useGamestate } from "../../Context/Gamestate/Gamestate";
import { Histogram } from "./Histogram";

type StatsProps = {
  stats?: PlayerStats;
};

export const Stats = (props: StatsProps) => {
  const { youLose, youWin, solution } = useGamestate();
  const stats = props.stats ? props.stats : loadPlayerStats();
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
                  stats.winStreak === stats.bestWinStreak ? "streakNumber" : ""
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
              {RAPID_MODE_MINUTES.map((item, index) => (
                <div key={index}>
                  {item === "1" ? "1 Minute" : `${item} Minuten`}:
                  <div className="streakNumber">{loadRapidScore(item)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="next-word-timer">
        <div>nächstes Wort in:</div>
        <Countdown date={WORD_OF_THE_DAY().tomorrow} daysInHours={true} />
      </div>

      <div>
        {(youLose || youWin) && (
          <>
            <div>Das gesuchte Wort war:</div>
            <div className="solution-word">{solution}</div>
          </>
        )}
      </div>
    </div>
  );
};
