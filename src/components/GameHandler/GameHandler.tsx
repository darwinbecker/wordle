import { useCallback, useEffect, useState } from "react";
import { MAX_GUESSES, MAX_WORD_LENGTH } from "../../config/Settings";
import { WORD_OF_THE_DAY, getRandomWord } from "../../config/Wordlist";
import {
  loadGameState,
  saveGameState,
  savePlayerStats,
  loadRapidScore1Min,
  saveRapidScore1Min,
  loadRapidScore3Min,
  saveRapidScore3Min,
  loadRapidScore5Min,
  saveRapidScore5Min,
} from "../LocalStorage";
import { checkstatus, WordStatusType } from "../WordStatus";
import { GameModeHandlerService } from "./GameModeHandlerService";
import { Confetti } from "../Animations";
import { NavigationBar } from "../Navigation";
import { WinService } from ".";
import { CategoryMode, RapidMode, TRMode, WOTDMode } from "../GameModes";
import { useSnackbar } from "notistack";
import { isInDictionary, DICTIONARY } from "../../config/Dictionary";
import { Category } from "../../types/Category";
import { getRandomWordFromDictionary } from "../../config/Wordlist";
import { useStats } from "../Context/Stats/Stats";
import { useGamestate } from "../Context/Gamestate/Gamestate";

// WOTD = Word Of The Day / TR = Training / C = Category / R = Rapid
export type GameModeType = "WOTD" | "TR" | "C" | "R";

