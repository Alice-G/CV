import React, { useState } from "react";
import styled from "styled-components";

const ToggleListButton = styled.div`
  margin: 75px; // DEV

  background-color: #f0ecfc;
  background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);

  width: 150px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;

  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1); // TEST global style??

  // HINT

  //     padding: 10px 25px;
  //   font-family: "Lato", sans-serif;
  //     font-weight: 500;

  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;

  // button outline bottom(after)-right(before)
  :before,
  :after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #c797eb;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  :before {
    height: 0%;
    width: 2px;
  }
  :after {
    width: 0%;
    height: 2px;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }

  :hover {
    color: blue; // ????
    background: transparent;
  }

  // HINT

  //       padding: 0;
  //   border: none; // TODO add that maybe?

  //   border: 3px dotted blue; // DEV
`;

const Text = styled.div`
  color: #fff;
  text-align: center;

  height: 100%;
  line-height: 40px;

  //   border: 2px dashed orange;

  // HINT

  :hover {
    color: #c797eb; // HINT THIS IS THE COLOR OF THE TEXT
  }

  // button outline left(before)-top(after)
  :before,
  :after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #c797eb;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }

  :before {
    width: 2px;
    height: 0%;
  }
  :after {
    height: 2px;
    width: 0%;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }

  // HINT
`;

const List = styled.div`
  //   display: flex;

  padding: 10px;
  border: 3px dotted deeppink;
`;

const ListItem = styled.div`
  //   display: flex;

  border: 3px dashed cadetblue;
`;

const StarBurstList = () => {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <ToggleListButton onClick={() => setToggle(!toggle)}>
        <Text>Skills</Text>
      </ToggleListButton>
      {toggle && (
        <List>
          <ListItem>An item</ListItem>
          <ListItem>A second item</ListItem>
          <ListItem>A third item</ListItem>
          <ListItem>A fourth item</ListItem>
          <ListItem>And a fifth one</ListItem>
        </List>
      )}
    </>
  );
};
export default StarBurstList;
