import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { MAX_GUESSES } from "../../config/Settings";
import { WORD_OF_THE_DAY } from "../../config/Wordlist";
import { Confetti } from "../Animations/Confetti";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { usePopup } from "../Context/Popup/Popup";
import { useStats } from "../Context/Stats/Stats";
import { WinService } from "../Observables/WinService";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import {
  loadGameState,
  saveGameState,
} from "../LocalStorage/GameState/GameState";
import { savePlayerStats } from "../LocalStorage/PlayerStats/PlayerStats";
import { Stats } from "../PopupContent";
import { WordStatusType } from "../WordStatus/WordStatus";

export const WOTDMode = () => {
  const { youLose, setYouLose, youWin, setYouWin, solution, setSolution } =
    useGamestate();
  const {
    guessedWord,
    guessedWords,
    setGuessedWords,
    wordStatuses,
    setWordStatuses,
  } = useInput();
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();
  const { setStats, updatePlayerStats } = useStats();
  const { enqueueSnackbar } = useSnackbar();

  // get word of the day
  useEffect(() => {
    const solution = WORD_OF_THE_DAY().solution;
    saveGameState({ guessedWords, wordStatuses, solution });
  }, [guessedWords, wordStatuses]);

  // load gamestate from localstorage
  useEffect(() => {
    setSolution(WORD_OF_THE_DAY().solution);
    const loadedGameState = loadGameState();
    console.log("loaded:", loadedGameState);

    // if the loaded gamestate is not the word of the day, reset the game
    if (loadedGameState.solution !== WORD_OF_THE_DAY().solution) {
      const data: string[] = [];
      setGuessedWords(data);
      const wordStatuses: WordStatusType[][] = [];
      setWordStatuses(wordStatuses);
    } else {
      // if the loaded gamestate is the word of the day, load the gamestate
      const gameWasWon = loadedGameState.guessedWords.includes(
        WORD_OF_THE_DAY().solution
      );
      const data: string[] = loadedGameState.guessedWords;
      setGuessedWords(data);
      const wordStatuses: WordStatusType[][] = loadedGameState.wordStatuses;
      setWordStatuses(wordStatuses);

      if (gameWasWon) {
        setYouWin(true);
        setYouLose(false);
        Confetti();
        return;
      } else if (
        loadedGameState.guessedWords.length === MAX_GUESSES &&
        !gameWasWon
      ) {
        setYouWin(false);
        setYouLose(true);
        return;
      }
    }
  }, []);

  // set popup content
  useEffect(() => {
    if (youLose || youWin) {
      setPopupContent(<Stats />);
      setForceInput(false);
      setAnimationDelay(true);
    }
  }, [setAnimationDelay, setForceInput, setPopupContent, youLose, youWin]);

  // on win or on lose => update stats
  useEffect(() => {
    const subscription = WinService.onWinChange().subscribe((win) => {
      if (win) {
        const newStats = updatePlayerStats(true);
        setStats(newStats);
        savePlayerStats(newStats);
        enqueueSnackbar("Du hast das heutige Wort richtig erraten! 🎉", {
          variant: "success",
        });
        setYouWin(true);
        Confetti();
      } else {
        const newStats = updatePlayerStats(false);
        setStats(newStats);
        savePlayerStats(newStats);
        enqueueSnackbar(
          `Du hast das heutige Wort: "${solution}" leider nicht erraten`,
          { variant: "error" }
        );
        setYouLose(true);
      }
    });

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [
    enqueueSnackbar,
    guessedWord,
    guessedWords,
    setStats,
    setYouLose,
    setYouWin,
    solution,
    updatePlayerStats,
  ]);

  return (
    <>
      <Grid></Grid>
      <Keyboard />

      {youLose && (
        <div className="gameover-feedback">
          <h4>gesuchtes Wort war:</h4>
          <div className="solution-word">{solution}</div>
        </div>
      )}
    </>
  );
};