export const GameHandler: React.FC = () => {
  const {
    gameMode,
    setGameMode,
    youWin,
    setYouWin,
    youLose,
    setYouLose,

    guessedWord,
    setGuessedWord,
    guessedWords,
    setGuessedWords,
    wordStatuses,
    setWordStatuses,
    solution,
    setSolution,

    rowIndex,
    setRowIndex,
    columnIndex,
    setColumnIndex,

    resetGame,
    getNextWord,
  } = useGamestate();
  const { stats, setStats, updatePlayerStats } = useStats();

  const [showPopup, setShowPopup] = useState<boolean>(true);

  const [timer, setTimer] = useState<number>();
  const [pauseTimer, setPauseTimer] = useState<boolean>(true);

  const [rapidMode, setRapidMode] = useState<number>(0);
  const [rapidModeScore, setRapidModeScore] = useState<number>(0);

  const [isInputError, setIsInputError] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  // const resetRapidMode = (): void => {
  //   resetGame();
  //   setSolution("TIMER");
  //   setRapidModeScore(0);
  //   setPauseTimer(true);
  //   const t = new Date().getTime() + rapidMode * 60 * 1000;
  //   setTimer(t);
  // };

  // const getNextWord = useCallback((): void => {
  //   resetGame();
  //   // setSolution(getRandomWord());
  //   setSolution("TIMER");
  // }, [resetGame, setSolution]);

  // function getNextCategoryWord(): void {
  //   resetGame();
  //   setSolution(getRandomWordFromDictionary(currentDictionary));
  // }

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
            setRapidModeScore(rapidModeScore + 1);
            getNextWord();
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

            if (gameMode === "R") {
              setPauseTimer(true);
              console.log("rapidModeTimerMinutes");
              console.log(rapidMode);
              if (rapidMode === 1) {
                const loadedRapidScore = loadRapidScore1Min();
                if (loadedRapidScore <= rapidModeScore)
                  saveRapidScore1Min(rapidModeScore);
              } else if (rapidMode === 3) {
                const loadedRapidScore = loadRapidScore3Min();
                if (loadedRapidScore <= rapidModeScore)
                  saveRapidScore3Min(rapidModeScore);
              } else if (rapidMode === 5) {
                const loadedRapidScore = loadRapidScore5Min();
                if (loadedRapidScore <= rapidModeScore)
                  saveRapidScore5Min(rapidModeScore);
              }
            }

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
    rapidMode,
    rapidModeScore,
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

  useEffect(() => {
    const listener = (event: globalThis.KeyboardEvent): any => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSubmit();
        // return;
      } else if (event.code === "Backspace" || event.code === "Delete") {
        handleRemove();
        // return;
      } else {
        const key = event.key.toLocaleUpperCase();
        // TODO A-Z => problem with german letters üäö
        if (key.length === 1 && key >= "A" && key <= "Z") {
          handleChange(key);
        }
        // return;
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [handleSubmit, handleRemove, handleChange, youWin, youLose]);

  useEffect(() => {
    if (gameMode === "WOTD") {
      const solution = WORD_OF_THE_DAY().solution;
      saveGameState({ guessedWords, wordStatuses, solution });
    }
  }, [gameMode, guessedWords, wordStatuses]);

  useEffect(() => {
    const subscription = GameModeHandlerService.onGameModeChange().subscribe(
      (mode) => {
        setGameMode(mode as GameModeType);
        resetGame();
        if (mode === "WOTD") {
          // setShowPopup(true);
          setSolution(WORD_OF_THE_DAY().solution);
          const loaded = loadGameState();
          console.log("loaded", loaded);
          if (loaded) {
            if (loaded.solution !== WORD_OF_THE_DAY().solution) {
              const data: string[] = [];
              setGuessedWords(data);
              const wordStatuses: WordStatusType[][] = [];
              setWordStatuses(wordStatuses);
            } else {
              const gameWasWon = loaded.guessedWords.includes(
                WORD_OF_THE_DAY().solution
              );
              const data: string[] = loaded.guessedWords;
              setGuessedWords(data);
              const wordStatuses: WordStatusType[][] = loaded.wordStatuses;
              setWordStatuses(wordStatuses);
              if (gameWasWon) {
                // WinService.setWin(true);
                setYouWin(true);
                setYouLose(false);
                Confetti();
                return;
              } else if (
                loaded.guessedWords.length === MAX_GUESSES &&
                !gameWasWon
              ) {
                // WinService.setWin(false);
                setYouWin(false);
                setYouLose(true);
                return;
                //     showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
                //     persist: true,
                //   })
              }
            }
          }
        } else if (mode === "TR") {
          // getNextWord();
        } else if (mode === "C") {
          // setShowPopup(true);
        } else if (mode === "R") {
          console.log("load Rapid mode");
          setSolution("TIMER");
          setRapidModeScore(0);
          // setShowPopup(true);
          setTimer(0);
          setPauseTimer(true);
        }
      }
    );

    // return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [
    getNextWord,
    resetGame,
    setGameMode,
    setGuessedWords,
    setSolution,
    setWordStatuses,
    setYouLose,
    setYouWin,
  ]);

  // const togglePopup = (event: React.MouseEvent<HTMLButtonElement>): void => {
  //   // TODO: load category dictionary if mode is C, or timer if mode is R
  //   if (gameMode === "C") {
  //     // console.log("load category dictionary");
  //     // console.log(event.currentTarget.value);
  //     const category: Category = event.currentTarget.value as Category;
  //     console.log(category);
  //     // setCurrentDictionary(category);
  //     if (category === "astronomy") {
  //       setCategory("astronomy");
  //       setCurrentDictionary(astronomy);
  //       const solution = getRandomWordFromDictionary(astronomy);
  //       console.log(solution);
  //       setSolution(solution);
  //     }
  //   } else if (gameMode === "R") {
  //     const rapidModeTimerValue = parseInt(event.currentTarget.value);
  //     setRapidMode(rapidModeTimerValue);
  //     const t = new Date().getTime() + rapidModeTimerValue * 60 * 1000;
  //     setTimer(t);
  //   }

  //   setShowPopup(false);
  // };

  return (
    <div className="Game">
      <NavigationBar />

      {gameMode === "WOTD" && (
        <>
          <WOTDMode
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleRemove={handleRemove}
            isInputError={isInputError}
          />
        </>
      )}

      {gameMode === "TR" && (
        <>
          <TRMode
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleRemove={handleRemove}
            isInputError={isInputError}
          />
        </>
      )}

      {gameMode === "C" && (
        <>
          <CategoryMode
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleRemove={handleRemove}
            isInputError={isInputError}
          />
        </>
      )}

      {gameMode === "R" && (
        <>
          <RapidMode
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleRemove={handleRemove}
            isInputError={isInputError}
          />
        </>
      )}
    </div>
  );
};
