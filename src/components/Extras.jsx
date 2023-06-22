// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE
// dotted - dashed - solid - double - groove - ridge - inset - outset

// DECIDE call it Bonus?

import styled from "styled-components";
import colors from "../style/colors";
// import Chart from "./Chart";
// import Hobbies from "./Hobbies";
// import Education from "./Education";
// import Experience from "./Experience";
// import Flat from "./Education copy";

const ExtraInfoOutterContainer = styled.div`
  padding: 5px; // ?? DEV
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ExtraInfoContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-evenly;
  // gap: 10px;

  // border: 3px dotted yellow; //DEV
`;

const SectionTitle = styled.h3`
  font-family: "IM Fell DW Pica", serif;
  font-style: italic;

  font-size: 28px; // DEV

  // border: 3px dotted brown; // DEV

  color: ${colors.color_sectiontitle}; // DEV
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;

  // border: 5px double pink; //DEV
`;

const SoftwaresContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;

  // border: 5px double green; //DEV
`;

const Title = styled.h2`
  font-size: 15px; // TODO
  color: rgba(255, 255, 255, 0.8); // TODO

  // border: 3px dotted saddlebrown; //DEV
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

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
  font-size: 13px; // DEV
  color: rgba(255, 255, 255, 0.8); // TODO // DEV
  list-style-type: circle;

  // border: 3px dotted brown; // DEV
`;

// const XXXXX1 = styled.div`

//   border: 3px dotted saddlebrown;
// `;

// const XXXXX2 = styled.div`

//   border: 3px dotted #cadetblue;
// `;

function ExtraInfo() {
  return (
    <ExtraInfoOutterContainer>
      <SectionTitle>Les Petits Plus</SectionTitle>

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
          <Title>Softwares, APIs and Services //CHECK///</Title>
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
              <ListItem>Git-GitHub</ListItem>
              <ListItem>Codepen, others XXXX TODO</ListItem>
              <ListItem>Redmine</ListItem>
              <ListItem>Salesforce (admin)</ListItem>
              <ListItem>Bureautique</ListItem>
            </List>
          </ListContainer>
        </SoftwaresContainer>
      </ExtraInfoContainer>
    </ExtraInfoOutterContainer>
  );
}
export default ExtraInfo;
