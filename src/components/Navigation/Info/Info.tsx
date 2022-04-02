export const Info = () => {
    return (
        <>
            <h1>Spielanleitung</h1>
            <div className="text">
                <h3>Regeln:</h3>
                <ul className="rules-list">
                    <li>
                        Der Spieler hat 6 Versuche, das 5-buchstaben lange Wort zu erraten
                    </li>
                    <li>
                        Jedes eingegebene Wort, muss auch in der Wortliste enthalten sein, sinnlose Kombinationen von Buchstaben werden als ungültiger Versuch gewertet
                    </li>
                    <li>
                        Für Umlaute gilt:
                        <ul>
                            <li>ä wird zu ae</li>
                            <li>ö wird zu oe</li>
                            <li>ü wird zu ue</li>
                            <li>ß wird zu ss</li>
                        </ul>
                        <div>So haben 4-Buchstaben lange Wörter, eine Länge von 5 Buchstaben</div>
                        <div>Beispiel: Löwe (4 Buchstaben) wird zu Loewe (5 Buchstaben)</div>
                    </li>
                </ul>
                <h3>Modi:</h3>
                <ul className="modes-list">
                    <li>Wort des Tages</li>
                    <div>Jeden Morgen ab 8:00 Uhr gibt es ein neues Wort, welches zu erraten gilt.</div>

                    <li>Training</li>
                    <div>Im Trainingsmodus müssen zufällig ausgewählte Wörter erraten werden. In diesem Modus gibt es keine Statistiken.</div>

                    <li>Kategorien</li>
                    <div>Alle Wörter, die in der Wortliste enthalten sind, wurden in verschiedene Kategorien eingeteilt.
                        In diesem Modus werden nur Worte aus dem ausgewählten Themengebiet gesucht.</div>

                    <li>Blitz</li>
                    <div>Im Blitzmodus hat der Spieler nur begrenzt Zeit, um soviele Wörter wie möglich zu erraten.
                        Wird ein Wort richtig erraten, bekommt der Spieler nochmal 10 Sekunden extra Zeit draufgerechnet.</div>
                </ul>
            </div>
        </>
    );
}