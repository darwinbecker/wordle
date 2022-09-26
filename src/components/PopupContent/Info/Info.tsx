import { WordStatusClassNames } from "../../../libs/WordStatus";

export const Info = () => {
  return (
    <div className="info">
      <h1>Spielanleitung</h1>
      <div className="main">
        <h3>Regeln:</h3>
        <ul className="rules-list">
          <li>
            Der Spieler hat 6 Versuche, das 5-buchstaben lange Wort zu erraten
          </li>
          <li>
            Jedes eingegebene Wort, muss auch in der Wortliste enthalten sein,
            sinnlose Kombinationen von Buchstaben werden als ungültiger Versuch
            gewertet
          </li>
          <li>
            Für Umlaute gilt:
            <ul>
              <li>ä wird zu ae</li>
              <li>ö wird zu oe</li>
              <li>ü wird zu ue</li>
              <li>ß wird zu ss</li>
            </ul>
            <div>
              So haben 4-Buchstaben lange Wörter, eine Länge von 5 Buchstaben
            </div>
            <div>
              Beispiel: Löwe (4 Buchstaben) wird zu Loewe (5 Buchstaben)
            </div>
          </li>
        </ul>

        <h3>Input:</h3>
        <ul className="input-list">
          <li>Eingabe von Buchstaben erfolgt über die Tastatur</li>
          <li>Gültig: Buchstaben von A-Z</li>
          <li>
            Ungültig:
            <ul>
              <li>Umlaute wie ä, ö, ü, ß</li>
              <li>Sonderzeichen, Leerzeichen</li>
              <li>Zahlen von 0-9</li>
            </ul>
          </li>
        </ul>

        <h3>Buchstaben-Feedback:</h3>
        <div className="text">
          <div>
            Nach der Eingabe eines Wortes, gibt es Feedback zu den einzelnen
            Buchstaben.
            <br />
            Jeder Buchstabe wird farblich dargestellt, wobei jede Farbe ihre
            eigene Bedeutung hat:
          </div>
        </div>

        <ul className="letter-info-list">
          <li>
            <div className={WordStatusClassNames("letter-info", "correct")}>
              A
            </div>
            - Der Buchstabe ist im gesuchten Wort enthalten und befindet sich an
            der richtigen Stelle
          </li>
          <li>
            <div className={WordStatusClassNames("letter-info", "semi")}>A</div>
            - Der Buchstabe ist im gesuchten Wort enthalten, befindet sich aber
            an der falschen Stelle
          </li>
          <li>
            <div className={WordStatusClassNames("letter-info", "wrong")}>
              A
            </div>
            - Der Buchstabe ist nicht im gesuchten Wort enthalten
          </li>
        </ul>

        <h3>Modi:</h3>
        <ul className="modes-list">
          <li>Wort des Tages</li>
          <div>
            Jeden Morgen um 6:00 Uhr wird ein neues Wort ausgewählt, welches
            zu erraten gilt.
            <br />
            In diesem Spiel-Modus werden Statistiken gespeichert.
            <br />
            Wird das Wort innerhalb der nächsten 24 Stunden nicht erraten, kann
            man immer noch das nächste Wort, welches ab 6:00 Uhr freigeschaltet
            wird, erraten, ohne die Siegesserie zu verlieren.
            <br />
            Sind alle 6 Versuche aufgebraucht, gilt das Wort als{" "}
            <span className="underline">nicht</span> erraten und die aktuelle
            Siegesserie wird auf 0 zurückgesetzt.
          </div>

          <li>Training</li>
          <div>
            Im Trainingsmodus kann man das Spiel so oft spielen, wie man möchte.
            <br />
            Das Wort, das es zu erraten gilt, wird zufällig ausgewählt.
            <br />
            In diesem Modus werden Niederlagen und Siege{" "}
            <span className="underline">nicht</span> mit in die Statistiken
            eingerechnet.
          </div>

          <li>Kategorien</li>
          <div>
            Alle Wörter, die in der Wortliste enthalten sind, wurden in
            verschiedene Kategorien eingeteilt. In diesem Modus werden nur
            Wörter aus dem ausgewählten Themengebiet gesucht.
            <br />
            In diesem Modus werden Niederlagen und Siege{" "}
            <span className="underline">nicht</span> mit in die Statistiken
            eingerechnet.
          </div>
        </ul>
      </div>
    </div>
  );
};
