import Architektur from '../../../Static/CategoryIcons/Architektur.png';
import Astronomie from '../../../Static/CategoryIcons/Astronomie.png';
import Biologie from '../../../Static/CategoryIcons/Biologie.png';
import Botanik from '../../../Static/CategoryIcons/Botanik.png';
import Chemie from '../../../Static/CategoryIcons/Chemie.png';
import Essen from '../../../Static/CategoryIcons/Essen.png';
import Film from '../../../Static/CategoryIcons/Film.png';
import Geographie from '../../../Static/CategoryIcons/Geographie.png';
import IT from '../../../Static/CategoryIcons/IT.png';
import Jura from '../../../Static/CategoryIcons/Jura.png';
import Mathe from '../../../Static/CategoryIcons/Mathe.png';
import Medizin from '../../../Static/CategoryIcons/Medizin.png';
import Musik from '../../../Static/CategoryIcons/Musik.png';
import Physik from '../../../Static/CategoryIcons/Physik.png';
import Religion from '../../../Static/CategoryIcons/Religion.png';
import Sport from '../../../Static/CategoryIcons/Sport.png';
import Sprache from '../../../Static/CategoryIcons/Sprache.png';
import Technik from '../../../Static/CategoryIcons/Technik.png';
import Tiere from '../../../Static/CategoryIcons/Tiere.png';

// Architektur: https://www.flaticon.com/free-icon/blueprint_1624005
// Astronomie: https://www.flaticon.com/de/premium-icon/astronomie_2141436
// Biologie: https://www.flaticon.com/de/premium-icon/dna_3207633
// Botanik: https://www.flaticon.com/premium-icon/plants_1703178
// Chemie: https://www.flaticon.com/de/kostenloses-icon/chemie_1156950?related_id=1157001&origin=search
// Essen: https://www.flaticon.com/de/premium-icon/fast-food_3107006
// Film: https://www.flaticon.com/de/kostenloses-icon/klappe_2606028?related_id=2606025&origin=search
// Geographie: https://www.flaticon.com/de/premium-icon/geographie_2847468
// IT: https://www.flaticon.com/premium-icon/science_3044105
// Jura: https://www.flaticon.com/free-icon/compliant_4252299
// Mathe: https://www.flaticon.com/free-icon/calculator_897368
// Medizin: https://www.flaticon.com/free-icon/medicine_655968
// Musik: https://www.flaticon.com/free-icon/guitar_3659784
// Physik: https://www.flaticon.com/de/kostenloses-icon/physik_176024
// Religion: https://www.flaticon.com/de/kostenloses-icon/religion_695882
// Sport: https://www.flaticon.com/de/premium-icon/sport_3311579
// Sprache: https://www.flaticon.com/de/premium-icon/sprachen_3411956
// Technik: https://www.flaticon.com/de/kostenloses-icon/technologie_4152006
// Tiere: https://www.flaticon.com/de/kostenloses-icon/igel_1998675


type CategoriesProps = {
    closePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Categories: React.FC<CategoriesProps> = (props: CategoriesProps) => {
    return (
        <>
            <h1>Wähle eine Kategorie</h1>
            <div className="item-list">
                <button onClick={props.closePopup} value="architecture">
                    <img src={Architektur} alt="Architektur" />
                    Architektur
                </button>
                <button onClick={props.closePopup} value="astronomie">
                    <img src={Astronomie} alt="Astronomie" />
                    Astronomie
                </button>
                <button onClick={props.closePopup} value="biologie">
                    <img src={Biologie} alt="Biologie" />
                    Biologie
                </button>
                <button onClick={props.closePopup} value="botany">
                    <img src={Botanik} alt="Botanik" />
                    Botanik
                </button>
                <button onClick={props.closePopup} value="chemistry">
                    <img src={Chemie} alt="Chemie" />
                    Chemie
                </button>
                <button onClick={props.closePopup} value="food">
                    <img src={Essen} alt="Essen" />
                    Essen
                </button>
                <button onClick={props.closePopup} value="movie">
                    <img src={Film} alt="Film" />
                    Film
                </button>
                <button onClick={props.closePopup} value="geographie">
                    <img src={Geographie} alt="Geographie" />
                    Geographie
                </button>
                <button onClick={props.closePopup} value="it">
                    <img src={IT} alt="IT" />
                    IT
                </button>
                <button onClick={props.closePopup} value="law">
                    <img src={Jura} alt="Jura" />
                    Jura</button>
                <button onClick={props.closePopup} value="maths">
                    <img src={Mathe} alt="Mathe" />
                    Mathe
                </button>
                <button onClick={props.closePopup} value="medicine">
                    <img src={Medizin} alt="Medizin" />
                    Medizin
                </button>
                <button onClick={props.closePopup} value="musik">
                    <img src={Musik} alt="Musik" />
                    Musik
                </button>
                <button onClick={props.closePopup} value="physics">
                    <img src={Physik} alt="Physik" />
                    Physik
                </button>
                <button onClick={props.closePopup} value="religion">
                    <img src={Religion} alt="Religion" />
                    Religion
                </button>
                <button onClick={props.closePopup} value="sport">
                    <img src={Sport} alt="Sport" />
                    Sport
                </button>
                <button onClick={props.closePopup} value="language">
                    <img src={Sprache} alt="Sprache" />
                    Sprache
                </button>
                <button onClick={props.closePopup} value="tech">
                    <img src={Technik} alt="Technik" />
                    Technik
                </button>
                <button onClick={props.closePopup} value="animals">
                    <img src={Tiere} alt="Tiere" />
                    Tiere
                </button>
            </div>
        </>
    );

}