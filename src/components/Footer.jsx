// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR

//TODO credit icons <div> Icons made by <a href="https://www.flaticon.com/authors/najmunnahar" title="NajmunNahar"> NajmunNahar </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

import React from "react";
import styled from "styled-components";
import colors from "../style/colors";

import linkedin from "../assets/icons/linkedin128.png";
import email from "../assets/icons/email128.png";

//TODO remove
// npm install styled-icons --save

// TODO something's off with alignment here responsive
const FooterContainer = styled.footer`
  // just a box to adjust layout

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 30px 20px;

  // border: 5px double orange; // DEV
`;

const Bye = styled.p`
  font-family: "La Belle Aurore", cursive;
  font-size: 40px;

  color: ${colors.color_sectiontitle}; // TODO

  // border: dashed 2px pink; // DEV
`;

// DEV del this? DEL
const IconBox = styled.a`
  display: flex;
  flex-direction: row;
  gap: 100px;

  //TODO align self for 1st icon
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

  padding-top: 10px; // to align
`;

const IconLinkedIn = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "LinkedIn profile link",
}))`
  width: 70px;
  opacity: 0.7; //DEV DECIDE
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Bye>I'm looking forward to hearing from you!</Bye>

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
