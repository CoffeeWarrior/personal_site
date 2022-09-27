

import React from "react";
import styled from "styled-components";
import {AbsPositionCenter} from "../../styling"

type StarsProps = {src: string}

export const Stars:React.FC<StarsProps> = ({src}) => {
    const Stars = styled(AbsPositionCenter)`
    z-index: 1;
    `;

    return <Stars src={src}/>
}