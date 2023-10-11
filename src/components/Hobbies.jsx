// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE

import React from "react";
//import { useState } from 'react';

// import "animate.css";

import sewing64 from "../assets/icons/001-sewing64.png";
import sketchbook64 from "../assets/icons/013-sketchbook64.png";
import book2 from "../assets/icons/017-spell-book.png";
import diy64 from "../assets/icons/003-diy64.png";
import play4 from "../assets/icons/015-play-1.png";
import d2064 from "../assets/icons/007-d2064.png";

// import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";
const { useState } = React;

// TODO icon alt text
//TODO Tidy up icons folder
// TODO comment code+
// import needle from "../assets/needle.png"; // DEV TODO DEL

// WEIRD CHECK TEST fadeIn and fadeOutDown work withougt being configured why

// TODO credit icons

// *******************************************
// ANIMATION STATION
// *******************************************

// TODO adjust this?
// Hobby Icons
const jello = keyframes`
  11.1% {
    -webkit-transform: none
    transform: none
  }
  22.2% {
    transform: skewX(-6.5deg) skewY(-6.5deg)
  }
  33.3% {
    transform: skewX(3.25deg) skewY(3.25deg)
  }
  44.4% {
    transform: skewX(-1.625deg) skewY(-1.625deg)
  }
  55.5% {
    transform: skewX(0.7625deg) skewY(0.7625deg)
  }
  66.6% {
    transform: skewX(-0.39125deg) skewY(-0.39125deg)
  }
  77.7% {
    transform: skewX(0.190625deg) skewY(0.190625deg)
  }
  88.8% {
    transform: skewX(-0.0953125deg) skewY(-0.0953125deg)
  }
  100% {
    transform: none
  }
}
`;

// Legend Box Enter
// const fadein = keyframes`

// from {
//   opacity: 0;
//   }
//   to {
//   opacity: 1;
//   }
//   }
// }
// `;
// https://tools.webdevpuneet.com/css-animation-generator/

// Legend Box Leave
// const fadedownout = keyframes`
//    from {
//    opacity: 1;
//    }
//     to {
//     opacity: 0;
//     -webkit-transform: translate3d(0, 100%, 0);
//     transform: translate3d(0, 100%, 0);
//     }
//     }
// `;

// https://css-tricks.com/different-transitions-for-hover-on-hover-off/

// *******************************************
// STYLING SECTION
// *******************************************

const TopLevelContainer = styled.div`
  margin-left: 5px;
  // border: 2px dotted cadetblue; // DEV

  @media (min-width: 571px) and (max-width: 768px) {
    padding: 0;
    margin: auto;

    width: 80%;
  }

  @media (min-width: 376px) and (max-width: 570px) {
    padding: 0;
    margin: auto;

    width: 95%;
  }

  @media (max-width: 375px) {
    padding: 0;
    margin: auto;

    width: 95%;
  }
`;

const IconListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-around; // DECIDE
  // justif-content: space-between; // DECIDE FIXME why does this not work?
  // justif-content: space-evenly; // DECIDE FIXME why does this not work?

  padding: 5px;

  // border: 3px dashed pink; // DEV

  @media (min-width: 970px) and (max-width: 1433px) {
    // padding: 5px 20px;
    // column-gap: 50px;

    column-gap: 25px;
    width: 300px;
    margin: auto;
  }

  @media (min-width: 795px) and (max-width: 969px) {
    padding: 5px 10px;
    column-gap: 30px;
  }

  @media (min-width: 667px) and (max-width: 794px) {
    // padding: 5px 10px;
    // column-gap: 30px;
  }

  @media (min-width: 376px) and (max-width: 666px) {
    column-gap: 25px;
    width: 300px;
    margin: auto;
  }

  @media (min-width: 376px) and (max-width: 430px) {
    column-gap: 15px;
    width: 240px;
    margin: auto;
  }
`;

const SectionTitle = styled.h3`
  color: ${colors.color_sectiontitle}; // DEV
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;
  font-size: 28px; // DEV

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }

  // border: 3px dotted brown; // DEV
`;

const Prompt = styled.div`
  font-size: 12px;
  min-width: 100px;
  color: rgba(255, 255, 255, 0.4);
  // border: 2px dotted hotpink; // DEV
`;

const HoverIconBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 50%;

  background-color: ${colors.color_primary08}; // DEV // TODO

  height: 60px;
  width: 60px;

  // custom fitting the icons
  box-sizing: border-box;
  &:nth-child(1) {
    padding: 4px;
  }
  &:nth-child(2) {
    padding: 9px;
    padding-bottom: 7px;
  }
  &:nth-child(3) {
    padding: 6px;
    padding-bottom: 9px;
    padding-left: 8px;
  }
  &:nth-child(4) {
    padding: 11px;
    padding-bottom: 14px;
  }
  &:nth-child(5) {
    padding: 4px;
  }
  &:nth-child(6) {
    padding: 4px;
    // border: 3px dashed purple;
  }

  &:hover {
    // color: hotpink; // TEST

    animation-name: ${jello};
    animation-duration: 0.5s;
    animation-iteration-count: 1;

    transition-timing-function: ease-out; // TEST check how do I check if ease out works
    // transition-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
`;

const Icon = styled.img`
  width: 100%; // so that it fits itself inside custom padding of parent element
`;

