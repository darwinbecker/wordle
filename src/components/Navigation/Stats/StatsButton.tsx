import { useState } from "react";
import { PlayerStats } from "../../LocalStorage";
import { Popup, PopupType } from "../../Popup";

type StatsProps = {
    stats: PlayerStats;
}

export const StatsButton = (props: StatsProps) => {
    const [showNavPopup, setShowNavPopup] = useState(false);

    const toggleNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const navButton = event.currentTarget.value;
        if (navButton) {
            setShowNavPopup(!showNavPopup);
        } else {
            // if popup is visible & user clicks outside of popup window => hide popup
            const popup = event.target as HTMLDivElement;
            if (popup.classList.contains('popup')) {
                setShowNavPopup(!showNavPopup);
            }
        }
    }

    return (
        <>
            <button value="stats" onClick={toggleNavButton}><i className="fa-solid fa-chart-simple"></i></button>
            {showNavPopup && (
                <>
                    <Popup content={'stats'} closePopup={toggleNavButton} forceInput={false} stats={props.stats}></Popup>
                </>
            )}
        </>

    );
}
