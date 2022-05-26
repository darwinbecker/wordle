import { category } from "../../Types/Category";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { PlayerStats } from "../LocalStorage";
import { Popup } from "../Popup";
import { WordStatusType } from "../WordStatus";

type CategoryModeProps = {
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
    showPopup: boolean;
    togglePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
    stats: PlayerStats;
    category: category;
    getNextCategoryWord: () => void;
}

export const CategoryMode = (props: CategoryModeProps) => {

    return (
        <>
            {props.showPopup && (
                <Popup content={'categories'} closePopup={props.togglePopup} forceInput={true} stats={props.stats} ></Popup>
            )}

            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses} isInputError={props.isInputError}></Grid>

            <Keyboard wordStatuses={props.wordStatuses} guessedWords={props.guessedWords} solution={props.solution}
                handleChange={props.handleChange} handeSubmit={props.handleSubmit} handleRemove={props.handleRemove} />

            {(props.youWin || props.youLose) && (
                <div className="gameover-feedback">
                    <button className="next-word" onClick={props.getNextCategoryWord}>nächstes Wort</button>
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{props.solution}</div>
                </div>
            )}

        </>
    );
}
