import { createGlobalStyle } from "styled-components";
import colors from "../style/colors";

// @import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500&display=swap');

const StyledGlobalStyle = createGlobalStyle`

    * {
   
      text-decoration: none;
      font-weight: 500;
      letter-spacing: 0em;
    
      list-style-type: none;
      color: ${colors.dark}; 
    
      margin: 0;
    }

    // styling margins of pages
    section {
      // smaller screens // from FIGMA
      @media (max-width: 375px) {
        margin: 0;
      } 
      
      // medium screens
      @media (min-width: 375px) and (max-width: 768px)  {
        margin: 0  5%;
      }
      
      // medium large
      @media (min-width:  769px) and (max-width: 1199px) {
        margin: 0  100px;
      }

      // medium large
      @media (min-width: 1200px) and (max-width: 1439px) {
        margin: 0  100px;
      } 

      // for-desktop-up // from FIGMA
      @media (min-width: 1440px) { 
        margin: 0  100px;
      }
    }

    body {
      font-family: Montserrat, Arial, sans-serif;
      font-size: 18px; // TODO TODO TODO
      background-color: ${colors.backgroundDark};
      max-width: 1440px;


      // *************************************
      // COLOR SHIFTING BACKGROUND
      // *************************************
  
      // other choices:#322015, #56453E / #232526 #414345 / #736D78 #322537

      background: linear-gradient(284deg, #0f0c29, #302b63, #24243e);
      background-size: 400% 400%;
    
      -webkit-animation: AnimationName 20s ease infinite; // DECIDE if longer
      -moz-animation: AnimationName 20s ease infinite;
      animation: AnimationName 20s ease infinite;
    
      @-webkit-keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @-moz-keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      // for-desktop-up 
        @media (min-width: 1440px) {
          margin: auto;
        }
      
    }

    // h3 {
    //   font-size: 45px;
    // }
`;

export default StyledGlobalStyle;
