
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



const rapidScore1MinKey = 'RapidScore1Minute';

export const saveRapidScore1Min = (rapidScore: number): void => {
    localStorage.setItem(rapidScore1MinKey, JSON.stringify(rapidScore));
}

export const loadRapidScore1Min = (): number => {
    const rapidScore = localStorage.getItem(rapidScore1MinKey);
    return rapidScore ? (JSON.parse(rapidScore)) : 0;
}


const rapidScore3MinKey = 'RapidScore3Minute';

export const saveRapidScore3Min = (rapidScore: number): void => {
    localStorage.setItem(rapidScore3MinKey, JSON.stringify(rapidScore));
}

export const loadRapidScore3Min = (): number => {
    const rapidScore = localStorage.getItem(rapidScore3MinKey);
    return rapidScore ? (JSON.parse(rapidScore)) : 0;
}


const rapidScore5MinKey = 'RapidScore5Minute';

export const saveRapidScore5Min = (rapidScore: number): void => {
    localStorage.setItem(rapidScore5MinKey, JSON.stringify(rapidScore));
}

export const loadRapidScore5Min = (): number => {
    const rapidScore = localStorage.getItem(rapidScore5MinKey);
    return rapidScore ? (JSON.parse(rapidScore)) : 0;
}