import { WordStatus } from "../../../types/WordStatus";
import { WordStatusClassNames } from "../../../libs/WordStatus";

type TileProps = {
  letter: string;
  status?: WordStatus;
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
