import background from "../../images/SpaceDrawings/IndividualImages/background.png";
import stars from "../../images/SpaceDrawings/IndividualImages/stars.png";
import flowers1 from "../../images/SpaceDrawings/IndividualImages/flowers-1.png";
import flowers2 from "../../images/SpaceDrawings/IndividualImages/flowers-2.png";
import flowers3 from "../../images/SpaceDrawings/IndividualImages/flowers-3.png";
import flowers4 from "../../images/SpaceDrawings/IndividualImages/flowers-4.png";
import flowers5 from "../../images/SpaceDrawings/IndividualImages/flowers-5.png";
import moon from "../../images/SpaceDrawings/IndividualImages/moon.png";
import laptop from "../../images/SpaceDrawings/IndividualImages/laptop.png";
import lucas from "../../images/SpaceDrawings/IndividualImages/lucas.png";
import styled from "styled-components";
import { Flowers } from "./Flowers";
import { Invis } from "./Invis";
import { StaticImg } from "./StaticImg";
import { FloatingImg, floatingImg } from "./FloatingImg";

const MoonLandingWrapper = styled.div`
  position: relative;
  flex: 10;
`;

const lucasDelay = 1.2;
const lucasFloatDown = 6;
const lucasRate = 1.5;

const MoonLanding = () => {
  return (
    <MoonLandingWrapper>
      <Invis src={background} />
      <StaticImg src={background} zIndex={0} />
      <StaticImg src={stars} zIndex={1} />
      <StaticImg src={moon} zIndex={2} />

      <Flowers src={flowers1} delay={1} />
      <Flowers src={flowers2} delay={2} />
      <Flowers src={flowers3} delay={3} />
      <Flowers src={flowers4} delay={4} />
      <Flowers src={flowers5} delay={5} />

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

export default MoonLanding;
