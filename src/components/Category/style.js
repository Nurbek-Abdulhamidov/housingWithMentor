import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrowTop.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
`;

export const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  padding: 18px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  display: flex;
  color: white;
`;
