import { useEffect } from "react";
import { GameModeHandlerService } from ".";
import { getRandomWord } from "../../Config/Wordlist";
import { Grid } from "../Grid";
import { WordStatusType } from "../WordStatus";

type TRModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
    youWin: boolean;
    setYouWin: (value: boolean) => void;
    youLose: boolean;
    setYouLose: (value: boolean) => void;
    solution: string;
    setSolution: (value: string) => void;
    resetGame: () => void;
}

export const TRMode = (props: TRModeProps) => {


    // const resetGame = () => {
    // GameModeHandlerService.resetGame();
    //     setGuessedWords([]);
    //     setRowIndex(0);
    //     setColumnIndex(0);
    //     setGuessedWord("");
    //     setWordStatuses([]);
    //     setYouWin(false);
    //     setYouLose(false);
    //     setSolution("");
    //     setTimerStarted(false);
    // }

    const getNextWord = () => {
        props.resetGame();
        props.setSolution(getRandomWord());
    }

    useEffect(() => {
        const subscription = GameModeHandlerService.onGameModeChange().subscribe(mode => {
            if (mode == 'TR') {
                // getNextWord();
            }
        });

        return () => {
            subscription.unsubscribe();
        }
    }, []);

    return (
        <>
            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses}></Grid>


            {(props.youWin || props.youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={getNextWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{props.solution}</div>
                </div>
            )}

        </>
    );
}
