import { Grid } from "../Grid";
import { WordStatusType } from "../WordStatus";

type CategoryModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
}

export const CategoryMode = (props: CategoryModeProps) => {

    return (
        <>
            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses}></Grid>
        </>
    );
}
