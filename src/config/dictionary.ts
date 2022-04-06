export const isInDictionary = (guessedWord: string) => {
    return DICTIONARY.includes(guessedWord);
}

export const DICTIONARY = [
    "ABART",
    "ABBAU",
    "ABECE",
    "ABEND",
    "ABGAS",
    "ABIES",
    "ABJAD",
    "ABORT",
    "ABRUF",
    "ABSUD",
    "ABTEI",
    "ABTUN",
    "ABUJA",
    "ABWEG",
    "ABZUG",
    "ACCRA",
    "ACHAT",
    "ACHSE",
    "ACKER",
    "ADDON",
    "ADELN",
    "ADEPT",
    "ADERN",
    "ADIEU",
    "ADLER",
    "ADLIG",
    "ADMIN",
    "ADOER",
    "ADRIA",
    "AEROB",
    "AFAIK",
    "AFFIG",
    "AFFIN",
    "AFFIX",
    "AFRIK",
    "AFTER",
    "AGENS",
    "AGENT",
    "AGRAR",
    "AHNEN",
    "AHORN",
    "AIOLI",
    "AKTEI",
    "AKTIE",
    "AKTIV",
    "AKTOR",
    "ALARM",
    "ALBIS",
    "ALBIT",
    "ALBUM",
    "ALBUS",
    "ALERT",
    "ALGIN",
    "ALGOL",
    "ALIAS",
    "ALIBI",
    "ALIEN",
    "ALKAN",
    "ALKEN",
    "ALKIN",
    "ALKOR",
    "ALLEE",
    "ALLES",
    "ALLOD",
    "ALLZU",
    "ALMER",
    "ALPEN",
    "ALPHA",
    "ALPIN",
    "ALSEM",
    "ALTAN",
    "ALTAR",
    "ALTER",
    "ALULA",
    "AMBIG",
    "AMBRA",
    "AMMAN",
    "AMPEL",
    "AMRUM",
    "AMSEL",
    "AMTEI",
    "AMTEN",
    "ANBAU",
    "ANBEI",
    "ANBOT",
    "ANGEL",
    "ANGER",
    "ANGST",
    "ANHIN",
    "ANIME",
    "ANKEN",
    "ANKER",
    "ANMUT",
    "ANNEX",
    "ANODE",
    "ANOVA",
    "ANRUF",
    "ANTIK",
    "ANTUN",
    "ANURA",
    "ANZUG",
    "AORTA",
    "APART",
    "APERO",
    "APFEL",
    "APHEL",
    "APNOE",
    "APRIL",
    "APSIS",
    "ARBER",
    "AREAL",
    "ARENA",
    "ARETE",
    "ARGON",
    "ARGOT",
    "ARIES",
    "ARKAN",
    "ARMEE",
    "ARMER",
    "ARMUT",
    "AROMA",
    "ARRAY",
    "ARSCH",
    "ARTIG",
    "ARUAK",
    "ASCHE",
    "ASIEN",
    "ASPIK",
    "ASSIG",
    "ASTEN",
    "ATHEN",
    "ATLAS",
    "ATMEN",
    "ATOLL",
    "ATZEN",
    "AUDIT",
    "AUGUR",
    "AULOS",
    "AURAL",
    "AUTOR",
    "AVERS",
    "AVISO",
    "AXIAL",
    "AXIOM",
    "AZUBI",
    "BACHE",
    "BACKE",
    "BADEN",
    "BADER",
    "BAGEL",
    "BAGNO",
    "BAHRE",
    "BAIJI",
    "BALDE",
    "BALUN",
    "BANAL",
    "BANDE",
    "BANGE",
    "BARBE",
    "BARDE",
    "BARES",
    "BARGE",
    "BARKE",
    "BARON",
    "BASAL",
    "BASAR",
    "BASIS",
    "BAUCH",
    "BAUEN",
    "BAUER",
    "BAYER",
    "BEBEN",
    "BEERE",
    "BEHUF",
    "BEIDE",
    "BEIGE",
    "BEIZE",
    "BELAG",
    "BELEG",
    "BEMME",
    "BERGE",
    "BERUF",
    "BESAN",
    "BESEN",
    "BETEN",
    "BEULE",
    "BEUTE",
    "BEVOR",
    "BEZUG",
    "BIBEL",
    "BIBER",
    "BIENE",
    "BIENN",
    "BIEST",
    "BIKER",
    "BILGE",
    "BINDE",
    "BINSE",
    "BIPED",
    "BIRKE",
    "BIRMA",
    "BIRNE",
    "BISAM",
    "BITCH",
    "BITTE",
    "BIWAK",
    "BIXIN",
    "BLANK",
    "BLASE",
    "BLASS",
    "BLATT",
    "BLECH",
    "BLICK",
    "BLIDE",
    "BLIMP",
    "BLIND",
    "BLITZ",
    "BLOCH",
    "BLOCK",
    "BLOED",
    "BLOND",
    "BLOSS",
    "BLOSS",
    "BLUES",
    "BLUFF",
    "BLUME",
    "BLUST",
    "BMVBW",
    "BOANL",
    "BOARD",
    "BOCHE",
    "BODEN",
    "BOGEN",
    "BOHEI",
    "BOHLE",
    "BOHNE",
    "BOEIG",
    "BOLID",
    "BOLLE",
    "BOMBE",
    "BONUM",
    "BONUS",
    "BONZE",
    "BORAX",
    "BORKE",
    "BORTE",
    "BOESE",
    "BOSON",
    "BOTOX",
    "BOUBA",
    "BOXEN",
    "BOXER",
    "BRACH",
    "BRAND",
    "BRAET",
    "BRAUE",
    "BRAUN",
    "BRAUT",
    "BREAK",
    "BREIT",
    "BRETT",
    "BREZE",
    "BREZN",
    "BRIEF",
    "BRIES",
    "BRISE",
    "BRISK",
    "BRITE",
    "BRONN",
    "BRUCH",
    "BRUST",
    "BSUFF",
    "BUCHE",
    "BUCHS",
    "BUCHT",
    "BUDDY",
    "BUFDI",
    "BUGGY",
    "BUGLE",
    "BUHEI",
    "BUEHL",
    "BUHNE",
    "BULLA",
    "BULLE",
    "BULLI",
    "BULLY",
    "BUNDI",
    "BUNZE",
    "BUREN",
    "BURMA",
    "BUERO",
    "BUSCH",
    "BUSSE",
    "BUSEN",
    "BUESI",
    "BUSSI",
    "BUTCH",
    "BUETT",
    "BUTTE",
    "BUTZE",
    "BYOBU",
    "CACHE",
    "CAMEO",
    "CAPUT",
    "CARGO",
    "CAUSA",
    "CCITT",
    "CECUM",
    "CELIT",
    "CELLO",
    "CERES",
    "CETUS",
    "CHAMP",
    "CHAOS",
    "CHAOT",
    "CHEAT",
    "CHECK",
    "CHEMO",
    "CHILE",
    "CHILI",
    "CHINA",
    "CHIPS",
    "CHLOR",
    "CHOKE",
    "CHOSE",
    "CHROM",
    "CIDER",
    "CIDRE",
    "CIMIR",
    "CIPÓ",
    "CIRCA",
    "CLAIM",
    "CLOUD",
    "CLOWN",
    "COACH",
    "CODEN",
    "CODER",
    "CODEX",
    "CODON",
    "COLLA",
    "COLON",
    "COMBO",
    "COMIC",
    "COMTE",
    "COPAL",
    "CORNO",
    "CORPS",
    "COUCH",
    "COUNT",
    "COVER",
    "COYPU",
    "CRACK",
    "CRASH",
    "CRAZY",
    "CREDO",
    "CREEK",
    "CREME",
    "CUMIN",
    "CURRY",
    "DABEI",
    "DACHS",
    "DACOR",
    "DADDY",
    "DAESH",
    "DAHER",
    "DAHIN",
    "DAIME",
    "DAIZU",
    "DAKAR",
    "DALBE",
    "DALEN",
    "DALIT",
    "DALKE",
    "DALLE",
    "DALLI",
    "DAMIT",
    "DAMPF",
    "DANDY",
    "DANKE",
    "DARIN",
    "DAROB",
    "DARUM",
    "DATEI",
    "DATEN",
    "DATIV",
    "DATUM",
    "DAUER",
    "DAUNE",
    "DAVON",
    "DAVOR",
    "DEBET",
    "DEBIL",
    "DECKE",
    "DEERN",
    "DEGEN",
    "DEICH",
    "DEIER",
    "DEKAN",
    "DEKON",
    "DELAG",
    "DELHI",
    "DELIR",
    "DELLE",
    "DELTA",
    "DEMSE",
    "DEMUT",
    "DENIM",
    "DENKE",
    "DEPOT",
    "DEPRI",
    "DERBE",
    "DESTO",
    "DETTO",
    "DEVOT",
    "DHAKA",
    "DIANA",
    "DIAET",
    "DICHT",
    "DICKE",
    "DIELE",
    "DIESE",
    "DILDO",
    "DILLE",
    "DIMLI",
    "DINGE",
    "DINGI",
    "DIODE",
    "DIRNE",
    "DISCO",
    "DISKO",
    "DISPO",
    "DISSE",
    "DISTO",
    "DIVIS",
    "DIWAN",
    "DIXIE",
    "DMABA",
    "DOCKE",
    "DOGMA",
    "DOHLE",
    "DOKDO",
    "DOLCE",
    "DOLCH",
    "DOLLY",
    "DOLOS",
    "DOMSE",
    "DONAU",
    "DONUT",
    "DOPEN",
    "DORER",
    "DORST",
    "DOSIS",
    "DOSTO",
    "DOYEN",
    "DRALL",
    "DRAMA",
    "DRANG",
    "DRAPP",
    "DRAUF",
    "DRECK",
    "DRELL",
    "DRESS",
    "DRILL",
    "DRINK",
    "DRISS",
    "DRIVE",
    "DROGE",
    "DROGI",
    "DROHN",
    "DROST",
    "DRUCK",
    "DRUFF",
    "DUBIE",
    "DUELL",
    "DUETT",
    "DUFTE",
    "DUHNE",
    "DUKAT",
    "DULAG",
    "DULLI",
    "DUMMY",
    "DUMPF",
    "DUENE",
    "DUENN",
    "DUNST",
    "DURCH",
    "DUERR",
    "DURST",
    "DURUM",
    "DUESE",
    "DUSEL",
    "DUTZL",
    "DUVNO",
    "EBENE",
    "EBICH",
    "EBNEN",
    "ECHSE",
    "ECKIG",
    "EDIKT",
    "EDUKT",
    "EFFET",
    "EHERN",
    "EHREN",
    "EICHE",
    "EIDAM",
    "EIFER",
    "EIGEN",
    "EILEN",
    "EILIG",
    "EIMER",
    "EINEN",
    "EINER",
    "EINIG",
    "EINST",
    "EISEN",
    "EISIG",
    "EISOP",
    "EITEL",
    "EITER",
    "EKLAT",
    "EKLIG",
    "EKRUE",
    "EKTOP",
    "EKZEM",
    "ELAND",
    "ELEND",
    "ELEVE",
    "ELFER",
    "ELITE",
    "ELLER",
    "ELOGE",
    "ELPHI",
    "ELTER",
    "ELVIS",
    "EMAIL",
    "EMDEN",
    "EMOJI",
    "EMPOR",
    "EMSIG",
    "ENDEN",
    "ENGEL",
    "ENKEL",
    "ENNUI",
    "ENORM",
    "ENTER",
    "ENZYM",
    "EPHEU",
    "EPLAX",
    "ERBSE",
    "ERDIG",
    "EREMO",
    "ERIKA",
    "ERKER",
    "ERNST",
    "ERNTE",
    "ERPEL",
    "ERSTE",
    "ERSTI",
    "ESCHE",
    "ESOPE",
    "ESSAY",
    "ESSEN",
    "ESSIG",
    "ESUSU",
    "ETAGE",
    "ETHIK",
    "ETHIN",
    "ETHOS",
    "ETWAS",
    "EUMEL",
    "EUTER",
    "EVENT",
    "EXAKT",
    "EXLEX",
    "EXPAT",
    "EXTRA",
    "FABEL",
    "FABER",
    "FACHS",
    "FADEN",
    "FAGIN",
    "FAGUS",
    "FAEHE",
    "FAHNE",
    "FAHRT",
    "FAKEN",
    "FALKE",
    "FALLE",
    "FALLS",
    "FALTE",
    "FAMOS",
    "FANAL",
    "FARBE",
    "FARCE",
    "FARIN",
    "FARSI",
    "FASER",
    "FATAL",
    "FATUM",
    "FAUNA",
    "FAUST",
    "FAUTH",
    "FAXEN",
    "FAZIT",
    "FEBER",
    "FEDER",
    "FEGEN",
    "FEHDE",
    "FEIER",
    "FEIGE",
    "FEIND",
    "FEIST",
    "FEITL",
    "FELGE",
    "FEMIS",
    "FEMME",
    "FEMUR",
    "FERGE",
    "FERNE",
    "FERRO",
    "FERSE",
    "FESCH",
    "FESEN",
    "FESTE",
    "FETUS",
    "FEUER",
    "FIALE",
    "FIBEL",
    "FIDEL",
    "FIETS",
    "FIEZE",
    "FIFFI",
    "FIGHT",
    "FIGUR",
    "FILET",
    "FILOU",
    "FINAL",
    "FINIS",
    "FINNE",
    "FINTE",
    "FIRMA",
    "FIRST",
    "FISCH",
    "FIXEN",
    "FIXER",
    "FIXIE",
    "FIXUM",
    "FJORD",
    "FLACH",
    "FLAIR",
    "FLAUM",
    "FLECK",
    "FLEXI",
    "FLINK",
    "FLINT",
    "FLIRT",
    "FLOAT",
    "FLORA",
    "FLOSS",
    "FLOTT",
    "FLOEZ",
    "FLUCH",
    "FLUGS",
    "FLUID",
    "FLUKE",
    "FLUOR",
    "FLUSE",
    "FLUSS",
    "FLYER",
    "FODOM",
    "FOEHN",
    "FOEHR",
    "FOKUS",
    "FOLGE",
    "FOLIE",
    "FONDS",
    "FONEM",
    "FOREX",
    "FORKE",
    "FORLE",
    "FORST",
    "FORUM",
    "FOTOM",
    "FOTZE",
    "FOYER",
    "FRACK",
    "FRASS",
    "FRATZ",
    "FRAUD",
    "FREAK",
    "FRECH",
    "FRECK",
    "FREMD",
    "FRETT",
    "FRIST",
    "FRITZ",
    "FROMM",
    "FRONT",
    "FROST",
    "FRUEH",
    "FRUNK",
    "FRUST",
    "FUCHS",
    "FUGEN",
    "FUHRE",
    "FUNDI",
    "FURIE",
    "FUROR",
    "FUERS",
    "FUERT",
    "FUSEL",
    "FUSSI",
    "FUTON",
    "FUTUR",
    "FUZZI",
    "FUZZY",
    "GABEL",
    "GABUN",
    "GAGEL",
    "GALAN",
    "GALEA",
    "GALLE",
    "GALVO",
    "GAMEN",
    "GAMER",
    "GAMET",
    "GANDT",
    "GANJA",
    "GARBE",
    "GAREN",
    "GASSE",
    "GATTE",
    "GAUBE",
    "GAUCH",
    "GAUDI",
    "GEBEN",
    "GEBER",
    "GEBET",
    "GEBOT",
    "GEGEN",
    "GEHEN",
    "GEHTS",
    "GEIGE",
    "GEISS",
    "GEIST",
    "GELEE",
    "GELLE",
    "GELSE",
    "GEMMA",
    "GENAU",
    "GENIE",
    "GENOM",
    "GENRE",
    "GENUG",
    "GENUS",
    "GERNE",
    "GERTE",
    "GESTE",
    "GETAN",
    "GETTO",
    "GETUE",
    "GGMBH",
    "GHANA",
    "GICHT",
    "GILDE",
    "GILET",
    "GIMPE",
    "GINKO",
    "GITTE",
    "GITZI",
    "GIZMO",
    "GJAID",
    "GLACE",
    "GLANS",
    "GLANZ",
    "GLATT",
    "GLEFE",
    "GLEIS",
    "GLEVE",
    "GLICK",
    "GLIED",
    "GLUMP",
    "GLUON",
    "GNADE",
    "GNAGI",
    "GNOME",
    "GOLEM",
    "GONZO",
    "GORKI",
    "GOSCH",
    "GOSSE",
    "GOUQI",
    "GRADE",
    "GRANT",
    "GRAPH",
    "GREBE",
    "GREBT",
    "GREFE",
    "GREIF",
    "GREIS",
    "GRELL",
    "GREVE",
    "GRIFF",
    "GRILL",
    "GRIND",
    "GRIPS",
    "GROKO",
    "GROLL",
    "GROSS",
    "GRUBE",
    "GRUFT",
    "GRUIT",
    "GRUEN",
    "GRUND",
    "GRUSS",
    "GUANO",
    "GULAG",
    "GULLY",
    "GUMMI",
    "GUNST",
    "GUOYU",
    "GUEPL",
    "GURKE",
    "GUEST",
    "GUSTO",
    "GUETE",
    "GYPSY",
    "GYROS",
    "HAARE",
    "HABEN",
    "HABIL",
    "HABIT",
    "HACKE",
    "HADER",
    "HADES",
    "HADJI",
    "HAFEN",
    "HAFTE",
    "HAGEL",
    "HAGER",
    "HAIDE",
    "HAIMA",
    "HAKEN",
    "HALDE",
    "HALLE",
    "HALLO",
    "HALLP",
    "HALON",
    "HAMAM",
    "HAEME",
    "HANDY",
    "HANOI",
    "HANSE",
    "HAPPE",
    "HAPPS",
    "HAPPY",
    "HAREM",
    "HARKE",
    "HASCH",
    "HASTA",
    "HAUBE",
    "HAUCH",
    "HAUEN",
    "HAUER",
    "HAUPT",
    "HEAVY",
    "HEBEN",
    "HEBES",
    "HECHT",
    "HECKE",
    "HEELS",
    "HEGEN",
    "HEIDE",
    "HEILE",
    "HEINI",
    "HEISS",
    "HELIX",
    "HELLE",
    "HELOT",
    "HEMST",
    "HENDL",
    "HENNE",
    "HERAB",
    "HERDE",
    "HEROE",
    "HEROS",
    "HERUM",
    "HETZE",
    "HEUER",
    "HEUET",
    "HEUTE",
    "HEXEN",
    "HEXER",
    "HICKI",
    "HICKS",
    "HIEBE",
    "HILFE",
    "HINAB",
    "HIPPE",
    "HIPPO",
    "HIRNI",
    "HIRSE",
    "HIRTE",
    "HITZE",
    "HMONG",
    "HOBBY",
    "HOBEL",
    "HOCKE",
    "HOCKT",
    "HODEN",
    "HOEFE",
    "HOEFT",
    "HOEHE",
    "HOLEN",
    "HOMES",
    "HONEN",
    "HONEY",
    "HONIG",
    "HOPEN",
    "HOPSE",
    "HORDE",
    "HORST",
    "HOSEN",
    "HOTEL",
    "HOTTE",
    "HUCKE",
    "HUKER",
    "HUMAN",
    "HUMID",
    "HUMOR",
    "HUENE",
    "HUNNI",
    "HUPEN",
    "HUREN",
    "HUSCH",
    "HUSSE",
    "HUETE",
    "HUETS",
    "HUTZE",
    "HYMEN",
    "HYMNE",
    "HYPEN",
    "IDEAL",
    "IDENT",
    "IDIOM",
    "IDIOT",
    "IDYLL",
    "IFRIT",
    "IGITT",
    "IHRER",
    "IKONE",
    "ILEUM",
    "ILEUS",
    "ILTIS",
    "IMAGE",
    "IMBER",
    "IMBUS",
    "IMKER",
    "IMMER",
    "IMMUN",
    "IMPFE",
    "INBUS",
    "INDEM",
    "INDES",
    "INDEX",
    "INDIK",
    "INDIZ",
    "INERT",
    "INFAM",
    "INFIX",
    "INFUS",
    "INGER",
    "INLAY",
    "INNEN",
    "INNIG",
    "INPUT",
    "INSEL",
    "INTIM",
    "INTRO",
    "IPSCH",
    "IRBIS",
    "IRDEN",
    "IRRER",
    "IRRIG",
    "ISCHE",
    "ISLAM",
    "ISNIK",
    "ISPEN",
    "ISSUE",
    "ITAKA",
    "ITZIG",
    "IURIS",
    "IWRIT",
    "JACHT",
    "JACKE",
    "JAGEN",
    "JALON",
    "JAPAN",
    "JAPSE",
    "JAERV",
    "JAUER",
    "JAUSE",
    "JEANS",
    "JEDEN",
    "JEDER",
    "JEMEN",
    "JENER",
    "JENES",
    "JESUS",
    "JETON",
    "JETZO",
    "JETZT",
    "JOINT",
    "JOKER",
    "JOKUS",
    "JOLLE",
    "JOLLY",
    "JOPPE",
    "JOULE",
    "JUBEL",
    "JUDAS",
    "JUDIZ",
    "JUICE",
    "JUIST",
    "JUMBO",
    "JUNGE",
    "JUNGS",
    "JUNTA",
    "JURIS",
    "JUROR",
    "JURTE",
    "JUWEL",
    "JUXEN",
    "KABEL",
    "KABIS",
    "KABUL",
    "KACKE",
    "KADER",
    "KAIRO",
    "KAKAO",
    "KAKKE",
    "KALLE",
    "KALME",
    "KAMEE",
    "KAMEL",
    "KAMEO",
    "KAMIN",
    "KAMPF",
    "KANAL",
    "KANAT",
    "KANIN",
    "KANNE",
    "KANON",
    "KANTE",
    "KAPER",
    "KAPOK",
    "KAPPE",
    "KAPUE",
    "KAPUK",
    "KARGE",
    "KARRE",
    "KARTE",
    "KASCH",
    "KAESE",
    "KASSA",
    "KASSE",
    "KASTE",
    "KASTL",
    "KASUS",
    "KATAR",
    "KATER",
    "KATZE",
    "KAUEN",
    "KEBAB",
    "KEHLE",
    "KEHRE",
    "KELCH",
    "KELLE",
    "KELTE",
    "KEMPO",
    "KENIA",
    "KENNE",
    "KERAK",
    "KERBE",
    "KERLS",
    "KERMS",
    "KERUB",
    "KERWA",
    "KERWE",
    "KERZE",
    "KETOS",
    "KETTE",
    "KEULE",
    "KHAKI",
    "KHMER",
    "KIADA",
    "KIEPE",
    "KIOSK",
    "KIPPA",
    "KIPPE",
    "KIRBE",
    "KIRRE",
    "KIRWA",
    "KISTE",
    "KITEN",
    "KLADE",
    "KLAGE",
    "KLAMM",
    "KLANG",
    "KLAPS",
    "KLAUE",
    "KLEID",
    "KLEIN",
    "KLICK",
    "KLIFF",
    "KLIMA",
    "KLIPP",
    "KLOSS",
    "KLOTT",
    "KLOTZ",
    "KLUFT",
    "KLUMP",
    "KLUNZ",
    "KNABE",
    "KNACK",
    "KNALL",
    "KNAPP",
    "KNAST",
    "KNAUF",
    "KNETE",
    "KNICK",
    "KNIEN",
    "KNIFF",
    "KNOFI",
    "KNOPF",
    "KNORZ",
    "KNUFF",
    "KNUST",
    "KOALA",
    "KOBEL",
    "KOBRA",
    "KODEX",
    "KOHLE",
    "KOKON",
    "KOLIK",
    "KOLIN",
    "KOELN",
    "KOLON",
    "KOMBI",
    "KOMET",
    "KOMIK",
    "KOMMA",
    "KONGO",
    "KONTO",
    "KONUS",
    "KOPAL",
    "KOPIE",
    "KOPPE",
    "KOPRA",
    "KORAN",
    "KOREA",
    "KORPS",
    "KORSO",
    "KOTAU",
    "KOTEN",
    "KOTIG",
    "KOTZE",
    "KOEZE",
    "KRACH",
    "KRAFT",
    "KRAGE",
    "KRAKE",
    "KRAMS",
    "KRANK",
    "KRAPP",
    "KRASS",
    "KRAUS",
    "KRAUT",
    "KRAXE",
    "KREBS",
    "KREDO",
    "KREIS",
    "KREME",
    "KREOL",
    "KRETA",
    "KRETE",
    "KREUZ",
    "KRIDA",
    "KRIEG",
    "KRIMI",
    "KRIPO",
    "KRISE",
    "KRONE",
    "KROPF",
    "KROSS",
    "KRUDE",
    "KRULL",
    "KRUME",
    "KRUMM",
    "KRUPP",
    "KTEIS",
    "KUBUS",
    "KUGEL",
    "KUEHL",
    "KUHLE",
    "KUEHN",
    "KUMIN",
    "KUMME",
    "KUEMO",
    "KUNDE",
    "KUNST",
    "KUPER",
    "KUPON",
    "KUPPE",
    "KURIE",
    "KURRE",
    "KURSE",
    "KURVE",
    "KUTIS",
    "KUTTE",
    "KYTOS",
    "LABEL",
    "LABEN",
    "LABIL",
    "LABOR",
    "LACHE",
    "LACHS",
    "LACKE",
    "LADEN",
    "LADIN",
    "LAGER",
    "LAKAI",
    "LAKEN",
    "LAMPE",
    "LANGE",
    "LANZE",
    "LARIO",
    "LAERM",
    "LARVE",
    "LASCH",
    "LASER",
    "LASSO",
    "LATEX",
    "LATTE",
    "LAUBE",
    "LAUCH",
    "LAUER",
    "LAUGE",
    "LAUNE",
    "LAUTE",
    "LAVAS",
    "LEBEN",
    "LEBER",
    "LEDER",
    "LEDIG",
    "LEERE",
    "LEGAL",
    "LEGAT",
    "LEGEN",
    "LEGER",
    "LEHEN",
    "LEHRE",
    "LEIER",
    "LEINE",
    "LEISE",
    "LENDE",
    "LENZE",
    "LEPRA",
    "LESBE",
    "LESEN",
    "LETAL",
    "LETZT",
    "LEUTE",
    "LEVEL",
    "LEVIS",
    "LEWAT",
    "LEXEM",
    "LEXER",
    "LEXIK",
    "LIBRA",
    "LICHT",
    "LIEBE",
    "LIEGE",
    "LIGHT",
    "LIKEN",
    "LIMES",
    "LIMIT",
    "LINDE",
    "LINIE",
    "LINKS",
    "LINSE",
    "LINUX",
    "LIPID",
    "LIPPE",
    "LISTE",
    "LITER",
    "LITZE",
    "LIVEN",
    "LIVID",
    "LOBBY",
    "LOBEN",
    "LOCKE",
    "LOCUS",
    "LOGGE",
    "LOGIK",
    "LOGIN",
    "LOHEN",
    "LOHLE",
    "LOEHR",
    "LOIPE",
    "LOKAL",
    "LOKUS",
    "LOLLI",
    "LORKE",
    "LOSEN",
    "LOSER",
    "LOTOS",
    "LOTSE",
    "LOUIS",
    "LOVER",
    "LOEWE",
    "LOYAL",
    "LUCHS",
    "LUDER",
    "LUFFA",
    "LUEGE",
    "LUGEN",
    "LUKAS",
    "LULLE",
    "LULLI",
    "LUMEN",
    "LUNCH",
    "LUNGE",
    "LUNKE",
    "LUNTE",
    "LUPUS",
    "LURCH",
    "LURIG",
    "LUSER",
    "LUETT",
    "LUXOR",
    "LUXUS",
    "LUZID",
    "LYRIK",
    "LYSSA",
    "MACHO",
    "MACHT",
    "MACIS",
    "MACKE",
    "MACRO",
    "MAFIA",
    "MAGEN",
    "MAGER",
    "MAGIE",
    "MAGOT",
    "MAGUS",
    "MAHUT",
    "MAIEN",
    "MAINZ",
    "MAKEL",
    "MAKRO",
    "MALAD",
    "MALEN",
    "MALER",
    "MALLE",
    "MALTA",
    "MALUM",
    "MALUS",
    "MAMMA",
    "MANEN",
    "MANGA",
    "MANIE",
    "MANKO",
    "MANNA",
    "MANOR",
    "MANSE",
    "MAORI",
    "MAPPE",
    "MARGE",
    "MARIE",
    "MARIN",
    "MARKE",
    "MARKT",
    "MAERZ",
    "MASCH",
    "MASSE",
    "MASEL",
    "MASEN",
    "MASER",
    "MASKE",
    "MASSE",
    "MASUT",
    "MATCH",
    "MATHE",
    "MATTE",
    "MATUR",
    "MAUER",
    "MAUKE",
    "MAURE",
    "MAUSI",
    "MAZIS",
    "MECKI",
    "MEILE",
    "MEINE",
    "MEISE",
    "MEIST",
    "MEKKA",
    "MELIS",
    "MEMME",
    "MENGE",
    "MENSA",
    "MENUE",
    "MERCE",
    "MERCI",
    "MERKS",
    "MESSE",
    "MESSI",
    "METAL",
    "METER",
    "METRO",
    "METTE",
    "METZE",
    "MEUTE",
    "MICRO",
    "MIELE",
    "MIENE",
    "MIESE",
    "MIETE",
    "MIEZE",
    "MIKRO",
    "MIKWE",
    "MILBE",
    "MILCH",
    "MILDE",
    "MILIE",
    "MILIZ",
    "MIMEN",
    "MIMIK",
    "MIMUS",
    "MINGA",
    "MINIM",
    "MINNA",
    "MINSK",
    "MINUS",
    "MIRAN",
    "MITTE",
    "MIXEN",
    "MIXER",
    "MOBIL",
    "MODAL",
    "MODEL",
    "MODEN",
    "MODER",
    "MODUL",
    "MODUS",
    "MOGUL",
    "MOLAR",
    "MOLLY",
    "MONAT",
    "MONEM",
    "MOPED",
    "MORAL",
    "MOESE",
    "MOSEL",
    "MOTEL",
    "MOTIV",
    "MOTOR",
    "MOTTE",
    "MOTTO",
    "MOUSE",
    "MPIKA",
    "MUCKE",
    "MUCKS",
    "MUCUS",
    "MUEDE",
    "MUFFE",
    "MUEHE",
    "MUHEN",
    "MULDE",
    "MUELL",
    "MULTI",
    "MUMPS",
    "MURIN",
    "MURKS",
    "MURTA",
    "MUSAK",
    "MUSSE",
    "MUSEL",
    "MUSIG",
    "MUSIK",
    "MUTER",
    "MUTIG",
    "MUTTI",
    "MUZAK",
    "MYRTE",
    "NABEL",
    "NABOB",
    "NACHT",
    "NACKT",
    "NADEL",
    "NADIR",
    "NAGEL",
    "NAGEN",
    "NAGER",
    "NAEHE",
    "NAHEN",
    "NAHUR",
    "NAMEN",
    "NANCY",
    "NANNY",
    "NARBE",
    "NARDE",
    "NASAL",
    "NASCH",
    "NATEL",
    "NATEM",
    "NATES",
    "NATIV",
    "NATUR",
    "NEBEL",
    "NEBEN",
    "NEBST",
    "NEGER",
    "NEPAL",
    "NEUER",
    "NEUME",
    "NEXUS",
    "NICHT",
    "NICKI",
    "NIETE",
    "NIGER",
    "NINJA",
    "NINPO",
    "NITON",
    "NOBEL",
    "NOECK",
    "NOCKE",
    "NOICH",
    "NOMEN",
    "NONNE",
    "NOTAR",
    "NOETE",
    "NOTEN",
    "NOTIZ",
    "NOVUM",
    "NUBUK",
    "NUGAT",
    "NUGGI",
    "NULPE",
    "NUTEN",
    "NUTTE",
    "OBERS",
    "OBHUT",
    "OCCHI",
    "OCHSE",
    "OCKEN",
    "ODELN",
    "OEDEM",
    "ODEUR",
    "OFFEN",
    "OHCHR",
    "OHEIM",
    "OEHMD",
    "OKAPI",
    "OLDIE",
    "OELEN",
    "OELIG",
    "OMAMA",
    "OMBUD",
    "ONKEL",
    "ONSET",
    "OPFER",
    "OPHIT",
    "OPIUM",
    "OEPNV",
    "OPTIK",
    "ORBIT",
    "ORDAL",
    "ORDEN",
    "ORDER",
    "ORGAN",
    "ORGEL",
    "ORGON",
    "ORKAN",
    "ORKUS",
    "ORLOG",
    "ORLOP",
    "ORNAT",
    "ORTEN",
    "OSCAR",
    "OSCHI",
    "OSTEN",
    "OTTER",
    "OUIJA",
    "OUTEN",
    "OZEAN",
    "PACHT",
    "PAGER",
    "PAKET",
    "PALME",
    "PAMPA",
    "PAMPE",
    "PANEL",
    "PANIK",
    "PANNE",
    "PAPAT",
    "PAPEL",
    "PAPER",
    "PAPPE",
    "PAPST",
    "PARAT",
    "PARIA",
    "PARIS",
    "PARKA",
    "PARTE",
    "PARTY",
    "PASAK",
    "PASSE",
    "PASTA",
    "PASTE",
    "PATCH",
    "PATIN",
    "PATTE",
    "PAUSE",
    "PEDAL",
    "PEDRO",
    "PEDUM",
    "PEGEL",
    "PELLE",
    "PENIS",
    "PENNE",
    "PERDU",
    "PERLE",
    "PERSO",
    "PESEN",
    "PETAR",
    "PETER",
    "PETUH",
    "PETZE",
    "PFAHL",
    "PFALZ",
    "PFAND",
    "PFERD",
    "PFOTE",
    "PFUHL",
    "PFUND",
    "PHAGE",
    "PHASE",
    "PHATT",
    "PIÁN",
    "PIANO",
    "PIECE",
    "PIEKS",
    "PIESE",
    "PIETA",
    "PIGGE",
    "PIKEN",
    "PILLE",
    "PILOT",
    "PIMPF",
    "PINIE",
    "PINKE",
    "PINNE",
    "PINTE",
    "PINUS",
    "PIOTR",
    "PIRAT",
    "PIROL",
    "PISEE",
    "PISSE",
    "PISTE",
    "PITER",
    "PITZE",
    "PIXEL",
    "PIZZA",
    "PJOTR",
    "PLAGE",
    "PLANE",
    "PLAST",
    "PLATT",
    "PLATZ",
    "PLAYA",
    "PLEBS",
    "PLENT",
    "PLINS",
    "PLINZ",
    "PLUMP",
    "PLUTO",
    "PODEX",
    "POFEN",
    "POKAL",
    "POLAR",
    "POLEI",
    "POLEN",
    "POLIO",
    "POLYP",
    "PONOR",
    "PONTE",
    "POPEL",
    "PORRE",
    "PORTO",
    "POSEN",
    "POSSE",
    "POWER",
    "PRAHA",
    "PRAIA",
    "PRALL",
    "PRANA",
    "PRANK",
    "PREIS",
    "PRIEM",
    "PRIMA",
    "PRINZ",
    "PRISE",
    "PROBE",
    "PROFI",
    "PROLL",
    "PROLO",
    "PROMI",
    "PROSA",
    "PROTZ",
    "PROVO",
    "PROXY",
    "PRUNK",
    "PUDEL",
    "PUDER",
    "PUHE,",
    "PULEN",
    "PULKA",
    "PULLE",
    "PULLI",
    "PULPA",
    "PULPE",
    "PUMPE",
    "PUMPS",
    "PUNKT",
    "PUNZE",
    "PUPPE",
    "PURIM",
    "PUSSY",
    "PUSTE",
    "PUTER",
    "PUETT",
    "PUETZ",
    "PUTZE",
    "PYLON",
    "PYRIT",
    "QANAT",
    "QUALI",
    "QUALM",
    "QUANT",
    "QUARK",
    "QUARZ",
    "QUASI",
    "QUBIT",
    "QUEEN",
    "QUEER",
    "QUELL",
    "QUERE",
    "QUEUE",
    "QUIRL",
    "QUITO",
    "QUITT",
    "QUOTE",
    "RABAG",
    "RABAT",
    "RABBI",
    "RABEN",
    "RACHE",
    "RADAR",
    "RADAU",
    "RADIO",
    "RADIX",
    "RADON",
    "RAGEN",
    "RAIFE",
    "RAKEL",
    "RAMBO",
    "RAMPE",
    "RANCH",
    "RANDE",
    "RANEN",
    "RANFL",
    "RANFT",
    "RANGE",
    "RAPID",
    "RAPPE",
    "RASCH",
    "RASEN",
    "RASSE",
    "RASUR",
    "RATEL",
    "RATEN",
    "RATIO",
    "RAUCH",
    "RAUFE",
    "RAUKE",
    "RAUPE",
    "RAUTE",
    "RAYON",
    "REALA",
    "REALO",
    "REBBE",
    "REBUS",
    "RECHT",
    "RECKE",
    "RECTE",
    "RECTO",
    "REDEN",
    "REEDE",
    "REELL",
    "REGAL",
    "REGAT",
    "REGEL",
    "REGEN",
    "REGIE",
    "REICH",
    "REIDE",
    "REIEN",
    "REIFE",
    "REIHE",
    "REISE",
    "REITE",
    "REMIS",
    "RENAL",
    "RENEE",
    "RENTE",
    "RESCH",
    "RESET",
    "RESTE",
    "RETRO",
    "REUIG",
    "REVAL",
    "RHEIN",
    "RICIN",
    "RICKE",
    "RIEFE",
    "RIEGE",
    "RIESE",
    "RIGOR",
    "RILLE",
    "RINDE",
    "RINNE",
    "RISPE",
    "RITUS",
    "RITZE",
    "RIZIN",
    "ROBBE",
    "ROBOT",
    "RODEL",
    "RODEN",
    "ROLLE",
    "ROLLI",
    "ROLLO",
    "ROMAN",
    "RONDE",
    "ROSIG",
    "ROTER",
    "ROTTE",
    "ROTZE",
    "ROUTE",
    "ROWDY",
    "ROYAL",
    "RUEBE",
    "RUBEL",
    "RUBIA",
    "RUEDE",
    "RUDEL",
    "RUDER",
    "RUEFE",
    "RUFEN",
    "RUEGE",
    "RUHEN",
    "RUHIG",
    "RUINE",
    "RUMPF",
    "RUNDE",
    "RUPPE",
    "RURAL",
    "RUSSE",
    "RUSTE",
    "RUTTE",
    "SACCO",
    "SACHA",
    "SACHE",
    "SACHS",
    "SACHT",
    "SAEEN",
    "SAEGE",
    "SAGEN",
    "SAGER",
    "SAGTE",
    "SAHNE",
    "SAKKO",
    "SALAT",
    "SALBE",
    "SALDO",
    "SALES",
    "SALIX",
    "SALON",
    "SALTO",
    "SALUE",
    "SALUT",
    "SALVE",
    "SAMEN",
    "SAMER",
    "SANAA",
    "SANFT",
    "SANKA",
    "SAPPE",
    "SARDE",
    "SASSE",
    "SATAN",
    "SATYR",
    "SAUCE",
    "SAUER",
    "SAUNA",
    "SAUSE",
    "SCHAF",
    "SCHAH",
    "SCHAL",
    "SCHAM",
    "SCHAR",
    "SCHAS",
    "SCHAU",
    "SCHEU",
    "SCHMU",
    "SCHON",
    "SCHOT",
    "SCHUB",
    "SCHUH",
    "SCHUR",
    "SCOOP",
    "SECHS",
    "SEELE",
    "SEGEL",
    "SEGEN",
    "SEHEN",
    "SEHER",
    "SEIDE",
    "SEIFE",
    "SEIHE",
    "SEINE",
    "SEITE",
    "SEK I",
    "SEKTE",
    "SELIG",
    "SEMER",
    "SEMIT",
    "SENAT",
    "SENGE",
    "SENIL",
    "SENKE",
    "SEOUL",
    "SERIE",
    "SERUM",
    "SEXEN",
    "SEXUS",
    "SHIRT",
    "SHOAH",
    "SIADH",
    "SIBIU",
    "SICHT",
    "SIENA",
    "SILBE",
    "SILEX",
    "SINTI",
    "SIPPE",
    "SIRUP",
    "SITTE",
    "SKALA",
    "SKALP",
    "SKULL",
    "SKUNK",
    "SLANG",
    "SLASH",
    "SLEEP",
    "SLICK",
    "SLOMO",
    "SMART",
    "SMSEN",
    "SMURF",
    "SMUTA",
    "SNACK",
    "SNARE",
    "SO SO",
    "SOFIA",
    "SOGAR",
    "SOHLE",
    "SOLCH",
    "SOMIT",
    "SONAR",
    "SONDE",
    "SONNE",
    "SONOR",
    "SONST",
    "SOOFT",
    "SOPOR",
    "SORGE",
    "SORRY",
    "SORTE",
    "SOSSE",
    "SOUND",
    "SOWAS",
    "SOWIE",
    "SOZIS",
    "SPACE",
    "SPACK",
    "SPAHL",
    "SPALT",
    "SPANN",
    "SPASS",
    "SPASS",
    "SPAST",
    "SPAET",
    "SPATZ",
    "SPECK",
    "SPEED",
    "SPEER",
    "SPEIK",
    "SPEIL",
    "SPEIS",
    "SPELT",
    "SPELZ",
    "SPEZI",
    "SPEZL",
    "SPIEL",
    "SPILL",
    "SPINA",
    "SPIND",
    "SPINT",
    "SPION",
    "SPITZ",
    "SPLIT",
    "SPORK",
    "SPORT",
    "SPOTT",
    "SPREU",
    "SPRIT",
    "SPRUE",
    "SPULE",
    "SPUND",
    "SPURT",
    "SPUSI",
    "SQUAW",
    "STAAT",
    "STABI",
    "STACK",
    "STADT",
    "STAGE",
    "STAHL",
    "STALL",
    "STAMM",
    "STAND",
    "STAPI",
    "STARK",
    "STARR",
    "START",
    "STASE",
    "STASI",
    "STAUB",
    "STEAK",
    "STEBA",
    "STEIF",
    "STEIG",
    "STEIL",
    "STEIN",
    "STELE",
    "STENO",
    "STENT",
    "STENZ",
    "STEPP",
    "STERN",
    "STERZ",
    "STETS",
    "STEWI",
    "STICH",
    "STICK",
    "STIEL",
    "STIER",
    "STIFT",
    "STIKO",
    "STILL",
    "STINO",
    "STIPS",
    "STOCK",
    "STOFF",
    "STOLZ",
    "STOMA",
    "STOMT",
    "STOPP",
    "STORE",
    "STORY",
    "STOSS",
    "STRAD",
    "STRAT",
    "STREB",
    "STRIP",
    "STROM",
    "STUBE",
    "STUBI",
    "STUCK",
    "STUDI",
    "STUFE",
    "STUFF",
    "STUHL",
    "STUKA",
    "STUMM",
    "STUNK",
    "STURM",
    "STURZ",
    "STUSS",
    "STUTE",
    "STUTZ",
    "STVZO",
    "STYLE",
    "SUADA",
    "SUADE",
    "SUCHE",
    "SUCHT",
    "SUCRE",
    "SUDAN",
    "SUDEL",
    "SUFIK",
    "SUITE",
    "SUJET",
    "SUMME",
    "SUMPF",
    "SUMSE",
    "SUPER",
    "SUPPE",
    "SUREN",
    "SUESS",
    "SWIFT",
    "SYSOP",
    "SZENE",
    "TABAK",
    "TACHO",
    "TADEL",
    "TAFEL",
    "TAG X",
    "TAGEN",
    "TAIGA",
    "TALER",
    "TALJE",
    "TALUS",
    "TAMIL",
    "TANGA",
    "TANGO",
    "TANKE",
    "TANNE",
    "TANTE",
    "TARIF",
    "TARTU",
    "TASER",
    "TASSE",
    "TASTE",
    "TATEN",
    "TATZE",
    "TAUEN",
    "TAUSI",
    "TAXIS",
    "TAXON",
    "TAXUS",
    "TEDDY",
    "TEEEI",
    "TEICH",
    "TEILE",
    "TEILS",
    "TEINT",
    "TELEX",
    "TELKO",
    "TEMPO",
    "TENNE",
    "TENNO",
    "TENOR",
    "TERRA",
    "TESLA",
    "TETRA",
    "TEUER",
    "TEUTO",
    "THEIN",
    "THEKE",
    "THEMA",
    "THEME",
    "THESE",
    "THING",
    "THRON",
    "TIARA",
    "TIBET",
    "TIBIA",
    "TIDEN",
    "TIEFE",
    "TIERE",
    "TIGER",
    "TILDE",
    "TILIA",
    "TIMER",
    "TIMUR",
    "TINEA",
    "TIPPO",
    "TISCH",
    "TITAN",
    "TITEL",
    "TITER",
    "TITTE",
    "TOAST",
    "TOBAK",
    "TOBEN",
    "TODDY",
    "TODEL",
    "TOEFF",
    "TOFTE",
    "TOKEN",
    "TOKIO",
    "TOKYO",
    "TOELE",
    "TOLLE",
    "TOMIS",
    "TOMMY",
    "TOMOI",
    "TONNE",
    "TONUS",
    "TOPIK",
    "TOPOR",
    "TOPOS",
    "TOERN",
    "TORSO",
    "TORTE",
    "TOSEN",
    "TOTAL",
    "TOTEM",
    "TOTER",
    "TOUCH",
    "TOURI",
    "TOWER",
    "TOXIN",
    "TRABI",
    "TRACK",
    "TRADE",
    "TRAFO",
    "TRAGE",
    "TRAKT",
    "TRAMP",
    "TRANK",
    "TRARA",
    "TRASH",
    "TRAUM",
    "TRAUT",
    "TRECK",
    "TREFF",
    "TREMA",
    "TREND",
    "TREUE",
    "TRIAC",
    "TRIAS",
    "TRICK",
    "TRIEB",
    "TRIFT",
    "TRINE",
    "TRIST",
    "TRITT",
    "TROER",
    "TROLL",
    "TROSS",
    "TROST",
    "TROTT",
    "TROTZ",
    "TRUEB",
    "TRUCK",
    "TRUHE",
    "TRUNK",
    "TRUPP",
    "TRUST",
    "TRUTE",
    "TSUBA",
    "TSUGA",
    "TUCKE",
    "TULPE",
    "TUMOR",
    "TUNEN",
    "TUNIS",
    "TUNKE",
    "TUPPE",
    "TURBO",
    "TUERE",
    "TUSSE",
    "TUSSI",
    "TUETE",
    "TUTOR",
    "TVOED",
    "TWEET",
    "TWILL",
    "TWIST",
    "TYLOM",
    "TYPUS",
    "UEBEL",
    "UEBEN",
    "UEBER",
    "UBOOT",
    "UDINE",
    "UDSSR",
    "ULCUS",
    "ULKEN",
    "ULKIG",
    "ULKUS",
    "ULTRA",
    "ULURU",
    "UMAMI",
    "UMBAU",
    "UMBER",
    "UMBRA",
    "UMWEG",
    "UMZUG",
    "UNART",
    "UNBAR",
    "UNCDF",
    "UNCRD",
    "UNDCP",
    "UNFPA",
    "UNFUG",
    "UNGUT",
    "UNHCR",
    "UNION",
    "UNKEN",
    "UNMUT",
    "UNOPS",
    "UNRAT",
    "UNRWA",
    "UNSRE",
    "UNTAT",
    "UNTEN",
    "UNTER",
    "UNTOT",
    "UPPEN",
    "URAHN",
    "URALT",
    "URBAN",
    "URBAR",
    "URIAL",
    "UROMA",
    "UROPA",
    "URTYP",
    "USANZ",
    "UTZEN",
    "UVULA",
    "VADUZ",
    "VAPEN",
    "VARIA",
    "VARIO",
    "VARIX",
    "VATER",
    "VEGAN",
    "VENUS",
    "VERDI",
    "VERSO",
    "VERUM",
    "VERVE",
    "VESEN",
    "VESPA",
    "VESTA",
    "VIDEO",
    "VIECH",
    "VIELE",
    "VIGIL",
    "VILLA",
    "VINCA",
    "VIOLA",
    "VIOLE",
    "VIPER",
    "VIRAL",
    "VIRGA",
    "VIRGO",
    "VIRIL",
    "VIRON",
    "VIRUS",
    "VISUM",
    "VISUR",
    "VISUS",
    "VITAL",
    "VLASI",
    "VLIES",
    "VOGEL",
    "VOIGT",
    "VOILE",
    "VOKAL",
    "VOLAR",
    "VOELK",
    "VOLKS",
    "VOLTE",
    "VORAB",
    "VORAN",
    "VORIG",
    "VORNE",
    "VOTEN",
    "VOTUM",
    "VOTZE",
    "VOXEL",
    "VULGO",
    "VULVA",
    "VW AG",
    "WAAGE",
    "WAARI",
    "WACHE",
    "WACHS",
    "WACHT",
    "WAFER",
    "WAFFE",
    "WAGEN",
    "WAGON",
    "WAISE",
    "WALZE",
    "WAMPE",
    "WANGE",
    "WANNE",
    "WANST",
    "WANZE",
    "WAREN",
    "WARTE",
    "WARUM",
    "WARVE",
    "WARZE",
    "WATEN",
    "WATTE",
    "WEBEN",
    "WEBER",
    "WEDEL",
    "WEGEN",
    "WEHEN",
    "WEICH",
    "WEIDE",
    "WEIHE",
    "WEILE",
    "WEISS",
    "WEISE",
    "WEITE",
    "WELLE",
    "WELPE",
    "WENDE",
    "WENIG",
    "WENNS",
    "WERFT",
    "WERST",
    "WERTE",
    "WERTH",
    "WESEN",
    "WESPE",
    "WESSI",
    "WESTE",
    "WETTE",
    "WICHT",
    "WIDER",
    "WIDUM",
    "WIEGE",
    "WIESE",
    "WIESN",
    "WIESO",
    "WILLE",
    "WILNA",
    "WINDE",
    "WIPPE",
    "WISCH",
    "WITWE",
    "WOBEI",
    "WOCHE",
    "WODKA",
    "WOGEN",
    "WOHER",
    "WOLKE",
    "WOLLE",
    "WOMIT",
    "WONNE",
    "WOOTZ",
    "WORAN",
    "WOTAN",
    "WOVON",
    "WRACK",
    "WRUKE",
    "WUCHS",
    "WUCHT",
    "WULST",
    "WUMME",
    "WUMPE",
    "WUNDE",
    "WURDE",
    "WUERM",
    "WURST",
    "WUEST",
    "XANAX",
    "XANNY",
    "XENON",
    "XYLEM",
    "XYLIT",
    "YACHT",
    "YOHUR",
    "ZACKE",
    "ZAIRE",
    "ZANGE",
    "ZDLER",
    "ZECHE",
    "ZECKE",
    "ZEHNT",
    "ZELLE",
    "ZELOT",
    "ZENIT",
    "ZEUGE",
    "ZEUGS",
    "ZICKE",
    "ZIDER",
    "ZIEGE",
    "ZIELE",
    "ZIESE",
    "ZIGAN",
    "ZILLE",
    "ZINKE",
    "ZINNE",
    "ZIPPE",
    "ZIRBE",
    "ZIRKA",
    "ZIRPE",
    "ZITAT",
    "ZIVIL",
    "ZONAL",
    "ZORES",
    "ZOTIG",
    "ZUBAU",
    "ZUBER",
    "ZUCHT",
    "ZUDEM",
    "ZUGIG",
    "ZUMAL",
    "ZUNFT",
    "ZUNGE",
    "ZUTAT",
    "ZUTUN",
    "ZUVOR",
    "ZUZUG",
    "ZWANG",
    "ZWECK",
    "ZWEIG",
    "ZWERG",
    "ZWIRN",
    "ZWIST",
];