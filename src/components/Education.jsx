// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE

import React from "react";
import { useState } from "react";

import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

import education from "../data/education.json";

import Collapse from "./Collapse";

// TODO make sure tags near UMich don't be too high
// TODO look at styling and themes
//

// *************************************
// XXXXXXXX
// *************************************

// *************************************
// XXXXXXXX
// *************************************

const EducationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //   margin: 3%;
  // background-color: rgba(255, 255, 255, 0.5);

  //   @media (max-width: 768px) {
  //     margin: 10px;
  //     margin-bottom: 10px;
  //   }

  // border: 3px dotted yellow; // DEV
`;

const EducationSectionTitle = styled.h3`
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;

  font-size: 28px;

  margin: 30px 10px 10px 10px;

  // border: 3px dotted brown; // DEV

  color: ${colors.color_sectiontitle}; // DEV

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

// DECIDE do I want a box shadow here too?
const SchoolCard = styled.div`
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);

  // border: 2px solid green; // DEV
`;

const SchoolHeader = styled.h3`
  display: flex;
  flex-direction: row;
  // justify-content: space-between; // ??

  // background-color: rgba(255, 255, 255, 0.2); // DEV
`;
const SchoolLogoContainer = styled.div`
  height: 50px;
  width: 50px;

  display: flex;
  margin-right: 5px;

  // border: 1px dashed yellow; // DEV
`;
///// SIZE AND CORRECT IMAGES TODO
const SchoolLogo = styled.img`
  font-size: 10px; // for alt text
  // border-radius: 2px;

  // flex-basis: 100px; // CHECK
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;

  // Trying to fill space without crunching image
  //   flex-grow: 1;
  //   flex-basis: 500px; // TEST
  width: 100%; // this seems to work if there's an actual image
  //
  //   border: 2px dashed pink; // DEV

  // background-color: rgba(255, 255, 255, 0.2);
`;

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SchoolName = styled.h3`
  font-size: 16px;
  //   font-weight: bold;

  color: rgba(255, 255, 255, 0.8);
`;

const Program = styled.h4`
  font-size: 14px;
  //   font-weight: bold; // DECIDE ???

  color: rgba(255, 255, 255, 0.8);

  //   color: blue; // DEV
`;

const FieldofStudy = styled.p`
  border-radius: 7px;
  padding: 2px 6px;
  font-size: 12px;

  height: 19px;
  line-height: 19px;

  // background-color: cadetblue; // DEV
  background: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.7);
`;

// TODO trying to make the button less tall
const SchoolLocation = styled.p`
  padding: 2px 6px;
  border-radius: 7px;
  font-size: 12px;
  height: 19px;
  line-height: 19px;
  // background-color: grey; // DEV
  background: rgba(255, 255, 255, 0.2);
`;

const SchoolBody = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  //   border: 2px dotted orange; // DEV
`;

const SchoolExtralInfo = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-bet // DEVween;
  // DEV
`;

const SchoolDates = styled.div`
  font-size: 13px;

  min-width: 100px;
  // color: dimgray;
  color: rgba(255, 255, 255, 0.4); // DECIDE
  //   border: 2px dotted hotpink; // DEV
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 3px;
  justify-content: right;

  width: 90%;
  border-radius: 5px;
  font-size: 11px;
`;

const Tag = styled.div`
  display: flex;

  padding: 0 15px;
  margin-left: 7px;
  line-height: 25px;

  font-size: 12px;
  border-radius: 5px;
  color: ${colors.light};
  // background: ${colors.primary};
  background: rgba(255, 255, 255, 0.2);

  //     theme={{ main: "royalblue" }

  //   // medium screens
  //   @media (min-width: 375px) and (max-width: 768px) {
  //     font-size: 12px;
  //   }

  //   // small screens
  //   @media (max-width: 375px) {
  //     font-size: 10px;
  //   }
`;

// TEST

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "sienna",
  },
};

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};

// TEST

function Education() {
  return (
    <EducationContainer>
      <EducationSectionTitle>
        Formation Professionnalisante
      </EducationSectionTitle>
      {education.map((listData) => {
        console.log(listData);
        return (
          <SchoolCard key={listData.id}>
            <SchoolHeader>
              <SchoolLogoContainer>
                <SchoolLogo src={listData.logo} alt="logo of school" />
              </SchoolLogoContainer>
              <TitleSection>
                <SchoolInfo>
                  <SchoolName>{listData.institution}</SchoolName>
                  <FieldofStudy>{listData.sector}</FieldofStudy>
                </SchoolInfo>
                <SchoolInfo>
                  <Program>{listData.program}</Program>
                  <SchoolLocation>{listData.location}</SchoolLocation>
                </SchoolInfo>
              </TitleSection>
            </SchoolHeader>

            <SchoolBody>
              <SchoolExtralInfo>
                <SchoolDates>{listData.dates}</SchoolDates>
                <Tags>
                  {listData.tags.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </Tags>
              </SchoolExtralInfo>
              <Collapse
                title="more"
                // text=
                content={listData.description}
                activities={listData.activities}
                alt="Collapsible section with extra info on schooling"
              />
            </SchoolBody>
          </SchoolCard>
        );
      })}
    </EducationContainer>
  );
}
export default Education;
