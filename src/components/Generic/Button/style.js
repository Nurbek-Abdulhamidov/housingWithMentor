import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffff",
        color: "#ffff",
      };
    case "light":
      return {
        background: "transparent",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF  ",
        border: "none",
        color: "#ffff",
      };
    default:
      return {
        background: "#0061DF  ",
        border: "none",
        color: "#ffff",
      };
  }
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  cursor: pointer;
  ${getType}
  :active {
    opacity: 0.7;
  }
`;
