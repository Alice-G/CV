// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE
// dotted - dashed - solid - double - groove - ridge - inset - outset

import styled from "styled-components";
import Projects from "./Projects";
import Chart from "./Chart";
import Hobbies from "./Hobbies";
import Education from "./Education";
import Experience from "./Experience";
import ExtraInfo from "./Extras";
import Skills from "./Skills";

import fonts from "../style/fonts";
import colors from "../style/colors";

// *************************************
// XXXXXXXX
// *************************************

const MainBitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;

  // border: 5px double yellow; // DEV
  // height: 800px;

  // @media (min-width: 769px) and (max-width: 1199px) {
  //   gap: 40px;
  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //   gap: 30px;
  // }

  // @media (max-width: 375px) {
  //   gap: 15px;
  // }
`;

const SectionTitle = styled.h1`
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;
  font-size: 50px;

  color: #d3c2ae;

  margin: auto;
  padding-top: 10px;

  // border: 3px dotted blue; // DEV

  @media (min-width: 375px) and (max-width: 1199px) {
    font-size: 40px;
    // border: 3px dotted green; // DEV
  }

  @media (max-width: 375px) {
    // border: 3px dotted skyblue; // DEV
    font-size: 30px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  // border: 5px dotted indianred; // DEV

  // @media (min-width: 769px) and (max-width: 1199px) {
  //   gap: 40px;
  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //   gap: 30px;
  // }

  // @media (max-width: 375px) {
  //   gap: 15px;
  // }
`;

// Education / Workplaces
const Container1 = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 20px; // to push down next section DECIDE convert to a flex gap?

  // border: 3px dashed deeppink; // DEV

  color: blue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    color: green; // DEV
  }

  @media (min-width: 375px) and (max-width: 768px) {
    color: orange; // DEV
    flex-direction: column;
    align-items: center;
    padding-left: 5px;
  }

  @media (max-width: 375px) {
    color: skyblue; // DEV

    flex-direction: column;
    align-items: center;
    padding-left: 5px;
  }
`;

const C1BoxLong = styled.div`
  padding-right: 10px; // to space columns out from the inside

  // border: 3px dotted indianred; // DEV

  width: 58%;

  @media (min-width: 769px) and (max-width: 1199px) {
    width: 62%;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 80%;
  }
`;

const C1BoxSmall = styled.div`
  width: 40%;

  @media (min-width: 769px) and (max-width: 1199px) {
    width: 37%;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 80%;
  }

  // border: 3px dotted cornflowerblue; // DEV
`;

const Container2 = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; // DECIDE

  // flex-gap: 10px;

  @media (max-width: 768px) {
    color: orange; // DEV
    flex-direction: column;
    align-items: center;
  }

  // border: 3px dashed green; // DEV
`;

const C2BoxSmall = styled.div`
  //   display: flex;
  width: 30%;

  @media (min-width: 769px) and (max-width: 1199px) {
    width: 37%;
    // border: 3px dotted green; // DEV
  }

  @media (min-width: 375px) and (max-width: 768px) {
    // border: 3px dotted orange; // DEV
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 85%;
    // border: 3px dotted skyblue; // DEV
  }

  // border: 3px dotted cadetblue; // DEV
`;

const C2BoxLong = styled.div`
  // width: 68%;
  width: 60%;

  @media (max-width: 768px) {
    color: orange; // DEV
    margin-top: 10px;
    width: 80%;
  }

  // border: 3px dotted mediumpurple; // DEV
`;

//TODO do i want link here or below?
const Link404Box = styled.div`
  display: flex;
  justify-content: space-around;

  // border: 3px dotted lightsalmon; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    // border: 3px dotted green; // DEV
    justify-content: left;
    padding-left: 20px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    // border: 3px dotted cadetblue; // DEV

    margin-top: 10px;
  }

  @media (max-width: 375px) {
    // border: 3px dotted skyblue; // DEV
  }

  // border: 3px dotted lightsalmon; // DEV
`;

const Link404 = styled.a`
  color: ${colors.color_primary08};
  padding-top: 50px; // TODO

  @media (min-width: 769px) and (max-width: 1199px) {
    padding-top: 30px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding-top: 20px;
  }

  @media (max-width: 375px) {
    padding-top: 10px;
  }

  // border: 3px dotted DarkSeaGreen; // DEV
`;

export default function MainBit() {
  return (
    <MainBitContainer>
      <SectionTitle>Dev Front End</SectionTitle>
      <Projects />
      <ExtraInfo />
      <Skills />

      <Container1>
        <C1BoxLong>
          <Education />
        </C1BoxLong>
        <C1BoxSmall>
          <Experience />
        </C1BoxSmall>
      </Container1>

      <Container2>
        <C2BoxSmall>
          <Hobbies />
          {/* <Link404Box>
            <Link404 href="/xyz">Et si le lien n'était pas bon ? 🤔</Link404>
          </Link404Box> */}
        </C2BoxSmall>
        <C2BoxLong>
          {/* <ChartContainer>
            <Chart />
            </ChartContainer> */}

          <Link404Box>
            <Link404 href="/xyz">Et si le lien n'était pas bon ? 🤔</Link404>
          </Link404Box>
        </C2BoxLong>
      </Container2>
    </MainBitContainer>
  );
}
