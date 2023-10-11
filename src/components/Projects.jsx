// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE

import React from "react";
// import { useState } from "react";

import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

// *************************************
// XXXXXXXX
// *************************************

const PJContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PJSectionTitle = styled.h3`
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;
  font-size: 28px;

  width: 80px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 10px;

  // border: 3px dotted brown; // DEV

  color: ${colors.color_sectiontitle}; // DEV

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const PJCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;

  // border: 3px dashed hotpink; // DEV

  @media (min-width: 376px) and (max-width: 768px) {
    // border: 3px dashed orange; // DEV
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 375px) {
    // border: 3px dashed skyblue; // DEV
    width: 95%;
  }
`;

const PJCard = styled.div`
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  width: 47%;

  background-color: ${colors.color_primary01};

  // border: 3px dotted hotpink; // DEV

  @media (min-width: 992px) and (max-width: 1199px) {
    // border: 3px dotted green; // DEV
    width: 46%;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    // border: 3px dotted grey; // DEV
    width: 45%;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    // border: 3px dotted orange; // DEV
    width: 90%;
  }

  @media (max-width: 375px) {
    // border: 3px dotted skyblue; // DEV
    width: 90%;
  }
`;

const PJHeader = styled.div`
  display: flex;
  flex-direction: column;

  margin: -5px;
  padding: 7px 0px 7px 6px;

  background-color: ${colors.color_primary02};
  border-radius: 10px;
`;

const PJTitle = styled.h3`
  font-size: 16px;
  //   font-weight: bold;
`;

const PJBody = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  padding-left: 5px;

  // border: 2px dotted orange; // DEV
  font-size: 18px;

  @media (min-width: 992px) and (max-width: 1199px) {
    // color: green; // DEV
    font-size: 16px;
    padding-left: 3px;
  }

  @media (min-width: 376px) and (max-width: 991px) {
    // color: grey; // DEV
    font-size: 15px;
    padding-left: 2px;
  }

  @media (max-width: 375px) {
    // color: skyblue; // DEV
    font-size: 13px;
    padding-left: 2px;
  }
`;

const PJDescription = styled.p`
  line-height: 19px;

  color: ${colors.color_primary07};

  // border: 2px dotted hotpink; // DEV
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flax-wrap: wrap;

  margin-left: 0;
  // padding-left: 0.5em; //DECIDE
  padding-left: 1em;

  // border: 3px dotted cadetblue; //DEV
`;

const ListItem = styled.li`
  color: ${colors.color_primary07};
  list-style-type: circle;

  line-height: 22px;

  @media (min-width: 375px) and (max-width: 1199px) {
    // //   green; // DEV
    // orange; // DEV

    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 375px) {
    //    skyblue; // DEV
    font-size: 14px;
    line-height: 18px;
  }

  // TODO at 570px it gets too narrow for two side by side columns

  // border: 2px dotted cadetblue; // DEV
`;

const WebsiteLink = styled.div`
  line-height: 19px;
  text-align: right;
  font-style: oblique;

  color: ${colors.color_sectiontitle};
  // border: 3px dotted cadetblue; //DEV
`;

function Education() {
  return (
    <PJContainer>
      <PJSectionTitle>Projets</PJSectionTitle>

      <PJCardsContainer>
        {/* KANAP  */}
        <PJCard>
          <PJHeader>
            <PJTitle>Web App de location immobilière</PJTitle>
          </PJHeader>

          <PJBody>
            <PJDescription>
              Développement de l’ensemble de l’application : composants, React
              Router, selon les maquettes Figma.
              <br /> <br />
            </PJDescription>
            <PJDescription>Élements notables :</PJDescription>

            <List>
              <ListItem>galerie défilante</ListItem>
              <ListItem>composants collapse avec State</ListItem>
              <ListItem>composents remplis dynamiquement avec props</ListItem>
            </List>

            <a
              href="https://p7-kasa-gold.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebsiteLink>Visiter la démo</WebsiteLink>
            </a>
          </PJBody>
        </PJCard>

        <PJCard>
          <PJHeader>
            <PJTitle>Plateforme d’avis participatifs</PJTitle>
          </PJHeader>

          {/* HOT TAKES  */}
          <PJBody>
            <PJDescription>
              Développement de l’API et des liens avec la base de données.
              <br /> <br />
            </PJDescription>
            <PJDescription>Exigences techniques et de sécurité:</PJDescription>

            <List>
              <ListItem>Client-side validation du Data Model </ListItem>
              <ListItem>API Routes </ListItem>
              <ListItem>
                Plugin Mongoose utilisé pour garantir unicité des logins et
                signaler les erreurs
              </ListItem>
              <ListItem>
                Token d’identification, utilisé sur toutes les routes. (chaque
                partie du CRUD requiert différentes autorisations )
              </ListItem>
              <ListItem>Mot de passe haché </ListItem>
            </List>
            {/* <a
              href="https://p7-kasa-gold.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebsiteLink>Link here</WebsiteLink>
            </a> */}
          </PJBody>
        </PJCard>
      </PJCardsContainer>
    </PJContainer>
  );
}
export default Education;
