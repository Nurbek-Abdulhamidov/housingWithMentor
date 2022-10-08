import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email 1.svg";
import { ReactComponent as house } from "../../assets/icons/house 1.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/maps.svg";

export const Container = styled.div`
  height: 417px;
  display: flex;
  margin: auto;
  position: relative;
  width: 100%;
  padding: 48px 0px;
  background: #0d263b;
  justify-content: space-around;
  margin-top: 96px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
  margin-bottom: 32px;
`;

Content.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export const Icons = styled.div``;
Icons.Email = styled(email)`
  margin-right: 21px;
  width: 54px;
  & path {
    fill: white;
  }
`;
Icons.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: white;
  }
`;
Icons.House = styled(house)`
  margin-bottom: 24px;
`;
Icons.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
