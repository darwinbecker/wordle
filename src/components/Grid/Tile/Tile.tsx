import { WordStatusType } from "../../WordStatus";
import { WordStatusClassNames } from "../../WordStatus";

type TileProps = {
  letter: string;
  status?: WordStatusType;
  isInputError: boolean;
};

export const Tile: React.FC<TileProps> = (props: TileProps) => {
  return (
    <div
      className={
        WordStatusClassNames("Tile", props.status) +
        (props.isInputError ? " input-error" : "")
      }
    >
      {props.letter}
    </div>
  );
};
