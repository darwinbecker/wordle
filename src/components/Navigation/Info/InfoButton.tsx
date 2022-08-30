import { usePopup } from "../../Context/Popup/Popup";
import { Info } from "../../Popup";

export const InfoButton = () => {
  const { setPopupContent, setForceInput } = usePopup();

  //   const toggleNavButton = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     const navButton = event.currentTarget.value;
  //     if (navButton) {
  //       // if nav button is clicked => set mode
  //       // props.setPopupMode(navButton as PopupType);
  //       setShowNavPopup(!showNavPopup);
  //     } else {
  //       // if popup is visible & user clicks outside of popup window => hide popup
  //       const popup = event.target as HTMLDivElement;
  //       if (popup.classList.contains("popup")) {
  //         // props.setPopupMode(undefined);
  //         setShowNavPopup(!showNavPopup);
  //         // unSetPopupContent();
  //       }
  //     }
  //   };

  return (
    <>
      <button
        value="info"
        onClick={() => {
          setForceInput(true);
          setPopupContent(<Info />);
        }}
      >
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </>
  );
};
