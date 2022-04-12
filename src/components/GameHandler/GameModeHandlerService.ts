import { Subject } from 'rxjs';
import { GameModeType } from './GameHandler';

const subject = new Subject();
export const GameModeHandlerService = {
    setGameMode: (mode: GameModeType) => subject.next(mode),
    onGameModeChange: () => subject.asObservable()
}
