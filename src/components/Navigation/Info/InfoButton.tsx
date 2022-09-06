import { usePopup } from "../../Context/Popup/Popup";
import { Info } from "../../PopupContent";

export const InfoButton = () => {
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  return (
    <>
      <button
        value="info"
        onClick={() => {
          setPopupContent(<Info />);
          setForceInput(false);
          setAnimationDelay(false);
        }}
      >
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </>
  );
};
