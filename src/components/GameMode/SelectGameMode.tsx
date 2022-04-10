import { GameModeType, GameModeHandlerService } from ".";

type GameModeProps = {
    setMode : (mode: GameModeType) => void;
}

export const SelectGameMode = (props: GameModeProps) => {

    const handleMode = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        event.target.blur();
        const selectedMode = event.target.value as GameModeType;
        props.setMode(selectedMode);
        GameModeHandlerService.setGameMode(selectedMode);
    }

    return (
        <select className="game-mode-select" onChange={handleMode}>
            <option value="WOTD">Wort des Tages</option>
            <option value="TR">Training</option>
            <option value="C">Kategorie</option>
            <option value="R">Blitz</option>
        </select>
    );
}
