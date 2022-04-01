import { Subject } from 'rxjs';

const subject = new Subject();

export const WinService = {
    // sendMessage: message => subject.next({ text: message }),
    // clearMessages: () => subject.next(),
    // onMessage: () => subject.asObservable()
    setWin: (win: boolean) => subject.next(win),
    onWin: () => subject.asObservable()
};

