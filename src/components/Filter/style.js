import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 1440px;
  margin: auto ;
`;

export const Icons = styled.div``;
Icons.Houses = styled(houses)``;
Icons.Setting = styled(setting)`
  margin-right: 10px;
`;
Icons.Search = styled(search)`
  margin-right: 10px;
`;

export const MenuWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 5px;
`;

export const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
