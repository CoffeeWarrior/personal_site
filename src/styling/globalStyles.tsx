import { createGlobalStyle } from "styled-components";
import { colors } from ".";

const Sizes = {
  maxWidthTablet: "768px",
  minWidthTablet: "769px",
  maxWidthMobileL: "426px",
};

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    color: ${colors.space};
    font-family: "Source Code Pro", sans-serif;
    min-width: 0; min-height: 0;

    }

    html, body{
        position: fixed;
        overflow: hidden;
    }

    h1{
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 30px;
        @media only screen and (min-width: ${Sizes.minWidthTablet}){
            letter-spacing: 3px;
            font-weight: 500;
            font-size: 50px;
        }
    }

    h2{
        font-size: 20px;
        @media only screen and (min-width: ${Sizes.minWidthTablet}){
            font-size: 25px;
            font-weight: 400;
        }
        
    }

    p{
        font-size: 14px;
        line-height: 1.35;
        @media only screen and (min-width: ${Sizes.minWidthTablet}){
            font-size: 18px; 
            letter-spacing: 1px;
            
        }
    }

    .grabbable {
        flex: auto !important
    }
`;
