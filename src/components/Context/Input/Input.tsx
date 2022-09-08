import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { MAX_GUESSES, MAX_WORD_LENGTH } from "../../../config/Settings";
import { getRandomWord, WORD_OF_THE_DAY } from "../../../config/Wordlist";
import { loadGameState } from "../../../libs/LocalStorage";
import { checkstatus } from "../../../libs/WordStatus";
import { useGamestate } from "../Gamestate/Gamestate";
import { useStats } from "../Stats/Stats";
import { useSnackbar } from "notistack";
import { InputService } from "../../../libs/Observables/InputService";
import { DICTIONARY, isInDictionary } from "../../../config/Dictionary";
import { WinService } from "../../../libs/Observables/WinService";
import { WordStatus } from "../../../types/WordStatus";
import { GameState } from "../../../types";

export interface IInput {
  handleChange: (value: string) => void;
  handleRemove: () => void;
  handleSubmit: () => void;

  guessedWord: string;
  setGuessedWord: (value: string) => void;
  guessedWords: string[];
  setGuessedWords: (value: string[]) => void;
  wordStatuses: WordStatus[][];
  setWordStatuses: (value: WordStatus[][]) => void;

  // currentDictionary: object;
  // setCurrentDictionary: (value: object) => void;
  isInputError: boolean;
  setIsInputError: (value: boolean) => void;

  rowIndex: number;
  setRowIndex: (value: number) => void;
  columnIndex: number;
  setColumnIndex: (value: number) => void;

  resetGame: () => void;
  getNextWord: () => void;
}

const loadedGameState: GameState = loadGameState();

export const Input = createContext<IInput>({
  handleChange: () => {},
  handleRemove: () => {},
  handleSubmit: () => {},

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
  isInputError: false,
  setIsInputError: () => {},

  rowIndex: 0,
  setRowIndex: () => {},
  columnIndex: 0,
  setColumnIndex: () => {},

  resetGame: () => {},
  getNextWord: () => {},
});

export const useInput = () => useContext(Input);

export const InputProvider = (props: any) => {
  const {
    gameMode,
    youWin,
    setYouWin,
    youLose,
    setYouLose,
    solution,
    setSolution,
  } = useGamestate();
  const { setStats, updatePlayerStats } = useStats();
  const { enqueueSnackbar } = useSnackbar();

  const [guessedWord, setGuessedWord] = useState<string>("");
  const [guessedWords, setGuessedWords] = useState<string[]>(() => {
    return loadedGameState.solution !== WORD_OF_THE_DAY().solution
      ? []
      : loadedGameState.guessedWords;
  });
  const [wordStatuses, setWordStatuses] = useState<WordStatus[][]>(() => {
    return loadedGameState.solution !== WORD_OF_THE_DAY().solution
      ? []
      : loadedGameState.wordStatuses;
  });

  const [rowIndex, setRowIndex] = useState<number>(0);
  const [columnIndex, setColumnIndex] = useState<number>(0);

  // put this in a separate context file ?
  const [isInputError, setIsInputError] = useState<boolean>(false);

  const handleChange = useCallback(
    (value: string): void => {
      // console.log(value);
      if (youWin || youLose) return;
      if (guessedWord.length < MAX_WORD_LENGTH) {
        setIsInputError(false);
        setGuessedWord(`${guessedWord}${value}`);
        setColumnIndex(columnIndex + 1);
        InputService.setChangeInput();
      } else {
        // TODO: display feedback for user
        enqueueSnackbar("Du kannst nur 5 Buchstaben eingeben.", {
          variant: "warning",
          preventDuplicate: true,
        });
      }
    },
    [
      columnIndex,
      enqueueSnackbar,
      guessedWord,
      setColumnIndex,
      setGuessedWord,
      youLose,
      youWin,
    ]
  );

  const handleRemove = useCallback((): void => {
    if (youWin || youLose) return;
    if (guessedWord.length > 0) {
      setGuessedWord(guessedWord.slice(0, -1));
      setColumnIndex(columnIndex - 1);
      InputService.setRemoveInput();
    }
  }, [
    columnIndex,
    guessedWord,
    setColumnIndex,
    setGuessedWord,
    youLose,
    youWin,
  ]);

  const handleSubmit = useCallback((): void => {
    if (youWin || youLose) return;
    if (guessedWord.length !== 5) {
      setIsInputError(true);
      enqueueSnackbar("Bitte 5 Buchstaben eingeben.", {
        variant: "error",
        preventDuplicate: true,
      });
      return;
    }
    if (guessedWords.length < MAX_GUESSES) {
      // TODO check if guessWord is in dictionary
      // if (!isInDictionary(guessedWord, DICTIONARY)) {
      //     console.log("WORD IS NOT IN DICTIONARY");
      //     return;
      // }

      setIsInputError(false);
      setRowIndex(rowIndex + 1);
      setColumnIndex(0);
      setGuessedWord("");
      setGuessedWords([...guessedWords, guessedWord]);
      const status = checkstatus(guessedWord, solution);
      setWordStatuses([...wordStatuses, status]);

      // set win
      if (guessedWord.toLocaleUpperCase() === solution.toLocaleUpperCase()) {
        WinService.setWin(true);
        return;
      }

      // last guess, set lose
      if (guessedWords.length === MAX_GUESSES - 1) {
        if (guessedWord.toLocaleUpperCase() !== solution.toLocaleUpperCase()) {
          WinService.setWin(false);
          return;
        }
      }
    }
  }, [
    enqueueSnackbar,
    guessedWord,
    guessedWords,
    rowIndex,
    setColumnIndex,
    setGuessedWord,
    setGuessedWords,
    setRowIndex,
    setWordStatuses,
    solution,
    wordStatuses,
    youLose,
    youWin,
  ]);

  useEffect(() => {
    const listener = (event: globalThis.KeyboardEvent): any => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSubmit();
      } else if (event.code === "Backspace" || event.code === "Delete") {
        handleRemove();
      } else {
        const key = event.key.toLocaleUpperCase();
        // TODO A-Z => problem with german letters üäö
        if (key.length === 1 && key >= "A" && key <= "Z") {
          handleChange(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [handleSubmit, handleRemove, handleChange, youWin, youLose]);

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
  ]);

  const getNextWord = useCallback((): void => {
    resetGame();
    // setSolution(getRandomWord());
    setSolution("TIMER");
  }, [resetGame, setSolution]);

  return (
    <Input.Provider
      value={{
        handleChange,
        handleRemove,
        handleSubmit,

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
        isInputError,

        resetGame,
        getNextWord,
      }}
      {...props}
    />
  );
};
