let köpergröße = document.getElementById("körpergröße");
let alter = document.getElementById("alter");
let gewicht = document.getElementById("gewicht");
let sexM = document.getElementById("männlich");
let sexW = document.getElementById("weiblich");
let freizeitAktivität = document.getElementById("freizeit-aktivität");
let ctx = document.getElementById("myChart");
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
    console.log("weiblich");
  } else if (männlich.checked) {
    gesamtUmsatz =
      grundUmsatzRechner(664.7, 13.7, 5, 6.8) * Number(freizeitAktivität.value);
    console.log("männlich");
  }
  console.log(gesamtUmsatz);
  console.log(grundUmsatz);
};

//===============================

Chart.defaults.global.animation.duration = "2500";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = "#fff";

let colors1 = ["#49A9EA", "#36CAAB", "rgba(255, 99, 132, 1)"];

let chart1 = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Grundumsatz (kcal)",
      "Gesamtumsatz (kcal)",
      "Grundumsatz (kJ)",
      "Gesamtumsatz (kJ)",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: [
          "#1e92e0",
          "#36CAAB",
          "rgb(241, 69, 106)",
          "rgb(236, 182, 46)",
        ],
        borderWidth: 2,
        borderColor: "#fff",
        hoverBorderWidth: 3,
        hoverBorderColor: "#777",
      },
    ],
  },
  options: {
    animation: {
      title: {
        text: "test",
        display: false,
      },
    },
    legend: {
      position: "left",
    },
  },
});

function updateChart() {
  chart1.data.datasets[0].data = [
    grundUmsatz.toFixed(3),
    gesamtUmsatz.toFixed(3),
    (grundUmsatz * 6.707).toFixed(3),
    (gesamtUmsatz * 6.707).toFixed(3),
  ];
  chart1.update();
}
