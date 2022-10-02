import styled from "styled-components";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

export const Container = styled.div`
  width: 380px;
  height: 429px;
  margin: 100px;

  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;

export const Img = styled.img`
  width: 100%;
  max-height: 220px;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding-top: 24px;
  padding: 16px 20px;
  background-color: #ffff;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
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

export const Divider = styled.div`
  background-color: #e6e9ec;
  height: 1px;
  width: 100%;
`;
