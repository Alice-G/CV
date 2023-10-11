// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE
// dotted - dashed - solid - double - groove - ridge - inset - outset

// DECIDE call it Bonus?

import styled from "styled-components";
import colors from "../style/colors";
import fonts from "../style/fonts";

// *************************************
// XXXXXXXX
// *************************************

const ExtraInfoOutterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 10px;

  // border: 2px dotted cadetblue; // DEV

  @media (min-width: 992px) and (max-width: 1199px) {
    // border: 2px dotted indianred; // DEV
    padding-top: 5px;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    // border: 2px dotted grey; // DEV
    padding-top: 5px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    // border: 2px dotted mediumpurple; // DEV
    padding-top: 5px;
  }

  @media (max-width: 375px) {
    // border: 2px dotted pink; // DEV
    padding-top: 5px;
  }
`;

const ExtraInfoContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-evenly;
  gap: 10px;

  // border: 3px dotted orange; //DEV

  @media (min-width: 491px) and (max-width: 530px) {
    // border: 3px dotted skyblue; //DEV
    gap: 5px;
  }

  @media (max-width: 490px) {
    flex-direction: column;
    align-items: center;
    // border: 3px dotted yellow; //DEV
    gap: 5px;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  // width: 55%;

  // border: 5px double pink; //DEV

  @media (min-width: 992px) and (max-width: 1199px) {
    // border: 5px double indianred; // DEV
    width: 80%;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    // border: 5px double grey; // DEV
    width: 95%;
  }

  @media (min-width: 531px) and (max-width: 768px) {
    // border: 5px double mediumpurple; // DEV
    width: 65%;
  }

  @media (min-width: 491px) and (max-width: 530px) {
    // border: 5px double grey; // DEV
    width: 55%;
  }

  @media (min-width: 376px) and (max-width: 490px) {
    // border: 5px double navajowhite; // DEV
    width: 100%;
  }

  @media (max-width: 375px) {
    color: pink; // DEV
    // border: 5px double pink; // DEV
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  // width: 42%;

  // border: 5px double green; //DEV

  @media (min-width: 531px) and (max-width: 768px) {
    // border: 5px double mediumpurple; // DEV
    width: 40%;
  }

  @media (min-width: 491px) and (max-width: 530px) {
    // border: 5px double grey; // DEV
    width: 41%;
  }

  @media (min-width: 376px) and (max-width: 490px) {
    // border: 5px double navajowhite; // DEV
    width: 100%;

  @media (max-width: 375px) {
    // border: 5px double pink; // DEV
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (min-width: 375px) and (max-width: 768px) {
    flex-direction: column;
  }

  // border: 3px dotted hotpink; //DEV
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
  color: ${colors.color_primary08};
  list-style-type: circle;
  font-size: 17px; // DEV
  line-height: 22px;

  // TODO at 570px it gets too narrow for two side by side columns

  // border: 3px dotted hotpink; // DEV

  @media (min-width: 376px) and (max-width: 1199px) {
    // border: 3px dotted green; // DEV
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 375px) {
    // border: 3px dotted skyblue; // DEV
    font-size: 14px;
    line-height: 18px;
  }
`;

function ExtraInfo() {
  return (
    <ExtraInfoOutterContainer>
      <ExtraInfoContainer>
        <LeftBox>
          <ListContainer>
            <List>
              <ListItem>Construire site responsive en HTML5 et CSS3</ListItem>
              <ListItem>
                Clarifier & synthétiser avec Styled-Components ou Scss
              </ListItem>
              <ListItem>
                Rendre interactif et dynamique avec JS et/ou ReactJS
              </ListItem>
              <ListItem>Créer des composants React réutilisables</ListItem>
              <ListItem>
                Lists & keys, props, state, event handlers, conditional
                rendering, etc...
              </ListItem>
              <ListItem>
                Construire une RESTful API en lien avec une database
              </ListItem>
              <ListItem>Mettre en place le CRUD</ListItem>
              <ListItem>Sécuriser avec Mongoose, Auth.js & Multer</ListItem>
              <ListItem>
                Optimisation (accessibilité, performances & SEO)
              </ListItem>
            </List>
          </ListContainer>
        </LeftBox>

        <RightBox>
          <ListContainer>
            <List>
              <ListItem>Recueillir & analyser les besoins client</ListItem>
              <ListItem>
                Rédiger un cahier des charges, des spécifications techniques
              </ListItem>
              <ListItem>
                Réaliser un diagnostic technique & déterminer des mesures
                correctives
              </ListItem>
              <ListItem>Structurer, synthétiser des informations</ListItem>
              <ListItem>Créer une documentation technique</ListItem>
              <ListItem>Méthode AGILE / Scrum</ListItem>
            </List>
          </ListContainer>
        </RightBox>
      </ExtraInfoContainer>
    </ExtraInfoOutterContainer>
  );
}
export default ExtraInfo;
