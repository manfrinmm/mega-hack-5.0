import React, { useEffect } from "react";

import { Container } from "./styles";
import { Chart } from "chart.js";

const ResultFlowGraph = () => {
  const data = {
    labels: ["10", "11", "12", "13", "Ontem", "Hoje"],
    datasets: [
      {
        label: "Resultado",
        backgroundColor: "transparent",
        borderColor: "#3270cd",
        data: [-7000, -1675, -289, 0, 6000, 7875],
        type: "line",
      },
      {
        label: "Entradas",
        backgroundColor: "#4de988",
        borderColor: "#4de988",
        data: [1000, 1545, 565, 287, 6500, 8525],
      },
      {
        label: "Saídas",
        backgroundColor: "#f76263",
        borderColor: "#f76263",
        data: [-8000, -3220, -854, -287, -500, -825],
      },
    ],
  };

  const options: Chart.ChartOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    new Chart("myChart", {
      type: "bar",
      data: data,
      options,
    });
  }, [data, options]);

  return (
    <Container>
      <canvas id="myChart" width="100%" height="100%"></canvas>
    </Container>
  );
};

export default ResultFlowGraph;
