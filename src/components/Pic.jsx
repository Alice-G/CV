import React from "react";

import styled from "styled-components";
import colors from "../style/colors";

import AliceProfile from "../assets/aliceprofile.jpg";

const PicContainer = styled.header`
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: space-between;
  //   padding: 10px 0;
  //   color: ${colors.primary};
  //   background-color: ${colors.light};
  //   height: 128px;
  //   width: 100%;
`;
const ProfilePic = styled.img`
  // height: 200px;
  border-radius: 50%;

  height: 80px; // DEV

  // @media (min-width: 769px) and (max-width: 1199px) {
  //    height: 52px;
  // }

  // @media (min-width: 375px) and (max-width: 768px) {
  //    height: 48px;
  // }

  // @media (max-width: 375px) {
  //    height: 43px;
  // }
`;

export default function Pic() {
  return (
    <PicContainer>
      <ProfilePic src={AliceProfile} alt="Profile photo" />
    </PicContainer>
  );
}