const IconLegendContainer = styled.div`
  height: 100px;
  // width: 100%;
  display: flex;
  // flex-direction: row;
  justify-content: space-around;

  // border: 3px dotted yellow; // DEV
`;

const TextContainerBox = styled.div`
  // height: 71px; // DECIDE

  // background-color: rgba(51, 204, 255, 0.5); // DEV blue
  // border: 3px dotted hotpink;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`;

const ContentContainer = styled.div`
  // TODO FIXME BUG
  height: 70px;
  // height: 100%: // this does not work and makes the border disappear

  // object-fit: fill; // FIXME no effect
  // object-fit: contain;
  // object-fit: cover;
  // object-fit: scale-down;
  // object-fit: none;

  // border: 3px dotted #9933ff; // purple  DEV

  padding: 10px; // DECIDE
`;

const List = styled.ul`
  margin-left: 0;
  padding-left: 0.5em;

  // border: 2px dashed GoldenRod; // DEV
`;

const ListTitle = styled.h6`
  color: ${colors.color_primary08}; // DEV
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;
  font-size: 1em;
  font-weight: 500;
`;
const ListItem = styled.div`
  font-size: 0.8em;
  color: ${colors.color_primary07}; // DEV
  line-height: 1em;
`;

// *******************************************
// BUILDING SECTION
// *******************************************

export default function Attempt2() {
  const [open, setOpen] = useState(false); // we can chose later to make it open by default
  const [box, setBox] = useState("");

  // const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnters = () => {
    setOpen(true);
    console.log("hover");
  };

  function handleMouseLeaves(e) {
    setOpen(false);
    console.log("leaves: ");
    console.log(e);
  }

  const renderContent = () => {
    switch (box) {
      case "Sewing":
        return (
          <ContentContainer>
            <ListTitle>Fil et fibres</ListTitle>
            <List>
              <ListItem>Réparation</ListItem>
              <ListItem>Reproductions historiques</ListItem>
              <ListItem>Crochet/tricot</ListItem>
            </List>
          </ContentContainer>
        );

      case "art":
        return (
          <ContentContainer>
            <ListTitle>Création d'image</ListTitle>
            <List>
              <ListItem>Dessin</ListItem>
              <ListItem>Painture</ListItem>
              <ListItem>Dessin digital</ListItem>
            </List>
          </ContentContainer>
        );

      case "stories":
        return (
          <ContentContainer>
            <ListTitle>Histoires</ListTitle>
            <List>
              <ListItem>Lecture</ListItem>
              <ListItem>Écriture</ListItem>
            </List>
          </ContentContainer>
        );

      case "diy":
        return (
          <ContentContainer>
            <ListTitle>Bricolage</ListTitle>
            <List>
              <ListItem>Réparations</ListItem>
              <ListItem>Travaux manuels</ListItem>
              <ListItem>Arts créatifs</ListItem>
            </List>
          </ContentContainer>
        );

      case "play":
        return (
          <ContentContainer>
            <ListTitle>Consommation de médias</ListTitle>
            <List>
              <ListItem>Musique</ListItem>
              <ListItem>Podcasts</ListItem>
              <ListItem>Films - Séries - Documentaires</ListItem>
            </List>
          </ContentContainer>
        );

      case "d20":
        return (
          <ContentContainer>
            <ListTitle>Role Play / Social</ListTitle>
            <List>
              <ListItem>RPGs</ListItem>
              <ListItem>Théatre</ListItem>
              <ListItem>
                Bénévolat
                <ListItem>(Auxiliaires des aveugles/</ListItem>
                <ListItem>assos étudiantes)</ListItem>
              </ListItem>
            </List>
          </ContentContainer>
        );

      default:
        return null;
    }
  };

  // *******************************************
  // FINAL RENDER
  // *******************************************

  return (
    <TopLevelContainer>
      <SectionTitle>Centres d'intérêt</SectionTitle>
      <Prompt>Hover the icons!</Prompt>
      <IconListContainer>
        <HoverIconBox
          onMouseEnter={() => {
            setBox("Sewing");
            handleMouseEnters();
          }}
          onMouseLeave={handleMouseLeaves}
        >
          <Icon src={sewing64} alt="thread icon" />
        </HoverIconBox>
        <HoverIconBox
          onMouseEnter={() => {
            setBox("art");
            handleMouseEnters();
          }}
          onMouseLeave={handleMouseLeaves}
        >
          <Icon src={sketchbook64} alt="sketchbook icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("stories");
            handleMouseEnters();
          }}
          onMouseLeave={handleMouseLeaves}
        >
          <Icon src={book2} alt="magical book icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("diy");
            handleMouseEnters();
          }}
          onMouseLeave={handleMouseLeaves}
        >
          <Icon src={diy64} alt="diy icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("play");
            handleMouseEnters();
          }}
          onMouseLeave={handleMouseLeaves}
        >
          <Icon src={play4} alt="media play icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("d20");
            handleMouseEnters();
          }}
          onMouseLeave={handleMouseLeaves}
        >
          <Icon src={d2064} alt="d20 icon" />
        </HoverIconBox>
      </IconListContainer>

      <IconLegendContainer>
        {/* <Box> */}
        {open && <TextContainerBox>{renderContent()}</TextContainerBox>}
        {/* </Box> */}
      </IconLegendContainer>
    </TopLevelContainer>
  );
}
