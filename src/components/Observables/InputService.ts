import { Subject } from "rxjs";

const inputChangeSubject = new Subject<void>();
const inputSubmitSubject = new Subject<void>();
const inputRemoveSubject = new Subject<void>();

export const InputService = {
  setChangeInput: () => inputChangeSubject.next(),
  onInputChange: () => inputChangeSubject.asObservable(),

  setSubmitInput: () => inputSubmitSubject.next(),
  onInputSubmit: () => inputSubmitSubject.asObservable(),

  setRemoveInput: () => inputRemoveSubject.next(),
  onInputRemove: () => inputRemoveSubject.asObservable(),
};
