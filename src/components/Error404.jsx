import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5%;

  gap: 50px;

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 40px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 375px) {
    gap: 15px;
  }
`;

const Title = styled.h1`
  font-size: 288px;
  font-weight: 700;

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 150px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 96px;
  }

  @media (max-width: 375px) {
    font-size: 96px;
  }
`;
const ErrorText = styled.p`
  padding: 0 50px;
  width: 70%;
  text-align: center;

  font-size: 36px;

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 28px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 22px;
    padding: 0;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    padding: 0;
  }
`;
const ErrorBacklink = styled.a`
  font-size: 18px;

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function Error404() {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <ErrorBacklink href="/">
        Le CV est par ici! XXX ADD ICONS HERE XXX
      </ErrorBacklink>
    </ErrorContainer>
  );
}
