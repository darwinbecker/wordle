import { GameMode } from "../../../types/GameMode";
import { GameModeService } from "../../../libs/Observables/GameModeService";

export const SelectGameMode = () => {
  const handleMode = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.target.blur();
    const selectedMode = event.target.value as GameMode;
    GameModeService.setGameMode(selectedMode);
  };

  return (
    <select className="nav-select" onChange={handleMode}>
      <option value="WOTD">💡 Wort des Tages</option>
      <option value="TR">🎓 Training</option>
      <option value="C">Kategorie</option>
    </select>
  );
};
