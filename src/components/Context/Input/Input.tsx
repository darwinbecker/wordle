import { createContext, useContext, useState, useCallback } from "react";
import { GameModeType, WinService } from "../../GameHandler";
import { architecture } from "../../../config/database";
import { MAX_GUESSES, MAX_WORD_LENGTH } from "../../../config/Settings";
import { WORD_OF_THE_DAY } from "../../../config/Wordlist";
import { GameState, loadGameState, savePlayerStats } from "../../LocalStorage";
import { checkstatus, WordStatusType } from "../../WordStatus";
import { Category } from "../../../types/Category";
import { useGamestate } from "../Gamestate/Gamestate";
import { useStats } from "../Stats/Stats";
import { useSnackbar } from "notistack";
import { Confetti } from "../../Animations";

export interface IInput {
  handleChange: (value: string) => void;
  handleRemove: () => void;
  handleSubmit: () => void;
}

export const Input = createContext<IInput>({
  handleChange: () => {},
  handleRemove: () => {},
  handleSubmit: () => {},
});

export const useInput = () => useContext(Input);

export const InputProvider = (props: any) => {
  const {
    youWin,
    setYouWin,
    youLose,
    setYouLose,
    gameMode,
    guessedWord,
    setGuessedWord,
    columnIndex,
    setColumnIndex,
    rowIndex,
    setRowIndex,
    guessedWords,
    setGuessedWords,
    wordStatuses,
    setWordStatuses,
    solution,
    getNextWord,
  } = useGamestate();
  const { setStats, updatePlayerStats } = useStats();
  const { enqueueSnackbar } = useSnackbar();

  // put this in a separate context file ?
  const [isInputError, setIsInputError] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>();
  const [pauseTimer, setPauseTimer] = useState<boolean>(true);

  const handleChange = useCallback(
    (value: string): void => {
      if (youWin || youLose) return;

      if (gameMode === "R" && pauseTimer) {
        setPauseTimer(false);
      }

      if (guessedWord.length < MAX_WORD_LENGTH) {
        // props.setIsInputError(false);
        setGuessedWord(`${guessedWord}${value}`);
        setColumnIndex(columnIndex + 1);
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
      gameMode,
      guessedWord,
      pauseTimer,
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

    if (guessedWord.length === 5) {
      if (guessedWords.length < MAX_GUESSES) {
        // TODO check if guessWord is in dictionary
        // if (!isInDictionary(guessedWord, currentDictionary)) {
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
          if (gameMode === "WOTD") {
            const newStats = updatePlayerStats(true);
            setStats(newStats);
            savePlayerStats(newStats);
            enqueueSnackbar("Du hast das heutige Wort richtig erraten! 🎉", {
              variant: "success",
            });
          }

          if (gameMode === "R") {
            // setRapidModeScore(rapidModeScore + 1);
            // getNextWord();
          } else {
            setYouWin(true);
            Confetti();
          }
          WinService.setWin(true);

          return;
        }

        // last guess, set lose
        if (guessedWords.length === MAX_GUESSES - 1) {
          if (
            guessedWord.toLocaleUpperCase() !== solution.toLocaleUpperCase()
          ) {
            console.log("YOU LOSE!");
            if (gameMode === "WOTD") {
              const newStats = updatePlayerStats(false);
              setStats(newStats);
              savePlayerStats(newStats);
              enqueueSnackbar(
                `Du hast das heutige Wort: "${solution}" leider nicht erraten`,
                { variant: "error" }
              );
            }

            // if (gameMode === "R") {
            //   setPauseTimer(true);
            //   console.log("rapidModeTimerMinutes");
            //   console.log(rapidMode);
            //   if (rapidMode === 1) {
            //     const loadedRapidScore = loadRapidScore1Min();
            //     if (loadedRapidScore <= rapidModeScore)
            //       saveRapidScore1Min(rapidModeScore);
            //   } else if (rapidMode === 3) {
            //     const loadedRapidScore = loadRapidScore3Min();
            //     if (loadedRapidScore <= rapidModeScore)
            //       saveRapidScore3Min(rapidModeScore);
            //   } else if (rapidMode === 5) {
            //     const loadedRapidScore = loadRapidScore5Min();
            //     if (loadedRapidScore <= rapidModeScore)
            //       saveRapidScore5Min(rapidModeScore);
            //   }
            // }

            setYouLose(true);
            return;
          }
        }
      }
    } else {
      // TODO enter 5 characters => shake animation
      console.log("enter 5 characters");
      setIsInputError(false);
      setIsInputError(true);
      enqueueSnackbar("Bitte 5 Buchstaben eingeben.", {
        variant: "error",
        preventDuplicate: true,
      });
    }
  }, [
    enqueueSnackbar,
    gameMode,
    getNextWord,
    guessedWord,
    guessedWords,
    // rapidMode,
    // rapidModeScore,
    rowIndex,
    setColumnIndex,
    setGuessedWord,
    setGuessedWords,
    setRowIndex,
    setStats,
    setWordStatuses,
    setYouLose,
    setYouWin,
    solution,
    updatePlayerStats,
    wordStatuses,
    youLose,
    youWin,
  ]);

  return (
    <Input.Provider
      value={{
        handleChange,
        handleRemove,
        handleSubmit,
      }}
      {...props}
    />
  );
};
