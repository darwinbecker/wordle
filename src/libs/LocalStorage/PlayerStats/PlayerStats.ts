import { PlayerStats } from "../../../types/PlayerStats";

const playerStatsKey = "PlayerStats";

const emptyPlayerStats: PlayerStats = {
  gamesPlayed: 0,
  wins: 0,
  losses: 0,
  trysPerWin: [0, 0, 0, 0, 0, 0],
  winStreak: 0,
  bestWinStreak: 0,
};

export const savePlayerStats = (gameState: PlayerStats): void => {
  localStorage.setItem(playerStatsKey, JSON.stringify(gameState));
};

export const loadPlayerStats = (): PlayerStats => {
  const stats = localStorage.getItem(playerStatsKey);
  return stats ? (JSON.parse(stats) as PlayerStats) : emptyPlayerStats;
};

export const saveRapidScore = (
  key: string | number,
  rapidScore: number
): void => {
  const storageKey = `RapidScore${key.toString()}Minute`;
  localStorage.setItem(storageKey, JSON.stringify(rapidScore));
};

export const loadRapidScore = (key: string | number): number => {
  const storageKey = `RapidScore${key.toString()}Minute`;
  const rapidScore = localStorage.getItem(storageKey);
  return rapidScore ? JSON.parse(rapidScore) : 0;
};
