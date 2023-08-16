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
  padding: 5px; // ?? DEV
  width: 100%;
  display: flex;
  flex-direction: column;

  // border: 2px dotted cadetblue; // DEV
`;

const ExtraInfoContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-evenly;
  gap: 10px;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }

  // border: 3px dotted yellow; //DEV
`;

const SectionTitle = styled.h2`
  font-family: ${fonts.font_sectiontitle}, serif;
  font-style: italic;
  font-size: 28px; // DEV

  color: ${colors.color_sectiontitle}; // DEV

  // border: 3px dotted brown; // DEV

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    width: 40%;
  }

  // border: 5px double pink; //DEV
`;

const SoftwaresContainer = styled.div`
  display: flex;
  flex-direction: column;

  // border: 5px double green; //DEV
`;

const Title = styled.h3`
  color: ${colors.color_primary08};

  padding-bottom: 5px;

  width: 100%;

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 375px) {
    font-size: 17px;
  }

  // border: 3px dotted saddlebrown; //DEV
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
  // font-size: 18px; // DEV DEL
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

  // border: 3px dotted brown; // DEV
`;

function ExtraInfo() {
  return (
    <ExtraInfoOutterContainer>
      <SectionTitle>Détails</SectionTitle>

      <ExtraInfoContainer>
        <LanguageContainer>
          <Title>Langages, Frameworks & Libraries</Title>
          <ListContainer>
            <List>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>Sass</ListItem>
              <ListItem>JavaScript</ListItem>
            </List>

            <List>
              <ListItem>Styled Components</ListItem>
              <ListItem>Node.js</ListItem>
              <ListItem>React.js</ListItem>
              <ListItem>Bootstrap</ListItem>
            </List>
          </ListContainer>
        </LanguageContainer>

        <SoftwaresContainer>
          <Title>Softwares, APIs and Services</Title>
          <ListContainer>
            <List>
              <ListItem>LightHouse</ListItem>
              <ListItem>WebAIM WAVE</ListItem>
              <ListItem>Postman</ListItem>
              <ListItem>MongoDB  - Atlas</ListItem>
              <ListItem>VSCode - Sublime Text</ListItem>
            </List>

            <List>
              <ListItem>Code Validators</ListItem>
              <ListItem>Codepen, jsbin, sandboxes</ListItem>
              <ListItem>Git-GitHub</ListItem>
              <ListItem>Redmine</ListItem>
              <ListItem>Salesforce (admin)</ListItem>
            </List>
          </ListContainer>
        </SoftwaresContainer>
      </ExtraInfoContainer>
    </ExtraInfoOutterContainer>
  );
}
export default ExtraInfo;
