import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: fit-content;
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 566px;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;


