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
  height: 250px; // DEV

  border-radius: 50%;

  // border: dashed 2px cadetblue; // DEV

  @media (min-width: 901px) and (max-width: 1199px) {
    height: 200px;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    height: 150px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 375px) {
    height: 150px;
  }
`;

export default function Pic() {
  return (
    <PicContainer>
      <ProfilePic src={AliceProfile} alt="Profile photo" />
    </PicContainer>
  );
}
