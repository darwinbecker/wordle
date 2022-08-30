import { useState } from "react";
import Architektur from "../../../Static/CategoryIcons/Architektur.png";
import Astronomie from "../../../Static/CategoryIcons/Astronomie.png";
import Biologie from "../../../Static/CategoryIcons/Biologie.png";
import Botanik from "../../../Static/CategoryIcons/Botanik.png";
import Chemie from "../../../Static/CategoryIcons/Chemie.png";
import Essen from "../../../Static/CategoryIcons/Essen.png";
import Film from "../../../Static/CategoryIcons/Film.png";
import Geographie from "../../../Static/CategoryIcons/Geographie.png";
import IT from "../../../Static/CategoryIcons/IT.png";
import Jura from "../../../Static/CategoryIcons/Jura.png";
import Mathe from "../../../Static/CategoryIcons/Mathe.png";
import Medizin from "../../../Static/CategoryIcons/Medizin.png";
import Musik from "../../../Static/CategoryIcons/Musik.png";
import Physik from "../../../Static/CategoryIcons/Physik.png";
import Religion from "../../../Static/CategoryIcons/Religion.png";
import Sport from "../../../Static/CategoryIcons/Sport.png";
import Sprache from "../../../Static/CategoryIcons/Sprache.png";
import Technik from "../../../Static/CategoryIcons/Technik.png";
import Tiere from "../../../Static/CategoryIcons/Tiere.png";
import { category } from "../../../Types/Category";

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
};

export const Categories: React.FC<CategoriesProps> = (
    props: CategoriesProps
) => {
    const categories: category[] = [
        "architecture",
        "astronomy",
        "biology",
        "botany",
        "chemistry",
        "food",
        "movie",
        "geography",
        "it",
        "law",
        "maths",
        "medicine",
        "music",
        "physics",
        "religion",
        "sport",
        "language",
        "tech",
        "animals",
    ];

    function getIcon(category: string): string {
        if (category === "architecture") {
            return Architektur;
        } else if (category === "astronomy") {
            return Astronomie;
        } else if (category === "biology") {
            return Biologie;
        } else if (category === "botany") {
            return Botanik;
        } else if (category === "chemistry") {
            return Chemie;
        } else if (category === "food") {
            return Essen;
        } else if (category === "movie") {
            return Film;
        } else if (category === "geography") {
            return Geographie;
        } else if (category === "it") {
            return IT;
        } else if (category === "law") {
            return Jura;
        } else if (category === "maths") {
            return Mathe;
        } else if (category === "medicine") {
            return Medizin;
        } else if (category === "music") {
            return Musik;
        } else if (category === "physics") {
            return Physik;
        } else if (category === "religion") {
            return Religion;
        } else if (category === "sport") {
            return Sport;
        } else if (category === "language") {
            return Sprache;
        } else if (category === "tech") {
            return Technik;
        } else if (category === "animals") {
            return Tiere;
        } else {
            return "";
        }
    }

    return (
        <>
            <h1>Wähle eine Kategorie</h1>
            <div className="item-list">
                {categories.map((category) => {
                    return (
                        <button
                            className="category-button"
                            onClick={props.closePopup}
                            key={category}
                            value={category}
                        >
                            <img src={getIcon(category)} alt={category} />
                            {category}
                        </button>
                    );
                })}
            </div>
        </>
    );
};
