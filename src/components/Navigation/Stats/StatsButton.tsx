import { usePopup } from "../../Context/Popup/Popup";
import { PlayerStats } from "../../LocalStorage";
import { Stats } from "../../Popup";

type StatsProps = {
  stats: PlayerStats;
};

export const StatsButton = (props: StatsProps) => {
  const { setPopupContent } = usePopup();

  return (
    <>
      <button
        value="stats"
        onClick={() => {
          setPopupContent(<Stats />);
        }}
      >
        <i className="fa-solid fa-chart-simple"></i>
      </button>
    </>
  );
};
