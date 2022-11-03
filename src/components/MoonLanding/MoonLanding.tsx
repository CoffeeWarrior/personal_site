import { MoonLandingBackground } from "./MoonLandingBackground";

import moon from "../../images/SpaceDrawings/IndividualImages/moon.png";
import laptop from "../../images/SpaceDrawings/IndividualImages/laptop.png";
import lucas from "../../images/SpaceDrawings/IndividualImages/lucas.png";
import { FloatingImg } from "./FloatingImg";

import styled from "styled-components";
import React from "react";
import { StaticImg } from "./StaticImg";
import { Sizes } from "../../styling";

export const MoonLandingWrapper = styled.div`
  position: relative;
  flex: 1;
  @media only screen and (max-width: ${Sizes.maxWidthTablet}) {
    width: 85%;
    margin-left: 7.5%;
  }
`;

const lucasDelay = 0.3;
const lucasFloatDown = 6;
const lucasRate = 1.5;

export const MoonLanding: React.FC = () => {
  return (
    <MoonLandingWrapper>
      <MoonLandingBackground />

      <StaticImg src={moon} zIndex={100} />
      <FloatingImg
        src={lucas}
        delayFirst={lucasDelay}
        durationFirst={lucasFloatDown}
        durationSecond={lucasRate}
      />
      <FloatingImg
        src={laptop}
        delayFirst={lucasDelay - 0.1}
        durationFirst={lucasFloatDown}
        durationSecond={lucasRate}
      />
    </MoonLandingWrapper>
  );
};
