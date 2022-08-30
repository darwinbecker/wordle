import { createContext, useContext, useState } from "react";
import { PlayerStats, loadPlayerStats } from "../../LocalStorage";

export interface IStats {
  stats: PlayerStats;
  setStats: (stats: PlayerStats) => void;
}

const loadedPlayerStats: PlayerStats = loadPlayerStats();

export const Stats = createContext<IStats>({
  stats: loadedPlayerStats,
  setStats: () => {},
});

export const useStats = () => useContext(Stats);

export const StatsProvider = (props: any) => {
  const [stats, setStats] = useState<PlayerStats>(loadedPlayerStats);

  return (
    <Stats.Provider
      value={{
        stats,
        setStats,
      }}
      {...props}
    />
  );
};
