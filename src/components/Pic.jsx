import React from "react";

import styled from "styled-components";
import colors from "../style/colors";

import AliceProfile from "../assets/aliceprofile.jpg";

const PicContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  // border: dashed 2px pink; // DEV
`;
const ProfilePic = styled.img`
  height: 150px; // DEV

  border-radius: 50%;

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
