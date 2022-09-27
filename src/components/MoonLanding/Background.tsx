import React from "react";
import {AbsPositionCenter} from "../../styling"

type BackgroundProps = {src: string}

export const Background:React.FC<BackgroundProps> = ({src}) => {
    return <AbsPositionCenter src={src}/>
}