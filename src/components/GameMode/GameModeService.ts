import { Subject } from 'rxjs';
import { GameModeType } from './GameMode';

const subject = new Subject();
export const GameModeService = {
    setGameMode: (mode: GameModeType) => subject.next(mode),
    onGameModeChange: () => subject.asObservable()
}
