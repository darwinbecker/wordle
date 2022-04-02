import { WordStatusType } from "../WordStatus";

// https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/localStorage.ts
const storageKey = 'wordleGameState';

export type StoredGameState = {
    guessedWords: string[]
    wordStatuses: WordStatusType[][];
    solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState): void => {
    localStorage.setItem(storageKey, JSON.stringify(gameState));
}

export const loadGameStateFromLocalStorage = (): StoredGameState | null => {
    const state = localStorage.getItem(storageKey);
    return state ? (JSON.parse(state) as StoredGameState) : null;
}
