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

const Bloop = styled.div`
  height: 80px;
  width: 80px;
  background-color: cadetblue;

  // -webkit-animation-name: fadeOutDown;
  // animation-name: fadeOutDown;
  // -webkit-animation-duration: 1s;
  // animation-duration: 1s;
  // -webkit-animation-fill-mode: both;
  // animation-fill-mode: both;

  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  &:not(:hover) {
    color: blue;
  }
`;

// https://css-tricks.com/different-transitions-for-hover-on-hover-off/

// *******************************************
// STYLING SECTION
// *******************************************

const TopLevelContainer = styled.div`
  // display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 10px 0;
  //   color: ${colors.primary};
  // background-color: ${colors.light};
  //   height: 128px;
  //   width: 100%;
  // width: 49%;

  // HINT
  // background-color: cadetblue; // DEV
  padding: 5px;
`;

const IconListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-around; // DECIDE
  // justif-content: space-between; // DECIDE FIXME why does this not work?
  // justif-content: space-evenly; // DECIDE FIXME why does this not work?

  // DEV
  // align-items: center;

  padding: 5px;

  // height: 200px; // DEV
  border: 3px dashed pink; // DEV
`;

const SectionTitle = styled.h3`
  font-family: "IM Fell DW Pica", serif;
  font-style: italic;

  font-size: 28px; // DEV

  color: ${colors.color_sectiontitle}; // DEV
`;

// TODO TODO TODO TODO adjust size padding of icons with this and component below
const HoverIconBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.85); // DEV // TODO

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
    color: hotpink;

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

  border: 3px dotted yellow; // DEV
`;

// const Box = styled.div`
//   // display: flex;
//   // height: 60px;
//   width: 200px;

//   background-color: rgba(255, 255, 255, 0.5); // DEV
//   // border: 3px dashed DarkSeaGreen;  // DEV
// `;

const TextContainerBox = styled.div`
  // height: 71px; // DECIDE
  height

  background-color: rgba(51, 204, 255, 0.5); // DEV blue
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

  border: 3px dotted #9933ff; // purple  DEV

  padding: 10px; // DECIDE
`;

// TODO make it so it only works when hovering the right thing
// TODO Adjust from biggest list

const List = styled.ul`
  margin-left: 0;
  padding-left: 0.5em;

  // border: 2px dashed GoldenRod; // DEV
`;

const ListTitle = styled.h6`
  font-size: 0.8em;
  font-weight: 500;

  // background-color: rgba(139, 0, 0, 0.5); // DEV brown
`;
const ListItem = styled.div`
  font-size: 0.8em;
  font-weight: 40000:21:0000:36:00☀️Long break!!DeleteTopComplete00:00;
  // padding: 0; // DEV does not work
  // margin: 0;// DEV does not work
  line-height: 1em;

  // background-color: rgba(222, 184, 135, 0.5); // DEV brown
`;

// *******************************************
// BUILDING SECTION
// *******************************************

export default function Attempt2() {
  const [open, setOpen] = useState(false); // we can chose later to make it open by default
  const [box, setBox] = useState("");

  const [isHovering, setIsHovering] = useState(false);

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
            <ListTitle>Thread and Yarn</ListTitle>
            <List>
              <ListItem>Mending</ListItem>
              <ListItem>Historical Sewing</ListItem>
              <ListItem>Knitting</ListItem>
            </List>
          </ContentContainer>
        );

      case "art":
        return (
          <ContentContainer>
            <ListTitle>Artsy stuff</ListTitle>
            <List>
              <ListItem>Doodling</ListItem>
              <ListItem>Painting</ListItem>
              <ListItem>Digital art</ListItem>
            </List>
          </ContentContainer>
        );

      case "stories":
        return (
          <ContentContainer>
            <ListTitle>Stories</ListTitle>
            <List>
              <ListItem>Reading</ListItem>
              <ListItem>Writing</ListItem>
            </List>
          </ContentContainer>
        );

      case "diy":
        return (
          <ContentContainer>
            <ListTitle>DIYing</ListTitle>
            <List>
              <ListItem>Repairs</ListItem>
              <ListItem>Craftings</ListItem>
              <ListItem>Home improvement</ListItem>
            </List>
          </ContentContainer>
        );

      case "play":
        return (
          <ContentContainer>
            <ListTitle>Media consumption</ListTitle>
            <List>
              <ListItem>Music</ListItem>
              <ListItem>Podcasts</ListItem>
              <ListItem>Movies - Shows - Documentaries</ListItem>
            </List>
          </ContentContainer>
        );

      case "d20":
        return (
          <ContentContainer>
            <ListTitle>Role Playing</ListTitle>
            <List>
              <ListItem>RPGs</ListItem>
              <ListItem>Theatre</ListItem>
            </List>
          </ContentContainer>
        );

      default:
        return null;
    }
  };

  // const fadeout = () => {};

  // All animations will take twice the time to accomplish
  // document.documentElement.style.setProperty("--animate-duration", "2s");

  // All animations will take half the time to accomplish
  // document.documentElement.style.setProperty('--animate-duration', '.5s');

  // *******************************************
  // FINAL RENDER
  // *******************************************

  return (
    <TopLevelContainer>
      <SectionTitle>Hobbies</SectionTitle>
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
          onMouseLeave={() => {
            // toggle();
          }}
        >
          <Icon src={sketchbook64} alt="sketchbook icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("stories");
            handleMouseEnters();
          }}
        >
          <Icon src={book2} alt="magical book icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("diy");
            handleMouseEnters();
          }}
        >
          <Icon src={diy64} alt="diy icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("play");
            handleMouseEnters();
          }}
        >
          <Icon src={play4} alt="media play icon" />
        </HoverIconBox>

        <HoverIconBox
          onMouseEnter={() => {
            setBox("d20");
            handleMouseEnters();
          }}
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
