import { WordStatusType } from "../WordStatus";

// https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/localStorage.ts
const gameStateKey = 'GameState';

export type StoredGameState = {
    guessedWords: string[]
    wordStatuses: WordStatusType[][];
    solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState): void => {
    localStorage.setItem(gameStateKey, JSON.stringify(gameState));
}

export const loadGameStateFromLocalStorage = (): StoredGameState | null => {
    const state = localStorage.getItem(gameStateKey);
    return state ? (JSON.parse(state) as StoredGameState) : null;
}


const playerStatsKey = 'PlayerStats';

export type StoredPlayerStats = {
    gamesPlayed: number;
    wins: number;
    losses: number;
    trysPerWin: number[];
    winStreak: number;
    bestWinStreak: number;
}

export const savePlayerStatsToLocalStorage = (gameState: StoredPlayerStats): void => {
    localStorage.setItem(playerStatsKey, JSON.stringify(gameState));
}

export const loadPlayerStatsFromLocalStorage = (): StoredPlayerStats | null => {
    const state = localStorage.getItem(playerStatsKey);
    return state ? (JSON.parse(state) as StoredPlayerStats) : null;
}

export const emptyPlayerStats: StoredPlayerStats = {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    trysPerWin: [0,0,0,0,0,0],
    winStreak: 0,
    bestWinStreak: 0
}