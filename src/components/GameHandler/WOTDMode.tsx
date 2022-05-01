import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { PlayerStats } from "../LocalStorage";
import { Popup } from "../Popup";
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
    youWin: boolean;
    youLose: boolean;
    showPopup: boolean;
    togglePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
    stats: PlayerStats;
}

export const WOTDMode = (props: WOTDModeProps) => {

    return (
        <>
            {props.showPopup && (props.youWin || props.youLose) && (
                <>
                    <Popup content={'stats'} closePopup={props.togglePopup} forceInput={false} animationDelay={true} stats={props.stats}></Popup>
                </>
            )}

            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses} isInputError={props.isInputError}></Grid>
            <Keyboard wordStatuses={props.wordStatuses} guessedWords={props.guessedWords} solution={props.solution}
                handleChange={props.handleChange} handeSubmit={props.handleSubmit} handleRemove={props.handleRemove} />

            {props.youLose && (
                <div className="gameover-feedback">
                    <h4>gesuchtes Wort war:</h4>
                    <div className="solution-word">{props.solution}</div>
                </div>
            )}
        </>
    );
}
