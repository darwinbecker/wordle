import { usePopup } from "../../Context/Popup/Popup";
import { Stats } from "../../PopupContent";

export const StatsButton = () => {
  const { setPopupContent, setForceInput, setAnimationDelay } = usePopup();

  return (
    <>
      <button
        value="stats"
        onClick={() => {
          setPopupContent(<Stats />);
          setForceInput(false);
          setAnimationDelay(false);
        }}
      >
        <i className="fa-solid fa-chart-simple"></i>
      </button>
    </>
  );
};
