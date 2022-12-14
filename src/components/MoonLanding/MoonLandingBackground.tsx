import { Flowers } from "./Flowers";
import { Invis } from "./Invis";
import { StaticImg } from "./StaticImg";
import React from "react";
import background from "../../images/SpaceDrawings/IndividualImages/background.png";
import stars from "../../images/SpaceDrawings/IndividualImages/stars.png";
import flowers1 from "../../images/SpaceDrawings/IndividualImages/flowers-1.png";
import flowers2 from "../../images/SpaceDrawings/IndividualImages/flowers-2.png";
import flowers3 from "../../images/SpaceDrawings/IndividualImages/flowers-3.png";
import flowers4 from "../../images/SpaceDrawings/IndividualImages/flowers-4.png";
import flowers5 from "../../images/SpaceDrawings/IndividualImages/flowers-5.png";
import styled from "styled-components";
import { MoonLandingWrapper } from "./MoonLanding";
import { colors } from "../../styling";

export const InvisBackground = () => (
  <MoonLandingWrapper>
    <Invis src={background} />
  </MoonLandingWrapper>
);

export const MoonLandingBackground = () => (
  <>
    <Invis src={background} />
    <StaticImg src={background} zIndex={95} />
    <StaticImg src={stars} zIndex={96} />

    <Flowers src={flowers1} delay={1} />
    <Flowers src={flowers2} delay={2} />
    <Flowers src={flowers3} delay={3} />
    <Flowers src={flowers4} delay={4} />
    <Flowers src={flowers5} delay={5} />
  </>
);
