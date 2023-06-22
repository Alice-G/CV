// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE
// dotted - dashed - solid - double - groove - ridge - inset - outset

import styled from "styled-components";
import Chart from "./Chart";
import Hobbies from "./Hobbies";
import Education from "./Education";
import Experience from "./Experience";
import ExtraInfo from "./Extras";

// import SpinEffect from "./spineffect";

// import needle from "../assets/needle.png";

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

const ChartContainer = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: row;

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

const Container1 = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // flex-gap: 10px; // DECIDE

  // padding: 10px; // CHECK in real display conditions

  padding-bottom: 20px; // to push down next section DECIDE convert to a flex gap?

  // border: 3px dashed deeppink; // DEV

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

const C1BoxLong = styled.div`
  //   display: flex;
  padding-right: 10px; // to space columns out from the inside

  // border: 3px dotted indianred; // DEV

  width: 62%;
`;

const C1BoxSmall = styled.div`
  // width: 20%;

  width: 37%;

  // border: 3px dotted cornflowerblue; // DEV
`;

const Container2 = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; // DECIDE

  // flex-gap: 10px;

  // border: 3px dashed green; // DEV
`;

const C2BoxSmall = styled.div`
  //   display: flex;
  width: 30%;

  // border: 3px dotted blue; // DEV
`;

const C2BoxLong = styled.div`
  width: 68%;
  // border: 3px dotted lightsalmon; // DEV
`;

export default function MainBit() {
  console.log("MainBitloaded");
  return (
    <MainBitContainer>
      <ChartContainer>
        <Chart />
      </ChartContainer>

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
        </C2BoxSmall>
        <C2BoxLong>
          <ExtraInfo />
        </C2BoxLong>
      </Container2>
    </MainBitContainer>
  );
}
