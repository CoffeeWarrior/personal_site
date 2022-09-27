import {css, keyframes} from "styled-components"

const twinkleAnimation = keyframes`
    0%{
        opacity: 1;
    }
    
    100%{
        opacity: .5;
    }
`
export const twinkle = (delay:number) => css`
animation: ${twinkleAnimation};
animation-duration: 2s;
animation-delay: ${delay + "s"};
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
animation-direction: alternate;
`;
