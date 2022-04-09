import classnames from 'classnames';
import { Categories, Rapid, Info, Stats } from '.';
import { PlayerStats } from '../LocalStorage';
// import { Info, NavType, Stats } from '../Navigation';

export type PopupType = 'categories' | 'rapid' | 'nav' | 'info' | 'stats';;

type ModeProps = {
    content: PopupType | undefined;
    closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
    forceInput: boolean;
    popupMode?: PopupType;
    animationDelay?: boolean;
    stats: PlayerStats
}

export const Popup: React.FC<ModeProps> = (props: ModeProps) => {

    const handlePopup = (event: any) => {
        if (!props.forceInput) {
            props.closePopup(event);
        }
    }

    const popupClasses = classnames(
        'popup',
        {
            'popup-delay': props.animationDelay == true
        });

    return (
        <div className={popupClasses} onClick={handlePopup}>
            <div className='popup-content animate__animated animate__fadeInUp'>
                {props.content == 'categories' && (
                    <Categories closePopup={props.closePopup} />
                )}

                {props.content == 'rapid' && (
                    <Rapid closePopup={props.closePopup} />
                )}

                {props.content == 'info' && (
                    <Info />
                )}

                {props.content == 'stats' && (
                    <Stats stats={props.stats} />
                )}
            </div>
        </div>
    );

}