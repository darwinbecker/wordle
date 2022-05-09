import { useEffect } from "react";
import { GameModeHandlerService } from "../GameHandler";
import { getRandomWord } from "../../Config/Wordlist";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { WordStatusType } from "../WordStatus";

type TRModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
    solution: string;
    handleChange: (value: string) => void;
    handleSubmit: () => void;
    handleRemove: () => void;
    isInputError: boolean;
    youWin: boolean;
    youLose: boolean;
    resetGame: () => void;
    getNextWord: () => void;
}

export const TRMode = (props: TRModeProps) => {

    return (
        <>
            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses} isInputError={props.isInputError}></Grid>

            <Keyboard wordStatuses={props.wordStatuses} guessedWords={props.guessedWords} solution={props.solution}
                handleChange={props.handleChange} handeSubmit={props.handleSubmit} handleRemove={props.handleRemove} />

            {(props.youWin || props.youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={props.getNextWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{props.solution}</div>
                </div>
            )}

        </>
    );
}
