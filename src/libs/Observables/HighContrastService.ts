import { Subject } from "rxjs";

const subject = new Subject();
export const HighContrastService = {
  setHighContrast: (isHighContrast: boolean) => subject.next(isHighContrast),
  onHighContrastChange: () => subject.asObservable(),
};
