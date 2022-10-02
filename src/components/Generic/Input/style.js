import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {};
    case "light":
      return {};
    case "primary":
      return {};
    default:
      return {};
  }
};

export const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  min-width: 120px;
  font-size: 14px;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  /* ${getType} */
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

export const Icon = styled.div`
  position: absolute;
  left: 10px;
`;
