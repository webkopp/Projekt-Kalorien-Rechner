// Programmiere einen Kalorienrechner.
// - Zuerst musst du dafür den Grundumsatz berechnen. Der Grundumsatz wird anhand der Harris-Benedict-Formel berechnet.
// - Grundumsatz bei Männern
// (Kalorien je Tag)  66.47 + (13.7 Körpergewicht in kg) + (5Körpergröße in cm) – (6.8 Alter in Jahren) = Grundumsatz
// - Grundumsatz bei Frauen
// (Kalorien je Tag)  655.1 + (9.6 Körpergewicht in kg) + (1.8 Körpergröße in cm) – (4.7 Alter in Jahren) = Grundumsatz
// - Achtung: Das Ergebnis wird in Kilokalorien ausgegeben!

// # ☝🏼 Hinweis
// - Um den Gesamtumsatz auszurechnen, sollte der PAL-Faktor (PAL=Physical Activity Level) mit dem Grundumsatz multipliziert werden.


const kalorienrechner = () => {
    let geschlecht = document.querySelector("#geschlecht").value
    let gewicht = document.querySelector("#gewicht").value
    let groesse = document.querySelector("#groesse").value
    let alter = document.querySelector("#alter").value
    let palFaktor = document.querySelector("#palFaktor").value

    function berechneGrundumsatz(geschlecht, gewicht, groesse, alter) {
        let grundumsatz = 0

        switch(geschlecht) {
            case "männlich":
                grundumsatz = 66.47 + (13.7 * gewicht) + (5 * groesse) - (6.8 * alter)
                break
            case "weiblich":
                grundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * groesse) - (4.7 * alter)
                break
            default:
                console.log("ungültiges Geschlecht")
        }
        return grundumsatz
    }

    function berechneGesamtumsatz(grundumsatz, palFaktor) {
        return grundumsatz * palFaktor
    }
}

ergebnis.innerHTML = "Dein idealer Kalorienbedarf nach Harris-Benedict-Formel ist " + Math.round(kcal) + " kcal pro Tag."