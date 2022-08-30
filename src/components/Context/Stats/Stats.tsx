import { createContext, useCallback, useContext, useState } from "react";
import { PlayerStats, loadPlayerStats } from "../../LocalStorage";
import { useGamestate } from "../Gamestate/Gamestate";

export interface IStats {
  stats: PlayerStats;
  setStats: (stats: PlayerStats) => void;
  updatePlayerStats: (win: boolean) => PlayerStats;
}

const loadedPlayerStats: PlayerStats = loadPlayerStats();

export const Stats = createContext<IStats>({
  stats: loadedPlayerStats,
  setStats: () => {},
  updatePlayerStats: () => loadPlayerStats(),
});

export const useStats = () => useContext(Stats);

export const StatsProvider = (props: any) => {
  const { guessedWords } = useGamestate();
  const [stats, setStats] = useState<PlayerStats>(loadedPlayerStats);

  const updatePlayerStats = useCallback(
    (win: boolean): PlayerStats => {
      const gameStats: PlayerStats = { ...stats };
      gameStats.gamesPlayed += 1;
      if (win) {
        gameStats.wins += 1;
        gameStats.trysPerWin[guessedWords.length] += 1;
        gameStats.winStreak += 1;
        gameStats.bestWinStreak =
          gameStats.winStreak >= gameStats.bestWinStreak
            ? gameStats.winStreak
            : gameStats.bestWinStreak;
      } else {
        gameStats.losses += 1;
        gameStats.winStreak = 0;
      }

      return gameStats;
    },
    [guessedWords.length, stats]
  );

  return (
    <Stats.Provider
      value={{
        stats,
        setStats,
        updatePlayerStats,
      }}
      {...props}
    />
  );
};
