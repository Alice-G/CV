// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD DECIDE CHECK DEV VALIDATOR

import React from "react";

import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";
import { Radar } from "react-chartjs-2";

// *************************************
// XXXXXXXX
// *************************************

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

const TopLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  // background-color: rgb(193, 193, 193, 0.2);
  // border-radius: 20px;

  // border: 2px double cadetblue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    // border: 2px double green; // DEV
    // width: 80%;  //NO
    // padding: 0 20px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    // border: 2px double orange; // DEV
    // width: 500px;
    width: 85%;
  }

  @media (max-width: 375px) {
    // border: 2px double skyblue; // DEV
  }

  // border: 2px double skyblue; // DEV
`;

const SectionTitle = styled.h3`
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;

  font-size: 28px;

  margin: 30px 10px 10px 10px;

  // border: 3px dotted brown; // DEV

  color: ${colors.color_sectiontitle}; // DEV

  // TODO
  // align self padding left or margin

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

// chart sheer white background
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(193, 193, 193, 0.2);
  border-radius: 20px;

  width: 65%;
  padding: 15px;
  // height: 700px;

  // border: 3px dashed cadetblue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    // border: 2px dashed green; // DEV
    width: 75%;
  }

  @media (min-width: 571px) and (max-width: 768px) {
    // border: 2px dashed orange; // DEV
    padding: 0 20px;
    width: 90%;
  }

  @media (min-width: 376px) and (max-width: 570px) {
    // border: 2px dashed indianred; // DEV

    padding: 0 20px;
  }

  @media (max-width: 375px) {
    // border: 2px dashed skyblue; // DEV
  }
`;

const ChartContainer = styled.div`
  // width: 100%;
  // height: 550px; // careful with responsive adjustments, only way to center the chart
  // width: 550px;

  // HINT HINT HINT blue dots

  // border: 3px dotted blue; // DEV

  @media (min-width: 991px) and (max-width: 1199px) {
    // border: 3px dotted cadetblue; // DEV
    // width: 500px;
  }

  @media (min-width: 769px) and (max-width: 990px) {
    // border: 3px dotted hotpink; // DEV
    // width: 450px;
    // height: 450px;
  }

  @media (min-width: 571px) and (max-width: 768px) {
    // border: 3px dotted pink; // DEV
    width: 450px;
  }

  // STARTING HERE IT'D BE BETTER TO HAVE IMG CHART DEV TODO
  @media (min-width: 376px) and (max-width: 570px) {
    // border: 3px dotted skyblue; // DEV
    // width: 470px;
    // height: 460px;
  }

  @media (max-width: 375px) {
    // width: 300px;
    // height: 350px;

    // border: 3px dotted green; // DEV
  }
`;

const Note = styled.p`
  font-size: 0.8em;
  font-weight: 300;
  font-style: italic;

  margin: auto; // center
  width: 450px;

  color: ${colors.color_sectiontitle};
  // border: 2px dotted white; // DEV

  @media (min-width: 769px) and (max-width: 990px) {
    width: 400px;
  }

  @media (min-width: 571px) and (max-width: 768px) {
    width: 400px;
  }

  // STARTING HERE IT'D BE BETTER TO HAVE IMG CHART DEV TODO
  @media (min-width: 376px) and (max-width: 570px) {
    width: 200px;
    font-size: 0.7em;
  }

  @media (max-width: 375px) {
    // border: 2px dotted mediumpurple; // DEV
    font-size: 0.7em;
    width: 170px;
  }
`;

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
  responsive: true,

  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height CHECK
  layout: {
    // autoPadding: "false", // not sure that did anything?

    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
  elements: {
    point: {
      // points on graph lines
      pointStyle: false,
      radius: 0, // default to disabled in all datasets
    },
    line: {
      tension: 0.2, // TODO DECIDE
    },
  },

  plugins: {
    legend: {
      // display: false, // To hide legend
      position: "bottom",
      align: "center", // did this work??? CHECK
      // DEV CHECK in the font options there's line height if I can't get the legend closer to graph
      labels: {
        // Legend
        // This more specific font property overrides the global property
        color: "rgba(255,255,255,0.7)", // DECIDE
        font: {
          size: 16, // ???
          family: "Inconsolata",
        },
        // boxHeight: 25, // DECIDE
        // padding: 50, // DECIDE
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    r: {
      pointLabels: {
        // names of skills on chart
        color: "rgba(255,255,255,0.7)", // DECIDE

        font: {
          size: 16, // Why does this completely fuck the padding?

          // family: "Inconsolata", // better not because chart sucks at responsivity
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
    "Gestion du Stress",
    "Multitasking",
    "Créativité",
    "Stratégie",
    "Versatilité",
    "Autonomie",
    "Résilience",
    "Travail d'équipe",
    "Compétences Techniques",
  ],
  datasets: [
    {
      label: "Marcom",
      data: [3, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 4, 2.5, 3.5],
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
      label: "ESC",
      data: [3, 4, 7, 7, 4, 6, 7, 5, 5, 3],
      backgroundColor: "rgba(132, 96, 117, 0.2)",
      borderColor: "rgba(132, 96, 117, 1)",
      borderWidth: 1,
    },
    {
      label: "Études code",
      data: [9, 8, 5, 6, 5, 5, 9, 7, 2, 9],
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
    <TopLevelContainer>
      <SectionTitle>Compétences</SectionTitle>

      <ComponentContainer>
        <ChartContainer>
          <Radar data={data} options={options} />
        </ChartContainer>
        {/* <Note>Click on Legend to Hide/Show specific data</Note> */}
        <Note>
          Cliquez sur les éléments de la légende pour masquer/afficher leurs
          données respectives
        </Note>
      </ComponentContainer>
    </TopLevelContainer>
  );
}
