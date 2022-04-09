import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { loadHighContrast } from '../../LocalStorage';
import { HighContrastService } from '../../Navigation';

type TileProps = {
    letter: string;
    status?: string;
}

export const Tile: React.FC<TileProps> = (props: TileProps) => {

    const [contrastMode, setContrastMode] =  useState<Boolean>(loadHighContrast());

    useEffect(() => {
        const subscription = HighContrastService.onHighContrastChange().subscribe(isHighContrast => {
            isHighContrast ? setContrastMode(true) : setContrastMode(false);
        });

        return () => {
            subscription.unsubscribe();
        }
    }, []);

    const statusClass = classnames(
        'Tile',
        {
            'correct': props.status == 'correct' && !contrastMode,
            'correct-high-contrast': props.status == 'correct' && contrastMode,
            'semi': props.status == 'semi' && !contrastMode,
            'semi-high-contrast': props.status == 'semi' && contrastMode,
            'wrong': props.status == 'wrong'
        });

    return (
        <div className={statusClass}>
            {props.letter}
        </div>
    );
}