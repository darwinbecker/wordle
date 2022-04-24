import { InfoButton, StatsButton, SelectGameMode, DarkModeButton, HighContrastButton } from "..";
import { GameModeType } from "../../GameHandler";
import { PlayerStats } from "../../LocalStorage";

type NavigationBarProps = {
    stats: PlayerStats;
}

export const NavigationBar = (props: NavigationBarProps) => {

    return (

        <div className="nav-wrapper">
            {/* <i className="fa-solid fa-calendar-day icon"></i>
            <i className="fa-solid fa-dumbbell icon"></i>
            <i className="fa-solid fa-jet-fighter-up icon"></i>
            <i className="fa-solid fa-fire-flame-curved icon"></i> */}

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