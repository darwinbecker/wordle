import { Grid } from "../Grid";
import { WordStatusType } from "../WordStatus";

type RapidModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
}

export const RapidMode = (props: RapidModeProps) => {

    return (
        <>
        <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses}></Grid>
        </>
    );
}
