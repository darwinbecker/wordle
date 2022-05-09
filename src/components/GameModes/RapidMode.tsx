import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { PlayerStats } from "../LocalStorage";
import { Popup } from "../Popup";
import { Timer } from "../Timer";
import { WordStatusType } from "../WordStatus";

type RapidModeProps = {
    guessedWord: string;
    guessedWords: string[];
    wordStatuses: WordStatusType[][];
    solution: string;
    handleChange: (value: string) => void;
    handleSubmit: () => void;
    handleRemove: () => void;
    isInputError: boolean;
    // youWin: boolean;
    youLose: boolean;
    setYouLose: (value: boolean) => void;
    showPopup: boolean;
    togglePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
    stats: PlayerStats;
    rapidModeScore: number;
    resetRapidMode: () => void;
    timer: number | undefined;
    setTimer: (value: number) => void;
    pauseTimer: boolean;
    setPauseTimer: (value: boolean) => void;
}

export const RapidMode = (props: RapidModeProps) => {

    return (
        <>
            {props.showPopup && (
                <Popup content={'rapid'} closePopup={props.togglePopup} forceInput={true} stats={props.stats}></Popup>
            )}

            <Grid letter={props.guessedWord} guessedWords={props.guessedWords} wordStatuses={props.wordStatuses} isInputError={props.isInputError}></Grid>

            <Keyboard wordStatuses={props.wordStatuses} guessedWords={props.guessedWords} solution={props.solution}
                handleChange={props.handleChange} handeSubmit={props.handleSubmit} handleRemove={props.handleRemove} />

            <div className="rapid">

                {props.youLose && (
                    <>
                        <div className="game-summary">

                            <div className="rapid-score">
                                <h4>Score:</h4>
                                <div className="score-value">{props.rapidModeScore}</div>

                            </div>

                            <Timer expiryTimestamp={props.timer ? props.timer : 0} setExpiryTimestamp={props.setTimer}
                                pauseTimer={props.pauseTimer} setPauseTimer={props.setPauseTimer} youLose={props.youLose} setYoulose={props.setYouLose} />

                            <div className="gameover-feedback">
                                <h4>gesuchtes Wort war:</h4>
                                <div className="solution-word">{props.solution}</div>
                            </div>

                        </div>
                        <div>
                            <button className="new-game-button" onClick={props.resetRapidMode}>Neues Spiel</button>
                        </div>
                    </>
                )}

                {props.timer && !props.youLose && (
                    <Timer expiryTimestamp={props.timer} setExpiryTimestamp={props.setTimer}
                        pauseTimer={props.pauseTimer} setPauseTimer={props.setPauseTimer} youLose={props.youLose} setYoulose={props.setYouLose} />
                )}

                {props.rapidModeScore > 0 && !props.youLose && (
                    <div className="rapid-score">
                        <h4>Score:</h4>
                        <div className="score-value">{props.rapidModeScore}</div>
                    </div>

                )}

            </div>
        </>
    );
}
