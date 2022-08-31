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
            <Grid isInputError={props.isInputError}></Grid>

            <Keyboard handleChange={props.handleChange} handeSubmit={props.handleSubmit} handleRemove={props.handleRemove} />

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
