import { Subject } from "rxjs";

const subject = new Subject();
export const WinService = {
  setWin: (win: boolean) => subject.next(win),
  onWinChange: () => subject.asObservable(),
};
