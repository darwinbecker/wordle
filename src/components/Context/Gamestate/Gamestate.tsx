import { createContext, useContext, useState } from "react";
import { MAX_GUESSES } from "../../../config/Settings";
import { WORD_OF_THE_DAY } from "../../../config/Wordlist";
import { GameMode } from "../../../types/GameMode";
import { loadGameState } from "../../../libs/LocalStorage";
import { GameState } from "../../../types";

export interface IGameState {
  gameMode: GameMode;
  setGameMode: (gameMode: GameMode) => void;
  youLose: boolean;
  setYouLose: (youLose: boolean) => void;
  youWin: boolean;
  setYouWin: (youWin: boolean) => void;
  solution: string;
  setSolution: (solution: string) => void;
}

const loadedGameState: GameState = loadGameState();

export const Gamestate = createContext<IGameState>({
  gameMode: "WOTD" as GameMode,
  setGameMode: () => {},
  youLose:
    loadedGameState.guessedWords.length === MAX_GUESSES &&
    !loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution)
      ? true
      : false,
  setYouLose: () => {},
  youWin: loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution)
    ? true
    : false,
  setYouWin: () => {},
  solution: WORD_OF_THE_DAY().solution,
  setSolution: () => {},
});

export const useGamestate = () => useContext(Gamestate);

export const GamestateProvider = (props: any) => {
  const [gameMode, setGameMode] = useState<GameMode>("WOTD");

  const [youLose, setYouLose] = useState<boolean>(() => {
    return loadedGameState.guessedWords.length === MAX_GUESSES &&
      !loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution)
      ? true
      : false;
  });
  const [youWin, setYouWin] = useState<boolean>(() => {
    return loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution)
      ? true
      : false;
  });
  const [solution, setSolution] = useState<string>(() => {
    console.log("solution:", WORD_OF_THE_DAY().solution);
    return WORD_OF_THE_DAY().solution;
  });

  return (
    <Gamestate.Provider
      value={{
        gameMode,
        setGameMode,
        youLose,
        setYouLose,
        youWin,
        setYouWin,
        solution,
        setSolution,
      }}
      {...props}
    />
  );
};
