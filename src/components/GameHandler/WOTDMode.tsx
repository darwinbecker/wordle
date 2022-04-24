import { Grid } from "../Grid";
import { WordStatusType } from "../WordStatus";

type WOTDModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
}

export const WOTDMode = (props: WOTDModeProps) => {

    return (
        <>
        <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses}></Grid>
        </>
    );
}
