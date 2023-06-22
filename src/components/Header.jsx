// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR

// TODO TODO TODO
// TODO Email
// TODO linked in
// TODO MAKE TITLE AND PIC ARRANGE WHOLE HEADER

import React from "react";

// import styled, { createGlobalStyle } from "styled-components"; DEV
import styled from "styled-components";
import colors from "../style/colors";

import Pic from "./Pic.jsx";

// *************************************
// ARCHITECTURE
// *************************************

// TODO something's off with alignment here responsive
const HeaderContainer = styled.header`
  // just a box to adjust layout

  padding: 20px;
  // width: 100%;

  display: flex;

  // flex-direction: row-reverse;
  // justify-content: space-between;

  // border: 5px double orange; // DEV
`;

const CodeBox = styled.div`
  // flex-grow: 2; // DEV

  // FIXME Make this smaller but fix wrap on text TODO
  width: 600px; // DEV DECIDE TODO smaller for smaller screens

  padding: 1.3rem;

  background-color: ${colors.color_background};
  border-radius: 10px;
  font-size: 1.1rem;

  font-family: "Inconsolata", monospace; // DEV

  // Extras
  &::after {
    color: ${colors.color_operator};
    content: "}";
    font-size: 1.5rem;
  }
  // border: dashed 2px turquoise; // DEV
`;

const PicBox = styled.div`
  display: flex;
  align-items: center;
  margin: auto;

  // border: dashed 2px turquoise; // DEV
`;

// *************************************
// CODE BOX
// *************************************

function SemiCol() {
  const Punct = styled.span`
    color: ${colors.color_operator};
    // color: red;
  `;
  return <Punct>{"}"}</Punct>;
}

const Name = styled.h1`
  color: ${colors.color_class};
  font-size: 1.5rem;
  font-weight: 100; // DEV this is what makes it thin

  &::before {
    color: ${colors.color_operator};
    content: ".";
  }
  &::after {
    color: ${colors.color_operator};
    content: " {";
  }
`;

const SubSectionTitle = styled.h2`
  color: ${colors.color_class};
  font-size: 1.2rem;
  font-weight: 100; // DEV this is what makes it thin

  // Extras

  &::before {
    color: ${colors.color_eamp};
    content: "\&";
  }
  &::after {
    color: ${colors.color_operator};
    content: " {";
  }
  // border: dashed 2px mediumseagreen; // DEV
`;

const Line = styled.div`
  // display: flex;
  width: 320px;

  color: ${colors.color_attribute};
  &::after {
    content: ";";
    color: ${colors.color_operator};
  }
  // border: dashed 2px orange; // DEV
`;

const Operator = styled.span`
  //   display: flex;

  color: ${colors.color_operator};
`;

const String = styled.span`
  // border: dashed 2px pink; // DEV

  // display: inline-block;
  // flex-wrap: nowrap;
  // width: 350px;

  color: ${colors.color_string};
`;

const Parameter = styled.span`
  //   display: flex;
  color: ${colors.color_property};
`;

const Func = styled.span`
  //   display: flex;
  color: ${colors.color_func};
`;

//TODO find out correct name for this
const Colorobject = styled.span`
  color: ${colors.color_class};

  // Extras

  &::before {
    color: ${colors.color_white};
    content: " \${";
  }
`;

// TODO change
const Colorvariable = styled.span`
  color: ${colors.color_white};

  // Extras
  &::after {
    color: ${colors.color_white};
    content: "}";
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <CodeBox>
        <Name>Alice_Gayat</Name>
        <Line>
          Age<Operator>:</Operator> <Parameter>36</Parameter>
        </Line>
        <Line>
          Phone<Operator>:</Operator> <Func>+33 0625277945</Func>
        </Line>
        <Line>
          Email<Operator>:</Operator>
          <a href="so.gayat@gmail.com">
            <Parameter> so.gayat@gmail.com</Parameter>
          </a>
        </Line>
        <Line>
          LinkedIn Alias<Operator>:</Operator>
          <a href="https://www.linkedin.com/in/alice-gayat/">
            <Parameter> alice-gayat</Parameter>
          </a>
        </Line>

        <section>
          <SubSectionTitle>__Languages</SubSectionTitle>
          <section>
            <Line>
              Français<Operator>:</Operator>
              <String> "Bilingue"</String>
            </Line>
            <Line>
              English<Operator>:</Operator>
              <String> "Bilingue"</String>
            </Line>
            {/* <Line>
              Spanish<Operator>:</Operator>
              <Parameter> Learning</Parameter>
            </Line> */}
            {/* <Line>
              German<Operator>:</Operator>
              <Parameter> Notions</Parameter>
            </Line> */}
            <SemiCol />
          </section>
        </section>

        <section>
          <SubSectionTitle>__Address</SubSectionTitle>
          <section>
            <Line>
              Mobilité <Operator>:</Operator>
              <Colorobject>mobilité</Colorobject>
              <Colorvariable>.IDF</Colorvariable>
            </Line>

            <SemiCol />
          </section>
        </section>
      </CodeBox>

      <PicBox>
        <Pic />
      </PicBox>
    </HeaderContainer>
  );
}
