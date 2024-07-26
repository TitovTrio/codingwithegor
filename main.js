import "./style.css";
import { Chart } from "chart.js/auto"; //need /auto shit to avoid bag with chart type

const ctx = document.getElementById("chartId");
const lohData = [1, 1];
const pie = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Sanya ne loh", "Sanya loh"],
    datasets: [
      {
        label: "# of Votes",
        data: lohData,
        backgroundColor: ["pink", "yellow"],
      },
    ],
  },
  options: {
    animation: false,
  },
});

function updateData(chart, newData) {
  chart.data.datasets[0].data = newData;
  chart.update();
}

const sanyaLohButton = document.getElementById("sanya-loh");
const sanyaNeLohButton = document.getElementById("sanya-ne-loh");
sanyaNeLohButton.onclick = function (e) {
  lohData[0] += 1;
  showBackgroundText("sanya ne loh!!!", "pink");
  updateData(pie, lohData);
};

sanyaLohButton.onclick = function (e) {
  lohData[1] += 1;
  showBackgroundText("sanya loh!!!", "yellow");

  updateData(pie, lohData);
};

function showBackgroundText(text = "jopa", color = "red") {
  const div = document.createElement("div");

  const top = getRandom(10, 90);
  const left = getRandom(10, 90);

  div.textContent = `${text}`;
  div.style.cssText = `position: fixed; top: ${top}%; left: ${left}%; color: ${color};
  animation-name: scale; animation-duration: 2s; font-weight: 800; transform: translate(-50%,-50%); z-index: -1`;
  document.body.append(div);
  setTimeout(() => div.remove(), 2000);
}

function getRandom(min, max) {
  return min + Math.random() * (max - min);
}
