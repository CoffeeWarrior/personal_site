import { createGlobalStyle } from "styled-components";
import { colors } from ".";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    color: ${colors.space};
    font-family: "Source Code Pro", sans-serif;
    }

    h1{
        font-size: 30px;
    }

    h2{

    }

    p{
       font-size: 16px; 
    }
`;
