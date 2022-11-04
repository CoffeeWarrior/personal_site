import styled from "styled-components";
import { Flexbox } from "./Flexbox";

export const SnapContainer = styled(Flexbox)`
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const SnapElement = styled(SnapContainer)`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
`;
