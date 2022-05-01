import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { WordStatusType } from "../WordStatus";

type WOTDModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
    solution: string;
    handleChange: (value: string) => void;
    handleSubmit: () => void;
    handleRemove: () => void;
    isInputError: boolean;
}

export const WOTDMode = (props: WOTDModeProps) => {

    return (
        <>
            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses} isInputError={props.isInputError}></Grid>
            <Keyboard wordStatuses={props.wordStatuses} guessedWords={props.guessedWords} solution={props.solution}
                handleChange={props.handleChange} handeSubmit={props.handleSubmit} handleRemove={props.handleRemove} />
        </>
    );
}
