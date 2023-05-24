// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD DECIDE CHECK DEV VALIDATOR

import React from "react";

import styled from "styled-components";
import colors from "../style/colors";
import { Radar } from "react-chartjs-2";

// import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
// import { Radar } from 'react-chartjs-2';

// import AliceProfile from "../assets/aliceprofile.jpg";

const ComponentContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ChartContainer = styled.div`
  // background-color: ${colors.light};
  background-color: rgb(193, 193, 193, 0.2);
  border-radius: 20px;
  // background-color: #a1848e;
  height: 600px; // DECIDE with responsive issues??
  // &::after {
  //   content: "blah";
  // }
`;

const Note = styled.p`
  color: hotpink;
  font-size: 1em;
  font-weight: 300;
`;

// BLOCK BLOCK BLOCK

//     {
//       label: "My First Dataset",
//       data: [65, 59, 90, 81, 56, 55, 40],
//       fill: true,
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgb(255, 99, 132)",
//       pointBackgroundColor: "rgb(255, 99, 132)",
//       pointBorderColor: "#fff",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "rgb(255, 99, 132)",
//     },

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Chart.defaults.font.size = 36; // FIXME nope

const options = {
  // maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height CHECK
  layout: {
    // padding: {
    //   left: 50,
    //   right: 0,
    //   top: 0,
    //   bottom: 0,
    // },
  },
  elements: {
    point: {
      // points on graph lines
      pointStyle: false,
    },
    line: {
      tension: 0.2, // TODO DECIDE
    },
  },

  plugins: {
    legend: {
      // display: false, // To hide legend
      position: "bottom",
      // DEV CHECK in the font options there's line height if I can't get the legend closer to graph
      labels: {
        // Legend
        // This more specific font property overrides the global property
        color: "rgba(255,255,255,0.7)", // DECIDE
        font: {
          size: 14,
          family: "Inconsolata",
        },
        // boxHeight: 25, // DECIDE
        // padding: 50, // DECIDE
      },
    },
    tooltip: {
      // hover legend

      titleColor: "blue", // DEV
      backgroundColor: "#fff", // DEV
      // titleFont {} // DEV
      bodyColor: "red", // DEV
      // footerColor: "green", // CHECK who??
      // displayColors: true, // does not work DEV
      borderColor: "orange", // DEV
      borderWidth: 1, // DEV
    },
  },
  scales: {
    r: {
      pointLabels: {
        // names of skills on chart
        color: "rgba(255,255,255,0.7)", // DECIDE
        // showLabelBackdrop: true, // FIXME nope

        font: {
          size: 16, // Why does this completely fuck the padding?
          // fontColor: "red", // FIXME nope
          family: "Inconsolata", // TODO
        },
      },
      ticks: {
        // numbers on the chart spiderweb
        display: false,
      },
    },
  },
};

export const data = {
  labels: [
    "Problem Solving",
    "Stress Managment",
    "Multitasking",
    "Creativity",
    "Strategy",
    "Versatility",
    "Autonomy - Self-Reliance",
    "Resilience",
    "Teamwork",
    "Technical Skills",
  ],
  datasets: [
    {
      label: "Marcom",
      data: [4, 7, 6, 6, 7, 7, 4, 7, 8, 4],
      backgroundColor: "rgba(92, 157, 118, 0.2)",
      borderColor: "rgba(92, 157, 118, 1)",
      borderWidth: 1,
    },
    {
      label: "Restauration",
      data: [7, 9, 9, 3, 6, 7, 5, 9, 9, 0],
      backgroundColor: "rgba(33, 158, 188, 0.2)",
      borderColor: "rgba(33, 158, 188, 1)",
      borderWidth: 1,
    },
    {
      label: "Business School",
      data: [1, 4, 7, 7, 4, 7, 8, 6, 6, 4],
      backgroundColor: "rgba(132, 96, 117, 0.2)",
      borderColor: "rgba(132, 96, 117, 1)",
      borderWidth: 1,
    },
    {
      label: "Dev Studies",
      data: [9, 8, 8, 8, 7, 7, 9, 7, 7, 9],
      backgroundColor: "rgba(240, 164, 108, 0.2)",
      borderColor: "rgba(240, 164, 108, 1)",
      borderWidth: 1,
    },
    {
      label: "Hobbies",
      data: [8, 3, 2, 8, 9, 9, 7, 3, 8, 1],
      backgroundColor: "rgba(163, 117, 82, 0.2)",
      borderColor: "rgba(163, 117, 82, 1)",
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
    <ComponentContainer>
      <ChartContainer>
        <Radar data={data} options={options} />
      </ChartContainer>
      <Note>Click on Legend to Hide/Show specific data</Note>
    </ComponentContainer>
  );
}
