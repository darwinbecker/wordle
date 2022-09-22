import { WordStatus } from "./WordStatus";

export type GameState = {
  guessedWords: string[];
  wordStatuses: WordStatus[][];
  solution: string;
};
