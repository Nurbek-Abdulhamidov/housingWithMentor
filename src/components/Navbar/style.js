import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPrimary);
  color: white;
  padding: var(--padding);
  height: 64px;
  max-width: 1440px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => (logo ? "pointer" : "")};

  .active {
    color: #54ff00;
  }
`;

export const Logo = styled(logo)`
  width: 35px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;
