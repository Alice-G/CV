// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE

import React from "react";
import { useState } from "react";

import styled from "styled-components";
import colors from "../style/colors";

import experience from "../data/experience.json";

import Collapse from "./Collapse";

// TODO
import { BsFillMortarboardFill } from "react-icons/bs";
import { BsMortarboard } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

// TODO make sure tags near UMich don't be too high
// TODO look at styling and themes
// TODO list of responsibilities
// TODO Malakoff IDF small screen
// TODO rename components

const XPContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // margin: 3%;

  // background-color: rgba(255, 255, 255, 0.5);

  // @media (max-width: 768px) {
  //   margin: 10px;
  //   margin-bottom: 10px;
  // }

  // width: 500px; // DEV

  // border: 3px dotted yellow; // DEV
`;

const XPSectionTitle = styled.h3`
  margin: 30px 10px 10px 10px;
  font-family: "IM Fell DW Pica", serif; // DEV
  font-style: italic; // DEV

  font-size: 28px; // DEV

  // border: 3px dotted brown; // DEV

  color: ${colors.color_sectiontitle}; // DEV
`;

const XPCard = styled.div`
  padding: 5px;
  margin: 5px;
  border-radius: 10px;

  // DECIDE do I want a box shadow here too?
  // display: flex;
  background-color: rgba(255, 255, 255, 0.1);

  width: 95%; // DEV
  // border: 2px solid green; // DEV
`;

const XPHeader = styled.div`
  display: flex;
  flex-direction: column;

  margin: -5px;
  // padding: 5px 5px 0 5px; //DECIDE
  padding: 5px;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
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
`;

const JobInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const JobTitle = styled.h3`
  font-size: 16px;
  //   font-weight: bold;
`;

const Program = styled.h4`
  font-size: 14px;
  //   font-weight: bold; // DECIDE ???

  //   color: blue; // DEV
`;

const FieldofStudy = styled.p`
  border-radius: 7px;
  padding: 2px 6px;
  font-size: 12px;

  height: 19px;
  line-height: 19px;

  // background-color: cadetblue; //DEV
  background: rgba(255, 255, 255, 0.2);
`;

const JobLocation = styled.p`
  border-radius: 7px;
  padding: 2px 6px;
  font-size: 12px;

  height: 19px;
  line-height: 19px;

  // background-color: grey; // DEV
  background: rgba(255, 255, 255, 0.2); // DECIDE
  background: rgba(0, 0, 0, 0.3); // DECIDE
  color: rgba(255, 255, 255, 0.7);
`;

const SchoolBody = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  //   border: 2px dotted orange; // DEV
`;

const SchooExtralInfo = styled.div`
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
  // border: 2px dotted hotpink; // DEV
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  flex-wrap: wrap;
  //   padding: 3px;

  width: 90%;
  border-radius: 5px;
  font-size: 11px;

  //   background-color: yellow; // DEV
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

  // // medium screens
  // @media (min-width: 375px) and (max-width: 768px) {
  //   font-size: 12px;
  // }

  // // small screens
  // @media (max-width: 375px) {
  //   font-size: 10px;
  // }
`;

const Responsibilities = styled.span`
  // background: ${colors.color_func}; // DEV

  display: flex;

  // color: ${colors.light};

  &:before {
    content: "∗  ";
    white-space: pre;
    font-size: 18px;
  }

  //     theme={{ main: "royalblue" }

  // // medium screens
  // @media (min-width: 375px) and (max-width: 768px) {
  //   font-size: 12px;
  // }

  // // small screens
  // @media (max-width: 375px) {
  //   font-size: 10px;
  // }
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
    <XPContainer>
      <XPSectionTitle>Expérience</XPSectionTitle>

      {experience.map((listData) => {
        console.log(listData);
        return (
          <XPCard key={listData.id}>
            <div></div>

            <div></div>

            <XPHeader>
              <JobInfo>
                <JobTitle>{listData.jobtitle}</JobTitle>
                <JobLocation>{listData.location}</JobLocation>
              </JobInfo>

              <JobInfo>
                <Program>{listData.workplace}</Program>
                <FieldofStudy>{listData.sector}</FieldofStudy>
              </JobInfo>
            </XPHeader>

            <SchoolBody>
              <SchooExtralInfo>
                <SchoolDates>{listData.dates}</SchoolDates>

                <Tags>
                  {listData.tags.map((s) => (
                    <Tag key={s}>⇒{s}</Tag>
                  ))}
                </Tags>
              </SchooExtralInfo>
              <Collapse
                title="Responsibilities"
                // text=
                content={listData.responsibilities.map((s) => (
                  <Responsibilities key={s}>{s}</Responsibilities>
                ))}
                alt="Collapsible section with list of responsiblities"
              />
            </SchoolBody>
          </XPCard>
        );
      })}
    </XPContainer>
  );
}
export default Education;
