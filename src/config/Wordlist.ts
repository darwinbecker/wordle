// https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/words.ts#L77
export const WORD_OF_THE_DAY = () => {
  const epochMs = new Date(2022, 0).valueOf(); // January 1, 2022 Game Epoch
  const now = Date.now();
  const msInDay = 86400000;
  const timezoneOffset = 18000000; // 5 hours => next word is at 6:00am
  const index = Math.floor((now - timezoneOffset - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs + timezoneOffset;
  // console.log("----WORD_OF_THE_DAY-----");
  // console.log(epochMs);
  // console.log(index);
  // console.log(WORDLIST.length);
  // console.log(index % WORDLIST.length);
  // console.log(WORDLIST[index % WORDLIST.length].toUpperCase());
  // console.log(nextday);
  // console.log(new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)));
  // console.log();

  return {
    solution: WORDLIST[index % WORDLIST.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  };
};

export const getRandomWord = (): string => {
  const random = Math.floor(Math.random() * WORDLIST.length);
  console.log("solution:", WORDLIST[random]);
  return WORDLIST[random];
};

export const getRandomWordFromDictionary = (dictionary: object): string => {
  const random = Math.floor(Math.random() * Object.keys(dictionary).length);
  console.log("solution:", Object.keys(dictionary)[random]);
  return Object.keys(dictionary)[random];
};

const WORDLIST = [
  "Abbau",
  "Abend",
  "Abgas",
  "Abruf",
  "Abzug",
  "Achse",
  "Acker",
  "Adern",
  "adieu",
  "Adler",
  "adlig",
  "Admin",
  // "Affix",
  "Agent",
  "Agrar",
  "Ahorn",
  "Aktie",
  "aktiv",
  // "Aktor",
  "Alarm",
  "Album",
  // "alert",
  "Alias",
  "Alibi",
  "Alien",
  // "Alkan",
  // "Alken",
  // "Alkin",
  // "Alkor",
  "Allee",
  "alles",
  "Alpen",
  "Alpha",
  // "alpin",
  "Altar",
  "Alter",
  "Ampel",
  "Amsel",
  "Anbau",
  "Angel",
  "Angst",
  "Anime",
  "Anker",
  "Anruf",
  "antik",
  "Anzug",
  "Apfel",
  "Aphel",
  "April",
  "Areal",
  "Arena",
  "Armee",
  "Armut",
  "Aroma",
  "Array",
  "artig",
  "Asche",
  "Asien",
  "Atlas",
  "atmen",
  "Audio",
  "Augen",
  "Autor",
  "axial",
  "Axiom",
  "Azubi",
  "Backe",
  "baden",
  "Bande",
  "Baron",
  "Basar",
  "Basis",
  "Bauch",
  "bauen",
  "Bauer",
  "Beben",
  "Beere",
  "Belag",
  "Beleg",
  "Berge",
  "Beruf",
  "Besen",
  "beten",
  "Beule",
  "Beute",
  "Bezug",
  "Bibel",
  "Biber",
  "Biene",
  "Binde",
  "Birke",
  "Birne",
  "Bitte",
  "Blase",
  "blass",
  "Blatt",
  "Blech",
  "Blick",
  "blind",
  "Blitz",
  "Block",
  "blond",
  "Bluff",
  "Blume",
  "Boden",
  "Bogen",
  "Bohne",
  "Bombe",
  "Bonus",
  "Botox",
  "Boxen",
  "Boxer",
  "Brand",
  "Braue",
  "braun",
  "Braut",
  "Brett",
  "Brief",
  "Brise",
  "Bruch",
  "Buche",
  "Bucht",
  "Busch",
  "Cache",
  "Cameo",
  "Cargo",
  "Cello",
  "Chaos",
  "Chaot",
  "Cheat",
  "Chemo",
  "Chili",
  "Chips",
  "Chlor",
  "Chrom",
  "circa",
  "Clown",
  "Coach",
  "coden",
  "Codex",
  "Comic",
  "Couch",
  "Cover",
  "Crash",
  "crazy",
  "Creme",
  "Curry",
  "Dachs",
  "Dampf",
  "danke",
  "Datei",
  "Daten",
  "Dativ",
  "Datum",
  "Dauer",
  "Decke",
  "Degen",
  "Dekan",
  "Delle",
  "Delta",
  "Denim",
  "Depot",
  "Diaet",
  "dicht",
  "Dicke",
  "Diele",
  "Dinge",
  "Disko",
  "Dolch",
  "Donau",
  "Donut",
  "dopen",
  "Dosis",
  "Drama",
  "Drang",
  "dreck",
  "Drill",
  "Druck",
  "Duett",
  "Durst",
  "Ebene",
  "Echse",
  "eckig",
  "Effet",
  "ehren",
  "Eiche",
  "Eifer",
  "eilig",
  "Eimer",
  "Eisen",
  "eitel",
  "Eiter",
  "Elite",
  "Email",
  "Emoji",
  "Engel",
  "Enkel",
  "enorm",
  "Enter",
  "Enzym",
  "erben",
  "Erbse",
  "Ernte",
  // "Erpel",
  "essen",
  "Essig",
  "Etage",
  "Ethik",
  "etwas",
  "Event",
  "exakt",
  "extra",
  "Fabel",
  "Faden",
  "Fahne",
  "Falke",
  "Falle",
  "Falte",
  "Farbe",
  "Faser",
  "Fauna",
  "Faust",
  "Fazit",
  "Feder",
  "Feier",
  "feige",
  "Feind",
  "Felge",
  "Ferne",
  "Ferse",
  "Fetus",
  "Feuer",
  "Fiale",
  "Figur",
  "Filet",
  "Finte",
  "Firma",
  "Fisch",
  "flach",
  "Fleck",
  "flink",
  "Flora",
  "FLOSS",
  "Fluch",
  "Fluss",
  "Flyer",
  "Foehn",
  "Fokus",
  "Folge",
  "Folie",
  "Forst",
  // "Foyer",
  "frech",
  "fremd",
  "Frist",
  // "Front",
  "Frost",
  // "frueh",
  "Frust",
  "Fuchs",
  "Gabel",
  "Galle",
  "garen",
  "Gasse",
  "Gebet",
  "Gebot",
  "Geige",
  "Geist",
  "Gelee",
  "Genie",
  "Genom",
  "Genre",
  "Glanz",
  "glatt",
  "Gnade",
  "Graph",
  "Griff",
  "Grill",
  "Grube",
  "Gruft",
  "Grund",
  "Gummi",
  "Gurke",
  "Guete",
  "Haare",
  "Hacke",
  "Hafen",
  "Hagel",
  "Halle",
  "Hallo",
  "Handy",
  "Haube",
  "Hauch",
  "heben",
  "Hecht",
  "Hecke",
  // "Helix",
  "Henne",
  "Herde",
  "heute",
  "Hilfe",
  "Hirte",
  "Hitze",
  "Hobby",
  "Hocke",
  "Honig",
  "Hosen",
  // "human",
  // "humid",
  "Humor",
  "ideal",
  "Ikone",
  "Imker",
  "immun",
  "Index",
  "Input",
  "Insel",
  // "intim",
  "Jacht",
  "Jacke",
  "Jagen",
  "Jeans",
  "Jesus",
  "Joker",
  "Jubel",
  "Junge",
  "Juror",
  "Juwel",
  "Kabel",
  // "Kader",
  "Kakao",
  "Kamel",
  "Kamin",
  "Kampf",
  "Kanal",
  "Kanne",
  // "Kante",
  "Kappe",
  "Karte",
  "Kaese",
  "Kasse",
  // "Kasus",
  "Kater",
  "Katze",
  // "Kebab",
  // "Kelle",
  "Kerze",
  "Kette",
  "Keule",
  // "Khaki",
  "Kiosk",
  "Kiste",
  "Klage",
  "Klang",
  // "Klaue",
  "Kleid",
  "klein",
  "Klick",
  "Klima",
  "Kluft",
  "Knall",
  "knapp",
  "Knete",
  "Knopf",
  "Koala",
  // "Kodex",
  "Kohle",
  "Komet",
  "Komma",
  "Konto",
  "Kopie",
  "Kraft",
  "krank",
  "Kraut",
  "Krebs",
  "Kreis",
  // "Kreme",
  "Kreuz",
  "Krieg",
  "Krimi",
  "Krone",
  "Kugel",
  // "kuehl",
  "Kunde",
  "Kunst",
  "Kurve",
  // "Label",
  "Labor",
  "lachs",
  // "laden",
  "Lager",
  "Lampe",
  "Lanze",
  "Laerm",
  "Larve",
  "Laser",
  "Lasso",
  "Latex",
  "Laube",
  "Lauch",
  "Laune",
  "Leben",
  "Leber",
  "Leder",
  "Leere",
  "legal",
  "Lehre",
  "Leine",
  "leise",
  "lesen",
  "Leute",
  "Level",
  "Licht",
  "Liebe",
  "Liege",
  "Limit",
  "Linie",
  "links",
  "Linse",
  "Linux",
  "Lippe",
  "Liste",
  "Liter",
  // "Lobby",
  // "loben",
  "Locke",
  "Logik",
  // "Login",
  "Lokal",
  "losen",
  "Loewe",
  "loyal",
  "Luchs",
  "Luege",
  // "Lunch",
  "Lunge",
  // "Lunte",
  "Luxus",
  // "luzid",
  // "Lyrik",
  "Macht",
  "Mafia",
  "Magen",
  "Magie",
  "malen",
  "Maler",
  "Manga",
  "Mappe",
  "Marke",
  "Markt",
  "Maerz",
  "Masse",
  "Maske",
  "Masse",
  // "Match",
  "Mathe",
  "Matte",
  "Mauer",
  "Meile",
  // "Mekka",
  "Menge",
  "Mensa",
  "Messe",
  "Metal",
  "Meter",
  // "Metro",
  // "Milbe",
  "Milch",
  // "Miliz",
  "Mimik",
  "minus",
  "Mitte",
  "mixen",
  "Mixer",
  "Model",
  "Modul",
  "Modus",
  "Monat",
  // "Moped",
  "Moral",
  // "Motel",
  "Motiv",
  "Motor",
  "Motte",
  "Motto",
  "muede",
  "Muehe",
  "Muell",
  "Musik",
  "mutig",
  // "Myrte",
  "Nacht",
  "Nadel",
  "Nagel",
  "Nager",
  "Narbe",
  "nasal",
  // "nativ",
  "Natur",
  "Nebel",
  "Niete",
  "Ninja",
  "nobel",
  "Nomen",
  "Nonne",
  "Notar",
  "Noten",
  "Notiz",
  "Nugat",
  "Obhut",
  "Ochse",
  "offen",
  "Onkel",
  "Opium",
  "Optik",
  "Orbit",
  "Orden",
  "Organ",
  "Orgel",
  "Orkan",
  // "Oscar",
  "Osten",
  "Otter",
  "Ozean",
  "Pacht",
  "Paket",
  "Palme",
  // "Panel",
  "Panik",
  "Panne",
  "Pappe",
  "Papst",
  "Party",
  "Pasta",
  "Paste",
  "Pause",
  "Pedal",
  "Pegel",
  "Perle",
  "Pfahl",
  "Pfand",
  "Pferd",
  "Pfote",
  "Pfund",
  "Phase",
  "Piano",
  "Pille",
  "Pilot",
  "Pirat",
  "Pixel",
  "Pizza",
  "Plage",
  "Plane",
  "platt",
  "Platz",
  // "Pluto",
  "Pokal",
  "polar",
  // "Polen",
  "posen",
  // "Power",
  "Preis",
  "prima",
  "Prinz",
  "Prise",
  "Probe",
  "Profi",
  "Promi",
  "Pudel",
  "Puder",
  "Pulli",
  "Pumpe",
  "Punkt",
  "Puppe",
  "Qualm",
  "Quark",
  "Quarz",
  // "quasi",
  "Queen",
  // "queer",
  "Quere",
  // "Queue",
  "Quote",
  "Rache",
  "Radar",
  "Radio",
  "Rampe",
  // "Ranch",
  // "rapid",
  "rasch",
  "Rasen",
  "Rasse",
  "Rasur",
  "Rauch",
  "Raupe",
  "Raute",
  "Recht",
  "reden",
  "Regal",
  "Regel",
  "Regen",
  "Regie",
  "reich",
  "Reife",
  "Reihe",
  "Reise",
  // "Remis",
  "Rente",
  // "Reset",
  "retro",
  // "Rhein",
  "Riese",
  "Rinde",
  "Rinne",
  "Robbe",
  "Rolle",
  "Roman",
  "Route",
  // "royal",
  "Ruebe",
  "Rudel",
  "Ruder",
  "rufen",
  "ruhig",
  "Ruine",
  "Rumpf",
  "Runde",
  "Sache",
  // "saeen",
  "Saege",
  "sagen",
  "Sager",
  "Sahne",
  "Sakko",
  "Salat",
  "Salbe",
  "Saldo",
  // "Sales",
  "Salto",
  "Samen",
  "sanft",
  "Satan",
  "Sauce",
  "sauer",
  "Sauna",
  "Schaf",
  "schal",
  "Scheu",
  "Schuh",
  "Seele",
  "Segel",
  "sehen",
  "Seher",
  "Seide",
  "Seife",
  "Seite",
  "Sekte",
  "Senat",
  "Serie",
  "Shirt",
  "Sicht",
  "Silbe",
  "Sirup",
  "Sitte",
  "Skala",
  // "Slash",
  // "smart",
  // "Snack",
  "Sohle",
  "Sonar",
  "Sonne",
  "Sorge",
  "Sorte",
  "Sosse",
  "Sound",
  "Spalt",
  "Spass",
  "spaet",
  "Spatz",
  "Speck",
  "Speer",
  "Spiel",
  "Spind",
  "Spion",
  "spitz",
  "Sport",
  "Spott",
  "Sprit",
  "Spule",
  "Staat",
  "Stadt",
  "Stahl",
  "Stall",
  "Stamm",
  "Stand",
  "stark",
  "Start",
  "Staub",
  "Steak",
  "steif",
  // "Steig",
  "steil",
  "Stein",
  "Stern",
  "Stich",
  "Stiel",
  "Stier",
  "Stift",
  "still",
  "Stock",
  "Stoff",
  "stolz",
  "Stopp",
  // "Story",
  "Strom",
  "Stube",
  "Stufe",
  "stumm",
  "Sturm",
  "Sturz",
  "Style",
  "Suche",
  "Sucht",
  "Suite",
  "Summe",
  "Sumpf",
  "super",
  "Suppe",
  "suess",
  "Szene",
  "Tabak",
  "Tacho",
  "Tadel",
  "Tafel",
  "Taler",
  "Tamil",
  "Tango",
  "Tanne",
  "Tante",
  "Tarif",
  "Taser",
  "Tasse",
  "Taste",
  "Taten",
  // "Tatze",
  // "Teddy",
  "Teich",
  "Teint",
  "Tempo",
  "teuer",
  "Theke",
  "Thema",
  "These",
  "Thron",
  "Tiefe",
  "Tiere",
  "Tiger",
  // "Tilde",
  "Timer",
  "Tisch",
  "Titan",
  "Titel",
  "Toast",
  // "Tobak",
  "Tonne",
  "Torso",
  "Torte",
  "total",
  "Totem",
  // "Tower",
  "Trage",
  "Trank",
  "Traum",
  "Trend",
  "Treue",
  "Trick",
  "trist",
  "Tritt",
  "Troll",
  "Trost",
  "trueb",
  // "Truck",
  "Truhe",
  "Trupp",
  "Tulpe",
  "Tumor",
  "Turbo",
  "Tuete",
  "Tutor",
  // "Tweet",
  // "Twist",
  // "uebel",
  "ueben",
  "Uboot",
  "Ultra",
  "Umbau",
  "Umweg",
  "Umzug",
  "Unfug",
  "Union",
  "unten",
  "uralt",
  "Vater",
  "vegan",
  "Venus",
  "Vespa",
  "Video",
  "viele",
  "Villa",
  "viral",
  "Virus",
  "Visum",
  "vital",
  "Vogel",
  "Vokal",
  "vorne",
  "voten",
  "Votum",
  "Waage",
  "Wache",
  "Wachs",
  "Waffe",
  "Wagen",
  "Wagon",
  "Waise",
  "Walze",
  "Wampe",
  "Wange",
  "Wanne",
  "Wanze",
  "Waren",
  "Warte",
  "Warze",
  "Watte",
  "weben",
  "wehen",
  "weich",
  "Weide",
  "weiss",
  "weise",
  "Weite",
  "Welle",
  "Welpe",
  "Wende",
  "wenig",
  "Werte",
  "Wesen",
  "Wespe",
  "Weste",
  "Wette",
  "Wicht",
  "Wiege",
  "Wiese",
  "Wille",
  "Wippe",
  "Witwe",
  "Woche",
  "Wolke",
  "Wolle",
  "Wrack",
  "Wunde",
  "Wurst",
  "wuest",
  "Xenon",
  "Yacht",
  "Zange",
  // "Zeche",
  "Zecke",
  "Zelle",
  "Zenit",
  "Zeuge",
  "Ziege",
  "Ziele",
  "zirka",
  "Zitat",
  "zivil",
  "Zucht",
  "Zunge",
  "Zutat",
  "Zwang",
  "Zweck",
  "Zweig",
  "Zwerg",
];
