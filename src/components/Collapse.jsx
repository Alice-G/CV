import React from "react";
import { useState } from "react";

import styled from "styled-components";
import colors from "../style/colors";

import svgArrow from "../assets/wingArrow.svg";

const CollapseContainer = styled.div`
  //   margin: 3%;
  margin: 10px;

  //   width: 50%; // DECIDE DEV

  @media (max-width: 768px) {
    margin: 10px;
    margin-bottom: 10px;
  }
`;

const Heading = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${colors.light};
  // background: ${colors.color_eamp}; // DEV TODO

  // background: #302b63; // DEV TODO
  background: #24243e; // DEV TODO

  padding: 0 15px;
  border-radius: 10px;

  line-height: 25px;
  font-size: 12px;

  // medium large
  // @media (min-width: 769px) and (max-width: 1199px) {
  //    font-size: 16px;
  //    line-height: 48px;
  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //    font-size: 15px;
  //    line-height: 40px;
  // }

  // @media (max-width: 375px) {
  //    font-size: 13px;
  //    line-height: 30px;
  // }
`;

const Arrow = styled.img`
  height: 7px;
  width: 13px;

  // @media (max-width: 768px) {
  //   height: 9px;
  //   width: 15px;
  // }
`;

const Content = styled.p`
  padding: 15px 20px 18px 20px;
  font-size: 13px;

  line-height: 15px;

  //   background-color: ${colors.secondary};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0 0 10px 10px;
  margin-top: -15px;

  position: relative;
  z-index: -1;

  // TODO give it a shadow?
  -webkit-box-shadow: 1px 5px 13px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.5);

  //   @media (min-width: 769px) and (max-width: 1199px) {
  //     font-size: 16px;
  //   }

  //   @media (max-width: 768px) {
  //     font-size: 12px;
  //     padding: 24px 11px 11px 11px;
  //   }
`;

function Collapsible(props) {
  const [open, setOPen] = useState(false); // we can chose later to make it open by default

  const [rotate, setRotate] = useState("180deg");

  const toggle = () => {
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setOPen(!open);
  };
  return (
    <CollapseContainer>
      <Heading onClick={toggle}>
        {props.title}
        <Arrow src={svgArrow} style={{ rotate: `${rotate}` }} alt="chevron" />
      </Heading>
      {open && (
        <Content>
          {props.text} <br /> {props.content} <br /> {props.activities}
        </Content>
      )}
    </CollapseContainer>
  );
}
export default Collapsible;
