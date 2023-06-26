// BLOCK FIXME LEG BUG TODO HINT DEL TEST ASK WEIRD CHECK DEV VALIDATOR DECIDE
// XXXX LIGHTYELLOW TAUPE GREYTAN BROWN DEV zflqfkn etjsxjrxj

// dotted - dashed - solid - double - groove - ridge - inset - outset

// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK
// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK

// border: 3px dotted blue; // DEV

// @media (min-width: 769px) and (max-width: 1199px) {

//   border: 3px dotted green; // DEV
// }

// @media (min-width: 375px) and (max-width: 768px) {

//   border: 3px dotted orange; // DEV
// }

// @media (max-width: 375px) {

//   border: 3px dotted skyblue; // DEV
// }

//

// color: blue; // DEV

// @media (min-width: 769px) and (max-width: 1199px) {
//   color: green; // DEV

// }

// @media (min-width: 375px) and (max-width: 768px) {
//   color: orange; // DEV

// }

// @media (max-width: 375px) {
//   color: skyblue; // DEV

// }

// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK
// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK

// color: ${colors.color_primary08};

// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK
// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK

// *************************************
// ARCHITECTURE
// *************************************

// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK
// BLOCK BLOCK BLOCK BLOCK BLOCK BLOCK

// TODO for titles
// // THIS
// font-family: "IM Fell DW Pica", serif;
// font-style: italic;

// import styled from "styled-components";

// const XXXXX1 = styled.div`
//
//   border: 3px dotted saddlebrown;
// `;

// const XXXXX2 = styled.div`
//
//   border: 3px dotted #cadetblue;
// `;

// BLOCK BLOCK

// const rotate = keyframes`
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const InfiniteRotate = styled.div`
//   height: 80px;
//   width: 80px;
//   border: 6px dashed hotpink;

//   animation: ${rotate} 4s linear infinite;
// `;

// BLOCK BLOCK

import React, { Component } from "react";

//react bootstrap components
// import CardDeck from "react-bootstrap/CardDeck";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

//scss
// import style from "./styles.module.scss";

//data for post
// import data from "./data.json";
import education from "../data/education.json";

export default class DefaultPost extends Component {
  render() {
    return (
      <>
        <div fluid={true}>
          <div>
            <div>
              {education.map((listData) => {
                console.log(listData);
                return (
                  <div key={listData.id}>
                    {/* <Card.Img variant="top" src={postData.image} /> */}
                    <div>
                      <div>{listData.institution}</div>
                      <div>{listData.tags + " "}</div>

                      <div>{listData.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
