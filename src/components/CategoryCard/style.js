import styled from "styled-components";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 420px;
  min-height: 350px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
`;

export const Img = styled.img`
  width: 100%;
  /* max-height: 220px;
  min-height: 200px; */
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

export const Icons = styled.div``;

Icons.Bath = styled(bath)``;
Icons.Bed = styled(bed)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  border-radius: 50%;
  background: #f6f8f9;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;
Icons.Resize = styled(resize)``;
