import { useEffect } from "react";
import { GameModeService } from "../Observables/GameModeService";
import { NavigationBar } from "../Navigation";
import { CategoryMode, RapidMode, TRMode, WOTDMode } from "../GameModes";
// import { isInDictionary, DICTIONARY } from "../../config/Dictionary";
// import { getRandomWordFromDictionary } from "../../config/Wordlist";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";

// WOTD = Word Of The Day / TR = Training / C = Category / R = Rapid
export type GameModeType = "WOTD" | "TR" | "C" | "R";

export const GameHandler: React.FC = () => {
  const { gameMode, setGameMode, setYouWin, setYouLose, setSolution } =
    useGamestate();

  const { setGuessedWords, setWordStatuses, resetGame } = useInput();

  useEffect(() => {
    const subscription = GameModeService.onGameModeChange().subscribe(
      (mode) => {
        setGameMode(mode as GameModeType);
        resetGame();
      }
    );

    // note: return unsubscribe method to execute when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, [
    resetGame,
    setGameMode,
    setGuessedWords,
    setSolution,
    setWordStatuses,
    setYouLose,
    setYouWin,
  ]);

  return (
    <div className="Game">
      <NavigationBar />

      {gameMode === "WOTD" && <WOTDMode />}

      {gameMode === "TR" && <TRMode />}

      {gameMode === "C" && <CategoryMode />}

      {gameMode === "R" && <RapidMode />}
    </div>
  );
};
