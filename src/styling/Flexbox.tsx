import styled from "styled-components";
import { Sizes } from "./sizes";

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media only screen and (max-width: ${Sizes.maxWidthTablet}) {
    flex-direction: column;
  }
`;
