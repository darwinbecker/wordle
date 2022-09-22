import { useEffect } from "react";
import { GameModeService } from "../../libs/Observables/GameModeService";
import { NavigationBar } from "../Navigation";
import { CategoryMode, TRMode, WOTDMode } from "../GameModes";
import { useGamestate } from "../Context/Gamestate/Gamestate";
import { useInput } from "../Context/Input/Input";
import { GameMode } from "../../types/GameMode";

export const GameHandler: React.FC = () => {
  const { gameMode, setGameMode, setYouWin, setYouLose, setSolution } =
    useGamestate();

  const { setGuessedWords, setWordStatuses, resetGame } = useInput();

  useEffect(() => {
    const subscription = GameModeService.onGameModeChange().subscribe(
      (mode) => {
        setGameMode(mode as GameMode);
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
    </div>
  );
};
