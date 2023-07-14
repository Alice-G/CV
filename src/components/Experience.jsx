// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE

import React from "react";
import { useState } from "react";

import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

import experience from "../data/experience.json";

import Collapse from "./Collapse";

// TODO list of responsibilities
// TODO Malakoff IDF small screen

// *************************************
// XXXXXXXX
// *************************************

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

  // color: blue; // DEV

  // @media (min-width: 769px) and (max-width: 1199px) {
  //   color: green; // DEV

  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //   color: orange; // DEV

  // }

  // @media (max-width: 375px) {
  //   color: skyblue; // DEV

  // }

  // border: 3px dotted yellow; // DEV
`;

const XPSectionTitle = styled.h3`
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

const JobInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const JobTitle = styled.h3`
  font-size: 16px;
  //   font-weight: bold;
`;

const Firm = styled.h4`
  font-size: 14px;
  //   font-weight: bold; // DECIDE ???

  // color: blue; // DEV
`;

const Sector = styled.p`
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

const XPBody = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  // border: 2px dotted orange; // DEV
`;

const XPExtralInfo = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: space-bet // DEVween;
  // DEV
`;

const XPDates = styled.div`
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

  row-gap: 3px;

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

  // // medium screens
  // @media (min-width: 375px) and (max-width: 768px) {
  //   font-size: 12px;
  // }

  // // small screens
  // @media (max-width: 375px) {
  //   font-size: 10px;
  // }
`;

function Education() {
  return (
    <XPContainer>
      <XPSectionTitle>Expérience</XPSectionTitle>

      {experience.map((listData) => {
        // console.log(listData);
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
                <Firm>{listData.workplace}</Firm>
                <Sector>{listData.sector}</Sector>
              </JobInfo>
            </XPHeader>

            <XPBody>
              <XPExtralInfo>
                <XPDates>{listData.dates}</XPDates>

                <Tags>
                  {listData.tags.map((s) => (
                    <Tag key={s}>⇒{s}</Tag>
                  ))}
                </Tags>
              </XPExtralInfo>
              <Collapse
                title="responsabilités"
                // text=
                content={listData.responsibilities.map((s) => (
                  <Responsibilities key={s}>{s}</Responsibilities>
                ))}
                alt="Collapsible section with list of responsiblities"
              />
            </XPBody>
          </XPCard>
        );
      })}
    </XPContainer>
  );
}
export default Education;
