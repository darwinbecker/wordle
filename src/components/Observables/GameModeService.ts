import { Subject } from "rxjs";
import { GameModeType } from "../GameHandler/GameHandler";

const subject = new Subject();
export const GameModeService = {
  setGameMode: (mode: GameModeType) => subject.next(mode),
  onGameModeChange: () => subject.asObservable(),
};
