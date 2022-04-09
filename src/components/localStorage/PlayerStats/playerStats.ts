
const playerStatsKey = 'PlayerStats';

export type PlayerStats = {
    gamesPlayed: number;
    wins: number;
    losses: number;
    trysPerWin: number[];
    winStreak: number;
    bestWinStreak: number;
}

const emptyPlayerStats: PlayerStats = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    trysPerWin: [0, 0, 0, 0, 0, 0],
    winStreak: 0,
    bestWinStreak: 0
}

export const savePlayerStats = (gameState: PlayerStats): void => {
    localStorage.setItem(playerStatsKey, JSON.stringify(gameState));
}

export const loadPlayerStats = (): PlayerStats => {
    const stats = localStorage.getItem(playerStatsKey);
    return stats ? (JSON.parse(stats) as PlayerStats) : emptyPlayerStats;
}
