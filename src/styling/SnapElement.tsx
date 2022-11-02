import styled from "styled-components";

export const SnapElementContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SnapElement = styled(SnapElementContainer)`
  scroll-snap-align: start;
`;
