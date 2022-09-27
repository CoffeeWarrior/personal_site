import React from "react";
import styled from "styled-components";
import {AbsPositionCenter} from "../../styling"

type moonProps = {src: string}

export const Moon:React.FC<moonProps> = ({src}) => {
    const Moon = styled(AbsPositionCenter)`
    z-index: 3;
    `;

    return <Moon src={src}/>
}