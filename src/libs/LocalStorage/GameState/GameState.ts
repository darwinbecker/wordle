// source: https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/localStorage.ts

import { GameState } from "../../../types/GameState";

const gameStateKey = "GameState";

const emptyGameState: GameState = {
  guessedWords: [],
  wordStatuses: [],
  solution: "",
};

export const saveGameState = (gameState: GameState): void => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState));
};

export const loadGameState = (): GameState => {
  const state = localStorage.getItem(gameStateKey);
  return state ? (JSON.parse(state) as GameState) : emptyGameState;
};
