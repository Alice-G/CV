// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE

import styled from "styled-components";
import Chart from "./Chart";
import Hobbies from "./Hobbies";

// import SpinEffect from "./spineffect";

// import needle from "../assets/needle.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;

  border: 3px dotted sienna;
  // height: 800px;

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 40px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 375px) {
    gap: 15px;
  }
`;

const Box1 = styled.div`
  // display: flex;

  border: 3px dotted deeppink;

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 40px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 375px) {
    gap: 15px;
  }
`;

const Box2 = styled.div`
  //   display: flex;

  border: 3px dotted green;
`;

const Box3 = styled.div`
  //   display: flex;

  border: 3px dotted cadetblue;
`;

const Box4 = styled.div`
  //   display: flex;

  border: 3px dotted hotpink;
`;

const Box5 = styled.div`
  // height: 200px;
  width: 90%;

  //   display: flex;

  border: 3px dotted hotpink;
`;

const Box6 = styled.div`
  //   display: flex;

  border: 3px dotted pink;
`;

// HOBBIES BOX
const Box7 = styled.div`
  display: flex;

  border: 3px dotted cadetblue;
`;

const Box8 = styled.div`
  //   display: flex;

  border: 3px dotted orange;
`;

const Box9 = styled.div`
  //   display: flex;

  border: 3px dotted saddlebrown;
`;

export default function MainBit() {
  console.log("MainBitloaded");
  return (
    <MainContainer>
      {/* <Chart /> */}
      <Box1>1111 Skills</Box1>
      <Box2>2222 </Box2>
      <Box3>
        333 Box 1 container
        <div>Profile</div>
        <div>Education</div>
        <div>Experience</div>
        <div>Hobbies</div>
        <div>Contact </div>
      </Box3>
      <Box4>4444 Box 1 container</Box4>
      <Box5>5555</Box5>
      <Box6>
        {/* <Collapse
          title="Description"
          text={selectedFlat.description}
          alt=" USE PROPS AND CREATE JSON FOR THIS"
        /> */}
        6666
      </Box6>
      <Box7>
        <Hobbies />
        <div>7777 Box with Hobbies and some other thing</div>
      </Box7>
      <Box8> </Box8>
      <Box9>999</Box9>
    </MainContainer>
  );
}
