// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR

import React from "react";
import styled from "styled-components";
import colors from "../style/colors";

import linkedin from "../assets/icons/linkedin128.png";
import email from "../assets/icons/email128.png";

//TODO remove
// npm install styled-icons --save

// *************************************
// XXXXXXXX
// *************************************

const FooterContainer = styled.footer`
  // just a box to adjust layout

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 50px 20px;

  @media (min-width: 769px) and (max-width: 1199px) {
    // color: green; // DEV
    padding: 30px 20px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    // color: orange; // DEV
  }

  @media (max-width: 375px) {
    // color: skyblue; // DEV
  }

  // border: 5px double orange; // DEV
`;

const Bye = styled.p`
  font-family: "La Belle Aurore", cursive;
  font-size: 40px;
  text-align: center;

  color: ${colors.color_sectiontitle};

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 35px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 375px) {
    font-size: 25px;
  }

  // border: dashed 2px pink; // DEV
`;

const IconBox = styled.a`
  display: flex;
  flex-direction: row;
  gap: 100px;

  //TODO align self for 1st icon

  @media (min-width: 375px) and (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 10px;
  }
`;

const Link = styled.a`
  // font-size: 40px;

  // border: dashed 2px pink; // DEV
`;

const IconEmail = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "mailto link",
}))`
  width: 70px;
  opacity: 0.7; //DEV DECIDE
  //TODO font-size 10px for alt text?

  padding-top: 10px; // to align

  @media (min-width: 375px) and (max-width: 768px) {
    color: orange; // DEV
    width: 50px;
  }

  @media (max-width: 375px) {
    width: 45px;
  }
`;

const IconLinkedIn = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "LinkedIn profile link",
}))`
  width: 70px;
  opacity: 0.7; //DEV DECIDE

  @media (min-width: 375px) and (max-width: 768px) {
    width: 50px;
  }

  @media (max-width: 375px) {
    width: 45px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      {/* <Bye>I'm looking forward to hearing from you!</Bye> */}
      {/* <Bye>Dans l'attente d'avoir de vos nouvelles.</Bye> */}
      <Bye>Au plaisir d'échanger avec vous bientôt.</Bye>
      {/* <Bye>Au plaisir de collaborer avec vous.</Bye> */}

      <IconBox>
        <Link href="mailto:so.gayat@gmail.com">
          <IconEmail src={email} />
        </Link>

        <Link href="https://www.linkedin.com/in/alice-gayat/">
          <IconLinkedIn src={linkedin} />
        </Link>
      </IconBox>
    </FooterContainer>
  );
}
