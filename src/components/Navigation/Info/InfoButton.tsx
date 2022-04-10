import { useState } from "react";
import { Popup, PopupType } from "../../Popup";

// type InfoProps = {
//     setPopupMode: (mode: PopupType) => void;
// }

export const InfoButton = () => {
    const [showNavPopup, setShowNavPopup] = useState(false);

    const toggleNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const navButton = event.currentTarget.value;
        if (navButton) {
            // if nav button is clicked => set mode
            // props.setPopupMode(navButton as PopupType);
            setShowNavPopup(!showNavPopup);
        } else {
            // if popup is visible & user clicks outside of popup window => hide popup
            const popup = event.target as HTMLDivElement;
            if (popup.classList.contains('popup')) {
                // props.setPopupMode(undefined);
                setShowNavPopup(!showNavPopup);
            }
        }
    }
    return (
        <>
            <button value="info" onClick={toggleNavButton}><i className="fa-solid fa-circle-info"></i></button>


            {showNavPopup && (
                <>
                    <Popup content={'info'} closePopup={toggleNavButton} forceInput={false} ></Popup>
                </>
            )}
        </>

    );
}