import Styled from "styled-components";

export const Container = Styled.div`
font-family: "Geometric 415", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  min-height: ${(props) => 100 * props.theme.viewportHeightPercent}px;
  overflow-x: hidden;
  align-items: center;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;