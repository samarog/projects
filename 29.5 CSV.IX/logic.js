let chartInstance;

document.getElementById("csvFile").addEventListener("change", handleFile);
document.getElementById("chartType").addEventListener("change", renderChart);
document.getElementById("chartColor").addEventListener("input", renderChart);
document.getElementById("downloadBtn").addEventListener("click", downloadChart);
document.getElementById("year").textContent = new Date().getFullYear();

// CSS
// small trick to change button color (não me lembro de outra forma)

const colorInput = document.getElementById("chartColor");
colorInput.style.color = colorInput.value;
colorInput.addEventListener("input", () => {
  colorInput.style.color = colorInput.value;
});

// functions

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result;
    parseCSV(text);
  };
  reader.readAsText(file);
}

let labels = [];
let data = [];

function parseCSV(text) {
  const lines = text.trim().split("\n");
  labels = [];
  data = [];

  lines.forEach((line, index) => {
    const [label, value] = line.split(",");
    if (index === 0 && isNaN(parseFloat(value))) return; // skip header
    labels.push(label);
    data.push(parseFloat(value));
  });

  renderChart();
}

function renderChart() {
  const type = document.getElementById("chartType").value;
  const color = document.getElementById("chartColor").value;
  const ctx = document.getElementById("chartCanvas").getContext("2d");

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: "Dataset",
          data: data,
          backgroundColor:
            type === "pie" || type === "doughnut"
              ? generateColors(labels.length)
              : color,
          borderColor: "#ccc",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: type === "pie" || type === "doughnut",
          labels: {
            color: "#00ffe1", // legend text color
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#00ffe1", // X-axis labels
          },
          grid: {
            color: "#00ffe144", // X-axis grid lines
          },
        },
        y: {
          ticks: {
            color: "#00ffe1", // Y-axis labels
          },
          grid: {
            color: "#00ffe144", // Y-axis grid lines
          },
        },
      },
    },
  });

  const canvasPadding = (document.getElementById("chartCanvas").style.padding =
    "2rem");
}

function downloadChart() {
  const link = document.createElement("a");
  link.download = `csvix_${
    document.getElementById("chartType").value
  }-chart.png`;
  link.href = document.getElementById("chartCanvas").toDataURL();
  link.click();
}

function generateColors(n) {
  const colors = [];
  for (let i = 0; i < n; i++) {
    const hue = (360 / n) * i;
    colors.push(`hsl(${hue}, 100%, 60%)`);
  }
  return colors;
}
