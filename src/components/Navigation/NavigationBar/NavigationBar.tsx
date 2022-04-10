import { InfoButton, StatsButton, SelectGameMode, DarkModeButton, HighContrastButton } from "..";
import { GameModeType } from "../../GameMode";
import { PlayerStats } from "../../LocalStorage";

type NavigationBarProps = {
    mode: GameModeType;
    setMode: (mode: GameModeType) => void;
    stats: PlayerStats;
}

export const NavigationBar = (props: NavigationBarProps) => {
    return (

        <div className="nav-wrapper">

            <div className="nav-icons-wrapper">
                <InfoButton />
                <StatsButton stats={props.stats} />
            </div>

            <SelectGameMode setMode={props.setMode} />

            <div className="nav-icons-wrapper">
                <DarkModeButton />
                <HighContrastButton />
            </div>
        </div>
    );
}