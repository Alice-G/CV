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
  padding-top: 20px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 20px;
  }
`;

const CodeBox = styled.div`
  width: 600px;
  margin: 0 0 20px 20px;

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

  @media (min-width: 901px) and (max-width: 1199px) {
    width: 550px;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    width: 500px;
  }

  @media (min-width: 501px) and (max-width: 768px) {
    width: 450px;
    margin: 0;
  }

  @media (min-width: 375px) and (max-width: 500px) {
    width: 370px;
    margin: 0;
  }

  @media (max-width: 375px) {
    width: 80%;
    margin: 0;
  }
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
  `;
  return <Punct>{"}"}</Punct>;
}

const Name = styled.h1`
  color: ${colors.color_class};
  font-size: 1.5rem;
  font-weight: 100;

  &::before {
    color: ${colors.color_operator};
    content: ".";
  }
  &::after {
    color: ${colors.color_operator};
    content: " {";
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const SubSectionTitle = styled.h2`
  color: ${colors.color_class};
  font-size: 1.2rem;
  font-weight: 100;

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

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
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

  @media (max-width: 500px) {
    font-size: 1rem;
  }
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

const FuncPhone = styled.a`
  //   display: flex;
  color: ${colors.color_func};
`;

const Func = styled.span`
  //   display: flex;
  color: ${colors.color_func};
`;

const Colorobject = styled.span`
  color: ${colors.color_class};

  // Extras

  &::before {
    color: ${colors.color_white};
    content: " \${";
  }
`;

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
          Phone<Operator>:</Operator>{" "}
          <FuncPhone href="tel:+33 0625277945">+33 0625277945</FuncPhone>
        </Line>
        <Line>
          Email<Operator>:</Operator>
          <a href="mailto:so.gayat@gmail.com">
            <Parameter> so.gayat@gmail.com</Parameter>
          </a>
        </Line>
        <Line>
          LinkedIn Alias<Operator>:</Operator>
          <a
            href="https://www.linkedin.com/in/alice-gayat/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <SemiCol />
          </section>
        </section>

        <section>
          <SubSectionTitle>__Location</SubSectionTitle>
          <section>
            <Line>
              Mobilité <Operator>:</Operator>
              <Colorobject>mobilité</Colorobject>
              <Colorvariable>.IDF</Colorvariable>
            </Line>

            <Line>
              Télétravail OK <Operator>:</Operator>
              <Func> true</Func>
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
