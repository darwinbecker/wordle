import classnames from 'classnames';

type TileProps = {
    letter: string;
    status?: string;
}

export const Tile: React.FC<TileProps> = (props: TileProps) => {

    const statusClass = classnames(
        'Tile',
        {
            'correct': props.status == 'correct',
            'semi': props.status == 'semi',
            'wrong': props.status == 'wrong',
        });

    return (
        <div className={statusClass}>
            {props.letter}
        </div>
    );
}