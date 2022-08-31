import { usePopup } from "../../Context/Popup/Popup";
import { PlayerStats } from "../../LocalStorage";
import { Stats } from "../../PopupContent";

type StatsProps = {
  stats: PlayerStats;
};

export const StatsButton = (props: StatsProps) => {
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
