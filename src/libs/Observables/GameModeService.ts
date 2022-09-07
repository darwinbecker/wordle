import { Subject } from "rxjs";
import { GameMode } from "../../types/GameMode";

const subject = new Subject();
export const GameModeService = {
  setGameMode: (mode: GameMode) => subject.next(mode),
  onGameModeChange: () => subject.asObservable(),
};
