import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/discord.svg";
import { ReactComponent as house } from "../../assets/icons/house 1.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/maps.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  position: relative;
  width: 100%;
  padding: 48px 0;
  background: #f5f7fc;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 230px;
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  padding: 0px 130px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Icons = styled.div``;
Icons.Email = styled(email)`
  margin-bottom: 24px;
`;
Icons.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icons.House = styled(house)`
  margin-bottom: 24px;
`;
Icons.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
