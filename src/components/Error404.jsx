import React from "react";
import styled from "styled-components";

import Alice from "../assets/404 page/Alice.png";
import Cheshire from "../assets/404 page/Cheshire.png";

const ErrorContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5%;

  padding-top: 50px;
  gap: 50px;
  border: 3px dotted blue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    padding-top: 25px;
    gap: 30px;
    border: 3px dotted green; // DEV
  }

  @media (min-width: 375px) and (max-width: 768px) {
    gap: 30px;
    border: 3px dotted orange; // DEV
  }

  @media (max-width: 375px) {
    gap: 15px;
    border: 3px dotted skyblue; // DEV
  }
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  font-size: 288px;
  font-weight: 700;
  line-height: 210px;

  // border: 3px dotted skyblue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 150px;
    line-height: 130px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 96px;
    // line-height: 130px; // TODO
  }

  @media (max-width: 375px) {
    font-size: 96px;
    // line-height: 130px; // TODO
  }
`;

const OopsPic = styled.img`
  width: 300px;
  font-size: 10px; // for alt text
  // border: 3px dotted hotpink; // DEV

  // blue; // DEV

  // @media (min-width: 769px) and (max-width: 1199px) {
  //   green; // DEV
  width: 250px;

  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //   orange; // DEV

  // }

  // @media (max-width: 375px) {
  //    skyblue; // DEV

  // }
`;

const ErrorText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding: 0 50px;
  width: 70%;
  text-align: center;

  font-size: 36px;

  // border: 3px dotted pink; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 25px;
    // padding: 0;
    // margin: 0;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 22px;
    padding: 0;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  // border: 3px dotted skyblue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    //
  }

  @media (min-width: 375px) and (max-width: 768px) {
    //
  }

  @media (max-width: 375px) {
    //
  }
`;

const Text = styled.span`
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;

  // blue; // DEV

  // @media (min-width: 769px) and (max-width: 1199px) {
  //   green; // DEV
  font-size: 18px;
  line-height: 20px;

  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //   orange; // DEV

  // }

  // @media (max-width: 375px) {
  //    skyblue; // DEV

  // }
`;

const ErrorBacklink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  line-height: 24px;

  font-family: "IM Fell DW Pica", serif;
  font-style: italic;

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CheshireCat = styled.img`
  margin-top: -22px;
  margin-left: -140px;
  width: 500px;
  // border: 3px dotted skyblue; // DEV

  @media (min-width: 769px) and (max-width: 1199px) {
    margin-top: -16px;
    margin-left: -110px;
    width: 400px;
    //
  }

  @media (min-width: 375px) and (max-width: 768px) {
    //
  }

  @media (max-width: 375px) {
    //
  }
`;

export default function Error404() {
  return (
    <ErrorContainer>
      <OopsPic src={Alice} alt="Alice sighing"></OopsPic>
      <Title>404</Title>
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <Box>
        <Text>Le CV est </Text>
        <ErrorBacklink href="/">&nbsp;par ici&nbsp;</ErrorBacklink>
        <Text>!</Text>
        <CheshireCat src={Cheshire} alt="Cheshire Cat pointing"></CheshireCat>
      </Box>
    </ErrorContainer>
  );
}
