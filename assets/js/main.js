let köpergröße = document.getElementById("körpergröße");
let alter = document.getElementById("alter");
let gewicht = document.getElementById("gewicht");
let sexM = document.getElementById("männlich");
let sexW = document.getElementById("weiblich");
let freizeitAktivität = document.getElementById("freizeit-aktivität");

let grundUmsatz;

let gesamtUmsatz;

grundUmsatzRechner = (a, b, c, d) => {
  grundUmsatz =
    a +
    b * Number(gewicht.value) +
    c * Number(köpergröße.value) -
    d * Number(alter.value);
  return grundUmsatz;
};

// gesamtUmsatzRechner = () => {
//   gesamtUmsatz = grundUmsatz() * Number(freizeitAktivität.value);
//   return gesamtUmsatz;
// };

berechnen = () => {
  if (weiblich.checked) {
    gesamtUmsatz =
      grundUmsatzRechner(655.1, 9.6, 1.8, 4.7) *
      Number(freizeitAktivität.value);
  } else if (männlich.checked) {
    gesamtUmsatz =
      grundUmsatzRechner(664.7, 13.7, 5, 6.8) * Number(freizeitAktivität.value);
  }
  console.log(gesamtUmsatz);
  console.log(grundUmsatz);
};
