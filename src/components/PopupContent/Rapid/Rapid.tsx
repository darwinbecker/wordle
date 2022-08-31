import { RAPID_MODE_MINUTES } from "../../../config/Settings";
import { usePopup } from "../../Context/Popup/Popup";

type RapidProps = {
  //   closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Rapid: React.FC<RapidProps> = (props: RapidProps) => {
  const { unSetPopupContent } = usePopup();
  return (
    <>
      <h1>Wähle einen Blitz-Modus</h1>
      <div className="item-list">
        {RAPID_MODE_MINUTES.map((item, index) => (
          <button
            key={index}
            onClick={(e) => {
              // const rapidModeTimerValue = parseInt(e.currentTarget.value);
              // setRapidMode(rapidModeTimerValue);
              // const t = new Date().getTime() + rapidModeTimerValue * 60 * 1000;
              // console.log(t);
              // setTimer(t);
              unSetPopupContent();
            }}
            value={item}
          >
            {item === "1" ? "1 Minute" : `${item} Minuten`}
          </button>
        ))}
      </div>
    </>
  );
};
