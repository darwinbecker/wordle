import { useState, Dispatch, SetStateAction } from 'react';
import  { GameModeType } from '.';
import { MAX_GUESSES } from '../../config/Settings';
import { WORD_OF_THE_DAY } from '../../config/Wordlist';
import { GameState, loadGameState, loadPlayerStats, PlayerStats } from '../LocalStorage';


const loadedGameState: GameState = loadGameState();
const loadedPlayerStats: PlayerStats = loadPlayerStats();

export const gameState = {
    gameMode: "WOTD" as GameModeType,
    // setGameMode: (gameMode: GameModeType) => {},
    youWin: loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false,
    youLose: loadedGameState.guessedWords.length === MAX_GUESSES && !loadedGameState.guessedWords.includes(WORD_OF_THE_DAY().solution) ? true : false,
    showPopup: false,
    solution: WORD_OF_THE_DAY().solution,
    guessedWord: "",
    guessedWords: loadedGameState.solution !== WORD_OF_THE_DAY().solution ? [] : loadedGameState.guessedWords,
    wordStatuses: loadedGameState.solution !== WORD_OF_THE_DAY().solution ? [] : loadedGameState.wordStatuses,
    grid: {
      rowIndex: 0,
      columnIndex: 0,
    },
    stats: loadedPlayerStats,
}