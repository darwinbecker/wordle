import { createContext, useContext, useState, useCallback } from "react";
import { GameModeType } from "../../GameHandler";
import { architecture } from "../../../config/database";
import { MAX_GUESSES } from "../../../config/Settings";
import { WORD_OF_THE_DAY } from "../../../config/Wordlist";
import { GameState, loadGameState } from "../../LocalStorage";
import { WordStatusType } from "../../WordStatus";
import { Category } from "../../../types/Category";

export interface IGameState {
  gameMode: GameModeType;
  setGameMode: (gameMode: GameModeType) => void;
  youLose: boolean;
  setYouLose: (youLose: boolean) => void;
  youWin: boolean;
  setYouWin: (youWin: boolean) => void;
  solution: string;
  setSolution: (solution: string) => void;

  guessedWord: string;
  setGuessedWord: (guessedWord: string) => void;
  guessedWords: string[];
  setGuessedWords: (guessedWord: string[]) => void;
  wordStatuses: WordStatusType[][];
  setWordStatuses: (wordStatuses: WordStatusType[][]) => void;

  rowIndex: number;
  setRowIndex: (rowIndex: number) => void;
  columnIndex: number;
  setColumnIndex: (columnIndex: number) => void;
  resetGame: () => void;
  getNextWord: () => void;
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

  guessedWord: "",
  setGuessedWord: () => {},
  guessedWords:
    loadedGameState.solution !== WORD_OF_THE_DAY().solution
      ? []
      : loadedGameState.guessedWords,
  setGuessedWords: () => {},
  wordStatuses:
    loadedGameState.solution !== WORD_OF_THE_DAY().solution
      ? []
      : loadedGameState.wordStatuses,
  setWordStatuses: () => {},

  rowIndex: 0,
  setRowIndex: () => {},
  columnIndex: 0,
  setColumnIndex: () => {},
  resetGame: () => {},
  getNextWord: () => {},
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

  const [guessedWord, setGuessedWord] = useState<string>("");
  const [guessedWords, setGuessedWords] = useState<string[]>(() => {
    return loadedGameState.solution !== WORD_OF_THE_DAY().solution
      ? []
      : loadedGameState.guessedWords;
  });
  const [wordStatuses, setWordStatuses] = useState<WordStatusType[][]>(() => {
    return loadedGameState.solution !== WORD_OF_THE_DAY().solution
      ? []
      : loadedGameState.wordStatuses;
  });

  const [rowIndex, setRowIndex] = useState<number>(0);
  const [columnIndex, setColumnIndex] = useState<number>(0);

  const [timer, setTimer] = useState<number>();
  const [pauseTimer, setPauseTimer] = useState<boolean>(true);

  const [rapidMode, setRapidMode] = useState<number>(0);
  const [rapidModeScore, setRapidModeScore] = useState<number>(0);

  const [isInputError, setIsInputError] = useState<boolean>(false);

  const [category, setCategory] = useState<Category>("architecture");
  const [currentDictionary, setCurrentDictionary] =
    useState<object>(architecture);

  const resetGame = useCallback((): void => {
    setGuessedWords([]);
    setRowIndex(0);
    setColumnIndex(0);
    setGuessedWord("");
    setWordStatuses([]);
    setYouWin(false);
    setYouLose(false);
    setSolution("");
    setIsInputError(false);
  }, [
    setGuessedWords,
    setRowIndex,
    setColumnIndex,
    setGuessedWord,
    setWordStatuses,
    setYouWin,
    setYouLose,
    setSolution,
    setIsInputError,
  ]);

  const getNextWord = useCallback((): void => {
    resetGame();
    // setSolution(getRandomWord());
    setSolution("TIMER");
  }, [resetGame, setSolution]);

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

        guessedWord,
        setGuessedWord,
        guessedWords,
        setGuessedWords,
        wordStatuses,
        setWordStatuses,

        rowIndex,
        setRowIndex,
        columnIndex,
        setColumnIndex,

        resetGame,
        getNextWord,
      }}
      {...props}
    />
  );
};
