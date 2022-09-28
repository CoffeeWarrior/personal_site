import {css, keyframes} from "styled-components"

const transformBetween = css`transform: rotate(-5deg) scale(.925) translateX(3%);`

const transformFloat = css`transform: translateY(5%) rotate(-2deg);`

const floatdown = keyframes`
     0%{
        transform: translateY(-90vh) rotate(180deg);
        opacity: 1;
    }

    100%{
        ${transformBetween}
        opacity: 1;
    }
`

const float = keyframes`
        0%{
        ${transformBetween}
        opacity: 1;
    }

    100%{
        ${transformFloat}
        opacity: 1;
    }
`
export const Floating = (delayFirst:number, durationFirst:number, durationSecond:number) => {
    const delaySecond = durationFirst + delayFirst;
    return css`
    opacity:0;

    animation: ${floatdown}, ${float};
    animation-duration: ${durationFirst + "s"}, ${durationSecond + "s"};
    animation-delay: ${delayFirst + "s"}, ${delaySecond + "s"};
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-direction: alternate;
`};