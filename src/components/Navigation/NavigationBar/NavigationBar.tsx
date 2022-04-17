import { InfoButton, StatsButton, SelectGameMode, DarkModeButton, HighContrastButton } from "..";
import { GameModeType } from "../../GameHandler";
import { PlayerStats } from "../../LocalStorage";

type NavigationBarProps = {
    stats: PlayerStats;
}

export const NavigationBar = (props: NavigationBarProps) => {

    return (

        <div className="nav-wrapper">

            <div className="nav-icons-wrapper">
                <InfoButton />
                <StatsButton stats={props.stats} />
            </div>

            <SelectGameMode />

            <div className="nav-icons-wrapper">
                <DarkModeButton />
                <HighContrastButton />
            </div>
        </div>
    );
}