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

function SemiCol() {
  const Punct = styled.span`
    color: ${colors.color_operator};
    // color: red;
  `;
  return <Punct>{"}"}</Punct>;
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row-reverse;

  // align-items: center;
  // justify-content: space-around;
  //   padding: 10px 0;
  // color: ${colors.primary};
  //   background-color: ${colors.light};
  //   height: 128px;
  //   width: 100%;

  // height: 150px;
  border: dashed 2px black; // DEV
`;

//   // @media (min-width: 769px) and (max-width: 1199px) {
//   //    height: 52px;
//   // }

//   // @media (min-width: 375px) and (max-width: 768px) {
//   //    height: 48px;
//   // }

//   // @media (max-width: 375px) {
//   //    height: 43px;
//   // }
// `;

const CodeBox = styled.section`
  //   display: flex;

  flex-grow: 2;

  background-color: ${colors.color_background};
  border-radius: 10px;
  padding: 1.2rem;
  font-size: 1.1rem;

  font-family: "Inconsolata", monospace; // DEV

  // color: ${colors.color_eamp};
  color: red;

  // Extras
  &::after {
    color: ${colors.color_operator};
    content: "}";
    font-size: 1.5rem;
  }
`;

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
`;

const Line = styled.div`
  //   display: flex;

  color: ${colors.color_attribute};
  &::after {
    content: ";";
    color: ${colors.color_operator};
  }
`;

const Operator = styled.span`
  //   display: flex;

  color: ${colors.color_operator};
`;

const String = styled.span`
  //   display: flex;
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
      <Pic />

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
          LinkedIn civil<Operator>:</Operator>
          <a href="grabber@sssano.net">
            <Parameter> ccccc</Parameter>
          </a>
        </Line>

        <section>
          <SubSectionTitle>__Languages</SubSectionTitle>
          <section>
            <Line>
              Français<Operator>:</Operator>
              <Parameter> Fluent</Parameter>
            </Line>
            <Line>
              English<Operator>:</Operator>
              <Parameter> Fluent</Parameter>
            </Line>
            <Line>
              Spanish<Operator>:</Operator>
              <Parameter> Learning</Parameter>
            </Line>
            <Line>
              German<Operator>:</Operator>
              <Parameter> Notions</Parameter>
            </Line>
            <SemiCol />
          </section>
        </section>

        <section>
          <SubSectionTitle>__Address</SubSectionTitle>
          <section>
            <Line>
              Street<Operator>:</Operator>
              <String> "44, avenue Jean Jaures"</String>
            </Line>
            <Line>
              Complement <Operator>:</Operator>
              <Colorobject>batiment</Colorobject>
              <Colorvariable>.batiment_A</Colorvariable>
            </Line>
            <Line>
              Ville<Operator>:</Operator>
              <String>"Rosny-Sous-Bois"</String>
            </Line>
            <Line>
              Postal Code<Operator>:</Operator>
              <Func>93110</Func>
            </Line>
            <SemiCol />
          </section>
        </section>
      </CodeBox>
    </HeaderContainer>
  );
}
