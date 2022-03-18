type TileProps = {
    letter: string;
  }

export const Tile: React.FC<TileProps> = (props: TileProps) => {
    return (
        <div className="Tile">
            {props.letter}
        </div>
    );
}