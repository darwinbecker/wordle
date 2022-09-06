import { createContext, useContext, useState } from "react";
import { GameModeType } from "../../GameHandler";
import { MAX_GUESSES } from "../../../config/Settings";
import { WORD_OF_THE_DAY } from "../../../config/Wordlist";
import { GameState, loadGameState } from "../../LocalStorage";

export interface IGameState {
  gameMode: GameModeType;
  setGameMode: (gameMode: GameModeType) => void;
  youLose: boolean;
  setYouLose: (youLose: boolean) => void;
  youWin: boolean;
  setYouWin: (youWin: boolean) => void;
  solution: string;
  setSolution: (solution: string) => void;
}

const loadedGameState: GameState = loadGameState();

export const Gamestate = createContext<IGameState>({
  gameMode: "WOTD" as GameModeType,
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
  const [gameMode, setGameMode] = useState<GameModeType>("WOTD");

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
    console.log(WORD_OF_THE_DAY().solution);
    return WORD_OF_THE_DAY().solution;
  });

  // put this in a separate context file ?
  const [isInputError, setIsInputError] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>();
  const [pauseTimer, setPauseTimer] = useState<boolean>(true);

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
